/**
 * Iron Guard Web
 *
 * @author Afaan Bilal
 * @link   https://afaan.dev
 * @link   https://github.com/AfaanBilal/iron-guard-web
 */

import { API_BASE, handleTokenExpired, headers } from "./api";

export const getItemList = async () =>
    (await fetch(
        API_BASE + "/items",
        headers()
    ).then(handleTokenExpired)).json();

export const addItem = async (name: string, description: string, quantity: number, category_uuid: string) =>
    (await fetch(
        API_BASE + "/items",
        { method: "POST", ...headers(), body: JSON.stringify({ name, description, quantity, category_uuid }) }
    ).then(handleTokenExpired)).json();

export const getItem = async (uuid: string) =>
    (await fetch(
        API_BASE + "/items/" + uuid,
        headers()
    ).then(handleTokenExpired)).json();

export const updateItem = async (uuid: string, name: string, description: string, quantity: number, category_uuid: string) =>
    (await fetch(
        API_BASE + "/items/" + uuid,
        { method: "PUT", ...headers(), body: JSON.stringify({ name, description, quantity, category_uuid }) }
    ).then(handleTokenExpired)).json();
