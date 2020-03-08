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
    size: 80,
    colors: [utilities_1.Colors.Yellow, utilities_1.Colors.Purple, utilities_1.Colors.Pink]
};
var GooeyCircleLoader = function (props) {
    var loading = props.loading, size = props.size, pause = props.pause, colors = props.colors;
    var IndexAnim = core_1.keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        0%, 100% {\n            z-index: 3;\n        }\n        33.3% {\n            z-index: 2;\n        }\n        66.6% {\n            z-index: 1;\n        }\n    "], ["\n        0%, 100% {\n            z-index: 3;\n        }\n        33.3% {\n            z-index: 2;\n        }\n        66.6% {\n            z-index: 1;\n        }\n    "])));
    var RotateMoveAnim = core_1.keyframes(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n        55% {\n            transform: rotate(0deg)\n        }\n        80% {\n            transform: rotate(360deg)\n        }\n        100% {\n            transform: rotate(360deg)\n        }\n    "], ["\n        55% {\n            transform: rotate(0deg)\n        }\n        80% {\n            transform: rotate(360deg)\n        }\n        100% {\n            transform: rotate(360deg)\n        }\n    "])));
    var Dot1Anim = core_1.keyframes(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n        20% {\n            transform: scale(1)\n        }\n        45% {\n            transform: translate(25%, 15%) scale(.45)\n        }\n        60% {\n            transform: translate(35%, 30%) scale(.45)\n        }\n        80% {\n            transform: translate(35%, 30%) scale(.45)\n        }\n        100% {\n            transform: translateY(0px) scale(1)\n        }\n    "], ["\n        20% {\n            transform: scale(1)\n        }\n        45% {\n            transform: translate(25%, 15%) scale(.45)\n        }\n        60% {\n            transform: translate(35%, 30%) scale(.45)\n        }\n        80% {\n            transform: translate(35%, 30%) scale(.45)\n        }\n        100% {\n            transform: translateY(0px) scale(1)\n        }\n    "])));
    var Dot2Anim = core_1.keyframes(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n        20% {\n            transform: scale(1)\n        }\n        45% {\n            transform: translate(-25%, 15%) scale(.45)\n        }\n        60% {\n            transform: translate(-35%, 30%) scale(.45)\n        }\n        80% {\n            transform: translate(-35%, 30%) scale(.45)\n        }\n        100% {\n            transform: translateY(0px) scale(1)\n        }\n    "], ["\n        20% {\n            transform: scale(1)\n        }\n        45% {\n            transform: translate(-25%, 15%) scale(.45)\n        }\n        60% {\n            transform: translate(-35%, 30%) scale(.45)\n        }\n        80% {\n            transform: translate(-35%, 30%) scale(.45)\n        }\n        100% {\n            transform: translateY(0px) scale(1)\n        }\n    "])));
    var Dot3Anim = core_1.keyframes(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n        20% {\n            transform: scale(1)\n        }\n        45% {\n            transform: translateY(-22%) scale(.45)\n        }\n        60% {\n            transform: translateY(-40%) scale(.45)\n        }\n        80% {\n            transform: translateY(-40%) scale(.45)\n        }\n        100% {\n            transform: translateY(0px) scale(1)\n        }\n    "], ["\n        20% {\n            transform: scale(1)\n        }\n        45% {\n            transform: translateY(-22%) scale(.45)\n        }\n        60% {\n            transform: translateY(-40%) scale(.45)\n        }\n        80% {\n            transform: translateY(-40%) scale(.45)\n        }\n        100% {\n            transform: translateY(0px) scale(1)\n        }\n    "])));
    var Dot1 = core_1.css(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n        background-color: ", ";\n        animation: ", " 2s ease infinite, ", " 6s -2s ease infinite;\n        animation-play-state: ", ";\n    "], ["\n        background-color: ", ";\n        animation: ", " 2s ease infinite, ", " 6s -2s ease infinite;\n        animation-play-state: ", ";\n    "])), colors ? "" + colors[0] : "" + dProps.colors[0], Dot1Anim, IndexAnim, pause ? 'paused' : 'running');
    var Dot2 = core_1.css(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n        background-color: ", ";\n        animation: ", " 2s ease infinite, ", " 6s -4s ease infinite;\n        animation-play-state: ", ";\n    "], ["\n        background-color: ", ";\n        animation: ", " 2s ease infinite, ", " 6s -4s ease infinite;\n        animation-play-state: ", ";\n    "])), colors ? "" + colors[1] : "" + dProps.colors[1], Dot2Anim, IndexAnim, pause ? 'paused' : 'running');
    var Dot3 = core_1.css(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n        background-color: ", ";\n        animation: ", " 2s ease infinite, ", " 6s ease infinite;\n        animation-play-state: ", ";\n    "], ["\n        background-color: ", ";\n        animation: ", " 2s ease infinite, ", " 6s ease infinite;\n        animation-play-state: ", ";\n    "])), colors ? "" + colors[2] : "" + dProps.colors[2], Dot3Anim, IndexAnim, pause ? 'paused' : 'running');
    var Container = styled_1.default('div')(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n        width: inherit;\n        height: inherit;\n        filter: url('#goo');\n        animation: ", " 2s ease-in-out infinite;\n        animation-play-state: ", ";\n    "], ["\n        width: inherit;\n        height: inherit;\n        filter: url('#goo');\n        animation: ", " 2s ease-in-out infinite;\n        animation-play-state: ", ";\n    "])), RotateMoveAnim, pause ? 'paused' : 'running');
    var Dot = styled_1.default('div')(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n        width: 45%;\n        height: 45%;\n        border-radius: 50%;\n        position: absolute;\n        top: 0;\n        bottom: 0;\n        left: 0;\n        right: 0;\n        margin: auto;\n    "], ["\n        width: 45%;\n        height: 45%;\n        border-radius: 50%;\n        position: absolute;\n        top: 0;\n        bottom: 0;\n        left: 0;\n        right: 0;\n        margin: auto;\n    "])));
    var SVG = styled_1.default('svg')(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n        width: 0;\n        height: 0;\n    "], ["\n        width: 0;\n        height: 0;\n    "])));
    return (core_1.jsx(wrapper_1.default, { size: size, loading: loading, dPropsSize: dProps.size },
        core_1.jsx(SVG, { viewBox: "0 0 0 0" },
            core_1.jsx("defs", null,
                core_1.jsx("filter", { id: "goo" },
                    core_1.jsx("feGaussianBlur", { in: "SourceGraphic", stdDeviation: "6", result: "blur" }),
                    core_1.jsx("feColorMatrix", { in: "blur", mode: "matrix", values: "1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 21 -7" })))),
        core_1.jsx(Container, null,
            core_1.jsx(Dot, { css: Dot1 }),
            core_1.jsx(Dot, { css: Dot2 }),
            core_1.jsx(Dot, { css: Dot3 }))));
};
exports.default = GooeyCircleLoader;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11;
