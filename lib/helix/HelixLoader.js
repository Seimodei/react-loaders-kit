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
    size: 90,
    duration: 1.5,
    colors: [utilities_1.Colors.Purple, utilities_1.Colors.Yellow],
    numberOfDots: 10
};
var HelixLoader = function (props) {
    var loading = props.loading, size = props.size, pause = props.pause, duration = props.duration, colors = props.colors, numberOfDots = props.numberOfDots;
    var customSize = size ? size : dProps.size;
    var dots = numberOfDots ? numberOfDots : dProps.numberOfDots;
    var time = duration ? duration : dProps.duration;
    var delay = 0.1;
    var padding = 0.6;
    var numberOfDot = [];
    for (var i = 0; i < dots; i++) {
        numberOfDot.push(i);
    }
    var DnaRotate = core_1.keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        0%   { \n            opacity: 1;\n            transform: scale(1);\n            left:40%;\n            z-index: 0;\n        }\n        25%  { \n            opacity: 1;\n            transform: scale(1.8);\n        }\n        50%  { \n            opacity: 1;\n            left:60%; \n            z-index: 1; \n            transform: scale(1);\n        }\n        75%  {\n            opacity: 1;\n            transform: scale(0.5);\n        }\n        100% {\n            opacity: 1;\n            left:40%;  \n            z-index: 0;\n            transform: scale(1);\n        }\n    "], ["\n        0%   { \n            opacity: 1;\n            transform: scale(1);\n            left:40%;\n            z-index: 0;\n        }\n        25%  { \n            opacity: 1;\n            transform: scale(1.8);\n        }\n        50%  { \n            opacity: 1;\n            left:60%; \n            z-index: 1; \n            transform: scale(1);\n        }\n        75%  {\n            opacity: 1;\n            transform: scale(0.5);\n        }\n        100% {\n            opacity: 1;\n            left:40%;  \n            z-index: 0;\n            transform: scale(1);\n        }\n    "])));
    var Loader = styled_1.default('div')(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n        position: absolute;\n        width: inherit;\n        height: inherit;\n        left: 50%;\n        top: 50%;\n        transform: translateX(-50%) translateY(-50%) rotate(-90deg) scaleX(-1);\n    "], ["\n        position: absolute;\n        width: inherit;\n        height: inherit;\n        left: 50%;\n        top: 50%;\n        transform: translateX(-50%) translateY(-50%) rotate(-90deg) scaleX(-1);\n    "])));
    var Dot = styled_1.default('div')(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n        position: absolute;\n        left: 0;\n        width: ", "px;\n        height: ", "px;\n        border-radius: 50%;\n        opacity: 0;\n    "], ["\n        position: absolute;\n        left: 0;\n        width: ", "px;\n        height: ", "px;\n        border-radius: 50%;\n        opacity: 0;\n    "])), 0.09 * customSize, 0.09 * customSize);
    var renderDots = function () {
        return numberOfDot.map(function (child, index) {
            return (core_1.jsx(Dot, { key: index, css: core_1.css(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n                        top: ", "rem;\n                        background-color: ", ";\n                        animation: ", ";\n                        animation-play-state: ", ";\n                    "], ["\n                        top: ", "rem;\n                        background-color: ",
                    ";\n                        animation: ",
                    ";\n                        animation-play-state: ", ";\n                    "])), index * padding, index % 2 === 0 ?
                    "" + (colors ? "" + colors[1] : "" + dProps.colors[1]) :
                    "" + (colors ? "" + colors[0] : "" + dProps.colors[0]), index % 2 === 0 ? core_1.css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["", " ", "s ", "s infinite ease-in-out"], ["", " ", "s ", "s infinite ease-in-out"])), DnaRotate, time, index * delay) : core_1.css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["", " ", "s ", "s infinite ease-in-out"], ["", " ", "s ", "s infinite ease-in-out"])), DnaRotate, time, index * delay + time / 2), utilities_1.pauseAnim(pause)) }));
        });
    };
    return (core_1.jsx(wrapper_1.default, { size: customSize, loading: loading, dPropsSize: dProps.size },
        core_1.jsx(Loader, null, renderDots())));
};
exports.default = HelixLoader;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
