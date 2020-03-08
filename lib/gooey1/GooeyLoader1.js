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
    size: 60,
    color: utilities_1.Colors.Purple
};
var GooeyLoader1 = function (props) {
    var loading = props.loading, size = props.size, pause = props.pause, color = props.color;
    var Circle = core_1.keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        50% {\n            width: 25%;\n            height: 25%;\n        }\n        100% {\n            transform: rotate(360deg);\n        }\n    "], ["\n        50% {\n            width: 25%;\n            height: 25%;\n        }\n        100% {\n            transform: rotate(360deg);\n        }\n    "])));
    var Dot1 = core_1.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n        animation-delay: .25s;\n    "], ["\n        animation-delay: .25s;\n    "])));
    var Dot2 = core_1.css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n        animation-delay: .5s;\n    "], ["\n        animation-delay: .5s;\n    "])));
    var Dot3 = core_1.css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n        animation-delay: .75s;\n    "], ["\n        animation-delay: .75s;\n    "])));
    var Dot4 = core_1.css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n        animation-delay: 1s;\n    "], ["\n        animation-delay: 1s;\n    "])));
    var Dot5 = core_1.css(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n        animation-delay: 1.25s;\n    "], ["\n        animation-delay: 1.25s;\n    "])));
    var Container = styled_1.default('div')(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n        position: relative;\n        width: inherit;\n        height: inherit;\n        filter: url('#goo');\n    "], ["\n        position: relative;\n        width: inherit;\n        height: inherit;\n        filter: url('#goo');\n    "])));
    var Dot = styled_1.default('div')(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n        position: absolute;\n        background: ", ";\n        width: 25%;\n        height: 25%;\n        border-radius: 50%;\n        top:50%;\n\t    left:50%;\n\t\ttransform-origin: -50% -50%;\n        animation: ", " 2.5s infinite cubic-bezier(.57, 0, .52, 1);\n        animation-play-state: ", ";\n    "], ["\n        position: absolute;\n        background: ", ";\n        width: 25%;\n        height: 25%;\n        border-radius: 50%;\n        top:50%;\n\t    left:50%;\n\t\ttransform-origin: -50% -50%;\n        animation: ", " 2.5s infinite cubic-bezier(.57, 0, .52, 1);\n        animation-play-state: ", ";\n    "])), utilities_1.loaderColor(color, dProps.color), Circle, pause ? 'paused' : 'running');
    var SVG = styled_1.default('svg')(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n        width: 0;\n        height: 0;\n    "], ["\n        width: 0;\n        height: 0;\n    "])));
    return (core_1.jsx(wrapper_1.default, { size: size, loading: loading, dPropsSize: dProps.size },
        core_1.jsx(SVG, { viewBox: "0 0 0 0" },
            core_1.jsx("defs", null,
                core_1.jsx("filter", { id: "goo" },
                    core_1.jsx("feGaussianBlur", { in: "SourceGraphic", stdDeviation: "6", result: "blur" }),
                    core_1.jsx("feColorMatrix", { in: "blur", mode: "matrix", values: "1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 21 -7", result: "goo" })))),
        core_1.jsx(Container, null,
            core_1.jsx(Dot, { css: Dot1 }),
            core_1.jsx(Dot, { css: Dot2 }),
            core_1.jsx(Dot, { css: Dot3 }),
            core_1.jsx(Dot, { css: Dot4 }),
            core_1.jsx(Dot, { css: Dot5 }))));
};
exports.default = GooeyLoader1;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9;
