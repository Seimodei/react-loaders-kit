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
    colors: [utilities_1.Colors.Purple, utilities_1.Colors.Purple]
};
var DyingLightLoader = function (props) {
    var loading = props.loading, pause = props.pause, size = props.size, colors = props.colors;
    var borderColors = colors ? "1px solid " + colors[0] : "1px solid " + dProps.colors[0];
    var DyingLightAnim = core_1.keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        15% {\n            transform: scale(1.6);\n        }\n            \n        50% {\n            transform: rotate(-89deg);\n        }\n\n        100% {\n            transform: rotate(-90deg);\n        }\n    "], ["\n        15% {\n            transform: scale(1.6);\n        }\n            \n        50% {\n            transform: rotate(-89deg);\n        }\n\n        100% {\n            transform: rotate(-90deg);\n        }\n    "])));
    var Corners = core_1.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n        &:before, &:after {\n            display: block;\n            content: \"\";\n            width: 50%;\n            height: 50%;\n            position: absolute;\n        }\n    "], ["\n        &:before, &:after {\n            display: block;\n            content: \"\";\n            width: 50%;\n            height: 50%;\n            position: absolute;\n        }\n    "])));
    var DLCore = styled_1.default('div')(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n        width: inherit;\n        height: inherit;\n        position: absolute;\n        background-color: ", ";\n    "], ["\n        width: inherit;\n        height: inherit;\n        position: absolute;\n        background-color: ", ";\n    "])), colors ? "" + colors[1] : "" + dProps.colors[1]);
    var DLContainer = styled_1.default('div')(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n        position: relative;\n        width: inherit;\n        height: inherit;\n        display: inline-block;\n        animation: ", " 1s ease infinite;\n        animation-play-state: ", ";\n\n        &:before {\n            top: -5px;\n            left: -5px;\n            border-top: ", ";\n            border-left: ", ";\n        }\n\n        &:after {\n            top: -5px;\n            right: -5px;\n            border-top: ", ";\n            border-right: ", ";\n        }\n    "], ["\n        position: relative;\n        width: inherit;\n        height: inherit;\n        display: inline-block;\n        animation: ", " 1s ease infinite;\n        animation-play-state: ", ";\n\n        &:before {\n            top: -5px;\n            left: -5px;\n            border-top: ", ";\n            border-left: ", ";\n        }\n\n        &:after {\n            top: -5px;\n            right: -5px;\n            border-top: ", ";\n            border-right: ", ";\n        }\n    "])), DyingLightAnim, pause ? 'paused' : 'running', borderColors, borderColors, borderColors, borderColors);
    var DLSquare = styled_1.default('div')(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n        &:before {\n            bottom: -5px;\n            left: -5px;\n            border-bottom: ", ";\n            border-left: ", ";\n        }\n        &:after {\n            bottom: -5px;\n            right: -5px;\n            border-bottom: ", ";\n            border-right: ", ";\n        }\n    "], ["\n        &:before {\n            bottom: -5px;\n            left: -5px;\n            border-bottom: ", ";\n            border-left: ", ";\n        }\n        &:after {\n            bottom: -5px;\n            right: -5px;\n            border-bottom: ", ";\n            border-right: ", ";\n        }\n    "])), borderColors, borderColors, borderColors, borderColors);
    return (core_1.jsx(wrapper_1.default, { size: size, loading: loading, dPropsSize: dProps.size },
        core_1.jsx(DLContainer, { css: Corners },
            core_1.jsx(DLSquare, { css: Corners })),
        core_1.jsx(DLCore, null)));
};
exports.default = DyingLightLoader;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
