/**
 * Iron Guard Web
 *
 * @author Afaan Bilal
 * @link   https://afaan.dev
 * @link   https://github.com/AfaanBilal/iron-guard-web
 */

import type { Component } from "solid-js";

const Dashboard: Component = () => {
    return (
        <div class="flex-grow flex flex-col">
            <div class="flex flex-wrap gap-4 p-4 border-b border-slate-500">
                <div class="flex-grow h-48 pb-4 grid grid-cols-2 items-end border bg-slate-700 border-slate-600 rounded-lg">
                    <div class="ml-8">
                        <img class="w-32 h-32" src={"/src/assets/icon.png"} alt="icon" />
                    </div>
                    <div class="mr-8 text-right">
                        <div class="mb-2 text-7xl text-gray-400 font-bold">Iron Guard</div>
                        <div class="text-4xl text-gray-500 uppercase">inventory management system</div>
                    </div>
                </div>
                <div class="w-64 h-48 grid items-center text-center border bg-slate-700 border-slate-600 rounded-lg">
                    <div class="text-6xl">1234 <br /><span class="text-lg uppercase">items</span></div>
                </div>
                <div class="w-64 h-48 grid items-center text-center border bg-slate-700 border-slate-600 rounded-lg">
                    <div class="text-6xl">512 <br /><span class="text-lg uppercase">categories</span></div>
                </div>
                <div class="w-64 h-48 grid items-center text-center border bg-slate-700 border-slate-600 rounded-lg">
                    <div class="text-6xl">10 <br /><span class="text-lg uppercase">users</span></div>
                </div>
            </div>
            <div class="flex flex-wrap">
                <div class="overflow-x-auto px-2">
                    <h1 class="text-3xl p-4">Latest Items</h1>
                    <table class="w-full whitespace-nowrap rounded-lg divide-y divide-gray-300 overflow-hidden">
                        <thead class="bg-gray-900">
                            <tr class="text-white text-left">
                                <th class="font-semibold text-sm uppercase px-6 py-4">Item</th>
                                <th class="font-semibold text-sm uppercase px-6 py-4">Description</th>
                                <th class="font-semibold text-sm uppercase px-6 py-4">Quantity</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-600 bg-slate-800">
                            <tr>
                                <td class="px-6 py-4">Monitor</td>
                                <td class="px-6 py-4">Monitor</td>
                                <td class="px-6 py-4">42</td>
                            </tr>
                            <tr>
                                <td class="px-6 py-4">Keyboard</td>
                                <td class="px-6 py-4">Monitor</td>
                                <td class="px-6 py-4">8</td>
                            </tr>
                            <tr>
                                <td class="px-6 py-4">Mouse</td>
                                <td class="px-6 py-4">Monitor</td>
                                <td class="px-6 py-4">8</td>
                            </tr>
                            <tr>
                                <td class="px-6 py-4">Mouse</td>
                                <td class="px-6 py-4">Monitor</td>
                                <td class="px-6 py-4">8</td>
                            </tr>
                            <tr>
                                <td class="px-6 py-4">Mouse</td>
                                <td class="px-6 py-4">Monitor</td>
                                <td class="px-6 py-4">8</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="overflow-x-auto px-2">
                    <h1 class="text-3xl p-4">Latest Categories</h1>
                    <table class="w-full whitespace-nowrap rounded-lg divide-y divide-gray-300 overflow-hidden">
                        <thead class="bg-gray-900">
                            <tr class="text-white text-left">
                                <th class="font-semibold text-sm uppercase px-6 py-4">Category</th>
                                <th class="font-semibold text-sm uppercase px-6 py-4">Description</th>
                                <th class="font-semibold text-sm uppercase px-6 py-4">Item Count</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-600 bg-slate-800">
                            <tr>
                                <td class="px-6 py-4">Electronics</td>
                                <td class="px-6 py-4">Electronics</td>
                                <td class="px-6 py-4">42</td>
                            </tr>
                            <tr>
                                <td class="px-6 py-4">Keyboard</td>
                                <td class="px-6 py-4">Electronics</td>
                                <td class="px-6 py-4">8</td>
                            </tr>
                            <tr>
                                <td class="px-6 py-4">Mouse</td>
                                <td class="px-6 py-4">Electronics</td>
                                <td class="px-6 py-4">8</td>
                            </tr>
                            <tr>
                                <td class="px-6 py-4">Mouse</td>
                                <td class="px-6 py-4">Electronics</td>
                                <td class="px-6 py-4">8</td>
                            </tr>
                            <tr>
                                <td class="px-6 py-4">Mouse</td>
                                <td class="px-6 py-4">Electronics</td>
                                <td class="px-6 py-4">8</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
