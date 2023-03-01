/**
 * Iron Guard Web
 *
 * @author Afaan Bilal
 * @link   https://afaan.dev
 * @link   https://github.com/AfaanBilal/iron-guard-web
 */

import { type Component } from "solid-js";
import Input from "../../components/Input";

const AddCategory: Component = () => {
    return (
        <div class="flex-grow flex flex-col px-2">
            <h1 class="text-5xl p-4 mb-4">Add Category</h1>
            <div class="flex-grow p-4 bg-gray-600">
                <div class="flex items-center mb-4">
                    <div class="px-2 text-slate-800 text-2xl w-64">Name</div>
                    <div class="px-2"><Input /></div>
                </div>
                <div class="flex items-center mb-4">
                    <div class="px-2 text-slate-800 text-2xl w-64">Description</div>
                    <div class="px-2"><Input /></div>
                </div>
                <div class="flex items-center mb-4">
                    <div class="px-2 text-slate-800 text-2xl w-64">Category</div>
                    <div class="px-2">
                        <select class="bg-slate-800 py-4 px-2 w-64 rounded">
                            <option value="" selected disabled>Select a category</option>
                            <option value="A">Category A</option>
                            <option value="B">Category B</option>
                            <option value="C">Category C</option>
                            <option value="D">Category D</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddCategory;
