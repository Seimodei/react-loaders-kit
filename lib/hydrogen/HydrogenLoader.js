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
    size: 45,
    duration: 0.6,
    colors: [utilities_1.Colors.Purple, utilities_1.Colors.Purple]
};
var HydrogenLoader = function (props) {
    var loading = props.loading, size = props.size, pause = props.pause, duration = props.duration, colors = props.colors;
    var HydrogenAnim = core_1.keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        from { transform: rotate(0deg); }\n        to { transform: rotate(359deg); }\n    "], ["\n        from { transform: rotate(0deg); }\n        to { transform: rotate(359deg); }\n    "])));
    var Hydrogen = styled_1.default('div')(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n        width: inherit;\n        height: inherit;\n        position: relative;\n        border: 1px ", " solid;\n        border-radius: 50%;\n        animation: ", " ", " infinite linear;\n        animation-play-state: ", ";\n\n        &:before, &:after {\n            content: '';\n            position: absolute;\n            width: 10px;\n            height: 10px;\n            background-color: ", ";\n            border-radius: 50%;\n        }\n\n        &:before {\n            top: calc( 50% - 5px );\n\t        left: calc( 50% - 5px );\n        }\n\n        &:after {\n            top: 1px;\n\t        left: 1px;\n        }\n\n    "], ["\n        width: inherit;\n        height: inherit;\n        position: relative;\n        border: 1px ", " solid;\n        border-radius: 50%;\n        animation: ", " ", " infinite linear;\n        animation-play-state: ", ";\n\n        &:before, &:after {\n            content: '';\n            position: absolute;\n            width: 10px;\n            height: 10px;\n            background-color: ", ";\n            border-radius: 50%;\n        }\n\n        &:before {\n            top: calc( 50% - 5px );\n\t        left: calc( 50% - 5px );\n        }\n\n        &:after {\n            top: 1px;\n\t        left: 1px;\n        }\n\n    "])), colors ? "" + colors[0] : "" + dProps.colors[0], HydrogenAnim, utilities_1.loaderDuration(duration, dProps.duration), utilities_1.pauseAnim(pause), colors ? "" + colors[1] : "" + dProps.colors[1]);
    return (react_1.default.createElement(wrapper_1.default, { size: size, loading: loading, dPropsSize: dProps.size },
        react_1.default.createElement(Hydrogen, null)));
};
exports.default = HydrogenLoader;
var templateObject_1, templateObject_2;
