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
var SphereLoader = function (props) {
    var loading = props.loading, size = props.size, pause = props.pause, duration = props.duration, color = props.color;
    var SphereAnim = core_1.keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        0%, 66% {\n            border-left: 0px ", " solid;\n            border-right: 0px ", " solid;\n        }\n        33% {\n            border-left: 32px ", " solid;\n            border-right: 0px ", " solid;\n        }\n        33.00001% {\n            border-left: 0px ", " solid;\n            border-right: 32px ", " solid;\n        }\n    "], ["\n        0%, 66% {\n            border-left: 0px ", " solid;\n            border-right: 0px ", " solid;\n        }\n        33% {\n            border-left: 32px ", " solid;\n            border-right: 0px ", " solid;\n        }\n        33.00001% {\n            border-left: 0px ", " solid;\n            border-right: 32px ", " solid;\n        }\n    "])), color ? "" + color : "" + dProps.color, color ? "" + color : "" + dProps.color, color ? "" + color : "" + dProps.color, color ? "" + color : "" + dProps.color, color ? "" + color : "" + dProps.color, color ? "" + color : "" + dProps.color);
    var Sphere = styled_1.default('div')(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n        width: inherit;\n        height: inherit;\n        border-radius: 50%;\n        border-left: 0px ", " solid;\n        border-right: 0px ", " solid;\n        animation: ", " ", " infinite linear;\n        animation-play-state: ", ";\n    "], ["\n        width: inherit;\n        height: inherit;\n        border-radius: 50%;\n        border-left: 0px ", " solid;\n        border-right: 0px ", " solid;\n        animation: ", " ", " infinite linear;\n        animation-play-state: ", ";\n    "])), color ? "" + color : "" + dProps.color, color ? "" + color : "" + dProps.color, SphereAnim, utilities_1.loaderDuration(duration, dProps.duration), utilities_1.pauseAnim(pause));
    return (react_1.default.createElement(wrapper_1.default, { size: size, loading: loading, dPropsSize: dProps.size },
        react_1.default.createElement(Sphere, null)));
};
exports.default = SphereLoader;
var templateObject_1, templateObject_2;
