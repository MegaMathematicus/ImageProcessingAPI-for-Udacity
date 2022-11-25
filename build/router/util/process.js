"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var processing_1 = __importDefault(require("../../util/processing"));
var checker = function (req, res, next) {
    res.type('jpg');
    (0, processing_1.default)(req.query.name, req.query.w, req.query.h, next);
};
exports.default = checker;
