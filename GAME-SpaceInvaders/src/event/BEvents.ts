//import {Event} from "robotlegs";
import {Event} from "@robotlegsjs/core";

export class CustomEvent extends Event {
    static readonly ClickStart = 'cs';

    params;

    constructor(cmd: string, params?: any) {
        super(cmd);
        this.params = params;
    }
}