/**
 * Iron Guard Web
 *
 * @author Afaan Bilal
 * @link   https://afaan.dev
 * @link   https://github.com/AfaanBilal/iron-guard-web
 */

import { type Component, lazy, createSignal, Show } from "solid-js";
import { Routes, Route, A, useLocation } from "@solidjs/router";
import SignIn from "./views/Auth/SignIn";

const Dashboard = lazy(() => import("./views/Dashboard"));
const ListItems = lazy(() => import("./views/Items/ListItems"));
const ListCategories = lazy(() => import("./views/Categories/ListCategories"));
const Users = lazy(() => import("./views/Users/ListUsers"));

const App: Component = () => {
    const [token, setToken] = createSignal("x");
    const location = useLocation();

    return (
        <div class="h-screen flex-grow flex flex-col text-white bg-slate-900">
            <Show when={token() === ""}><SignIn /></Show>
            <Show when={token() !== ""}>
                <div class="bg-gray-700 p-4 flex">
                    <img class="w-8 h-8" src={"/src/assets/icon.png"} alt="icon" />
                    <h1 class="ml-4 text-3xl font-bold">
                        Iron Guard
                    </h1>
                </div>
                <div class="flex-grow flex">
                    <div class="w-64 bg-gray-800 border-r border-r-slate-600 text-lg text-gray-300">
                        <A href="/"><div class={`px-4 py-4 border-b border-b-slate-600 ${location.pathname == "/" ? "bg-black" : ""}`}>Dashboard</div></A>
                        <A href="/items"><div class={`px-4 py-4 border-b border-b-slate-600 ${location.pathname.includes("items") ? "bg-black" : ""}`}>Items</div></A>
                        <A href="/categories"><div class={`px-4 py-4 border-b border-b-slate-600 ${location.pathname.includes("categories") ? "bg-black" : ""}`}>Catagories</div></A>
                        <A href="/users"><div class={`px-4 py-4 border-b border-b-slate-600 ${location.pathname.includes("users") ? "bg-black" : ""}`}>Users</div></A>
                    </div>
                    <div class="flex-grow">
                        <Routes>
                            <Route path="/" component={Dashboard} />
                            <Route path="/items" component={ListItems} />
                            <Route path="/categories" component={ListCategories} />
                            <Route path="/users" component={Users} />
                        </Routes>
                    </div>
                </div>
            </Show>
        </div>
    );
};

export default App;
