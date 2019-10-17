import { inject, injectable } from "@robotlegsjs/core";
import { Mediator } from "@robotlegsjs/pixi";
import {SignalMediator} from "@robotlegsjs/pixi-signalmediator";
import { FlowService } from "./../services/FlowService";
import { GameService } from "./../services/GameService";
import { StartingPopup } from "./../views/StartingPopup";

@injectable()
export class StartingPopupMediator extends SignalMediator<StartingPopup> {
    @inject(GameService) private gameService: GameService;
    @inject(FlowService) private flowService: FlowService;

    private _count: number;

    public initialize(): void {
        this._count = 4;

        this.tick(this);
    }
    public tick(obThis: any) {
        obThis._count -= 1;
        if (obThis._count > 0) {
            obThis.view.changeNumber(obThis._count);
            setTimeout(obThis.tick, 300, obThis);
        } else {
            obThis.tick_onComplete();
        }
    }
    public destroy(): void {
        this.eventMap.unmapListeners();
    }
    private tick_onComplete(): void {
        this.gameService.resume();
        this.flowService.closePopup();
    }
}
