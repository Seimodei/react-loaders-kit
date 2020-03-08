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
    size: 120,
    duration: 1,
    color: utilities_1.Colors.Purple
};
var CirclePopLoader = function (props) {
    var loading = props.loading, size = props.size, pause = props.pause, duration = props.duration, color = props.color;
    var Pop1 = core_1.keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        0%, 70% {\n            box-shadow: 2px 2px 3px 2px rgba(0, 0, 0, 0.2);\n            transform: scale(0);\n        }\n        100% {\n            box-shadow: 10px 10px 15px 0 rgba(0, 0, 0, 0.5);\n            transform: scale(1);\n        }\n    "], ["\n        0%, 70% {\n            box-shadow: 2px 2px 3px 2px rgba(0, 0, 0, 0.2);\n            transform: scale(0);\n        }\n        100% {\n            box-shadow: 10px 10px 15px 0 rgba(0, 0, 0, 0.5);\n            transform: scale(1);\n        }\n    "])));
    var Pop2 = core_1.keyframes(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n        0%, 40% {\n            box-shadow: 2px 2px 3px 2px rgba(0, 0, 0, 0.2);\n            transform: scale(0);\n        }\n        100% {\n            box-shadow: 10px 10px 15px 0 rgba(0, 0, 0, 0.5);\n            transform: scale(1);\n        }\n    "], ["\n        0%, 40% {\n            box-shadow: 2px 2px 3px 2px rgba(0, 0, 0, 0.2);\n            transform: scale(0);\n        }\n        100% {\n            box-shadow: 10px 10px 15px 0 rgba(0, 0, 0, 0.5);\n            transform: scale(1);\n        }\n    "])));
    var Pop3 = core_1.keyframes(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n        0%, 10% {\n            box-shadow: 2px 2px 3px 2px rgba(0, 0, 0, 0);\n            transform: scale(0);\n        }\n        100% {\n            box-shadow: 10px 10px 15px 0 rgba(0, 0, 0, 0.1);\n            transform: scale(1);\n        }\n    "], ["\n        0%, 10% {\n            box-shadow: 2px 2px 3px 2px rgba(0, 0, 0, 0);\n            transform: scale(0);\n        }\n        100% {\n            box-shadow: 10px 10px 15px 0 rgba(0, 0, 0, 0.1);\n            transform: scale(1);\n        }\n    "])));
    var Center = styled_1.default('div')(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n        position: absolute;\n        width: inherit;\n        height: inherit;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n    "], ["\n        position: absolute;\n        width: inherit;\n        height: inherit;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n    "])));
    var Circle1 = styled_1.default('div')(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n        position: absolute;\n        z-index: 3;\n        width: 14%;\n        height: 14%;\n        background: ", ";\n        border-radius: 50%;\n        animation: ", " ", "s cubic-bezier(0.21, 0.98, 0.6, 0.99) infinite alternate;\n        animation-play-state: ", ";\n        animation-fill-mode: both;\n    "], ["\n        position: absolute;\n        z-index: 3;\n        width: 14%;\n        height: 14%;\n        background: ", ";\n        border-radius: 50%;\n        animation: ", " ", "s cubic-bezier(0.21, 0.98, 0.6, 0.99) infinite alternate;\n        animation-play-state: ", ";\n        animation-fill-mode: both;\n    "])), color ? "" + color : "" + dProps.color, Pop1, duration ? duration : dProps.duration, pause ? 'paused' : 'running');
    var Circle2 = styled_1.default('div')(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n        position: absolute;\n        z-index: 2;\n        width: 27%;\n        height: 27%;\n        background: ", ";\n        border-radius: 50%;\n        animation: ", " ", "s cubic-bezier(0.21, 0.98, 0.6, 0.99) infinite alternate;\n        animation-play-state: ", ";\n        animation-fill-mode: both;\n    "], ["\n        position: absolute;\n        z-index: 2;\n        width: 27%;\n        height: 27%;\n        background: ", ";\n        border-radius: 50%;\n        animation: ", " ", "s cubic-bezier(0.21, 0.98, 0.6, 0.99) infinite alternate;\n        animation-play-state: ", ";\n        animation-fill-mode: both;\n    "])), color ? "" + color : "" + dProps.color, Pop2, duration ? duration : dProps.duration, pause ? 'paused' : 'running');
    var Circle3 = styled_1.default('div')(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n        position: absolute;\n        z-index: 1;\n        width: 41%;\n        height: 41%;\n        background: ", ";\n        border-radius: 50%;\n        animation: ", " ", "s cubic-bezier(0.21, 0.98, 0.6, 0.99) infinite alternate;\n        animation-play-state: ", ";\n        animation-fill-mode: both;\n    "], ["\n        position: absolute;\n        z-index: 1;\n        width: 41%;\n        height: 41%;\n        background: ", ";\n        border-radius: 50%;\n        animation: ", " ", "s cubic-bezier(0.21, 0.98, 0.6, 0.99) infinite alternate;\n        animation-play-state: ", ";\n        animation-fill-mode: both;\n    "])), color ? "" + color : "" + dProps.color, Pop3, duration ? duration : dProps.duration, pause ? 'paused' : 'running');
    return (react_1.default.createElement(wrapper_1.default, { size: size, loading: loading, dPropsSize: dProps.size },
        react_1.default.createElement(Center, null,
            react_1.default.createElement(Circle1, null),
            react_1.default.createElement(Circle2, null),
            react_1.default.createElement(Circle3, null))));
};
exports.default = CirclePopLoader;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
