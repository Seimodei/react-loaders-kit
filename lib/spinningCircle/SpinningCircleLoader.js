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
    size: 50,
    colors: [utilities_1.Colors.Purple, '#fafafa']
};
var SpinningCircleLoader = function (props) {
    var loading = props.loading, pause = props.pause, size = props.size, colors = props.colors;
    var rgbDefaultColor = utilities_1.convertToRgba(dProps.colors[0], 10);
    var SpinningCircleLoaderAnimation = core_1.keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        from {\n            transform: rotate(0);\n        }\n        to{\n            transform: rotate(359deg);\n        }\n    "], ["\n        from {\n            transform: rotate(0);\n        }\n        to{\n            transform: rotate(359deg);\n        }\n    "])));
    var CircleBorder = styled_1.default('div')(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n        width: inherit;\n        height: inherit;\n        padding: 3px;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        border-radius: 50%;\n        background: ", ";\n        background: ", ";\n        animation: ", " .8s linear 0s infinite;\n        animation-play-state: ", ";\n    "], ["\n        width: inherit;\n        height: inherit;\n        padding: 3px;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        border-radius: 50%;\n        background: ", ";\n        background: ", ";\n        animation: ", " .8s linear 0s infinite;\n        animation-play-state: ", ";\n    "])), colors ? "" + colors[0] : "" + dProps.colors[0], colors ? "linear-gradient(0deg, " + utilities_1.convertToRgba(colors[0], 10) + " 33%, " + colors[0] + " 100%)" : "linear-gradient(0deg, " + rgbDefaultColor + " 33%, " + dProps.colors[0] + " 100%)", SpinningCircleLoaderAnimation, pause ? 'paused' : 'running');
    var CircleCore = styled_1.default('div')(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n        width: inherit;\n        height: inherit;\n        background-color: ", ";\n        border-radius: 50%;\n    "], ["\n        width: inherit;\n        height: inherit;\n        background-color: ", ";\n        border-radius: 50%;\n    "])), colors ? "" + colors[1] : "" + dProps.colors[1]);
    return (react_1.default.createElement(wrapper_1.default, { size: size, loading: loading, dPropsSize: dProps.size },
        react_1.default.createElement(CircleBorder, null,
            react_1.default.createElement(CircleCore, null))));
};
exports.default = SpinningCircleLoader;
var templateObject_1, templateObject_2, templateObject_3;
