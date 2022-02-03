import { Exception } from '@vyrnn/zeraph-exceptions';

export class ApplicationAlreadyPreparedException extends Exception {
    constructor(
        status: number = 409,
        message: string = 'application already prepared'
    ) { super(status, message); }
}
