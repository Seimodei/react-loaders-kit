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
    size: 40,
    duration: 1,
    colors: [utilities_1.Colors.Purple, utilities_1.Colors.Purple]
};
var ClockLoader = function (props) {
    var loading = props.loading, size = props.size, pause = props.pause, duration = props.duration, colors = props.colors;
    var ClockAnim = core_1.keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        from { transform: rotate(0deg); }\n        to { transform: rotate(359deg); }\n    "], ["\n        from { transform: rotate(0deg); }\n        to { transform: rotate(359deg); }\n    "])));
    var Clock = styled_1.default('div')(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n        width: inherit;\n        height: inherit;\n        border: 1px ", " solid;\n        border-radius: 50%;\n        position: relative;\n\n        &:before {\n            content:'';\n            border-left: 2px ", " solid;\n            position: absolute;\n            top: 3px;\n            left: 50%;\n            height: calc( 50% - 2px );\n            transform: rotate(0deg);\n            transform-origin: 0% 100%;\n            animation: ", " ", " infinite linear;\n            animation-play-state: ", ";\n        }\n\n    "], ["\n        width: inherit;\n        height: inherit;\n        border: 1px ", " solid;\n        border-radius: 50%;\n        position: relative;\n\n        &:before {\n            content:'';\n            border-left: 2px ", " solid;\n            position: absolute;\n            top: 3px;\n            left: 50%;\n            height: calc( 50% - 2px );\n            transform: rotate(0deg);\n            transform-origin: 0% 100%;\n            animation: ", " ", " infinite linear;\n            animation-play-state: ", ";\n        }\n\n    "])), colors ? colors[0] : dProps.colors[0], colors ? colors[1] : dProps.colors[1], ClockAnim, utilities_1.loaderDuration(duration, dProps.duration), utilities_1.pauseAnim(pause));
    return (react_1.default.createElement(wrapper_1.default, { size: size, loading: loading, dPropsSize: dProps.size },
        react_1.default.createElement(Clock, null)));
};
exports.default = ClockLoader;
var templateObject_1, templateObject_2;
