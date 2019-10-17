// import {Signal} from "signals.js";
// import {injectable} from "inversify";


import {Signal} from "@robotlegsjs/signals";
import {inject, injectable} from "@robotlegsjs/core";

@injectable()
export class StrangeSignal extends Signal {
    constructor() {
        super(String);
    }
}