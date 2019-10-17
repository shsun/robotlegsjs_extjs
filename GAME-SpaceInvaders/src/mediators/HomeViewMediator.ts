import {inject, injectable} from "@robotlegsjs/core";
import {Mediator} from "@robotlegsjs/pixi";
import {SignalMediator} from "@robotlegsjs/pixi-signalmediator";
import {Signal, OnceSignal} from "@robotlegsjs/signals";
import {FlowService} from "./../services/FlowService";
import {HomeView} from "./../views/HomeView";


import {StrangeSignal} from "../event/BSignals";
import {CustomEvent} from "../event/BEvents";

@injectable()
export class HomeViewMediator extends SignalMediator<HomeView> {

    // @inject(StrangeSignal)
    // private strangeSignal: StrangeSignal;

    @inject(FlowService)
    private flowService: FlowService;

    public initialize(): void {
        // this.eventMap.mapListener(this.view.startButton, "click", this.startButton_onClick, this);
        this.eventMap.mapListener(this.view.optionButton, "click", this.optionsButton_onClick, this);

        this.view.signal4Start.add(this._onStartGame);

        //this.addToSignal(this.strangeSignal, this._onStartGame)

    }

    public destroy(): void {
        this.eventMap.unmapListeners();
    }

    private startButton_onClick(e: any): void {
        this.flowService.setGameView();

        //
        // this.dispatch(new CustomEvent(CustomEvent.ClickStart, 5792));
        // this.strangeSignal.dispatch('There, a signal starts on a flight !');
        // this.view.parent.removeChild(this.view);
        // alert('Game over !');
        //
    }

    private optionsButton_onClick(e: any): void {
        this.flowService.setOptionsView();
    }

    _onStartGame = (data: Object) => {
        console.log(data.toString());
        this.flowService.setGameView();

    }
}
