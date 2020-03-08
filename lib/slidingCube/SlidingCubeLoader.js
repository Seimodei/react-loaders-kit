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
    size: 20,
    duration: 1,
    colors: [utilities_1.Colors.Purple, utilities_1.Colors.Purple]
};
var SlidingCubeLoader = function (props) {
    var loading = props.loading, size = props.size, duration = props.duration, pause = props.pause, colors = props.colors;
    var margin = 1;
    var Reg = core_1.keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        50%{\n            transform: translate(-50%, -50%) rotate(45deg);\n        }\n        100%{\n            transform: translate(-50%, -50%) rotate(45deg);\n        }\n    "], ["\n        50%{\n            transform: translate(-50%, -50%) rotate(45deg);\n        }\n        100%{\n            transform: translate(-50%, -50%) rotate(45deg);\n        }\n    "])));
    var Slide = core_1.keyframes(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n        33% {\n            left: ", "px;\n        }\n        67%,100% {\n            left: ", ";\n        }\n    "], ["\n        33% {\n            left: ", "px;\n        }\n        67%,100% {\n            left: ", ";\n        }\n    "])), margin, size ? margin * 2 + size + 2 + "px" : margin * 2 + dProps.size + 2 + "px");
    var Wrapper = styled_1.default('div')(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n        position: relative;\n        width: ", ";\n        height: ", ";\n        flex-shrink: 1;\n        flex-grow: 1;\n    "], ["\n        position: relative;\n        width: ", ";\n        height: ", ";\n        flex-shrink: 1;\n        flex-grow: 1;\n    "])), size ? size * 5 + "px" : dProps.size * 5 + "px", size ? size * 5 + "px" : dProps.size * 5 + "px");
    var Loader = styled_1.default('div')(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n        position: absolute;\n        top: 50%;\n        left: 50%;\n    "], ["\n        position: absolute;\n        top: 50%;\n        left: 50%;\n    "])));
    var Block = styled_1.default('div')(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n        border-radius: ", "px;\n        width: ", ";\n        height: ", ";\n        position: absolute;\n        color: ", ";\n        border: ", "px solid;\n        transform: translate(-50%, -50%) rotate(-45deg);\n        animation-name: ", ";\n        animation-timing-function: ease-in-out;\n        animation-duration: ", ";\n        animation-iteration-count: infinite;\n        animation-play-state: ", ";\n\n        &:before, &:after {\n            content: \"\";\n            position: absolute;\n            bottom: ", "px;\n            width: ", "; \n            height: ", ";\n            background: ", ";\n            border-radius: ", "px;\n        }\n\n        &:before{\n            left: ", "px;\n        }\n        \n        &:after{\n            right: ", "px;\n        }\n    "], ["\n        border-radius: ", "px;\n        width: ", ";\n        height: ", ";\n        position: absolute;\n        color: ", ";\n        border: ", "px solid;\n        transform: translate(-50%, -50%) rotate(-45deg);\n        animation-name: ", ";\n        animation-timing-function: ease-in-out;\n        animation-duration: ", ";\n        animation-iteration-count: infinite;\n        animation-play-state: ", ";\n\n        &:before, &:after {\n            content: \"\";\n            position: absolute;\n            bottom: ", "px;\n            width: ", "; \n            height: ", ";\n            background: ", ";\n            border-radius: ", "px;\n        }\n\n        &:before{\n            left: ", "px;\n        }\n        \n        &:after{\n            right: ", "px;\n        }\n    "])), margin * 2, size ? 2 * size + margin * 5 + "px" : 2 * dProps.size + margin * 5 + "px", size ? 2 * size + margin * 5 + "px" : 2 * dProps.size + margin * 5 + "px", colors ? "" + colors[0] : "" + dProps.colors[0], margin, Reg, utilities_1.loaderDuration(duration, dProps.duration), utilities_1.pauseAnim(pause), margin, size ? size + "px" : dProps.size + "px", size ? size + "px" : dProps.size + "px", colors ? "" + colors[1] : "" + dProps.colors[1], margin * 2, margin, margin);
    var Box = styled_1.default('div')(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n        position: absolute;\n        width: ", "; \n        height: ", ";\n        left: ", "px;\n        top: ", "px;\n        background: ", ";;\n        border-radius: ", "px;\n        animation-name: ", ";\n        animation-timing-function: ease-in-out;\n        animation-duration: ", ";\n        animation-iteration-count: infinite;\n        animation-play-state: ", ";\n    "], ["\n        position: absolute;\n        width: ", "; \n        height: ", ";\n        left: ", "px;\n        top: ", "px;\n        background: ", ";;\n        border-radius: ", "px;\n        animation-name: ", ";\n        animation-timing-function: ease-in-out;\n        animation-duration: ", ";\n        animation-iteration-count: infinite;\n        animation-play-state: ", ";\n    "])), size ? size + "px" : dProps.size + "px", size ? size + "px" : dProps.size + "px", margin, margin, colors ? "" + colors[1] : "" + dProps.colors[1], margin * 2, Slide, utilities_1.loaderDuration(duration, dProps.duration), utilities_1.pauseAnim(pause));
    return (react_1.default.createElement(wrapper_1.default, { size: size, loading: loading, dPropsSize: dProps.size },
        react_1.default.createElement(Wrapper, null,
            react_1.default.createElement(Loader, null,
                react_1.default.createElement(Block, null,
                    react_1.default.createElement(Box, null))))));
};
exports.default = SlidingCubeLoader;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
