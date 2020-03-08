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
    size: 50,
    duration: .8,
    color: utilities_1.Colors.Purple
};
var DrawWaveLoader = function (props) {
    var loading = props.loading, size = props.size, pause = props.pause, duration = props.duration, color = props.color;
    var Slide = core_1.keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        50% {\n            transform: translateY(10px);\n        }\n    "], ["\n        50% {\n            transform: translateY(10px);\n        }\n    "])));
    var Loader = styled_1.default('div')(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n        display: flex;\n    "], ["\n        display: flex;\n    "])));
    var Wave = styled_1.default('div')(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n        width: ", ";\n        height: ", ";;\n        border: 2px solid #ffffff;\n        background: ", ";\n        margin-left: -2px;\n        animation: ", " ", " infinite linear;\n        animation-play-state: ", ";\n        \n        &:first-of-type {\n            border-top-left-radius: 1000px;\n            border-bottom-left-radius: 1000px;\n        }\n    \n        &:last-of-type {\n            border-top-right-radius: 1000px;\n            border-bottom-right-radius: 1000px;\n        }\n        \n        &:nth-of-type(2n+1) {\n            animation-delay: ", "s;\n        }\n    "], ["\n        width: ", ";\n        height: ", ";;\n        border: 2px solid #ffffff;\n        background: ", ";\n        margin-left: -2px;\n        animation: ", " ", " infinite linear;\n        animation-play-state: ", ";\n        \n        &:first-of-type {\n            border-top-left-radius: 1000px;\n            border-bottom-left-radius: 1000px;\n        }\n    \n        &:last-of-type {\n            border-top-right-radius: 1000px;\n            border-bottom-right-radius: 1000px;\n        }\n        \n        &:nth-of-type(2n+1) {\n            animation-delay: ", "s;\n        }\n    "])), size ? size * 0.2 + "px" : dProps.size * 0.2 + "px", size ? size * 0.44 + "px" : dProps.size * 0.44 + "px", color ? "" + color : "" + dProps.color, Slide, utilities_1.loaderDuration(duration, dProps.duration), utilities_1.pauseAnim(pause), duration ? duration / 2 : dProps.duration / 2);
    return (react_1.default.createElement(wrapper_1.default, { size: size, loading: loading, dPropsSize: dProps.size },
        react_1.default.createElement(Loader, null,
            react_1.default.createElement(Wave, null),
            react_1.default.createElement(Wave, null),
            react_1.default.createElement(Wave, null),
            react_1.default.createElement(Wave, null),
            react_1.default.createElement(Wave, null))));
};
exports.default = DrawWaveLoader;
var templateObject_1, templateObject_2, templateObject_3;
