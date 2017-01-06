import {Except as exc} from './Except';

export function Except<T>(source : T[] , exceptions : T[], comparer : (a : T, b : T) => boolean = (x : T , y : T) => x === y) : T[] {
    return exc.call(source, exceptions, comparer);
}

export function IndexWhere<T>(source : T[], item : T, comparer : (a : T, b : T) => boolean = (x : T, y : T) => x === y) : number {
    let i = -1;

    while (++i < source.length) {
        if (comparer(source[i], item)) {
            return i;
        }
    }

    return -1;
}