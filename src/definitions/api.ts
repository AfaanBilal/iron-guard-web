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

const headers = (etc: object = {}) => ({ ...etc, token: token() });

export const getDashboardData = async () => (await fetch(API_BASE + "/dashboard", { headers: headers() })).json();
export const getInventoryData = async () => (await fetch(API_BASE + "/inventory", { headers: headers() })).json();

export const getCategoryList = async () => (await fetch(API_BASE + "/categories", { headers: headers() })).json();
export const getItemList = async () => (await fetch(API_BASE + "/items", { headers: headers() })).json();
export const getUserList = async () => (await fetch(API_BASE + "/users", { headers: headers() })).json();
