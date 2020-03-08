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
    size: 30,
    duration: 2,
    colors: [utilities_1.Colors.Purple, utilities_1.Colors.Purple]
};
var NotePadLoader = function (props) {
    var loading = props.loading, size = props.size, pause = props.pause, duration = props.duration, colors = props.colors;
    var NotePadAnim = core_1.keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        0% { \n            width : 0px; \n            opacity: 0; \n        }\n        33% { \n            width : ", ";\n            opacity : 1; \n        }\n        70% { \n            opacity : 1; \n        }\n        100% {\n            opacity : 0; \n        }\n    "], ["\n        0% { \n            width : 0px; \n            opacity: 0; \n        }\n        33% { \n            width : ", ";\n            opacity : 1; \n        }\n        70% { \n            opacity : 1; \n        }\n        100% {\n            opacity : 0; \n        }\n    "])), size ? size * 0.56 + "px" : dProps.size * 0.56 + "px");
    var NotePad = styled_1.default('div')(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n        width: inherit;\n    "], ["\n        width: inherit;\n    "])));
    var Binding = styled_1.default('div')(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n        content : '';\n        width : inherit;\n        height : ", ";\n        border : 2px solid ", ";\n    "], ["\n        content : '';\n        width : inherit;\n        height : ", ";\n        border : 2px solid ", ";\n    "])), size ? size * 0.15 + "px" : dProps.size * 0.15 + "px", colors ? "" + colors[0] : "" + dProps.colors[0]);
    var Pad = styled_1.default('div')(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n        width : 100%;\n        height : ", ";\n        border : 2px solid ", ";\n        border-top : 0;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        justify-content: center;\n    "], ["\n        width : 100%;\n        height : ", ";\n        border : 2px solid ", ";\n        border-top : 0;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        justify-content: center;\n    "])), size ? size * 1.2 + "px" : dProps.size * 1.2 + "px", colors ? "" + colors[0] : "" + dProps.colors[0]);
    var Line = styled_1.default('div')(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n        width : ", ";\n        margin-top : ", ";\n        border-top : 2px solid ", ";\n        opacity : 0;\n        animation : ", " ", " infinite ease-in;\n        animation-play-state: ", ";\n    "], ["\n        width : ", ";\n        margin-top : ", ";\n        border-top : 2px solid ", ";\n        opacity : 0;\n        animation : ", " ", " infinite ease-in;\n        animation-play-state: ", ";\n    "])), size ? size * 0.56 + "px" : dProps.size * 0.56 + "px", size ? size * 0.15 + "px" : dProps.size * 0.15 + "px", colors ? "" + colors[1] : "" + dProps.colors[1], NotePadAnim, utilities_1.loaderDuration(duration, dProps.duration), utilities_1.pauseAnim(pause));
    return (core_1.jsx(wrapper_1.default, { size: size, loading: loading, dPropsSize: dProps.size },
        core_1.jsx(NotePad, null,
            core_1.jsx(Binding, null),
            core_1.jsx(Pad, null,
                core_1.jsx(Line, { css: core_1.css(templateObject_6 || (templateObject_6 = __makeTemplateObject(["animation-delay: 0s;"], ["animation-delay: 0s;"]))) }),
                core_1.jsx(Line, { css: core_1.css(templateObject_7 || (templateObject_7 = __makeTemplateObject(["animation-delay: 0.5s;"], ["animation-delay: 0.5s;"]))) }),
                core_1.jsx(Line, { css: core_1.css(templateObject_8 || (templateObject_8 = __makeTemplateObject(["animation-delay: 1s;"], ["animation-delay: 1s;"]))) })))));
};
exports.default = NotePadLoader;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8;
