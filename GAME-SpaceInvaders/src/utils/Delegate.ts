export class Delegate {
    public static create(handler: Function, ...args): Function {
        return function (...innerArgs): void {
            handler.apply(this, innerArgs.concat(args));
        }
    }
}