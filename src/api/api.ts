/**
 * Iron Guard Web
 *
 * @author Afaan Bilal
 * @link   https://afaan.dev
 * @link   https://github.com/AfaanBilal/iron-guard-web
 */

import { setToken, token } from "../App";

export const API_BASE = "https://iron-guard.amx.gg";

export enum Status {
    Success = "success",
    Error = "error",
}

export const headers = () => ({ headers: { token: token() } });

export const handleTokenExpired = (r: Response) => {
    if (r.status === 401) {
        setToken("");
    }

    return r;
};
