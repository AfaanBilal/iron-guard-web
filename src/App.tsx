/**
 * Iron Guard Web
 *
 * @author Afaan Bilal
 * @link   https://afaan.dev
 * @link   https://github.com/AfaanBilal/iron-guard-web
 */

import { type Component, lazy } from "solid-js";
import { Routes, Route, A, useLocation } from "@solidjs/router";

const Dashboard = lazy(() => import("./views/Dashboard"));
const ListItems = lazy(() => import("./views/Items/ListItems"));

const App: Component = () => {
    const location = useLocation();

    return (
        <div class="h-screen flex-grow flex flex-col text-white bg-slate-900">
            <div class="bg-gray-700 p-4">
                <h1 class="text-3xl font-bold">Iron Guard</h1>
            </div>
            <div class="flex-grow flex">
                <div class="w-48 bg-gray-800 border-r border-r-slate-600 text-lg text-gray-300">
                    <A href="/"><div class={`px-4 py-4 border-b border-b-slate-600 ${location.pathname == "/" ? "bg-black" : ""}`}>Dashboard</div></A>
                    <A href="/items"><div class={`px-4 py-4 border-b border-b-slate-600 ${location.pathname.includes("items") ? "bg-black" : ""}`}>Items</div></A>
                    <A href="/categories"><div class={`px-4 py-4 border-b border-b-slate-600 ${location.pathname.includes("categories") ? "bg-black" : ""}`}>Catagories</div></A>
                    <A href="/users"><div class={`px-4 py-4 border-b border-b-slate-600 ${location.pathname.includes("users") ? "bg-black" : ""}`}>Users</div></A>
                </div>
                <div class="flex-grow">
                    <Routes>
                        <Route path="/" component={Dashboard} />
                        <Route path="/items" component={ListItems} />
                        <Route path="/categories" element={<div>Categories</div>} />
                        <Route path="/users" element={<div>Users</div>} />
                    </Routes>
                </div>
            </div>
        </div>
    );
};

export default App;
