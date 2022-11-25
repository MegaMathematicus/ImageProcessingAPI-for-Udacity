"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var sharp_1 = __importDefault(require("sharp"));
var checker = function (req, res, next) {
    if (fs_1.default.existsSync("media/thumb/".concat(req.query.name).concat(req.query.w, "x").concat(req.query.h, ".jpg"))) {
        res.type('jpg');
        (0, sharp_1.default)("media/thumb/".concat(req.query.name).concat(req.query.w, "x").concat(req.query.h, ".jpg")).pipe(res);
    }
    else {
        next();
    }
};
exports.default = checker;
