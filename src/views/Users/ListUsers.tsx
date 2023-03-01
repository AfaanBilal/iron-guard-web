/**
 * Iron Guard Web
 *
 * @author Afaan Bilal
 * @link   https://afaan.dev
 * @link   https://github.com/AfaanBilal/iron-guard-web
 */

import { type Component, For } from "solid-js";

const users = [
    { role: "user", firstname: "Test", lastname: "User", email: "test@example.com" },
    { role: "user", firstname: "Test", lastname: "User", email: "test@example.com" },
    { role: "admin", firstname: "Test", lastname: "User", email: "test@example.com" },
    { role: "user", firstname: "Test", lastname: "User", email: "test@example.com" },
    { role: "user", firstname: "Test", lastname: "User", email: "test@example.com" },
    { role: "admin", firstname: "Test", lastname: "User", email: "test@example.com" },
    { role: "user", firstname: "Test", lastname: "User", email: "test@example.com" },
    { role: "user", firstname: "Test", lastname: "User", email: "test@example.com" },
];

const ListUsers: Component = () => {
    return (
        <div class="flex-grow flex flex-col px-2">
            <h1 class="text-5xl p-4 mb-4">Users</h1>
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
                        <For each={users}>
                            {u =>
                                <tr>
                                    <td class="px-6 py-4">{u.firstname}</td>
                                    <td class="px-6 py-4">{u.lastname}</td>
                                    <td class="px-6 py-4">{u.email}</td>
                                    <td class="px-6 py-4">{u.role}</td>
                                    <td class="px-6 py-4">View / Edit / Delete</td>
                                </tr>
                            }
                        </For>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ListUsers;
