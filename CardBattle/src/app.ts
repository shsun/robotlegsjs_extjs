/// <reference path="../node_modules/robotlegs-pixi/definitions/pixi.d.ts" />
import 'reflect-metadata';
import * as PIXI from 'pixi.js';
import { StartView } from './view/StartView';
import { Context, MVCSBundle } from 'robotlegs';
import { PixiBundle, ContextView } from 'robotlegs-pixi';
import {App} from './const/App';
import {ViewConfig} from "./config/ViewConfig";
import Container = PIXI.Container;
import {SignalMediatorExtension} from "robotlegs-signalmediator";
import {SignalConfig} from "./config/SignalConfig";
import {SignalCommandMapExtension} from "robotlegs-signalcommandmap";
import {CommandConfig} from "./config/CommandConfig";

let renderer = PIXI.autoDetectRenderer(App.Width, App.Height, {});
let stage = new Container(); // stage must be a container, then add custom view as child
new Context().install(MVCSBundle, PixiBundle, SignalMediatorExtension, SignalCommandMapExtension)
    .configure(new ContextView((<any>renderer).plugins.interaction))
    .configure(ViewConfig, SignalConfig, CommandConfig)
    .initialize();
stage.addChild(new StartView());

document.body.appendChild(renderer.view);

let render = () => {
    renderer.render(stage);
    window.requestAnimationFrame(render);
};

render();