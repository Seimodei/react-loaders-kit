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
    size: 50,
    colors: [utilities_1.Colors.Purple, utilities_1.Colors.Purple, utilities_1.Colors.Purple, utilities_1.Colors.Purple]
};
var SpinningOrbitLoader = function (props) {
    var loading = props.loading, size = props.size, colors = props.colors, pause = props.pause;
    var Spin3DAnimation = core_1.keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        from {\n            transform: rotate3d(.5,.5,.5, 360deg);\n        }\n        to{\n            transform: rotate3d(0deg);\n        }\n    "], ["\n        from {\n            transform: rotate3d(.5,.5,.5, 360deg);\n        }\n        to{\n            transform: rotate3d(0deg);\n        }\n    "])));
    var Leo = core_1.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n        position: absolute;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        border-radius: 50%;\n    "], ["\n        position: absolute;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        border-radius: 50%;\n    "])));
    var Orbit1 = styled_1.default('div')(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n        width: inherit;\n        height: inherit;\n        border: ", ";\n        animation: ", " 3s linear .2s infinite;\n        animation-play-state: ", ";\n    "], ["\n        width: inherit;\n        height: inherit;\n        border: ", ";\n        animation: ", " 3s linear .2s infinite;\n        animation-play-state: ", ";\n    "])), colors ? "1px solid " + colors[0] : "1px solid " + dProps.colors[0], Spin3DAnimation, pause ? 'paused' : 'running');
    var Orbit2 = styled_1.default('div')(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n        width: 73%;\n        height: 73%;\n        border: ", ";\n        animation: ", " 2s linear 0s infinite;\n        animation-play-state: ", ";\n    "], ["\n        width: 73%;\n        height: 73%;\n        border: ", ";\n        animation: ", " 2s linear 0s infinite;\n        animation-play-state: ", ";\n    "])), colors ? "1px solid " + colors[1] : "1px solid " + dProps.colors[1], Spin3DAnimation, pause ? 'paused' : 'running');
    var Orbit3 = styled_1.default('div')(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n        width: 55%;\n        height: 55%;\n        border: ", ";\n        animation: ", " 1s linear 0s infinite;\n        animation-play-state: ", ";\n    "], ["\n        width: 55%;\n        height: 55%;\n        border: ", ";\n        animation: ", " 1s linear 0s infinite;\n        animation-play-state: ", ";\n    "])), colors ? "1px solid " + colors[2] : "1px solid " + dProps.colors[2], Spin3DAnimation, pause ? 'paused' : 'running');
    var Orbit4 = styled_1.default('div')(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n        width: 40%;\n        height: 40%;\n        border: ", ";\n        animation: ", " 10s linear 0s infinite;\n        animation-play-state: ", ";\n    "], ["\n        width: 40%;\n        height: 40%;\n        border: ", ";\n        animation: ", " 10s linear 0s infinite;\n        animation-play-state: ", ";\n    "])), colors ? "1px solid " + colors[3] : "1px solid " + dProps.colors[3], Spin3DAnimation, pause ? 'paused' : 'running');
    var W1 = core_1.css(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n        transform: rotate3D(1, 1, 1, 90deg)\n    "], ["\n        transform: rotate3D(1, 1, 1, 90deg)\n    "])));
    var W2 = core_1.css(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n        transform: rotate3D(1, 2, .5, 90deg)\n    "], ["\n        transform: rotate3D(1, 2, .5, 90deg)\n    "])));
    var W3 = core_1.css(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n        transform: rotate3D(.5, 1, 2, 90deg)\n    "], ["\n        transform: rotate3D(.5, 1, 2, 90deg)\n    "])));
    return (core_1.jsx(wrapper_1.default, { size: size, loading: loading, dPropsSize: dProps.size },
        core_1.jsx(Orbit1, { css: Leo }),
        core_1.jsx(Orbit2, { css: Leo }),
        core_1.jsx(Orbit3, { css: Leo }),
        core_1.jsx(Orbit4, { css: [W1, Leo] }),
        core_1.jsx(Orbit4, { css: [W2, Leo] }),
        core_1.jsx(Orbit4, { css: [W3, Leo] })));
};
exports.default = SpinningOrbitLoader;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9;
