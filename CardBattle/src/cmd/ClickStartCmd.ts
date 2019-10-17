import {inject, injectable} from "inversify";
import {ICommand} from "robotlegs";
import {CustomEvent} from "../event/Events";
@injectable()
export class ClickStartCmd implements ICommand {
    @inject(CustomEvent)
    e: CustomEvent;
    
    execute() {
        console.log('Ow oh, a click start event. & see, it brings some data: ', this.e.params)
    }
}