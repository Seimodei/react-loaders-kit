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
    duration: .6,
    colors: [utilities_1.Colors.Purple, '#ffffff']
};
var VolumeLoader = function (props) {
    var loading = props.loading, size = props.size, pause = props.pause, duration = props.duration, colors = props.colors;
    var VolumeAnim = core_1.keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        from { \n            transform: rotate(0deg); \n        }\n        to { \n            transform: rotate(359deg); \n        }\n    "], ["\n        from { \n            transform: rotate(0deg); \n        }\n        to { \n            transform: rotate(359deg); \n        }\n    "])));
    var Volume = styled_1.default('div')(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n        width: inherit;\n        height: inherit;\n        background-color: ", ";\n        border-radius: 100px;\n        position: relative;\n        animation: ", " ", " infinite linear;\n        animation-play-state: ", ";\n\n        &:after {\n            margin: 1px;\n            content: '';\n            border-radius: 100px;\n            position: absolute;\n            display: block;\n            width: 10px;\n            height: 10px;\n            left: 5px;\n            top: 5px;\n            background-color: ", ";\n        }\n\n    "], ["\n        width: inherit;\n        height: inherit;\n        background-color: ", ";\n        border-radius: 100px;\n        position: relative;\n        animation: ", " ", " infinite linear;\n        animation-play-state: ", ";\n\n        &:after {\n            margin: 1px;\n            content: '';\n            border-radius: 100px;\n            position: absolute;\n            display: block;\n            width: 10px;\n            height: 10px;\n            left: 5px;\n            top: 5px;\n            background-color: ", ";\n        }\n\n    "])), colors ? "" + colors[0] : "" + dProps.colors[0], VolumeAnim, utilities_1.loaderDuration(duration, dProps.duration), utilities_1.pauseAnim(pause), colors ? "" + colors[1] : "" + dProps.colors[1]);
    return (react_1.default.createElement(wrapper_1.default, { size: size, loading: loading, dPropsSize: dProps.size },
        react_1.default.createElement(Volume, null)));
};
exports.default = VolumeLoader;
var templateObject_1, templateObject_2;
