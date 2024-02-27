
export class StringUtils {

    public toUpperCase(arg:string) {
        if(!arg) {
            throw new Error("Invalid argument!");

        }
        return arg.toUpperCase();   
    }
}
export function toUpperCase(arg:string) {
    return arg.toUpperCase();   
}


export type stringInfo = {
    lowerCase: string,
    upperCase: string,
    charaters: string[],
    length: number,
    extraInfo: Object | undefined
}
/* istanbul ignore next */
export function getStringInfo(arg:string):stringInfo {
    return {
        lowerCase: arg.toLowerCase(),
        upperCase: arg.toUpperCase(),
        charaters: Array.from(arg),
        length: arg.length,
        extraInfo: {}
    }

}