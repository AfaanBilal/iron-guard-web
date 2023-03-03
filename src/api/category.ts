/**
 * Iron Guard Web
 *
 * @author Afaan Bilal
 * @link   https://afaan.dev
 * @link   https://github.com/AfaanBilal/iron-guard-web
 */

import { API_BASE, handleTokenExpired, headers } from "./api";

export const getCategoryList = async () =>
    (await fetch(
        API_BASE + "/categories",
        headers()
    ).then(handleTokenExpired)).json();

export const addCategory = async (name: string, description: string, parent_uuid: string) =>
    (await fetch(
        API_BASE + "/categories",
        { method: "POST", ...headers(), body: JSON.stringify({ name, description, parent_uuid }) }
    ).then(handleTokenExpired)).json();

export const getCategory = async (uuid: string) =>
    (await fetch(
        API_BASE + "/categories/" + uuid,
        headers()
    ).then(handleTokenExpired)).json();

export const updateCategory = async (uuid: string, name: string, description: string, parent_uuid: string) =>
    (await fetch(
        API_BASE + "/categories/" + uuid,
        { method: "PUT", ...headers(), body: JSON.stringify({ name, description, parent_uuid }) }
    ).then(handleTokenExpired)).json();
