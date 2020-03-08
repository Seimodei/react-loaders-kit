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
    size: 50,
    duration: 2,
    colors: ['#ffffff', utilities_1.Colors.Purple]
};
var HypnosisLoader = function (props) {
    var loading = props.loading, size = props.size, pause = props.pause, duration = props.duration, colors = props.colors;
    var Spin = core_1.keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        0% {\n            transform: rotate(0deg);\n        }\n        100% {\n            transform: rotate(359deg);\n        }\n    "], ["\n        0% {\n            transform: rotate(0deg);\n        }\n        100% {\n            transform: rotate(359deg);\n        }\n    "])));
    var Circle = styled_1.default('div')(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n        border-radius: 50%;\n        box-sizing: border-box;\n        border: 2px solid ", ";\n        animation: ", " ", " linear infinite;\n        animation-play-state: ", ";\n    "], ["\n        border-radius: 50%;\n        box-sizing: border-box;\n        border: 2px solid ", ";\n        animation: ", " ", " linear infinite;\n        animation-play-state: ", ";\n    "])), colors ? "" + colors[0] : "" + dProps.colors[0], Spin, utilities_1.loaderDuration(duration, dProps.duration), utilities_1.pauseAnim(pause));
    var lg = core_1.css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n        background-color: ", ";\n        width: inherit;\n        height: inherit;\n    "], ["\n        background-color: ", ";\n        width: inherit;\n        height: inherit;\n    "])), colors ? "" + utilities_1.lightenDarkenColor(colors[1], 50) : "" + utilities_1.lightenDarkenColor(dProps.colors[1], 50));
    var md = core_1.css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n        background-color: ", ";\n        width: ", "; \n        height: ", ";\n    "], ["\n        background-color: ", ";\n        width: ", "; \n        height: ", ";\n    "])), colors ? "" + utilities_1.lightenDarkenColor(colors[1], 20) : "" + utilities_1.lightenDarkenColor(dProps.colors[1], 20), size ? size - 10 + "px" : dProps.size - 10 + "px", size ? size - 10 + "px" : dProps.size - 10 + "px");
    var sm = core_1.css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n        background-color: ", ";\n        width: ", "; \n        height: ", ";\n    "], ["\n        background-color: ", ";\n        width: ", "; \n        height: ", ";\n    "])), colors ? "" + utilities_1.lightenDarkenColor(colors[1], -20) : "" + utilities_1.lightenDarkenColor(dProps.colors[1], -20), size ? size - 20 + "px" : dProps.size - 20 + "px", size ? size - 20 + "px" : dProps.size - 20 + "px");
    var smlr = core_1.css(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n        background-color: ", ";\n        width: ", "; \n        height: ", ";\n    "], ["\n        background-color: ", ";\n        width: ", "; \n        height: ", ";\n    "])), colors ? "" + utilities_1.lightenDarkenColor(colors[1], -50) : "" + utilities_1.lightenDarkenColor(dProps.colors[1], -50), size ? size - 30 + "px" : dProps.size - 30 + "px", size ? size - 30 + "px" : dProps.size - 30 + "px");
    return (core_1.jsx(wrapper_1.default, { size: size, loading: loading, dPropsSize: dProps.size },
        core_1.jsx(Circle, { css: lg },
            core_1.jsx(Circle, { css: md },
                core_1.jsx(Circle, { css: sm },
                    core_1.jsx(Circle, { css: smlr }))))));
};
exports.default = HypnosisLoader;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
