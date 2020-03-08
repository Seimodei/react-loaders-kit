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
    duration: 2,
    colors: [utilities_1.Colors.Purple, utilities_1.Colors.Purple]
};
var VortexLoader = function (props) {
    var loading = props.loading, size = props.size, pause = props.pause, duration = props.duration, colors = props.colors;
    var VortexAnim = core_1.keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        from { \n            transform: rotate(0deg); \n        }\n        to { \n            transform: rotate(359deg); \n        }\n    "], ["\n        from { \n            transform: rotate(0deg); \n        }\n        to { \n            transform: rotate(359deg); \n        }\n    "])));
    var Vortex = styled_1.default('div')(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n        width: inherit;\n        height: inherit;\n        border: 1px ", " solid;\n        border-radius: 4px;\n        overflow: hidden;\n        position: relative;\n\n        &:before, &:after {\n            content: '';\n            border-radius: 50%;\n            position: absolute;\n            width: inherit;\n            height: inherit;\n            animation: ", " ", " infinite linear;\n            animation-play-state: ", ";\n        }\n\n        &:before {\n            border-top: 15px ", " solid;\n            top: -3px;\n            left: calc( -51% - 3px );\n            transform-origin: right center;\n        }\n\n        &:after {\n            border-bottom: 15px ", " solid;\n            top: 3px;\n            right: calc( -50% - 3px );\n            transform-origin: left center;\n        }\n\n    "], ["\n        width: inherit;\n        height: inherit;\n        border: 1px ", " solid;\n        border-radius: 4px;\n        overflow: hidden;\n        position: relative;\n\n        &:before, &:after {\n            content: '';\n            border-radius: 50%;\n            position: absolute;\n            width: inherit;\n            height: inherit;\n            animation: ", " ", " infinite linear;\n            animation-play-state: ", ";\n        }\n\n        &:before {\n            border-top: 15px ", " solid;\n            top: -3px;\n            left: calc( -51% - 3px );\n            transform-origin: right center;\n        }\n\n        &:after {\n            border-bottom: 15px ", " solid;\n            top: 3px;\n            right: calc( -50% - 3px );\n            transform-origin: left center;\n        }\n\n    "])), colors ? "" + colors[0] : "" + dProps.colors[0], VortexAnim, utilities_1.loaderDuration(duration, dProps.duration), utilities_1.pauseAnim(pause), colors ? "" + colors[1] : "" + dProps.colors[1], colors ? "" + colors[1] : "" + dProps.colors[1]);
    return (react_1.default.createElement(wrapper_1.default, { size: size, loading: loading, dPropsSize: dProps.size },
        react_1.default.createElement(Vortex, null)));
};
exports.default = VortexLoader;
var templateObject_1, templateObject_2;
