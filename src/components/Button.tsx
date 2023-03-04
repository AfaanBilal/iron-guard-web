/**
 * Iron Guard Web
 *
 * @author Afaan Bilal
 * @link   https://afaan.dev
 * @link   https://github.com/AfaanBilal/iron-guard-web
 */

import { type Component } from "solid-js";

const Button: Component<{ label: string, onClick?: () => void, kind?: string }> = (props) => {
    const classList = () => {
        let c = "";

        switch (props.kind || "default") {
            case "danger":
                c += "bg-red-800 hover:bg-red-600 active:bg-red-400";
                break;
            default:
                c += "bg-slate-600 hover:bg-slate-500 active:bg-slate-400";
        }

        return c;
    };

    return (
        <div
            class={`px-4 py-2 rounded text-lg cursor-pointer ${classList()}`}
            onClick={props.onClick}>
            {props.label}
        </div>
    );
};

export default Button;
