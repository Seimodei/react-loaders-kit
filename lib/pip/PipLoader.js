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
    size: 15,
    duration: .8,
    color: utilities_1.Colors.Purple
};
var PipLoader = function (props) {
    var loading = props.loading, pause = props.pause, size = props.size, duration = props.duration, color = props.color;
    var numberOfChildren = 7;
    var PipChildren = [];
    for (var i = 0; i < numberOfChildren; i++) {
        PipChildren.push(i);
    }
    var PipAnim = core_1.keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        0%, 15%, 85%, 100% {\n            transform: translateY(", ");\n            box-shadow: 0 0 0 1px ", ";\n        }\n        45%, 55% {\n            transform: translateY(0px);\n            box-shadow: 0 0 0 ", " ", ";\n        }\n    "], ["\n        0%, 15%, 85%, 100% {\n            transform: translateY(", ");\n            box-shadow: 0 0 0 1px ", ";\n        }\n        45%, 55% {\n            transform: translateY(0px);\n            box-shadow: 0 0 0 ", " ", ";\n        }\n    "])), size ? size * 0.0001 + "px" : dProps.size * 0.0001 + "px", color ? color : dProps.color, size ? size * 0.42 + "px" : dProps.size * 0.42 + "px", color ? color : dProps.color);
    var Pip = styled_1.default('div')(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n        position: absolute;\n        width: ", ";\n        height: ", ";\n            \n        &:before {\n            content: '';\n            position: absolute;\n            top: ", ";\n            left: 0;\n            width: ", ";\n            height: ", ";\n            box-shadow: 0 0 0 1px ", ";\n            border-radius: 50%;\n            background: ", ";\n            animation: ", " ", " infinite linear;\n            animation-play-state: ", ";\n        }\n        \n    "], ["\n        position: absolute;\n        width: ", ";\n        height: ", ";\n            \n        &:before {\n            content: '';\n            position: absolute;\n            top: ", ";\n            left: 0;\n            width: ", ";\n            height: ", ";\n            box-shadow: 0 0 0 1px ", ";\n            border-radius: 50%;\n            background: ", ";\n            animation: ", " ", " infinite linear;\n            animation-play-state: ", ";\n        }\n        \n    "])), size ? size + "px" : dProps.size + "px", size ? size * 5 + "px" : dProps.size * 5 + "px", size ? size * 0.75 + "px" : dProps.size * 0.75 + "px", size ? size + "px" : dProps.size + "px", size ? size + "px" : dProps.size + "px", color ? color : dProps.color, color ? color : dProps.color, PipAnim, utilities_1.loaderDuration(duration, dProps.duration), utilities_1.pauseAnim(pause));
    var renderPip = function () {
        return PipChildren.map(function (child, index) {
            return (core_1.jsx(Pip, { key: index, css: core_1.css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n                        transform: rotateZ(", "deg);\n\n                        &:before {\n                            animation-delay: ", "s;\n                        }\n                    "], ["\n                        transform: rotateZ(", "deg);\n\n                        &:before {\n                            animation-delay: ", "s;\n                        }\n                    "])), (360 / numberOfChildren) * (index - 1) + (360 / numberOfChildren / 3), duration ? (duration / numberOfChildren) * (index - 1) : (dProps.duration / numberOfChildren) * (index - 1)) }));
        });
    };
    return (core_1.jsx(wrapper_1.default, { size: size, loading: loading, dPropsSize: dProps.size }, renderPip()));
};
exports.default = PipLoader;
var templateObject_1, templateObject_2, templateObject_3;
