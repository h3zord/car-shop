"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ErrorHandler {
    static handle(error, _req, res, next) {
        let STATUS_ERROR;
        if (error.message === 'Car not found')
            STATUS_ERROR = 404;
        if (error.message === 'Motorcycle not found')
            STATUS_ERROR = 404;
        if (error.message === 'Invalid mongo id')
            STATUS_ERROR = 422;
        res.status(STATUS_ERROR || 500).json({ message: error.message });
        next();
    }
}
exports.default = ErrorHandler;
