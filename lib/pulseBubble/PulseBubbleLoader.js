"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_1 = __importDefault(require("@emotion/styled"));
var core_1 = require("@emotion/core");
var utilities_1 = require("../utilities/utilities");
var wrapper_1 = __importDefault(require("../wrapper/wrapper"));
var dProps = {
    loading: true,
    size: 55,
    colors: [utilities_1.Colors.Purple, utilities_1.Colors.Purple, utilities_1.Colors.Purple]
};
var PulseBubbleLoader = function (props) {
    var loading = props.loading, pause = props.pause, size = props.size, colors = props.colors;
    var bubbleConfig = function (loaderSize) {
        if (loaderSize < 80 && loaderSize > 60) {
            return 15;
        }
        else if (loaderSize < 60) {
            return 11;
        }
        return 20;
    };
    var PulseAnimation = core_1.keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        from {\n            opacity: 1;\n            transform: scale(1);\n        }\n        to {\n            opacity: .25;\n            transform: scale(.75);\n        }\n    "], ["\n        from {\n            opacity: 1;\n            transform: scale(1);\n        }\n        to {\n            opacity: .25;\n            transform: scale(.75);\n        }\n    "])));
    var PulseContainer = styled_1.default('div')(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n        width: inherit;\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n    "], ["\n        width: inherit;\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n    "])));
    var PulseBubble = styled_1.default('div')(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n        width: ", ";\n        height: ", ";\n        border-radius: 50%;\n    "], ["\n        width: ", ";\n        height: ", ";\n        border-radius: 50%;\n    "])), size ? bubbleConfig(size) + "px" : bubbleConfig(dProps.size) + "px", size ? bubbleConfig(size) + "px" : bubbleConfig(dProps.size) + "px");
    var Bubble1 = core_1.css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n        background-color: ", ";\n        animation: ", " .4s ease 0s infinite alternate;\n        animation-play-state: ", ";\n    "], ["\n        background-color: ", ";\n        animation: ", " .4s ease 0s infinite alternate;\n        animation-play-state: ", ";\n    "])), colors ? "" + colors[0] : "" + dProps.colors[0], PulseAnimation, pause ? 'paused' : 'running');
    var Bubble2 = core_1.css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n        background-color: ", ";\n        animation: ", " .4s ease .1s infinite alternate;\n        animation-play-state: ", ";\n    "], ["\n        background-color: ", ";\n        animation: ", " .4s ease .1s infinite alternate;\n        animation-play-state: ", ";\n    "])), colors ? "" + colors[1] : "" + dProps.colors[1], PulseAnimation, pause ? 'paused' : 'running');
    var Bubble3 = core_1.css(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n        background-color: ", ";\n        animation: ", " .4s ease .2s infinite alternate;\n        animation-play-state: ", ";\n    "], ["\n        background-color: ", ";\n        animation: ", " .4s ease .2s infinite alternate;\n        animation-play-state: ", ";\n    "])), colors ? "" + colors[2] : "" + dProps.colors[2], PulseAnimation, pause ? 'paused' : 'running');
    return (core_1.jsx(wrapper_1.default, { size: size, loading: loading, dPropsSize: dProps.size },
        core_1.jsx(PulseContainer, null,
            core_1.jsx(PulseBubble, { css: Bubble1 }),
            core_1.jsx(PulseBubble, { css: Bubble2 }),
            core_1.jsx(PulseBubble, { css: Bubble3 }))));
};
exports.default = PulseBubbleLoader;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
