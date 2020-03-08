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
    size: 40,
    duration: 1.5,
    color: utilities_1.Colors.Purple
};
var BarsLoader2 = function (props) {
    var loading = props.loading, size = props.size, pause = props.pause, duration = props.duration, color = props.color;
    var numberOfChildren = 5;
    var lineChildren = [];
    for (var i = 0; i < numberOfChildren; i++) {
        lineChildren.push(i);
    }
    var LineAnim = core_1.keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        0% {\n            height: ", ";\n            transform: translateY(0px); \n        }\n        25% {\n            height: ", ";\n            transform: translateY(", ";); \n        }\n        50% {\n            height: ", ";\n            transform: translateY(0px); \n        }\n        100% {\n            height: ", ";\n            transform: translateY(0px); \n        }\n    "], ["\n        0% {\n            height: ", ";\n            transform: translateY(0px); \n        }\n        25% {\n            height: ", ";\n            transform: translateY(", ";); \n        }\n        50% {\n            height: ", ";\n            transform: translateY(0px); \n        }\n        100% {\n            height: ", ";\n            transform: translateY(0px); \n        }\n    "])), size ? size * 0.125 + "px" : dProps.size * 0.125 + "px", size ? size * 0.5 + "px" : dProps.size * 0.5 + "px", size ? size * 0.25 + "px" : dProps.size * 0.25 + "px", size ? size * 0.125 + "px" : dProps.size * 0.125 + "px", size ? size * 0.125 + "px" : dProps.size * 0.125 + "px");
    var Loader = styled_1.default('div')(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n        position: relative;\n        display: ", ";\n    "], ["\n        position: relative;\n        display: ", ";\n    "])), loading ? 'flex' : 'none');
    var Bar = styled_1.default('div')(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n        width: ", ";\n        height: ", ";\n        background-color: ", ";\n        animation: ", " ", " infinite ease-in-out;\n        animation-play-state: ", ";\n        margin: 1px;\n    "], ["\n        width: ", ";\n        height: ", ";\n        background-color: ", ";\n        animation: ", " ", " infinite ease-in-out;\n        animation-play-state: ", ";\n        margin: 1px;\n    "])), size ? size * 0.225 + "px" : dProps.size * 0.225 + "px", size ? size * 0.125 + "px" : dProps.size * 0.125 + "px", color ? "" + color : "" + dProps.color, LineAnim, utilities_1.loaderDuration(duration, dProps.duration), utilities_1.pauseAnim(pause));
    var renderBars = function () {
        return lineChildren.map(function (child, index) {
            var time = index * 0.05;
            return (core_1.jsx(Bar, { key: index, css: core_1.css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n                        animation-delay: ", "s;\n                    "], ["\n                        animation-delay: ", "s;\n                    "])), time) }));
        });
    };
    return (core_1.jsx(Loader, null, renderBars()));
};
exports.default = BarsLoader2;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
