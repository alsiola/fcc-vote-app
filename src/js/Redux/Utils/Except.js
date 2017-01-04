// @flow

import {Contains} from './Contains';

export function Except<T>(exceptThese : T[], comparer : (a : T, b: T) => boolean = (x : T , y : T) => x === y) : T[] {
    if (typeof(exceptThese) === "undefined") {
        throw "Array must be provided as first argument.";
    }

    if(!Array.isArray(exceptThese)) {
        throw "First argument must be an array.";
    }

    if(typeof(comparer) !== "function") {
        throw "Comparer argument must be a function.";
    }

    const output : T[] = [];

    let i : number = -1;

    while (++i < this.length) {
        if (!Contains.call(exceptThese, this[i], comparer)) {
            output.push(this[i]);
        }
    }

    return output;
}