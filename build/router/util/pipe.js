"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var sharp_1 = __importDefault(require("sharp"));
var checker = function (req, res, next) {
    (0, sharp_1.default)("media/thumb/".concat(req.query.name).concat(req.query.w, "x").concat(req.query.h, ".jpg")).pipe(res);
    next();
};
exports.default = checker;
