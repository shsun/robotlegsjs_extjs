export class Delegate {

    /**
     *
     * @param scope
     * @param method
     * @param arguments
     */
    public static create(scope: any, method: Function, ...restOfArgs: Object[]): Function {
        var f: Function = function (...args: Object[]): any {
            var s: any = f["s"];
            var m: Function = f["m"];
            var a: Array<any> = [].concat(args, f["a"]);
            //var a: any = [].concat(args, f["a"]);
            return m.apply(s, a);
        };
        f["s"] = scope;
        f["m"] = method;
        f["a"] = restOfArgs;
        return f;
    }
}