/**
 * Iron Guard Web
 *
 * @author Afaan Bilal
 * @link   https://afaan.dev
 * @link   https://github.com/AfaanBilal/iron-guard-web
 */

import { For, type Component, type JSX } from "solid-js";

type Option = {
    value: string;
    label: string;
};

const Select: Component<{ label: string, options: Option[], selected: string } & JSX.HTMLAttributes<HTMLSelectElement>> = (props) => {
    return (
        <select {...props} class="bg-slate-800 py-2 px-2 w-64 rounded">
            <option value="" selected disabled>{props.label}</option>
            <For each={props.options}>
                {o => <option value={o.value} selected={props.selected === o.value}>{o.label}</option>}
            </For>
        </select>
    );
};

export default Select;
