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
    size: 35,
    duration: 1,
    colors: [utilities_1.Colors.Purple, utilities_1.Colors.Yellow]
};
var BarsLoader = function (props) {
    var loading = props.loading, size = props.size, pause = props.pause, duration = props.duration, colors = props.colors;
    var BarsAnim = core_1.keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        0% {\n            transform: scale(1,1);\n        }\n        25% {\n            transform: scale(1,1);\n        }\n        50% {\n            transform: scale(1,1.25);\n        }\n        75% {\n            transform: scale(1,1);\n        }\n        100% {\n            transform: scale(1,1);\n        }\n    "], ["\n        0% {\n            transform: scale(1,1);\n        }\n        25% {\n            transform: scale(1,1);\n        }\n        50% {\n            transform: scale(1,1.25);\n        }\n        75% {\n            transform: scale(1,1);\n        }\n        100% {\n            transform: scale(1,1);\n        }\n    "])));
    var BarsBeforeAnim = core_1.keyframes(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n        0% {\n            transform: scale(1,1);\n        }\n        25% {\n            transform: scale(1,1.25);\n        }\n        50% {\n            transform: scale(1,0.75);\n        }\n        75% {\n            transform: scale(1,1);\n        }\n        100% {\n            transform: scale(1,1);\n        }\n    "], ["\n        0% {\n            transform: scale(1,1);\n        }\n        25% {\n            transform: scale(1,1.25);\n        }\n        50% {\n            transform: scale(1,0.75);\n        }\n        75% {\n            transform: scale(1,1);\n        }\n        100% {\n            transform: scale(1,1);\n        }\n    "])));
    var BarsAfterAnim = core_1.keyframes(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n        0% {\n            transform: scale(1,1);\n        }\n        25% {\n            transform: scale(1,1);\n        }\n        50% {\n            transform: scale(1,0.75);\n        }\n        75% {\n            transform: scale(1,1.25);\n        }\n        100% {\n            transform: scale(1,1);\n        }\n    "], ["\n        0% {\n            transform: scale(1,1);\n        }\n        25% {\n            transform: scale(1,1);\n        }\n        50% {\n            transform: scale(1,0.75);\n        }\n        75% {\n            transform: scale(1,1.25);\n        }\n        100% {\n            transform: scale(1,1);\n        }\n    "])));
    var Bars = styled_1.default('div')(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n        width: ", ";\n        height: inherit;\n        position: relative;\n        border: 1px ", " solid;\n        background-color: ", ";\n        animation: ", " ", " infinite linear;\n        animation-play-state: ", ";\n\n        &:before, &:after {\n            content:'';\n            position: absolute;\n            width: inherit;\n            height: inherit;\n            border: inherit;\n            background-color: inherit;\n            top: -1px;\n        }\n\n        &:before {\n            left: ", ";\n            animation: ", " ", " infinite linear;\n            animation-play-state: ", ";\n        }\n\n        &:after {\n            right: ", ";\n            animation: ", " ", " infinite linear;\n            animation-play-state: ", ";\n        }\n\n    "], ["\n        width: ", ";\n        height: inherit;\n        position: relative;\n        border: 1px ", " solid;\n        background-color: ", ";\n        animation: ", " ", " infinite linear;\n        animation-play-state: ", ";\n\n        &:before, &:after {\n            content:'';\n            position: absolute;\n            width: inherit;\n            height: inherit;\n            border: inherit;\n            background-color: inherit;\n            top: -1px;\n        }\n\n        &:before {\n            left: ", ";\n            animation: ", " ", " infinite linear;\n            animation-play-state: ", ";\n        }\n\n        &:after {\n            right: ", ";\n            animation: ", " ", " infinite linear;\n            animation-play-state: ", ";\n        }\n\n    "])), size ? size * 0.25 + "px" : dProps.size * 0.25 + "px", colors ? "" + colors[0] : "" + dProps.colors[0], colors ? utilities_1.convertToRgba(colors[1], 25) : utilities_1.convertToRgba(dProps.colors[1], 25), BarsAnim, utilities_1.loaderDuration(duration, dProps.duration), utilities_1.pauseAnim(pause), size ? size / 2 + "px" : dProps.size / 2 + "px", BarsBeforeAnim, utilities_1.loaderDuration(duration, dProps.duration), utilities_1.pauseAnim(pause), size ? size / 2 + "px" : dProps.size / 2 + "px", BarsAfterAnim, utilities_1.loaderDuration(duration, dProps.duration), utilities_1.pauseAnim(pause));
    return (react_1.default.createElement(wrapper_1.default, { size: size, loading: loading, dPropsSize: dProps.size },
        react_1.default.createElement(Bars, null)));
};
exports.default = BarsLoader;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
