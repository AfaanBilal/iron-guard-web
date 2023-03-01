/**
 * Iron Guard Web
 *
 * @author Afaan Bilal
 * @link   https://afaan.dev
 * @link   https://github.com/AfaanBilal/iron-guard-web
 */

import { type Component, type JSX } from "solid-js";

const Input: Component<JSX.InputHTMLAttributes<HTMLInputElement>> = (props) => {
    return (
        <input
            {...props}
            class="py-2 px-2 w-64 bg-slate-800 rounded text-lg focus:outline-none"
        />
    );
};

export default Input;
