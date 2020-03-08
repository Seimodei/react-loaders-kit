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
var LoaderBox = function (props) {
    var LoaderBox = styled_1.default('div')(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        width: ", "; \n        height: ", ";\n        display: ", ";\n        justify-content: center;\n        align-items: center;\n        background-color: transparent;\n        position: relative;\n    "], ["\n        width: ", "; \n        height: ", ";\n        display: ", ";\n        justify-content: center;\n        align-items: center;\n        background-color: transparent;\n        position: relative;\n    "])), props.size ? props.size + "px" : props.dPropsSize + "px", props.size ? props.size + "px" : props.dPropsSize + "px", props.loading ? 'flex' : 'none');
    return (react_1.default.createElement(LoaderBox, null, props.children));
};
exports.default = LoaderBox;
var templateObject_1;
