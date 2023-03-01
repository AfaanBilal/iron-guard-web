/**
 * Iron Guard Web
 *
 * @author Afaan Bilal
 * @link   https://afaan.dev
 * @link   https://github.com/AfaanBilal/iron-guard-web
 */

import { type Component } from "solid-js";

const NoDataAvailable: Component<{ col: number }> = (props) => {
    return (
        <tr>
            <td colspan={props.col} class="py-4 text-slate-500 text-center">No data available</td>
        </tr>
    );
};

export default NoDataAvailable;
