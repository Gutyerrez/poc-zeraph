"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Exception = void 0;
class Exception extends Error {
    status;
    constructor(status, message) {
        super(message);
        this.status = status;
    }
}
exports.Exception = Exception;
