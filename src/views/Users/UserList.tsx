/**
 * Iron Guard Web
 *
 * @author Afaan Bilal
 * @link   https://afaan.dev
 * @link   https://github.com/AfaanBilal/iron-guard-web
 */

import { type Component, For, createResource, Show } from "solid-js";
import { A } from "@solidjs/router";
import Button from "../../components/Button";
import ResultList from "../../definitions/types/ResultList";
import User from "../../definitions/types/User";
import Loading from "../../components/Loading";
import NoDataAvailable from "../../components/NoDataAvailable";
import { getUserList } from "../../api/user";

const UserList: Component = () => {
    const [data] = createResource<ResultList<User>>(getUserList);

    return (
        <div class="flex-grow flex flex-col px-2">
            <Show when={!data.loading} fallback={<Loading />}>
                <div class="text-4xl p-4 mb-4 flex items-center gap-4">
                    Users
                    <A href="/users/add"><Button label="Add" onClick={() => { }} /></A>
                </div>
                <div class="overflow-x-auto w-full">
                    <table class="w-full whitespace-nowrap rounded-lg divide-y divide-gray-300 overflow-hidden">
                        <thead class="bg-gray-900">
                            <tr class="text-white text-left">
                                <th class="font-semibold text-sm uppercase px-6 py-4">Firstname</th>
                                <th class="font-semibold text-sm uppercase px-6 py-4">Lastname</th>
                                <th class="font-semibold text-sm uppercase px-6 py-4">Email</th>
                                <th class="font-semibold text-sm uppercase px-6 py-4">Role</th>
                                <th class="font-semibold text-sm uppercase px-6 py-4">Actions</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-600 bg-slate-800">
                            <For
                                each={data()?.results}
                                fallback={<NoDataAvailable col={5} />}>
                                {u =>
                                    <tr>
                                        <td class="px-6 py-4">{u.firstname}</td>
                                        <td class="px-6 py-4">{u.lastname}</td>
                                        <td class="px-6 py-4">{u.email}</td>
                                        <td class="px-6 py-4">{u.role}</td>
                                        <td class="px-6 py-4 cursor-pointer"><A href={`/users/${u.uuid}`}>Edit</A></td>
                                    </tr>
                                }
                            </For>
                        </tbody>
                    </table>
                </div>
            </Show>
        </div>
    );
};

export default UserList;
