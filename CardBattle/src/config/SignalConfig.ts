import {inject, injectable} from "inversify";
import {IConfig, IInjector} from "robotlegs";
import {StrangeSignal} from "../event/Signals";
@injectable()
export class SignalConfig implements IConfig {
    @inject(IInjector)
    injector: IInjector;
    
    configure() {
        this.injector.bind(StrangeSignal).toSelf().inSingletonScope();
    }
}