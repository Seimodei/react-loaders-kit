"use strict";
/** @jsx jsx */
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
    size: 130,
    duration: .8,
    colors: [utilities_1.Colors.Purple, utilities_1.Colors.Pink]
};
var LinneardLoader = function (props) {
    var loading = props.loading, size = props.size, pause = props.pause, duration = props.duration, colors = props.colors;
    var customSize = size ? size : dProps.size;
    var dots = 23;
    var cellR = customSize * .3;
    var dotR = customSize * .05;
    var da = 360 / dots;
    var dur = duration ? duration : dProps.duration;
    var ddur = dur / dots;
    var numberOfDots = [];
    for (var i = 0; i < dots; i++) {
        numberOfDots.push(i);
    }
    var LinneardAnim = core_1.keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        to {\n            top: 100%;\n            transform: scale(.5);\n            background-color: ", ";\n        }\n    "], ["\n        to {\n            top: 100%;\n            transform: scale(.5);\n            background-color: ", ";\n        }\n    "])), colors ? "" + colors[1] : "" + dProps.colors[1]);
    var Wrapper = styled_1.default('div')(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n        position: relative;\n        overflow: hidden;\n        position: relative;\n        width: inherit;\n        height: inherit;\n        flex-grow: 1;\n        padding: ", "px;\n    "], ["\n        position: relative;\n        overflow: hidden;\n        position: relative;\n        width: inherit;\n        height: inherit;\n        flex-grow: 1;\n        padding: ", "px;\n    "])), customSize * .5);
    var Loader = styled_1.default('div')(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n        position: absolute;\n        top: 50%;\n        left: 50%;\n    "], ["\n        position: absolute;\n        top: 50%;\n        left: 50%;\n    "])));
    var Dot = styled_1.default('div')(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n        position: absolute;\n        top: ", "px;\n        height: ", "px;\n\n        &:after {\n            content: \"\";\n            position: absolute;\n            top: 0;\n            transform: translateX(-50%) translateY(-50%);\n            width: ", "px;\n            height: ", "px;\n            background-color: ", ";\n            border-radius: 100%;\n            transform: scale(1);\n            animation: ", " ", "s infinite alternate;\n            animation-play-state: ", ";\n        }\n    "], ["\n        position: absolute;\n        top: ", "px;\n        height: ", "px;\n\n        &:after {\n            content: \"\";\n            position: absolute;\n            top: 0;\n            transform: translateX(-50%) translateY(-50%);\n            width: ", "px;\n            height: ", "px;\n            background-color: ", ";\n            border-radius: 100%;\n            transform: scale(1);\n            animation: ", " ", "s infinite alternate;\n            animation-play-state: ", ";\n        }\n    "])), -1 * cellR, cellR * 2, dotR, dotR, colors ? "" + colors[0] : "" + dProps.colors[0], LinneardAnim, dur, utilities_1.pauseAnim(pause));
    var renderDots = function () {
        return numberOfDots.map(function (child, index) {
            return (core_1.jsx(Dot, { key: index, css: core_1.css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n                        transform: ", ";\n\n                        &:after {\n                            animation-delay: ", "s;\n                            animation-timing-function: cubic-bezier(0.65, 0.05, 0.36, 1);\n                        }\n                    "], ["\n                        transform: ", ";\n\n                        &:after {\n                            animation-delay: ", "s;\n                            animation-timing-function: cubic-bezier(0.65, 0.05, 0.36, 1);\n                        }\n                    "])), "rotate(" + da * index + "deg)", ddur * index * 2) }));
        });
    };
    return (core_1.jsx(wrapper_1.default, { size: customSize, loading: loading, dPropsSize: dProps.size },
        core_1.jsx(Wrapper, null,
            core_1.jsx(Loader, null, renderDots()))));
};
exports.default = LinneardLoader;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
