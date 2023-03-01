/**
 * Iron Guard Web
 *
 * @author Afaan Bilal
 * @link   https://afaan.dev
 * @link   https://github.com/AfaanBilal/iron-guard-web
 */

interface ResultList<T> {
    total: number;
    results: T[],
}

export default ResultList;
