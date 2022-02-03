import { Exception } from '@vyrnn/zeraph-exceptions';
export declare class ApplicationAlreadyPreparedException extends Exception {
    constructor(status: number, message: string);
}
