import {Except as exc} from './Except';

export const Except = (a, b, c) => exc.call(a, b, c);