/**
 * Iron Guard Web
 *
 * @author Afaan Bilal
 * @link   https://afaan.dev
 * @link   https://github.com/AfaanBilal/iron-guard-web
 */

import { API_BASE, handleTokenExpired, headers } from "./api";

export const getProfile = async () =>
    (await fetch(
        API_BASE + "/me",
        headers()
    ).then(handleTokenExpired)).json();

export const updateProfile = async (firstname: string, lastname: string, email: string, password: string) =>
    (await fetch(
        API_BASE + "/me",
        { method: "PUT", ...headers(), body: JSON.stringify({ firstname, lastname, email, password }) }
    ).then(handleTokenExpired)).json();
