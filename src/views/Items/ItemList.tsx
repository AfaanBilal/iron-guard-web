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
import ResultList from "../../definitions/types/ResultList";
import Item from "../../definitions/types/Item";
import Loading from "../../components/Loading";
import NoDataAvailable from "../../components/NoDataAvailable";
import { deleteItem, getItemList } from "../../api/item";

export const [itemList, { refetch }] = createResource<ResultList<Item>>(getItemList);
export const remove = (uuid: string, navigate: ReturnType<typeof useNavigate>) => {
    if (!window.confirm("Are you sure?")) return;

    deleteItem(uuid);
    refetch();
    setTimeout(() => navigate("/items", { replace: true }), 0);
};

const ItemList: Component = () => {
    const navigate = useNavigate();

    return (
        <div class="flex-grow flex flex-col px-2">
            <Show when={!itemList.loading} fallback={<Loading />}>
                <div class="text-4xl p-4 mb-4 flex items-center gap-4">
                    Items
                    <A href="/items/add"><Button label="Add" onClick={() => { }} /></A>
                </div>
                <div class="overflow-x-auto w-full">
                    <table class="w-full whitespace-nowrap rounded-lg divide-y divide-gray-300 overflow-hidden">
                        <thead class="bg-gray-900">
                            <tr class="text-white text-left">
                                <th class="font-semibold text-sm uppercase px-6 py-4">Name</th>
                                <th class="font-semibold text-sm uppercase px-6 py-4">Description</th>
                                <th class="font-semibold text-sm uppercase px-6 py-4">Quantity</th>
                                <th class="font-semibold text-sm uppercase px-6 py-4">Actions</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-600 bg-slate-800">
                            <For
                                each={itemList()?.results}
                                fallback={<NoDataAvailable col={4} />}>
                                {i =>
                                    <tr>
                                        <td class="px-6 py-4">{i.name}</td>
                                        <td class="px-6 py-4">{i.description}</td>
                                        <td class="px-6 py-4">{i.quantity}</td>
                                        <td class="px-6 py-4 flex gap-2">
                                            <A href={`/items/${i.uuid}`}><Button label="Edit" /></A>
                                            <Button kind="danger" label="Delete" onClick={() => remove(i.uuid, navigate)} />
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

export default ItemList;
