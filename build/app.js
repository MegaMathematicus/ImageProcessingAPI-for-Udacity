"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var index_1 = __importDefault(require("./router/index"));
var port = 3000;
var app = (0, express_1.default)();
app.use(express_1.default.static('media'));
app.use('/api', index_1.default);
app.get('*', function (req, res) {
    res.send('Not a valid rout. please use http://localhost:3000/api?name=fileName&h=height&w=width');
});
app.listen(port, function () {
    console.log("Started at http://localhost:".concat(port));
});
exports.default = app;
