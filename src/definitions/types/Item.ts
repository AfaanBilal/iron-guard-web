/**
 * Iron Guard Web
 *
 * @author Afaan Bilal
 * @link   https://afaan.dev
 * @link   https://github.com/AfaanBilal/iron-guard-web
 */

interface Item {
    uuid: string;
    category_uuid?: string;
    name: string;
    description: string;
    quantity: number;
}

export default Item;
