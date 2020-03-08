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
    size: 30,
    duration: 2.5,
    colors: [utilities_1.Colors.Purple, utilities_1.Colors.Purple]
};
var DoubleSquareLoader = function (props) {
    var loading = props.loading, size = props.size, pause = props.pause, duration = props.duration, colors = props.colors;
    var DoubleSquareAnim = core_1.keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        from { \n            transform: rotate(0deg); \n        }\n        to { \n            transform: rotate(360deg); \n        }\n    "], ["\n        from { \n            transform: rotate(0deg); \n        }\n        to { \n            transform: rotate(360deg); \n        }\n    "])));
    var DoubleSquare = styled_1.default('div')(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n        position: absolute;\n        width: inherit;\n        height: inherit;\n\n        &:before, &:after {\n            content: '';\n            position: absolute;\n            width: ", ";\n            height: ", ";\n        }\n\n        &:after {\n            border: ", " solid ", ";\n            animation: ", " ", " linear infinite;\n            animation-play-state: ", ";\n        }\n\n        &:before {\n            border: ", " solid ", ";\n            width: ", ";\n            height: ", ";\n            margin-left: -", ";\n            margin-top: -", ";\n            animation: ", " ", " linear infinite;\n            animation-play-state: ", ";\n            animation-direction: reverse;\n        }\n\n    "], ["\n        position: absolute;\n        width: inherit;\n        height: inherit;\n\n        &:before, &:after {\n            content: '';\n            position: absolute;\n            width: ", ";\n            height: ", ";\n        }\n\n        &:after {\n            border: ", " solid ", ";\n            animation: ", " ", " linear infinite;\n            animation-play-state: ", ";\n        }\n\n        &:before {\n            border: ", " solid ", ";\n            width: ", ";\n            height: ", ";\n            margin-left: -", ";\n            margin-top: -", ";\n            animation: ", " ", " linear infinite;\n            animation-play-state: ", ";\n            animation-direction: reverse;\n        }\n\n    "])), size ? size * 0.88 + "px" : dProps.size * 0.88 + "px", size ? size * 0.88 + "px" : dProps.size * 0.88 + "px", size ? size * 0.07 + "px" : dProps.size * 0.07 + "px", colors ? "" + colors[0] : "" + dProps.colors[0], DoubleSquareAnim, utilities_1.loaderDuration(duration, dProps.duration), utilities_1.pauseAnim(pause), size ? size * 0.07 + "px" : dProps.size * 0.07 + "px", colors ? "" + colors[1] : "" + dProps.colors[1], size ? size * 1.3 + "px" : dProps.size * 1.3 + "px", size ? size * 1.3 + "px" : dProps.size * 1.3 + "px", size ? size * 0.21 + "px" : dProps.size * 0.21 + "px", size ? size * 0.21 + "px" : dProps.size * 0.21 + "px", DoubleSquareAnim, utilities_1.loaderDuration(duration, dProps.duration), utilities_1.pauseAnim(pause));
    return (react_1.default.createElement(wrapper_1.default, { size: size, loading: loading, dPropsSize: dProps.size },
        react_1.default.createElement(DoubleSquare, null)));
};
exports.default = DoubleSquareLoader;
var templateObject_1, templateObject_2;
