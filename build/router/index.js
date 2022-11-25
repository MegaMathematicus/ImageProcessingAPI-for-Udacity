"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var does_exist_1 = __importDefault(require("./util/does-exist"));
var process_1 = __importDefault(require("./util/process"));
var pipe_1 = __importDefault(require("./util/pipe"));
var true_params_1 = __importDefault(require("./util/true-params"));
var router = express_1.default.Router();
router.get('/', true_params_1.default, does_exist_1.default, process_1.default, pipe_1.default, function () {
    console.log('ended');
});
exports.default = router;
