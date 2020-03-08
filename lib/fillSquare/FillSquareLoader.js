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
    size: 40,
    duration: 1,
    colors: [utilities_1.Colors.Purple, utilities_1.Colors.Purple, utilities_1.Colors.Purple, utilities_1.Colors.Purple]
};
var FillSquareLoader = function (props) {
    var loading = props.loading, size = props.size, pause = props.pause, duration = props.duration, colors = props.colors;
    var BigSquareAnim = core_1.keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        0% {\n            transform: scale(1)\n        }\n        90% {\n            transform: scale(1)\n        }\n        100% {\n            transform: scale(0.5)\n        }\n    "], ["\n        0% {\n            transform: scale(1)\n        }\n        90% {\n            transform: scale(1)\n        }\n        100% {\n            transform: scale(0.5)\n        }\n    "])));
    var SquareAnim2 = core_1.keyframes(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n        0% {\n            transform: translateY(-", "px);\n        }\n        25% {\n            transform: translate(0);\n        }\n        100% {\n            transform: translate(0);\n        }\n    "], ["\n        0% {\n            transform: translateY(-", "px);\n        }\n        25% {\n            transform: translate(0);\n        }\n        100% {\n            transform: translate(0);\n        }\n    "])), size ? size + 10 : dProps.size + 10);
    var SquareAnim3 = core_1.keyframes(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n        0% {\n            transform: translateY(-", "px);\n        }\n        50% {\n            transform: translate(0);\n        }\n        100% {\n            transform: translate(0);\n        }\n    "], ["\n        0% {\n            transform: translateY(-", "px);\n        }\n        50% {\n            transform: translate(0);\n        }\n        100% {\n            transform: translate(0);\n        }\n    "])), size ? size + 10 : dProps.size + 10);
    var SquareAnim4 = core_1.keyframes(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n        0% {\n            transform: translateY(-", "px);\n        }\n        75% {\n            transform: translate(0);\n        }\n        100% {\n            transform: translate(0);\n        }\n    "], ["\n        0% {\n            transform: translateY(-", "px);\n        }\n        75% {\n            transform: translate(0);\n        }\n        100% {\n            transform: translate(0);\n        }\n    "])), size ? size + 10 : dProps.size + 10);
    var BigSquare = styled_1.default('div')(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n        position: relative;\n        display: inline-block;\n        width: inherit;\n        height: inherit;\n        overflow: hidden;\n        transform-origin: bottom left;\n        animation: ", " ", " linear infinite;\n        animation-play-state: ", ";\n    "], ["\n        position: relative;\n        display: inline-block;\n        width: inherit;\n        height: inherit;\n        overflow: hidden;\n        transform-origin: bottom left;\n        animation: ", " ", " linear infinite;\n        animation-play-state: ", ";\n    "])), BigSquareAnim, utilities_1.loaderDuration(duration, dProps.duration), utilities_1.pauseAnim(pause));
    var Square = styled_1.default('div')(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n        position: absolute;\n        width: ", "; \n        height: ", ";\n    "], ["\n        position: absolute;\n        width: ", "; \n        height: ", ";\n    "])), size ? size / 2 + "px" : dProps.size / 2 + "px", size ? size / 2 + "px" : dProps.size / 2 + "px");
    var Square1 = core_1.css(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n        left: 0px;\n        top: ", ";\n        background: ", ";\n    "], ["\n        left: 0px;\n        top: ", ";\n        background: ", ";\n    "])), size ? size / 2 + "px" : dProps.size / 2 + "px", colors ? "" + colors[0] : "" + dProps.colors[0]);
    var Square2 = core_1.css(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n        left: ", ";\n        top: ", ";\n        background: ", ";\n        animation: ", " ", " linear infinite;\n        animation-play-state: ", ";\n    "], ["\n        left: ", ";\n        top: ", ";\n        background: ", ";\n        animation: ", " ", " linear infinite;\n        animation-play-state: ", ";\n    "])), size ? size / 2 + "px" : dProps.size / 2 + "px", size ? size / 2 + "px" : dProps.size / 2 + "px", colors ? "" + colors[1] : "" + dProps.colors[1], SquareAnim2, utilities_1.loaderDuration(duration, dProps.duration), utilities_1.pauseAnim(pause));
    var Square3 = core_1.css(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n        left: 0px;\n        top: 0px;\n        background: ", ";\n        animation: ", " ", " linear infinite;\n        animation-play-state: ", ";\n    "], ["\n        left: 0px;\n        top: 0px;\n        background: ", ";\n        animation: ", " ", " linear infinite;\n        animation-play-state: ", ";\n    "])), colors ? "" + colors[2] : "" + dProps.colors[2], SquareAnim3, utilities_1.loaderDuration(duration, dProps.duration), utilities_1.pauseAnim(pause));
    var Square4 = core_1.css(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n        left: ", ";\n        top: 0px;\n        background: ", ";\n        animation: ", " ", " linear infinite;\n        animation-play-state: ", ";\n    "], ["\n        left: ", ";\n        top: 0px;\n        background: ", ";\n        animation: ", " ", " linear infinite;\n        animation-play-state: ", ";\n    "])), size ? size / 2 + "px" : dProps.size / 2 + "px", colors ? "" + colors[3] : "" + dProps.colors[3], SquareAnim4, utilities_1.loaderDuration(duration, dProps.duration), utilities_1.pauseAnim(pause));
    return (core_1.jsx(wrapper_1.default, { size: size, loading: loading, dPropsSize: dProps.size },
        core_1.jsx(BigSquare, null,
            core_1.jsx(Square, { css: Square1 }),
            core_1.jsx(Square, { css: Square2 }),
            core_1.jsx(Square, { css: Square3 }),
            core_1.jsx(Square, { css: Square4 }))));
};
exports.default = FillSquareLoader;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10;
