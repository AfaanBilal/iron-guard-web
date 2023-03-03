/**
 * Iron Guard Web
 *
 * @author Afaan Bilal
 * @link   https://afaan.dev
 * @link   https://github.com/AfaanBilal/iron-guard-web
 */

import { API_BASE, handleTokenExpired, headers } from "./api";

export const getDashboardData = async () =>
    (await fetch(
        API_BASE + "/dashboard",
        headers()
    ).then(handleTokenExpired)).json();
