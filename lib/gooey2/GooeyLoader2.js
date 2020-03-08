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
var GooeyLoader2 = function (props) {
    var loading = props.loading, size = props.size, pause = props.pause, color = props.color;
    var Sideways = core_1.keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        33% {\n            transform: translateX(20px);\n        }\n        66% {\n            transform: translateX(-10px);\n        }\n    "], ["\n        33% {\n            transform: translateX(20px);\n        }\n        66% {\n            transform: translateX(-10px);\n        }\n    "])));
    var Dot1 = core_1.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n        animation-delay: .25s;\n    "], ["\n        animation-delay: .25s;\n    "])));
    var Dot2 = core_1.css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n        animation-delay: .5s;\n    "], ["\n        animation-delay: .5s;\n    "])));
    var Dot3 = core_1.css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n        animation-delay: .75s;\n    "], ["\n        animation-delay: .75s;\n    "])));
    var Dot4 = core_1.css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n        animation-delay: 1s;\n    "], ["\n        animation-delay: 1s;\n    "])));
    var Dot5 = core_1.css(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n        animation-delay: 1.25s;\n    "], ["\n        animation-delay: 1.25s;\n    "])));
    var Container = styled_1.default('div')(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        width: inherit;\n        height: inherit;\n        filter: url('#goo');\n    "], ["\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        width: inherit;\n        height: inherit;\n        filter: url('#goo');\n    "])));
    var Dot = styled_1.default('div')(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n        background: ", ";\n        width: ", ";\n        height: ", ";\n        margin: 0 5px;\n        border-radius: 50%;\n        transform: translateX(0);\n        animation: ", " 2.5s infinite ease;\n        animation-play-state: ", ";\n    "], ["\n        background: ", ";\n        width: ", ";\n        height: ", ";\n        margin: 0 5px;\n        border-radius: 50%;\n        transform: translateX(0);\n        animation: ", " 2.5s infinite ease;\n        animation-play-state: ", ";\n    "])), utilities_1.loaderColor(color, dProps.color), size ? size * 0.3 + "px" : dProps.size * 0.3 + "px", size ? size * 0.3 + "px" : dProps.size * 0.3 + "px", Sideways, pause ? 'paused' : 'running');
    var SVG = styled_1.default('svg')(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n        width: 0;\n        height: 0;\n    "], ["\n        width: 0;\n        height: 0;\n    "])));
    return (core_1.jsx(wrapper_1.default, { size: 200, loading: loading, dPropsSize: dProps.size },
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
exports.default = GooeyLoader2;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9;
