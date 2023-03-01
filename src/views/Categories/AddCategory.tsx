/**
 * Iron Guard Web
 *
 * @author Afaan Bilal
 * @link   https://afaan.dev
 * @link   https://github.com/AfaanBilal/iron-guard-web
 */

import { createSignal, type Component } from "solid-js";
import Input from "../../components/Input";
import Select from "../../components/Select";

const AddCategory: Component = () => {
    const [name, setName] = createSignal("");
    const [description, setDescription] = createSignal("");
    const [category, setCategory] = createSignal("");

    return (
        <div class="flex-grow flex flex-col px-2">
            <h1 class="text-5xl p-4 mb-4">Add Category</h1>
            <div class="flex-grow p-4 bg-gray-600">
                <div class="flex items-center mb-4">
                    <div class="px-2 text-slate-800 text-2xl w-64">Name</div>
                    <div class="px-2"><Input value={name()} onInput={e => setName(e.currentTarget.value)} /></div>
                </div>
                <div class="flex items-center mb-4">
                    <div class="px-2 text-slate-800 text-2xl w-64">Description</div>
                    <div class="px-2"><Input value={description()} onInput={e => setDescription(e.currentTarget.value)} /></div>
                </div>
                <div class="flex items-center mb-4">
                    <div class="px-2 text-slate-800 text-2xl w-64">Parent Category</div>
                    <div class="px-2">
                        <Select
                            label="Select a category"
                            options={[{ value: "a", label: "Category A" }, { value: "b", label: "Category B" }, { value: "c", label: "Category C" }]}
                            selected={category()}
                            onSelect={e => setCategory(e.currentTarget.value)}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddCategory;
