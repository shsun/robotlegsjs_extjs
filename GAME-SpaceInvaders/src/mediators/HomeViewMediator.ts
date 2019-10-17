import {inject, injectable} from "@robotlegsjs/core";
import {Mediator} from "@robotlegsjs/pixi";
import {SignalMediator} from "@robotlegsjs/pixi-signalmediator";
import {Signal, OnceSignal} from "@robotlegsjs/signals";
import {FlowService} from "./../services/FlowService";
import {HomeView} from "./../views/HomeView";


import {StrangeSignal} from "../event/BSignals";
import {CustomEvent} from "../event/BEvents";
import {Delegate} from "../utils/Delegate";

@injectable()
export class HomeViewMediator extends SignalMediator<HomeView> {

    // @inject(StrangeSignal)
    // private strangeSignal: StrangeSignal;

    @inject(FlowService)
    private flowService: FlowService;

    public initialize(): void {
        // this.eventMap.mapListener(this.view.startButton, "click", this.startButton_onClick, this);
        //this.eventMap.mapListener(this.view.optionButton, "click", this.optionsButton_onClick, this);


        this.view.signal4Start.add(Delegate.create(this, this._onStartGame, {'a':'123', 'b':'456', 'c':2}));
        this.view.signal4Option.add(this.optionsButton_onClick);

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
        console.log(e.toString());
        this.flowService.setOptionsView();
    }

    _onStartGame = (data: Object, additionalOpts:Object) => {
        console.log('_onStartGame-s');
        console.log(JSON.stringify(data));
        //console.log(restArgs.length);

//        console.log(JSON.stringify(restArgs[0]));

        console.log(JSON.stringify(additionalOpts));


        console.log('_onStartGame-e');
        this.flowService.setGameView();
    }
}
