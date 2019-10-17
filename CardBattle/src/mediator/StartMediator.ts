import {StartView} from "../view/StartView";
import {SignalMediator} from "robotlegs-signalmediator";
import {inject} from "inversify";
import {StrangeSignal} from "../event/Signals";
import {CustomEvent} from "../event/Events";

export class StartMediator extends SignalMediator<StartView> {
    @inject(StrangeSignal)
    strangeSignal: StrangeSignal;

    initialize() {
        this.eventMap.mapListener(this.view.button, 'click', this.onButtonClick);
        this.addToSignal(this.strangeSignal, this.onStrangeSignal)
    }

    onStrangeSignal = (data: string) => {
        console.log(data);
    }

    onButtonClick = (e) => {
        this.dispatch(new CustomEvent(CustomEvent.ClickStart, 5792));
        this.strangeSignal.dispatch('There, a signal starts on a flight !');
        this.view.parent.removeChild(this.view);
        alert('Game over !');
    };

    destroy() {
        console.log('StartMediator destroys');
    }
}