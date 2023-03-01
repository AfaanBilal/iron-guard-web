/**
 * Iron Guard Web
 *
 * @author Afaan Bilal
 * @link   https://afaan.dev
 * @link   https://github.com/AfaanBilal/iron-guard-web
 */

import { type Component, lazy } from "solid-js";
import { Routes, Route, A } from "@solidjs/router";

const Dashboard = lazy(() => import("./views/Dashboard"));

const App: Component = () => {
    return (
        <div class="h-screen flex-grow flex flex-col text-white bg-slate-900">
            <div class="bg-gray-700 p-4">
                <h1 class="text-3xl font-bold">Iron Guard</h1>
            </div>
            <div class="flex-grow flex">
                <div class="w-48 bg-gray-800 border-r border-r-slate-600 text-lg text-gray-300">
                    <A href="/"><div class="px-4 py-4 border-b border-b-slate-600">Dashboard</div></A>
                    <A href="/items"><div class="px-4 py-4 border-b border-b-slate-600">Items</div></A>
                    <A href="/categories"><div class="px-4 py-4 border-b border-b-slate-600">Catagories</div></A>
                    <A href="/users"><div class="px-4 py-4 border-b border-b-slate-600">Users</div></A>
                </div>
                <div class="flex-grow">
                    <Routes>
                        <Route path="/" component={Dashboard} />
                        <Route path="/items" element={<div>This is items</div>} />
                        <Route path="/categories" element={<div>This site was made with Solid</div>} />
                        <Route path="/users" element={<div>This site was made with Solid</div>} />
                    </Routes>
                </div>
            </div>
        </div>
    );
};

export default App;
