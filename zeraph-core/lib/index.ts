import { Exception } from '@vyrnn/zeraph-exceptions';

export class ApplicationAlreadyPreparedException extends Exception {
  constructor(
    status: number,
    message: string
  ) { super(status, message); }
}