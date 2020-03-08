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
    boxNumber: 3,
    duration: 0.7,
    colors: [utilities_1.Colors.Purple, utilities_1.Colors.Purple, utilities_1.Colors.Purple, utilities_1.Colors.Purple, utilities_1.Colors.Purple, utilities_1.Colors.Purple]
};
var BlurrySquareLoader = function (props) {
    var loading = props.loading, pause = props.pause, boxNumber = props.boxNumber, duration = props.duration, colors = props.colors;
    var numberOfChildren = boxNumber ? boxNumber : dProps.boxNumber;
    var drt = 0.7;
    var blurChildren = [];
    var t = drt / 7;
    for (var i = 0; i < numberOfChildren; i++) {
        blurChildren.push(i);
    }
    var Blur = core_1.keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        50% {\n            filter: blur(5px);\n            transform: translateY(-10px);\n            opacity: 0.3;\n        }\n    "], ["\n        50% {\n            filter: blur(5px);\n            transform: translateY(-10px);\n            opacity: 0.3;\n        }\n    "])));
    var Wrapper = styled_1.default('div')(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n        width: inherit;\n        height: inherit;\n        position: relative;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n    "], ["\n        width: inherit;\n        height: inherit;\n        position: relative;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n    "])));
    var Child = styled_1.default('div')(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n        height: 11px;\n        width: 11px;\n        margin: 0 5px 0 0;\n        opacity: 1;\n        border-radius: 10%;\n        animation: ", " ", "s infinite;\n        animation-play-state: ", ";\n    "], ["\n        height: 11px;\n        width: 11px;\n        margin: 0 5px 0 0;\n        opacity: 1;\n        border-radius: 10%;\n        animation: ", " ", "s infinite;\n        animation-play-state: ", ";\n    "])), Blur, duration ? duration : dProps.duration, pause ? 'paused' : 'running');
    var renderChildren = function () {
        return blurChildren.map(function (item, index) {
            return (core_1.jsx(Child, { key: index, css: core_1.css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n                        animation-delay: ", ";\n                        background-color: ", ";\n                    "], ["\n                        animation-delay: ", ";\n                        background-color: ", ";\n                    "])), t * index + "s", colors ? "" + colors[index] : "" + dProps.colors[index]) }));
        });
    };
    return (core_1.jsx(wrapper_1.default, { size: 100, loading: loading, dPropsSize: 100 },
        core_1.jsx(Wrapper, null, renderChildren())));
};
exports.default = BlurrySquareLoader;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
