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
    colors: [utilities_1.Colors.Purple, utilities_1.Colors.Yellow]
};
var AlternatingOrbitsLoader = function (props) {
    var loading = props.loading, pause = props.pause, size = props.size, colors = props.colors;
    var rgbDefaultColor1 = utilities_1.convertToRgba(dProps.colors[0], 10);
    var rgbDefaultColor2 = utilities_1.convertToRgba(dProps.colors[1], 10);
    var AlternatingOrbitsAnimation = core_1.keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        from {\n            transform: rotate3d(.5,.5,.5, 360deg);\n        }\n        to{\n            transform: rotate3d(0deg);\n        }\n    "], ["\n        from {\n            transform: rotate3d(.5,.5,.5, 360deg);\n        }\n        to{\n            transform: rotate3d(0deg);\n        }\n    "])));
    var Orbit1 = styled_1.default('div')(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n        position: absolute;\n        width: inherit;\n        height: inherit;\n        padding: 3px;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        border-radius: 50%;\n        background: ", ";\n        background: ", ";\n        animation: ", " 1.8s linear 0s infinite;\n        animation-play-state: ", ";\n    "], ["\n        position: absolute;\n        width: inherit;\n        height: inherit;\n        padding: 3px;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        border-radius: 50%;\n        background: ", ";\n        background: ", ";\n        animation: ", " 1.8s linear 0s infinite;\n        animation-play-state: ", ";\n    "])), colors ? "" + colors[0] : "" + dProps.colors[0], colors ? "linear-gradient(0deg, " + utilities_1.convertToRgba(colors[0], 50) + " 33%, " + colors[0] + " 100%)" : "linear-gradient(0deg, " + rgbDefaultColor1 + " 33%, " + dProps.colors[0] + " 100%)", AlternatingOrbitsAnimation, pause ? 'paused' : 'running');
    var Orbit2 = styled_1.default('div')(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n        position: absolute;\n        width: inherit;\n        height: inherit;\n        padding: 3px;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        border-radius: 50%;\n        background: ", ";\n        background: ", ";\n        animation: ", " 2.2s linear 0s infinite;\n        animation-play-state: ", ";\n    "], ["\n        position: absolute;\n        width: inherit;\n        height: inherit;\n        padding: 3px;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        border-radius: 50%;\n        background: ", ";\n        background: ", ";\n        animation: ", " 2.2s linear 0s infinite;\n        animation-play-state: ", ";\n    "])), colors ? "" + colors[1] : "" + dProps.colors[1], colors ? "linear-gradient(0deg, " + utilities_1.convertToRgba(colors[1], 50) + " 33%, " + colors[1] + " 100%)" : "linear-gradient(0deg, " + rgbDefaultColor2 + " 33%, " + dProps.colors[1] + " 100%)", AlternatingOrbitsAnimation, pause ? 'paused' : 'running');
    var Core1 = styled_1.default('div')(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n        width: 100%;\n        height: 100%;\n        background-color: ", ";\n        opacity: 0.5;\n        border-radius: 50%;\n    "], ["\n        width: 100%;\n        height: 100%;\n        background-color: ", ";\n        opacity: 0.5;\n        border-radius: 50%;\n    "])), colors ? "" + colors[0] : "" + dProps.colors[0]);
    var Core2 = styled_1.default('div')(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n        width: 100%;\n        height: 100%;\n        background-color: ", ";\n        opacity: 0.6;\n        border-radius: 50%;\n    "], ["\n        width: 100%;\n        height: 100%;\n        background-color: ", ";\n        opacity: 0.6;\n        border-radius: 50%;\n    "])), colors ? "" + colors[1] : "" + dProps.colors[1]);
    return (react_1.default.createElement(wrapper_1.default, { size: size, loading: loading, dPropsSize: dProps.size },
        react_1.default.createElement(Orbit1, null,
            react_1.default.createElement(Core1, null)),
        react_1.default.createElement(Orbit2, null,
            react_1.default.createElement(Core2, null))));
};
exports.default = AlternatingOrbitsLoader;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
