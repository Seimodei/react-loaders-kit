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
    color: utilities_1.Colors.Purple,
    duration: 2
};
var LiquidLoader = function (props) {
    var loading = props.loading, pause = props.pause, size = props.size, color = props.color, duration = props.duration;
    var LiquidAnim = core_1.keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        0% {\n            transform: rotate( 0deg );\n        }\n            \n        100% {\n            transform: rotate( 360deg );\n        }\n        \n    "], ["\n        0% {\n            transform: rotate( 0deg );\n        }\n            \n        100% {\n            transform: rotate( 360deg );\n        }\n        \n    "])));
    var liquidSize = 100;
    var DIV = styled_1.default('div')(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n        transform: scale(", ");\n    "], ["\n        transform: scale(", ");\n    "])), size ? size / 100 : dProps.size / 100);
    var Loader = styled_1.default('div')(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n        position: absolute;\n        margin: -", "px 0 0 -", "px;\n        border: ", "px solid ", ";\n        box-sizing: border-box;\n        overflow: hidden;\n        width: ", "px;\n        height: ", "px;\n        left: 50%;\n        top: 50%;\n        animation: ", " ", " linear infinite reverse;\n        animation-play-state: ", ";\n        filter: url(#goo);\n        box-shadow: 0 0 0 1px ", " inset;\n\n        &:before {\n            content: \"\";\n            position: absolute;\n            animation: ", " ", " cubic-bezier(.59,.25,.4,.69) infinite;\n            animation-play-state: ", ";\n            background: ", ";\n            transform-origin: top center;\n            border-radius: 50%;\n            width: 150%;\n            height: 150%;\n            top: 50%;\n            left: -12.5%;\n        }\n    "], ["\n        position: absolute;\n        margin: -", "px 0 0 -", "px;\n        border: ", "px solid ", ";\n        box-sizing: border-box;\n        overflow: hidden;\n        width: ", "px;\n        height: ", "px;\n        left: 50%;\n        top: 50%;\n        animation: ", " ", " linear infinite reverse;\n        animation-play-state: ", ";\n        filter: url(#goo);\n        box-shadow: 0 0 0 1px ", " inset;\n\n        &:before {\n            content: \"\";\n            position: absolute;\n            animation: ", " ", " cubic-bezier(.59,.25,.4,.69) infinite;\n            animation-play-state: ", ";\n            background: ", ";\n            transform-origin: top center;\n            border-radius: 50%;\n            width: 150%;\n            height: 150%;\n            top: 50%;\n            left: -12.5%;\n        }\n    "])), liquidSize / 2, liquidSize / 2, liquidSize * 0.1, utilities_1.Colors.Purple, liquidSize, liquidSize, LiquidAnim, duration ? duration + "s" : dProps.duration + "s", pause ? 'paused' : 'running', color ? "" + color : "" + dProps.color, LiquidAnim, duration ? duration + "s" : dProps.duration + "s", pause ? 'paused' : 'running', color ? "" + color : "" + dProps.color);
    return (react_1.default.createElement(wrapper_1.default, { size: 100, loading: loading, dPropsSize: 100 },
        react_1.default.createElement(DIV, null,
            react_1.default.createElement(Loader, null,
                react_1.default.createElement("svg", null,
                    react_1.default.createElement("defs", null,
                        react_1.default.createElement("filter", { id: "goo" },
                            react_1.default.createElement("feGaussianBlur", { in: "SourceGraphic", stdDeviation: "2", result: "blur" }),
                            react_1.default.createElement("feColorMatrix", { in: "blur", mode: "matrix", values: "1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 5 -2", result: "gooey" }),
                            react_1.default.createElement("feComposite", { in: "SourceGraphic", in2: "gooey", operator: "atop" }))))))));
};
exports.default = LiquidLoader;
var templateObject_1, templateObject_2, templateObject_3;
