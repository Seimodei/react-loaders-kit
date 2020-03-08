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
    size: 20,
    duration: 1.2,
    colors: [utilities_1.Colors.Purple, utilities_1.Colors.Purple, utilities_1.Colors.Yellow, utilities_1.Colors.Pink]
};
var RotatingCircleLoader = function (props) {
    var loading = props.loading, size = props.size, pause = props.pause, duration = props.duration, colors = props.colors;
    var Anim12 = core_1.keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        50% {\n            transform: scale(1.3) translate(0, 0);\n            box-shadow: 0 0 0 ", ";\n            opacity: .8;\n        }\n    "], ["\n        50% {\n            transform: scale(1.3) translate(0, 0);\n            box-shadow: 0 0 0 ", ";\n            opacity: .8;\n        }\n    "])), colors ? "" + colors[0] : "" + dProps.colors[0]);
    var Anim34 = core_1.keyframes(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n        50% {\n            transform: scale(1.3) translate(0, 0);\n            box-shadow: 0 0 0 ", ";\n            opacity: .8;\n        }\n    "], ["\n        50% {\n            transform: scale(1.3) translate(0, 0);\n            box-shadow: 0 0 0 ", ";\n            opacity: .8;\n        }\n    "])), colors ? "" + colors[1] : "" + dProps.colors[1]);
    var AnimRotate = core_1.keyframes(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n        0% { transform: rotate(0deg); }\n        50% { transform: rotate(360deg); }\n        100% { transform: rotate(720deg); }\n    "], ["\n        0% { transform: rotate(0deg); }\n        50% { transform: rotate(360deg); }\n        100% { transform: rotate(720deg); }\n    "])));
    var RotatingCircle = styled_1.default('div')(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n        position: relative;\n        width: 0;\n        height: 0;\n        margin: 4em auto;\n        animation: ", " ", " infinite ease;\n        animation-play-state: ", ";\n\n        &:before,\n        &:after {\n            content: '';\n            position: absolute;\n            width: ", ";\n            height: ", ";\n            top: 50%;\n            left: 50%;\n            margin-top: ", ";\n            margin-left: ", ";\n            border-radius: ", ";\n            opacity: .9;\n        }\n        \n        &::before {\n            background: ", ";\n            transform: translate(", ", ", ") scale(1);\n            box-shadow: ", " ", " 0 ", ";\n            animation: ", " ", " infinite ease;\n            animation-play-state: ", ";\n        }\n        \n        &:after {\n            background: ", ";\n            transform: translate(", ", ", ") scale(1);\n            box-shadow: ", " ", " 0 ", ";\n            animation: ", " ", " infinite ease;\n            animation-play-state: ", ";\n        }\n    "], ["\n        position: relative;\n        width: 0;\n        height: 0;\n        margin: 4em auto;\n        animation: ", " ", " infinite ease;\n        animation-play-state: ", ";\n\n        &:before,\n        &:after {\n            content: '';\n            position: absolute;\n            width: ", ";\n            height: ", ";\n            top: 50%;\n            left: 50%;\n            margin-top: ", ";\n            margin-left: ", ";\n            border-radius: ", ";\n            opacity: .9;\n        }\n        \n        &::before {\n            background: ", ";\n            transform: translate(", ", ", ") scale(1);\n            box-shadow: ", " ", " 0 ", ";\n            animation: ", " ", " infinite ease;\n            animation-play-state: ", ";\n        }\n        \n        &:after {\n            background: ", ";\n            transform: translate(", ", ", ") scale(1);\n            box-shadow: ", " ", " 0 ", ";\n            animation: ", " ", " infinite ease;\n            animation-play-state: ", ";\n        }\n    "])), AnimRotate, utilities_1.loaderDuration(duration, dProps.duration), utilities_1.pauseAnim(pause), size ? size + "px" : dProps.size + "px", size ? size + "px" : dProps.size + "px", size ? "-" + size / 2 + "px" : "-" + dProps.size / 2 + "px", size ? "-" + size / 2 + "px" : "-" + dProps.size / 2 + "px", size ? size / 2 + "px" : dProps.size / 2 + "px", colors ? "" + colors[0] : "" + dProps.colors[0], size ? "-" + size * 0.6 + "px" : "-" + dProps.size * 0.6 + "px", size ? "-" + size * 0.6 + "px" : "-" + dProps.size * 0.6 + "px", size ? size * 1.2 + "px" : dProps.size * 1.2 + "px", size ? size * 1.2 + "px" : dProps.size * 1.2 + "px", colors ? "" + colors[1] : "" + dProps.colors[1], Anim12, utilities_1.loaderDuration(duration, dProps.duration), utilities_1.pauseAnim(pause), colors ? "" + colors[2] : "" + dProps.colors[2], size ? size * 0.6 + "px" : dProps.size * 0.6 + "px", size ? "-" + size * 0.6 + "px" : "-" + dProps.size * 0.6 + "px", size ? "-" + size * 1.2 + "px" : "-" + dProps.size * 1.2 + "px", size ? size * 1.2 + "px" : dProps.size * 1.2 + "px", colors ? "" + colors[3] : "" + dProps.colors[3], Anim34, utilities_1.loaderDuration(duration, dProps.duration), utilities_1.pauseAnim(pause));
    return (react_1.default.createElement(wrapper_1.default, { size: size, loading: loading, dPropsSize: dProps.size },
        react_1.default.createElement(RotatingCircle, null)));
};
exports.default = RotatingCircleLoader;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
