/**
 * Iron Guard Web
 *
 * @author Afaan Bilal
 * @link   https://afaan.dev
 * @link   https://github.com/AfaanBilal/iron-guard-web
 */

import { type Component, For, createResource, Show } from "solid-js";
import { A, useNavigate } from "@solidjs/router";
import Button from "../../components/Button";
import Category from "../../definitions/types/Category";
import Loading from "../../components/Loading";
import NoDataAvailable from "../../components/NoDataAvailable";
import ResultList from "../../definitions/types/ResultList";
import { deleteCategory, getCategoryList } from "../../api/category";

export const [categoryList, { refetch }] = createResource<ResultList<Category>>(getCategoryList);
export const remove = (uuid: string, navigate: ReturnType<typeof useNavigate>) => {
    if (!window.confirm("Are you sure?")) return;

    deleteCategory(uuid);
    refetch();
    setTimeout(() => navigate("/categories", { replace: true }), 0);
};

const CategoryList: Component = () => {
    const navigate = useNavigate();

    return (
        <div class="flex-grow flex flex-col px-2">
            <Show when={!categoryList.loading} fallback={<Loading />}>
                <div class="text-4xl p-4 mb-4 flex items-center gap-4">
                    Categories
                    <A href="/categories/add"><Button label="Add" onClick={() => { }} /></A>
                </div>
                <div class="overflow-x-auto w-full">
                    <table class="w-full whitespace-nowrap rounded-lg divide-y divide-gray-300 overflow-hidden">
                        <thead class="bg-gray-900">
                            <tr class="text-white text-left">
                                <th class="font-semibold text-sm uppercase px-6 py-4">Name</th>
                                <th class="font-semibold text-sm uppercase px-6 py-4">Description</th>
                                <th class="font-semibold text-sm uppercase px-6 py-4">Actions</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-600 bg-slate-800">
                            <For
                                each={categoryList()?.results}
                                fallback={<NoDataAvailable col={3} />}>
                                {c =>
                                    <tr>
                                        <td class="px-6 py-4">{c.name}</td>
                                        <td class="px-6 py-4">{c.description}</td>
                                        <td class="px-6 py-4 flex gap-2">
                                            <A href={`/categories/${c.uuid}`}><Button label="Edit" /></A>
                                            <Button kind="danger" label="Delete" onClick={() => remove(c.uuid, navigate)} />
                                        </td>
                                    </tr>
                                }
                            </For>
                        </tbody>
                    </table>
                </div>
            </Show>
        </div>
    );
};

export default CategoryList;
