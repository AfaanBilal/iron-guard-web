/**
 * Iron Guard Web
 *
 * @author Afaan Bilal
 * @link   https://afaan.dev
 * @link   https://github.com/AfaanBilal/iron-guard-web
 */

import Category from "./Category";

interface Item {
    uuid: string;
    category?: Category;
    name: string;
    description: string;
    quantity: number;
}

export default Item;
