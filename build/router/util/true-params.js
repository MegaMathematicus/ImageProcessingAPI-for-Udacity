"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var msg = 'invalid parameters: you should have name: The name of the file, w: the width of the output, h: the height of the output';
var checker = function (req, res, next) {
    if (fs_1.default.existsSync("media/original/".concat(req.query.name, ".jpg"))) {
        try {
            if (parseInt(req.query.h) == +req.query.h &&
                parseInt(req.query.w) == +req.query.w) {
                next();
            }
            else {
                res.send(msg);
            }
        }
        catch (error) {
            res.send(msg);
        }
    }
    else {
        res.send(msg);
    }
};
exports.default = checker;
