/**
 * Iron Guard Web
 *
 * @author Afaan Bilal
 * @link   https://afaan.dev
 * @link   https://github.com/AfaanBilal/iron-guard-web
 */

import { Component, createResource, For, Show } from "solid-js";
import Loading from "../components/Loading";
import { getDashboardData } from "../definitions/api";
import Category from "../definitions/types/Category";
import Item from "../definitions/types/Item";
import User from "../definitions/types/User";

interface DashboardData {
    count_items: number;
    count_categories: number;
    count_users: number;

    latest_items: Item[],
    latest_categories: Category[],
    latest_users: User[];
}

const Dashboard: Component = () => {
    const [data] = createResource<DashboardData>(getDashboardData);

    return (
        <div class="flex-grow flex flex-col">
            <Show when={!data.loading} fallback={<Loading />}>
                <div class="flex flex-wrap gap-4 p-4">
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
                        <div class="text-6xl">{data()?.count_items} <br /><span class="text-lg uppercase">items</span></div>
                    </div>
                    <div class="w-64 h-48 grid items-center text-center border bg-slate-700 border-slate-600 rounded-lg">
                        <div class="text-6xl">{data()?.count_categories} <br /><span class="text-lg uppercase">categories</span></div>
                    </div>
                    <Show when={data()!.count_users > 0}>
                        <div class="w-64 h-48 grid items-center text-center border bg-slate-700 border-slate-600 rounded-lg">
                            <div class="text-6xl">{data()?.count_users}  <br /><span class="text-lg uppercase">users</span></div>
                        </div>
                    </Show>
                </div>
                <div class="flex gap-4">
                    <div class="overflow-x-auto px-4 flex-1">
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
                                <For
                                    each={data()?.latest_items}
                                    fallback={
                                        <tr>
                                            <td colspan="3" class="py-4 text-slate-500 text-center">No data available</td>
                                        </tr>
                                    }>
                                    {i =>
                                        <tr>
                                            <td class="px-6 py-4">{i.name}</td>
                                            <td class="px-6 py-4">{i.description}</td>
                                            <td class="px-6 py-4">{i.quantity}</td>
                                        </tr>
                                    }
                                </For>
                            </tbody>
                        </table>
                    </div>
                    <div class="overflow-x-auto px-4 flex-1">
                        <h1 class="text-3xl p-4">Latest Categories</h1>
                        <table class="w-full whitespace-nowrap rounded-lg divide-y divide-gray-300 overflow-hidden">
                            <thead class="bg-gray-900">
                                <tr class="text-white text-left">
                                    <th class="font-semibold text-sm uppercase px-6 py-4">Category</th>
                                    <th class="font-semibold text-sm uppercase px-6 py-4">Description</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-gray-600 bg-slate-800">
                                <For
                                    each={data()?.latest_categories}
                                    fallback={
                                        <tr>
                                            <td colspan="2" class="py-4 text-slate-500 text-center">No data available</td>
                                        </tr>
                                    }>
                                    {c =>
                                        <tr>
                                            <td class="px-6 py-4">{c.name}</td>
                                            <td class="px-6 py-4">{c.description}</td>
                                        </tr>
                                    }
                                </For>
                            </tbody>
                        </table>
                    </div>
                </div>
                <Show when={0 === 0}>
                    <div class="flex mt-4">
                        <div class="overflow-x-auto px-4 flex-1">
                            <h1 class="text-3xl p-4">Latest Users</h1>
                            <table class="w-full whitespace-nowrap rounded-lg divide-y divide-gray-300 overflow-hidden">
                                <thead class="bg-gray-900">
                                    <tr class="text-white text-left">
                                        <th class="font-semibold text-sm uppercase px-6 py-4">Firstname</th>
                                        <th class="font-semibold text-sm uppercase px-6 py-4">Lastname</th>
                                        <th class="font-semibold text-sm uppercase px-6 py-4">Email</th>
                                        <th class="font-semibold text-sm uppercase px-6 py-4">Role</th>
                                    </tr>
                                </thead>
                                <tbody class="divide-y divide-gray-600 bg-slate-800">
                                    <For each={data()?.latest_users}>
                                        {u =>
                                            <tr>
                                                <td class="px-6 py-4">{u.firstname}</td>
                                                <td class="px-6 py-4">{u.lastname}</td>
                                                <td class="px-6 py-4">{u.email}</td>
                                                <td class="px-6 py-4 uppercase">{u.role}</td>
                                            </tr>
                                        }
                                    </For>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </Show>
            </Show>
        </div>
    );
};

export default Dashboard;
