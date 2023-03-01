/**
 * Iron Guard Web
 *
 * @author Afaan Bilal
 * @link   https://afaan.dev
 * @link   https://github.com/AfaanBilal/iron-guard-web
 */

interface User {
    uuid: string;
    role: string;
    firstname: string;
    lastname: string;
    email: string;
    password?: string;
}

export default User;
