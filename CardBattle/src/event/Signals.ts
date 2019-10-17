import {Signal} from "signals.js";
import {injectable} from "inversify";

@injectable()
export class StrangeSignal extends Signal {
    constructor() {
        super(String);
    }
}