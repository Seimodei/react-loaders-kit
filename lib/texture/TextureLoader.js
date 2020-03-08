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
    duration: .7,
    color: utilities_1.Colors.Purple
};
var TextureLoader = function (props) {
    var loading = props.loading, size = props.size, pause = props.pause, duration = props.duration, color = props.color;
    var TextureAnim = core_1.keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        from { background-position: 0px 0px; }\n        to { background-position: -16px 0px; }\n    "], ["\n        from { background-position: 0px 0px; }\n        to { background-position: -16px 0px; }\n    "])));
    var Texture = styled_1.default('div')(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n        width: inherit;\n        height: inherit;\n        border: 1px ", " solid;\n        border-radius: 4px;\n        position: relative;\n        background: linear-gradient(45deg, transparent 49%, ", " 50%, ", " 50%, transparent 51%, transparent),\n                    linear-gradient(-45deg, transparent 49%, ", " 50%, ", " 50%, transparent 51%, transparent);\n        background-size: 16px 16px;\n        background-position: 0% 0%;\n        animation: ", " ", " infinite linear;\n        animation-play-state: ", ";\n    "], ["\n        width: inherit;\n        height: inherit;\n        border: 1px ", " solid;\n        border-radius: 4px;\n        position: relative;\n        background: linear-gradient(45deg, transparent 49%, ", " 50%, ", " 50%, transparent 51%, transparent),\n                    linear-gradient(-45deg, transparent 49%, ", " 50%, ", " 50%, transparent 51%, transparent);\n        background-size: 16px 16px;\n        background-position: 0% 0%;\n        animation: ", " ", " infinite linear;\n        animation-play-state: ", ";\n    "])), color ? "" + color : "" + dProps.color, color ? "" + color : "" + dProps.color, color ? "" + color : "" + dProps.color, color ? "" + color : "" + dProps.color, color ? "" + color : "" + dProps.color, TextureAnim, utilities_1.loaderDuration(duration, dProps.duration), utilities_1.pauseAnim(pause));
    return (react_1.default.createElement(wrapper_1.default, { size: size, loading: loading, dPropsSize: dProps.size },
        react_1.default.createElement(Texture, null)));
};
exports.default = TextureLoader;
var templateObject_1, templateObject_2;
