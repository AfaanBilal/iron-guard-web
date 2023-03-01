/**
 * Iron Guard Web
 *
 * @author Afaan Bilal
 * @link   https://afaan.dev
 * @link   https://github.com/AfaanBilal/iron-guard-web
 */

import { Component, For } from "solid-js";

const categories = [
    { uuid: "uuid-A", name: "Category A", description: "This is a category description" },
    { uuid: "uuid-B", name: "Category B", description: "This is a category description" },
    { uuid: "uuid-C", name: "Category C", description: "This is a category description" },
    { uuid: "uuid-D", name: "Category D", description: "This is a category description" },
    { uuid: "uuid-E", name: "Category E", description: "This is a category description" },
];

const items = [
    { uuid: "uuid-A", name: "Item A", description: "This is an item description", quantity: 42 },
    { uuid: "uuid-B", name: "Item B", description: "This is an item description", quantity: 42 },
    { uuid: "uuid-C", name: "Item C", description: "This is an item description", quantity: 42 },
    { uuid: "uuid-D", name: "Item D", description: "This is an item description", quantity: 42 },
    { uuid: "uuid-E", name: "Item E", description: "This is an item description", quantity: 42 },
];

const Inventory: Component = () => {
    return (
        <div class="flex-grow flex flex-col px-2">
            <h1 class="px-4 py-2 my-4 text-3xl border-b border-b-slate-700">Inventory Browser</h1>
            <div class="flex-grow">
                <div class="flex flex-col p-2 mb-4">
                    <h2 class="text-2xl py-2 pl-4 rounded bg-gray-800 border-b border-b-slate-800">Categories</h2>
                    <div class="flex flex-col mt-2">
                        <For each={categories}>
                            {c =>
                                <div class="px-4 py-4 flex justify-between items-center gap-4 border-b border-b-slate-600 cursor-pointer hover:bg-slate-700">
                                    <div class="text-xl">
                                        📁
                                    </div>
                                    <div class="text-slate-300 text-lg">
                                        {c.name}
                                    </div>
                                    <div class="text-slate-400 flex-grow text-sm">
                                        {c.description}
                                    </div>
                                </div>
                            }
                        </For>
                    </div>
                </div>
                <div class="flex flex-col p-2">
                    <h2 class="text-2xl py-2 pl-4 rounded bg-gray-800 border-b border-b-slate-800">Items</h2>
                    <div class="flex flex-col mt-2">
                        <For each={items}>
                            {i =>
                                <div class="px-4 py-2 flex justify-between items-center gap-4 border-b border-b-slate-600 cursor-pointer hover:bg-slate-700">
                                    <div class="text-xl">
                                        📦
                                    </div>
                                    <div class="text-slate-300 text-lg">
                                        {i.name}
                                    </div>
                                    <div class="text-slate-400 flex-grow text-sm">
                                        {i.description}
                                    </div>
                                    <div class="p-2 bg-slate-700 rounded">
                                        {i.quantity}
                                    </div>
                                </div>
                            }
                        </For>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Inventory;
