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
    duration: 3,
    size: 40,
    boxBorderWidth: 2,
    colors: [
        '#fafafa',
        '#fafafa',
        utilities_1.Colors.Purple,
        utilities_1.Colors.Purple
    ]
};
var RotatingBoxesLoader = function (props) {
    var loading = props.loading, pause = props.pause, duration = props.duration, size = props.size, boxBorderWidth = props.boxBorderWidth, colors = props.colors;
    var Box1Animation = core_1.keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    0% {\n      transform: rotate(0);\n    }\n    25% {\n      transform: rotate(90deg);\n    }\n    50% {\n      transform: rotate(180deg);\n    }\n    75% {\n      transform: rotate(270deg);\n    }\n    100% {\n      transform: rotate(360deg);\n    }\n  "], ["\n    0% {\n      transform: rotate(0);\n    }\n    25% {\n      transform: rotate(90deg);\n    }\n    50% {\n      transform: rotate(180deg);\n    }\n    75% {\n      transform: rotate(270deg);\n    }\n    100% {\n      transform: rotate(360deg);\n    }\n  "])));
    var Box2Animation = core_1.keyframes(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    0% {\n      transform: rotate(45deg);\n    }\n    25% {\n      transform: rotate(-45deg);\n    }\n    50% {\n      transform: rotate(-135deg);\n    }\n    75% {\n      transform: rotate(-225deg);\n    }\n    100% {\n      transform: rotate(-315deg);\n    }\n  "], ["\n    0% {\n      transform: rotate(45deg);\n    }\n    25% {\n      transform: rotate(-45deg);\n    }\n    50% {\n      transform: rotate(-135deg);\n    }\n    75% {\n      transform: rotate(-225deg);\n    }\n    100% {\n      transform: rotate(-315deg);\n    }\n  "])));
    var Box1 = styled_1.default('div')(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    width: inherit;\n    height: inherit;\n    position: absolute;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: ", "; \n    background: ", ";\n    animation: ", " ease-in-out 0s infinite alternate;\n    animation-play-state: ", ";\n    animation-duration: ", ";\n  "], ["\n    width: inherit;\n    height: inherit;\n    position: absolute;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: ", "; \n    background: ", ";\n    animation: ", " ease-in-out 0s infinite alternate;\n    animation-play-state: ", ";\n    animation-duration: ", ";\n  "])), boxBorderWidth ? boxBorderWidth + "px" : dProps.boxBorderWidth + "px", colors ? "" + colors[2] : "" + dProps.colors[2], Box1Animation, pause ? 'paused' : 'running', duration ? duration + "s" : dProps.duration + "s");
    var Box2 = styled_1.default('div')(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    width: inherit;\n    height: inherit;\n    position: absolute;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    transform: rotate(45deg);\n    padding: ", "; \n    background: ", ";\n    animation: ", " ease-in-out 0s infinite alternate;\n    animation-play-state: ", ";\n    animation-duration: ", ";\n  "], ["\n    width: inherit;\n    height: inherit;\n    position: absolute;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    transform: rotate(45deg);\n    padding: ", "; \n    background: ", ";\n    animation: ", " ease-in-out 0s infinite alternate;\n    animation-play-state: ", ";\n    animation-duration: ", ";\n  "])), boxBorderWidth ? boxBorderWidth + "px" : dProps.boxBorderWidth + "px", colors ? "" + colors[3] : "" + dProps.colors[3], Box2Animation, pause ? 'paused' : 'running', duration ? duration + "s" : dProps.duration + "s");
    var BoxCore = styled_1.default('div')(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    width: 100%;\n    height: 100%;\n  "], ["\n    width: 100%;\n    height: 100%;\n  "])));
    return (react_1.default.createElement(wrapper_1.default, { size: size, loading: loading, dPropsSize: dProps.size },
        react_1.default.createElement(Box1, null,
            react_1.default.createElement(BoxCore, { style: { backgroundColor: colors ? "" + colors[0] : "" + dProps.colors[0] } })),
        react_1.default.createElement(Box2, null,
            react_1.default.createElement(BoxCore, { style: { backgroundColor: colors ? "" + colors[1] : "" + dProps.colors[1] } }))));
};
exports.default = RotatingBoxesLoader;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
