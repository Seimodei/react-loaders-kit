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
    duration: .5,
    color: utilities_1.Colors.Purple
};
var CircleFadeLoader = function (props) {
    var loading = props.loading, size = props.size, pause = props.pause, duration = props.duration, color = props.color;
    var Dot1Anim = core_1.keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        100% {\n            transform: translateX(", "px);\n            opacity: 1;\n            filter: none;\n        }\n    "], ["\n        100% {\n            transform: translateX(", "px);\n            opacity: 1;\n            filter: none;\n        }\n    "])), size ? size * 0.375 : dProps.size * 0.375);
    var Dot2Anim = core_1.keyframes(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n        100% {\n            transform: translateX(", "px);\n        }\n    "], ["\n        100% {\n            transform: translateX(", "px);\n        }\n    "])), size ? size * 0.375 : dProps.size * 0.375);
    var Dot3Anim = core_1.keyframes(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n        100% {\n            transform: translateX(", "px);\n            opacity: 0;\n            filter: alpha(opacity=0);\n        }\n    "], ["\n        100% {\n            transform: translateX(", "px);\n            opacity: 0;\n            filter: alpha(opacity=0);\n        }\n    "])), size ? size * 0.75 : dProps.size * 0.75);
    var Dots = styled_1.default('div')(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n        display: flex;\n    "], ["\n        display: flex;\n    "])));
    var Dot = styled_1.default('i')(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n        width: ", "px;\n        height: ", "px;\n        display: block;\n        background: ", ";\n        border-radius: 50%;\n        margin: 0 ", "px;\n        animation: ", " ", " linear infinite;\n        animation-play-state: ", ";\n    "], ["\n        width: ", "px;\n        height: ", "px;\n        display: block;\n        background: ", ";\n        border-radius: 50%;\n        margin: 0 ", "px;\n        animation: ", " ", " linear infinite;\n        animation-play-state: ", ";\n    "])), size ? size * 0.2 : dProps.size * 0.2, size ? size * 0.2 : dProps.size * 0.2, utilities_1.loaderColor(color, dProps.color), size ? (size * 0.2) / 2 : (dProps.size * 0.2) / 2, Dot2Anim, utilities_1.loaderDuration(duration, dProps.duration), utilities_1.pauseAnim(pause));
    var dot1css = core_1.css(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n        animation: ", " ", " linear infinite;\n        opacity: 0;\n        transform: translateX(-", "px);\n        animation-play-state: ", ";\n    "], ["\n        animation: ", " ", " linear infinite;\n        opacity: 0;\n        transform: translateX(-", "px);\n        animation-play-state: ", ";\n    "])), Dot1Anim, utilities_1.loaderDuration(duration, dProps.duration), size ? size * 0.375 : dProps.size * 0.375, utilities_1.pauseAnim(pause));
    var dot4css = core_1.css(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n        animation: ", " ", " linear infinite;\n        animation-play-state: ", ";\n    "], ["\n        animation: ", " ", " linear infinite;\n        animation-play-state: ", ";\n    "])), Dot3Anim, utilities_1.loaderDuration(duration, dProps.duration), utilities_1.pauseAnim(pause));
    return (core_1.jsx(wrapper_1.default, { size: size, loading: loading, dPropsSize: dProps.size },
        core_1.jsx(Dots, null,
            core_1.jsx(Dot, { css: dot1css }),
            core_1.jsx(Dot, null),
            core_1.jsx(Dot, null),
            core_1.jsx(Dot, { css: dot4css }))));
};
exports.default = CircleFadeLoader;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
