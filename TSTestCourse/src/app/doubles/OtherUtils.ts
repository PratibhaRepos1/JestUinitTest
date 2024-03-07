import { v4 } from "uuid";

export type stringInfo = {
    lowerCase: string,
    upperCase: string,
    charaters: string[],
    length: number,
    extraInfo: Object | undefined
}

export function calculateComplexity(stringInfo: stringInfo) {
    return Object.keys(stringInfo.extraInfo).length * stringInfo.length

}

type LoggerServiceCallBack = (arg:string) => void;

export function toUpperCase(arg:string) {
    return arg.toUpperCase();

}

export function toLowerCaseWithId(arg:string) {
    return arg.toLowerCase() + v4();
    
}


export function toUpperCaseWithCb(arg: string, callBacks: LoggerServiceCallBack) {
    if(!arg) {
        callBacks('Invalid arguments!');
        return;

    } else {
        callBacks(`called function with ${arg}`);
    }
    return arg.toUpperCase();
}

export class OtherStringUtils {
    private callExternalService() {
        console.log('calling external service!!!');
    }

    public toUpperCase(arg: string) {
        return arg.toUpperCase();

    }

    public logString(arg:string) {
        console.log(arg);

    }
}