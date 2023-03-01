/**
 * Iron Guard Web
 *
 * @author Afaan Bilal
 * @link   https://afaan.dev
 * @link   https://github.com/AfaanBilal/iron-guard-web
 */

import type { Component } from "solid-js";

const SignIn: Component = () => {
    return (
        <div class="flex-grow grid place-items-center">
            <div class="bg-slate-700 p-8 rounded-2xl">
                <div class="grid place-items-center pb-4">
                    <img class="w-48 h-48" src={"/src/assets/icon.png"} alt="icon" />
                </div>
                <div class="p-4">
                    <h1 class="pb-4 border-b border-b-slate-500 text-6xl font-extrabold text-center">Iron Guard</h1>
                    <p class="mt-4 text-2xl text-center">Sign In</p>
                </div>
                <div class="p-4">
                    <input type="email" placeholder="Email" class="w-full px-4 py-2 rounded text-xl" />
                </div>
                <div class="p-4">
                    <input type="password" placeholder="Password" class="w-full px-4 py-2 rounded text-xl" />
                </div>
                <div class="p-4 text-center">
                    <button type="button" class="w-full p-2 bg-slate-600 rounded-lg text-xl">Sign In</button>
                </div>
                <div class="p-4 pt-8 text-center">
                    &copy; <a class="text-zinc-400" href="https://afaan.dev" target="_blank">Afaan Bilal</a>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
