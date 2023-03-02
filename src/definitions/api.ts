/**
 * Iron Guard Web
 *
 * @author Afaan Bilal
 * @link   https://afaan.dev
 * @link   https://github.com/AfaanBilal/iron-guard-web
 */

import { token } from "../App";

export const API_BASE = "http://localhost:8000";

export enum Status {
    Success = "success",
    Error = "error",
}

export const doSignIn = async (email: string, password: string) => (await fetch(API_BASE + "/auth/sign-in", { method: "POST", body: JSON.stringify({ email, password }) })).json();

const headers = (etc: object = {}) => ({ ...etc, token: token() });

export const getDashboardData = async () => (await fetch(API_BASE + "/dashboard", { headers: headers() })).json();
export const getInventoryData = async (c: string) => (await fetch(API_BASE + "/inventory" + (c === "" ? "" : "/" + c), { headers: headers() })).json();

export const getCategoryList = async () => (await fetch(API_BASE + "/categories", { headers: headers() })).json();
export const getItemList = async () => (await fetch(API_BASE + "/items", { headers: headers() })).json();
export const getUserList = async () => (await fetch(API_BASE + "/users", { headers: headers() })).json();

export const addCategory = async (name: string, description: string, parent_uuid: string) => (await fetch(API_BASE + "/categories", { method: "POST", headers: headers(), body: JSON.stringify({ name, description, parent_uuid }) })).json();
export const addItem = async (name: string, description: string, quantity: number, category_uuid: string) => (await fetch(API_BASE + "/items", { method: "POST", headers: headers(), body: JSON.stringify({ name, description, quantity, category_uuid }) })).json();
export const addUser = async (role: string, firstname: string, lastname: string, email: string, password: string) => (await fetch(API_BASE + "/users", { method: "POST", headers: headers(), body: JSON.stringify({ role, firstname, lastname, email, password }) })).json();

export const getCategory = async (uuid: string) => (await fetch(API_BASE + "/categories/" + uuid, { headers: headers() })).json();
export const getItem = async (uuid: string) => (await fetch(API_BASE + "/items/" + uuid, { headers: headers() })).json();
export const getUser = async (uuid: string) => (await fetch(API_BASE + "/users/" + uuid, { headers: headers() })).json();

export const updateCategory = async (uuid: string, name: string, description: string, parent_uuid: string) => (await fetch(API_BASE + "/categories/" + uuid, { method: "PUT", headers: headers(), body: JSON.stringify({ name, description, parent_uuid }) })).json();
export const updateItem = async (uuid: string, name: string, description: string, quantity: number, category_uuid: string) => (await fetch(API_BASE + "/items/" + uuid, { method: "PUT", headers: headers(), body: JSON.stringify({ name, description, quantity, category_uuid }) })).json();
export const updateUser = async (uuid: string, role: string, firstname: string, lastname: string, email: string, password: string) => (await fetch(API_BASE + "/users/" + uuid, { method: "PUT", headers: headers(), body: JSON.stringify({ role, firstname, lastname, email, password }) })).json();
