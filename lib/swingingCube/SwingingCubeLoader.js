"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var styled_1 = __importDefault(require("@emotion/styled"));
var core_1 = require("@emotion/core");
var utilities_1 = require("../utilities/utilities");
var wrapper_1 = __importDefault(require("../wrapper/wrapper"));
var dProps = {
    loading: true,
    size: 18,
    duration: 1,
    colors: [utilities_1.Colors.Purple, utilities_1.Colors.Purple, utilities_1.Colors.Purple]
};
var SwingingCubeLoader = function (props) {
    var loading = props.loading, size = props.size, duration = props.duration, pause = props.pause, colors = props.colors;
    var margin = 1;
    var Swing = core_1.keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        25%, 50%{\n            transform: translate(-50%, -50%) rotate(45deg);\n        }\n        75%{\n            transform: translate(-50%, -50%) rotate(-45deg);\n        }\n    "], ["\n        25%, 50%{\n            transform: translate(-50%, -50%) rotate(45deg);\n        }\n        75%{\n            transform: translate(-50%, -50%) rotate(-45deg);\n        }\n    "])));
    var Roll = core_1.keyframes(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n        33%{\n            transform: rotate(0deg);\n        }\n        67%,100%{\n            transform: rotate(90deg);\n        }\n    "], ["\n        33%{\n            transform: rotate(0deg);\n        }\n        67%,100%{\n            transform: rotate(90deg);\n        }\n    "])));
    var Wrapper = styled_1.default('div')(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n        position: relative;\n        width: ", ";\n        height: ", ";\n        flex-shrink: 1;\n        flex-grow: 1;\n    "], ["\n        position: relative;\n        width: ", ";\n        height: ", ";\n        flex-shrink: 1;\n        flex-grow: 1;\n    "])), size ? size * 5 + "px" : dProps.size * 5 + "px", size ? size * 5 + "px" : dProps.size * 5 + "px");
    var Loader = styled_1.default('div')(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n        position: absolute;\n        top: 50%;\n        left: 50%;\n    "], ["\n        position: absolute;\n        top: 50%;\n        left: 50%;\n    "])));
    var Block = styled_1.default('div')(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n        width: ", ";\n        height: ", ";\n        border-radius: 100%;\n        color: ", ";\n        border: ", "px solid;\n        transform: translate(-50%, -50%) rotate(-45deg);\n        animation-name: ", ";\n        animation-duration: ", "s;\n        animation-iteration-count: infinite;\n        animation-play-state: ", ";\n\n        &:before, &:after {\n            content: \"\";\n            position: absolute;\n            bottom:  ", ";\n            width: ", "; \n            height: ", ";\n            background: ", ";\n            border-radius: ", "px;\n        }\n\n        &:before{\n            left: ", ";\n        }\n        \n        &:after{\n            right: ", ";\n        }\n    "], ["\n        width: ", ";\n        height: ", ";\n        border-radius: 100%;\n        color: ", ";\n        border: ", "px solid;\n        transform: translate(-50%, -50%) rotate(-45deg);\n        animation-name: ", ";\n        animation-duration: ", "s;\n        animation-iteration-count: infinite;\n        animation-play-state: ", ";\n\n        &:before, &:after {\n            content: \"\";\n            position: absolute;\n            bottom:  ", ";\n            width: ", "; \n            height: ", ";\n            background: ", ";\n            border-radius: ", "px;\n        }\n\n        &:before{\n            left: ", ";\n        }\n        \n        &:after{\n            right: ", ";\n        }\n    "])), size ? 3 * size + margin * 5 + "px" : 3 * dProps.size + margin * 5 + "px", size ? 3 * size + margin * 5 + "px" : 3 * dProps.size + margin * 5 + "px", colors ? "" + colors[0] : "" + dProps.colors[0], margin, Swing, duration ? duration * 2 : dProps.duration * 2, utilities_1.pauseAnim(pause), size ? (margin) + (size * .5) + "px" : (margin) + (dProps.size * .5) + "px", size ? size + "px" : dProps.size + "px", size ? size + "px" : dProps.size + "px", colors ? "" + colors[1] : "" + dProps.colors[1], margin * 2, size ? (margin) + (size * .5) + "px" : (margin) + (dProps.size * .5) + "px", size ? (margin) + (size * .5) + "px" : (margin) + (dProps.size * .5) + "px");
    var Box = styled_1.default('div')(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n        position: absolute;\n        width: ", "; \n        height: ", ";\n        left: ", ";\n        top: ", ";\n        background: ", ";\n        transform-origin: ", ";\n        border-radius: ", "px;\n        animation-name: ", ";\n        animation-timing-function: ease-in-out;\n        animation-direction: alternate;\n        animation-duration: ", "s;\n        animation-iteration-count: infinite;\n        animation-play-state: ", ";\n    "], ["\n        position: absolute;\n        width: ", "; \n        height: ", ";\n        left: ", ";\n        top: ", ";\n        background: ", ";\n        transform-origin: ", ";\n        border-radius: ", "px;\n        animation-name: ", ";\n        animation-timing-function: ease-in-out;\n        animation-direction: alternate;\n        animation-duration: ", "s;\n        animation-iteration-count: infinite;\n        animation-play-state: ", ";\n    "])), size ? size + "px" : dProps.size + "px", size ? size + "px" : dProps.size + "px", size ? (margin) + (size * .5) + "px" : (margin) + (dProps.size * .5) + "px", size ? (margin) + (size * .5) + "px" : (margin) + (dProps.size * .5) + "px", colors ? "" + colors[2] : "" + dProps.colors[2], size ? (size) + (margin * .5) + "px " + ((size) + (margin * .5)) + "px" : (dProps.size) + (margin * 1.5) + "px " + ((dProps.size) + (margin * 1.5)) + "px", margin * 2, Roll, duration ? duration : dProps.duration, utilities_1.pauseAnim(pause));
    return (react_1.default.createElement(wrapper_1.default, { size: size, loading: loading, dPropsSize: dProps.size },
        react_1.default.createElement(Wrapper, null,
            react_1.default.createElement(Loader, null,
                react_1.default.createElement(Block, null,
                    react_1.default.createElement(Box, null))))));
};
exports.default = SwingingCubeLoader;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
