import {Container, Sprite} from "pixi.js";

import {Signal, OnceSignal} from "@robotlegsjs/signals";

// import {Signal, OnceSignal} from "@robotlegsjs/core";
// import EventDelegate, { GenericEventListener } from "@robotlegsjs/macrobot";
//
// import EventDelegate, { GenericEventListener } from "@utils/EventDelegate";


import {AtlasKeys} from "./../utils/AtlasKeys";
import {PixiFactory} from "./../utils/PixiFactory";
import {ViewPortSize} from "./../utils/ViewPortSize";
import {CustomButton} from "./components/CustomButton";
import {Delegate} from "../utils/Delegate";

export class HomeView extends Container {

    public signal4Start: Signal;
    public signal4Option: Signal;

    constructor() {
        super();

        this.signal4Start = new Signal(Object);
        this.signal4Option = new Signal(Object);


        this.setupBackground();
        this.setupImages();
        this.setupButtons();
    }

    private setupBackground(): void {
        this.addChild(PixiFactory.getColorBackground());
    }

    private setupImages(): void {
        const logo: Sprite = PixiFactory.getImage(AtlasKeys.LOGO);
        logo.anchor.set(0.5);
        logo.x = ViewPortSize.HALF_WIDTH;
        logo.y = ViewPortSize.MAX_HEIGHT * 0.3;
        this.addChild(logo);

        const setzer: Sprite = PixiFactory.getImage(AtlasKeys.LOGO_SETZER);
        setzer.anchor.set(0.5);
        setzer.x = 10;
        setzer.y = ViewPortSize.MAX_HEIGHT - 15;
        this.addChild(setzer);
    }

    private setupButtons(): void {
        var startButton: CustomButton = PixiFactory.getButton(AtlasKeys.BUTTON_START);
        startButton.x = ViewPortSize.HALF_WIDTH;
        startButton.y = ViewPortSize.MAX_HEIGHT * 0.7;
        this.addChild(startButton);
        startButton.addEventListener('click', Delegate.create(this, this.startButton_onClick, {'a':'123', 'b':'456'}));

        //startButton.addEventListener('click', this.startButton_onClick, this);

        //
        var optionButton: CustomButton = PixiFactory.getButton(AtlasKeys.BUTTON_CONFIG);
        optionButton.x = ViewPortSize.HALF_WIDTH;
        optionButton.y = ViewPortSize.MAX_HEIGHT * 0.8;
        this.addChild(optionButton);
        optionButton.addEventListener('click', this.optionsButton_onClick, this);
    }

    private startButton_onClick(e: MouseEvent, additionalOpts:Object): void {
        console.log('HomeView.startButton_onClick-s');

        console.log('HomeView.startButton_onClick-s' + e);

        var sender:CustomButton = e.target as CustomButton;

        //console.log('HomeView.startButton_onClick-s---' + restOfArgs.length);

        console.log('HomeView.startButton_onClick-s---' + JSON.stringify(additionalOpts));


        var data: Object = {};
        //data['e'] = e;
        data['a'] = 'startButton_onClick';
        this.signal4Start.dispatch(data);
    }

    private optionsButton_onClick(e: any): void {
        var data: Object = {};
        //data['e'] = e;
        data['a'] = 'optionsButton_onClick';
        this.signal4Option.dispatch(data);
    }


}
