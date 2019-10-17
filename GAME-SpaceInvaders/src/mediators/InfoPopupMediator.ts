import { inject, injectable } from "@robotlegsjs/core";
import { Mediator } from "@robotlegsjs/pixi";
import {SignalMediator} from "@robotlegsjs/pixi-signalmediator";
import { FlowService } from "./../services/FlowService";
import { InfoPopup } from "./../views/InfoPopup";

@injectable()
export class InfoPopupMediator extends SignalMediator<InfoPopup> {
    @inject(FlowService) private service: FlowService;

    public initialize(): void {
        this.eventMap.mapListener(this.view.closeButton, "click", this.closeButton_onClick, this);
    }

    public destroy(): void {
        this.eventMap.unmapListeners();
    }
    private closeButton_onClick(e: any): void {
        this.service.closePopup();
        this.service.showStartingPopup();
    }
}
