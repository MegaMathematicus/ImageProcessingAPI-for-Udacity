"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var sharp_1 = __importDefault(require("sharp"));
var fs_1 = __importDefault(require("fs"));
function wait(pth, call) {
    if (fs_1.default.existsSync(pth)) {
        setTimeout(call, 100);
    }
    else {
        setTimeout(wait, 100, pth, call);
    }
}
function processing(name, w, h, call) {
    try {
        var pathIn = "media/original/".concat(name, ".jpg");
        var pathOut = "media/thumb/".concat(name).concat(w, "x").concat(h, ".jpg");
        var dims = [parseInt(w), parseInt(h)];
        (0, sharp_1.default)(pathIn)
            .resize(dims[0], dims[1])
            .toFile(pathOut, function (error) {
            console.log(error);
        });
        wait(pathOut, call);
    }
    catch (error) {
        console.log(error);
    }
}
exports.default = processing;
