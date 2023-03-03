/**
 * Iron Guard Web
 *
 * @author Afaan Bilal
 * @link   https://afaan.dev
 * @link   https://github.com/AfaanBilal/iron-guard-web
 */

import { API_BASE } from "./api";

export const doSignIn = async (email: string, password: string) =>
    (await fetch(
        API_BASE + "/auth/sign-in",
        { method: "POST", body: JSON.stringify({ email, password }) })
    ).json();
