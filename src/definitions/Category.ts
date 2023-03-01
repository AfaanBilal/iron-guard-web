/**
 * Iron Guard Web
 *
 * @author Afaan Bilal
 * @link   https://afaan.dev
 * @link   https://github.com/AfaanBilal/iron-guard-web
 */

import Item from "./Item";
import User from "./User";

interface Category {
    uuid: string;
    name: string;
    description: string;
    parent_uuid?: string;
    user?: User,
    items: Item[],
    children: Category[],
}

export default Category;
