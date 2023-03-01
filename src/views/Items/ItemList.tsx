/**
 * Iron Guard Web
 *
 * @author Afaan Bilal
 * @link   https://afaan.dev
 * @link   https://github.com/AfaanBilal/iron-guard-web
 */

import { type Component, For } from "solid-js";
import { A } from "@solidjs/router";
import Button from "../../components/Button";

const items = [
    { name: "Monitor", description: "A monitor is a window into the workings of electricity.", quantity: 42 },
    { name: "Monitor", description: "A monitor is a window into the workings of electricity.", quantity: 42 },
    { name: "Monitor", description: "A monitor is a window into the workings of electricity.", quantity: 42 },
    { name: "Monitor", description: "A monitor is a window into the workings of electricity.", quantity: 42 },
    { name: "Monitor", description: "A monitor is a window into the workings of electricity.", quantity: 42 },
    { name: "Monitor", description: "A monitor is a window into the workings of electricity.", quantity: 42 },
    { name: "Monitor", description: "A monitor is a window into the workings of electricity.", quantity: 42 },
    { name: "Monitor", description: "A monitor is a window into the workings of electricity.", quantity: 42 },
    { name: "Monitor", description: "A monitor is a window into the workings of electricity.", quantity: 42 },
    { name: "Monitor", description: "A monitor is a window into the workings of electricity.", quantity: 42 },
    { name: "Monitor", description: "A monitor is a window into the workings of electricity.", quantity: 42 },
    { name: "Monitor", description: "A monitor is a window into the workings of electricity.", quantity: 42 },
    { name: "Monitor", description: "A monitor is a window into the workings of electricity.", quantity: 42 },
    { name: "Monitor", description: "A monitor is a window into the workings of electricity.", quantity: 42 },
];

const ItemList: Component = () => {
    return (
        <div class="flex-grow flex flex-col px-2">
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
                        <For each={items}>
                            {i =>
                                <tr>
                                    <td class="px-6 py-4">{i.name}</td>
                                    <td class="px-6 py-4">{i.description}</td>
                                    <td class="px-6 py-4">{i.quantity}</td>
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

export default ItemList;
