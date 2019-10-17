import * as PIXI from 'pixi.js';
import { getAsset } from '../tool/AssetManager';
import Container = PIXI.Container;
import Sprite = PIXI.Sprite;
import {Start} from "../const/Asset";

export class StartView extends Container {
    background: Sprite;
    button: Sprite;
    
    constructor() {
        super();
        
        this.background = Sprite.fromImage(getAsset(Start.Path, Start.Background));
        this.button = Sprite.fromImage(getAsset(Start.Path, Start.Button));
        
        this.button.position.x = this.background.x + (this.background.texture.baseTexture.source.width - this.button.texture.baseTexture.source.width) / 2;
        this.button.position.y = this.background.y + (this.background.texture.baseTexture.source.height - this.button.texture.baseTexture.source.height) / 2;
        this.button.interactive = true;
        
        this.addChild(this.background);
        this.addChild(this.button);
    }
}