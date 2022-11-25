"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var checker = function (req, res, next) {
    console.log("".concat(req.url, " was visited"));
    next();
};
exports.default = checker;
