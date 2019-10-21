/**
 * @Author sh
 */
export class XDelegate {

    /**
     *
     * @param scope
     * @param method
     * @param arguments
     */
    public static create(scope: any, method: Function, ...restOfArgs: Object[]): Function {
        var f: Function = function (...args: Object[]): any {
            var s: any = f["__scope__"];
            var m: Function = f["__method__"];
            var a: Array<any> = [].concat(args, f["__restOfArgs__"]);
            return m.apply(s, a);
        };
        f["__scope__"] = scope;
        f["__method__"] = method;
        f["__restOfArgs__"] = restOfArgs;
        return f;
    }
}