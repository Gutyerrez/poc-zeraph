export declare abstract class Exception extends Error {
    status: number;
    constructor(status: number, message: string);
}
