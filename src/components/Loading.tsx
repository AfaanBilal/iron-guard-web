/**
 * Iron Guard Web
 *
 * @author Afaan Bilal
 * @link   https://afaan.dev
 * @link   https://github.com/AfaanBilal/iron-guard-web
 */

import { type Component } from "solid-js";

const Loading: Component = () => {
    return (
        <div class="h-48 grid place-items-center">
            <div class="text-slate-500 text-center text-3xl uppercase">Loading</div>
        </div>
    );
};

export default Loading;
