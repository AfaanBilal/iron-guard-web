/**
 * Iron Guard Web
 *
 * @author Afaan Bilal
 * @link   https://afaan.dev
 * @link   https://github.com/AfaanBilal/iron-guard-web
 */

import { type Component } from "solid-js";

const Button: Component<{ label: string, onClick: () => void }> = (props) => {
    return (
        <div class="px-4 py-2 bg-slate-600 rounded text-lg" onClick={props.onClick}>{props.label}</div>
    );
};

export default Button;
