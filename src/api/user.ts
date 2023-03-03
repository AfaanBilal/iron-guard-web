/**
 * Iron Guard Web
 *
 * @author Afaan Bilal
 * @link   https://afaan.dev
 * @link   https://github.com/AfaanBilal/iron-guard-web
 */

import { API_BASE, handleTokenExpired, headers } from "./api";

export const getUserList = async () =>
    (await fetch(
        API_BASE + "/users",
        headers()
    ).then(handleTokenExpired)).json();

export const addUser = async (role: string, firstname: string, lastname: string, email: string, password: string) =>
    (await fetch(
        API_BASE + "/users",
        { method: "POST", ...headers(), body: JSON.stringify({ role, firstname, lastname, email, password }) }
    ).then(handleTokenExpired)).json();

export const getUser = async (uuid: string) =>
    (await fetch(
        API_BASE + "/users/" + uuid,
        headers()
    ).then(handleTokenExpired)).json();

export const updateUser = async (uuid: string, role: string, firstname: string, lastname: string, email: string, password: string) =>
    (await fetch(
        API_BASE + "/users/" + uuid,
        { method: "PUT", ...headers(), body: JSON.stringify({ role, firstname, lastname, email, password }) }
    ).then(handleTokenExpired)).json();

export const deleteUser = async (uuid: string) =>
    (await fetch(
        API_BASE + "/users/" + uuid,
        { method: "DELETE", ...headers() }
    ).then(handleTokenExpired)).json();
