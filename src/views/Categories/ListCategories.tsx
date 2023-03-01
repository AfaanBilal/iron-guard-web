/**
 * Iron Guard Web
 *
 * @author Afaan Bilal
 * @link   https://afaan.dev
 * @link   https://github.com/AfaanBilal/iron-guard-web
 */

import { type Component, For } from "solid-js";

const categories = [
    { name: "Monitor", description: "A monitor is a window into the workings of electricity.", itemCount: 42 },
    { name: "Monitor", description: "A monitor is a window into the workings of electricity.", itemCount: 42 },
    { name: "Monitor", description: "A monitor is a window into the workings of electricity.", itemCount: 42 },
    { name: "Monitor", description: "A monitor is a window into the workings of electricity.", itemCount: 42 },
    { name: "Monitor", description: "A monitor is a window into the workings of electricity.", itemCount: 42 },
    { name: "Monitor", description: "A monitor is a window into the workings of electricity.", itemCount: 42 },
    { name: "Monitor", description: "A monitor is a window into the workings of electricity.", itemCount: 42 },
    { name: "Monitor", description: "A monitor is a window into the workings of electricity.", itemCount: 42 },
    { name: "Monitor", description: "A monitor is a window into the workings of electricity.", itemCount: 42 },
    { name: "Monitor", description: "A monitor is a window into the workings of electricity.", itemCount: 42 },
    { name: "Monitor", description: "A monitor is a window into the workings of electricity.", itemCount: 42 },
    { name: "Monitor", description: "A monitor is a window into the workings of electricity.", itemCount: 42 },
    { name: "Monitor", description: "A monitor is a window into the workings of electricity.", itemCount: 42 },
    { name: "Monitor", description: "A monitor is a window into the workings of electricity.", itemCount: 42 },
];

const ListCategories: Component = () => {
    return (
        <div class="flex-grow flex flex-col px-2">
            <h1 class="text-5xl p-4 mb-4">Categories</h1>
            <div class="overflow-x-auto w-full">
                <table class="w-full whitespace-nowrap rounded-lg divide-y divide-gray-300 overflow-hidden">
                    <thead class="bg-gray-900">
                        <tr class="text-white text-left">
                            <th class="font-semibold text-sm uppercase px-6 py-4">Name</th>
                            <th class="font-semibold text-sm uppercase px-6 py-4">Description</th>
                            <th class="font-semibold text-sm uppercase px-6 py-4">Item Count</th>
                            <th class="font-semibold text-sm uppercase px-6 py-4">Actions</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-600 bg-slate-800">
                        <For each={categories}>
                            {c =>
                                <tr>
                                    <td class="px-6 py-4">{c.name}</td>
                                    <td class="px-6 py-4">{c.description}</td>
                                    <td class="px-6 py-4">{c.itemCount}</td>
                                    <td class="px-6 py-4">View / Edit / Delete</td>
                                </tr>
                            }
                        </For>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ListCategories;
