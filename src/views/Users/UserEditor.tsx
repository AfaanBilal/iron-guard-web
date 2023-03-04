/**
 * Iron Guard Web
 *
 * @author Afaan Bilal
 * @link   https://afaan.dev
 * @link   https://github.com/AfaanBilal/iron-guard-web
 */

import { useNavigate, useParams } from "@solidjs/router";
import { createEffect, createResource, createSignal, Show, type Component } from "solid-js";
import { Status } from "../../api/api";
import { addUser, deleteUser, getUser, updateUser } from "../../api/user";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Select from "../../components/Select";
import User from "../../definitions/types/User";
import { refetchUserList } from "./UserList";

const AddUser: Component = () => {
    const params = useParams();
    const navigate = useNavigate();

    const [role, setRole] = createSignal("user");
    const [firstname, setFirstname] = createSignal("");
    const [lastname, setLastname] = createSignal("");
    const [email, setEmail] = createSignal("");
    const [password, setPassword] = createSignal("");
    const [error, setError] = createSignal("");

    const [uuid, _] = createSignal(params.uuid || "");
    const [data] = createResource(() => params.uuid || null, getUser);

    createEffect(() => {
        if (data().uuid) {
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

        let r = null;
        if (uuid() === "") {
            r = await addUser(role(), firstname(), lastname(), email(), password());
        } else {
            r = await updateUser(uuid(), role(), firstname(), lastname(), email(), password());
        }

        if (r.status === Status.Success) {
            refetchUserList();
            navigate("/users");
        } else {
            setError(r.message);
        }
    };

    const remove = async () => {
        if (!window.confirm("Are you sure?")) return;

        deleteUser(uuid());
        refetchUserList();
        navigate("/users", { replace: true });
    };

    return (
        <div class="flex-grow flex flex-col px-2">
            <Show when={uuid() === "" || !data.loading}>
                <h1 class="px-4 py-2 my-4 text-3xl border-b border-b-slate-700">
                    {uuid() === "" ? "Add" : "Edit"} User
                    <Show when={error() !== ""}>
                        <span class="ml-4 px-4 py-2 rounded text-xl bg-red-900 text-gray-300">{error()}</span>
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
                        <div class="px-2"><Input type="password" value={password()} onInput={e => setPassword(e.currentTarget.value)} /></div>
                    </div>
                    <div class="flex items-center py-2">
                        <div class="px-2 text-slate-300 text-xl w-64">Role</div>
                        <div class="px-2">
                            <Select
                                label="Select a role"
                                options={[{ value: "user", label: "User" }, { value: "admin", label: "Admin" }]}
                                selected={role()}
                                onChange={e => setRole(e.currentTarget.value)}
                            />
                        </div>
                    </div>
                    <div class="flex items-center px-2 py-4 mt-4 border-t border-t-slate-800 gap-2">
                        <Button label="Save" onClick={save} />
                        <Button label="Cancel" onClick={() => window.history.back()} />
                        <Show when={uuid() !== ""}>
                            <Button kind="danger" label="Delete" onClick={remove} />
                        </Show>
                    </div>
                </div>
            </Show>
        </div>
    );
};

export default AddUser;
