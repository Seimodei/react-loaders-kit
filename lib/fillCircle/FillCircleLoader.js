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
    size: 60,
    colors: [utilities_1.Colors.Purple, utilities_1.Colors.Purple]
};
var FillCircleLoader = function (props) {
    var loading = props.loading, pause = props.pause, size = props.size, colors = props.colors;
    var loaderSize = 40;
    var itemloaderSize = 10;
    var dur = 3.2;
    var rot = 0;
    var del = 0;
    var items = [];
    for (var i = 0; i < 8; i++) {
        items.push(i);
    }
    var anim = function (index) {
        var animation = core_1.keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n            0%, 60%, 100% {\n                transform: rotate(", "deg) translateX(", "px) scale(1);\n            }\n            10%, 50% {\n                transform: rotate(", "deg) translateX(0) scale(1.5);\n            }\n        "], ["\n            0%, 60%, 100% {\n                transform: rotate(", "deg) translateX(", "px) scale(1);\n            }\n            10%, 50% {\n                transform: rotate(", "deg) translateX(0) scale(1.5);\n            }\n        "])), rot, loaderSize, rot);
        return animation;
    };
    var CenterAnim = core_1.keyframes(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n        0%, 10%, 90%, 100% {\n            transform: scale(0.7);\n        }\n        45%, 55% {\n            transform: scale(1.3);\n        }\n    "], ["\n        0%, 10%, 90%, 100% {\n            transform: scale(0.7);\n        }\n        45%, 55% {\n            transform: scale(1.3);\n        }\n    "])));
    var Loader = styled_1.default('div')(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n        position: absolute;\n        width: inherit;\n        height: inherit;\n        top: 50%;\n        left: 50%;\n        transform: translate(-50%, -50%)  scale(", ");\n    "], ["\n        position: absolute;\n        width: inherit;\n        height: inherit;\n        top: 50%;\n        left: 50%;\n        transform: translate(-50%, -50%)  scale(", ");\n    "])), size ? "" + size / 100 : "" + dProps.size / 100);
    var Center = styled_1.default('div')(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n        width: inherit;\n        height: inherit;\n        background:  ", ";\n        border-radius: 50%;\n        animation: ", " ", "s ease-in-out infinite;\n        animation-play-state: ", ";\n        position: relative;\n        z-index: 3;\n    "], ["\n        width: inherit;\n        height: inherit;\n        background:  ", ";\n        border-radius: 50%;\n        animation: ", " ", "s ease-in-out infinite;\n        animation-play-state: ", ";\n        position: relative;\n        z-index: 3;\n    "])), colors ? "" + colors[0] : "" + dProps.colors[0], CenterAnim, dur, utilities_1.pauseAnim(pause));
    var Item = styled_1.default('div')(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n        position: absolute;\n        width: 15px;\n        height: 15px;\n        top: ", "px;\n        left: 0;\n        right: 0;\n        margin: auto;\n        background:  ", ";\n        border-radius: 50%;\n        z-index: 2;\n    "], ["\n        position: absolute;\n        width: 15px;\n        height: 15px;\n        top: ", "px;\n        left: 0;\n        right: 0;\n        margin: auto;\n        background:  ", ";\n        border-radius: 50%;\n        z-index: 2;\n    "])), (loaderSize - itemloaderSize) / 2, colors ? "" + colors[1] : "" + dProps.colors[1]);
    var renderItems = function () {
        return items.map(function (item, i) {
            del = del + 0.2;
            rot = rot + 45;
            return (core_1.jsx(Item, { key: i, css: core_1.css(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n                        animation: ", " ", "s ease-in-out infinite ", "s;\n                        animation-fill-mode: backwards;\n                        animation-play-state: ", ";\n                        backface-visibility: hidden;\n                        transform: translateZ(0);\n                    "], ["\n                        animation: ", " ", "s ease-in-out infinite ", "s;\n                        animation-fill-mode: backwards;\n                        animation-play-state: ", ";\n                        backface-visibility: hidden;\n                        transform: translateZ(0);\n                    "])), anim(i), dur, del, utilities_1.pauseAnim(pause)) }));
        });
    };
    return (core_1.jsx(wrapper_1.default, { size: 40, loading: loading, dPropsSize: 40 },
        core_1.jsx(Loader, null,
            core_1.jsx(Center, null),
            renderItems())));
};
exports.default = FillCircleLoader;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
