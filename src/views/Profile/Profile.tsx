/**
 * Iron Guard Web
 *
 * @author Afaan Bilal
 * @link   https://afaan.dev
 * @link   https://github.com/AfaanBilal/iron-guard-web
 */

import { createEffect, createResource, createSignal, Show, type Component } from "solid-js";
import { Status } from "../../api/api";
import { getProfile, updateProfile } from "../../api/profile";
import Button from "../../components/Button";
import Input from "../../components/Input";
import User from "../../definitions/types/User";

const Profile: Component = () => {
    const [firstname, setFirstname] = createSignal("");
    const [lastname, setLastname] = createSignal("");
    const [email, setEmail] = createSignal("");
    const [password, setPassword] = createSignal("");
    const [error, setError] = createSignal("");
    const [message, setMessage] = createSignal("");

    const [data] = createResource(getProfile);

    createEffect(() => {
        if (data()) {
            const u = data() as User;
            setFirstname(u.firstname);
            setLastname(u.lastname);
            setEmail(u.email);
        }
    });

    const save = async () => {
        if (firstname().trim() === "" || lastname().trim() === "" || email().trim() === "") {
            setError("Please fill firstname, lastname and email.");
            return;
        }

        const r = await updateProfile(firstname(), lastname(), email(), password());

        if (r.status === Status.Success) {
            setMessage("Updated!");
            setTimeout(() => setMessage(""), 1000);
        } else {
            setError(r.message);
        }
    };

    return (
        <div class="flex-grow flex flex-col px-2">
            <Show when={!data.loading}>
                <h1 class="px-4 py-2 my-4 text-3xl border-b border-b-slate-700">
                    Profile
                    <Show when={error() !== ""}>
                        <span class="ml-4 px-4 py-2 rounded text-xl bg-red-900 text-gray-300">{error()}</span>
                    </Show>
                    <Show when={message() !== ""}>
                        <span class="ml-4 px-4 py-2 rounded text-xl bg-green-800 text-gray-300">{message()}</span>
                    </Show>
                </h1>
                <div class="flex-grow p-4 bg-gray-700">
                    <div class="flex items-center py-2">
                        <div class="px-2 text-slate-300 text-xl w-64">Firstname</div>
                        <div class="px-2"><Input value={firstname()} onInput={e => setFirstname(e.currentTarget.value)} /></div>
                    </div>
                    <div class="flex items-center py-2">
                        <div class="px-2 text-slate-300 text-xl w-64">Lastname</div>
                        <div class="px-2"><Input value={lastname()} onInput={e => setLastname(e.currentTarget.value)} /></div>
                    </div>
                    <div class="flex items-center py-2">
                        <div class="px-2 text-slate-300 text-xl w-64">Email</div>
                        <div class="px-2"><Input type="email" value={email()} onInput={e => setEmail(e.currentTarget.value)} /></div>
                    </div>
                    <div class="flex items-center py-2">
                        <div class="px-2 text-slate-300 text-xl w-64">Password</div>
                        <div class="px-2"><Input type="password" placeholder="Unchanged" value={password()} onInput={e => setPassword(e.currentTarget.value)} /></div>
                    </div>
                    <div class="flex items-center px-2 py-4 mt-4 border-t border-t-slate-800 gap-2">
                        <Button label="Save" onClick={save} />
                    </div>
                </div>
            </Show>
        </div>
    );
};

export default Profile;
