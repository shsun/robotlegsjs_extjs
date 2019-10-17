import { FileNotFound } from './../dev/CustomError';
import {Path, Start} from "../const/Asset";

export function getAsset(view: string, file: string): string {
    let path = Path;

    switch (view) {
        case Start.Path:
            path += '/' + view;
            if (hasPropertiesValue(Start, file)) {
                path += '/' + file;
            } else {
                throw new FileNotFound(file);
            }
            
            break;
        default:
            throw new FileNotFound(view);
    }
    
    return path;
}

function hasPropertiesValue(object, value): boolean {
    let result = false;
    Object.getOwnPropertyNames(object).forEach((property) => {
        if (object[property] === value) {
            result = true;
        }
    });
    
    return result;
}