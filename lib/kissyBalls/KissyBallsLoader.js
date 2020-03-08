"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var styled_1 = __importDefault(require("@emotion/styled"));
var core_1 = require("@emotion/core");
var utilities_1 = require("../utilities/utilities");
var wrapper_1 = __importDefault(require("../wrapper/wrapper"));
var dProps = {
    loading: true,
    size: 60,
    duration: .5,
    colors: [utilities_1.Colors.Purple, utilities_1.Colors.Purple]
};
var KissyBallsLoader = function (props) {
    var loading = props.loading, size = props.size, pause = props.pause, duration = props.duration, colors = props.colors;
    var Bounce1 = core_1.keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        0% {\n            transform: translate3d(0, 0, 0);\n        }\n        100% {\n            transform: translate3d(", "px, 0, 0) scale(0.9, 2);\n        }\n    "], ["\n        0% {\n            transform: translate3d(0, 0, 0);\n        }\n        100% {\n            transform: translate3d(", "px, 0, 0) scale(0.9, 2);\n        }\n    "])), size ? size * 0.25 : dProps.size * 0.25);
    var Bounce2 = core_1.keyframes(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n        0% {\n            transform: translate3d(0, 0, 0);\n        }\n        100% {\n            transform: translate3d(-", "px, 0, 0) scale(0.9, 2);\n        }\n    "], ["\n        0% {\n            transform: translate3d(0, 0, 0);\n        }\n        100% {\n            transform: translate3d(-", "px, 0, 0) scale(0.9, 2);\n        }\n    "])), size ? size * 0.25 : dProps.size * 0.25);
    var KissyBalls = styled_1.default('div')(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n        position: relative;\n        width: inherit;\n        height: ", "px;\n\n        &:after, &:before {\n            position: absolute;\n            content: \"\";\n            height: ", "px;\n            width: ", "px;\n            top: ", "px;\n            border-radius: 50%;\n        }\n\n        &:after {\n            background-color: ", ";\n            left: ", "px;\n            animation: ", " ", " ease-in-out infinite;\n            animation-direction: alternate;\n            animation-play-state: ", ";\n        }\n        \n        &:before {\n            background-color: ", ";\n            animation: ", " ", " ease-in-out infinite;\n            animation-direction: alternate;\n            animation-play-state: ", ";\n        }\n    "], ["\n        position: relative;\n        width: inherit;\n        height: ", "px;\n\n        &:after, &:before {\n            position: absolute;\n            content: \"\";\n            height: ", "px;\n            width: ", "px;\n            top: ", "px;\n            border-radius: 50%;\n        }\n\n        &:after {\n            background-color: ", ";\n            left: ", "px;\n            animation: ", " ", " ease-in-out infinite;\n            animation-direction: alternate;\n            animation-play-state: ", ";\n        }\n        \n        &:before {\n            background-color: ", ";\n            animation: ", " ", " ease-in-out infinite;\n            animation-direction: alternate;\n            animation-play-state: ", ";\n        }\n    "])), size ? size / 2 : dProps.size / 2, size ? size * 0.33 : dProps.size * 0.33, size ? size * 0.33 : dProps.size * 0.33, size ? size * 0.055 : dProps.size * 0.055, colors ? colors[0] : dProps.colors[0], size ? size * 0.66 : dProps.size * 0.66, Bounce2, utilities_1.loaderDuration(duration, dProps.duration), utilities_1.pauseAnim(pause), colors ? colors[1] : dProps.colors[1], Bounce1, utilities_1.loaderDuration(duration, dProps.duration), utilities_1.pauseAnim(pause));
    return (react_1.default.createElement(wrapper_1.default, { size: size, loading: loading, dPropsSize: dProps.size },
        react_1.default.createElement(KissyBalls, null)));
};
exports.default = KissyBallsLoader;
var templateObject_1, templateObject_2, templateObject_3;
