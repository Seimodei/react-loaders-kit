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
    size: 40,
    duration: 1,
    color: utilities_1.Colors.Purple
};
var ElasticCircleLoader = function (props) {
    var loading = props.loading, size = props.size, pause = props.pause, duration = props.duration, color = props.color;
    var ElasticAnim = core_1.keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        0% {\n            width: ", ";\n            height: ", ";\n        }\n        25% {\n            height: 10%;\n        }\n        50% {\n            width: 10%;\n        }\n        75% {\n            width: 85%;\n        }\n        100% {\n            width: 85%;\n            height: 85%;\n        }\n    "], ["\n        0% {\n            width: ", ";\n            height: ", ";\n        }\n        25% {\n            height: 10%;\n        }\n        50% {\n            width: 10%;\n        }\n        75% {\n            width: 85%;\n        }\n        100% {\n            width: 85%;\n            height: 85%;\n        }\n    "])), size ? size + "px" : dProps.size + "px", size ? size + "px" : dProps.size + "px");
    var Loader = styled_1.default('div')(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n        width: inherit;\n        height: inherit;\n        border-radius: 100%;\n        border: ", ";\n        background-color: transparent;\n        animation: ", " ", "s infinite;\n        animation-play-state: ", ";\n    "], ["\n        width: inherit;\n        height: inherit;\n        border-radius: 100%;\n        border: ", ";\n        background-color: transparent;\n        animation: ", " ", "s infinite;\n        animation-play-state: ", ";\n    "])), color ? "4px solid " + color : "4px solid " + dProps.color, ElasticAnim, duration ? duration : dProps.duration, pause ? 'paused' : 'running');
    return (react_1.default.createElement(wrapper_1.default, { size: size, loading: loading, dPropsSize: dProps.size },
        react_1.default.createElement(Loader, null)));
};
exports.default = ElasticCircleLoader;
var templateObject_1, templateObject_2;
