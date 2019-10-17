import {inject, injectable} from "inversify";
import {IConfig, IEventCommandMap} from "robotlegs";
import {ISignalCommandMap} from "robotlegs-signalcommandmap";
import {StrangeSignal} from "../event/Signals";
import {StrangeCmd} from "../cmd/StrangeCommand";
import {CustomEvent} from "../event/Events";
import {ClickStartCmd} from "../cmd/ClickStartCmd";
@injectable()
export class CommandConfig implements IConfig {
    @inject(IEventCommandMap)
    eventCommandMap: IEventCommandMap;
    @inject(ISignalCommandMap)
    signalCommandMap: ISignalCommandMap;
    
    configure() {
        this.signalCommandMap.map(StrangeSignal).toCommand(StrangeCmd);
        
        this.eventCommandMap.map(CustomEvent.ClickStart).toCommand(ClickStartCmd);
    }
}