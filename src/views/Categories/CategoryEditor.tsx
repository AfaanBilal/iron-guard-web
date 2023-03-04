/**
 * Iron Guard Web
 *
 * @author Afaan Bilal
 * @link   https://afaan.dev
 * @link   https://github.com/AfaanBilal/iron-guard-web
 */

import { useNavigate, useParams } from "@solidjs/router";
import { createEffect, createResource, createSignal, Show, type Component } from "solid-js";
import { Status } from "../../api/api";
import { addCategory, getCategory, updateCategory } from "../../api/category";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Select from "../../components/Select";
import Category from "../../definitions/types/Category";
import { categoryList, refetch, remove } from "./CategoryList";

const AddCategory: Component = () => {
    const params = useParams();
    const navigate = useNavigate();

    const [name, setName] = createSignal("");
    const [description, setDescription] = createSignal("");
    const [parentCategory, setParentCategory] = createSignal("");
    const [error, setError] = createSignal("");

    const [uuid, _] = createSignal(params.uuid || "");
    const [data] = createResource(() => params.uuid || null, getCategory);

    createEffect(() => {
        if (data()) {
            const c = data() as Category;
            setName(c.name);
            setDescription(c.description);
            setParentCategory(c.parent?.uuid || "");
        }
    });

    const save = async () => {
        if (name().trim() === "") {
            setError("Please fill in a name.");
            return;
        }

        let r = null;
        if (uuid() === "") {
            r = await addCategory(name(), description(), parentCategory());
        } else {
            r = await updateCategory(uuid(), name(), description(), parentCategory());
        }

        if (r.status === Status.Success) {
            refetch();
            navigate("/categories");
        } else {
            setError(r.message);
        }
    };

    return (
        <div class="flex-grow flex flex-col px-2">
            <Show when={uuid() === "" || !data.loading}>
                <h1 class="px-4 py-2 my-4 text-3xl border-b border-b-slate-700">
                    {uuid() === "" ? "Add" : "Edit"} Category
                    <Show when={error() !== ""}>
                        <span class="ml-4 px-4 py-2 rounded text-xl bg-red-900 text-gray-300">{error()}</span>
                    </Show>
                </h1>
                <div class="flex-grow p-4 bg-gray-700">
                    <div class="flex items-center py-2">
                        <div class="px-2 text-slate-300 text-xl w-64">Name</div>
                        <div class="px-2"><Input value={name()} onInput={e => setName(e.currentTarget.value)} /></div>
                    </div>
                    <div class="flex items-center py-2">
                        <div class="px-2 text-slate-300 text-xl w-64">Description</div>
                        <div class="px-2"><Input value={description()} onInput={e => setDescription(e.currentTarget.value)} /></div>
                    </div>
                    <div class="flex items-center py-2">
                        <div class="px-2 text-slate-300 text-xl w-64">Parent Category</div>
                        <div class="px-2">
                            <Select
                                label="Select a category"
                                options={categoryList()?.results.map(c => ({ value: c.uuid, label: c.name })) || []}
                                selected={parentCategory()}
                                onChange={e => setParentCategory(e.currentTarget.value)}
                            />
                        </div>
                    </div>
                    <div class="flex items-center px-2 py-4 mt-4 border-t border-t-slate-800 gap-2">
                        <Button label="Save" onClick={save} />
                        <Button label="Cancel" onClick={() => window.history.back()} />
                        <div class="flex-grow"></div>
                        <Show when={uuid() !== ""}>
                            <Button kind="danger" label="Delete" onClick={() => remove(uuid(), navigate)} />
                        </Show>
                    </div>
                </div>
            </Show>
        </div>
    );
};

export default AddCategory;
