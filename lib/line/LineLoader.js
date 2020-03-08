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
var dProps = {
    loading: true,
    lineWidth: 25,
    duration: 2,
    color: utilities_1.Colors.Purple
};
var LineLoader = function (props) {
    var loading = props.loading, pause = props.pause, lineWidth = props.lineWidth, duration = props.duration, color = props.color;
    var numberOfChildren = lineWidth ? lineWidth : dProps.lineWidth;
    var lineChildren = [];
    for (var i = 0; i < numberOfChildren; i++) {
        lineChildren.push(i);
    }
    var LineAnim = core_1.keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        0% { \n            transform: scale(1);\n        }\n        50% {\n            background-color: ", ";\n            opacity: 1;\n            transform: scale(3);\n        }\n        100% { \n            transform: scale(1);\n        }\n    "], ["\n        0% { \n            transform: scale(1);\n        }\n        50% {\n            background-color: ", ";\n            opacity: 1;\n            transform: scale(3);\n        }\n        100% { \n            transform: scale(1);\n        }\n    "])), color ? "" + color : "" + dProps.color);
    var Loader = styled_1.default('div')(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n        height: 2px;\n        display: ", ";\n    "], ["\n        height: 2px;\n        display: ", ";\n    "])), loading ? 'flex' : 'none');
    var Line = styled_1.default('div')(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n        animation: ", " ease infinite ", ";\n        animation-play-state: ", ";\n        background-color: ", ";\n        border-radius: 0;\n        display: inline-block;\n        height: 100%;\n        opacity: 0;\n        transform: scale(1);\n        vertical-align: top;\n        width: 5px;\n    "], ["\n        animation: ", " ease infinite ", ";\n        animation-play-state: ", ";\n        background-color: ", ";\n        border-radius: 0;\n        display: inline-block;\n        height: 100%;\n        opacity: 0;\n        transform: scale(1);\n        vertical-align: top;\n        width: 5px;\n    "])), utilities_1.loaderDuration(duration, dProps.duration), LineAnim, utilities_1.pauseAnim(pause), color ? "" + color : "" + dProps.color);
    var renderLine = function () {
        return lineChildren.map(function (child, index) {
            var time = index * 0.05;
            return (core_1.jsx(Line, { key: index, css: core_1.css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n                        animation-delay: ", "s;\n                    "], ["\n                        animation-delay: ", "s;\n                    "])), time) }));
        });
    };
    return (core_1.jsx(Loader, null, renderLine()));
};
exports.default = LineLoader;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
