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
    size: 150,
    jellyNumber: 5,
    duration: 0.6,
    colors: [utilities_1.Colors.Purple, utilities_1.Colors.Purple, utilities_1.Colors.Purple, utilities_1.Colors.Purple, utilities_1.Colors.Purple]
};
var JellyBounceLoader = function (props) {
    var loading = props.loading, size = props.size, pause = props.pause, jellyNumber = props.jellyNumber, duration = props.duration, colors = props.colors;
    var numberOfChildren = jellyNumber ? jellyNumber : dProps.jellyNumber;
    var left = 25;
    var count = 40;
    var delay = 75;
    var strokeReg = 3;
    var dst = 10;
    var jellyChildren = [];
    for (var i = 0; i < numberOfChildren; i++) {
        jellyChildren.push(i);
    }
    var Jump = core_1.keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        40% {\n            transform: ", ";\n            opacity: .9;\n        }\n        40% {\n            rx: ", "px;\n            ry: ", "px;\n            stroke-width: ", "px;\n        }\n        45% {\n            rx: ", "px;\n            ry: ", "px;\n            stroke-width: ", "px;\n        }\n        55% {\n            rx: ", "px;\n            ry: ", "px;\n        }\n    "], ["\n        40% {\n            transform: ", ";\n            opacity: .9;\n        }\n        40% {\n            rx: ", "px;\n            ry: ", "px;\n            stroke-width: ", "px;\n        }\n        45% {\n            rx: ", "px;\n            ry: ", "px;\n            stroke-width: ", "px;\n        }\n        55% {\n            rx: ", "px;\n            ry: ", "px;\n        }\n    "])), "translate3d(0, " + dst * 2 + "px, 0) scale(1.3)", dst, dst, strokeReg, dst + 5, dst - 3, strokeReg + 1, dst, dst);
    var Shadow = core_1.keyframes(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n        45% {\n            opacity: .15;\n            rx: ", "px;\n            ry: ", "px;\n            transform: ", ";\n        }\n    "], ["\n        45% {\n            opacity: .15;\n            rx: ", "px;\n            ry: ", "px;\n            transform: ", ";\n        }\n    "])), dst, dst - 7, "translate3d(0, " + (dst - 10) + "px, 0) scale(1.3)");
    var SVG = styled_1.default('svg')(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n        width: inherit;\n        height: 80;\n        position: absolute;\n\n        ellipse {\n            transform-origin: center;\n            cx: 25;\n            cy: 20;\n            rx: 10;\n            ry: 10;\n            fill: none;\n        }\n    "], ["\n        width: inherit;\n        height: 80;\n        position: absolute;\n\n        ellipse {\n            transform-origin: center;\n            cx: 25;\n            cy: 20;\n            rx: 10;\n            ry: 10;\n            fill: none;\n        }\n    "])));
    var renderCircles = function () {
        return jellyChildren.map(function (child, index) {
            return (core_1.jsx(SVG, { key: index, viewBox: '-30 0 255 80', css: core_1.css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n                        ellipse {\n                            stroke: ", ";\n                            cx: ", ";\n                            stroke-width: 3px;\n                            opacity: .7;\n                            animation: ", " ", "s infinite ease-in-out;\n                            animation-delay: ", "ms;\n                            animation-play-state: ", ";\n                        }\n                    "], ["\n                        ellipse {\n                            stroke: ", ";\n                            cx: ", ";\n                            stroke-width: 3px;\n                            opacity: .7;\n                            animation: ", " ", "s infinite ease-in-out;\n                            animation-delay: ", "ms;\n                            animation-play-state: ", ";\n                        }\n                    "])), colors ? "" + colors[index] : "" + dProps.colors[index], left + (count * index), Jump, duration ? duration : dProps.duration, delay * index, pause ? 'paused' : 'running') },
                core_1.jsx("ellipse", null)));
        });
    };
    var renderShadows = function () {
        return jellyChildren.map(function (child, index) {
            return (core_1.jsx(SVG, { key: index, viewBox: '-30 0 255 80', css: core_1.css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n                        ellipse {\n                            fill: #333333;\n                            opacity: .5;\n                            rx: 0;\n                            ry: 0;\n                            cx: ", ";\n                            cy: 48px;\n                            animation: ", " ", "s infinite ease-in-out;\n                            animation-delay: ", "ms;\n                        }\n                    "], ["\n                        ellipse {\n                            fill: #333333;\n                            opacity: .5;\n                            rx: 0;\n                            ry: 0;\n                            cx: ", ";\n                            cy: 48px;\n                            animation: ", " ", "s infinite ease-in-out;\n                            animation-delay: ", "ms;\n                        }\n                    "])), left + (count * index), Shadow, duration ? duration : dProps.duration, delay * index) },
                core_1.jsx("ellipse", null)));
        });
    };
    return (core_1.jsx(wrapper_1.default, { size: size, loading: loading, dPropsSize: dProps.size },
        renderCircles(),
        renderShadows()));
};
exports.default = JellyBounceLoader;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
