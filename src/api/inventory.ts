/**
 * Iron Guard Web
 *
 * @author Afaan Bilal
 * @link   https://afaan.dev
 * @link   https://github.com/AfaanBilal/iron-guard-web
 */

import { API_BASE, handleTokenExpired, headers } from "./api";

export const getInventoryData = async (c: string) =>
    (await fetch(
        API_BASE + "/inventory" + (c === "" ? "" : "/" + c),
        headers()
    ).then(handleTokenExpired)).json();
