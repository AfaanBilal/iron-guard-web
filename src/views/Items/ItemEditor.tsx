/**
 * Iron Guard Web
 *
 * @author Afaan Bilal
 * @link   https://afaan.dev
 * @link   https://github.com/AfaanBilal/iron-guard-web
 */

import { useParams } from "@solidjs/router";
import { createEffect, createResource, createSignal, Show, type Component } from "solid-js";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Select from "../../components/Select";
import { addItem, getItem, Status, updateItem } from "../../definitions/api";
import Item from "../../definitions/types/Item";
import { categoryList } from "../Categories/CategoryList";

const AddItem: Component = () => {
    const params = useParams();

    const [name, setName] = createSignal("");
    const [description, setDescription] = createSignal("");
    const [quantity, setQuantity] = createSignal(0);
    const [category, setCategory] = createSignal("");
    const [error, setError] = createSignal("");

    const [uuid, _] = createSignal(params.uuid || "");
    const [data] = createResource(() => params.uuid || null, getItem);

    createEffect(() => {
        if (data().uuid) {
            const i = data() as Item;
            setName(i.name);
            setDescription(i.description);
            setQuantity(i.quantity);
            setCategory(i.category?.uuid || "");
        }
    });

    const save = async () => {
        if (name().trim() === "") {
            setError("Please fill in a name.");
            return;
        }

        let r = null;
        if (uuid() === "") {
            r = await addItem(name(), description(), quantity(), category());
        } else {
            r = await updateItem(uuid(), name(), description(), quantity(), category());
        }

        if (r.status === Status.Success) {
            window.history.back();
        } else {
            setError(r.message);
        }
    };

    return (
        <div class="flex-grow flex flex-col px-2">
            <Show when={uuid() === "" || !data.loading}>
                <h1 class="px-4 py-2 my-4 text-3xl border-b border-b-slate-700">
                    {uuid() === "" ? "Add" : "Edit"} Item
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
                        <div class="px-2 text-slate-300 text-xl w-64">Quantity</div>
                        <div class="px-2"><Input type="number" min={0} value={quantity()} onInput={e => setQuantity(parseInt(e.currentTarget.value))} /></div>
                    </div>
                    <div class="flex items-center py-2">
                        <div class="px-2 text-slate-300 text-xl w-64">Category</div>
                        <div class="px-2">
                            <Select
                                label="Select a category"
                                options={categoryList()?.results.map(c => ({ value: c.uuid, label: c.name })) || []}
                                selected={category()}
                                onChange={e => setCategory(e.currentTarget.value)}
                            />
                        </div>
                    </div>
                    <div class="flex items-center px-2 py-4 mt-4 border-t border-t-slate-800 gap-2">
                        <Button label="Save" onClick={save} />
                        <Button label="Cancel" onClick={() => window.history.back()} />
                    </div>
                </div>
            </Show>
        </div>
    );
};

export default AddItem;
