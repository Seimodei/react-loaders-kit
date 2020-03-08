"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Colors;
(function (Colors) {
    Colors["Purple"] = "#5e22f0";
    Colors["Yellow"] = "#f6b93b";
    Colors["Pink"] = "#ef5777";
})(Colors = exports.Colors || (exports.Colors = {}));
exports.convertToRgba = function (colorString, colorOpacity) {
    colorString = colorString.replace('#', '');
    var r = parseInt(colorString.substring(0, 2), 16);
    var g = parseInt(colorString.substring(2, 4), 16);
    var b = parseInt(colorString.substring(4, 6), 16);
    var result = 'rgba(' + r + ',' + g + ',' + b + ',' + colorOpacity / 100 + ')';
    return result;
};
exports.loaderDuration = function (customDuration, defaultDuration) {
    return (customDuration ? customDuration : defaultDuration) + "s";
};
exports.loaderColor = function (customColor, defaultColor) {
    return "" + (customColor ? customColor : defaultColor);
};
exports.pauseAnim = function (pauseState) {
    return "" + (pauseState ? 'paused' : 'running');
};
exports.lightenDarkenColor = function (col, amt) {
    var usePound = false;
    if (col[0] === "#") {
        col = col.slice(1);
        usePound = true;
    }
    var num = parseInt(col, 16);
    var r = (num >> 16) + amt;
    if (r > 255)
        r = 255;
    else if (r < 0)
        r = 0;
    var b = ((num >> 8) & 0x00FF) + amt;
    if (b > 255)
        b = 255;
    else if (b < 0)
        b = 0;
    var g = (num & 0x0000FF) + amt;
    if (g > 255)
        g = 255;
    else if (g < 0)
        g = 0;
    return (usePound ? "#" : "") + (g | (b << 8) | (r << 16)).toString(16);
};
