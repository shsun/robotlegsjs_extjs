import {Event} from "robotlegs";
export class CustomEvent extends Event {
    static readonly ClickStart = 'cs';

    params;

    constructor(cmd: string, params?: any) {
        super(cmd);
        this.params = params;
    }
}