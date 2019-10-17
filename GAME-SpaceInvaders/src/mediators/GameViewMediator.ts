import { GameService } from "./../services/GameService";
import { GameView } from "./../views/GameView";

import { Mediator } from "@robotlegsjs/pixi";
import {SignalMediator} from "@robotlegsjs/pixi-signalmediator";

import { inject, injectable } from "@robotlegsjs/core";

@injectable()
export class GameViewMediator extends SignalMediator<GameView> {
    @inject(GameService) private gameService: GameService;

    public initialize(): void {
        this.view.createComponents();
        this.gameService.startCommand();
    }
    public destroy(): void {
        this.view.destroy();
    }
}
