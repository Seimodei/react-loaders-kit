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
    size: 35,
    colors: [utilities_1.Colors.Purple, utilities_1.Colors.Purple, utilities_1.Colors.Purple, utilities_1.Colors.Purple]
};
var FlippingCubeLoader = function (props) {
    var loading = props.loading, size = props.size, pause = props.pause, colors = props.colors;
    var FlippingCubeAnim = core_1.keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    0%, 10% {\n        transform: perspective(140px) rotateX(-180deg);\n        opacity: 0;\n      }\n      25%, 75% {\n        transform: perspective(140px) rotateX(0deg);\n        opacity: 1;\n      }\n      90%, 100% {\n        transform: perspective(140px) rotateY(180deg);\n        opacity: 0;\n      }\n    "], ["\n    0%, 10% {\n        transform: perspective(140px) rotateX(-180deg);\n        opacity: 0;\n      }\n      25%, 75% {\n        transform: perspective(140px) rotateX(0deg);\n        opacity: 1;\n      }\n      90%, 100% {\n        transform: perspective(140px) rotateY(180deg);\n        opacity: 0;\n      }\n    "])));
    var Wrapper = styled_1.default('div')(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n        width: inherit;\n        height: inherit;\n        display: inline-block;\n        transform: rotate(45deg);\n    "], ["\n        width: inherit;\n        height: inherit;\n        display: inline-block;\n        transform: rotate(45deg);\n    "])));
    var Cube = styled_1.default('span')(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n        position: relative;\n        width: ", "; \n        height: ", ";\n        transform: scale(1.1);\n        display: inline-block;\n\n        &:before {\n            content: '';\n            background-color: ", ";\n            display: block;\n            width: ", "; \n            height: ", ";\n            transform-origin: 100% 100%;\n            animation: ", " 2.5s infinite linear both;\n            animation-play-state: ", ";\n        }\n    "], ["\n        position: relative;\n        width: ", "; \n        height: ", ";\n        transform: scale(1.1);\n        display: inline-block;\n\n        &:before {\n            content: '';\n            background-color: ", ";\n            display: block;\n            width: ", "; \n            height: ", ";\n            transform-origin: 100% 100%;\n            animation: ", " 2.5s infinite linear both;\n            animation-play-state: ", ";\n        }\n    "])), size ? size / 2 + "px" : dProps.size / 2 + "px", size ? size / 2 + "px" : dProps.size / 2 + "px", colors ? "" + colors[0] : "" + dProps.colors[0], size ? size / 2 + "px" : dProps.size / 2 + "px", size ? size / 2 + "px" : dProps.size / 2 + "px", FlippingCubeAnim, utilities_1.pauseAnim(pause));
    var Cube2 = core_1.css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n        transform: rotateZ(90deg) scale(1.1);\n\n        &:before{\n            animation-delay: 0.3s;\n            background-color: ", ";\n        }\n    "], ["\n        transform: rotateZ(90deg) scale(1.1);\n\n        &:before{\n            animation-delay: 0.3s;\n            background-color: ", ";\n        }\n    "])), colors ? "" + utilities_1.lightenDarkenColor(colors[1], -10) : "" + utilities_1.lightenDarkenColor(dProps.colors[1], -10));
    var Cube3 = core_1.css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n        transform: rotateZ(270deg) scale(1.1);\n\n        &:before{\n            animation-delay: 0.9s;\n            background-color: ", ";\n        }\n    "], ["\n        transform: rotateZ(270deg) scale(1.1);\n\n        &:before{\n            animation-delay: 0.9s;\n            background-color: ", ";\n        }\n    "])), colors ? "" + utilities_1.lightenDarkenColor(colors[2], -10) : "" + utilities_1.lightenDarkenColor(dProps.colors[2], -10));
    var Cube4 = core_1.css(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n        transform: rotateZ(180deg) scale(1.1);\n\n        &:before{\n            animation-delay: 0.6s;\n            background-color: ", ";\n        }\n    "], ["\n        transform: rotateZ(180deg) scale(1.1);\n\n        &:before{\n            animation-delay: 0.6s;\n            background-color: ", ";\n        }\n    "])), colors ? "" + utilities_1.lightenDarkenColor(colors[3], -20) : "" + utilities_1.lightenDarkenColor(dProps.colors[3], -20));
    return (core_1.jsx(wrapper_1.default, { size: size, loading: loading, dPropsSize: dProps.size },
        core_1.jsx(Wrapper, null,
            core_1.jsx(Cube, null),
            core_1.jsx(Cube, { css: Cube2 }),
            core_1.jsx(Cube, { css: Cube3 }),
            core_1.jsx(Cube, { css: Cube4 }))));
};
exports.default = FlippingCubeLoader;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
