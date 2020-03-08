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
    duration: 1.3,
    color: utilities_1.Colors.Purple
};
var BlobLoader = function (props) {
    var loading = props.loading, size = props.size, pause = props.pause, duration = props.duration, color = props.color;
    var BlobBottom = core_1.keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        5%, 50%, 75% {\n            top: 50%;\n            left: 100%;\n        }\n        100% {\n            top: 0;\n            left: 50%;\n        }\n    "], ["\n        5%, 50%, 75% {\n            top: 50%;\n            left: 100%;\n        }\n        100% {\n            top: 0;\n            left: 50%;\n        }\n    "])));
    var BlobLeft = core_1.keyframes(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n        25% {\n            top: 50%;\n            left: 0;\n        }\n        50%, 100% {\n            top: 100%;\n            left: 50%;\n        }\n    "], ["\n        25% {\n            top: 50%;\n            left: 0;\n        }\n        50%, 100% {\n            top: 100%;\n            left: 50%;\n        }\n    "])));
    var BlobTop = core_1.keyframes(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n        50% {\n            top: 0;\n            left: 50%;\n        }\n        75%, 100% {\n            top: 50%;\n            left: 0;\n        }\n    "], ["\n        50% {\n            top: 0;\n            left: 50%;\n        }\n        75%, 100% {\n            top: 50%;\n            left: 0;\n        }\n    "])));
    var BlobMover = core_1.keyframes(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n        0%, 100% {\n            top: 0;\n            left: 50%;\n        }\n        25% {\n            top: 50%;\n            left: 100%;\n        }\n        50% {\n            top: 100%;\n            left: 50%;\n        }\n        75% {\n            top: 50%;\n            left: 0;\n        }\n    "], ["\n        0%, 100% {\n            top: 0;\n            left: 50%;\n        }\n        25% {\n            top: 50%;\n            left: 100%;\n        }\n        50% {\n            top: 100%;\n            left: 50%;\n        }\n        75% {\n            top: 50%;\n            left: 0;\n        }\n    "])));
    var Loader = styled_1.default('div')(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n        position: absolute;\n        width: inherit;\n        height: inherit;\n        top: 50%;\n        left: 50%;\n        transform: translate(-50%, -50%);\n    "], ["\n        position: absolute;\n        width: inherit;\n        height: inherit;\n        top: 50%;\n        left: 50%;\n        transform: translate(-50%, -50%);\n    "])));
    var Blob = styled_1.default('div')(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        transform: translate(-50%, -50%);\n        border: 2px solid ", ";\n        width: ", "px;\n        height: ", "px;\n        border-radius: 50%;\n        \n        &:nth-of-type(1) {\n            top: 0;\n            animation: ", " ", " infinite ease-in;\n            animation-play-state: ", ";\n        }\n    \n        &:nth-of-type(2) {\n            top: 100%;\n            animation: ", " ", " infinite ease-in;\n            animation-play-state: ", ";\n        }\n        \n        &:nth-of-type(3) {\n            left: 0;\n            animation: ", " ", " infinite ease-in;\n            animation-play-state: ", ";\n        }\n\n        &:nth-of-type(4) {\n            background: ", ";\n            top: 0;\n            animation: ", " ", " infinite ease-in;\n            animation-play-state: ", ";\n        }\n    "], ["\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        transform: translate(-50%, -50%);\n        border: 2px solid ", ";\n        width: ", "px;\n        height: ", "px;\n        border-radius: 50%;\n        \n        &:nth-of-type(1) {\n            top: 0;\n            animation: ", " ", " infinite ease-in;\n            animation-play-state: ", ";\n        }\n    \n        &:nth-of-type(2) {\n            top: 100%;\n            animation: ", " ", " infinite ease-in;\n            animation-play-state: ", ";\n        }\n        \n        &:nth-of-type(3) {\n            left: 0;\n            animation: ", " ", " infinite ease-in;\n            animation-play-state: ", ";\n        }\n\n        &:nth-of-type(4) {\n            background: ", ";\n            top: 0;\n            animation: ", " ", " infinite ease-in;\n            animation-play-state: ", ";\n        }\n    "])), utilities_1.loaderColor(color, dProps.color), size ? size * 0.33 : dProps.size * 0.33, size ? size * 0.33 : dProps.size * 0.33, BlobTop, utilities_1.loaderDuration(duration, dProps.duration), utilities_1.pauseAnim(pause), BlobBottom, utilities_1.loaderDuration(duration, dProps.duration), utilities_1.pauseAnim(pause), BlobLeft, utilities_1.loaderDuration(duration, dProps.duration), utilities_1.pauseAnim(pause), utilities_1.loaderColor(color, dProps.color), BlobMover, utilities_1.loaderDuration(duration, dProps.duration), utilities_1.pauseAnim(pause));
    return (react_1.default.createElement(wrapper_1.default, { size: size, loading: loading, dPropsSize: dProps.size },
        react_1.default.createElement(Loader, null,
            react_1.default.createElement(Blob, null),
            react_1.default.createElement(Blob, null),
            react_1.default.createElement(Blob, null),
            react_1.default.createElement(Blob, null))));
};
exports.default = BlobLoader;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
