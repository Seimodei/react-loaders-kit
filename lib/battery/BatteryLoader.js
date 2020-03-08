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
    duration: .7,
    color: utilities_1.Colors.Purple
};
var BatteryLoader = function (props) {
    var loading = props.loading, size = props.size, pause = props.pause, duration = props.duration, color = props.color;
    var BatteryAnim = core_1.keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        from { background-position: 0px 0px; }\n        to { background-position: -", "px 0px; }\n    "], ["\n        from { background-position: 0px 0px; }\n        to { background-position: -", "px 0px; }\n    "])), dProps.size * 0.4);
    var Battery = styled_1.default('div')(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n        width: inherit;\n        height: ", ";\n        border: 1px ", " solid;\n        border-radius: 4px;\n        position: relative;\n        background: linear-gradient(-60deg, transparent 0%, transparent 50%, ", " 50%, ", " 75%, transparent 75%, transparent);\n        background-size: ", "px ", "px;\n        background-position: 0% 0%;\n        animation: ", " ", " infinite linear;\n        animation-play-state: ", ";\n    "], ["\n        width: inherit;\n        height: ", ";\n        border: 1px ", " solid;\n        border-radius: 4px;\n        position: relative;\n        background: linear-gradient(-60deg, transparent 0%, transparent 50%, ", " 50%, ", " 75%, transparent 75%, transparent);\n        background-size: ", "px ", "px;\n        background-position: 0% 0%;\n        animation: ", " ", " infinite linear;\n        animation-play-state: ", ";\n    "])), size ? size * 0.36 + "px" : dProps.size * 0.36 + "px", color ? "" + color : "" + dProps.color, color ? "" + color : "" + dProps.color, color ? "" + color : "" + dProps.color, dProps.size * 0.4, dProps.size * 0.6, BatteryAnim, utilities_1.loaderDuration(duration, dProps.duration), utilities_1.pauseAnim(pause));
    return (react_1.default.createElement(wrapper_1.default, { size: size, loading: loading, dPropsSize: dProps.size },
        react_1.default.createElement(Battery, null)));
};
exports.default = BatteryLoader;
var templateObject_1, templateObject_2;
