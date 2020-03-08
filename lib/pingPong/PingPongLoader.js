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
    size: 90,
    duration: .8,
    colors: [utilities_1.Colors.Purple, utilities_1.Colors.Purple]
};
var PingPongLoader = function (props) {
    var loading = props.loading, size = props.size, pause = props.pause, duration = props.duration, colors = props.colors;
    var Bounce = core_1.keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        0% {\n            transform: translate3d(0, ", "px, 0) scale(0.9, 1.1);\n        }\n        100% {\n            transform: translate3d(0, ", "px, 0) scale(1.2, 0.85);\n        }\n    "], ["\n        0% {\n            transform: translate3d(0, ", "px, 0) scale(0.9, 1.1);\n        }\n        100% {\n            transform: translate3d(0, ", "px, 0) scale(1.2, 0.85);\n        }\n    "])), size ? size * 0.02 : dProps.size * 0.02, size ? size * 0.39 : dProps.size * 0.39);
    var Swing = core_1.keyframes(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n        0% {\n            transform: rotate(-45deg);\n        }\n        \n        100% {\n            transform: rotate(45deg);\n        }\n    "], ["\n        0% {\n            transform: rotate(-45deg);\n        }\n        \n        100% {\n            transform: rotate(45deg);\n        }\n    "])));
    var PingPong = styled_1.default('div')(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n        border-radius: 50%;\n        position: relative;\n        width: inherit ;\n        height: inherit ;\n\n        &:after, &:before {\n            position: absolute;\n            content: \"\";\n        }\n\n        &:after {\n            height: ", "px;\n            width: ", "px;\n            background-color: ", ";\n            top: ", "px;\n            left: ", "px;\n            animation: ", " ", "s ease-in-out infinite;\n            animation-direction: alternate;\n            animation-play-state: ", ";\n        }\n        \n        &:before {\n            height: ", "px;\n            width: ", "px;\n            background-color: ", ";\n            border-radius: 50%;\n            top: ", "px;\n            left: ", "px;\n            animation: ", " ", "s ease-in-out infinite;\n            animation-direction: alternate;\n            animation-play-state: ", ";\n        }\n    "], ["\n        border-radius: 50%;\n        position: relative;\n        width: inherit ;\n        height: inherit ;\n\n        &:after, &:before {\n            position: absolute;\n            content: \"\";\n        }\n\n        &:after {\n            height: ", "px;\n            width: ", "px;\n            background-color: ", ";\n            top: ", "px;\n            left: ", "px;\n            animation: ", " ", "s ease-in-out infinite;\n            animation-direction: alternate;\n            animation-play-state: ", ";\n        }\n        \n        &:before {\n            height: ", "px;\n            width: ", "px;\n            background-color: ", ";\n            border-radius: 50%;\n            top: ", "px;\n            left: ", "px;\n            animation: ", " ", "s ease-in-out infinite;\n            animation-direction: alternate;\n            animation-play-state: ", ";\n        }\n    "])), size ? size * 0.055 : dProps.size * 0.055, size ? size * 0.55 : dProps.size * 0.55, colors ? colors[0] : dProps.colors[0], size ? size * 0.6 : dProps.size * 0.6, size ? size * 0.22 : dProps.size * 0.22, Swing, duration ? duration : dProps.duration, utilities_1.pauseAnim(pause), size ? size * 0.11 : dProps.size * 0.11, size ? size * 0.11 : dProps.size * 0.11, colors ? colors[1] : dProps.colors[1], size ? size * 0.16 : dProps.size * 0.16, size ? size * 0.43 : dProps.size * 0.43, Bounce, duration ? duration / 2 : dProps.duration / 2, utilities_1.pauseAnim(pause));
    return (react_1.default.createElement(wrapper_1.default, { size: size, loading: loading, dPropsSize: dProps.size },
        react_1.default.createElement(PingPong, null)));
};
exports.default = PingPongLoader;
var templateObject_1, templateObject_2, templateObject_3;
