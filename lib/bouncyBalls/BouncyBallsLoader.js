"use strict";
/** @jsx jsx */
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_1 = __importDefault(require("@emotion/styled"));
var core_1 = require("@emotion/core");
var utilities_1 = require("../utilities/utilities");
var wrapper_1 = __importDefault(require("../wrapper/wrapper"));
var dProps = {
    loading: true,
    size: 40,
    duration: 0.4,
    colors: [utilities_1.Colors.Purple, utilities_1.Colors.Purple, utilities_1.Colors.Purple]
};
var BouncyBallsLoader = function (props) {
    var loading = props.loading, size = props.size, pause = props.pause, duration = props.duration, colors = props.colors;
    var bubbleConfig = function (loaderSize) {
        if (loaderSize <= 80 && loaderSize >= 60) {
            return 16;
        }
        else if (loaderSize < 60) {
            return 11;
        }
        return 20;
    };
    var Bouncing = core_1.keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        0% {\n            transform: translate3d(0, 10px, 0) scale(1.2, 0.85);\n        }\n\n        100% {\n            transform: translate3d(0, -20px, 0) scale(0.9, 1.1);\n        }\n    "], ["\n        0% {\n            transform: translate3d(0, 10px, 0) scale(1.2, 0.85);\n        }\n\n        100% {\n            transform: translate3d(0, -20px, 0) scale(0.9, 1.1);\n        }\n    "])));
    var LoaderBalls = styled_1.default('div')(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n        width: inherit;\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n    "], ["\n        width: inherit;\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n    "])));
    var Ball = styled_1.default('div')(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n        width: ", ";\n        height: ", ";\n        border-radius: 50%;\n    "], ["\n        width: ", ";\n        height: ", ";\n        border-radius: 50%;\n    "])), size ? bubbleConfig(size) + "px" : bubbleConfig(dProps.size) + "px", size ? bubbleConfig(size) + "px" : bubbleConfig(dProps.size) + "px");
    var BallAnim1 = core_1.css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n        background: ", ";\n        animation: ", " ", "s alternate infinite cubic-bezier(.6,.05,.15,.95);\n        animation-play-state: ", ";\n    "], ["\n        background: ", ";\n        animation: ", " ", "s alternate infinite cubic-bezier(.6,.05,.15,.95);\n        animation-play-state: ", ";\n    "])), colors ? "" + colors[0] : "" + dProps.colors[0], Bouncing, duration ? duration : dProps.duration, pause ? 'paused' : 'running');
    var BallAnim2 = core_1.css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n        background: ", ";\n        animation: ", " ", "s ", "s alternate infinite cubic-bezier(.6,.05,.15,.95) backwards;\n        animation-play-state: ", ";\n    "], ["\n        background: ", ";\n        animation: ", " ", "s ", "s alternate infinite cubic-bezier(.6,.05,.15,.95) backwards;\n        animation-play-state: ", ";\n    "])), colors ? "" + colors[1] : "" + dProps.colors[1], Bouncing, duration ? duration : dProps.duration, duration ? duration / 4 : dProps.duration / 4, pause ? 'paused' : 'running');
    var BallAnim3 = core_1.css(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n        background: ", ";\n        animation: ", " ", "s ", "s alternate infinite cubic-bezier(.6,.05,.15,.95) backwards;\n        animation-play-state: ", ";\n    "], ["\n        background: ", ";\n        animation: ", " ", "s ", "s alternate infinite cubic-bezier(.6,.05,.15,.95) backwards;\n        animation-play-state: ", ";\n    "])), colors ? "" + colors[2] : "" + dProps.colors[2], Bouncing, duration ? duration : dProps.duration, duration ? duration / 2 : dProps.duration / 2, pause ? 'paused' : 'running');
    return (core_1.jsx(wrapper_1.default, { size: size, loading: loading, dPropsSize: dProps.size },
        core_1.jsx(LoaderBalls, null,
            core_1.jsx(Ball, { css: BallAnim1 }),
            core_1.jsx(Ball, { css: BallAnim2 }),
            core_1.jsx(Ball, { css: BallAnim3 }))));
};
exports.default = BouncyBallsLoader;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
