// @flow

export function Contains<T>(objectToFind : T, comparer : (x : T, y : T) => boolean = (x, y) => x === y) : boolean {
    if(typeof(objectToFind) === "undefined") {
        throw "Argument to find must be provided.";
    }

    if (typeof(comparer) !== "function") {
        throw "Comparer is not a function";
    }

    let i = -1;

    while (++i < this.length) {
        if (comparer(objectToFind, this[i])) {
            return true;;
        }
    }

    return false;
}