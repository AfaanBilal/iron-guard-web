/**
 * Iron Guard Web
 *
 * @author Afaan Bilal
 * @link   https://afaan.dev
 * @link   https://github.com/AfaanBilal/iron-guard-web
 */

import { A, useParams } from "@solidjs/router";
import { Component, createResource, For, Show } from "solid-js";
import Loading from "../components/Loading";
import { getInventoryData } from "../definitions/api";

const Inventory: Component = () => {
    const params = useParams();
    const [data] = createResource(() => params.uuid || "", getInventoryData);

    const NoData = () => <div class="text-xl py-4 text-center text-slate-500">No data available</div>;

    return (
        <div class="flex-grow flex flex-col px-2">
            <h1 class="px-4 py-2 my-4 text-3xl border-b border-b-slate-700">Inventory Browser</h1>
            <Show when={data()?.category}>
                <div class="px-4 underline text-slate-500 cursor-pointer" onClick={() => window.history.back()}>Back</div>
                <div class="flex gap-4 items-center p-2">
                    <h3 class="text-2xl font-bold text-slate-300">{data()?.category?.name}</h3>
                    <p class="text-slate-500">{data()?.category?.description}</p>
                </div>
            </Show>
            <Show when={!data.loading} fallback={<Loading />}>
                <div class="flex-grow">
                    <div class="flex flex-col p-2 mb-4 border border-slate-700">
                        <h2 class="text-2xl py-2 pl-4 rounded border-b border-b-slate-800">Categories ({data()?.categories?.length})</h2>
                        <div class="flex flex-col mt-2">
                            <For each={data()?.categories} fallback={NoData()}>
                                {c =>
                                    <A href={`/inventory/${c.uuid}`}>
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
                                    </A>
                                }
                            </For>
                        </div>
                    </div>
                    <div class="flex flex-col p-2 border border-slate-700">
                        <h2 class="text-2xl py-2 pl-4 rounded border-b border-b-slate-800">Items ({data()?.items?.length})</h2>
                        <div class="flex flex-col mt-2">
                            <For each={data()?.items} fallback={NoData()}>
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
            </Show>
        </div>
    );
};

export default Inventory;
