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
    size: 45,
    duration: 1,
    color: utilities_1.Colors.Purple
};
var FlipLoader = function (props) {
    var loading = props.loading, size = props.size, pause = props.pause, duration = props.duration, color = props.color;
    var FlipAnim = core_1.keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        0% {\n            transform: rotate(0);\n        }\n        \n        50% {\n            transform: rotateY(180deg);\n        }\n        \n        100% {\n            transform: rotateY(180deg)  rotateX(180deg);\n        }\n    "], ["\n        0% {\n            transform: rotate(0);\n        }\n        \n        50% {\n            transform: rotateY(180deg);\n        }\n        \n        100% {\n            transform: rotateY(180deg)  rotateX(180deg);\n        }\n    "])));
    var Loader = styled_1.default('div')(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n        perspective: 120px;\n        position: relative;\n        width: inherit; \n        height: inherit;\n\n        &:before {\n            content: \"\";\n            position: absolute;\n            top: 0;\n            left: 0;\n            width: ", "; \n            height: ", ";\n            background-color: ", ";\n            animation: ", " ", " infinite;\n            animation-play-state: ", ";\n        }\n    "], ["\n        perspective: 120px;\n        position: relative;\n        width: inherit; \n        height: inherit;\n\n        &:before {\n            content: \"\";\n            position: absolute;\n            top: 0;\n            left: 0;\n            width: ", "; \n            height: ", ";\n            background-color: ", ";\n            animation: ", " ", " infinite;\n            animation-play-state: ", ";\n        }\n    "])), size ? size + "px" : dProps.size + "px", size ? size + "px" : dProps.size + "px", utilities_1.loaderColor(color, dProps.color), FlipAnim, utilities_1.loaderDuration(duration, dProps.duration), utilities_1.pauseAnim(pause));
    return (react_1.default.createElement(wrapper_1.default, { size: size, loading: loading, dPropsSize: dProps.size },
        react_1.default.createElement(Loader, null)));
};
exports.default = FlipLoader;
var templateObject_1, templateObject_2;
