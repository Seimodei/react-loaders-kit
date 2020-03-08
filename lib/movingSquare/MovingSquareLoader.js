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
    duration: 1,
    colors: [utilities_1.Colors.Purple, utilities_1.Colors.Purple]
};
var MovingSquareLoader = function (props) {
    var loading = props.loading, size = props.size, pause = props.pause, duration = props.duration, colors = props.colors;
    var SquareMove = core_1.keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        0%, 100%{\n            transform: translate(0,0) rotate(0);\n        }\n        \n        25%{\n            transform: translate(30px,30px) rotate(45deg);\n        }\n        \n        50%{\n            transform: translate(0px,60px) rotate(0deg);\n        }\n        \n        75%{\n            transform: translate(-30px,30px) rotate(45deg);\n        }\n    "], ["\n        0%, 100%{\n            transform: translate(0,0) rotate(0);\n        }\n        \n        25%{\n            transform: translate(30px,30px) rotate(45deg);\n        }\n        \n        50%{\n            transform: translate(0px,60px) rotate(0deg);\n        }\n        \n        75%{\n            transform: translate(-30px,30px) rotate(45deg);\n        }\n    "])));
    var Loader = styled_1.default('div')(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n        transform: ", ";\n        transform-origin: center;\n        position: relative;\n        width: inherit;\n        height: inherit;\n\n\n        &:before, &:after {\n            content: \"\";\n            width: 20px;\n            height: 20px;\n            position: absolute;\n            top: 0;\n            left: 0;\n            animation: ", " ", " ease-in-out infinite;\n            animation-play-state: ", ";\n        }\n\n        &:before {\n            background-color: ", ";\n        }\n\n        &:after {\n            background-color: ", ";\n            animation-delay: ", ";\n        }\n    "], ["\n        transform: ", ";\n        transform-origin: center;\n        position: relative;\n        width: inherit;\n        height: inherit;\n\n\n        &:before, &:after {\n            content: \"\";\n            width: 20px;\n            height: 20px;\n            position: absolute;\n            top: 0;\n            left: 0;\n            animation: ", " ", " ease-in-out infinite;\n            animation-play-state: ", ";\n        }\n\n        &:before {\n            background-color: ", ";\n        }\n\n        &:after {\n            background-color: ", ";\n            animation-delay: ", ";\n        }\n    "])), size ? "scale(" + size / 100 + ")" : "scale(" + dProps.size / 100 + ")", SquareMove, utilities_1.loaderDuration(duration, dProps.duration), utilities_1.pauseAnim(pause), colors ? "" + colors[0] : "" + dProps.colors[0], colors ? "" + colors[1] : "" + dProps.colors[1], duration ? duration / 2 + "s" : dProps.duration / 2 + "s");
    return (react_1.default.createElement(wrapper_1.default, { size: size, loading: loading, dPropsSize: dProps.size },
        react_1.default.createElement(Loader, null)));
};
exports.default = MovingSquareLoader;
var templateObject_1, templateObject_2;
