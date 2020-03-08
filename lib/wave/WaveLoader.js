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
    duration: 0.6,
    color: utilities_1.Colors.Purple
};
var WaveLoader = function (props) {
    var loading = props.loading, size = props.size, pause = props.pause, duration = props.duration, color = props.color;
    var WaveAf = core_1.keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        from { transform: scale(0.5,0.5); opacity: 0; }\n        to { transform: scale(1,1); opacity: 1; }\n    "], ["\n        from { transform: scale(0.5,0.5); opacity: 0; }\n        to { transform: scale(1,1); opacity: 1; }\n    "])));
    var WaveBf = core_1.keyframes(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n        from { transform: scale(1,1); opacity: 1; }\n        to { transform: scale(1.5,1.5); opacity: 0; }\n    "], ["\n        from { transform: scale(1,1); opacity: 1; }\n        to { transform: scale(1.5,1.5); opacity: 0; }\n    "])));
    var Wave = styled_1.default('div')(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n        width: inherit;\n        height: inherit;\n        border-radius: 50%;\n        position: relative;\n        opacity: 1;\n\n        &:before, &:after {\n            content:'';\n            border: 1px ", " solid;\n            border-radius: 50%;\n            width: 100%;\n            height: 100%;\n            position: absolute;\n            left:0px;\n        }\n\n        &:before {\n            transform: scale(1,1);\n            opacity: 1;\n            animation: ", " ", " infinite linear;\n            animation-play-state: ", ";\n        }\n\n        &:after {\n            transform: scale(0,0);\n            opacity: 0;\n            animation: ", " ", " infinite linear;\n            animation-play-state: ", ";\n        }\n\n    "], ["\n        width: inherit;\n        height: inherit;\n        border-radius: 50%;\n        position: relative;\n        opacity: 1;\n\n        &:before, &:after {\n            content:'';\n            border: 1px ", " solid;\n            border-radius: 50%;\n            width: 100%;\n            height: 100%;\n            position: absolute;\n            left:0px;\n        }\n\n        &:before {\n            transform: scale(1,1);\n            opacity: 1;\n            animation: ", " ", " infinite linear;\n            animation-play-state: ", ";\n        }\n\n        &:after {\n            transform: scale(0,0);\n            opacity: 0;\n            animation: ", " ", " infinite linear;\n            animation-play-state: ", ";\n        }\n\n    "])), color ? color : dProps.color, WaveBf, utilities_1.loaderDuration(duration, dProps.duration), utilities_1.pauseAnim(pause), WaveAf, utilities_1.loaderDuration(duration, dProps.duration), utilities_1.pauseAnim(pause));
    return (react_1.default.createElement(wrapper_1.default, { size: size, loading: loading, dPropsSize: dProps.size },
        react_1.default.createElement(Wave, null)));
};
exports.default = WaveLoader;
var templateObject_1, templateObject_2, templateObject_3;
