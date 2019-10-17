import {IMediatorMap} from "robotlegs-pixi";
import {IConfig} from "robotlegs";
import {inject, injectable} from "inversify";
import {StartView} from "../view/StartView";
import {StartMediator} from "../mediator/StartMediator";
@injectable()
export class ViewConfig implements IConfig {
    @inject(IMediatorMap)
    mediatorMap: IMediatorMap;

    configure() {
        this.mediatorMap.map(StartView).toMediator(StartMediator);
    }
    
}