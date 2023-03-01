/**
 * Iron Guard Web
 *
 * @author Afaan Bilal
 * @link   https://afaan.dev
 * @link   https://github.com/AfaanBilal/iron-guard-web
 */

import { type Component } from "solid-js";

const Input: Component = (props) => {
    return (
        <input
            {...props}
            class="w-full px-4 py-2 rounded text-lg bg-slate-700 focus:outline-none"
        />
    );
};

export default Input;
