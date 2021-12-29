'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var styled = require('styled-components');
var styledSystem = require('styled-system');
var get = require('lodash/get');
var noop = require('lodash/noop');
var debounce = require('lodash/debounce');
var throttle = require('lodash/throttle');
var reactRouterDom = require('react-router-dom');
var reactTransitionGroup = require('react-transition-group');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);
var get__default = /*#__PURE__*/_interopDefaultLegacy(get);
var noop__default = /*#__PURE__*/_interopDefaultLegacy(noop);
var debounce__default = /*#__PURE__*/_interopDefaultLegacy(debounce);
var throttle__default = /*#__PURE__*/_interopDefaultLegacy(throttle);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

/** @deprecated */
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}

var getThemeValue = function (path, fallback) { return function (theme) {
    return get__default['default'](theme, path, fallback);
}; };

var rotate = styled.keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"], ["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"])));
var spinStyle = styled.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  animation: ", " 2s linear infinite;\n"], ["\n  animation: ", " 2s linear infinite;\n"])), rotate);
var Svg = styled__default['default'].svg(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  fill: ", ";\n  flex-shrink: 0;\n\n  ", "\n  ", "\n"], ["\n  fill: ", ";\n  flex-shrink: 0;\n\n  ", "\n  ", "\n"])), function (_a) {
    var theme = _a.theme, color = _a.color;
    return getThemeValue("colors." + color, color)(theme);
}, function (_a) {
    var spin = _a.spin;
    return spin && spinStyle;
}, styledSystem.space);
Svg.defaultProps = {
    color: "text",
    width: "20px",
    xmlns: "http://www.w3.org/2000/svg",
    spin: false,
};
var templateObject_1, templateObject_2, templateObject_3;

var Icon = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM15.88 8.29L10 14.17L8.12 12.29C7.73 11.9 7.1 11.9 6.71 12.29C6.32 12.68 6.32 13.31 6.71 13.7L9.3 16.29C9.69 16.68 10.32 16.68 10.71 16.29L17.3 9.7C17.69 9.31 17.69 8.68 17.3 8.29C16.91 7.9 16.27 7.9 15.88 8.29Z" })));
};

var Icon$1 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M12 7C12.55 7 13 7.45 13 8V12C13 12.55 12.55 13 12 13C11.45 13 11 12.55 11 12V8C11 7.45 11.45 7 12 7ZM11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM13 17H11V15H13V17Z" })));
};

var Icon$2 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22ZM12 4C16.42 4 20 7.58 20 12C20 13.85 19.37 15.55 18.31 16.9L7.1 5.69C8.45 4.63 10.15 4 12 4ZM5.69 7.1L16.9 18.31C15.55 19.37 13.85 20 12 20C7.58 20 4 16.42 4 12C4 10.15 4.63 8.45 5.69 7.1Z" })));
};

var Icon$3 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M11 7H13V9H11V7ZM12 17C12.55 17 13 16.55 13 16V12C13 11.45 12.55 11 12 11C11.45 11 11 11.45 11 12V16C11 16.55 11.45 17 12 17ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" })));
};

var getColor = function (_a) {
    var color = _a.color, theme = _a.theme;
    return getThemeValue("colors." + color, color)(theme);
};
var getFontSize = function (_a) {
    var fontSize = _a.fontSize, small = _a.small;
    return small ? "14px" : fontSize || "16px";
};
var Text = styled__default['default'].div(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n  color: ", ";\n  font-size: ", ";\n  font-weight: ", ";\n  line-height: 1.5;\n  ", "\n  ", "\n"], ["\n  color: ", ";\n  font-size: ", ";\n  font-weight: ", ";\n  line-height: 1.5;\n  ", "\n  ", "\n"])), getColor, getFontSize, function (_a) {
    var bold = _a.bold;
    return (bold ? 600 : 400);
}, function (_a) {
    var textTransform = _a.textTransform;
    return textTransform && "text-transform: " + textTransform + ";";
}, styledSystem.space);
Text.defaultProps = {
    color: "text",
    small: false,
};
var templateObject_1$1;

var getExternalLinkProps = function () { return ({
    target: "_blank",
    rel: "noreferrer noopener",
}); };

var sizes = {
    SM: "sm",
    MD: "md",
};
var variants = {
    PRIMARY: "primary",
    SECONDARY: "secondary",
    TERTIARY: "tertiary",
    TEXT: "text",
    DANGER: "danger",
    SUBTLE: "subtle",
    SUCCESS: "success",
};

var getDisabledStyles = function (_a) {
    var isLoading = _a.isLoading, theme = _a.theme;
    if (isLoading === true) {
        return "\n      &:disabled,\n      &.button--disabled {\n        cursor: not-allowed;\n      }\n    ";
    }
    return "\n    &:disabled,\n    &.button--disabled {\n      background: " + theme.colors.backgroundDisabled + ";\n      border-color: " + theme.colors.backgroundDisabled + ";\n      box-shadow: none;\n      color: " + theme.colors.textDisabled + ";\n      cursor: not-allowed;\n    }\n  ";
};
var removePointerEvents = function (_a) {
    var disabled = _a.disabled, as = _a.as;
    if (disabled && as && as !== "button") {
        return "\n      pointer-events: none;\n    ";
    }
    return "";
};
var getButtonVariantProp = function (prop) { return function (_a) {
    var theme = _a.theme, _b = _a.variant, variant = _b === void 0 ? variants.PRIMARY : _b;
    return theme.button[variant][prop];
}; };
var StyledButton = styled__default['default'].button(templateObject_1$2 || (templateObject_1$2 = __makeTemplateObject(["\n  align-items: center;\n  background: ", ";\n  border: ", ";\n  border-radius: ", ";\n  box-shadow: ", ";\n  color: ", ";\n  cursor: pointer;\n  display: inline-flex;\n  font-family: inherit;\n  font-size: 16px;\n  font-weight: 600;\n  /* max-content instead of auto for Safari fix */\n  width: ", ";\n  height: ", ";\n  line-height: 1;\n  letter-spacing: 0.03em;\n  justify-content: center;\n  outline: 0;\n  padding: ", ";\n  transition: background-color 0.2s;\n  opacity: ", ";\n\n  &:hover:not(:disabled):not(.button--disabled):not(:active) {\n    background: ", ";\n    border-color: ", ";\n  }\n\n\n\n\n  \n\n\n  \n    // display: inline-block;\n    // vertical-align: middle;\n    -webkit-transform: perspective(1px) translateZ(0);\n    transform: perspective(1px) translateZ(0);\n    box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n    -webkit-transition-duration: 0.3s;\n    transition-duration: 0.3s;\n    -webkit-transition-property: box-shadow;\n    transition-property: box-shadow;\n  \n  &:hover, &:focus, &:active {\n    box-shadow: 0 0 1.1rem ", ";\n  }\n  \n  \n    transform: translateZ(0);\n    box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n    backface-visibility: hidden;\n    -moz-osx-font-smoothing: grayscale;\n    transition-duration: 0.3s;\n    transition-property: transform;\n\n\n&:hover,\n&:focus,\n&:active {\n    transform: scale(1.1);\n}\n\n\n\n\n\n  \n\n  // &:focus:not(:active) {\n  //   box-shadow: 0 0 0 2px ", ";\n  // }\n\n  &:active {\n    background: ", ";\n    box-shadow: ", ";\n  }\n\n  ", "\n  ", "\n  ", "\n"], ["\n  align-items: center;\n  background: ", ";\n  border: ", ";\n  border-radius: ", ";\n  box-shadow: ", ";\n  color: ", ";\n  cursor: pointer;\n  display: inline-flex;\n  font-family: inherit;\n  font-size: 16px;\n  font-weight: 600;\n  /* max-content instead of auto for Safari fix */\n  width: ", ";\n  height: ", ";\n  line-height: 1;\n  letter-spacing: 0.03em;\n  justify-content: center;\n  outline: 0;\n  padding: ", ";\n  transition: background-color 0.2s;\n  opacity: ", ";\n\n  &:hover:not(:disabled):not(.button--disabled):not(:active) {\n    background: ", ";\n    border-color: ", ";\n  }\n\n\n\n\n  \n\n\n  \n    // display: inline-block;\n    // vertical-align: middle;\n    -webkit-transform: perspective(1px) translateZ(0);\n    transform: perspective(1px) translateZ(0);\n    box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n    -webkit-transition-duration: 0.3s;\n    transition-duration: 0.3s;\n    -webkit-transition-property: box-shadow;\n    transition-property: box-shadow;\n  \n  &:hover, &:focus, &:active {\n    box-shadow: 0 0 1.1rem ", ";\n  }\n  \n  \n    transform: translateZ(0);\n    box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n    backface-visibility: hidden;\n    -moz-osx-font-smoothing: grayscale;\n    transition-duration: 0.3s;\n    transition-property: transform;\n\n\n&:hover,\n&:focus,\n&:active {\n    transform: scale(1.1);\n}\n\n\n\n\n\n  \n\n  // &:focus:not(:active) {\n  //   box-shadow: 0 0 0 2px ", ";\n  // }\n\n  &:active {\n    background: ", ";\n    box-shadow: ", ";\n  }\n\n  ", "\n  ", "\n  ", "\n"])), getButtonVariantProp("background"), getButtonVariantProp("border"), function (_a) {
    var size = _a.size;
    return (size === "sm" ? "12px" : "16px");
}, getButtonVariantProp("boxShadow"), getButtonVariantProp("color"), function (_a) {
    var fullWidth = _a.fullWidth;
    return (fullWidth ? "100%" : "max-content");
}, function (_a) {
    var size = _a.size;
    return (size === "sm" ? "32px" : "48px");
}, function (_a) {
    var size = _a.size;
    return (size === "sm" ? "0 16px" : "0 24px");
}, function (_a) {
    var isLoading = _a.isLoading;
    return (isLoading ? 0.5 : 1);
}, getButtonVariantProp("backgroundHover"), getButtonVariantProp("borderColorHover"), getButtonVariantProp("backgroundHover"), function (_a) {
    var theme = _a.theme;
    return theme.colors.secondary;
}, getButtonVariantProp("backgroundActive"), getButtonVariantProp("boxShadowActive"), getDisabledStyles, removePointerEvents, styledSystem.space);
StyledButton.defaultProps = {
    fullWidth: false,
    type: "button",
};
var templateObject_1$2;

var Button = function (_a) {
    var startIcon = _a.startIcon, endIcon = _a.endIcon, children = _a.children, external = _a.external, isLoading = _a.isLoading, disabled = _a.disabled, props = __rest(_a, ["startIcon", "endIcon", "children", "external", "isLoading", "disabled"]);
    var internalProps = external ? getExternalLinkProps() : {};
    var isDisabled = isLoading || disabled;
    return (React__default['default'].createElement(StyledButton, __assign({}, internalProps, props, { isLoading: isLoading, disabled: isDisabled }),
        React__default['default'].isValidElement(startIcon) &&
            React__default['default'].cloneElement(startIcon, {
                mr: "0.5rem",
            }),
        children,
        React__default['default'].isValidElement(endIcon) &&
            React__default['default'].cloneElement(endIcon, {
                ml: "0.5rem",
            })));
};
Button.defaultProps = {
    variant: variants.PRIMARY,
    size: sizes.MD,
    external: false,
    isLoading: false,
    disabled: false,
};

var IconButton = styled__default['default'](Button)(templateObject_1$3 || (templateObject_1$3 = __makeTemplateObject(["\n  padding: 0;\n  width: ", ";\n"], ["\n  padding: 0;\n  width: ", ";\n"])), function (_a) {
    var size = _a.size;
    return (size === "sm" ? "32px" : "48px");
});
var templateObject_1$3;

var Icon$4 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M18 13H13V18C13 18.55 12.55 19 12 19C11.45 19 11 18.55 11 18V13H6C5.45 13 5 12.55 5 12C5 11.45 5.45 11 6 11H11V6C11 5.45 11.45 5 12 5C12.55 5 13 5.45 13 6V11H18C18.55 11 19 11.45 19 12C19 12.55 18.55 13 18 13Z" })));
};

var Icon$5 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M19 11H7.82998L12.71 6.12C13.1 5.73 13.1 5.09 12.71 4.7C12.32 4.31 11.69 4.31 11.3 4.7L4.70998 11.29C4.31998 11.68 4.31998 12.31 4.70998 12.7L11.3 19.29C11.69 19.68 12.32 19.68 12.71 19.29C13.1 18.9 13.1 18.27 12.71 17.88L7.82998 13H19C19.55 13 20 12.55 20 12C20 11.45 19.55 11 19 11Z" })));
};

var Icon$6 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 25" }, props),
        React__default['default'].createElement("path", { d: "M11 5V16.17L6.11997 11.29C5.72997 10.9 5.08997 10.9 4.69997 11.29C4.30997 11.68 4.30997 12.31 4.69997 12.7L11.29 19.29C11.68 19.68 12.31 19.68 12.7 19.29L19.29 12.7C19.68 12.31 19.68 11.68 19.29 11.29C18.9 10.9 18.27 10.9 17.88 11.29L13 16.17V5C13 4.45 12.55 4 12 4C11.45 4 11 4.45 11 5Z" })));
};

var Icon$7 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M8.71005 11.71L11.3001 14.3C11.6901 14.69 12.3201 14.69 12.7101 14.3L15.3001 11.71C15.9301 11.08 15.4801 10 14.5901 10H9.41005C8.52005 10 8.08005 11.08 8.71005 11.71Z" })));
};

var Icon$8 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M8.71005 12.29L11.3001 9.69997C11.6901 9.30997 12.3201 9.30997 12.7101 9.69997L15.3001 12.29C15.9301 12.92 15.4801 14 14.5901 14H9.41005C8.52005 14 8.08005 12.92 8.71005 12.29Z" })));
};

var Icon$9 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 25" }, props),
        React__default['default'].createElement("path", { d: "M5 13.0022H16.17L11.29 17.8822C10.9 18.2722 10.9 18.9122 11.29 19.3022C11.68 19.6922 12.31 19.6922 12.7 19.3022L19.29 12.7122C19.68 12.3222 19.68 11.6922 19.29 11.3022L12.71 4.70217C12.32 4.31217 11.69 4.31217 11.3 4.70217C10.91 5.09217 10.91 5.72217 11.3 6.11217L16.17 11.0022H5C4.45 11.0022 4 11.4522 4 12.0022C4 12.5522 4.45 13.0022 5 13.0022Z" })));
};

var Icon$a = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M12 6V7.79C12 8.24 12.54 8.46 12.85 8.14L15.64 5.35C15.84 5.15 15.84 4.84 15.64 4.64L12.85 1.85C12.54 1.54 12 1.76 12 2.21V4C7.58 4 4 7.58 4 12C4 13.04 4.2 14.04 4.57 14.95C4.84 15.62 5.7 15.8 6.21 15.29C6.48 15.02 6.59 14.61 6.44 14.25C6.15 13.56 6 12.79 6 12C6 8.69 8.69 6 12 6ZM17.79 8.71C17.52 8.98 17.41 9.4 17.56 9.75C17.84 10.45 18 11.21 18 12C18 15.31 15.31 18 12 18V16.21C12 15.76 11.46 15.54 11.15 15.86L8.36 18.65C8.16 18.85 8.16 19.16 8.36 19.36L11.15 22.15C11.46 22.46 12 22.24 12 21.8V20C16.42 20 20 16.42 20 12C20 10.96 19.8 9.96 19.43 9.05C19.16 8.38 18.3 8.2 17.79 8.71Z" })));
};

var Icon$b = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 16 16" }, props),
        React__default['default'].createElement("circle", { cx: "8", cy: "8", r: "8", fill: "#F0B90B" }),
        React__default['default'].createElement("path", { d: "M5.01656 8.00006L3.79256 9.23256L2.56006 8.00006L3.79256 6.76756L5.01656 8.00006ZM8.00006 5.01656L10.1081 7.12456L11.3406 5.89206L9.23256 3.79256L8.00006 2.56006L6.76756 3.79256L4.66806 5.89206L5.90056 7.12456L8.00006 5.01656ZM12.2076 6.76756L10.9836 8.00006L12.2161 9.23256L13.4401 8.00006L12.2076 6.76756ZM8.00006 10.9836L5.89206 8.87556L4.66806 10.1081L6.77606 12.2161L8.00006 13.4401L9.23256 12.2076L11.3406 10.0996L10.1081 8.87556L8.00006 10.9836ZM8.00006 9.23256L9.23256 8.00006L8.00006 6.76756L6.76756 8.00006L8.00006 9.23256Z", fill: "#FFFDFA" })));
};

var Icon$c = function (props) {
    var theme = styled.useTheme();
    var primaryColor = theme.isDark ? "#3C3742" : "#e9eaeb";
    var secondaryColor = theme.isDark ? "#666171" : "#bdc2c4";
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 72 72" }, props),
        React__default['default'].createElement("path", { d: "M72 36C72 55.8823 55.8823 72 36 72C16.1177 72 0 55.8823 0 36C0 16.1177 16.1177 0 36 0C55.8823 0 72 16.1177 72 36Z", fill: primaryColor }),
        React__default['default'].createElement("mask", { id: "mask0", "mask-type": "alpha", maskUnits: "userSpaceOnUse", x: "3", y: "3", width: "66", height: "66" },
            React__default['default'].createElement("path", { d: "M68.25 36C68.25 53.8112 53.8112 68.25 36 68.25C18.1888 68.25 3.75 53.8112 3.75 36C3.75 18.1888 18.1888 3.75 36 3.75C53.8112 3.75 68.25 18.1888 68.25 36Z", fill: "#C4C4C4" })),
        React__default['default'].createElement("g", { mask: "url(#mask0)" },
            React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M20.9927 23.2654C26.1289 23.1362 30.0824 27.7278 29.2039 32.7879L27.6838 41.5445C30.2298 41.0514 32.9304 40.7875 35.7229 40.7875C37.7063 40.7875 39.6424 40.9206 41.5089 41.1741L49.2862 29.5726C51.7713 25.8657 56.7909 24.8751 60.4978 27.3602C64.7827 30.2326 65.3155 36.33 61.5938 39.9021L55.2585 45.9828C59.9045 49.0009 63.1305 53.2977 63.1306 58.4066V62.322C63.1306 67.644 59.6097 72.0998 54.6877 75.1077C49.7272 78.1391 43.0165 79.9412 35.7229 79.9412C28.4292 79.9412 21.7186 78.1391 16.7581 75.1077C11.836 72.0998 8.31519 67.644 8.31519 62.322V58.4067C8.31522 54.4286 10.2963 50.9169 13.3384 48.1585L13.0101 31.6154C12.9208 27.115 16.4929 23.3785 20.9927 23.2654ZM15.617 49.1514C15.6003 49.0112 15.5903 48.8688 15.5874 48.7246L15.2471 31.571C15.1822 28.3014 17.7798 25.5842 21.049 25.502C24.7712 25.4084 27.637 28.733 26.9996 32.4052L24.8971 44.5163C25.6681 44.2915 26.4607 44.0899 27.2726 43.9131C29.9138 43.338 32.7585 43.0248 35.7229 43.0248C38.1625 43.0248 40.5211 43.237 42.7519 43.6326C42.8725 43.2609 43.0459 42.8995 43.2742 42.5589L51.1446 30.8185C52.9416 28.1379 56.5714 27.4216 59.252 29.2186C62.3505 31.2957 62.7358 35.7049 60.0446 38.2879L51.5469 46.4441C52.264 46.7988 52.9486 47.1771 53.5975 47.577C58.1074 50.3568 60.8932 54.1829 60.8932 58.4066V62.322C60.8932 70.8172 49.6241 77.7039 35.7229 77.7039C21.8217 77.7039 10.5525 70.8172 10.5525 62.322V58.4067C10.5526 54.9322 12.4377 51.7266 15.617 49.1514Z", fill: secondaryColor }),
            React__default['default'].createElement("path", { d: "M60.8932 62.3221C60.8932 70.8173 49.624 77.704 35.7228 77.704C21.8216 77.704 10.5525 70.8173 10.5525 62.3221V58.4067H60.8932V62.3221Z", fill: primaryColor }),
            React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M26.9995 32.4051C27.637 28.733 24.7711 25.4083 21.0489 25.5019C17.7797 25.5842 15.1821 28.3013 15.247 31.5709L15.5874 48.7245C15.5903 48.8687 15.6002 49.0111 15.617 49.1513C12.4376 51.7266 10.5525 54.9321 10.5525 58.4066C10.5525 66.9018 21.8216 73.7885 35.7228 73.7885C49.624 73.7885 60.8932 66.9018 60.8932 58.4066C60.8932 53.5752 57.2481 49.264 51.5468 46.444L60.0445 38.2879C62.7358 35.7048 62.3504 31.2956 59.252 29.2185C56.5714 27.4215 52.9416 28.1378 51.1446 30.8184L43.2742 42.5588C43.0458 42.8994 42.8724 43.2609 42.7519 43.6326C40.521 43.2369 38.1625 43.0248 35.7228 43.0248C31.8473 43.0248 28.1763 43.56 24.897 44.5162L26.9995 32.4051Z", fill: primaryColor }),
            React__default['default'].createElement("path", { d: "M32.0873 57.2881C32.0873 59.6049 30.8352 61.4831 29.2906 61.4831C27.746 61.4831 26.4939 59.6049 26.4939 57.2881C26.4939 54.9712 27.746 53.093 29.2906 53.093C30.8352 53.093 32.0873 54.9712 32.0873 57.2881Z", fill: secondaryColor }),
            React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M28.891 54.0353C29.461 54.8903 29.8499 56.1359 29.8499 57.5677C29.8499 58.1855 30.3508 58.6864 30.9686 58.6864C31.5864 58.6864 32.0873 58.1855 32.0873 57.5677C32.0873 55.7558 31.5997 54.0649 30.7526 52.7943C29.9107 51.5314 28.6248 50.5759 27.0532 50.5759C25.4816 50.5759 24.1957 51.5314 23.3538 52.7943C22.5067 54.0649 22.0191 55.7558 22.0191 57.5677C22.0191 58.55 22.1622 59.4908 22.4244 60.3463C22.6055 60.937 23.2311 61.2691 23.8218 61.088C24.4125 60.9069 24.7446 60.2813 24.5635 59.6906C24.3685 59.0543 24.2565 58.3349 24.2565 57.5677C24.2565 56.1359 24.6454 54.8903 25.2154 54.0353C25.7906 53.1725 26.4624 52.8133 27.0532 52.8133C27.644 52.8133 28.3158 53.1725 28.891 54.0353Z", fill: secondaryColor }),
            React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M48.1883 54.0353C48.7582 54.8903 49.1472 56.1359 49.1472 57.5677C49.1472 58.1855 49.648 58.6864 50.2658 58.6864C50.8837 58.6864 51.3845 58.1855 51.3845 57.5677C51.3845 55.7558 50.8969 54.0649 50.0498 52.7943C49.208 51.5314 47.9221 50.5759 46.3505 50.5759C44.7788 50.5759 43.4929 51.5314 42.6511 52.7943C41.804 54.0649 41.3164 55.7558 41.3164 57.5677C41.3164 58.55 41.4594 59.4908 41.7216 60.3463C41.9027 60.937 42.5284 61.2691 43.1191 61.088C43.7098 60.9069 44.0418 60.2813 43.8608 59.6906C43.6657 59.0543 43.5538 58.3349 43.5538 57.5677C43.5538 56.1359 43.9427 54.8903 44.5127 54.0353C45.0879 53.1725 45.7597 52.8133 46.3505 52.8133C46.9412 52.8133 47.613 53.1725 48.1883 54.0353Z", fill: secondaryColor }),
            React__default['default'].createElement("path", { d: "M51.3844 57.2881C51.3844 59.6049 50.1323 61.4831 48.5877 61.4831C47.0431 61.4831 45.791 59.6049 45.791 57.2881C45.791 54.9712 47.0431 53.093 48.5877 53.093C50.1323 53.093 51.3844 54.9712 51.3844 57.2881Z", fill: secondaryColor }),
            React__default['default'].createElement("path", { d: "M34.0221 25.9463V25.2697C34.0221 24.32 34.2121 23.5247 34.5919 22.8836C34.9956 22.2426 35.5297 21.6134 36.1945 20.9961C36.8118 20.4026 37.4172 19.8921 38.0108 19.4648C38.6043 19.0374 39.091 18.5863 39.4709 18.1115C39.8508 17.6367 40.0407 17.0787 40.0407 16.4377C40.0407 15.5118 39.7083 14.8589 39.0436 14.479C38.4025 14.0754 37.3223 13.8736 35.8028 13.8736C34.8056 13.8736 33.8203 14.0041 32.8469 14.2653C31.8735 14.5027 31.0425 14.8114 30.354 15.1912V10.3835C31.2325 9.95615 32.2652 9.61189 33.4523 9.35073C34.6632 9.08957 35.9808 8.95898 37.4054 8.95898C40.1594 8.95898 42.2606 9.5644 43.7088 10.7752C45.1571 11.9623 45.8812 13.6005 45.8812 15.6898C45.8812 17.0194 45.6082 18.0996 45.0621 18.9306C44.5161 19.7378 43.7207 20.5688 42.6761 21.4235C41.7976 22.1595 41.0616 22.8005 40.4681 23.3466C39.8745 23.8689 39.5777 24.5812 39.5777 25.4834V25.9463H34.0221ZM33.7728 32.2498V28.1187H39.7914V32.2498H33.7728Z", fill: secondaryColor })),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M71.9838 37.09L69.7348 37.0231C69.7449 36.6834 69.75 36.3423 69.75 36C69.75 35.6577 69.7449 35.3166 69.7348 34.9769L71.9838 34.91C71.9946 35.272 72 35.6354 72 36C72 36.3646 71.9946 36.728 71.9838 37.09ZM71.8544 32.7398L69.6134 32.941C69.5523 32.2603 69.471 31.5857 69.3702 30.9176L71.5949 30.5818C71.7025 31.2945 71.7892 32.014 71.8544 32.7398ZM71.2052 28.4414L69.0048 28.9115C68.8622 28.2441 68.6999 27.5841 68.5185 26.932L70.6861 26.3289C70.8798 27.0248 71.053 27.7292 71.2052 28.4414ZM70.0397 24.2525L67.9128 24.9864C67.6906 24.3424 67.4494 23.7072 67.1899 23.0815L69.2683 22.2196C69.5452 22.8874 69.8026 23.5652 70.0397 24.2525ZM68.3746 20.237L66.3524 21.2235C66.0538 20.6114 65.7373 20.0097 65.4034 19.419L67.3622 18.3119C67.7183 18.942 68.0561 19.584 68.3746 20.237ZM66.2353 16.4517L64.347 17.6751C63.977 17.104 63.5901 16.5448 63.1872 15.998L64.9984 14.6631C65.4281 15.2462 65.8407 15.8426 66.2353 16.4517ZM63.656 12.952L61.9283 14.3934C61.4925 13.8711 61.0413 13.3621 60.5752 12.8671L62.2132 11.3246C62.7102 11.8523 63.1914 12.3951 63.656 12.952ZM60.6754 9.78678L59.1329 11.4248C58.6379 10.9587 58.1289 10.5074 57.6066 10.0717L59.048 8.34397C59.6049 8.80865 60.1477 9.28984 60.6754 9.78678ZM57.3369 7.00159L56.002 8.8128C55.4552 8.40985 54.896 8.02303 54.3249 7.65302L55.5482 5.76468C56.1574 6.15933 56.7538 6.57187 57.3369 7.00159ZM53.6881 4.63782L52.581 6.5966C51.9903 6.26271 51.3886 5.94615 50.7765 5.64759L51.7629 3.62536C52.416 3.94392 53.058 4.28165 53.6881 4.63782ZM49.7804 2.7317L48.9185 4.81008C48.2928 4.55061 47.6576 4.30943 47.0136 4.08723L47.7475 1.96028C48.4348 2.19743 49.1126 2.4548 49.7804 2.7317ZM45.6711 1.31385L45.068 3.48152C44.4159 3.3001 43.7559 3.13777 43.0885 2.99517L43.5586 0.794831C44.2708 0.947003 44.9752 1.12024 45.6711 1.31385ZM41.4182 0.405049L41.0824 2.62985C40.4143 2.529 39.7397 2.44772 39.059 2.38662L39.2602 0.14563C39.986 0.210778 40.7055 0.297466 41.4182 0.405049ZM37.09 0.0161859C36.728 0.0054207 36.3646 0 36 0C35.6354 0 35.272 0.00542073 34.91 0.016186L34.9769 2.26519C35.3166 2.25509 35.6577 2.25 36 2.25C36.3423 2.25 36.6834 2.25509 37.0231 2.26519L37.09 0.0161859ZM32.7398 0.145631L32.941 2.38662C32.2603 2.44772 31.5857 2.529 30.9176 2.62985L30.5818 0.405049C31.2945 0.297467 32.014 0.210779 32.7398 0.145631ZM28.4414 0.794832L28.9115 2.99517C28.2441 3.13777 27.5841 3.3001 26.932 3.48152L26.3289 1.31386C27.0248 1.12024 27.7292 0.947004 28.4414 0.794832ZM24.2525 1.96028L24.9864 4.08723C24.3424 4.30944 23.7072 4.55061 23.0815 4.81008L22.2196 2.7317C22.8874 2.45481 23.5652 2.19743 24.2525 1.96028ZM20.237 3.62536L21.2235 5.64759C20.6114 5.94616 20.0097 6.26272 19.419 6.5966L18.3119 4.63783C18.942 4.28165 19.584 3.94392 20.237 3.62536ZM16.4517 5.76469L17.6751 7.65302C17.104 8.02303 16.5448 8.40985 15.998 8.81281L14.6631 7.00159C15.2462 6.57188 15.8426 6.15933 16.4517 5.76469ZM12.952 8.34398L14.3934 10.0717C13.8711 10.5075 13.3621 10.9587 12.8671 11.4248L11.3246 9.78679C11.8523 9.28984 12.3951 8.80865 12.952 8.34398ZM9.78678 11.3246L11.4248 12.8671C10.9587 13.3621 10.5074 13.8711 10.0717 14.3934L8.34397 12.952C8.80865 12.3951 9.28984 11.8523 9.78678 11.3246ZM7.00159 14.6631L8.8128 15.998C8.40985 16.5448 8.02303 17.104 7.65302 17.6751L5.76468 16.4518C6.15933 15.8426 6.57187 15.2462 7.00159 14.6631ZM4.63782 18.3119L6.5966 19.419C6.26271 20.0097 5.94615 20.6114 5.64759 21.2235L3.62536 20.2371C3.94392 19.584 4.28165 18.942 4.63782 18.3119ZM2.7317 22.2196L4.81008 23.0815C4.55061 23.7072 4.30943 24.3424 4.08723 24.9864L1.96028 24.2525C2.19743 23.5652 2.4548 22.8874 2.7317 22.2196ZM1.31385 26.3289L3.48152 26.932C3.3001 27.5841 3.13777 28.2441 2.99517 28.9115L0.794831 28.4414C0.947003 27.7292 1.12024 27.0248 1.31385 26.3289ZM0.405049 30.5818L2.62985 30.9176C2.529 31.5857 2.44772 32.2603 2.38662 32.941L0.14563 32.7398C0.210778 32.014 0.297466 31.2945 0.405049 30.5818ZM0.0161859 34.91C0.0054207 35.272 0 35.6354 0 36C0 36.3646 0.00542073 36.728 0.016186 37.09L2.26519 37.0231C2.25509 36.6834 2.25 36.3423 2.25 36C2.25 35.6577 2.25509 35.3166 2.26519 34.9769L0.0161859 34.91ZM0.145631 39.2602L2.38662 39.059C2.44772 39.7397 2.529 40.4143 2.62985 41.0824L0.40505 41.4182C0.297467 40.7055 0.210779 39.986 0.145631 39.2602ZM0.794833 43.5586L2.99517 43.0885C3.13777 43.7559 3.3001 44.4159 3.48152 45.068L1.31386 45.6711C1.12024 44.9752 0.947004 44.2708 0.794833 43.5586ZM1.96028 47.7475L4.08723 47.0136C4.30944 47.6576 4.55061 48.2928 4.81008 48.9185L2.7317 49.7804C2.45481 49.1126 2.19743 48.4348 1.96028 47.7475ZM3.62536 51.763L5.64759 50.7765C5.94616 51.3886 6.26272 51.9903 6.5966 52.581L4.63783 53.6881C4.28165 53.058 3.94392 52.416 3.62536 51.763ZM5.76469 55.5482L7.65302 54.3249C8.02303 54.896 8.40985 55.4552 8.81281 56.002L7.00159 57.3369C6.57188 56.7538 6.15933 56.1574 5.76469 55.5482ZM8.34398 59.048L10.0717 57.6066C10.5075 58.1289 10.9587 58.6379 11.4248 59.1329L9.78679 60.6754C9.28984 60.1477 8.80865 59.6049 8.34398 59.048ZM11.3246 62.2132L12.8671 60.5752C13.3621 61.0413 13.8711 61.4925 14.3934 61.9283L12.952 63.656C12.3951 63.1914 11.8523 62.7102 11.3246 62.2132ZM14.6631 64.9984L15.998 63.1872C16.5448 63.5901 17.104 63.977 17.6751 64.347L16.4518 66.2353C15.8426 65.8407 15.2462 65.4281 14.6631 64.9984ZM18.3119 67.3622L19.419 65.4034C20.0097 65.7373 20.6114 66.0538 21.2235 66.3524L20.2371 68.3746C19.584 68.0561 18.942 67.7184 18.3119 67.3622ZM22.2196 69.2683L23.0815 67.1899C23.7072 67.4494 24.3424 67.6906 24.9864 67.9128L24.2525 70.0397C23.5652 69.8026 22.8874 69.5452 22.2196 69.2683ZM26.3289 70.6861L26.932 68.5185C27.5841 68.6999 28.2441 68.8622 28.9115 69.0048L28.4414 71.2052C27.7292 71.053 27.0248 70.8798 26.3289 70.6861ZM30.5818 71.595L30.9176 69.3702C31.5857 69.471 32.2603 69.5523 32.941 69.6134L32.7398 71.8544C32.014 71.7892 31.2945 71.7025 30.5818 71.595ZM34.91 71.9838L34.9769 69.7348C35.3166 69.7449 35.6577 69.75 36 69.75C36.3423 69.75 36.6834 69.7449 37.0231 69.7348L37.09 71.9838C36.728 71.9946 36.3646 72 36 72C35.6354 72 35.272 71.9946 34.91 71.9838ZM39.2602 71.8544L39.059 69.6134C39.7397 69.5523 40.4143 69.471 41.0824 69.3702L41.4182 71.5949C40.7055 71.7025 39.986 71.7892 39.2602 71.8544ZM43.5586 71.2052L43.0885 69.0048C43.7559 68.8622 44.4159 68.6999 45.068 68.5185L45.6711 70.6861C44.9752 70.8798 44.2708 71.053 43.5586 71.2052ZM47.7475 70.0397L47.0136 67.9128C47.6576 67.6906 48.2928 67.4494 48.9185 67.1899L49.7804 69.2683C49.1126 69.5452 48.4348 69.8026 47.7475 70.0397ZM51.7629 68.3746L50.7765 66.3524C51.3886 66.0538 51.9903 65.7373 52.581 65.4034L53.6881 67.3622C53.058 67.7183 52.416 68.0561 51.7629 68.3746ZM55.5482 66.2353L54.3249 64.347C54.896 63.977 55.4552 63.5901 56.002 63.1872L57.3369 64.9984C56.7538 65.4281 56.1574 65.8407 55.5482 66.2353ZM59.048 63.656L57.6066 61.9283C58.1289 61.4925 58.6379 61.0413 59.1329 60.5752L60.6754 62.2132C60.1477 62.7102 59.6049 63.1914 59.048 63.656ZM62.2132 60.6754L60.5752 59.1329C61.0413 58.6379 61.4925 58.1289 61.9283 57.6066L63.656 59.048C63.1914 59.6049 62.7102 60.1477 62.2132 60.6754ZM64.9984 57.3369L63.1872 56.002C63.5901 55.4552 63.977 54.896 64.347 54.3249L66.2353 55.5482C65.8407 56.1574 65.4281 56.7538 64.9984 57.3369ZM67.3622 53.6881L65.4034 52.581C65.7373 51.9903 66.0538 51.3886 66.3524 50.7765L68.3746 51.7629C68.0561 52.416 67.7184 53.058 67.3622 53.6881ZM69.2683 49.7804L67.1899 48.9185C67.4494 48.2928 67.6906 47.6576 67.9128 47.0136L70.0397 47.7475C69.8026 48.4348 69.5452 49.1126 69.2683 49.7804ZM70.6861 45.6711L68.5185 45.068C68.6999 44.4159 68.8622 43.7559 69.0048 43.0885L71.2052 43.5586C71.053 44.2708 70.8798 44.9752 70.6861 45.6711ZM71.595 41.4182L69.3702 41.0824C69.471 40.4143 69.5523 39.7397 69.6134 39.059L71.8544 39.2602C71.7892 39.986 71.7025 40.7055 71.595 41.4182Z", fill: secondaryColor })));
};

var Icon$d = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M4.5 12H7.5C8.05 12 8.5 11.55 8.5 11V7C8.5 6.45 8.05 6 7.5 6H4.5C3.95 6 3.5 6.45 3.5 7V11C3.5 11.55 3.95 12 4.5 12ZM4.5 19H7.5C8.05 19 8.5 18.55 8.5 18V14C8.5 13.45 8.05 13 7.5 13H4.5C3.95 13 3.5 13.45 3.5 14V18C3.5 18.55 3.95 19 4.5 19ZM10.5 19H13.5C14.05 19 14.5 18.55 14.5 18V14C14.5 13.45 14.05 13 13.5 13H10.5C9.95 13 9.5 13.45 9.5 14V18C9.5 18.55 9.95 19 10.5 19ZM16.5 19H19.5C20.05 19 20.5 18.55 20.5 18V14C20.5 13.45 20.05 13 19.5 13H16.5C15.95 13 15.5 13.45 15.5 14V18C15.5 18.55 15.95 19 16.5 19ZM10.5 12H13.5C14.05 12 14.5 11.55 14.5 11V7C14.5 6.45 14.05 6 13.5 6H10.5C9.95 6 9.5 6.45 9.5 7V11C9.5 11.55 9.95 12 10.5 12ZM15.5 7V11C15.5 11.55 15.95 12 16.5 12H19.5C20.05 12 20.5 11.55 20.5 11V7C20.5 6.45 20.05 6 19.5 6H16.5C15.95 6 15.5 6.45 15.5 7Z" })));
};

var Icon$e = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 25 24" }, props),
        React__default['default'].createElement("path", { d: "M19.2 3H5.19995C4.09995 3 3.19995 3.9 3.19995 5V19C3.19995 20.1 4.09995 21 5.19995 21H19.2C20.3 21 21.2 20.1 21.2 19V5C21.2 3.9 20.3 3 19.2 3ZM19.2 19H5.19995V5H19.2V19Z", fill: "#1FC7D4" }),
        React__default['default'].createElement("path", { d: "M11.45 7.72021H6.44995V9.22022H11.45V7.72021Z", fill: "#1FC7D4" }),
        React__default['default'].createElement("path", { d: "M18.2 15.75H13.2V17.25H18.2V15.75Z", fill: "#1FC7D4" }),
        React__default['default'].createElement("path", { d: "M18.2 13.25H13.2V14.75H18.2V13.25Z", fill: "#1FC7D4" }),
        React__default['default'].createElement("path", { d: "M8.19995 18H9.69995V16H11.7V14.5H9.69995V12.5H8.19995V14.5H6.19995V16H8.19995V18Z", fill: "#1FC7D4" }),
        React__default['default'].createElement("path", { d: "M14.29 10.95L15.7 9.54L17.11 10.95L18.17 9.89L16.76 8.47L18.17 7.06L17.11 6L15.7 7.41L14.29 6L13.23 7.06L14.64 8.47L13.23 9.89L14.29 10.95Z", fill: "#1FC7D4" })));
};

var Icon$f = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 18 13" }, props),
        React__default['default'].createElement("path", { d: "M6 10.2001L2.5 6.70007C2.11 6.31007 1.49 6.31007 1.1 6.70007C0.709995 7.09007 0.709995 7.71007 1.1 8.10007L5.29 12.2901C5.68 12.6801 6.31 12.6801 6.7 12.2901L17.3 1.70007C17.69 1.31007 17.69 0.690068 17.3 0.300068C16.91 -0.0899316 16.29 -0.0899316 15.9 0.300068L6 10.2001Z" })));
};

var Icon$g = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M8.11997 9.29006L12 13.1701L15.88 9.29006C16.27 8.90006 16.9 8.90006 17.29 9.29006C17.68 9.68006 17.68 10.3101 17.29 10.7001L12.7 15.2901C12.31 15.6801 11.68 15.6801 11.29 15.2901L6.69997 10.7001C6.30997 10.3101 6.30997 9.68006 6.69997 9.29006C7.08997 8.91006 7.72997 8.90006 8.11997 9.29006Z" })));
};

var Icon$h = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M14.71 15.88L10.83 12L14.71 8.12001C15.1 7.73001 15.1 7.10001 14.71 6.71001C14.32 6.32001 13.69 6.32001 13.3 6.71001L8.70998 11.3C8.31998 11.69 8.31998 12.32 8.70998 12.71L13.3 17.3C13.69 17.69 14.32 17.69 14.71 17.3C15.09 16.91 15.1 16.27 14.71 15.88Z" })));
};

var Icon$i = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M9.29006 15.88L13.1701 12L9.29006 8.12001C8.90006 7.73001 8.90006 7.10001 9.29006 6.71001C9.68006 6.32001 10.3101 6.32001 10.7001 6.71001L15.2901 11.3C15.6801 11.69 15.6801 12.32 15.2901 12.71L10.7001 17.3C10.3101 17.69 9.68006 17.69 9.29006 17.3C8.91006 16.91 8.90006 16.27 9.29006 15.88Z" })));
};

var Icon$j = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M8.11997 14.7101L12 10.8301L15.88 14.7101C16.27 15.1001 16.9 15.1001 17.29 14.7101C17.68 14.3201 17.68 13.6901 17.29 13.3001L12.7 8.7101C12.31 8.3201 11.68 8.3201 11.29 8.7101L6.69997 13.3001C6.30997 13.6901 6.30997 14.3201 6.69997 14.7101C7.08997 15.0901 7.72997 15.1001 8.11997 14.7101Z" })));
};

var Icon$k = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M18.3 5.70997C17.91 5.31997 17.28 5.31997 16.89 5.70997L12 10.59L7.10997 5.69997C6.71997 5.30997 6.08997 5.30997 5.69997 5.69997C5.30997 6.08997 5.30997 6.71997 5.69997 7.10997L10.59 12L5.69997 16.89C5.30997 17.28 5.30997 17.91 5.69997 18.3C6.08997 18.69 6.71997 18.69 7.10997 18.3L12 13.41L16.89 18.3C17.28 18.69 17.91 18.69 18.3 18.3C18.69 17.91 18.69 17.28 18.3 16.89L13.41 12L18.3 7.10997C18.68 6.72997 18.68 6.08997 18.3 5.70997Z" })));
};

var Icon$l = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M19.43 12.98C19.47 12.66 19.5 12.34 19.5 12C19.5 11.66 19.47 11.34 19.43 11.02L21.54 9.37C21.73 9.22 21.78 8.95 21.66 8.73L19.66 5.27C19.54 5.05 19.27 4.97 19.05 5.05L16.56 6.05C16.04 5.65 15.48 5.32 14.87 5.07L14.49 2.42C14.46 2.18 14.25 2 14 2H9.99996C9.74996 2 9.53996 2.18 9.50996 2.42L9.12996 5.07C8.51996 5.32 7.95996 5.66 7.43996 6.05L4.94996 5.05C4.71996 4.96 4.45996 5.05 4.33996 5.27L2.33996 8.73C2.20996 8.95 2.26996 9.22 2.45996 9.37L4.56996 11.02C4.52996 11.34 4.49996 11.67 4.49996 12C4.49996 12.33 4.52996 12.66 4.56996 12.98L2.45996 14.63C2.26996 14.78 2.21996 15.05 2.33996 15.27L4.33996 18.73C4.45996 18.95 4.72996 19.03 4.94996 18.95L7.43996 17.95C7.95996 18.35 8.51996 18.68 9.12996 18.93L9.50996 21.58C9.53996 21.82 9.74996 22 9.99996 22H14C14.25 22 14.46 21.82 14.49 21.58L14.87 18.93C15.48 18.68 16.04 18.34 16.56 17.95L19.05 18.95C19.28 19.04 19.54 18.95 19.66 18.73L21.66 15.27C21.78 15.05 21.73 14.78 21.54 14.63L19.43 12.98ZM12 15.5C10.07 15.5 8.49996 13.93 8.49996 12C8.49996 10.07 10.07 8.5 12 8.5C13.93 8.5 15.5 10.07 15.5 12C15.5 13.93 13.93 15.5 12 15.5Z" })));
};

var Icon$m = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M12 12.75C13.63 12.75 15.07 13.14 16.24 13.65C17.32 14.13 18 15.21 18 16.38V17C18 17.55 17.55 18 17 18H7C6.45 18 6 17.55 6 17V16.39C6 15.21 6.68 14.13 7.76 13.66C8.93 13.14 10.37 12.75 12 12.75ZM4 13C5.1 13 6 12.1 6 11C6 9.9 5.1 9 4 9C2.9 9 2 9.9 2 11C2 12.1 2.9 13 4 13ZM5.13 14.1C4.76 14.04 4.39 14 4 14C3.01 14 2.07 14.21 1.22 14.58C0.48 14.9 0 15.62 0 16.43V17C0 17.55 0.45 18 1 18H4.5V16.39C4.5 15.56 4.73 14.78 5.13 14.1ZM20 13C21.1 13 22 12.1 22 11C22 9.9 21.1 9 20 9C18.9 9 18 9.9 18 11C18 12.1 18.9 13 20 13ZM24 16.43C24 15.62 23.52 14.9 22.78 14.58C21.93 14.21 20.99 14 20 14C19.61 14 19.24 14.04 18.87 14.1C19.27 14.78 19.5 15.56 19.5 16.39V18H23C23.55 18 24 17.55 24 17V16.43ZM12 6C13.66 6 15 7.34 15 9C15 10.66 13.66 12 12 12C10.34 12 9 10.66 9 9C9 7.34 10.34 6 12 6Z" })));
};

var Icon$n = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M15 1H4C2.9 1 2 1.9 2 3V16C2 16.55 2.45 17 3 17C3.55 17 4 16.55 4 16V4C4 3.45 4.45 3 5 3H15C15.55 3 16 2.55 16 2C16 1.45 15.55 1 15 1ZM19 5H8C6.9 5 6 5.9 6 7V21C6 22.1 6.9 23 8 23H19C20.1 23 21 22.1 21 21V7C21 5.9 20.1 5 19 5ZM18 21H9C8.45 21 8 20.55 8 20V8C8 7.45 8.45 7 9 7H18C18.55 7 19 7.45 19 8V20C19 20.55 18.55 21 18 21Z" })));
};

var Icon$o = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 20 20" }, props),
        React__default['default'].createElement("path", { d: "M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18ZM9 14H11V16H9V14ZM10.61 4.04C8.55 3.74 6.73 5.01 6.18 6.83C6 7.41 6.44 8 7.05 8H7.25C7.66 8 7.99 7.71 8.13 7.33C8.45 6.44 9.4 5.83 10.43 6.05C11.38 6.25 12.08 7.18 12 8.15C11.9 9.49 10.38 9.78 9.55 11.03C9.55 11.04 9.54 11.04 9.54 11.05C9.53 11.07 9.52 11.08 9.51 11.1C9.42 11.25 9.33 11.42 9.26 11.6C9.25 11.63 9.23 11.65 9.22 11.68C9.21 11.7 9.21 11.72 9.2 11.75C9.08 12.09 9 12.5 9 13H11C11 12.58 11.11 12.23 11.28 11.93C11.3 11.9 11.31 11.87 11.33 11.84C11.41 11.7 11.51 11.57 11.61 11.45C11.62 11.44 11.63 11.42 11.64 11.41C11.74 11.29 11.85 11.18 11.97 11.07C12.93 10.16 14.23 9.42 13.96 7.51C13.72 5.77 12.35 4.3 10.61 4.04Z" })));
};

var Icon$p = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M4.5 14H6.5C7.05 14 7.5 13.55 7.5 13V11C7.5 10.45 7.05 10 6.5 10H4.5C3.95 10 3.5 10.45 3.5 11V13C3.5 13.55 3.95 14 4.5 14ZM4.5 19H6.5C7.05 19 7.5 18.55 7.5 18V16C7.5 15.45 7.05 15 6.5 15H4.5C3.95 15 3.5 15.45 3.5 16V18C3.5 18.55 3.95 19 4.5 19ZM4.5 9H6.5C7.05 9 7.5 8.55 7.5 8V6C7.5 5.45 7.05 5 6.5 5H4.5C3.95 5 3.5 5.45 3.5 6V8C3.5 8.55 3.95 9 4.5 9ZM9.5 14H19.5C20.05 14 20.5 13.55 20.5 13V11C20.5 10.45 20.05 10 19.5 10H9.5C8.95 10 8.5 10.45 8.5 11V13C8.5 13.55 8.95 14 9.5 14ZM9.5 19H19.5C20.05 19 20.5 18.55 20.5 18V16C20.5 15.45 20.05 15 19.5 15H9.5C8.95 15 8.5 15.45 8.5 16V18C8.5 18.55 8.95 19 9.5 19ZM8.5 6V8C8.5 8.55 8.95 9 9.5 9H19.5C20.05 9 20.5 8.55 20.5 8V6C20.5 5.45 20.05 5 19.5 5H9.5C8.95 5 8.5 5.45 8.5 6Z" })));
};

var Icon$q = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 32 32" }, props),
        React__default['default'].createElement("image", { width: "32", height: "32", href: "/images/egg/logo.png" })));
};

var Icon$r = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 512 512" }, props),
        React__default['default'].createElement("image", { width: "32", height: "32", href: "/images/egg/logo.png" })));
};

var Icon$s = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 15 2" }, props),
        React__default['default'].createElement("path", { d: "M13.2 2L1.20004 2C0.650043 2 0.200043 1.55 0.200043 1C0.200043 0.45 0.650043 0 1.20004 0L13.2 0C13.75 0 14.2 0.45 14.2 1C14.2 1.55 13.75 2 13.2 2Z" })));
};

var Icon$t = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z" })));
};

var Icon$u = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 64 64" }, props),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M2.43832 38.1153C2.43048 38.3002 2.42654 38.4857 2.42654 38.6718C2.42654 39.3754 2.48287 40.0702 2.59273 40.7545H2.42654V41.8317C2.42654 42.3575 2.45801 42.8784 2.51976 43.3937C3.7248 53.4491 16.4632 61.3609 32 61.3609C47.5368 61.3609 60.2752 53.4491 61.4802 43.3937C61.542 42.8784 61.5735 42.3575 61.5735 41.8317V40.7545H61.4073C61.5171 40.0702 61.5735 39.3754 61.5735 38.6718C61.5735 38.4857 61.5695 38.3002 61.5617 38.1153C61.1156 27.587 48.0511 19.1426 32 19.1426C15.9489 19.1426 2.88444 27.587 2.43832 38.1153ZM0.00951064 38.1153C0.229456 31.6916 4.24297 26.2955 9.82907 22.6067C15.6197 18.7827 23.4643 16.5034 32 16.5034C40.5358 16.5034 48.3803 18.7827 54.1709 22.6067C59.757 26.2955 63.7705 31.6916 63.9905 38.1153H64V41.8317C64 48.5003 59.9176 54.102 54.1709 57.8969C48.3803 61.7208 40.5358 64.0001 32 64.0001C23.4643 64.0001 15.6197 61.7208 9.82907 57.8969C4.08238 54.102 0 48.5003 0 41.8317V38.1153H0.00951064Z", fill: "#606063" }),
        React__default['default'].createElement("path", { d: "M61.5734 41.832C61.5734 52.6177 48.3329 61.3612 32 61.3612C15.667 61.3612 2.42651 52.6177 2.42651 41.832V38.7405H61.5734V41.832Z", fill: "#BEBEBE" }),
        React__default['default'].createElement("path", { d: "M61.5734 38.6718C61.5734 49.4575 48.3329 58.201 32 58.201C15.667 58.201 2.42651 49.4575 2.42651 38.6718C2.42651 27.8861 15.667 19.1426 32 19.1426C48.3329 19.1426 61.5734 27.8861 61.5734 38.6718Z", fill: "#FAF9FA" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M6.97668 33.1548C6.97663 33.167 6.97661 33.1792 6.97661 33.1915C6.97661 34.0795 7.09495 34.9492 7.32173 35.794H6.97634V36.9377C6.97634 37.4425 7.01459 37.9414 7.08925 38.4332C8.21673 45.8588 17.6492 51.6547 29.1184 51.6547C40.5876 51.6547 50.0201 45.8588 51.1475 38.4332C51.2222 37.9414 51.2604 37.4425 51.2604 36.9377V35.794H50.9156C51.1362 34.9723 51.2542 34.127 51.2604 33.2641C51.2606 33.2399 51.2607 33.2157 51.2607 33.1915C51.2607 33.1792 51.2607 33.167 51.2606 33.1548C51.2309 25.0436 41.329 18.4744 29.1187 18.4744C16.9083 18.4744 7.00645 25.0436 6.97668 33.1548ZM4.55012 33.1548H4.5498V36.9377C4.5498 42.269 7.79116 46.6683 12.1963 49.5962C16.643 52.5518 22.632 54.2939 29.1184 54.2939C35.6048 54.2939 41.5937 52.5518 46.0405 49.5962C50.4456 46.6683 53.687 42.269 53.687 36.9377V33.2739C53.6872 33.2464 53.6872 33.2189 53.6872 33.1915C53.6872 27.8601 50.4459 23.4609 46.0408 20.533C41.594 17.5773 35.6051 15.8352 29.1187 15.8352C22.6322 15.8352 16.6433 17.5773 12.1965 20.533C7.80153 23.4542 4.56495 27.84 4.55012 33.1548Z", fill: "#633001" }),
        React__default['default'].createElement("path", { d: "M51.2604 36.9379C51.2604 45.0659 41.3471 51.6549 29.1184 51.6549C16.8897 51.6549 6.97632 45.0659 6.97632 36.9379V33.4849H51.2604V36.9379Z", fill: "#FEDC90" }),
        React__default['default'].createElement("path", { d: "M51.2604 33.1914C51.2604 41.3195 41.3471 47.9085 29.1184 47.9085C16.8897 47.9085 6.97632 41.3195 6.97632 33.1914C6.97632 25.0634 16.8897 18.4744 29.1184 18.4744C41.3471 18.4744 51.2604 25.0634 51.2604 33.1914Z", fill: "#D1884F" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M13.6497 25.2371C13.6496 25.2493 13.6496 25.2615 13.6496 25.2737C13.6496 26.1618 13.7679 27.0315 13.9947 27.8762H13.6493V29.0199C13.6493 29.5248 13.6876 30.0237 13.7622 30.5154C14.8897 37.941 24.3222 43.737 35.7914 43.737C47.2605 43.737 56.693 37.941 57.8205 30.5154C57.8952 30.0237 57.9334 29.5248 57.9334 29.0199V27.8762H57.5886C57.8092 27.0545 57.9271 26.2092 57.9334 25.3464C57.9336 25.3222 57.9337 25.298 57.9337 25.2737C57.9337 25.2615 57.9337 25.2493 57.9336 25.2371C57.9038 17.1259 48.0019 10.5567 35.7916 10.5567C23.5813 10.5567 13.6794 17.1259 13.6497 25.2371ZM11.2231 25.2371H11.2228V29.0199C11.2228 34.3513 14.4641 38.7505 18.8693 41.6785C23.316 44.6341 29.3049 46.3762 35.7914 46.3762C42.2778 46.3762 48.2667 44.6341 52.7135 41.6785C57.1186 38.7505 60.36 34.3513 60.36 29.0199V25.3561C60.3601 25.3287 60.3602 25.3012 60.3602 25.2737C60.3602 19.9424 57.1189 15.5432 52.7137 12.6152C48.267 9.65961 42.2781 7.91748 35.7916 7.91748C29.3052 7.91748 23.3163 9.65961 18.8695 12.6152C14.4745 15.5364 11.2379 19.9222 11.2231 25.2371Z", fill: "#633001" }),
        React__default['default'].createElement("path", { d: "M57.9334 29.0201C57.9334 37.1481 48.0201 43.7372 35.7913 43.7372C23.5626 43.7372 13.6493 37.1481 13.6493 29.0201V25.5671H57.9334V29.0201Z", fill: "#FEDC90" }),
        React__default['default'].createElement("path", { d: "M57.9334 25.274C57.9334 33.402 48.0201 39.991 35.7913 39.991C23.5626 39.991 13.6493 33.402 13.6493 25.274C13.6493 17.1459 23.5626 10.5569 35.7913 10.5569C48.0201 10.5569 57.9334 17.1459 57.9334 25.274Z", fill: "#D1884F" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M6.97668 17.3196C6.97663 17.3318 6.97661 17.344 6.97661 17.3563C6.97661 18.2443 7.09495 19.114 7.32173 19.9588H6.97634V21.1025C6.97634 21.6073 7.01459 22.1062 7.08925 22.598C8.21673 30.0236 17.6492 35.8195 29.1184 35.8195C40.5876 35.8195 50.0201 30.0236 51.1475 22.598C51.2222 22.1062 51.2604 21.6073 51.2604 21.1025V19.9588H50.9156C51.1362 19.1371 51.2542 18.2917 51.2604 17.4289C51.2606 17.4047 51.2607 17.3805 51.2607 17.3563C51.2607 17.344 51.2607 17.3318 51.2606 17.3196C51.2309 9.20843 41.329 2.63919 29.1187 2.63919C16.9083 2.63919 7.00645 9.20843 6.97668 17.3196ZM4.55012 17.3196H4.5498V21.1025C4.5498 26.4338 7.79116 30.833 12.1963 33.761C16.643 36.7166 22.632 38.4587 29.1184 38.4587C35.6048 38.4587 41.5937 36.7166 46.0405 33.761C50.4456 30.833 53.687 26.4338 53.687 21.1025V17.4387C53.6872 17.4112 53.6872 17.3837 53.6872 17.3563C53.6872 12.0249 50.4459 7.62568 46.0408 4.69775C41.594 1.74213 35.6051 0 29.1187 0C22.6322 0 16.6433 1.74213 12.1965 4.69775C7.80153 7.61896 4.56495 12.0047 4.55012 17.3196Z", fill: "#633001" }),
        React__default['default'].createElement("path", { d: "M51.2604 21.1027C51.2604 29.2307 41.3471 35.8197 29.1184 35.8197C16.8897 35.8197 6.97632 29.2307 6.97632 21.1027V17.6497H51.2604V21.1027Z", fill: "#FEDC90" }),
        React__default['default'].createElement("path", { d: "M51.2604 17.3562C51.2604 25.4842 41.3471 32.0733 29.1184 32.0733C16.8897 32.0733 6.97632 25.4842 6.97632 17.3562C6.97632 9.22822 16.8897 2.63916 29.1184 2.63916C41.3471 2.63916 51.2604 9.22822 51.2604 17.3562Z", fill: "#D1884F" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.214 18.272C12.214 20.9856 14.0269 23.4161 16.8871 25.0513L14.9054 28.7844L14.9059 28.7847H14.9054V38.2326C14.9054 39.4819 15.8366 40.4947 16.9853 40.4947C18.134 40.4947 19.0652 39.4819 19.0652 38.2326V30.7188L21.1972 26.7024C22.5605 27.0169 24.0238 27.1876 25.5468 27.1876C32.9103 27.1876 38.8796 23.196 38.8796 18.272C38.8796 13.3481 32.9103 9.35645 25.5468 9.35645C18.1833 9.35645 12.214 13.3481 12.214 18.272Z", fill: "url(#paint0_linear)" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M16.8871 25.0513C16.5702 24.8701 16.2663 24.6792 15.9762 24.4793C13.6475 22.8741 12.2139 20.685 12.2139 18.272C12.2139 13.3481 18.1832 9.35641 25.5468 9.35641C32.9103 9.35641 38.8796 13.3481 38.8796 18.272C38.8796 23.1959 32.9103 27.1876 25.5468 27.1876C24.0238 27.1876 22.5604 27.0168 21.1972 26.7024L19.0652 30.7187V38.2325C19.0652 39.4819 18.134 40.4947 16.9853 40.4947C15.8366 40.4947 14.9054 39.4819 14.9054 38.2325V28.7847L16.8871 25.0513ZM12.7822 28.8244V38.2325C12.7822 40.7573 14.664 42.804 16.9853 42.804C19.3066 42.804 21.1884 40.7573 21.1884 38.2325V31.3375L22.2942 29.2544C23.3445 29.4135 24.433 29.4969 25.5468 29.4969C29.5564 29.4969 33.2881 28.4148 36.0865 26.5435C38.8503 24.6954 41.0028 21.836 41.0028 18.272C41.0028 14.708 38.8503 11.8486 36.0865 10.0005C33.2881 8.12923 29.5564 7.04712 25.5468 7.04712C21.5371 7.04712 17.8054 8.12923 15.007 10.0005C12.2432 11.8486 10.0907 14.708 10.0907 18.272C10.0907 21.4 11.738 23.9758 14.0266 25.8213L13.0813 27.6021C12.9912 27.7662 12.9192 27.9435 12.8685 28.1307C12.8064 28.3589 12.7783 28.5928 12.7822 28.8244Z", fill: "#633001" }),
        React__default['default'].createElement("path", { d: "M16.3791 14.5156C16.3791 17.0663 19.3667 19.1341 23.0521 19.1341C26.7375 19.1341 29.7251 17.0663 29.7251 14.5156C29.7251 11.9648 26.7375 9.89697 23.0521 9.89697C19.3667 9.89697 16.3791 11.9648 16.3791 14.5156Z", fill: "#9E7200" }),
        React__default['default'].createElement("path", { d: "M16.3792 12.5361H29.7251V14.5155H16.3792V12.5361Z", fill: "#9E7200" }),
        React__default['default'].createElement("path", { d: "M16.3791 12.5361C16.3791 15.0868 19.3667 17.1546 23.0521 17.1546C26.7375 17.1546 29.7251 15.0868 29.7251 12.5361C29.7251 9.98529 26.7375 7.91748 23.0521 7.91748C19.3667 7.91748 16.3791 9.98529 16.3791 12.5361Z", fill: "#F0B90B" }),
        React__default['default'].createElement("path", { d: "M20.52 11.9795L22.4008 10.6777C22.7983 10.4027 23.3062 10.4027 23.7036 10.6777L25.5845 11.9795C25.959 12.2388 25.959 12.8336 25.5845 13.0928L23.7036 14.3946C23.3062 14.6697 22.7983 14.6697 22.4008 14.3946L20.52 13.0928C20.1454 12.8336 20.1454 12.2388 20.52 11.9795Z", fill: "#9E7200" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M17.1938 7.32218C18.7911 6.21664 20.8681 5.6084 23.0522 5.6084C25.2363 5.6084 27.3133 6.21664 28.9106 7.32218C30.4827 8.41029 31.8484 10.1975 31.8484 12.5363V14.5157C31.8484 16.8545 30.4827 18.6417 28.9106 19.7298C27.3133 20.8353 25.2363 21.4435 23.0522 21.4435C20.8681 21.4435 18.7911 20.8353 17.1938 19.7298C15.6217 18.6417 14.256 16.8545 14.256 14.5157V12.5363C14.256 10.1975 15.6217 8.41029 17.1938 7.32218ZM23.0522 7.91769C19.3668 7.91769 16.3792 9.9855 16.3792 12.5363V14.5157C16.3792 17.0664 19.3668 19.1343 23.0522 19.1343C26.7376 19.1343 29.7252 17.0664 29.7252 14.5157V12.5363C29.7252 9.9855 26.7376 7.91769 23.0522 7.91769Z", fill: "#633001" }),
        React__default['default'].createElement("defs", null,
            React__default['default'].createElement("linearGradient", { id: "paint0_linear", x1: "25.691", y1: "9.6549", x2: "25.691", y2: "40.2608", gradientUnits: "userSpaceOnUse" },
                React__default['default'].createElement("stop", { stopColor: "#9F4A08" }),
                React__default['default'].createElement("stop", { offset: "0.370494", stopColor: "#7D3900" }),
                React__default['default'].createElement("stop", { offset: "1", stopColor: "#8D4104" })))));
};

var Icon$v = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 90 90" }, props),
        React__default['default'].createElement("image", { width: 90, height: 90, href: "/images/egg/9.png" })));
};

var Icon$w = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 90 90" }, props),
        React__default['default'].createElement("image", { width: 90, height: 90, href: "/images/incubator/9.png" })));
};

var Icon$x = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 48 48" }, props),
        React__default['default'].createElement("path", { d: "M38 10H34C34 7.79086 32.2091 6 30 6H18C15.7909 6 14 7.79086 14 10H10C7.8 10 6 11.8 6 14V16C6 21.1 9.84 25.26 14.78 25.88C16.04 28.88 18.74 31.14 22 31.8V38H16C14.8954 38 14 38.8954 14 40C14 41.1046 14.8954 42 16 42H32C33.1046 42 34 41.1046 34 40C34 38.8954 33.1046 38 32 38H26V31.8C29.26 31.14 31.96 28.88 33.22 25.88C38.16 25.26 42 21.1 42 16V14C42 11.8 40.2 10 38 10ZM10 16V14H14V21.64C11.68 20.8 10 18.6 10 16ZM24 28C20.7 28 18 25.3 18 22V10H30V22C30 25.3 27.3 28 24 28ZM38 16C38 18.6 36.32 20.8 34 21.64V14H38V16Z" })));
};

var Icon$y = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 20 20" }, props),
        React__default['default'].createElement("path", { d: "M5 10C5 10.55 5.45 11 6 11H14C14.55 11 15 10.55 15 10C15 9.45 14.55 9 14 9H6C5.45 9 5 9.45 5 10ZM10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18Z" })));
};

var Icon$z = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M23 12L20.56 9.21L20.9 5.52L17.29 4.7L15.4 1.5L12 2.96L8.6 1.5L6.71 4.69L3.1 5.5L3.44 9.2L1 12L3.44 14.79L3.1 18.49L6.71 19.31L8.6 22.5L12 21.03L15.4 22.49L17.29 19.3L20.9 18.48L20.56 14.79L23 12ZM9.38 16.01L7 13.61C6.61 13.22 6.61 12.59 7 12.2L7.07 12.13C7.46 11.74 8.1 11.74 8.49 12.13L10.1 13.75L15.25 8.59C15.64 8.2 16.28 8.2 16.67 8.59L16.74 8.66C17.13 9.05 17.13 9.68 16.74 10.07L10.82 16.01C10.41 16.4 9.78 16.4 9.38 16.01Z" })));
};

var Icon$A = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 34 38" }, props),
        React__default['default'].createElement("rect", { x: "8.83594", width: "5.30132", height: "17.3191", rx: "2.65066", fill: "#D1884F" }),
        React__default['default'].createElement("rect", { x: "19.4385", width: "5.30132", height: "17.3191", rx: "2.65066", fill: "#D1884F" }),
        React__default['default'].createElement("path", { d: "M8.5 13.0084C13.1944 8.40751 20.8056 8.40751 25.5 13.0084C30.1944 17.6093 30.1944 25.0689 25.5 29.6698L17.6538 37.3597C17.2927 37.7136 16.7073 37.7136 16.3462 37.3597L8.5 29.6698C3.80558 25.0689 3.80558 17.6093 8.5 13.0084Z", fill: "#D1884F" }),
        React__default['default'].createElement("ellipse", { cx: "12.3696", cy: "19.9172", rx: "1.76711", ry: "2.59786", fill: "white" }),
        React__default['default'].createElement("ellipse", { cx: "21.2056", cy: "19.9172", rx: "1.76711", ry: "2.59786", fill: "white" })));
};

var Icon$B = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 80 80" }, props),
        React__default['default'].createElement("g", { clipPath: "url(#clip0)" },
            React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M26.0073 13.3635C24.9476 12.4048 23.2491 12.9058 22.8792 14.286C22.6061 15.3055 23.2111 16.3534 24.2305 16.6266L31.8797 18.6762L26.0073 13.3635ZM18.609 13.1418C19.8344 8.56857 25.4621 6.90878 28.9731 10.0851L41.2257 21.1698C43.051 22.8212 41.4235 25.8102 39.0459 25.1732L23.0863 20.8968C19.7085 19.9917 17.7039 16.5197 18.609 13.1418Z", fill: "#7645D9" }),
            React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M42.264 10.1052C42.7399 8.62854 44.609 8.17749 45.7061 9.27458C46.5164 10.0849 46.5164 11.3987 45.7061 12.209L39.6263 18.2888L42.264 10.1052ZM49.1002 5.88046C45.4652 2.24548 39.2724 3.73996 37.6954 8.63274L32.192 25.7073C31.3722 28.251 34.5252 30.1781 36.415 28.2883L49.1002 15.6031C51.785 12.9183 51.785 8.5653 49.1002 5.88046Z", fill: "#7645D9" }),
            React__default['default'].createElement("path", { opacity: "0.6", d: "M70.9047 42.5535C71.2363 43.8171 73.0301 43.8171 73.3617 42.5535L74.3564 38.7636C74.4727 38.3202 74.819 37.9739 75.2624 37.8575L79.0523 36.8629C80.3159 36.5313 80.3159 34.7375 79.0523 34.4059L75.2624 33.4112C74.819 33.2949 74.4727 32.9486 74.3564 32.5051L73.3617 28.7153C73.0301 27.4517 71.2363 27.4517 70.9047 28.7153L69.91 32.5051C69.7937 32.9486 69.4474 33.2949 69.004 33.4112L65.2141 34.4059C63.9505 34.7375 63.9505 36.5313 65.2141 36.8629L69.004 37.8575C69.4474 37.9739 69.7937 38.3202 69.91 38.7636L70.9047 42.5535Z", fill: "#53DEE9" }),
            React__default['default'].createElement("path", { d: "M67.9738 14.5792C67.9699 15.345 68.9855 15.6172 69.365 14.952L70.5032 12.957C70.6364 12.7235 70.885 12.58 71.1538 12.5814L73.4506 12.5932C74.2164 12.5971 74.4886 11.5814 73.8234 11.202L71.8284 10.0637C71.5949 9.93057 71.4514 9.68195 71.4528 9.41322L71.4646 7.11635C71.4685 6.35056 70.4528 6.07841 70.0734 6.74357L68.9351 8.73862C68.802 8.97203 68.5533 9.11558 68.2846 9.1142L65.9877 9.10239C65.222 9.09846 64.9498 10.1141 65.615 10.4936L67.61 11.6318C67.8434 11.765 67.987 12.0136 67.9856 12.2824L67.9738 14.5792Z", fill: "#53DEE9" }),
            React__default['default'].createElement("path", { opacity: "0.8", d: "M12.6621 19.7326C13.3806 19.544 13.3806 18.5241 12.6621 18.3356L8.79571 17.3208C8.54359 17.2547 8.34669 17.0578 8.28052 16.8056L7.26579 12.9392C7.07722 12.2208 6.05731 12.2208 5.86875 12.9392L4.85402 16.8056C4.78785 17.0578 4.59095 17.2547 4.33883 17.3208L0.472442 18.3356C-0.246022 18.5241 -0.246022 19.544 0.472441 19.7326L4.33883 20.7473C4.59095 20.8135 4.78785 21.0104 4.85402 21.2625L5.86875 25.1289C6.05731 25.8474 7.07722 25.8474 7.26578 25.1289L8.28052 21.2625C8.34669 21.0104 8.54359 20.8135 8.79571 20.7473L12.6621 19.7326Z", fill: "#53DEE9" }),
            React__default['default'].createElement("path", { d: "M16.1463 37.3821C17.0611 33.9679 20.5705 31.9418 23.9847 32.8566L57.9852 41.9671C61.3994 42.8819 63.4256 46.3912 62.5107 49.8054L56.8167 71.0558C55.9019 74.47 52.3925 76.4961 48.9783 75.5813L14.9778 66.4709C11.5636 65.556 9.53745 62.0467 10.4523 58.6325L16.1463 37.3821Z", fill: "url(#paint0_linear)" }),
            React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M57.157 45.058L23.1564 35.9476C21.4493 35.4902 19.6947 36.5032 19.2373 38.2103L13.5432 59.4607C13.0858 61.1678 14.0989 62.9225 15.806 63.3799L49.8066 72.4903C51.5137 72.9477 53.2683 71.9347 53.7257 70.2276L59.4198 48.9772C59.8772 47.2701 58.8641 45.5154 57.157 45.058ZM23.9847 32.8566C20.5705 31.9418 17.0611 33.9679 16.1463 37.3821L10.4523 58.6325C9.53745 62.0467 11.5636 65.556 14.9778 66.4709L48.9783 75.5813C52.3925 76.4961 55.9019 74.47 56.8167 71.0558L62.5107 49.8054C63.4256 46.3912 61.3994 42.8819 57.9852 41.9671L23.9847 32.8566Z", fill: "#0098A1" }),
            React__default['default'].createElement("path", { d: "M35.9629 36.0654L46.0085 38.7571L37.0016 72.3714L26.956 69.6797L35.9629 36.0654Z", fill: "#7645D9" }),
            React__default['default'].createElement("path", { d: "M11.8535 53.0029L14.5452 42.9573L61.111 55.4346L58.4193 65.4802L11.8535 53.0029Z", fill: "#7645D9" }),
            React__default['default'].createElement("g", { style: { mixBlendMode: "multiply" } },
                React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M30.0918 57.9047L40.1732 60.606L39.7591 62.1515L29.6777 59.4502L30.0918 57.9047ZM42.8724 50.5325L32.791 47.8312L33.2051 46.2857L43.2865 48.987L42.8724 50.5325Z", fill: "#7645D9" })),
            React__default['default'].createElement("path", { d: "M11.4611 31.1814C10.775 28.6207 12.2946 25.9887 14.8552 25.3026L58.1287 13.7075C60.6893 13.0214 63.3213 14.541 64.0074 17.1016L65.1462 21.3517C65.8324 23.9123 64.3128 26.5443 61.7521 27.2305L18.4787 38.8256C15.918 39.5117 13.286 37.9921 12.5999 35.4314L11.4611 31.1814Z", fill: "url(#paint1_linear)" }),
            React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M58.9569 16.7985L15.6834 28.3936C14.8299 28.6223 14.3233 29.4996 14.552 30.3531L15.6908 34.6032C15.9196 35.4568 16.7969 35.9633 17.6504 35.7346L60.9239 24.1395C61.7775 23.9108 62.284 23.0335 62.0553 22.1799L60.9165 17.9298C60.6878 17.0763 59.8104 16.5698 58.9569 16.7985ZM14.8552 25.3026C12.2946 25.9887 10.775 28.6207 11.4611 31.1814L12.5999 35.4314C13.286 37.9921 15.918 39.5117 18.4787 38.8256L61.7521 27.2305C64.3128 26.5443 65.8324 23.9123 65.1462 21.3517L64.0074 17.1016C63.3213 14.541 60.6893 13.0214 58.1287 13.7075L14.8552 25.3026Z", fill: "#0098A1" }),
            React__default['default'].createElement("path", { d: "M31.4707 20.8506L41.5163 18.1589L45.1398 31.6818L35.0942 34.3735L31.4707 20.8506Z", fill: "#7645D9" }),
            React__default['default'].createElement("g", { style: { mixBlendMode: "multiply" } },
                React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M31.9671 22.5998L41.9672 19.7998L41.5673 17.9998L31.3975 20.8215L31.9671 22.5998Z", fill: "#7645D9" }))),
        React__default['default'].createElement("defs", null,
            React__default['default'].createElement("linearGradient", { id: "paint0_linear", x1: "40.9849", y1: "37.4118", x2: "31.978", y2: "71.0261", gradientUnits: "userSpaceOnUse" },
                React__default['default'].createElement("stop", { stopColor: "#53DEE9" }),
                React__default['default'].createElement("stop", { offset: "1", stopColor: "#1FC7D4" })),
            React__default['default'].createElement("linearGradient", { id: "paint1_linear", x1: "36.4919", y1: "19.505", x2: "40.1154", y2: "33.028", gradientUnits: "userSpaceOnUse" },
                React__default['default'].createElement("stop", { stopColor: "#53DEE9" }),
                React__default['default'].createElement("stop", { offset: "1", stopColor: "#1FC7D4" })),
            React__default['default'].createElement("clipPath", { id: "clip0" },
                React__default['default'].createElement("rect", { width: "80", height: "80", fill: "white", transform: "matrix(-1 0 0 1 80 0)" })))));
};

var Icon$C = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 80 80" }, props),
        React__default['default'].createElement("path", { d: "M76.2856 28.6526C77.0883 29.4553 77.1989 30.7184 76.548 31.6485C64.6385 48.6643 49.9116 63.5221 33.0019 75.5817L31.6665 76.5341C30.6872 77.2325 29.3467 77.121 28.4962 76.2705L22.4847 70.259C26.0334 66.5844 25.9945 60.7286 22.3678 57.1019C18.7411 53.4752 12.8853 53.4362 9.21067 56.985L3.68116 51.4555C2.62962 50.4039 2.77462 48.6597 3.98536 47.7962L5.32156 46.8433C21.8225 35.0751 36.1934 20.5765 47.815 3.97204C48.6291 2.80897 50.296 2.66297 51.2998 3.66682L56.9276 9.29459C53.3922 12.97 53.4356 18.8158 57.0578 22.438C60.6799 26.0601 66.5257 26.1035 70.2011 22.5681L76.2856 28.6526Z", fill: "#DBCDF9" }),
        React__default['default'].createElement("path", { d: "M78.9507 30.3151L57.459 57.5291L29.6615 78.5708L24.3156 73.1863L22.3868 70.8482L24.3156 68.0575L24.9915 65.2668L24.6194 62.29L23.5031 59.4993L21.6426 57.2668L19.4101 55.7784L16.9915 55.0342H14.0147L10.8519 56.1505L8.99148 57.8249L4.52637 52.4296L11.7898 51.3463C34.3187 47.9863 55.6053 38.8899 73.6048 24.9307L78.9507 30.3151Z", fill: "#A28BD4" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M19.7724 70.5193C19.7732 69.7287 20.0885 68.971 20.6487 68.4131L20.6586 68.4032C23.1622 65.8996 23.1622 61.8405 20.6586 59.3369C18.155 56.8333 14.0958 56.8333 11.5922 59.3369L11.5823 59.3468C11.0245 59.907 10.2667 60.2223 9.47617 60.2231C8.68561 60.2239 7.92718 59.9103 7.36817 59.3512L1.57656 53.5596C-0.776282 51.2068 -0.451848 47.304 2.25722 45.372L3.59342 44.419L5.32184 46.8426L3.98564 47.7955C2.7749 48.659 2.6299 50.4032 3.68144 51.4548L9.47304 57.2464L9.48735 57.232C9.49192 57.2275 9.49649 57.2229 9.50106 57.2183C13.1682 53.5659 19.1019 53.5705 22.7635 57.232C26.4247 60.8933 26.4295 66.8263 22.778 70.4936C22.7731 70.4984 22.7683 70.5033 22.7635 70.5081L22.7491 70.5224L28.4965 76.2698C29.347 77.1203 30.6875 77.2318 31.6668 76.5334L33.0022 75.581C49.9119 63.5214 64.6388 48.6636 76.5483 31.6478C77.1992 30.7178 77.0886 29.4546 76.2859 28.6519L70.2487 22.6148C70.2268 22.6371 70.2047 22.6594 70.1825 22.6816C70.1603 22.7038 70.138 22.7259 70.1156 22.7479C66.4445 26.3475 60.5503 26.3254 56.9064 22.6816C53.2625 19.0376 53.2405 13.1434 56.8404 9.47221C56.8623 9.44989 56.8843 9.42764 56.9064 9.40548C56.9286 9.38329 56.9509 9.36124 56.9733 9.33932L51.3001 3.66613C50.2962 2.66229 48.6293 2.80829 47.8153 3.97136C36.1937 20.5758 21.8228 35.0744 5.32184 46.8426L3.59342 44.419C19.8185 32.8476 33.9492 18.5913 45.3766 2.26445C47.252 -0.415092 51.0922 -0.751452 53.4049 1.56125L59.0781 7.23444C59.64 7.79626 59.9539 8.55937 59.95 9.35389C59.9461 10.1484 59.6247 10.9084 59.0574 11.4647C59.042 11.4798 59.0267 11.495 59.0113 11.5104C56.5077 14.014 56.5077 18.0731 59.0113 20.5767C61.5149 23.0803 65.5741 23.0803 68.0777 20.5767C68.0929 20.5615 68.1081 20.5461 68.1233 20.5306C68.6796 19.9633 69.4396 19.6419 70.2341 19.6381C71.0287 19.6342 71.7918 19.9481 72.3536 20.5099L78.3907 26.547C80.2148 28.3711 80.4662 31.2413 78.987 33.3547C66.8832 50.648 51.9161 65.7482 34.7306 78.0046L33.3952 78.9569C31.2319 80.4997 28.2705 80.2536 26.3916 78.3747L20.6442 72.6273C20.0852 72.0683 19.7715 71.3099 19.7724 70.5193Z", fill: "#633001" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M39.9888 14.0672L41.3044 15.3827C41.8856 15.964 41.8856 16.9064 41.3044 17.4876C40.7231 18.0688 39.7808 18.0688 39.1995 17.4876L37.884 16.1721C37.3027 15.5908 37.3027 14.6484 37.884 14.0672C38.4652 13.4859 39.4076 13.4859 39.9888 14.0672Z", fill: "#633001" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M45.5142 19.5926L46.8298 20.9081C47.411 21.4894 47.411 22.4317 46.8298 23.013C46.2485 23.5942 45.3062 23.5942 44.7249 23.013L43.4094 21.6974C42.8281 21.1162 42.8281 20.1738 43.4094 19.5926C43.9906 19.0113 44.933 19.0113 45.5142 19.5926Z", fill: "#633001" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M52.3542 28.5384C51.773 29.1196 50.8306 29.1196 50.2493 28.5384L48.6707 26.9597C48.0894 26.3785 48.0894 25.4361 48.6707 24.8549C49.2519 24.2736 50.1943 24.2736 50.7755 24.8549L52.3542 26.4335C52.9354 27.0148 52.9354 27.9571 52.3542 28.5384Z", fill: "#633001" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M57.8796 34.0638C57.2983 34.645 56.356 34.645 55.7747 34.0638L54.1961 32.4851C53.6148 31.9039 53.6148 30.9615 54.1961 30.3802C54.7773 29.799 55.7197 29.799 56.3009 30.3802L57.8796 31.9589C58.4608 32.5401 58.4608 33.4825 57.8796 34.0638Z", fill: "#633001" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M61.8267 35.9051L63.1423 37.2206C63.7235 37.8019 63.7235 38.7442 63.1423 39.3255C62.561 39.9067 61.6187 39.9067 61.0374 39.3255L59.7219 38.0099C59.1406 37.4287 59.1406 36.4863 59.7219 35.9051C60.3031 35.3238 61.2455 35.3238 61.8267 35.9051Z", fill: "#633001" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M67.3521 41.4305L68.6677 42.746C69.2489 43.3273 69.2489 44.2696 68.6677 44.8509C68.0864 45.4321 67.144 45.4321 66.5628 44.8509L65.2472 43.5353C64.666 42.9541 64.666 42.0117 65.2472 41.4305C65.8285 40.8492 66.7709 40.8492 67.3521 41.4305Z", fill: "#633001" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M32.2915 37.1288C30.6927 35.53 30.6927 32.9378 32.2915 31.3389C34.1033 29.5272 37.1152 29.806 38.5636 31.9196L42.2107 37.2416C45.3939 36.2204 48.7719 36.3559 51.0104 38.5945C53.0227 40.6067 53.3281 43.5721 52.6459 46.3981C51.9561 49.256 50.2117 52.2664 47.6467 54.8314C45.0817 57.3964 42.0713 59.1408 39.2134 59.8306C36.3874 60.5128 33.422 60.2073 31.4098 58.1951C29.1842 55.9696 29.0377 52.6168 30.0388 49.4519L24.694 45.7892C22.5804 44.3408 22.3016 41.3289 24.1134 39.5171C25.7122 37.9183 28.3044 37.9183 29.9032 39.5171L33.6067 43.2206C33.9734 42.7908 34.3625 42.3691 34.7735 41.9582C35.1704 41.5613 35.5772 41.1847 35.9918 40.8291L32.2915 37.1288Z", fill: "#633001" }),
        React__default['default'].createElement("ellipse", { cx: "36.9019", cy: "50.5685", rx: "1.79015", ry: "2.60385", transform: "rotate(-45 36.9019 50.5685)", fill: "#DBCDF9" }),
        React__default['default'].createElement("ellipse", { rx: "1.79015", ry: "2.60385", transform: "matrix(0.707107 -0.707106 0.707107 0.707106 43.5768 43.8947)", fill: "#DBCDF9" })));
};

var Icon$D = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 48 48" }, props),
        React__default['default'].createElement("circle", { cx: "24", cy: "24", r: "24", fill: "url(#paint0_linear)" }),
        React__default['default'].createElement("path", { d: "M39.0623 18.9777C39.3983 19.3138 39.4447 19.8426 39.1721 20.232C34.1862 27.3557 28.0207 33.576 20.9413 38.6248L20.3823 39.0235C19.9723 39.3159 19.4111 39.2692 19.055 38.9132L16.5383 36.3964C18.024 34.858 18.0077 32.4065 16.4893 30.8881C14.971 29.3698 12.5194 29.3535 10.981 30.8392L8.66608 28.5242C8.22585 28.084 8.28655 27.3538 8.79343 26.9923L9.35284 26.5933C16.261 21.6665 22.2775 15.5966 27.1429 8.64507C27.4837 8.15815 28.1816 8.09702 28.6019 8.51729L30.958 10.8734C29.4778 12.4121 29.496 14.8595 31.0125 16.3759C32.5289 17.8924 34.9762 17.9105 36.515 16.4304L39.0623 18.9777Z", fill: "#DBCDF9" }),
        React__default['default'].createElement("path", { d: "M40.1776 19.6742L31.18 31.0674L19.5425 39.8766L17.3044 37.6224L16.4969 36.6435L17.3044 35.4752L17.5873 34.3068L17.4316 33.0606L16.9642 31.8923L16.1853 30.9576L15.2507 30.3345L14.2381 30.0229H12.9919L11.6678 30.4903L10.8889 31.1913L9.01953 28.9325L12.0604 28.4789C21.4923 27.0723 30.404 23.264 37.9396 17.4199L40.1776 19.6742Z", fill: "#A28BD4" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M15.4028 36.5059C15.4031 36.1749 15.5351 35.8577 15.7697 35.6241L15.7738 35.62C16.822 34.5718 16.822 32.8725 15.7738 31.8243C14.7257 30.7762 13.0263 30.7762 11.9781 31.8243L11.974 31.8285C11.7405 32.063 11.4232 32.195 11.0922 32.1953C10.7613 32.1957 10.4438 32.0643 10.2097 31.8303L7.78504 29.4056C6.80001 28.4206 6.93583 26.7867 8.07 25.9778L8.6294 25.5789L9.35301 26.5935L8.79361 26.9925C8.28673 27.354 8.22602 28.0842 8.66625 28.5244L11.0909 30.9491L11.0969 30.9431C11.0988 30.9412 11.1008 30.9393 11.1027 30.9374C12.638 29.4083 15.1221 29.4102 16.655 30.9431C18.1878 32.4759 18.1899 34.9598 16.6611 36.4951C16.6591 36.4971 16.6571 36.4992 16.655 36.5012L16.649 36.5072L19.0552 38.9134C19.4113 39.2694 19.9725 39.3161 20.3824 39.0237L20.9415 38.625C28.0208 33.5762 34.1863 27.3559 39.1723 20.2321C39.4448 19.8428 39.3985 19.314 39.0625 18.9779L36.535 16.4504C36.5258 16.4598 36.5166 16.4691 36.5073 16.4784C36.498 16.4877 36.4886 16.4969 36.4792 16.5061C34.9423 18.0132 32.4747 18.0039 30.9492 16.4784C29.4236 14.9528 29.4144 12.4852 30.9215 10.9482C30.9307 10.9389 30.9399 10.9296 30.9492 10.9203C30.9585 10.911 30.9678 10.9018 30.9771 10.8926L28.602 8.51747C28.1818 8.0972 27.4839 8.15833 27.1431 8.64525C22.2777 15.5968 16.2612 21.6667 9.35301 26.5935L8.6294 25.5789C15.4221 20.7344 21.338 14.766 26.1221 7.93065C26.9073 6.80885 28.515 6.66803 29.4832 7.63625L31.8584 10.0114C32.0936 10.2466 32.225 10.566 32.2234 10.8987C32.2217 11.2313 32.0872 11.5495 31.8497 11.7824C31.8432 11.7887 31.8368 11.7951 31.8304 11.8015C30.7822 12.8496 30.7822 14.549 31.8304 15.5972C32.8785 16.6453 34.5779 16.6453 35.626 15.5972C35.6324 15.5908 35.6388 15.5844 35.6452 15.5779C35.8781 15.3404 36.1962 15.2058 36.5289 15.2042C36.8615 15.2026 37.181 15.334 37.4162 15.5692L39.9437 18.0967C40.7073 18.8603 40.8126 20.062 40.1933 20.9467C35.126 28.1867 28.8599 34.5084 21.6651 39.6396L21.1061 40.0383C20.2004 40.6842 18.9606 40.5812 18.174 39.7946L15.7678 37.3884C15.5338 37.1544 15.4025 36.8369 15.4028 36.5059Z", fill: "#633001" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M23.8664 12.8716L24.4172 13.4223C24.6605 13.6657 24.6605 14.0602 24.4172 14.3035C24.1738 14.5469 23.7793 14.5469 23.536 14.3035L22.9852 13.7528C22.7419 13.5094 22.7419 13.1149 22.9852 12.8716C23.2285 12.6282 23.6231 12.6282 23.8664 12.8716Z", fill: "#633001" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M26.1799 15.1841L26.7306 15.7348C26.974 15.9782 26.974 16.3727 26.7306 16.616C26.4873 16.8594 26.0928 16.8594 25.8494 16.616L25.2987 16.0653C25.0553 15.8219 25.0553 15.4274 25.2987 15.1841C25.542 14.9407 25.9365 14.9407 26.1799 15.1841Z", fill: "#633001" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M29.0441 18.9295C28.8008 19.1729 28.4062 19.1728 28.1629 18.9295L27.502 18.2686C27.2587 18.0253 27.2587 17.6307 27.502 17.3874C27.7453 17.144 28.1399 17.144 28.3832 17.3874L29.0441 18.0483C29.2875 18.2916 29.2875 18.6862 29.0441 18.9295Z", fill: "#633001" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M31.3576 21.243C31.1143 21.4863 30.7197 21.4863 30.4764 21.243L29.8155 20.5821C29.5721 20.3387 29.5721 19.9442 29.8155 19.7009C30.0588 19.4575 30.4533 19.4575 30.6967 19.7009L31.3576 20.3618C31.6009 20.6051 31.6009 20.9996 31.3576 21.243Z", fill: "#633001" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M33.009 22.0141L33.5597 22.5649C33.8031 22.8082 33.8031 23.2028 33.5597 23.4461C33.3164 23.6895 32.9219 23.6895 32.6785 23.4461L32.1278 22.8953C31.8844 22.652 31.8844 22.2575 32.1278 22.0141C32.3711 21.7708 32.7656 21.7708 33.009 22.0141Z", fill: "#633001" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M35.3225 24.3266L35.8732 24.8774C36.1166 25.1207 36.1166 25.5153 35.8732 25.7586C35.6299 26.002 35.2354 26.002 34.992 25.7586L34.4412 25.2078C34.1979 24.9645 34.1979 24.57 34.4412 24.3266C34.6846 24.0833 35.0791 24.0833 35.3225 24.3266Z", fill: "#633001" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M20.6437 22.5266C19.9743 21.8573 19.9743 20.772 20.6437 20.1027C21.4022 19.3442 22.6632 19.4609 23.2695 20.3458L24.7964 22.5738C26.1291 22.1463 27.5433 22.2031 28.4805 23.1402C29.3229 23.9827 29.4507 25.2241 29.1652 26.4073C28.8764 27.6037 28.1461 28.8641 27.0722 29.9379C25.9984 31.0117 24.7381 31.742 23.5416 32.0308C22.3584 32.3164 21.117 32.1886 20.2745 31.3461C19.3428 30.4144 19.2815 29.0108 19.7006 27.6858L17.4629 26.1524C16.5781 25.546 16.4614 24.285 17.2199 23.5265C17.8892 22.8572 18.9745 22.8572 19.6438 23.5265L21.1943 25.077C21.3478 24.897 21.5107 24.7205 21.6828 24.5485C21.8489 24.3823 22.0193 24.2247 22.1928 24.0758L20.6437 22.5266Z", fill: "#633001" }),
        React__default['default'].createElement("ellipse", { rx: "0.749452", ry: "1.09011", transform: "matrix(0.707107 -0.707106 0.707107 0.707106 22.5742 28.153)", fill: "#DBCDF9" }),
        React__default['default'].createElement("ellipse", { cx: "25.3682", cy: "25.359", rx: "0.749453", ry: "1.09011", transform: "rotate(-45 25.3682 25.359)", fill: "#DBCDF9" }),
        React__default['default'].createElement("path", { d: "M40.2095 34.2904C40.0804 34.7825 39.3818 34.7825 39.2527 34.2904L38.5576 31.6422C38.5123 31.4695 38.3775 31.3346 38.2048 31.2893L35.5566 30.5943C35.0645 30.4651 35.0645 29.7666 35.5566 29.6374L38.2048 28.9424C38.3775 28.8971 38.5123 28.7622 38.5576 28.5895L39.2527 25.9413C39.3818 25.4492 40.0804 25.4492 40.2095 25.9413L40.9045 28.5895C40.9499 28.7622 41.0847 28.8971 41.2574 28.9424L43.9056 29.6374C44.3977 29.7666 44.3977 30.4651 43.9056 30.5943L41.2574 31.2893C41.0847 31.3346 40.9499 31.4695 40.9045 31.6422L40.2095 34.2904Z", fill: "#53DEE9" }),
        React__default['default'].createElement("path", { d: "M16.4183 7.94926C16.5088 7.60415 16.9988 7.60415 17.0893 7.94926L17.5767 9.80644C17.6085 9.92754 17.7031 10.0221 17.8242 10.0539L19.6814 10.5413C20.0265 10.6319 20.0265 11.1218 19.6814 11.2124L17.8242 11.6998C17.7031 11.7316 17.6085 11.8261 17.5767 11.9473L17.0893 13.8044C16.9988 14.1495 16.5088 14.1495 16.4183 13.8044L15.9309 11.9473C15.8991 11.8261 15.8045 11.7316 15.6834 11.6998L13.8262 11.2124C13.4811 11.1218 13.4811 10.6319 13.8262 10.5413L15.6834 10.0539C15.8045 10.0221 15.8991 9.92754 15.9309 9.80644L16.4183 7.94926Z", fill: "#53DEE9" }),
        React__default['default'].createElement("path", { d: "M10.3511 38.7118C10.2924 38.9355 9.97486 38.9355 9.91616 38.7118L9.60024 37.5081C9.57964 37.4296 9.51834 37.3683 9.43985 37.3477L8.23612 37.0318C8.01244 36.9731 8.01244 36.6555 8.23612 36.5968L9.43985 36.2809C9.51834 36.2603 9.57964 36.199 9.60024 36.1205L9.91616 34.9168C9.97486 34.6931 10.2924 34.6931 10.3511 34.9168L10.667 36.1205C10.6876 36.199 10.7489 36.2603 10.8274 36.2809L12.0311 36.5968C12.2548 36.6555 12.2548 36.9731 12.0311 37.0318L10.8274 37.3477C10.7489 37.3683 10.6876 37.4296 10.667 37.5081L10.3511 38.7118Z", fill: "#53DEE9" }),
        React__default['default'].createElement("defs", null,
            React__default['default'].createElement("linearGradient", { id: "paint0_linear", x1: "24", y1: "0", x2: "24", y2: "48", gradientUnits: "userSpaceOnUse" },
                React__default['default'].createElement("stop", { stopColor: "#54DADE" }),
                React__default['default'].createElement("stop", { offset: "0.762157", stopColor: "#24C7D6" })))));
};

var Icon$E = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M15.5 13.9996H14.71L14.43 13.7296C15.63 12.3296 16.25 10.4196 15.91 8.38965C15.44 5.60965 13.12 3.38965 10.32 3.04965C6.09001 2.52965 2.53002 6.08965 3.05002 10.3196C3.39002 13.1196 5.61002 15.4396 8.39002 15.9096C10.42 16.2496 12.33 15.6296 13.73 14.4296L14 14.7096V15.4996L18.25 19.7496C18.66 20.1596 19.33 20.1596 19.74 19.7496C20.15 19.3396 20.15 18.6696 19.74 18.2596L15.5 13.9996ZM9.50002 13.9996C7.01002 13.9996 5.00002 11.9896 5.00002 9.49965C5.00002 7.00965 7.01002 4.99965 9.50002 4.99965C11.99 4.99965 14 7.00965 14 9.49965C14 11.9896 11.99 13.9996 9.50002 13.9996Z" })));
};

var Icon$F = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 25" }, props),
        React__default['default'].createElement("path", { d: "M16 17.01V11C16 10.45 15.55 10 15 10C14.45 10 14 10.45 14 11V17.01H12.21C11.76 17.01 11.54 17.55 11.86 17.86L14.65 20.64C14.85 20.83 15.16 20.83 15.36 20.64L18.15 17.86C18.47 17.55 18.24 17.01 17.8 17.01H16ZM8.65003 3.35002L5.86003 6.14002C5.54003 6.45002 5.76003 6.99002 6.21003 6.99002H8.00003V13C8.00003 13.55 8.45003 14 9.00003 14C9.55003 14 10 13.55 10 13V6.99002H11.79C12.24 6.99002 12.46 6.45002 12.14 6.14002L9.35003 3.35002C9.16003 3.16002 8.84003 3.16002 8.65003 3.35002Z" })));
};

var Icon$G = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 25" }, props),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.86 4.86003L21.65 7.65003C21.84 7.84003 21.84 8.16003 21.64 8.35003L18.85 11.14C18.54 11.46 18 11.24 18 10.79V9.00003H4C3.45 9.00003 3 8.55003 3 8.00003C3 7.45003 3.45 7.00003 4 7.00003H18V5.21003C18 4.76003 18.54 4.54003 18.86 4.86003ZM5.14001 19.14L2.35001 16.35C2.16001 16.16 2.16001 15.84 2.36001 15.65L5.15001 12.86C5.46001 12.54 6.00001 12.76 6.00001 13.21V15H20C20.55 15 21 15.45 21 16C21 16.55 20.55 17 20 17H6.00001V18.79C6.00001 19.24 5.46001 19.46 5.14001 19.14Z" })));
};

var Icon$H = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M4.47 20.9999H19.53C21.07 20.9999 22.03 19.3299 21.26 17.9999L13.73 4.98993C12.96 3.65993 11.04 3.65993 10.27 4.98993L2.74 17.9999C1.97 19.3299 2.93 20.9999 4.47 20.9999ZM12 13.9999C11.45 13.9999 11 13.5499 11 12.9999V10.9999C11 10.4499 11.45 9.99993 12 9.99993C12.55 9.99993 13 10.4499 13 10.9999V12.9999C13 13.5499 12.55 13.9999 12 13.9999ZM13 17.9999H11V15.9999H13V17.9999Z" })));
};

var Flex = styled__default['default'].div(templateObject_1$4 || (templateObject_1$4 = __makeTemplateObject(["\n  display: flex;\n  ", "\n  ", "\n"], ["\n  display: flex;\n  ", "\n  ", "\n"])), styledSystem.flexbox, styledSystem.space);
var templateObject_1$4;

var variants$1 = {
    INFO: "info",
    DANGER: "danger",
    SUCCESS: "success",
    WARNING: "warning",
};

var getThemeColor = function (_a) {
    var theme = _a.theme, _b = _a.variant, variant = _b === void 0 ? variants$1.INFO : _b;
    switch (variant) {
        case variants$1.DANGER:
            return theme.colors.failure;
        case variants$1.WARNING:
            return theme.colors.warning;
        case variants$1.SUCCESS:
            return theme.colors.success;
        case variants$1.INFO:
        default:
            return theme.colors.secondary;
    }
};
var getIcon = function (variant) {
    if (variant === void 0) { variant = variants$1.INFO; }
    switch (variant) {
        case variants$1.DANGER:
            return Icon$2;
        case variants$1.WARNING:
            return Icon$1;
        case variants$1.SUCCESS:
            return Icon;
        case variants$1.INFO:
        default:
            return Icon$3;
    }
};
var IconLabel = styled__default['default'].div(templateObject_1$5 || (templateObject_1$5 = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: 0px 0 0 0px;\n  color: ", ";\n  padding: 12px;\n"], ["\n  background-color: ", ";\n  border-radius: 0px 0 0 0px;\n  color: ", ";\n  padding: 12px;\n"])), getThemeColor, function (_a) {
    var theme = _a.theme;
    return theme.alert.background;
});
var withHandlerSpacing = 32 + 12 + 8; // button size + inner spacing + handler position
var Details = styled__default['default'].div(templateObject_2$1 || (templateObject_2$1 = __makeTemplateObject(["\n  flex: 1;\n  padding-bottom: 12px;\n  padding-left: 12px;\n  padding-right: ", ";\n  padding-top: 12px;\n"], ["\n  flex: 1;\n  padding-bottom: 12px;\n  padding-left: 12px;\n  padding-right: ", ";\n  padding-top: 12px;\n"])), function (_a) {
    var hasHandler = _a.hasHandler;
    return (hasHandler ? withHandlerSpacing + "px" : "12px");
});
var CloseHandler = styled__default['default'].div(templateObject_3$1 || (templateObject_3$1 = __makeTemplateObject(["\n  border-radius: 0 0px 0px 0;\n  right: 8px;\n  position: absolute;\n  top: 8px;\n"], ["\n  border-radius: 0 0px 0px 0;\n  right: 8px;\n  position: absolute;\n  top: 8px;\n"])));
var StyledAlert = styled__default['default'](Flex)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  position: relative;\n  background-color: ", ";\n  border-radius: 0px;\n  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);\n"], ["\n  position: relative;\n  background-color: ", ";\n  border-radius: 0px;\n  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);\n"])), function (_a) {
    var theme = _a.theme;
    return theme.alert.background;
});
var Alert = function (_a) {
    var title = _a.title, children = _a.children, variant = _a.variant, onClick = _a.onClick;
    var Icon = getIcon(variant);
    return (React__default['default'].createElement(StyledAlert, null,
        React__default['default'].createElement(IconLabel, { variant: variant, hasDescription: !!children },
            React__default['default'].createElement(Icon, { color: "currentColor", width: "24px" })),
        React__default['default'].createElement(Details, { hasHandler: !!onClick },
            React__default['default'].createElement(Text, { bold: true }, title),
            typeof children === "string" ? React__default['default'].createElement(Text, { as: "p" }, children) : children),
        onClick && (React__default['default'].createElement(CloseHandler, null,
            React__default['default'].createElement(IconButton, { size: "sm", variant: "text", onClick: onClick },
                React__default['default'].createElement(Icon$k, { width: "24px", color: "currentColor" }))))));
};
var templateObject_1$5, templateObject_2$1, templateObject_3$1, templateObject_4;

var Separator = styled__default['default'].div(templateObject_1$6 || (templateObject_1$6 = __makeTemplateObject(["\n  align-items: center;\n  color: currentColor;\n  display: flex;\n  justify-content: center;\n  padding-left: 4px;\n  padding-right: 4px;\n\n  ", " {\n    padding-left: 8px;\n    padding-right: 8px;\n  }\n\n  ", " {\n    padding-left: 16px;\n    padding-right: 16px;\n  }\n"], ["\n  align-items: center;\n  color: currentColor;\n  display: flex;\n  justify-content: center;\n  padding-left: 4px;\n  padding-right: 4px;\n\n  ", " {\n    padding-left: 8px;\n    padding-right: 8px;\n  }\n\n  ", " {\n    padding-left: 16px;\n    padding-right: 16px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
});
var StyledBreadcrumbs = styled__default['default'].ul(templateObject_2$2 || (templateObject_2$2 = __makeTemplateObject(["\n  align-items: center;\n  color: ", ";\n  display: flex;\n  flex-wrap: wrap;\n  list-style-type: none;\n\n  ", "\n"], ["\n  align-items: center;\n  color: ", ";\n  display: flex;\n  flex-wrap: wrap;\n  list-style-type: none;\n\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.textDisabled;
}, styledSystem.space);
var insertSeparators = function (items, separator) {
    return items.reduce(function (accum, item, index) {
        if (index === 0) {
            return __spreadArrays(accum, [item]);
        }
        return __spreadArrays(accum, [
            React__default['default'].createElement(Separator, { "aria-hidden": true, key: "seperator-" + index }, separator),
            item,
        ]);
    }, []);
};
var DefaultSeparator = React__default['default'].createElement(Icon$i, { color: "currentColor", width: "24px" });
var Breadcrumbs = function (_a) {
    var _b = _a.separator, separator = _b === void 0 ? DefaultSeparator : _b, children = _a.children;
    var validItems = React.Children.toArray(children).filter(function (child) { return React.isValidElement(child); });
    var items = insertSeparators(validItems, separator);
    return (React__default['default'].createElement(StyledBreadcrumbs, null, items.map(function (item, index) { return (React__default['default'].createElement("li", { key: "child-" + index }, item)); })));
};
var templateObject_1$6, templateObject_2$2;

var getBackgroundColor = function (_a) {
    var theme = _a.theme, variant = _a.variant;
    return theme.colors[variant === variants.SUBTLE ? "input" : "tertiary"];
};
var StyledButtonMenu = styled__default['default'].div(templateObject_1$7 || (templateObject_1$7 = __makeTemplateObject(["\n  background: #001930; // ", ";\n  border-radius: 16px;\n  display: inline-flex;\n\n  & > button + button,\n  & > a + a {\n    margin-left: 2px; // To avoid focus shadow overlap\n  }\n"], ["\n  background: #001930; // ", ";\n  border-radius: 16px;\n  display: inline-flex;\n\n  & > button + button,\n  & > a + a {\n    margin-left: 2px; // To avoid focus shadow overlap\n  }\n"])), getBackgroundColor);
var templateObject_1$7;

var ButtonMenu = function (_a) {
    var _b = _a.activeIndex, activeIndex = _b === void 0 ? 0 : _b, _c = _a.size, size = _c === void 0 ? sizes.MD : _c, _d = _a.variant, variant = _d === void 0 ? variants.PRIMARY : _d, onClick = _a.onClick, children = _a.children;
    return (React__default['default'].createElement(StyledButtonMenu, { variant: variant }, React.Children.map(children, function (child, index) {
        return React.cloneElement(child, {
            isActive: activeIndex === index,
            onClick: onClick ? function () { return onClick(index); } : undefined,
            size: size,
            variant: variant,
        });
    })));
};

var InactiveButton = styled__default['default'](Button)(templateObject_1$8 || (templateObject_1$8 = __makeTemplateObject(["\n  background: transparent;\n  color: ", ";\n\n  &:hover:not(:disabled):not(:active) {\n    background: transparent;\n  }\n"], ["\n  background: transparent;\n  color: ", ";\n\n  &:hover:not(:disabled):not(:active) {\n    background: transparent;\n  }\n"])), function (_a) {
    var theme = _a.theme, colorKey = _a.colorKey;
    return theme.colors[colorKey];
});
var ButtonMenuItem = function (_a) {
    var _b = _a.isActive, isActive = _b === void 0 ? false : _b, _c = _a.size, size = _c === void 0 ? sizes.MD : _c, _d = _a.variant, variant = _d === void 0 ? variants.PRIMARY : _d, as = _a.as, props = __rest(_a, ["isActive", "size", "variant", "as"]);
    if (!isActive) {
        return (React__default['default'].createElement(InactiveButton, __assign({ forwardedAs: as, size: size, variant: "tertiary", colorKey: variant === variants.PRIMARY ? "textSubtle" : "textSubtle" }, props)));
    }
    return React__default['default'].createElement(Button, __assign({ as: as, size: size, variant: variant }, props));
};
var templateObject_1$8;

// border: ${({ theme }) => theme.card.boxShadow};
var StyledCard = styled__default['default'].div(templateObject_1$9 || (templateObject_1$9 = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: 1rem;\n  box-shadow: 0px 0px 50px rgba(243, 186, 47, 0.5);\n  color: ", ";\n  overflow: hidden;\n  position: relative;\n  border: 10px;\n  padding: 15px;\n  ", "\n"], ["\n  background-color: ", ";\n  border-radius: 1rem;\n  box-shadow: 0px 0px 50px rgba(243, 186, 47, 0.5);\n  color: ", ";\n  overflow: hidden;\n  position: relative;\n  border: 10px;\n  padding: 15px;\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.card.background;
}, function (_a) {
    var theme = _a.theme, isDisabled = _a.isDisabled;
    return theme.colors[isDisabled ? "textDisabled" : "text"];
}, styledSystem.space);
StyledCard.defaultProps = {
    isActive: false,
    isSuccess: false,
    isWarning: false,
    isDisabled: false,
};
var templateObject_1$9;

var Card = function (_a) {
    var ribbon = _a.ribbon, children = _a.children, props = __rest(_a, ["ribbon", "children"]);
    return (React__default['default'].createElement(StyledCard, __assign({}, props),
        ribbon,
        children));
};

var CardBody = styled__default['default'].div(templateObject_1$a || (templateObject_1$a = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), styledSystem.space);
CardBody.defaultProps = {
    p: "24px",
};
var templateObject_1$a;

var CardHeader = styled__default['default'].div(templateObject_1$b || (templateObject_1$b = __makeTemplateObject(["\n  background: ", ";\n\n  ", "\n"], ["\n  background: ", ";\n\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.card.cardHeaderBackground;
}, styledSystem.space);
CardHeader.defaultProps = {
    p: "24px",
};
var templateObject_1$b;

var CardFooter = styled__default['default'].div(templateObject_1$c || (templateObject_1$c = __makeTemplateObject(["\n  border-top: 1px solid ", ";\n  ", "\n"], ["\n  border-top: 1px solid ", ";\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.borderColor;
}, styledSystem.space);
CardFooter.defaultProps = {
    p: "24px",
};
var templateObject_1$c;

var StyledCardRibbon = styled__default['default'].div(templateObject_1$d || (templateObject_1$d = __makeTemplateObject(["\n  background-color: ", ";\n  color: white;\n  margin: 0;\n  padding: 0;\n  padding: 8px 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  text-align: center;\n  transform: translateX(30%) translateY(0%) rotate(45deg);\n  transform-origin: top left;\n  width: 96px;\n\n  &:before,\n  &:after {\n    background-color: ", ";\n    content: \"\";\n    height: 100%;\n    margin: 0 -1px; /* Removes tiny gap */\n    position: absolute;\n    top: 0;\n    width: 100%;\n  }\n\n  &:before {\n    right: 100%;\n  }\n\n  &:after {\n    left: 100%;\n  }\n\n  & > div {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    width: 96px;\n  }\n"], ["\n  background-color: ", ";\n  color: white;\n  margin: 0;\n  padding: 0;\n  padding: 8px 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  text-align: center;\n  transform: translateX(30%) translateY(0%) rotate(45deg);\n  transform-origin: top left;\n  width: 96px;\n\n  &:before,\n  &:after {\n    background-color: ", ";\n    content: \"\";\n    height: 100%;\n    margin: 0 -1px; /* Removes tiny gap */\n    position: absolute;\n    top: 0;\n    width: 100%;\n  }\n\n  &:before {\n    right: 100%;\n  }\n\n  &:after {\n    left: 100%;\n  }\n\n  & > div {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    width: 96px;\n  }\n"])), function (_a) {
    var _b = _a.variantColor, variantColor = _b === void 0 ? "secondary" : _b, theme = _a.theme;
    return theme.colors[variantColor];
}, function (_a) {
    var _b = _a.variantColor, variantColor = _b === void 0 ? "secondary" : _b, theme = _a.theme;
    return theme.colors[variantColor];
});
var CardRibbon = function (_a) {
    var variantColor = _a.variantColor, text = _a.text;
    return (React__default['default'].createElement(StyledCardRibbon, { variantColor: variantColor },
        React__default['default'].createElement("div", { title: text }, text)));
};
var templateObject_1$d;

var scales = {
    SM: "sm",
    MD: "md",
};

var getScale = function (_a) {
    var scale = _a.scale;
    switch (scale) {
        case scales.SM:
            return "24px";
        case scales.MD:
        default:
            return "32px";
    }
};
var Checkbox = styled__default['default'].input.attrs({ type: "checkbox" })(templateObject_1$e || (templateObject_1$e = __makeTemplateObject(["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ", ";\n  width: ", ";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border: 0;\n  border-radius: 8px;\n  background-color: ", ";\n  box-shadow: ", ";\n\n  &:after {\n    content: \"\";\n    position: absolute;\n    border-bottom: 2px solid;\n    border-left: 2px solid;\n    border-color: transparent;\n    top: 30%;\n    left: 0;\n    right: 0;\n    width: 50%;\n    height: 25%;\n    margin: auto;\n    transform: rotate(-50deg);\n    transition: border-color 0.2s ease-in-out;\n  }\n\n  &:hover:not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: ", ";\n  }\n\n  &:checked {\n    background-color: ", ";\n    &:after {\n      border-color: white;\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n"], ["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ", ";\n  width: ", ";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border: 0;\n  border-radius: 8px;\n  background-color: ", ";\n  box-shadow: ", ";\n\n  &:after {\n    content: \"\";\n    position: absolute;\n    border-bottom: 2px solid;\n    border-left: 2px solid;\n    border-color: transparent;\n    top: 30%;\n    left: 0;\n    right: 0;\n    width: 50%;\n    height: 25%;\n    margin: auto;\n    transform: rotate(-50deg);\n    transition: border-color 0.2s ease-in-out;\n  }\n\n  &:hover:not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: ", ";\n  }\n\n  &:checked {\n    background-color: ", ";\n    &:after {\n      border-color: white;\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n"])), getScale, getScale, function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.inset;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.success;
});
Checkbox.defaultProps = {
    scale: scales.MD,
};
var templateObject_1$e;

var getLeft = function (_a) {
    var position = _a.position;
    if (position === "top-right") {
        return "100%";
    }
    return "50%";
};
var getBottom = function (_a) {
    var position = _a.position;
    if (position === "top" || position === "top-right") {
        return "100%";
    }
    return "auto";
};
var DropdownContent = styled__default['default'].div(templateObject_1$f || (templateObject_1$f = __makeTemplateObject(["\n  width: max-content;\n  display: none;\n  flex-direction: column;\n  position: absolute;\n  transform: translate(-50%, 0);\n  left: ", ";\n  bottom: ", ";\n  background-color: ", ";\n  box-shadow: ", ";\n  padding: 16px;\n  max-height: 500px;\n  overflow-y: auto;\n  z-index: ", ";\n  border-radius: ", ";\n"], ["\n  width: max-content;\n  display: none;\n  flex-direction: column;\n  position: absolute;\n  transform: translate(-50%, 0);\n  left: ", ";\n  bottom: ", ";\n  background-color: ", ";\n  box-shadow: ", ";\n  padding: 16px;\n  max-height: 500px;\n  overflow-y: auto;\n  z-index: ", ";\n  border-radius: ", ";\n"])), getLeft, getBottom, function (_a) {
    var theme = _a.theme;
    return theme.nav.background;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.level1;
}, function (_a) {
    var theme = _a.theme;
    return theme.zIndices.dropdown;
}, function (_a) {
    var theme = _a.theme;
    return theme.radii.small;
});
var Container = styled__default['default'].div(templateObject_2$3 || (templateObject_2$3 = __makeTemplateObject(["\n  position: relative;\n  &:hover ", ", &:focus-within ", " {\n    display: flex;\n  }\n"], ["\n  position: relative;\n  &:hover ", ", &:focus-within ", " {\n    display: flex;\n  }\n"])), DropdownContent, DropdownContent);
var Dropdown = function (_a) {
    var target = _a.target, _b = _a.position, position = _b === void 0 ? "bottom" : _b, children = _a.children;
    return (React__default['default'].createElement(Container, null,
        target,
        React__default['default'].createElement(DropdownContent, { position: position }, children)));
};
Dropdown.defaultProps = {
    position: "bottom",
};
var templateObject_1$f, templateObject_2$3;

var tags = {
    H1: "h1",
    H2: "h2",
    H3: "h3",
    H4: "h4",
    H5: "h5",
    H6: "h6",
};
var sizes$1 = {
    MD: "md",
    LG: "lg",
    XL: "xl",
    XXL: "xxl",
};

var _a;
var style = (_a = {},
    _a[sizes$1.MD] = {
        fontSize: "20px",
    },
    _a[sizes$1.LG] = {
        fontSize: "24px",
    },
    _a[sizes$1.XL] = {
        fontSize: "40px",
    },
    _a[sizes$1.XXL] = {
        fontSize: "64px",
    },
    _a);
var Heading = styled__default['default'](Text).attrs({ bold: true })(templateObject_1$g || (templateObject_1$g = __makeTemplateObject(["\n  ", "\n  font-weight:600;\n  line-height: 1.1;\n"], ["\n  ", "\n  font-weight:600;\n  line-height: 1.1;\n"])), function (_a) {
    var size = _a.size;
    return style[size || sizes$1.MD];
});
Heading.defaultProps = {
    as: tags.H2,
};
var templateObject_1$g;

var observerOptions = {
    root: null,
    rootMargin: "200px",
    threshold: 0,
};

var Wrapper = styled__default['default'].div(templateObject_1$h || (templateObject_1$h = __makeTemplateObject(["\n  position: relative;\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: ", "px;\n  max-width: ", "px;\n  max-height: ", "px;\n  width: 100%;\n  padding-top: ", "%;\n  ", "\n"], ["\n  position: relative;\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: ", "px;\n  max-width: ", "px;\n  max-height: ", "px;\n  width: 100%;\n  padding-top: ", "%;\n  ", "\n"])), function (_a) {
    var height = _a.height, responsive = _a.responsive;
    return (responsive ? 0 : height);
}, function (_a) {
    var width = _a.width;
    return width;
}, function (_a) {
    var height = _a.height;
    return height;
}, function (_a) {
    var width = _a.width, height = _a.height, responsive = _a.responsive;
    return (responsive ? (height / width) * 100 : 0);
}, styledSystem.space);
var templateObject_1$h;

var BackgroundImage = function (_a) {
    var src = _a.src, otherProps = __rest(_a, ["src"]);
    var imgRef = React.useRef(null);
    React.useEffect(function () {
        var img = imgRef.current;
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                var isIntersecting = entry.isIntersecting;
                if (isIntersecting) {
                    img.style.backgroundImage = "url(\"" + src + "\")";
                    observer.disconnect();
                }
            });
        }, observerOptions);
        observer.observe(img);
        return function () {
            observer.disconnect();
        };
    }, [src]);
    return React__default['default'].createElement(Wrapper, __assign({ ref: imgRef }, otherProps));
};

var StyledImage = styled__default['default'].img(templateObject_1$i || (templateObject_1$i = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  max-width: 100%;\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  max-width: 100%;\n"])));
var Placeholder = styled__default['default'].div(templateObject_2$4 || (templateObject_2$4 = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n"])));
var Image = function (_a) {
    var src = _a.src, alt = _a.alt, otherProps = __rest(_a, ["src", "alt"]);
    var imgRef = React.useRef(null);
    var _b = React.useState(false), isLoaded = _b[0], setIsLoaded = _b[1];
    React.useEffect(function () {
        var img = imgRef.current;
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                var isIntersecting = entry.isIntersecting;
                if (isIntersecting) {
                    setIsLoaded(true);
                    observer.disconnect();
                }
            });
        }, observerOptions);
        observer.observe(img);
        return function () {
            observer.disconnect();
        };
    }, [src]);
    return (React__default['default'].createElement(Wrapper, __assign({ ref: imgRef }, otherProps), isLoaded ? React__default['default'].createElement(StyledImage, { src: src, alt: alt }) : React__default['default'].createElement(Placeholder, null)));
};
var templateObject_1$i, templateObject_2$4;

var scales$1 = {
    SM: "sm",
    MD: "md",
    LG: "lg",
};

/**
 * Priority: Warning --> Success
 */
var getBoxShadow = function (_a) {
    var _b = _a.isSuccess, isSuccess = _b === void 0 ? false : _b, _c = _a.isWarning, isWarning = _c === void 0 ? false : _c, theme = _a.theme;
    if (isWarning) {
        return theme.shadows.warning;
    }
    if (isSuccess) {
        return theme.shadows.success;
    }
    return theme.shadows.inset;
};
var getHeight = function (_a) {
    var _b = _a.scale, scale = _b === void 0 ? scales$1.MD : _b;
    switch (scale) {
        case scales$1.SM:
            return "32px";
        case scales$1.LG:
            return "48px";
        case scales$1.MD:
        default:
            return "40px";
    }
};
var Input = styled__default['default'].input(templateObject_1$j || (templateObject_1$j = __makeTemplateObject(["\n  background-color: ", ";\n  border: 0;\n  border-radius: 16px;\n  box-shadow: ", ";\n  color: #000000; // ", ";\n  display: block;\n  font-size: 16px;\n  height: ", ";\n  outline: 0;\n  padding: 0 16px;\n  width: 100%;\n\n  &::placeholder {\n    color: ", ";\n  }\n\n  &:disabled {\n    background-color: ", ";\n    box-shadow: none;\n    color: ", ";\n    cursor: not-allowed;\n  }\n\n  &:focus:not(:disabled) {\n    box-shadow: ", ";\n  }\n"], ["\n  background-color: ", ";\n  border: 0;\n  border-radius: 16px;\n  box-shadow: ", ";\n  color: #000000; // ", ";\n  display: block;\n  font-size: 16px;\n  height: ", ";\n  outline: 0;\n  padding: 0 16px;\n  width: 100%;\n\n  &::placeholder {\n    color: ", ";\n  }\n\n  &:disabled {\n    background-color: ", ";\n    box-shadow: none;\n    color: ", ";\n    cursor: not-allowed;\n  }\n\n  &:focus:not(:disabled) {\n    box-shadow: ", ";\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
}, getBoxShadow, function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
}, getHeight, function (_a) {
    var theme = _a.theme;
    return theme.colors.textSubtle;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.backgroundDisabled;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.textDisabled;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
});
Input.defaultProps = {
    scale: scales$1.MD,
    isSuccess: false,
    isWarning: false,
};
var templateObject_1$j;

var GridLayout = styled__default['default'].div(templateObject_1$k || (templateObject_1$k = __makeTemplateObject(["\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  grid-gap: 16px;\n  ", " {\n    grid-template-columns: repeat(8, 1fr);\n    grid-gap: 24px;\n  }\n  ", " {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 24px;\n  }\n  ", " {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 32px;\n  }\n"], ["\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  grid-gap: 16px;\n  ", " {\n    grid-template-columns: repeat(8, 1fr);\n    grid-gap: 24px;\n  }\n  ", " {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 24px;\n  }\n  ", " {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 32px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.lg;
});
var templateObject_1$k;

var GridLayout$1 = styled__default['default'](GridLayout)(templateObject_1$l || (templateObject_1$l = __makeTemplateObject(["\n  & > div {\n    grid-column: span 6;\n    ", " {\n      grid-column: span 4;\n    }\n  }\n"], ["\n  & > div {\n    grid-column: span 6;\n    ", " {\n      grid-column: span 4;\n    }\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var templateObject_1$l;

var scales$2 = {
    SM: "sm",
    MD: "md",
};

var getScale$1 = function (_a) {
    var scale = _a.scale;
    switch (scale) {
        case scales$2.SM:
            return "24px";
        case scales$2.MD:
        default:
            return "32px";
    }
};
var getCheckedScale = function (_a) {
    var scale = _a.scale;
    switch (scale) {
        case scales$2.SM:
            return "12px";
        case scales$2.MD:
        default:
            return "20px";
    }
};
var Radio = styled__default['default'].input.attrs({ type: "radio" })(templateObject_1$m || (templateObject_1$m = __makeTemplateObject(["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ", ";\n  width: ", ";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border: 0;\n  border-radius: 50%;\n  background-color: ", ";\n  box-shadow: ", ";\n\n  &:after {\n    border-radius: 50%;\n    content: \"\";\n    height: ", ";\n    left: 6px;\n    position: absolute;\n    top: 6px;\n    width: ", ";\n  }\n\n  &:hover:not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: ", ";\n  }\n\n  &:checked {\n    background-color: ", ";\n    &:after {\n      background-color: ", ";\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n  ", "\n"], ["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ", ";\n  width: ", ";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border: 0;\n  border-radius: 50%;\n  background-color: ", ";\n  box-shadow: ", ";\n\n  &:after {\n    border-radius: 50%;\n    content: \"\";\n    height: ", ";\n    left: 6px;\n    position: absolute;\n    top: 6px;\n    width: ", ";\n  }\n\n  &:hover:not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: ", ";\n  }\n\n  &:checked {\n    background-color: ", ";\n    &:after {\n      background-color: ", ";\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n  ", "\n"])), getScale$1, getScale$1, function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.inset;
}, getCheckedScale, getCheckedScale, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.success;
}, function (_a) {
    var theme = _a.theme;
    return theme.radio.handleBackground;
}, styledSystem.space);
Radio.defaultProps = {
    scale: scales$2.MD,
    m: 0,
};
var templateObject_1$m;

var getColor$1 = function (color, theme) {
    return getThemeValue("colors." + color, color)(theme);
};

var getThemeTextColor = function (_a) {
    var outline = _a.outline, _b = _a.variant, variant = _b === void 0 ? "primary" : _b, theme = _a.theme;
    return outline ? getColor$1(variant, theme) : "#ffffff";
};
var StyledTag = styled__default['default'].div(templateObject_1$n || (templateObject_1$n = __makeTemplateObject(["\n  align-items: center;\n  background-color: ", ";\n  border: 2px solid ", ";\n  border-radius: 16px;\n  color: ", ";\n  display: inline-flex;\n  font-size: 14px;\n  font-weight: 400;\n  height: 28px;\n  line-height: 1.5;\n  padding: 0 8px;\n  white-space: nowrap;\n\n  svg {\n    fill: ", ";\n  }\n"], ["\n  align-items: center;\n  background-color: ",
    ";\n  border: 2px solid ", ";\n  border-radius: 16px;\n  color: ", ";\n  display: inline-flex;\n  font-size: 14px;\n  font-weight: 400;\n  height: 28px;\n  line-height: 1.5;\n  padding: 0 8px;\n  white-space: nowrap;\n\n  svg {\n    fill: ", ";\n  }\n"])), function (_a) {
    var outline = _a.outline, theme = _a.theme, _b = _a.variant, variant = _b === void 0 ? "primary" : _b;
    return outline ? "transparent" : getColor$1(variant, theme);
}, function (_a) {
    var _b = _a.variant, variant = _b === void 0 ? "primary" : _b, theme = _a.theme;
    return getColor$1(variant, theme);
}, getThemeTextColor, getThemeTextColor);
var templateObject_1$n;

var Tag = function (_a) {
    var startIcon = _a.startIcon, endIcon = _a.endIcon, children = _a.children, props = __rest(_a, ["startIcon", "endIcon", "children"]);
    return (React__default['default'].createElement(StyledTag, __assign({}, props),
        React__default['default'].isValidElement(startIcon) &&
            React__default['default'].cloneElement(startIcon, {
                mr: "0.5rem",
            }),
        children,
        React__default['default'].isValidElement(endIcon) &&
            React__default['default'].cloneElement(endIcon, {
                ml: "0.5rem",
            })));
};
Tag.defaultProps = {
    variant: "primary",
    outline: false,
};

var StyledLink = styled__default['default'](Text)(templateObject_1$o || (templateObject_1$o = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  width: fit-content;\n  &:hover {\n    text-decoration: underline;\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  width: fit-content;\n  &:hover {\n    text-decoration: underline;\n  }\n"])));
var Link = function (_a) {
    var external = _a.external, props = __rest(_a, ["external"]);
    var internalProps = external ? getExternalLinkProps() : {};
    return React__default['default'].createElement(StyledLink, __assign({ as: "a", bold: true }, internalProps, props));
};
Link.defaultProps = {
    color: "primary",
};
var templateObject_1$o;

var LinkExternal = function (_a) {
    var children = _a.children, props = __rest(_a, ["children"]);
    return (React__default['default'].createElement(Link, __assign({ external: true }, props),
        children,
        React__default['default'].createElement(Icon$t, { color: "primary", ml: "4px" })));
};

var Bar = styled__default['default'].div(templateObject_1$p || (templateObject_1$p = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-color: ", ";\n  border-top-left-radius: 32px;\n  border-bottom-left-radius: 32px;\n  height: 16px;\n  transition: width 200ms ease;\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-color: ", ";\n  border-top-left-radius: 32px;\n  border-bottom-left-radius: 32px;\n  height: 16px;\n  transition: width 200ms ease;\n"])), function (props) { return (props.primary ? props.theme.colors.secondary : props.theme.colors.secondary + "80"); });
Bar.defaultProps = {
    primary: false,
};
var StyledProgress = styled__default['default'].div(templateObject_2$5 || (templateObject_2$5 = __makeTemplateObject(["\n  position: relative;\n  background-color: ", ";\n  border-radius: 32px;\n  box-shadow: ", ";\n  height: 16px;\n  overflow: hidden;\n"], ["\n  position: relative;\n  background-color: ", ";\n  border-radius: 32px;\n  box-shadow: ", ";\n  height: 16px;\n  overflow: hidden;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.inset;
});
var templateObject_1$p, templateObject_2$5;

var ProgressBunnyWrapper = styled__default['default'].div(templateObject_1$q || (templateObject_1$q = __makeTemplateObject(["\n  display: flex;\n  z-index: 2;\n  top: -65%;\n  position: absolute;\n  transform: translate(-50%, -50%);\n  transition: left 200ms ease-out;\n"], ["\n  display: flex;\n  z-index: 2;\n  top: -65%;\n  position: absolute;\n  transform: translate(-50%, -50%);\n  transition: left 200ms ease-out;\n"])));
var templateObject_1$q;

var stepGuard = function (step) {
    if (step < 0) {
        return 0;
    }
    if (step > 100) {
        return 100;
    }
    return step;
};
var Progress = function (_a) {
    var _b = _a.primaryStep, primaryStep = _b === void 0 ? 0 : _b, _c = _a.secondaryStep, secondaryStep = _c === void 0 ? null : _c, _d = _a.showProgressBunny, showProgressBunny = _d === void 0 ? false : _d;
    return (React__default['default'].createElement(StyledProgress, null,
        showProgressBunny && (React__default['default'].createElement(ProgressBunnyWrapper, { style: { left: stepGuard(primaryStep) + "%" } },
            React__default['default'].createElement(Icon$A, null))),
        React__default['default'].createElement(Bar, { primary: true, style: { width: stepGuard(primaryStep) + "%" } }),
        secondaryStep ? React__default['default'].createElement(Bar, { style: { width: stepGuard(secondaryStep) + "%" } }) : null));
};

var rotate$1 = styled.keyframes(templateObject_1$r || (templateObject_1$r = __makeTemplateObject(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"], ["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"])));
var SpinnerIcon = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React__default['default'].createElement("image", { width: "96", height: "96", href: "/images/egg/9.png" })));
};
var Container$1 = styled__default['default'].div(templateObject_2$6 || (templateObject_2$6 = __makeTemplateObject(["\n  position: relative;\n"], ["\n  position: relative;\n"])));
var RotatingPancakeIcon = styled__default['default'](SpinnerIcon)(templateObject_3$2 || (templateObject_3$2 = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  animation: ", " 2s linear infinite;\n  transform: translate3d(0, 0, 0);\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  animation: ", " 2s linear infinite;\n  transform: translate3d(0, 0, 0);\n"])), rotate$1);
var Spinner = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 128 : _b;
    return (React__default['default'].createElement(Container$1, null,
        React__default['default'].createElement(RotatingPancakeIcon, { width: size * 0.5 + "px" })));
};
var templateObject_1$r, templateObject_2$6, templateObject_3$2;

var animation = {
    WAVES: "waves",
    PULSE: "pulse",
};
var variant = {
    RECT: "rect",
    CIRCLE: "circle",
};

var waves = styled.keyframes(templateObject_1$s || (templateObject_1$s = __makeTemplateObject(["\n   from {\n        left: -150px;\n    }\n    to   {\n        left: 100%;\n    }\n"], ["\n   from {\n        left: -150px;\n    }\n    to   {\n        left: 100%;\n    }\n"])));
var pulse = styled.keyframes(templateObject_2$7 || (templateObject_2$7 = __makeTemplateObject(["\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.4;\n  }\n  100% {\n    opacity: 1;\n  }\n"], ["\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.4;\n  }\n  100% {\n    opacity: 1;\n  }\n"])));
var Root = styled__default['default'].div(templateObject_3$3 || (templateObject_3$3 = __makeTemplateObject(["\n  min-height: 20px;\n  display: block;\n  background-color: ", ";\n  border-radius: ", ";\n\n  ", "\n  ", "\n"], ["\n  min-height: 20px;\n  display: block;\n  background-color: ", ";\n  border-radius: ", ";\n\n  ", "\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.backgroundDisabled;
}, function (_a) {
    var variant$1 = _a.variant, theme = _a.theme;
    return (variant$1 === variant.CIRCLE ? theme.radii.circle : theme.radii.small);
}, styledSystem.layout, styledSystem.space);
var Pulse = styled__default['default'](Root)(templateObject_4$1 || (templateObject_4$1 = __makeTemplateObject(["\n  animation: ", " 2s infinite ease-out;\n  transform: translate3d(0, 0, 0);\n"], ["\n  animation: ", " 2s infinite ease-out;\n  transform: translate3d(0, 0, 0);\n"])), pulse);
var Waves = styled__default['default'](Root)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  position: relative;\n  overflow: hidden;\n  transform: translate3d(0, 0, 0);\n  &:before {\n    content: \"\";\n    position: absolute;\n    background-image: linear-gradient(90deg, transparent, rgba(243, 243, 243, 0.5), transparent);\n    top: 0;\n    left: -150px;\n    height: 100%;\n    width: 150px;\n    animation: ", " 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;\n  }\n"], ["\n  position: relative;\n  overflow: hidden;\n  transform: translate3d(0, 0, 0);\n  &:before {\n    content: \"\";\n    position: absolute;\n    background-image: linear-gradient(90deg, transparent, rgba(243, 243, 243, 0.5), transparent);\n    top: 0;\n    left: -150px;\n    height: 100%;\n    width: 150px;\n    animation: ", " 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;\n  }\n"])), waves);
var Skeleton = function (_a) {
    var _b = _a.variant, variant$1 = _b === void 0 ? variant.RECT : _b, _c = _a.animation, animation$1 = _c === void 0 ? animation.PULSE : _c, props = __rest(_a, ["variant", "animation"]);
    if (animation$1 === animation.WAVES) {
        return React__default['default'].createElement(Waves, __assign({ variant: variant$1 }, props));
    }
    return React__default['default'].createElement(Pulse, __assign({ variant: variant$1 }, props));
};
var templateObject_1$s, templateObject_2$7, templateObject_3$3, templateObject_4$1, templateObject_5;

var Handle = styled__default['default'].div(templateObject_1$t || (templateObject_1$t = __makeTemplateObject(["\n  background-color: \t#808080; ", ";\n  border-radius: 50%;\n  cursor: pointer;\n  height: 32px;\n  // left: 4px;\n  position: absolute;\n  // top: 4px;\n  transition: left 200ms ease-in;\n  width: 32px;\n  z-index: 1;\n"], ["\n  background-color: \t#808080; ", ";\n  border-radius: 50%;\n  cursor: pointer;\n  height: 32px;\n  // left: 4px;\n  position: absolute;\n  // top: 4px;\n  transition: left 200ms ease-in;\n  width: 32px;\n  z-index: 1;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.toggle.handleBackground;
});
var Input$1 = styled__default['default'].input(templateObject_2$8 || (templateObject_2$8 = __makeTemplateObject(["\n  cursor: pointer;\n  opacity: 0;\n  height: 100%;\n  position: absolute;\n  width: 100%;\n  z-index: 3;\n\n  &:checked + ", " {\n    left: calc(100% - 36px);\n  }\n\n  &:focus + ", " {\n    box-shadow: ", ";\n  }\n\n  &:hover + ", ":not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n"], ["\n  cursor: pointer;\n  opacity: 0;\n  height: 100%;\n  position: absolute;\n  width: 100%;\n  z-index: 3;\n\n  &:checked + ", " {\n    left: calc(100% - 36px);\n  }\n\n  &:focus + ", " {\n    box-shadow: ", ";\n  }\n\n  &:hover + ", ":not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n"])), Handle, Handle, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, Handle, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
});
var StyledToggle = styled__default['default'].div(templateObject_3$4 || (templateObject_3$4 = __makeTemplateObject(["\n  align-items: center;\n  background-color: ", ";\n  border-radius: 24px;\n  box-shadow: ", ";\n  cursor: pointer;\n  display: inline-flex;\n  height: 20px;\n  position: relative;\n  transition: background-color 200ms;\n  width: 65px;\n"], ["\n  align-items: center;\n  background-color: ", ";\n  border-radius: 24px;\n  box-shadow: ", ";\n  cursor: pointer;\n  display: inline-flex;\n  height: 20px;\n  position: relative;\n  transition: background-color 200ms;\n  width: 65px;\n"])), function (_a) {
    var theme = _a.theme, checked = _a.checked;
    return theme.colors[checked ? "success" : "white"];
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.inset;
});
var templateObject_1$t, templateObject_2$8, templateObject_3$4;

var Toggle = function (_a) {
    var checked = _a.checked, props = __rest(_a, ["checked"]);
    var isChecked = !!checked;
    return (React__default['default'].createElement(StyledToggle, { checked: isChecked },
        React__default['default'].createElement(Input$1, __assign({ checked: checked }, props, { type: "checkbox" })),
        React__default['default'].createElement(Handle, null)));
};

var byTextAscending = function (getTextProperty) { return function (objectA, objectB) {
    var upperA = getTextProperty(objectA).toUpperCase();
    var upperB = getTextProperty(objectB).toUpperCase();
    if (upperA < upperB) {
        return -1;
    }
    if (upperA > upperB) {
        return 1;
    }
    return 0;
}; };
var byTextDescending = function (getTextProperty) { return function (objectA, objectB) {
    var upperA = getTextProperty(objectA).toUpperCase();
    var upperB = getTextProperty(objectB).toUpperCase();
    if (upperA > upperB) {
        return -1;
    }
    if (upperA < upperB) {
        return 1;
    }
    return 0;
}; };

var sortByColumn = function (data, sortColumn, columns) {
    var isAscending = null;
    var sortedRows = __spreadArrays(data);
    columns.forEach(function (column) {
        // if the row was found
        if (sortColumn === column.name) {
            isAscending = column.sorted.asc;
            if (column.sort) {
                sortedRows = isAscending ? data.sort(column.sort) : data.sort(column.sort).reverse();
                // default to sort by string
            }
            else {
                sortedRows = isAscending
                    ? data.sort(byTextAscending(function (object) { return object.original[sortColumn]; }))
                    : data.sort(byTextDescending(function (object) { return object.original[sortColumn]; }));
            }
        }
    });
    return sortedRows;
};
var getPaginatedData = function (rows, perPage, page) {
    var start = (page - 1) * perPage;
    var end = start + perPage;
    return rows.slice(start, end);
};
var getColumnsByName = function (columns) {
    var columnsByName = {};
    columns.forEach(function (column) {
        var col = {
            name: column.name,
            label: column.label,
        };
        if (column.render) {
            col.render = column.render;
        }
        col.hidden = column.hidden;
        columnsByName[column.name] = col;
    });
    return columnsByName;
};
var createReducer = function () { return function (state, action) {
    var rows = [];
    var nextPage = 0;
    var prevPage = 0;
    var isAscending = null;
    var sortedRows = [];
    var columnCopy = [];
    var filteredRows = [];
    var selectedRowsById = {};
    var stateCopy = __assign({}, state);
    var rowIds = {};
    switch (action.type) {
        case "SET_ROWS":
            rows = __spreadArrays(action.data);
            // preserve sorting if a sort is already enabled when data changes
            if (state.sortColumn) {
                rows = sortByColumn(action.data, state.sortColumn, state.columns);
            }
            if (state.paginationEnabled === true) {
                rows = getPaginatedData(rows, state.pagination.perPage, state.pagination.page);
            }
            if (state.paginationEnabled === true) {
                rows = getPaginatedData(rows, state.pagination.perPage, state.pagination.page);
            }
            columnCopy = state.columns.map(function (column) {
                if (state.sortColumn === column.name) {
                    return __assign(__assign({}, column), { sorted: {
                            on: true,
                            asc: column.sorted.asc,
                        } });
                }
                return column;
            });
            return __assign(__assign({}, state), { rows: rows, originalRows: action.data, columns: columnCopy });
        case "NEXT_PAGE":
            nextPage = state.pagination.page + 1;
            return __assign(__assign({}, state), { rows: getPaginatedData(state.originalRows, state.pagination.perPage, nextPage), pagination: __assign(__assign({}, state.pagination), { page: nextPage, canNext: nextPage * state.pagination.perPage < state.originalRows.length, canPrev: nextPage !== 1 }) });
        case "PREV_PAGE":
            prevPage = state.pagination.page === 1 ? 1 : state.pagination.page - 1;
            return __assign(__assign({}, state), { rows: getPaginatedData(state.originalRows, state.pagination.perPage, prevPage), pagination: __assign(__assign({}, state.pagination), { page: prevPage, canNext: prevPage * state.pagination.perPage < state.originalRows.length, canPrev: prevPage !== 1 }) });
        case "TOGGLE_SORT":
            if (!(action.columnName in state.columnsByName)) {
                throw new Error("Invalid column, " + action.columnName + " not found");
            }
            // loop through all columns and set the sort parameter to off unless
            // it's the specified column (only one column at a time for )
            columnCopy = state.columns.map(function (column) {
                // if the row was found
                if (action.columnName === column.name) {
                    if (action.isAscOverride !== undefined) {
                        // force the sort order
                        isAscending = action.isAscOverride;
                    }
                    else {
                        // if it's undefined, start by setting to ascending, otherwise toggle
                        isAscending = column.sorted.asc === undefined ? true : !column.sorted.asc;
                    }
                    if (column.sort) {
                        sortedRows = isAscending ? state.rows.sort(column.sort) : state.rows.sort(column.sort).reverse();
                        // default to sort by string
                    }
                    else {
                        sortedRows = isAscending
                            ? state.rows.sort(byTextAscending(function (object) { return object.original[action.columnName]; }))
                            : state.rows.sort(byTextDescending(function (object) { return object.original[action.columnName]; }));
                    }
                    return __assign(__assign({}, column), { sorted: {
                            on: true,
                            asc: isAscending,
                        } });
                }
                // set sorting to false for all other columns
                return __assign(__assign({}, column), { sorted: {
                        on: false,
                        asc: false,
                    } });
            });
            return __assign(__assign({}, state), { columns: columnCopy, rows: sortedRows, sortColumn: action.columnName, columnsByName: getColumnsByName(columnCopy) });
        case "GLOBAL_FILTER":
            filteredRows = action.filter(state.originalRows);
            selectedRowsById = {};
            state.selectedRows.forEach(function (row) {
                var _a;
                selectedRowsById[row.id] = (_a = row.selected) !== null && _a !== void 0 ? _a : false;
            });
            return __assign(__assign({}, state), { rows: filteredRows.map(function (row) {
                    return selectedRowsById[row.id] ? __assign(__assign({}, row), { selected: selectedRowsById[row.id] }) : __assign({}, row);
                }), filterOn: true });
        case "SELECT_ROW":
            stateCopy = __assign({}, state);
            stateCopy.rows = stateCopy.rows.map(function (row) {
                var newRow = __assign({}, row);
                if (newRow.id === action.rowId) {
                    newRow.selected = !newRow.selected;
                }
                return newRow;
            });
            stateCopy.originalRows = stateCopy.originalRows.map(function (row) {
                var newRow = __assign({}, row);
                if (newRow.id === action.rowId) {
                    newRow.selected = !newRow.selected;
                }
                return newRow;
            });
            stateCopy.selectedRows = stateCopy.originalRows.filter(function (row) { return row.selected === true; });
            stateCopy.toggleAllState =
                stateCopy.selectedRows.length === stateCopy.rows.length
                    ? (stateCopy.toggleAllState = true)
                    : (stateCopy.toggleAllState = false);
            return stateCopy;
        case "SEARCH_STRING":
            stateCopy = __assign({}, state);
            stateCopy.rows = stateCopy.originalRows.filter(function (row) {
                return (row.cells.filter(function (cell) {
                    if (cell.value.includes(action.searchString)) {
                        return true;
                    }
                    return false;
                }).length > 0);
            });
            return stateCopy;
        case "TOGGLE_ALL":
            if (state.selectedRows.length < state.rows.length) {
                stateCopy.rows = stateCopy.rows.map(function (row) {
                    rowIds[row.id] = true;
                    return __assign(__assign({}, row), { selected: true });
                });
                stateCopy.toggleAllState = true;
            }
            else {
                stateCopy.rows = stateCopy.rows.map(function (row) {
                    rowIds[row.id] = false;
                    return __assign(__assign({}, row), { selected: false });
                });
                stateCopy.toggleAllState = false;
            }
            stateCopy.originalRows = stateCopy.originalRows.map(function (row) {
                return row.id in rowIds ? __assign(__assign({}, row), { selected: rowIds[row.id] }) : __assign({}, row);
            });
            stateCopy.selectedRows = stateCopy.originalRows.filter(function (row) { return row.selected; });
            return stateCopy;
        default:
            throw new Error("Invalid reducer action");
    }
}; };
var sortDataInOrder = function (data, columns) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return data.map(function (row) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        var newRow = {};
        columns.forEach(function (column) {
            if (!(column.name in row)) {
                throw new Error("Invalid row data, " + column.name + " not found");
            }
            newRow[column.name] = row[column.name];
        });
        return newRow;
    });
};
var makeRender = function (
// eslint-disable-next-line
value, 
// eslint-disable-next-line @typescript-eslint/no-explicit-any
render, row) {
    return render ? function () { return render({ row: row, value: value }); } : function () { return value; };
};
var makeHeaderRender = function (label, render) {
    return render ? function () { return render({ label: label }); } : function () { return label; };
};
var useTable = function (columns, data, options) {
    var columnsWithSorting = React.useMemo(function () {
        return columns.map(function (column) {
            return __assign(__assign({}, column), { label: column.label ? column.label : column.name, hidden: column.hidden ? column.hidden : false, sort: column.sort, sorted: {
                    on: false,
                    asc: false,
                } });
        });
    }, [columns]);
    var columnsByName = React.useMemo(function () { return getColumnsByName(columnsWithSorting); }, [columnsWithSorting]);
    var tableData = React.useMemo(function () {
        var sortedData = sortDataInOrder(data, columnsWithSorting);
        var newData = sortedData.map(function (row, idx) {
            return {
                id: idx,
                selected: false,
                hidden: false,
                original: row,
                cells: Object.entries(row)
                    .map(function (_a) {
                    var column = _a[0], value = _a[1];
                    return {
                        hidden: columnsByName[column].hidden,
                        field: column,
                        value: value,
                        render: makeRender(value, columnsByName[column].render, row),
                    };
                })
                    .filter(function (cell) { return !cell.hidden; }),
            };
        });
        return newData;
    }, [data, columnsWithSorting, columnsByName]);
    var reducer = createReducer();
    var _a = React.useReducer(reducer, {
        columns: columnsWithSorting,
        columnsByName: columnsByName,
        originalRows: tableData,
        rows: tableData,
        selectedRows: [],
        toggleAllState: false,
        filterOn: !!(options === null || options === void 0 ? void 0 : options.filter),
        sortColumn: options === null || options === void 0 ? void 0 : options.sortColumn,
        paginationEnabled: !!(options === null || options === void 0 ? void 0 : options.pagination),
        pagination: {
            page: 1,
            perPage: 10,
            canNext: true,
            canPrev: false,
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            nextPage: noop__default['default'],
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            prevPage: noop__default['default'],
        },
    }), state = _a[0], dispatch = _a[1];
    state.pagination.nextPage = React.useCallback(function () {
        dispatch({ type: "NEXT_PAGE" });
    }, [dispatch]);
    state.pagination.prevPage = React.useCallback(function () { return dispatch({ type: "PREV_PAGE" }); }, [dispatch]);
    React.useEffect(function () {
        dispatch({ type: "SET_ROWS", data: tableData });
    }, [tableData]);
    var headers = React.useMemo(function () {
        return __spreadArrays(state.columns.map(function (column) {
            var label = column.label ? column.label : column.name;
            return __assign(__assign({}, column), { render: makeHeaderRender(label, column.headerRender) });
        }));
    }, [state.columns]);
    React.useEffect(function () {
        if (options && options.filter) {
            dispatch({ type: "GLOBAL_FILTER", filter: options.filter });
        }
    });
    return {
        headers: headers.filter(function (column) { return !column.hidden; }),
        rows: state.rows,
        originalRows: state.originalRows,
        selectedRows: state.selectedRows,
        dispatch: dispatch,
        selectRow: function (rowId) { return dispatch({ type: "SELECT_ROW", rowId: rowId }); },
        toggleAll: function () { return dispatch({ type: "TOGGLE_ALL" }); },
        toggleSort: function (columnName, isAscOverride) {
            return dispatch({ type: "TOGGLE_SORT", columnName: columnName, isAscOverride: isAscOverride });
        },
        setSearchString: function (searchString) { return dispatch({ type: "SEARCH_STRING", searchString: searchString }); },
        pagination: state.pagination,
        toggleAllState: state.toggleAllState,
    };
};

var breakpointMap = {
    xs: 370,
    sm: 576,
    md: 852,
    lg: 968,
    xl: 1080,
    max: 2100,
};
var breakpoints = Object.values(breakpointMap).map(function (breakpoint) { return breakpoint + "px"; });
var mediaQueries = {
    xs: "@media screen and (min-width: " + breakpointMap.xs + "px)",
    sm: "@media screen and (min-width: " + breakpointMap.sm + "px)",
    md: "@media screen and (min-width: " + breakpointMap.md + "px)",
    lg: "@media screen and (min-width: " + breakpointMap.lg + "px)",
    xl: "@media screen and (min-width: " + breakpointMap.xl + "px)",
    nav: "@media screen and (min-width: " + breakpointMap.lg + "px)",
    max: "@media screen and (min-width: " + breakpointMap.max + "px)",
};
var shadows = {
    level1: "0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05)",
    active: "0px 0px 0px 1px #0098A1, 0px 0px 4px 8px rgba(31, 199, 212, 0.4)",
    success: "0px 0px 0px 1px #31D0AA, 0px 0px 0px 4px rgba(49, 208, 170, 0.2)",
    warning: "0px 0px 0px 1px #ED4B9E, 0px 0px 0px 4px rgba(237, 75, 158, 0.2)",
    focus: "0px 0px 0px 1px #7645D9, 0px 0px 0px 4px rgba(118, 69, 217, 0.6)",
    inset: "inset 0px 2px 2px -1px rgba(74, 74, 104, 0.1)",
};
var spacing = [0, 4, 8, 16, 24, 32, 48, 64];
var radii = {
    small: "4px",
    default: "16px",
    card: "32px",
    circle: "50%",
};
var zIndices = {
    dropdown: 10,
    modal: 100,
};
var base = {
    siteWidth: 1200,
    breakpoints: breakpoints,
    mediaQueries: mediaQueries,
    spacing: spacing,
    shadows: shadows,
    radii: radii,
    zIndices: zIndices,
};

/**
 * Can't use the media queries from "base.mediaQueries" because of how matchMedia works
 * In order for the listener to trigger we need have have the media query with a range, e.g.
 * (min-width: 370px) and (max-width: 576px)
 * @see https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList
 */
var mediaQueries$1 = (function () {
    var prevMinWidth = 0;
    return Object.keys(breakpointMap).reduce(function (accum, size, index) {
        var _a, _b;
        // Largest size is just a min-width of second highest max-width
        if (index === Object.keys(breakpointMap).length - 1) {
            return __assign(__assign({}, accum), (_a = {}, _a[size] = "(min-width: " + prevMinWidth + "px)", _a));
        }
        var minWidth = prevMinWidth;
        var breakpoint = breakpointMap[size];
        // Min width for next iteration
        prevMinWidth = breakpoint + 1;
        return __assign(__assign({}, accum), (_b = {}, _b[size] = "(min-width: " + minWidth + "px) and (max-width: " + breakpoint + "px)", _b));
    }, {});
})();
var getKey = function (size) { return "is" + size.charAt(0).toUpperCase() + size.slice(1); };
var useMatchBreakpoints = function () {
    var _a = React.useState(function () {
        return Object.keys(mediaQueries$1).reduce(function (accum, size) {
            var _a;
            var key = getKey(size);
            var mql = window.matchMedia(mediaQueries$1[size]);
            return __assign(__assign({}, accum), (_a = {}, _a[key] = mql.matches, _a));
        }, {});
    }), state = _a[0], setState = _a[1];
    React.useEffect(function () {
        // Create listeners for each media query returning a function to unsubscribe
        var handlers = Object.keys(mediaQueries$1).map(function (size) {
            var mql = window.matchMedia(mediaQueries$1[size]);
            var handler = function (matchMediaQuery) {
                var key = getKey(size);
                setState(function (prevState) {
                    var _a;
                    return (__assign(__assign({}, prevState), (_a = {}, _a[key] = matchMediaQuery.matches, _a)));
                });
            };
            // Safari < 14 fix
            if (mql.addEventListener) {
                mql.addEventListener("change", handler);
            }
            return function () {
                // Safari < 14 fix
                if (mql.removeEventListener) {
                    mql.removeEventListener("change", handler);
                }
            };
        });
        return function () {
            handlers.forEach(function (unsubscribe) {
                unsubscribe();
            });
        };
    }, [setState]);
    return state;
};

var defaultParticleOptions = {
    size: 30,
    distance: 500,
};
var createParticle = function (x, y, imgSrc, options) {
    if (options === void 0) { options = {}; }
    var _a = __assign(__assign({}, defaultParticleOptions), options), size = _a.size, distance = _a.distance;
    var particle = document.createElement("particle");
    document.body.appendChild(particle);
    var width = Math.floor(Math.random() * size + 8);
    var height = width;
    var destinationX = (Math.random() - 0.5) * distance;
    var destinationY = (Math.random() - 0.5) * distance;
    var rotation = Math.random() * 520;
    var delay = Math.random() * 200;
    particle.style.backgroundRepeat = "no-repeat";
    particle.style.backgroundSize = "contain";
    particle.style.backgroundImage = "url(" + imgSrc + ")";
    particle.style.left = "0";
    particle.style.top = "0";
    particle.style.opacity = "0";
    particle.style.pointerEvents = "none";
    particle.style.position = "fixed";
    particle.style.width = width + "px";
    particle.style.height = height + "px";
    var animation = particle.animate([
        {
            transform: "translate(-50%, -50%) translate(" + x + "px, " + y + "px) rotate(0deg)",
            opacity: 1,
        },
        {
            transform: "translate(-50%, -50%) translate(" + (x + destinationX) + "px, " + (y + destinationY) + "px) rotate(" + rotation + "deg)",
            opacity: 0,
        },
    ], {
        duration: Math.random() * 1000 + 5000,
        easing: "cubic-bezier(0, .9, .57, 1)",
        delay: delay,
    });
    animation.onfinish = function () {
        particle.remove();
    };
};
var defaultOptions = {
    numberOfParticles: 30,
    debounceDuration: 200,
    particleOptions: {},
};
/**
 * @see https://css-tricks.com/playing-with-particles-using-the-web-animations-api/
 */
var useParticleBurst = function (options) {
    var _a = __assign(__assign({}, defaultOptions), options), selector = _a.selector, numberOfParticles = _a.numberOfParticles, debounceDuration = _a.debounceDuration, imgSrc = _a.imgSrc, disableWhen = _a.disableWhen, particleOptions = _a.particleOptions;
    var makeListener = React.useCallback(function () {
        return debounce__default['default'](function (event) {
            var isDisabled = disableWhen && disableWhen();
            if (!isDisabled) {
                var node = event.currentTarget;
                if (event.clientX === 0 && event.clientY === 0) {
                    var _a = node.getBoundingClientRect(), left = _a.left, width = _a.width, top_1 = _a.top, height = _a.height;
                    var x = left + width / 2;
                    var y = top_1 + height / 2;
                    for (var i = 0; i < numberOfParticles; i += 1) {
                        createParticle(x, y, imgSrc, particleOptions);
                    }
                }
                else {
                    for (var i = 0; i < numberOfParticles; i += 1) {
                        createParticle(event.clientX, event.clientY + window.scrollY, imgSrc, particleOptions);
                    }
                }
            }
        }, debounceDuration, { leading: true });
    }, [debounceDuration, numberOfParticles, imgSrc, disableWhen, particleOptions]);
    var listener = makeListener();
    var initialize = React.useCallback(function () {
        if (selector) {
            document.querySelectorAll(selector).forEach(function (element) {
                element.addEventListener("click", listener);
            });
        }
        else {
            document.addEventListener("click", listener);
        }
    }, [selector, listener]);
    var teardown = React.useCallback(function () {
        if (selector) {
            document.querySelectorAll(selector).forEach(function (element) {
                element.removeEventListener("click", listener);
            });
        }
        else {
            document.removeEventListener("click", listener);
        }
    }, [selector, listener]);
    React.useEffect(function () {
        initialize();
        return function () { return teardown(); };
    }, [initialize, teardown]);
    return { initialize: initialize, teardown: teardown };
};

var StyledModal = styled__default['default'].div(templateObject_1$u || (templateObject_1$u = __makeTemplateObject(["\n  background-color: ", ";\n  background-image: url(\"images/bgBig.png\");\n  background-repeat: no-repeat;\n  padding: 28px;\n  background-position: center;\n  background-size: 110%;\n  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);\n  // border: 1px solid ", ";\n  border-radius: 1rem;\n  width: 100%;\n  z-index: ", ";\n  overflow-y: auto;\n  ", " {\n    width: auto;\n    min-width: 360px;\n    max-width: 100%;\n  }\n"], ["\n  background-color: ", ";\n  background-image: url(\"images/bgBig.png\");\n  background-repeat: no-repeat;\n  padding: 28px;\n  background-position: center;\n  background-size: 110%;\n  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);\n  // border: 1px solid ", ";\n  border-radius: 1rem;\n  width: 100%;\n  z-index: ", ";\n  overflow-y: auto;\n  ", " {\n    width: auto;\n    min-width: 360px;\n    max-width: 100%;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.modal.background;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.borderColor;
}, function (_a) {
    var theme = _a.theme;
    return theme.zIndices.modal;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.xs;
});
var ModalHeader = styled__default['default'].div(templateObject_2$9 || (templateObject_2$9 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  border-bottom: 1px solid #e9eaeb;\n  align-items: center;\n  padding: 12px 24px;\n"], ["\n  display: flex;\n  align-items: center;\n  border-bottom: 1px solid #e9eaeb;\n  align-items: center;\n  padding: 12px 24px;\n"])));
var ModalTitle = styled__default['default'](Flex)(templateObject_3$5 || (templateObject_3$5 = __makeTemplateObject(["\n  align-items: center;\n  flex: 1;\n"], ["\n  align-items: center;\n  flex: 1;\n"])));
var Modal = function (_a) {
    var title = _a.title, onDismiss = _a.onDismiss, onBack = _a.onBack, children = _a.children, _b = _a.hideCloseButton, hideCloseButton = _b === void 0 ? false : _b, _c = _a.bodyPadding, bodyPadding = _c === void 0 ? "24px" : _c;
    return (React__default['default'].createElement(StyledModal, null,
        React__default['default'].createElement(ModalHeader, null,
            React__default['default'].createElement(ModalTitle, null,
                onBack && (React__default['default'].createElement(IconButton, { variant: "text", onClick: onBack, "area-label": "go back", mr: "8px" },
                    React__default['default'].createElement(Icon$5, { color: "primary" }))),
                React__default['default'].createElement(Heading, null, title)),
            !hideCloseButton && (React__default['default'].createElement(IconButton, { variant: "text", onClick: onDismiss, "aria-label": "Close the dialog" },
                React__default['default'].createElement(Icon$k, { color: "primary" })))),
        React__default['default'].createElement(Flex, { flexDirection: "column", p: bodyPadding }, children)));
};
var templateObject_1$u, templateObject_2$9, templateObject_3$5;

var Overlay = styled__default['default'].div.attrs({ role: "presentation" })(templateObject_1$v || (templateObject_1$v = __makeTemplateObject(["\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  background-color: #452a7a;\n  transition: opacity 0.4s;\n  opacity: ", ";\n  z-index: ", ";\n  pointer-events: ", ";\n"], ["\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  background-color: #452a7a;\n  transition: opacity 0.4s;\n  opacity: ", ";\n  z-index: ", ";\n  pointer-events: ", ";\n"])), function (_a) {
    var show = _a.show;
    return (show ? 0.6 : 0);
}, function (_a) {
    var zIndex = _a.zIndex;
    return zIndex;
}, function (_a) {
    var show = _a.show;
    return (show ? "initial" : "none");
});
Overlay.defaultProps = {
    show: false,
    zIndex: 10,
};
var templateObject_1$v;

var ModalWrapper = styled__default['default'].div(templateObject_1$w || (templateObject_1$w = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: ", ";\n"], ["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.zIndices.modal - 1;
});
var Context = React.createContext({
    onPresent: function () { return null; },
    onDismiss: function () { return null; },
    setCloseOnOverlayClick: function () { return true; },
});
var ModalProvider = function (_a) {
    var children = _a.children;
    var _b = React.useState(false), isOpen = _b[0], setIsOpen = _b[1];
    var _c = React.useState(), modalNode = _c[0], setModalNode = _c[1];
    var _d = React.useState(true), closeOnOverlayClick = _d[0], setCloseOnOverlayClick = _d[1];
    var handlePresent = function (node) {
        setModalNode(node);
        setIsOpen(true);
    };
    var handleDismiss = function () {
        setModalNode(undefined);
        setIsOpen(false);
    };
    var handleOverlayDismiss = function () {
        if (closeOnOverlayClick) {
            handleDismiss();
        }
    };
    return (React__default['default'].createElement(Context.Provider, { value: {
            onPresent: handlePresent,
            onDismiss: handleDismiss,
            setCloseOnOverlayClick: setCloseOnOverlayClick,
        } },
        isOpen && (React__default['default'].createElement(ModalWrapper, null,
            React__default['default'].createElement(Overlay, { show: true, onClick: handleOverlayDismiss }),
            React__default['default'].isValidElement(modalNode) &&
                React__default['default'].cloneElement(modalNode, {
                    onDismiss: handleDismiss,
                }))),
        children));
};
var templateObject_1$w;

var useModal = function (modal, closeOnOverlayClick) {
    if (closeOnOverlayClick === void 0) { closeOnOverlayClick = true; }
    var _a = React.useContext(Context), onPresent = _a.onPresent, onDismiss = _a.onDismiss, setCloseOnOverlayClick = _a.setCloseOnOverlayClick;
    var onPresentCallback = React.useCallback(function () {
        onPresent(modal);
    }, [modal, onPresent]);
    React.useEffect(function () {
        setCloseOnOverlayClick(closeOnOverlayClick);
    }, [closeOnOverlayClick, setCloseOnOverlayClick]);
    return [onPresentCallback, onDismiss];
};

var Icon$I = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("svg", { width: "23", height: "18", viewBox: "0 0 23 18", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
            React__default['default'].createElement("path", { d: "M7.55007 15.636L7.55027 15.6359C8.80729 14.8519 9.49958 13.1835 9.16698 11.7389C8.80117 10.155 7.65963 9.07486 6.06712 8.79954L7.55007 15.636ZM7.55007 15.636C5.90462 16.663 3.93834 16.3832 2.65559 14.9352C2.1688 14.3843 1.88498 13.7308 1.78255 12.9765C1.77459 12.9148 1.7608 12.8448 1.75 12.7938V12.2142M7.55007 15.636L1.75 12.2142M1.75 12.2142C1.7825 12.0761 1.80893 11.9527 1.83341 11.8383C1.8878 11.5843 1.93258 11.3752 2.01297 11.1494L1.75 12.2142ZM2.01301 11.1493C2.58648 9.53977 4.37118 8.50681 6.06698 8.79952L2.01301 11.1493Z", stroke: "#404D60", "stroke-width": "1.5" }),
            React__default['default'].createElement("path", { d: "M21.0943 14.7944L21.0942 14.7945C20.7569 15.7306 19.7554 16.3474 18.801 16.2373L18.801 16.2372C17.7028 16.1107 16.8983 15.3148 16.7692 14.2991L16.7691 14.2984C16.6101 13.0571 17.474 11.9323 18.6515 11.7727L18.6517 11.7727C19.9259 11.5998 21.0357 12.432 21.2251 13.6761C21.2319 13.723 21.2413 13.7645 21.2496 13.7964C21.2489 13.933 21.2488 14.0686 21.2487 14.2028C21.2295 14.2806 21.2139 14.3483 21.1997 14.4096C21.1657 14.5568 21.1401 14.6673 21.0943 14.7944Z", stroke: "#404D60", "stroke-width": "1.5" }),
            React__default['default'].createElement("mask", { id: "path-3-inside-1_1_1540", fill: "white" },
                React__default['default'].createElement("path", { d: "M21.6429 8.97002C21.1154 8.78653 20.6082 8.54466 20.0746 8.43415C18.0641 8.01922 16.3519 8.61347 14.9561 10.1523C14.739 10.392 14.5706 10.6798 14.3718 10.9383C14.3272 10.9967 14.2481 11.0634 14.1831 11.0634C13.4589 11.0718 12.7326 11.0697 12.0104 11.0697C11.3977 8.57802 9.98566 6.79736 7.62419 5.93831C5.26881 5.08135 3.08993 5.55674 1.09567 7.10179C0.817731 6.75566 0.537763 6.40954 0.251709 6.05299C0.807587 5.563 1.41013 5.17934 2.06136 4.88743C4.27675 3.89911 6.50026 3.88868 8.71769 4.88743C8.99157 5.01045 9.26139 5.15015 9.5089 5.31904C9.74424 5.4796 9.98363 5.53589 10.2636 5.53381C13.1383 5.52547 16.0111 5.52755 18.8858 5.52964C20.2187 5.53172 21.2797 6.38452 21.58 7.68978C21.6084 7.81697 21.6348 7.94624 21.6388 8.07552C21.649 8.38411 21.6429 8.69062 21.6429 8.97002Z" })),
            React__default['default'].createElement("path", { d: "M21.6429 8.97002L21.15 10.3867L23.1429 11.08V8.97002H21.6429ZM20.0746 8.43415L20.3789 6.96532L20.3778 6.96511L20.0746 8.43415ZM14.9561 10.1523L13.8451 9.14448L13.8441 9.14556L14.9561 10.1523ZM14.3718 10.9383L13.1827 10.024L13.1802 10.0273L14.3718 10.9383ZM14.1831 11.0634V9.56344H14.1745L14.1659 9.56353L14.1831 11.0634ZM12.0104 11.0697L10.5537 11.4279L10.8345 12.5697H12.0104V11.0697ZM7.62419 5.93831L7.11133 7.34791L7.1114 7.34794L7.62419 5.93831ZM1.09567 7.10179L-0.0739165 8.04097L0.849048 9.19036L2.01434 8.28756L1.09567 7.10179ZM0.251709 6.05299L-0.740169 4.92775L-1.81443 5.87468L-0.918288 6.99166L0.251709 6.05299ZM2.06136 4.88743L1.45023 3.51757L1.44781 3.51865L2.06136 4.88743ZM8.71769 4.88743L8.10167 6.25511L8.10309 6.25574L8.71769 4.88743ZM9.5089 5.31904L8.66343 6.55807L8.66356 6.55815L9.5089 5.31904ZM10.2636 5.53381L10.2592 4.0338L10.2524 4.03385L10.2636 5.53381ZM18.8858 5.52964L18.8881 4.02964L18.8869 4.02964L18.8858 5.52964ZM21.58 7.68978L23.0439 7.36286L23.0418 7.35351L21.58 7.68978ZM21.6388 8.07552L20.1395 8.12257L20.1396 8.1248L21.6388 8.07552ZM22.1357 7.55329C21.8867 7.46667 21.7136 7.39234 21.3874 7.2701C21.1051 7.1643 20.7595 7.04417 20.3789 6.96533L19.7704 9.90298C19.9233 9.93464 20.0982 9.9907 20.3347 10.0793C20.5273 10.1515 20.8716 10.2899 21.15 10.3867L22.1357 7.55329ZM20.3778 6.96511C17.8227 6.43777 15.5801 7.23172 13.8451 9.14448L16.0671 11.16C17.1237 9.99521 18.3056 9.60067 19.7715 9.90319L20.3778 6.96511ZM13.8441 9.14556C13.6699 9.33801 13.5296 9.53353 13.4288 9.67729C13.312 9.8439 13.2552 9.92966 13.1827 10.024L15.5609 11.8527C15.6872 11.6884 15.814 11.5011 15.8854 11.3992C15.9728 11.2745 16.0253 11.2063 16.0681 11.159L13.8441 9.14556ZM13.1802 10.0273C13.239 9.9504 13.3127 9.87416 13.4116 9.80335C13.4636 9.76606 13.546 9.71354 13.658 9.66698C13.7664 9.62193 13.9484 9.56344 14.1831 9.56344V12.5634C14.6808 12.5634 15.0305 12.3339 15.1586 12.2422C15.3244 12.1234 15.46 11.9846 15.5635 11.8493L13.1802 10.0273ZM14.1659 9.56353C13.4528 9.57175 12.7387 9.56969 12.0104 9.56969V12.5697C12.7265 12.5697 13.465 12.5718 14.2004 12.5633L14.1659 9.56353ZM13.467 10.7115C12.7535 7.80996 11.0379 5.58399 8.13698 4.52869L7.1114 7.34794C8.9334 8.01074 10.0419 9.34608 10.5537 11.4279L13.467 10.7115ZM8.13705 4.52871C5.23318 3.47218 2.52096 4.10005 0.177002 5.91602L2.01434 8.28756C3.6589 7.01344 5.30444 6.69051 7.11133 7.34791L8.13705 4.52871ZM2.26526 6.1626C1.97507 5.80123 1.71531 5.48028 1.42171 5.11432L-0.918288 6.99166C-0.639783 7.3388 -0.339611 7.7101 -0.0739165 8.04097L2.26526 6.1626ZM1.24359 7.17824C1.68475 6.78936 2.15939 6.48729 2.67491 6.25621L1.44781 3.51865C0.66086 3.8714 -0.0695754 4.33663 -0.740169 4.92775L1.24359 7.17824ZM2.67248 6.2573C4.50317 5.44059 6.28017 5.43468 8.10167 6.25511L9.3337 3.51976C6.72036 2.34268 4.05033 2.35762 1.45023 3.51757L2.67248 6.2573ZM8.10309 6.25574C8.3295 6.35744 8.5138 6.45597 8.66343 6.55807L10.3544 4.08002C10.009 3.84434 9.65364 3.66347 9.33229 3.51913L8.10309 6.25574ZM8.66356 6.55815C9.19971 6.92393 9.75394 7.03764 10.2748 7.03377L10.2524 4.03385C10.2165 4.03412 10.2278 4.03033 10.2641 4.04025C10.2819 4.04509 10.3006 4.05183 10.3185 4.06017C10.3363 4.06844 10.3484 4.07597 10.3542 4.07994L8.66356 6.55815ZM10.2679 7.0338C13.1395 7.02547 16.0095 7.02755 18.8847 7.02964L18.8869 4.02964C16.0126 4.02755 13.1372 4.02546 10.2592 4.03381L10.2679 7.0338ZM18.8834 7.02964C19.5106 7.03062 19.9726 7.39346 20.1182 8.02605L23.0418 7.35351C22.5868 5.37558 20.9268 4.03283 18.8881 4.02964L18.8834 7.02964ZM20.116 8.01669C20.1289 8.0743 20.1351 8.10514 20.1386 8.12671C20.142 8.14673 20.1402 8.1426 20.1395 8.12257L23.1381 8.02846C23.1291 7.74356 23.0726 7.49139 23.0439 7.36287L20.116 8.01669ZM20.1396 8.1248C20.1487 8.40072 20.1429 8.65082 20.1429 8.97002H23.1429C23.1429 8.73041 23.1492 8.3675 23.138 8.02624L20.1396 8.1248Z", fill: "#808191", mask: "url(#path-3-inside-1_1_1540)" }),
            React__default['default'].createElement("mask", { id: "path-5-inside-2_1_1540", fill: "white" },
                React__default['default'].createElement("path", { d: "M18.2727 0C18.2727 0.460802 18.2727 0.904924 18.2727 1.34905C17.731 1.52002 17.6073 1.69308 17.6073 2.27691C17.6073 2.88992 17.6073 3.50502 17.6073 4.13054C17.1589 4.13054 16.7268 4.13054 16.2906 4.13054C16.2845 4.12429 16.2663 4.11178 16.2663 4.10135C16.2703 3.3403 16.2298 2.57507 16.2947 1.81819C16.388 0.763139 17.2157 0.0312762 18.2727 0Z" })),
            React__default['default'].createElement("path", { d: "M18.2727 0H19.7727V-1.54504L18.2283 -1.49934L18.2727 0ZM18.2727 1.34905L18.7242 2.77948L19.7727 2.44853V1.34905H18.2727ZM17.6073 4.13054V5.63054H19.1073V4.13054H17.6073ZM16.2906 4.13054L15.2155 5.17658L15.6572 5.63054H16.2906V4.13054ZM16.2663 4.10135L14.7663 4.09335V4.10135H16.2663ZM16.2947 1.81819L14.8005 1.68602L14.8002 1.69L16.2947 1.81819ZM16.7727 0C16.7727 0.000900005 16.7727 0.00179995 16.7727 0.00269982C16.7727 0.0035997 16.7727 0.00449952 16.7727 0.00539927C16.7727 0.00629902 16.7727 0.0071987 16.7727 0.00809833C16.7727 0.00899795 16.7727 0.00989751 16.7727 0.010797C16.7727 0.0116965 16.7727 0.0125959 16.7727 0.0134953C16.7727 0.0143947 16.7727 0.015294 16.7727 0.0161932C16.7727 0.0170925 16.7727 0.0179917 16.7727 0.0188908C16.7727 0.0197899 16.7727 0.020689 16.7727 0.021588C16.7727 0.022487 16.7727 0.0233859 16.7727 0.0242848C16.7727 0.0251836 16.7727 0.0260824 16.7727 0.0269812C16.7727 0.0278799 16.7727 0.0287786 16.7727 0.0296772C16.7727 0.0305758 16.7727 0.0314744 16.7727 0.0323729C16.7727 0.0332714 16.7727 0.0341698 16.7727 0.0350682C16.7727 0.0359666 16.7727 0.0368649 16.7727 0.0377631C16.7727 0.0386614 16.7727 0.0395596 16.7727 0.0404577C16.7727 0.0413558 16.7727 0.0422539 16.7727 0.0431519C16.7727 0.0440499 16.7727 0.0449478 16.7727 0.0458457C16.7727 0.0467436 16.7727 0.0476414 16.7727 0.0485391C16.7727 0.0494369 16.7727 0.0503346 16.7727 0.0512322C16.7727 0.0521298 16.7727 0.0530274 16.7727 0.0539249C16.7727 0.0548224 16.7727 0.0557199 16.7727 0.0566173C16.7727 0.0575147 16.7727 0.058412 16.7727 0.0593092C16.7727 0.0602065 16.7727 0.0611037 16.7727 0.0620009C16.7727 0.062898 16.7727 0.0637951 16.7727 0.0646921C16.7727 0.0655891 16.7727 0.0664861 16.7727 0.067383C16.7727 0.0682799 16.7727 0.0691767 16.7727 0.0700735C16.7727 0.0709703 16.7727 0.071867 16.7727 0.0727637C16.7727 0.0736603 16.7727 0.0745569 16.7727 0.0754535C16.7727 0.07635 16.7727 0.0772465 16.7727 0.0781429C16.7727 0.0790393 16.7727 0.0799357 16.7727 0.080832C16.7727 0.0817283 16.7727 0.0826245 16.7727 0.0835207C16.7727 0.0844169 16.7727 0.085313 16.7727 0.0862091C16.7727 0.0871051 16.7727 0.0880011 16.7727 0.088897C16.7727 0.089793 16.7727 0.0906889 16.7727 0.0915847C16.7727 0.0924805 16.7727 0.0933763 16.7727 0.094272C16.7727 0.0951677 16.7727 0.0960633 16.7727 0.0969589C16.7727 0.0978545 16.7727 0.09875 16.7727 0.0996455C16.7727 0.100541 16.7727 0.101436 16.7727 0.102332C16.7727 0.103227 16.7727 0.104122 16.7727 0.105018C16.7727 0.105913 16.7727 0.106808 16.7727 0.107703C16.7727 0.108598 16.7727 0.109493 16.7727 0.110388C16.7727 0.111283 16.7727 0.112178 16.7727 0.113073C16.7727 0.113968 16.7727 0.114863 16.7727 0.115758C16.7727 0.116652 16.7727 0.117547 16.7727 0.118442C16.7727 0.119336 16.7727 0.120231 16.7727 0.121125C16.7727 0.12202 16.7727 0.122914 16.7727 0.123809C16.7727 0.124703 16.7727 0.125598 16.7727 0.126492C16.7727 0.127386 16.7727 0.12828 16.7727 0.129175C16.7727 0.130069 16.7727 0.130963 16.7727 0.131857C16.7727 0.132751 16.7727 0.133645 16.7727 0.134539C16.7727 0.135433 16.7727 0.136327 16.7727 0.137221C16.7727 0.138115 16.7727 0.139008 16.7727 0.139902C16.7727 0.140796 16.7727 0.141689 16.7727 0.142583C16.7727 0.143477 16.7727 0.14437 16.7727 0.145264C16.7727 0.146157 16.7727 0.147051 16.7727 0.147944C16.7727 0.148837 16.7727 0.149731 16.7727 0.150624C16.7727 0.151517 16.7727 0.15241 16.7727 0.153304C16.7727 0.154197 16.7727 0.15509 16.7727 0.155983C16.7727 0.156876 16.7727 0.157769 16.7727 0.158662C16.7727 0.159555 16.7727 0.160448 16.7727 0.16134C16.7727 0.162233 16.7727 0.163126 16.7727 0.164019C16.7727 0.164911 16.7727 0.165804 16.7727 0.166697C16.7727 0.167589 16.7727 0.168482 16.7727 0.169374C16.7727 0.170267 16.7727 0.171159 16.7727 0.172052C16.7727 0.172944 16.7727 0.173836 16.7727 0.174729C16.7727 0.175621 16.7727 0.176513 16.7727 0.177405C16.7727 0.178297 16.7727 0.179189 16.7727 0.180081C16.7727 0.180973 16.7727 0.181865 16.7727 0.182757C16.7727 0.183649 16.7727 0.184541 16.7727 0.185433C16.7727 0.186325 16.7727 0.187217 16.7727 0.188108C16.7727 0.189 16.7727 0.189892 16.7727 0.190783C16.7727 0.191675 16.7727 0.192566 16.7727 0.193458C16.7727 0.194349 16.7727 0.195241 16.7727 0.196132C16.7727 0.197023 16.7727 0.197915 16.7727 0.198806C16.7727 0.199697 16.7727 0.200589 16.7727 0.20148C16.7727 0.202371 16.7727 0.203262 16.7727 0.204153C16.7727 0.205044 16.7727 0.205935 16.7727 0.206826C16.7727 0.207717 16.7727 0.208608 16.7727 0.209499C16.7727 0.21039 16.7727 0.21128 16.7727 0.212171C16.7727 0.213062 16.7727 0.213952 16.7727 0.214843C16.7727 0.215734 16.7727 0.216624 16.7727 0.217515C16.7727 0.218405 16.7727 0.219296 16.7727 0.220186C16.7727 0.221077 16.7727 0.221967 16.7727 0.222857C16.7727 0.223747 16.7727 0.224638 16.7727 0.225528C16.7727 0.226418 16.7727 0.227308 16.7727 0.228198C16.7727 0.229088 16.7727 0.229978 16.7727 0.230868C16.7727 0.231758 16.7727 0.232648 16.7727 0.233538C16.7727 0.234428 16.7727 0.235318 16.7727 0.236208C16.7727 0.237097 16.7727 0.237987 16.7727 0.238877C16.7727 0.239766 16.7727 0.240656 16.7727 0.241546C16.7727 0.242435 16.7727 0.243325 16.7727 0.244214C16.7727 0.245104 16.7727 0.245993 16.7727 0.246882C16.7727 0.247772 16.7727 0.248661 16.7727 0.24955C16.7727 0.250439 16.7727 0.251329 16.7727 0.252218C16.7727 0.253107 16.7727 0.253996 16.7727 0.254885C16.7727 0.255774 16.7727 0.256663 16.7727 0.257552C16.7727 0.258441 16.7727 0.25933 16.7727 0.260219C16.7727 0.261108 16.7727 0.261996 16.7727 0.262885C16.7727 0.263774 16.7727 0.264662 16.7727 0.265551C16.7727 0.26644 16.7727 0.267328 16.7727 0.268217C16.7727 0.269105 16.7727 0.269994 16.7727 0.270882C16.7727 0.271771 16.7727 0.272659 16.7727 0.273547C16.7727 0.274436 16.7727 0.275324 16.7727 0.276212C16.7727 0.2771 16.7727 0.277988 16.7727 0.278877C16.7727 0.279765 16.7727 0.280653 16.7727 0.281541C16.7727 0.282429 16.7727 0.283317 16.7727 0.284205C16.7727 0.285093 16.7727 0.28598 16.7727 0.286868C16.7727 0.287756 16.7727 0.288644 16.7727 0.289531C16.7727 0.290419 16.7727 0.291307 16.7727 0.292194C16.7727 0.293082 16.7727 0.29397 16.7727 0.294857C16.7727 0.295745 16.7727 0.296632 16.7727 0.29752C16.7727 0.298407 16.7727 0.299294 16.7727 0.300182C16.7727 0.301069 16.7727 0.301956 16.7727 0.302843C16.7727 0.303731 16.7727 0.304618 16.7727 0.305505C16.7727 0.306392 16.7727 0.307279 16.7727 0.308166C16.7727 0.309053 16.7727 0.30994 16.7727 0.310827C16.7727 0.311714 16.7727 0.312601 16.7727 0.313488C16.7727 0.314374 16.7727 0.315261 16.7727 0.316148C16.7727 0.317035 16.7727 0.317921 16.7727 0.318808C16.7727 0.319694 16.7727 0.320581 16.7727 0.321468C16.7727 0.322354 16.7727 0.323241 16.7727 0.324127C16.7727 0.325013 16.7727 0.3259 16.7727 0.326786C16.7727 0.327672 16.7727 0.328559 16.7727 0.329445C16.7727 0.330331 16.7727 0.331217 16.7727 0.332104C16.7727 0.33299 16.7727 0.333876 16.7727 0.334762C16.7727 0.335648 16.7727 0.336534 16.7727 0.33742C16.7727 0.338306 16.7727 0.339192 16.7727 0.340077C16.7727 0.340963 16.7727 0.341849 16.7727 0.342735C16.7727 0.343621 16.7727 0.344506 16.7727 0.345392C16.7727 0.346278 16.7727 0.347163 16.7727 0.348049C16.7727 0.348934 16.7727 0.34982 16.7727 0.350705C16.7727 0.351591 16.7727 0.352476 16.7727 0.353362C16.7727 0.354247 16.7727 0.355132 16.7727 0.356018C16.7727 0.356903 16.7727 0.357788 16.7727 0.358673C16.7727 0.359558 16.7727 0.360444 16.7727 0.361329C16.7727 0.362214 16.7727 0.363099 16.7727 0.363984C16.7727 0.364869 16.7727 0.365754 16.7727 0.366639C16.7727 0.367524 16.7727 0.368408 16.7727 0.369293C16.7727 0.370178 16.7727 0.371063 16.7727 0.371947C16.7727 0.372832 16.7727 0.373717 16.7727 0.374601C16.7727 0.375486 16.7727 0.376371 16.7727 0.377255C16.7727 0.37814 16.7727 0.379024 16.7727 0.379909C16.7727 0.380793 16.7727 0.381678 16.7727 0.382562C16.7727 0.383446 16.7727 0.384331 16.7727 0.385215C16.7727 0.386099 16.7727 0.386983 16.7727 0.387867C16.7727 0.388752 16.7727 0.389636 16.7727 0.39052C16.7727 0.391404 16.7727 0.392288 16.7727 0.393172C16.7727 0.394056 16.7727 0.39494 16.7727 0.395824C16.7727 0.396708 16.7727 0.397591 16.7727 0.398475C16.7727 0.399359 16.7727 0.400243 16.7727 0.401126C16.7727 0.40201 16.7727 0.402894 16.7727 0.403777C16.7727 0.404661 16.7727 0.405545 16.7727 0.406428C16.7727 0.407312 16.7727 0.408195 16.7727 0.409079C16.7727 0.409962 16.7727 0.410845 16.7727 0.411729C16.7727 0.412612 16.7727 0.413496 16.7727 0.414379C16.7727 0.415262 16.7727 0.416145 16.7727 0.417028C16.7727 0.417912 16.7727 0.418795 16.7727 0.419678C16.7727 0.420561 16.7727 0.421444 16.7727 0.422327C16.7727 0.42321 16.7727 0.424093 16.7727 0.424976C16.7727 0.425859 16.7727 0.426742 16.7727 0.427624C16.7727 0.428507 16.7727 0.42939 16.7727 0.430273C16.7727 0.431156 16.7727 0.432038 16.7727 0.432921C16.7727 0.433803 16.7727 0.434686 16.7727 0.435569C16.7727 0.436451 16.7727 0.437334 16.7727 0.438216C16.7727 0.439099 16.7727 0.439981 16.7727 0.440864C16.7727 0.441746 16.7727 0.442628 16.7727 0.443511C16.7727 0.444393 16.7727 0.445275 16.7727 0.446157C16.7727 0.44704 16.7727 0.447922 16.7727 0.448804C16.7727 0.449686 16.7727 0.450568 16.7727 0.45145C16.7727 0.452332 16.7727 0.453214 16.7727 0.454096C16.7727 0.454978 16.7727 0.45586 16.7727 0.456742C16.7727 0.457624 16.7727 0.458506 16.7727 0.459387C16.7727 0.460269 16.7727 0.461151 16.7727 0.462033C16.7727 0.462914 16.7727 0.463796 16.7727 0.464678C16.7727 0.465559 16.7727 0.466441 16.7727 0.467322C16.7727 0.468204 16.7727 0.469085 16.7727 0.469967C16.7727 0.470848 16.7727 0.47173 16.7727 0.472611C16.7727 0.473493 16.7727 0.474374 16.7727 0.475255C16.7727 0.476136 16.7727 0.477018 16.7727 0.477899C16.7727 0.47878 16.7727 0.479661 16.7727 0.480542C16.7727 0.481423 16.7727 0.482305 16.7727 0.483186C16.7727 0.484067 16.7727 0.484948 16.7727 0.485829C16.7727 0.48671 16.7727 0.48759 16.7727 0.488471C16.7727 0.489352 16.7727 0.490233 16.7727 0.491114C16.7727 0.491995 16.7727 0.492875 16.7727 0.493756C16.7727 0.494637 16.7727 0.495518 16.7727 0.496398C16.7727 0.497279 16.7727 0.498159 16.7727 0.49904C16.7727 0.499921 16.7727 0.500801 16.7727 0.501682C16.7727 0.502562 16.7727 0.503442 16.7727 0.504323C16.7727 0.505203 16.7727 0.506084 16.7727 0.506964C16.7727 0.507844 16.7727 0.508724 16.7727 0.509605C16.7727 0.510485 16.7727 0.511365 16.7727 0.512245C16.7727 0.513125 16.7727 0.514005 16.7727 0.514886C16.7727 0.515766 16.7727 0.516646 16.7727 0.517526C16.7727 0.518406 16.7727 0.519286 16.7727 0.520166C16.7727 0.521045 16.7727 0.521925 16.7727 0.522805C16.7727 0.523685 16.7727 0.524565 16.7727 0.525445C16.7727 0.526324 16.7727 0.527204 16.7727 0.528084C16.7727 0.528963 16.7727 0.529843 16.7727 0.530723C16.7727 0.531602 16.7727 0.532482 16.7727 0.533361C16.7727 0.534241 16.7727 0.53512 16.7727 0.536C16.7727 0.536879 16.7727 0.537759 16.7727 0.538638C16.7727 0.539517 16.7727 0.540397 16.7727 0.541276C16.7727 0.542155 16.7727 0.543034 16.7727 0.543914C16.7727 0.544793 16.7727 0.545672 16.7727 0.546551C16.7727 0.54743 16.7727 0.54831 16.7727 0.549189C16.7727 0.550068 16.7727 0.550947 16.7727 0.551826C16.7727 0.552705 16.7727 0.553584 16.7727 0.554462C16.7727 0.555341 16.7727 0.55622 16.7727 0.557099C16.7727 0.557978 16.7727 0.558857 16.7727 0.559735C16.7727 0.560614 16.7727 0.561493 16.7727 0.562372C16.7727 0.56325 16.7727 0.564129 16.7727 0.565008C16.7727 0.565886 16.7727 0.566765 16.7727 0.567643C16.7727 0.568522 16.7727 0.5694 16.7727 0.570279C16.7727 0.571157 16.7727 0.572036 16.7727 0.572914C16.7727 0.573792 16.7727 0.574671 16.7727 0.575549C16.7727 0.576427 16.7727 0.577306 16.7727 0.578184C16.7727 0.579062 16.7727 0.57994 16.7727 0.580819C16.7727 0.581697 16.7727 0.582575 16.7727 0.583453C16.7727 0.584331 16.7727 0.585209 16.7727 0.586087C16.7727 0.586965 16.7727 0.587843 16.7727 0.588721C16.7727 0.589599 16.7727 0.590477 16.7727 0.591355C16.7727 0.592233 16.7727 0.593111 16.7727 0.593988C16.7727 0.594866 16.7727 0.595744 16.7727 0.596622C16.7727 0.597499 16.7727 0.598377 16.7727 0.599255C16.7727 0.600132 16.7727 0.60101 16.7727 0.601888C16.7727 0.602765 16.7727 0.603643 16.7727 0.60452C16.7727 0.605398 16.7727 0.606275 16.7727 0.607153C16.7727 0.60803 16.7727 0.608908 16.7727 0.609785C16.7727 0.610662 16.7727 0.61154 16.7727 0.612417C16.7727 0.613294 16.7727 0.614172 16.7727 0.615049C16.7727 0.615926 16.7727 0.616803 16.7727 0.61768C16.7727 0.618558 16.7727 0.619435 16.7727 0.620312C16.7727 0.621189 16.7727 0.622066 16.7727 0.622943C16.7727 0.62382 16.7727 0.624697 16.7727 0.625574C16.7727 0.626451 16.7727 0.627328 16.7727 0.628205C16.7727 0.629082 16.7727 0.629959 16.7727 0.630835C16.7727 0.631712 16.7727 0.632589 16.7727 0.633466C16.7727 0.634343 16.7727 0.635219 16.7727 0.636096C16.7727 0.636973 16.7727 0.637849 16.7727 0.638726C16.7727 0.639603 16.7727 0.640479 16.7727 0.641356C16.7727 0.642232 16.7727 0.643109 16.7727 0.643985C16.7727 0.644862 16.7727 0.645738 16.7727 0.646615C16.7727 0.647491 16.7727 0.648367 16.7727 0.649244C16.7727 0.65012 16.7727 0.650996 16.7727 0.651873C16.7727 0.652749 16.7727 0.653625 16.7727 0.654501C16.7727 0.655378 16.7727 0.656254 16.7727 0.65713C16.7727 0.658006 16.7727 0.658882 16.7727 0.659758C16.7727 0.660634 16.7727 0.661511 16.7727 0.662387C16.7727 0.663263 16.7727 0.664139 16.7727 0.665015C16.7727 0.66589 16.7727 0.666766 16.7727 0.667642C16.7727 0.668518 16.7727 0.669394 16.7727 0.67027C16.7727 0.671146 16.7727 0.672021 16.7727 0.672897C16.7727 0.673773 16.7727 0.674649 16.7727 0.675524C16.7727 0.6764 16.7727 0.677276 16.7727 0.678151C16.7727 0.679027 16.7727 0.679903 16.7727 0.680778C16.7727 0.681654 16.7727 0.682529 16.7727 0.683405C16.7727 0.68428 16.7727 0.685156 16.7727 0.686031C16.7727 0.686907 16.7727 0.687782 16.7727 0.688658C16.7727 0.689533 16.7727 0.690408 16.7727 0.691284C16.7727 0.692159 16.7727 0.693034 16.7727 0.693909C16.7727 0.694785 16.7727 0.69566 16.7727 0.696535C16.7727 0.69741 16.7727 0.698285 16.7727 0.699161C16.7727 0.700036 16.7727 0.700911 16.7727 0.701786C16.7727 0.702661 16.7727 0.703536 16.7727 0.704411C16.7727 0.705286 16.7727 0.706161 16.7727 0.707036C16.7727 0.707911 16.7727 0.708786 16.7727 0.709661C16.7727 0.710536 16.7727 0.71141 16.7727 0.712285C16.7727 0.71316 16.7727 0.714035 16.7727 0.71491C16.7727 0.715784 16.7727 0.716659 16.7727 0.717534C16.7727 0.718409 16.7727 0.719283 16.7727 0.720158C16.7727 0.721033 16.7727 0.721907 16.7727 0.722782C16.7727 0.723656 16.7727 0.724531 16.7727 0.725405C16.7727 0.72628 16.7727 0.727154 16.7727 0.728029C16.7727 0.728903 16.7727 0.729778 16.7727 0.730652C16.7727 0.731527 16.7727 0.732401 16.7727 0.733275C16.7727 0.73415 16.7727 0.735024 16.7727 0.735898C16.7727 0.736772 16.7727 0.737647 16.7727 0.738521C16.7727 0.739395 16.7727 0.740269 16.7727 0.741144C16.7727 0.742018 16.7727 0.742892 16.7727 0.743766C16.7727 0.74464 16.7727 0.745514 16.7727 0.746388C16.7727 0.747262 16.7727 0.748136 16.7727 0.74901C16.7727 0.749884 16.7727 0.750758 16.7727 0.751632C16.7727 0.752506 16.7727 0.75338 16.7727 0.754254C16.7727 0.755128 16.7727 0.756002 16.7727 0.756876C16.7727 0.757749 16.7727 0.758623 16.7727 0.759497C16.7727 0.760371 16.7727 0.761245 16.7727 0.762118C16.7727 0.762992 16.7727 0.763866 16.7727 0.764739C16.7727 0.765613 16.7727 0.766487 16.7727 0.76736C16.7727 0.768234 16.7727 0.769107 16.7727 0.769981C16.7727 0.770854 16.7727 0.771728 16.7727 0.772601C16.7727 0.773475 16.7727 0.774348 16.7727 0.775222C16.7727 0.776095 16.7727 0.776969 16.7727 0.777842C16.7727 0.778716 16.7727 0.779589 16.7727 0.780462C16.7727 0.781336 16.7727 0.782209 16.7727 0.783082C16.7727 0.783955 16.7727 0.784829 16.7727 0.785702C16.7727 0.786575 16.7727 0.787448 16.7727 0.788321C16.7727 0.789195 16.7727 0.790068 16.7727 0.790941C16.7727 0.791814 16.7727 0.792687 16.7727 0.79356C16.7727 0.794433 16.7727 0.795306 16.7727 0.796179C16.7727 0.797052 16.7727 0.797925 16.7727 0.798798C16.7727 0.799671 16.7727 0.800544 16.7727 0.801417C16.7727 0.80229 16.7727 0.803163 16.7727 0.804036C16.7727 0.804909 16.7727 0.805781 16.7727 0.806654C16.7727 0.807527 16.7727 0.8084 16.7727 0.809273C16.7727 0.810145 16.7727 0.811018 16.7727 0.811891C16.7727 0.812763 16.7727 0.813636 16.7727 0.814509C16.7727 0.815381 16.7727 0.816254 16.7727 0.817127C16.7727 0.817999 16.7727 0.818872 16.7727 0.819744C16.7727 0.820617 16.7727 0.821489 16.7727 0.822362C16.7727 0.823234 16.7727 0.824107 16.7727 0.824979C16.7727 0.825852 16.7727 0.826724 16.7727 0.827597C16.7727 0.828469 16.7727 0.829341 16.7727 0.830214C16.7727 0.831086 16.7727 0.831958 16.7727 0.832831C16.7727 0.833703 16.7727 0.834575 16.7727 0.835447C16.7727 0.83632 16.7727 0.837192 16.7727 0.838064C16.7727 0.838936 16.7727 0.839808 16.7727 0.840681C16.7727 0.841553 16.7727 0.842425 16.7727 0.843297C16.7727 0.844169 16.7727 0.845041 16.7727 0.845913C16.7727 0.846785 16.7727 0.847657 16.7727 0.848529C16.7727 0.849401 16.7727 0.850273 16.7727 0.851145C16.7727 0.852017 16.7727 0.852889 16.7727 0.853761C16.7727 0.854633 16.7727 0.855505 16.7727 0.856377C16.7727 0.857249 16.7727 0.85812 16.7727 0.858992C16.7727 0.859864 16.7727 0.860736 16.7727 0.861608C16.7727 0.862479 16.7727 0.863351 16.7727 0.864223C16.7727 0.865095 16.7727 0.865966 16.7727 0.866838C16.7727 0.86771 16.7727 0.868581 16.7727 0.869453C16.7727 0.870325 16.7727 0.871196 16.7727 0.872068C16.7727 0.872939 16.7727 0.873811 16.7727 0.874682C16.7727 0.875554 16.7727 0.876426 16.7727 0.877297C16.7727 0.878169 16.7727 0.87904 16.7727 0.879911C16.7727 0.880783 16.7727 0.881654 16.7727 0.882526C16.7727 0.883397 16.7727 0.884269 16.7727 0.88514C16.7727 0.886011 16.7727 0.886883 16.7727 0.887754C16.7727 0.888625 16.7727 0.889497 16.7727 0.890368C16.7727 0.891239 16.7727 0.89211 16.7727 0.892982C16.7727 0.893853 16.7727 0.894724 16.7727 0.895595C16.7727 0.896466 16.7727 0.897338 16.7727 0.898209C16.7727 0.89908 16.7727 0.899951 16.7727 0.900822C16.7727 0.901693 16.7727 0.902564 16.7727 0.903435C16.7727 0.904306 16.7727 0.905177 16.7727 0.906048C16.7727 0.906919 16.7727 0.90779 16.7727 0.908661C16.7727 0.909532 16.7727 0.910403 16.7727 0.911274C16.7727 0.912145 16.7727 0.913016 16.7727 0.913887C16.7727 0.914758 16.7727 0.915629 16.7727 0.9165C16.7727 0.91737 16.7727 0.918241 16.7727 0.919112C16.7727 0.919983 16.7727 0.920854 16.7727 0.921724C16.7727 0.922595 16.7727 0.923466 16.7727 0.924337C16.7727 0.925207 16.7727 0.926078 16.7727 0.926949C16.7727 0.92782 16.7727 0.92869 16.7727 0.929561C16.7727 0.930432 16.7727 0.931302 16.7727 0.932173C16.7727 0.933043 16.7727 0.933914 16.7727 0.934785C16.7727 0.935655 16.7727 0.936526 16.7727 0.937396C16.7727 0.938267 16.7727 0.939137 16.7727 0.940008C16.7727 0.940878 16.7727 0.941749 16.7727 0.942619C16.7727 0.94349 16.7727 0.94436 16.7727 0.94523C16.7727 0.946101 16.7727 0.946971 16.7727 0.947842C16.7727 0.948712 16.7727 0.949582 16.7727 0.950453C16.7727 0.951323 16.7727 0.952193 16.7727 0.953064C16.7727 0.953934 16.7727 0.954804 16.7727 0.955674C16.7727 0.956545 16.7727 0.957415 16.7727 0.958285C16.7727 0.959155 16.7727 0.960026 16.7727 0.960896C16.7727 0.961766 16.7727 0.962636 16.7727 0.963506C16.7727 0.964376 16.7727 0.965246 16.7727 0.966117C16.7727 0.966987 16.7727 0.967857 16.7727 0.968727C16.7727 0.969597 16.7727 0.970467 16.7727 0.971337C16.7727 0.972207 16.7727 0.973077 16.7727 0.973947C16.7727 0.974817 16.7727 0.975687 16.7727 0.976557C16.7727 0.977427 16.7727 0.978297 16.7727 0.979167C16.7727 0.980037 16.7727 0.980907 16.7727 0.981777C16.7727 0.982647 16.7727 0.983516 16.7727 0.984386C16.7727 0.985256 16.7727 0.986126 16.7727 0.986996C16.7727 0.987866 16.7727 0.988735 16.7727 0.989605C16.7727 0.990475 16.7727 0.991345 16.7727 0.992215C16.7727 0.993084 16.7727 0.993954 16.7727 0.994824C16.7727 0.995694 16.7727 0.996563 16.7727 0.997433C16.7727 0.998303 16.7727 0.999172 16.7727 1.00004C16.7727 1.00091 16.7727 1.00178 16.7727 1.00265C16.7727 1.00352 16.7727 1.00439 16.7727 1.00526C16.7727 1.00613 16.7727 1.007 16.7727 1.00787C16.7727 1.00874 16.7727 1.00961 16.7727 1.01048C16.7727 1.01135 16.7727 1.01222 16.7727 1.01309C16.7727 1.01396 16.7727 1.01482 16.7727 1.01569C16.7727 1.01656 16.7727 1.01743 16.7727 1.0183C16.7727 1.01917 16.7727 1.02004 16.7727 1.02091C16.7727 1.02178 16.7727 1.02265 16.7727 1.02352C16.7727 1.02439 16.7727 1.02526 16.7727 1.02613C16.7727 1.027 16.7727 1.02787 16.7727 1.02873C16.7727 1.0296 16.7727 1.03047 16.7727 1.03134C16.7727 1.03221 16.7727 1.03308 16.7727 1.03395C16.7727 1.03482 16.7727 1.03569 16.7727 1.03656C16.7727 1.03743 16.7727 1.0383 16.7727 1.03917C16.7727 1.04003 16.7727 1.0409 16.7727 1.04177C16.7727 1.04264 16.7727 1.04351 16.7727 1.04438C16.7727 1.04525 16.7727 1.04612 16.7727 1.04699C16.7727 1.04786 16.7727 1.04873 16.7727 1.0496C16.7727 1.05046 16.7727 1.05133 16.7727 1.0522C16.7727 1.05307 16.7727 1.05394 16.7727 1.05481C16.7727 1.05568 16.7727 1.05655 16.7727 1.05742C16.7727 1.05829 16.7727 1.05915 16.7727 1.06002C16.7727 1.06089 16.7727 1.06176 16.7727 1.06263C16.7727 1.0635 16.7727 1.06437 16.7727 1.06524C16.7727 1.06611 16.7727 1.06697 16.7727 1.06784C16.7727 1.06871 16.7727 1.06958 16.7727 1.07045C16.7727 1.07132 16.7727 1.07219 16.7727 1.07306C16.7727 1.07393 16.7727 1.07479 16.7727 1.07566C16.7727 1.07653 16.7727 1.0774 16.7727 1.07827C16.7727 1.07914 16.7727 1.08001 16.7727 1.08088C16.7727 1.08174 16.7727 1.08261 16.7727 1.08348C16.7727 1.08435 16.7727 1.08522 16.7727 1.08609C16.7727 1.08696 16.7727 1.08783 16.7727 1.08869C16.7727 1.08956 16.7727 1.09043 16.7727 1.0913C16.7727 1.09217 16.7727 1.09304 16.7727 1.09391C16.7727 1.09477 16.7727 1.09564 16.7727 1.09651C16.7727 1.09738 16.7727 1.09825 16.7727 1.09912C16.7727 1.09999 16.7727 1.10085 16.7727 1.10172C16.7727 1.10259 16.7727 1.10346 16.7727 1.10433C16.7727 1.1052 16.7727 1.10607 16.7727 1.10693C16.7727 1.1078 16.7727 1.10867 16.7727 1.10954C16.7727 1.11041 16.7727 1.11128 16.7727 1.11215C16.7727 1.11301 16.7727 1.11388 16.7727 1.11475C16.7727 1.11562 16.7727 1.11649 16.7727 1.11736C16.7727 1.11822 16.7727 1.11909 16.7727 1.11996C16.7727 1.12083 16.7727 1.1217 16.7727 1.12257C16.7727 1.12343 16.7727 1.1243 16.7727 1.12517C16.7727 1.12604 16.7727 1.12691 16.7727 1.12778C16.7727 1.12864 16.7727 1.12951 16.7727 1.13038C16.7727 1.13125 16.7727 1.13212 16.7727 1.13299C16.7727 1.13385 16.7727 1.13472 16.7727 1.13559C16.7727 1.13646 16.7727 1.13733 16.7727 1.1382C16.7727 1.13906 16.7727 1.13993 16.7727 1.1408C16.7727 1.14167 16.7727 1.14254 16.7727 1.1434C16.7727 1.14427 16.7727 1.14514 16.7727 1.14601C16.7727 1.14688 16.7727 1.14775 16.7727 1.14861C16.7727 1.14948 16.7727 1.15035 16.7727 1.15122C16.7727 1.15209 16.7727 1.15295 16.7727 1.15382C16.7727 1.15469 16.7727 1.15556 16.7727 1.15643C16.7727 1.1573 16.7727 1.15816 16.7727 1.15903C16.7727 1.1599 16.7727 1.16077 16.7727 1.16164C16.7727 1.1625 16.7727 1.16337 16.7727 1.16424C16.7727 1.16511 16.7727 1.16598 16.7727 1.16684C16.7727 1.16771 16.7727 1.16858 16.7727 1.16945C16.7727 1.17032 16.7727 1.17118 16.7727 1.17205C16.7727 1.17292 16.7727 1.17379 16.7727 1.17466C16.7727 1.17552 16.7727 1.17639 16.7727 1.17726C16.7727 1.17813 16.7727 1.179 16.7727 1.17986C16.7727 1.18073 16.7727 1.1816 16.7727 1.18247C16.7727 1.18334 16.7727 1.1842 16.7727 1.18507C16.7727 1.18594 16.7727 1.18681 16.7727 1.18768C16.7727 1.18854 16.7727 1.18941 16.7727 1.19028C16.7727 1.19115 16.7727 1.19201 16.7727 1.19288C16.7727 1.19375 16.7727 1.19462 16.7727 1.19549C16.7727 1.19635 16.7727 1.19722 16.7727 1.19809C16.7727 1.19896 16.7727 1.19983 16.7727 1.20069C16.7727 1.20156 16.7727 1.20243 16.7727 1.2033C16.7727 1.20416 16.7727 1.20503 16.7727 1.2059C16.7727 1.20677 16.7727 1.20764 16.7727 1.2085C16.7727 1.20937 16.7727 1.21024 16.7727 1.21111C16.7727 1.21197 16.7727 1.21284 16.7727 1.21371C16.7727 1.21458 16.7727 1.21545 16.7727 1.21631C16.7727 1.21718 16.7727 1.21805 16.7727 1.21892C16.7727 1.21978 16.7727 1.22065 16.7727 1.22152C16.7727 1.22239 16.7727 1.22326 16.7727 1.22412C16.7727 1.22499 16.7727 1.22586 16.7727 1.22673C16.7727 1.22759 16.7727 1.22846 16.7727 1.22933C16.7727 1.2302 16.7727 1.23106 16.7727 1.23193C16.7727 1.2328 16.7727 1.23367 16.7727 1.23454C16.7727 1.2354 16.7727 1.23627 16.7727 1.23714C16.7727 1.23801 16.7727 1.23887 16.7727 1.23974C16.7727 1.24061 16.7727 1.24148 16.7727 1.24234C16.7727 1.24321 16.7727 1.24408 16.7727 1.24495C16.7727 1.24581 16.7727 1.24668 16.7727 1.24755C16.7727 1.24842 16.7727 1.24929 16.7727 1.25015C16.7727 1.25102 16.7727 1.25189 16.7727 1.25276C16.7727 1.25362 16.7727 1.25449 16.7727 1.25536C16.7727 1.25623 16.7727 1.25709 16.7727 1.25796C16.7727 1.25883 16.7727 1.2597 16.7727 1.26056C16.7727 1.26143 16.7727 1.2623 16.7727 1.26317C16.7727 1.26403 16.7727 1.2649 16.7727 1.26577C16.7727 1.26664 16.7727 1.2675 16.7727 1.26837C16.7727 1.26924 16.7727 1.27011 16.7727 1.27097C16.7727 1.27184 16.7727 1.27271 16.7727 1.27358C16.7727 1.27444 16.7727 1.27531 16.7727 1.27618C16.7727 1.27705 16.7727 1.27791 16.7727 1.27878C16.7727 1.27965 16.7727 1.28052 16.7727 1.28138C16.7727 1.28225 16.7727 1.28312 16.7727 1.28399C16.7727 1.28485 16.7727 1.28572 16.7727 1.28659C16.7727 1.28746 16.7727 1.28832 16.7727 1.28919C16.7727 1.29006 16.7727 1.29093 16.7727 1.29179C16.7727 1.29266 16.7727 1.29353 16.7727 1.2944C16.7727 1.29526 16.7727 1.29613 16.7727 1.297C16.7727 1.29787 16.7727 1.29873 16.7727 1.2996C16.7727 1.30047 16.7727 1.30134 16.7727 1.3022C16.7727 1.30307 16.7727 1.30394 16.7727 1.30481C16.7727 1.30567 16.7727 1.30654 16.7727 1.30741C16.7727 1.30828 16.7727 1.30914 16.7727 1.31001C16.7727 1.31088 16.7727 1.31175 16.7727 1.31261C16.7727 1.31348 16.7727 1.31435 16.7727 1.31522C16.7727 1.31608 16.7727 1.31695 16.7727 1.31782C16.7727 1.31869 16.7727 1.31955 16.7727 1.32042C16.7727 1.32129 16.7727 1.32216 16.7727 1.32302C16.7727 1.32389 16.7727 1.32476 16.7727 1.32563C16.7727 1.32649 16.7727 1.32736 16.7727 1.32823C16.7727 1.3291 16.7727 1.32996 16.7727 1.33083C16.7727 1.3317 16.7727 1.33256 16.7727 1.33343C16.7727 1.3343 16.7727 1.33517 16.7727 1.33603C16.7727 1.3369 16.7727 1.33777 16.7727 1.33864C16.7727 1.3395 16.7727 1.34037 16.7727 1.34124C16.7727 1.34211 16.7727 1.34297 16.7727 1.34384C16.7727 1.34471 16.7727 1.34558 16.7727 1.34644C16.7727 1.34731 16.7727 1.34818 16.7727 1.34905H19.7727C19.7727 1.34818 19.7727 1.34731 19.7727 1.34644C19.7727 1.34558 19.7727 1.34471 19.7727 1.34384C19.7727 1.34297 19.7727 1.34211 19.7727 1.34124C19.7727 1.34037 19.7727 1.3395 19.7727 1.33864C19.7727 1.33777 19.7727 1.3369 19.7727 1.33603C19.7727 1.33517 19.7727 1.3343 19.7727 1.33343C19.7727 1.33256 19.7727 1.3317 19.7727 1.33083C19.7727 1.32996 19.7727 1.3291 19.7727 1.32823C19.7727 1.32736 19.7727 1.32649 19.7727 1.32563C19.7727 1.32476 19.7727 1.32389 19.7727 1.32302C19.7727 1.32216 19.7727 1.32129 19.7727 1.32042C19.7727 1.31955 19.7727 1.31869 19.7727 1.31782C19.7727 1.31695 19.7727 1.31608 19.7727 1.31522C19.7727 1.31435 19.7727 1.31348 19.7727 1.31261C19.7727 1.31175 19.7727 1.31088 19.7727 1.31001C19.7727 1.30914 19.7727 1.30828 19.7727 1.30741C19.7727 1.30654 19.7727 1.30567 19.7727 1.30481C19.7727 1.30394 19.7727 1.30307 19.7727 1.3022C19.7727 1.30134 19.7727 1.30047 19.7727 1.2996C19.7727 1.29873 19.7727 1.29787 19.7727 1.297C19.7727 1.29613 19.7727 1.29526 19.7727 1.2944C19.7727 1.29353 19.7727 1.29266 19.7727 1.29179C19.7727 1.29093 19.7727 1.29006 19.7727 1.28919C19.7727 1.28832 19.7727 1.28746 19.7727 1.28659C19.7727 1.28572 19.7727 1.28485 19.7727 1.28399C19.7727 1.28312 19.7727 1.28225 19.7727 1.28138C19.7727 1.28052 19.7727 1.27965 19.7727 1.27878C19.7727 1.27791 19.7727 1.27705 19.7727 1.27618C19.7727 1.27531 19.7727 1.27444 19.7727 1.27358C19.7727 1.27271 19.7727 1.27184 19.7727 1.27097C19.7727 1.27011 19.7727 1.26924 19.7727 1.26837C19.7727 1.2675 19.7727 1.26664 19.7727 1.26577C19.7727 1.2649 19.7727 1.26403 19.7727 1.26317C19.7727 1.2623 19.7727 1.26143 19.7727 1.26056C19.7727 1.2597 19.7727 1.25883 19.7727 1.25796C19.7727 1.25709 19.7727 1.25623 19.7727 1.25536C19.7727 1.25449 19.7727 1.25362 19.7727 1.25276C19.7727 1.25189 19.7727 1.25102 19.7727 1.25015C19.7727 1.24929 19.7727 1.24842 19.7727 1.24755C19.7727 1.24668 19.7727 1.24581 19.7727 1.24495C19.7727 1.24408 19.7727 1.24321 19.7727 1.24234C19.7727 1.24148 19.7727 1.24061 19.7727 1.23974C19.7727 1.23887 19.7727 1.23801 19.7727 1.23714C19.7727 1.23627 19.7727 1.2354 19.7727 1.23454C19.7727 1.23367 19.7727 1.2328 19.7727 1.23193C19.7727 1.23106 19.7727 1.2302 19.7727 1.22933C19.7727 1.22846 19.7727 1.22759 19.7727 1.22673C19.7727 1.22586 19.7727 1.22499 19.7727 1.22412C19.7727 1.22326 19.7727 1.22239 19.7727 1.22152C19.7727 1.22065 19.7727 1.21978 19.7727 1.21892C19.7727 1.21805 19.7727 1.21718 19.7727 1.21631C19.7727 1.21545 19.7727 1.21458 19.7727 1.21371C19.7727 1.21284 19.7727 1.21197 19.7727 1.21111C19.7727 1.21024 19.7727 1.20937 19.7727 1.2085C19.7727 1.20764 19.7727 1.20677 19.7727 1.2059C19.7727 1.20503 19.7727 1.20416 19.7727 1.2033C19.7727 1.20243 19.7727 1.20156 19.7727 1.20069C19.7727 1.19983 19.7727 1.19896 19.7727 1.19809C19.7727 1.19722 19.7727 1.19635 19.7727 1.19549C19.7727 1.19462 19.7727 1.19375 19.7727 1.19288C19.7727 1.19201 19.7727 1.19115 19.7727 1.19028C19.7727 1.18941 19.7727 1.18854 19.7727 1.18768C19.7727 1.18681 19.7727 1.18594 19.7727 1.18507C19.7727 1.1842 19.7727 1.18334 19.7727 1.18247C19.7727 1.1816 19.7727 1.18073 19.7727 1.17986C19.7727 1.179 19.7727 1.17813 19.7727 1.17726C19.7727 1.17639 19.7727 1.17552 19.7727 1.17466C19.7727 1.17379 19.7727 1.17292 19.7727 1.17205C19.7727 1.17118 19.7727 1.17032 19.7727 1.16945C19.7727 1.16858 19.7727 1.16771 19.7727 1.16684C19.7727 1.16598 19.7727 1.16511 19.7727 1.16424C19.7727 1.16337 19.7727 1.1625 19.7727 1.16164C19.7727 1.16077 19.7727 1.1599 19.7727 1.15903C19.7727 1.15816 19.7727 1.1573 19.7727 1.15643C19.7727 1.15556 19.7727 1.15469 19.7727 1.15382C19.7727 1.15295 19.7727 1.15209 19.7727 1.15122C19.7727 1.15035 19.7727 1.14948 19.7727 1.14861C19.7727 1.14775 19.7727 1.14688 19.7727 1.14601C19.7727 1.14514 19.7727 1.14427 19.7727 1.1434C19.7727 1.14254 19.7727 1.14167 19.7727 1.1408C19.7727 1.13993 19.7727 1.13906 19.7727 1.1382C19.7727 1.13733 19.7727 1.13646 19.7727 1.13559C19.7727 1.13472 19.7727 1.13385 19.7727 1.13299C19.7727 1.13212 19.7727 1.13125 19.7727 1.13038C19.7727 1.12951 19.7727 1.12864 19.7727 1.12778C19.7727 1.12691 19.7727 1.12604 19.7727 1.12517C19.7727 1.1243 19.7727 1.12343 19.7727 1.12257C19.7727 1.1217 19.7727 1.12083 19.7727 1.11996C19.7727 1.11909 19.7727 1.11822 19.7727 1.11736C19.7727 1.11649 19.7727 1.11562 19.7727 1.11475C19.7727 1.11388 19.7727 1.11301 19.7727 1.11215C19.7727 1.11128 19.7727 1.11041 19.7727 1.10954C19.7727 1.10867 19.7727 1.1078 19.7727 1.10693C19.7727 1.10607 19.7727 1.1052 19.7727 1.10433C19.7727 1.10346 19.7727 1.10259 19.7727 1.10172C19.7727 1.10085 19.7727 1.09999 19.7727 1.09912C19.7727 1.09825 19.7727 1.09738 19.7727 1.09651C19.7727 1.09564 19.7727 1.09477 19.7727 1.09391C19.7727 1.09304 19.7727 1.09217 19.7727 1.0913C19.7727 1.09043 19.7727 1.08956 19.7727 1.08869C19.7727 1.08783 19.7727 1.08696 19.7727 1.08609C19.7727 1.08522 19.7727 1.08435 19.7727 1.08348C19.7727 1.08261 19.7727 1.08174 19.7727 1.08088C19.7727 1.08001 19.7727 1.07914 19.7727 1.07827C19.7727 1.0774 19.7727 1.07653 19.7727 1.07566C19.7727 1.07479 19.7727 1.07393 19.7727 1.07306C19.7727 1.07219 19.7727 1.07132 19.7727 1.07045C19.7727 1.06958 19.7727 1.06871 19.7727 1.06784C19.7727 1.06697 19.7727 1.06611 19.7727 1.06524C19.7727 1.06437 19.7727 1.0635 19.7727 1.06263C19.7727 1.06176 19.7727 1.06089 19.7727 1.06002C19.7727 1.05915 19.7727 1.05829 19.7727 1.05742C19.7727 1.05655 19.7727 1.05568 19.7727 1.05481C19.7727 1.05394 19.7727 1.05307 19.7727 1.0522C19.7727 1.05133 19.7727 1.05046 19.7727 1.0496C19.7727 1.04873 19.7727 1.04786 19.7727 1.04699C19.7727 1.04612 19.7727 1.04525 19.7727 1.04438C19.7727 1.04351 19.7727 1.04264 19.7727 1.04177C19.7727 1.0409 19.7727 1.04003 19.7727 1.03917C19.7727 1.0383 19.7727 1.03743 19.7727 1.03656C19.7727 1.03569 19.7727 1.03482 19.7727 1.03395C19.7727 1.03308 19.7727 1.03221 19.7727 1.03134C19.7727 1.03047 19.7727 1.0296 19.7727 1.02873C19.7727 1.02787 19.7727 1.027 19.7727 1.02613C19.7727 1.02526 19.7727 1.02439 19.7727 1.02352C19.7727 1.02265 19.7727 1.02178 19.7727 1.02091C19.7727 1.02004 19.7727 1.01917 19.7727 1.0183C19.7727 1.01743 19.7727 1.01656 19.7727 1.01569C19.7727 1.01482 19.7727 1.01396 19.7727 1.01309C19.7727 1.01222 19.7727 1.01135 19.7727 1.01048C19.7727 1.00961 19.7727 1.00874 19.7727 1.00787C19.7727 1.007 19.7727 1.00613 19.7727 1.00526C19.7727 1.00439 19.7727 1.00352 19.7727 1.00265C19.7727 1.00178 19.7727 1.00091 19.7727 1.00004C19.7727 0.999172 19.7727 0.998303 19.7727 0.997433C19.7727 0.996563 19.7727 0.995694 19.7727 0.994824C19.7727 0.993954 19.7727 0.993084 19.7727 0.992215C19.7727 0.991345 19.7727 0.990475 19.7727 0.989605C19.7727 0.988735 19.7727 0.987866 19.7727 0.986996C19.7727 0.986126 19.7727 0.985256 19.7727 0.984386C19.7727 0.983516 19.7727 0.982647 19.7727 0.981777C19.7727 0.980907 19.7727 0.980037 19.7727 0.979167C19.7727 0.978297 19.7727 0.977427 19.7727 0.976557C19.7727 0.975687 19.7727 0.974817 19.7727 0.973947C19.7727 0.973077 19.7727 0.972207 19.7727 0.971337C19.7727 0.970467 19.7727 0.969597 19.7727 0.968727C19.7727 0.967857 19.7727 0.966987 19.7727 0.966117C19.7727 0.965246 19.7727 0.964376 19.7727 0.963506C19.7727 0.962636 19.7727 0.961766 19.7727 0.960896C19.7727 0.960026 19.7727 0.959155 19.7727 0.958285C19.7727 0.957415 19.7727 0.956545 19.7727 0.955674C19.7727 0.954804 19.7727 0.953934 19.7727 0.953064C19.7727 0.952193 19.7727 0.951323 19.7727 0.950453C19.7727 0.949582 19.7727 0.948712 19.7727 0.947842C19.7727 0.946971 19.7727 0.946101 19.7727 0.94523C19.7727 0.94436 19.7727 0.94349 19.7727 0.942619C19.7727 0.941749 19.7727 0.940878 19.7727 0.940008C19.7727 0.939137 19.7727 0.938267 19.7727 0.937396C19.7727 0.936526 19.7727 0.935655 19.7727 0.934785C19.7727 0.933914 19.7727 0.933043 19.7727 0.932173C19.7727 0.931302 19.7727 0.930432 19.7727 0.929561C19.7727 0.92869 19.7727 0.92782 19.7727 0.926949C19.7727 0.926078 19.7727 0.925207 19.7727 0.924337C19.7727 0.923466 19.7727 0.922595 19.7727 0.921724C19.7727 0.920854 19.7727 0.919983 19.7727 0.919112C19.7727 0.918241 19.7727 0.91737 19.7727 0.9165C19.7727 0.915629 19.7727 0.914758 19.7727 0.913887C19.7727 0.913016 19.7727 0.912145 19.7727 0.911274C19.7727 0.910403 19.7727 0.909532 19.7727 0.908661C19.7727 0.90779 19.7727 0.906919 19.7727 0.906048C19.7727 0.905177 19.7727 0.904306 19.7727 0.903435C19.7727 0.902564 19.7727 0.901693 19.7727 0.900822C19.7727 0.899951 19.7727 0.89908 19.7727 0.898209C19.7727 0.897338 19.7727 0.896466 19.7727 0.895595C19.7727 0.894724 19.7727 0.893853 19.7727 0.892982C19.7727 0.89211 19.7727 0.891239 19.7727 0.890368C19.7727 0.889497 19.7727 0.888625 19.7727 0.887754C19.7727 0.886883 19.7727 0.886011 19.7727 0.88514C19.7727 0.884269 19.7727 0.883397 19.7727 0.882526C19.7727 0.881654 19.7727 0.880783 19.7727 0.879911C19.7727 0.87904 19.7727 0.878169 19.7727 0.877297C19.7727 0.876426 19.7727 0.875554 19.7727 0.874682C19.7727 0.873811 19.7727 0.872939 19.7727 0.872068C19.7727 0.871196 19.7727 0.870325 19.7727 0.869453C19.7727 0.868581 19.7727 0.86771 19.7727 0.866838C19.7727 0.865966 19.7727 0.865095 19.7727 0.864223C19.7727 0.863351 19.7727 0.862479 19.7727 0.861608C19.7727 0.860736 19.7727 0.859864 19.7727 0.858992C19.7727 0.85812 19.7727 0.857249 19.7727 0.856377C19.7727 0.855505 19.7727 0.854633 19.7727 0.853761C19.7727 0.852889 19.7727 0.852017 19.7727 0.851145C19.7727 0.850273 19.7727 0.849401 19.7727 0.848529C19.7727 0.847657 19.7727 0.846785 19.7727 0.845913C19.7727 0.845041 19.7727 0.844169 19.7727 0.843297C19.7727 0.842425 19.7727 0.841553 19.7727 0.840681C19.7727 0.839808 19.7727 0.838936 19.7727 0.838064C19.7727 0.837192 19.7727 0.83632 19.7727 0.835447C19.7727 0.834575 19.7727 0.833703 19.7727 0.832831C19.7727 0.831958 19.7727 0.831086 19.7727 0.830214C19.7727 0.829341 19.7727 0.828469 19.7727 0.827597C19.7727 0.826724 19.7727 0.825852 19.7727 0.824979C19.7727 0.824107 19.7727 0.823234 19.7727 0.822362C19.7727 0.821489 19.7727 0.820617 19.7727 0.819744C19.7727 0.818872 19.7727 0.817999 19.7727 0.817127C19.7727 0.816254 19.7727 0.815381 19.7727 0.814509C19.7727 0.813636 19.7727 0.812763 19.7727 0.811891C19.7727 0.811018 19.7727 0.810145 19.7727 0.809273C19.7727 0.8084 19.7727 0.807527 19.7727 0.806654C19.7727 0.805781 19.7727 0.804909 19.7727 0.804036C19.7727 0.803163 19.7727 0.80229 19.7727 0.801417C19.7727 0.800544 19.7727 0.799671 19.7727 0.798798C19.7727 0.797925 19.7727 0.797052 19.7727 0.796179C19.7727 0.795306 19.7727 0.794433 19.7727 0.79356C19.7727 0.792687 19.7727 0.791814 19.7727 0.790941C19.7727 0.790068 19.7727 0.789195 19.7727 0.788321C19.7727 0.787448 19.7727 0.786575 19.7727 0.785702C19.7727 0.784829 19.7727 0.783955 19.7727 0.783082C19.7727 0.782209 19.7727 0.781336 19.7727 0.780462C19.7727 0.779589 19.7727 0.778716 19.7727 0.777842C19.7727 0.776969 19.7727 0.776095 19.7727 0.775222C19.7727 0.774348 19.7727 0.773475 19.7727 0.772601C19.7727 0.771728 19.7727 0.770854 19.7727 0.769981C19.7727 0.769107 19.7727 0.768234 19.7727 0.76736C19.7727 0.766487 19.7727 0.765613 19.7727 0.764739C19.7727 0.763866 19.7727 0.762992 19.7727 0.762118C19.7727 0.761245 19.7727 0.760371 19.7727 0.759497C19.7727 0.758623 19.7727 0.757749 19.7727 0.756876C19.7727 0.756002 19.7727 0.755128 19.7727 0.754254C19.7727 0.75338 19.7727 0.752506 19.7727 0.751632C19.7727 0.750758 19.7727 0.749884 19.7727 0.74901C19.7727 0.748136 19.7727 0.747262 19.7727 0.746388C19.7727 0.745514 19.7727 0.74464 19.7727 0.743766C19.7727 0.742892 19.7727 0.742018 19.7727 0.741144C19.7727 0.740269 19.7727 0.739395 19.7727 0.738521C19.7727 0.737647 19.7727 0.736772 19.7727 0.735898C19.7727 0.735024 19.7727 0.73415 19.7727 0.733275C19.7727 0.732401 19.7727 0.731527 19.7727 0.730652C19.7727 0.729778 19.7727 0.728903 19.7727 0.728029C19.7727 0.727154 19.7727 0.72628 19.7727 0.725405C19.7727 0.724531 19.7727 0.723656 19.7727 0.722782C19.7727 0.721907 19.7727 0.721033 19.7727 0.720158C19.7727 0.719283 19.7727 0.718409 19.7727 0.717534C19.7727 0.716659 19.7727 0.715784 19.7727 0.71491C19.7727 0.714035 19.7727 0.71316 19.7727 0.712285C19.7727 0.71141 19.7727 0.710536 19.7727 0.709661C19.7727 0.708786 19.7727 0.707911 19.7727 0.707036C19.7727 0.706161 19.7727 0.705286 19.7727 0.704411C19.7727 0.703536 19.7727 0.702661 19.7727 0.701786C19.7727 0.700911 19.7727 0.700036 19.7727 0.699161C19.7727 0.698285 19.7727 0.69741 19.7727 0.696535C19.7727 0.69566 19.7727 0.694785 19.7727 0.693909C19.7727 0.693034 19.7727 0.692159 19.7727 0.691284C19.7727 0.690408 19.7727 0.689533 19.7727 0.688658C19.7727 0.687782 19.7727 0.686907 19.7727 0.686031C19.7727 0.685156 19.7727 0.68428 19.7727 0.683405C19.7727 0.682529 19.7727 0.681654 19.7727 0.680778C19.7727 0.679903 19.7727 0.679027 19.7727 0.678151C19.7727 0.677276 19.7727 0.6764 19.7727 0.675524C19.7727 0.674649 19.7727 0.673773 19.7727 0.672897C19.7727 0.672021 19.7727 0.671146 19.7727 0.67027C19.7727 0.669394 19.7727 0.668518 19.7727 0.667642C19.7727 0.666766 19.7727 0.66589 19.7727 0.665015C19.7727 0.664139 19.7727 0.663263 19.7727 0.662387C19.7727 0.661511 19.7727 0.660634 19.7727 0.659758C19.7727 0.658882 19.7727 0.658006 19.7727 0.65713C19.7727 0.656254 19.7727 0.655378 19.7727 0.654501C19.7727 0.653625 19.7727 0.652749 19.7727 0.651873C19.7727 0.650996 19.7727 0.65012 19.7727 0.649244C19.7727 0.648367 19.7727 0.647491 19.7727 0.646615C19.7727 0.645738 19.7727 0.644862 19.7727 0.643985C19.7727 0.643109 19.7727 0.642232 19.7727 0.641356C19.7727 0.640479 19.7727 0.639603 19.7727 0.638726C19.7727 0.637849 19.7727 0.636973 19.7727 0.636096C19.7727 0.635219 19.7727 0.634343 19.7727 0.633466C19.7727 0.632589 19.7727 0.631712 19.7727 0.630835C19.7727 0.629959 19.7727 0.629082 19.7727 0.628205C19.7727 0.627328 19.7727 0.626451 19.7727 0.625574C19.7727 0.624697 19.7727 0.62382 19.7727 0.622943C19.7727 0.622066 19.7727 0.621189 19.7727 0.620312C19.7727 0.619435 19.7727 0.618558 19.7727 0.61768C19.7727 0.616803 19.7727 0.615926 19.7727 0.615049C19.7727 0.614172 19.7727 0.613294 19.7727 0.612417C19.7727 0.61154 19.7727 0.610662 19.7727 0.609785C19.7727 0.608908 19.7727 0.60803 19.7727 0.607153C19.7727 0.606275 19.7727 0.605398 19.7727 0.60452C19.7727 0.603643 19.7727 0.602765 19.7727 0.601888C19.7727 0.60101 19.7727 0.600132 19.7727 0.599255C19.7727 0.598377 19.7727 0.597499 19.7727 0.596622C19.7727 0.595744 19.7727 0.594866 19.7727 0.593988C19.7727 0.593111 19.7727 0.592233 19.7727 0.591355C19.7727 0.590477 19.7727 0.589599 19.7727 0.588721C19.7727 0.587843 19.7727 0.586965 19.7727 0.586087C19.7727 0.585209 19.7727 0.584331 19.7727 0.583453C19.7727 0.582575 19.7727 0.581697 19.7727 0.580819C19.7727 0.57994 19.7727 0.579062 19.7727 0.578184C19.7727 0.577306 19.7727 0.576427 19.7727 0.575549C19.7727 0.574671 19.7727 0.573792 19.7727 0.572914C19.7727 0.572036 19.7727 0.571157 19.7727 0.570279C19.7727 0.5694 19.7727 0.568522 19.7727 0.567643C19.7727 0.566765 19.7727 0.565886 19.7727 0.565008C19.7727 0.564129 19.7727 0.56325 19.7727 0.562372C19.7727 0.561493 19.7727 0.560614 19.7727 0.559735C19.7727 0.558857 19.7727 0.557978 19.7727 0.557099C19.7727 0.55622 19.7727 0.555341 19.7727 0.554462C19.7727 0.553584 19.7727 0.552705 19.7727 0.551826C19.7727 0.550947 19.7727 0.550068 19.7727 0.549189C19.7727 0.54831 19.7727 0.54743 19.7727 0.546551C19.7727 0.545672 19.7727 0.544793 19.7727 0.543914C19.7727 0.543034 19.7727 0.542155 19.7727 0.541276C19.7727 0.540397 19.7727 0.539517 19.7727 0.538638C19.7727 0.537759 19.7727 0.536879 19.7727 0.536C19.7727 0.53512 19.7727 0.534241 19.7727 0.533361C19.7727 0.532482 19.7727 0.531602 19.7727 0.530723C19.7727 0.529843 19.7727 0.528963 19.7727 0.528084C19.7727 0.527204 19.7727 0.526324 19.7727 0.525445C19.7727 0.524565 19.7727 0.523685 19.7727 0.522805C19.7727 0.521925 19.7727 0.521045 19.7727 0.520166C19.7727 0.519286 19.7727 0.518406 19.7727 0.517526C19.7727 0.516646 19.7727 0.515766 19.7727 0.514886C19.7727 0.514005 19.7727 0.513125 19.7727 0.512245C19.7727 0.511365 19.7727 0.510485 19.7727 0.509605C19.7727 0.508724 19.7727 0.507844 19.7727 0.506964C19.7727 0.506084 19.7727 0.505203 19.7727 0.504323C19.7727 0.503442 19.7727 0.502562 19.7727 0.501682C19.7727 0.500801 19.7727 0.499921 19.7727 0.49904C19.7727 0.498159 19.7727 0.497279 19.7727 0.496398C19.7727 0.495518 19.7727 0.494637 19.7727 0.493756C19.7727 0.492875 19.7727 0.491995 19.7727 0.491114C19.7727 0.490233 19.7727 0.489352 19.7727 0.488471C19.7727 0.48759 19.7727 0.48671 19.7727 0.485829C19.7727 0.484948 19.7727 0.484067 19.7727 0.483186C19.7727 0.482305 19.7727 0.481423 19.7727 0.480542C19.7727 0.479661 19.7727 0.47878 19.7727 0.477899C19.7727 0.477018 19.7727 0.476136 19.7727 0.475255C19.7727 0.474374 19.7727 0.473493 19.7727 0.472611C19.7727 0.47173 19.7727 0.470848 19.7727 0.469967C19.7727 0.469085 19.7727 0.468204 19.7727 0.467322C19.7727 0.466441 19.7727 0.465559 19.7727 0.464678C19.7727 0.463796 19.7727 0.462914 19.7727 0.462033C19.7727 0.461151 19.7727 0.460269 19.7727 0.459387C19.7727 0.458506 19.7727 0.457624 19.7727 0.456742C19.7727 0.45586 19.7727 0.454978 19.7727 0.454096C19.7727 0.453214 19.7727 0.452332 19.7727 0.45145C19.7727 0.450568 19.7727 0.449686 19.7727 0.448804C19.7727 0.447922 19.7727 0.44704 19.7727 0.446157C19.7727 0.445275 19.7727 0.444393 19.7727 0.443511C19.7727 0.442628 19.7727 0.441746 19.7727 0.440864C19.7727 0.439981 19.7727 0.439099 19.7727 0.438216C19.7727 0.437334 19.7727 0.436451 19.7727 0.435569C19.7727 0.434686 19.7727 0.433803 19.7727 0.432921C19.7727 0.432038 19.7727 0.431156 19.7727 0.430273C19.7727 0.42939 19.7727 0.428507 19.7727 0.427624C19.7727 0.426742 19.7727 0.425859 19.7727 0.424976C19.7727 0.424093 19.7727 0.42321 19.7727 0.422327C19.7727 0.421444 19.7727 0.420561 19.7727 0.419678C19.7727 0.418795 19.7727 0.417912 19.7727 0.417028C19.7727 0.416145 19.7727 0.415262 19.7727 0.414379C19.7727 0.413496 19.7727 0.412612 19.7727 0.411729C19.7727 0.410845 19.7727 0.409962 19.7727 0.409079C19.7727 0.408195 19.7727 0.407312 19.7727 0.406428C19.7727 0.405545 19.7727 0.404661 19.7727 0.403777C19.7727 0.402894 19.7727 0.40201 19.7727 0.401126C19.7727 0.400243 19.7727 0.399359 19.7727 0.398475C19.7727 0.397591 19.7727 0.396708 19.7727 0.395824C19.7727 0.39494 19.7727 0.394056 19.7727 0.393172C19.7727 0.392288 19.7727 0.391404 19.7727 0.39052C19.7727 0.389636 19.7727 0.388752 19.7727 0.387867C19.7727 0.386983 19.7727 0.386099 19.7727 0.385215C19.7727 0.384331 19.7727 0.383446 19.7727 0.382562C19.7727 0.381678 19.7727 0.380793 19.7727 0.379909C19.7727 0.379024 19.7727 0.37814 19.7727 0.377255C19.7727 0.376371 19.7727 0.375486 19.7727 0.374601C19.7727 0.373717 19.7727 0.372832 19.7727 0.371947C19.7727 0.371063 19.7727 0.370178 19.7727 0.369293C19.7727 0.368408 19.7727 0.367524 19.7727 0.366639C19.7727 0.365754 19.7727 0.364869 19.7727 0.363984C19.7727 0.363099 19.7727 0.362214 19.7727 0.361329C19.7727 0.360444 19.7727 0.359558 19.7727 0.358673C19.7727 0.357788 19.7727 0.356903 19.7727 0.356018C19.7727 0.355132 19.7727 0.354247 19.7727 0.353362C19.7727 0.352476 19.7727 0.351591 19.7727 0.350705C19.7727 0.34982 19.7727 0.348934 19.7727 0.348049C19.7727 0.347163 19.7727 0.346278 19.7727 0.345392C19.7727 0.344506 19.7727 0.343621 19.7727 0.342735C19.7727 0.341849 19.7727 0.340963 19.7727 0.340077C19.7727 0.339192 19.7727 0.338306 19.7727 0.33742C19.7727 0.336534 19.7727 0.335648 19.7727 0.334762C19.7727 0.333876 19.7727 0.33299 19.7727 0.332104C19.7727 0.331217 19.7727 0.330331 19.7727 0.329445C19.7727 0.328559 19.7727 0.327672 19.7727 0.326786C19.7727 0.3259 19.7727 0.325013 19.7727 0.324127C19.7727 0.323241 19.7727 0.322354 19.7727 0.321468C19.7727 0.320581 19.7727 0.319694 19.7727 0.318808C19.7727 0.317921 19.7727 0.317035 19.7727 0.316148C19.7727 0.315261 19.7727 0.314374 19.7727 0.313488C19.7727 0.312601 19.7727 0.311714 19.7727 0.310827C19.7727 0.30994 19.7727 0.309053 19.7727 0.308166C19.7727 0.307279 19.7727 0.306392 19.7727 0.305505C19.7727 0.304618 19.7727 0.303731 19.7727 0.302843C19.7727 0.301956 19.7727 0.301069 19.7727 0.300182C19.7727 0.299294 19.7727 0.298407 19.7727 0.29752C19.7727 0.296632 19.7727 0.295745 19.7727 0.294857C19.7727 0.29397 19.7727 0.293082 19.7727 0.292194C19.7727 0.291307 19.7727 0.290419 19.7727 0.289531C19.7727 0.288644 19.7727 0.287756 19.7727 0.286868C19.7727 0.28598 19.7727 0.285093 19.7727 0.284205C19.7727 0.283317 19.7727 0.282429 19.7727 0.281541C19.7727 0.280653 19.7727 0.279765 19.7727 0.278877C19.7727 0.277988 19.7727 0.2771 19.7727 0.276212C19.7727 0.275324 19.7727 0.274436 19.7727 0.273547C19.7727 0.272659 19.7727 0.271771 19.7727 0.270882C19.7727 0.269994 19.7727 0.269105 19.7727 0.268217C19.7727 0.267328 19.7727 0.26644 19.7727 0.265551C19.7727 0.264662 19.7727 0.263774 19.7727 0.262885C19.7727 0.261996 19.7727 0.261108 19.7727 0.260219C19.7727 0.25933 19.7727 0.258441 19.7727 0.257552C19.7727 0.256663 19.7727 0.255774 19.7727 0.254885C19.7727 0.253996 19.7727 0.253107 19.7727 0.252218C19.7727 0.251329 19.7727 0.250439 19.7727 0.24955C19.7727 0.248661 19.7727 0.247772 19.7727 0.246882C19.7727 0.245993 19.7727 0.245104 19.7727 0.244214C19.7727 0.243325 19.7727 0.242435 19.7727 0.241546C19.7727 0.240656 19.7727 0.239766 19.7727 0.238877C19.7727 0.237987 19.7727 0.237097 19.7727 0.236208C19.7727 0.235318 19.7727 0.234428 19.7727 0.233538C19.7727 0.232648 19.7727 0.231758 19.7727 0.230868C19.7727 0.229978 19.7727 0.229088 19.7727 0.228198C19.7727 0.227308 19.7727 0.226418 19.7727 0.225528C19.7727 0.224638 19.7727 0.223747 19.7727 0.222857C19.7727 0.221967 19.7727 0.221077 19.7727 0.220186C19.7727 0.219296 19.7727 0.218405 19.7727 0.217515C19.7727 0.216624 19.7727 0.215734 19.7727 0.214843C19.7727 0.213952 19.7727 0.213062 19.7727 0.212171C19.7727 0.21128 19.7727 0.21039 19.7727 0.209499C19.7727 0.208608 19.7727 0.207717 19.7727 0.206826C19.7727 0.205935 19.7727 0.205044 19.7727 0.204153C19.7727 0.203262 19.7727 0.202371 19.7727 0.20148C19.7727 0.200589 19.7727 0.199697 19.7727 0.198806C19.7727 0.197915 19.7727 0.197023 19.7727 0.196132C19.7727 0.195241 19.7727 0.194349 19.7727 0.193458C19.7727 0.192566 19.7727 0.191675 19.7727 0.190783C19.7727 0.189892 19.7727 0.189 19.7727 0.188108C19.7727 0.187217 19.7727 0.186325 19.7727 0.185433C19.7727 0.184541 19.7727 0.183649 19.7727 0.182757C19.7727 0.181865 19.7727 0.180973 19.7727 0.180081C19.7727 0.179189 19.7727 0.178297 19.7727 0.177405C19.7727 0.176513 19.7727 0.175621 19.7727 0.174729C19.7727 0.173836 19.7727 0.172944 19.7727 0.172052C19.7727 0.171159 19.7727 0.170267 19.7727 0.169374C19.7727 0.168482 19.7727 0.167589 19.7727 0.166697C19.7727 0.165804 19.7727 0.164911 19.7727 0.164019C19.7727 0.163126 19.7727 0.162233 19.7727 0.16134C19.7727 0.160448 19.7727 0.159555 19.7727 0.158662C19.7727 0.157769 19.7727 0.156876 19.7727 0.155983C19.7727 0.15509 19.7727 0.154197 19.7727 0.153304C19.7727 0.15241 19.7727 0.151517 19.7727 0.150624C19.7727 0.149731 19.7727 0.148837 19.7727 0.147944C19.7727 0.147051 19.7727 0.146157 19.7727 0.145264C19.7727 0.14437 19.7727 0.143477 19.7727 0.142583C19.7727 0.141689 19.7727 0.140796 19.7727 0.139902C19.7727 0.139008 19.7727 0.138115 19.7727 0.137221C19.7727 0.136327 19.7727 0.135433 19.7727 0.134539C19.7727 0.133645 19.7727 0.132751 19.7727 0.131857C19.7727 0.130963 19.7727 0.130069 19.7727 0.129175C19.7727 0.12828 19.7727 0.127386 19.7727 0.126492C19.7727 0.125598 19.7727 0.124703 19.7727 0.123809C19.7727 0.122914 19.7727 0.12202 19.7727 0.121125C19.7727 0.120231 19.7727 0.119336 19.7727 0.118442C19.7727 0.117547 19.7727 0.116652 19.7727 0.115758C19.7727 0.114863 19.7727 0.113968 19.7727 0.113073C19.7727 0.112178 19.7727 0.111283 19.7727 0.110388C19.7727 0.109493 19.7727 0.108598 19.7727 0.107703C19.7727 0.106808 19.7727 0.105913 19.7727 0.105018C19.7727 0.104122 19.7727 0.103227 19.7727 0.102332C19.7727 0.101436 19.7727 0.100541 19.7727 0.0996455C19.7727 0.09875 19.7727 0.0978545 19.7727 0.0969589C19.7727 0.0960633 19.7727 0.0951677 19.7727 0.094272C19.7727 0.0933763 19.7727 0.0924805 19.7727 0.0915847C19.7727 0.0906889 19.7727 0.089793 19.7727 0.088897C19.7727 0.0880011 19.7727 0.0871051 19.7727 0.0862091C19.7727 0.085313 19.7727 0.0844169 19.7727 0.0835207C19.7727 0.0826245 19.7727 0.0817283 19.7727 0.080832C19.7727 0.0799357 19.7727 0.0790393 19.7727 0.0781429C19.7727 0.0772465 19.7727 0.07635 19.7727 0.0754535C19.7727 0.0745569 19.7727 0.0736603 19.7727 0.0727637C19.7727 0.071867 19.7727 0.0709703 19.7727 0.0700735C19.7727 0.0691767 19.7727 0.0682799 19.7727 0.067383C19.7727 0.0664861 19.7727 0.0655891 19.7727 0.0646921C19.7727 0.0637951 19.7727 0.062898 19.7727 0.0620009C19.7727 0.0611037 19.7727 0.0602065 19.7727 0.0593092C19.7727 0.058412 19.7727 0.0575147 19.7727 0.0566173C19.7727 0.0557199 19.7727 0.0548224 19.7727 0.0539249C19.7727 0.0530274 19.7727 0.0521298 19.7727 0.0512322C19.7727 0.0503346 19.7727 0.0494369 19.7727 0.0485391C19.7727 0.0476414 19.7727 0.0467436 19.7727 0.0458457C19.7727 0.0449478 19.7727 0.0440499 19.7727 0.0431519C19.7727 0.0422539 19.7727 0.0413558 19.7727 0.0404577C19.7727 0.0395596 19.7727 0.0386614 19.7727 0.0377631C19.7727 0.0368649 19.7727 0.0359666 19.7727 0.0350682C19.7727 0.0341698 19.7727 0.0332714 19.7727 0.0323729C19.7727 0.0314744 19.7727 0.0305758 19.7727 0.0296772C19.7727 0.0287786 19.7727 0.0278799 19.7727 0.0269812C19.7727 0.0260824 19.7727 0.0251836 19.7727 0.0242848C19.7727 0.0233859 19.7727 0.022487 19.7727 0.021588C19.7727 0.020689 19.7727 0.0197899 19.7727 0.0188908C19.7727 0.0179917 19.7727 0.0170925 19.7727 0.0161932C19.7727 0.015294 19.7727 0.0143947 19.7727 0.0134953C19.7727 0.0125959 19.7727 0.0116965 19.7727 0.010797C19.7727 0.00989751 19.7727 0.00899795 19.7727 0.00809833C19.7727 0.0071987 19.7727 0.00629902 19.7727 0.00539927C19.7727 0.00449952 19.7727 0.0035997 19.7727 0.00269982C19.7727 0.00179995 19.7727 0.000900005 19.7727 0H16.7727ZM17.8212 -0.0813881C17.511 0.0165379 16.9218 0.22064 16.5177 0.78424C16.1213 1.33731 16.1073 1.95529 16.1073 2.27691H19.1073C19.1073 2.17171 19.114 2.16326 19.1063 2.20198C19.0958 2.25481 19.0605 2.38624 18.956 2.53208C18.8502 2.67964 18.733 2.75913 18.6758 2.79131C18.6331 2.81536 18.6305 2.80905 18.7242 2.77948L17.8212 -0.0813881ZM16.1073 2.27691C16.1073 2.2781 16.1073 2.2793 16.1073 2.2805C16.1073 2.2817 16.1073 2.28289 16.1073 2.28409C16.1073 2.28529 16.1073 2.28648 16.1073 2.28768C16.1073 2.28888 16.1073 2.29008 16.1073 2.29127C16.1073 2.29247 16.1073 2.29367 16.1073 2.29487C16.1073 2.29606 16.1073 2.29726 16.1073 2.29846C16.1073 2.29966 16.1073 2.30085 16.1073 2.30205C16.1073 2.30325 16.1073 2.30445 16.1073 2.30564C16.1073 2.30684 16.1073 2.30804 16.1073 2.30923C16.1073 2.31043 16.1073 2.31163 16.1073 2.31283C16.1073 2.31402 16.1073 2.31522 16.1073 2.31642C16.1073 2.31762 16.1073 2.31881 16.1073 2.32001C16.1073 2.32121 16.1073 2.32241 16.1073 2.3236C16.1073 2.3248 16.1073 2.326 16.1073 2.3272C16.1073 2.32839 16.1073 2.32959 16.1073 2.33079C16.1073 2.33199 16.1073 2.33318 16.1073 2.33438C16.1073 2.33558 16.1073 2.33678 16.1073 2.33798C16.1073 2.33917 16.1073 2.34037 16.1073 2.34157C16.1073 2.34277 16.1073 2.34396 16.1073 2.34516C16.1073 2.34636 16.1073 2.34756 16.1073 2.34875C16.1073 2.34995 16.1073 2.35115 16.1073 2.35235C16.1073 2.35354 16.1073 2.35474 16.1073 2.35594C16.1073 2.35714 16.1073 2.35833 16.1073 2.35953C16.1073 2.36073 16.1073 2.36193 16.1073 2.36313C16.1073 2.36432 16.1073 2.36552 16.1073 2.36672C16.1073 2.36792 16.1073 2.36911 16.1073 2.37031C16.1073 2.37151 16.1073 2.37271 16.1073 2.37391C16.1073 2.3751 16.1073 2.3763 16.1073 2.3775C16.1073 2.3787 16.1073 2.37989 16.1073 2.38109C16.1073 2.38229 16.1073 2.38349 16.1073 2.38469C16.1073 2.38588 16.1073 2.38708 16.1073 2.38828C16.1073 2.38948 16.1073 2.39067 16.1073 2.39187C16.1073 2.39307 16.1073 2.39427 16.1073 2.39547C16.1073 2.39666 16.1073 2.39786 16.1073 2.39906C16.1073 2.40026 16.1073 2.40146 16.1073 2.40265C16.1073 2.40385 16.1073 2.40505 16.1073 2.40625C16.1073 2.40745 16.1073 2.40864 16.1073 2.40984C16.1073 2.41104 16.1073 2.41224 16.1073 2.41344C16.1073 2.41463 16.1073 2.41583 16.1073 2.41703C16.1073 2.41823 16.1073 2.41943 16.1073 2.42062C16.1073 2.42182 16.1073 2.42302 16.1073 2.42422C16.1073 2.42542 16.1073 2.42661 16.1073 2.42781C16.1073 2.42901 16.1073 2.43021 16.1073 2.43141C16.1073 2.4326 16.1073 2.4338 16.1073 2.435C16.1073 2.4362 16.1073 2.4374 16.1073 2.43859C16.1073 2.43979 16.1073 2.44099 16.1073 2.44219C16.1073 2.44339 16.1073 2.44459 16.1073 2.44578C16.1073 2.44698 16.1073 2.44818 16.1073 2.44938C16.1073 2.45058 16.1073 2.45177 16.1073 2.45297C16.1073 2.45417 16.1073 2.45537 16.1073 2.45657C16.1073 2.45777 16.1073 2.45896 16.1073 2.46016C16.1073 2.46136 16.1073 2.46256 16.1073 2.46376C16.1073 2.46496 16.1073 2.46615 16.1073 2.46735C16.1073 2.46855 16.1073 2.46975 16.1073 2.47095C16.1073 2.47215 16.1073 2.47334 16.1073 2.47454C16.1073 2.47574 16.1073 2.47694 16.1073 2.47814C16.1073 2.47934 16.1073 2.48053 16.1073 2.48173C16.1073 2.48293 16.1073 2.48413 16.1073 2.48533C16.1073 2.48653 16.1073 2.48772 16.1073 2.48892C16.1073 2.49012 16.1073 2.49132 16.1073 2.49252C16.1073 2.49372 16.1073 2.49491 16.1073 2.49611C16.1073 2.49731 16.1073 2.49851 16.1073 2.49971C16.1073 2.50091 16.1073 2.50211 16.1073 2.5033C16.1073 2.5045 16.1073 2.5057 16.1073 2.5069C16.1073 2.5081 16.1073 2.5093 16.1073 2.5105C16.1073 2.51169 16.1073 2.51289 16.1073 2.51409C16.1073 2.51529 16.1073 2.51649 16.1073 2.51769C16.1073 2.51889 16.1073 2.52008 16.1073 2.52128C16.1073 2.52248 16.1073 2.52368 16.1073 2.52488C16.1073 2.52608 16.1073 2.52728 16.1073 2.52848C16.1073 2.52967 16.1073 2.53087 16.1073 2.53207C16.1073 2.53327 16.1073 2.53447 16.1073 2.53567C16.1073 2.53687 16.1073 2.53807 16.1073 2.53926C16.1073 2.54046 16.1073 2.54166 16.1073 2.54286C16.1073 2.54406 16.1073 2.54526 16.1073 2.54646C16.1073 2.54766 16.1073 2.54885 16.1073 2.55005C16.1073 2.55125 16.1073 2.55245 16.1073 2.55365C16.1073 2.55485 16.1073 2.55605 16.1073 2.55725C16.1073 2.55845 16.1073 2.55964 16.1073 2.56084C16.1073 2.56204 16.1073 2.56324 16.1073 2.56444C16.1073 2.56564 16.1073 2.56684 16.1073 2.56804C16.1073 2.56924 16.1073 2.57044 16.1073 2.57163C16.1073 2.57283 16.1073 2.57403 16.1073 2.57523C16.1073 2.57643 16.1073 2.57763 16.1073 2.57883C16.1073 2.58003 16.1073 2.58123 16.1073 2.58243C16.1073 2.58363 16.1073 2.58482 16.1073 2.58602C16.1073 2.58722 16.1073 2.58842 16.1073 2.58962C16.1073 2.59082 16.1073 2.59202 16.1073 2.59322C16.1073 2.59442 16.1073 2.59562 16.1073 2.59682C16.1073 2.59801 16.1073 2.59921 16.1073 2.60041C16.1073 2.60161 16.1073 2.60281 16.1073 2.60401C16.1073 2.60521 16.1073 2.60641 16.1073 2.60761C16.1073 2.60881 16.1073 2.61001 16.1073 2.61121C16.1073 2.61241 16.1073 2.61361 16.1073 2.6148C16.1073 2.616 16.1073 2.6172 16.1073 2.6184C16.1073 2.6196 16.1073 2.6208 16.1073 2.622C16.1073 2.6232 16.1073 2.6244 16.1073 2.6256C16.1073 2.6268 16.1073 2.628 16.1073 2.6292C16.1073 2.6304 16.1073 2.6316 16.1073 2.6328C16.1073 2.634 16.1073 2.63519 16.1073 2.63639C16.1073 2.63759 16.1073 2.63879 16.1073 2.63999C16.1073 2.64119 16.1073 2.64239 16.1073 2.64359C16.1073 2.64479 16.1073 2.64599 16.1073 2.64719C16.1073 2.64839 16.1073 2.64959 16.1073 2.65079C16.1073 2.65199 16.1073 2.65319 16.1073 2.65439C16.1073 2.65559 16.1073 2.65679 16.1073 2.65799C16.1073 2.65919 16.1073 2.66039 16.1073 2.66159C16.1073 2.66279 16.1073 2.66399 16.1073 2.66519C16.1073 2.66638 16.1073 2.66758 16.1073 2.66878C16.1073 2.66998 16.1073 2.67118 16.1073 2.67238C16.1073 2.67358 16.1073 2.67478 16.1073 2.67598C16.1073 2.67718 16.1073 2.67838 16.1073 2.67958C16.1073 2.68078 16.1073 2.68198 16.1073 2.68318C16.1073 2.68438 16.1073 2.68558 16.1073 2.68678C16.1073 2.68798 16.1073 2.68918 16.1073 2.69038C16.1073 2.69158 16.1073 2.69278 16.1073 2.69398C16.1073 2.69518 16.1073 2.69638 16.1073 2.69758C16.1073 2.69878 16.1073 2.69998 16.1073 2.70118C16.1073 2.70238 16.1073 2.70358 16.1073 2.70478C16.1073 2.70598 16.1073 2.70718 16.1073 2.70838C16.1073 2.70958 16.1073 2.71078 16.1073 2.71198C16.1073 2.71318 16.1073 2.71438 16.1073 2.71558C16.1073 2.71678 16.1073 2.71798 16.1073 2.71918C16.1073 2.72038 16.1073 2.72158 16.1073 2.72278C16.1073 2.72398 16.1073 2.72518 16.1073 2.72638C16.1073 2.72758 16.1073 2.72879 16.1073 2.72999C16.1073 2.73119 16.1073 2.73239 16.1073 2.73359C16.1073 2.73479 16.1073 2.73599 16.1073 2.73719C16.1073 2.73839 16.1073 2.73959 16.1073 2.74079C16.1073 2.74199 16.1073 2.74319 16.1073 2.74439C16.1073 2.74559 16.1073 2.74679 16.1073 2.74799C16.1073 2.74919 16.1073 2.75039 16.1073 2.75159C16.1073 2.75279 16.1073 2.75399 16.1073 2.75519C16.1073 2.75639 16.1073 2.75759 16.1073 2.7588C16.1073 2.76 16.1073 2.7612 16.1073 2.7624C16.1073 2.7636 16.1073 2.7648 16.1073 2.766C16.1073 2.7672 16.1073 2.7684 16.1073 2.7696C16.1073 2.7708 16.1073 2.772 16.1073 2.7732C16.1073 2.7744 16.1073 2.7756 16.1073 2.7768C16.1073 2.77801 16.1073 2.77921 16.1073 2.78041C16.1073 2.78161 16.1073 2.78281 16.1073 2.78401C16.1073 2.78521 16.1073 2.78641 16.1073 2.78761C16.1073 2.78881 16.1073 2.79001 16.1073 2.79121C16.1073 2.79241 16.1073 2.79362 16.1073 2.79482C16.1073 2.79602 16.1073 2.79722 16.1073 2.79842C16.1073 2.79962 16.1073 2.80082 16.1073 2.80202C16.1073 2.80322 16.1073 2.80442 16.1073 2.80562C16.1073 2.80683 16.1073 2.80803 16.1073 2.80923C16.1073 2.81043 16.1073 2.81163 16.1073 2.81283C16.1073 2.81403 16.1073 2.81523 16.1073 2.81643C16.1073 2.81763 16.1073 2.81884 16.1073 2.82004C16.1073 2.82124 16.1073 2.82244 16.1073 2.82364C16.1073 2.82484 16.1073 2.82604 16.1073 2.82724C16.1073 2.82845 16.1073 2.82965 16.1073 2.83085C16.1073 2.83205 16.1073 2.83325 16.1073 2.83445C16.1073 2.83565 16.1073 2.83685 16.1073 2.83806C16.1073 2.83926 16.1073 2.84046 16.1073 2.84166C16.1073 2.84286 16.1073 2.84406 16.1073 2.84526C16.1073 2.84646 16.1073 2.84767 16.1073 2.84887C16.1073 2.85007 16.1073 2.85127 16.1073 2.85247C16.1073 2.85367 16.1073 2.85487 16.1073 2.85608C16.1073 2.85728 16.1073 2.85848 16.1073 2.85968C16.1073 2.86088 16.1073 2.86208 16.1073 2.86328C16.1073 2.86449 16.1073 2.86569 16.1073 2.86689C16.1073 2.86809 16.1073 2.86929 16.1073 2.87049C16.1073 2.8717 16.1073 2.8729 16.1073 2.8741C16.1073 2.8753 16.1073 2.8765 16.1073 2.8777C16.1073 2.87891 16.1073 2.88011 16.1073 2.88131C16.1073 2.88251 16.1073 2.88371 16.1073 2.88491C16.1073 2.88612 16.1073 2.88732 16.1073 2.88852C16.1073 2.88972 16.1073 2.89092 16.1073 2.89213C16.1073 2.89333 16.1073 2.89453 16.1073 2.89573C16.1073 2.89693 16.1073 2.89813 16.1073 2.89934C16.1073 2.90054 16.1073 2.90174 16.1073 2.90294C16.1073 2.90414 16.1073 2.90535 16.1073 2.90655C16.1073 2.90775 16.1073 2.90895 16.1073 2.91015C16.1073 2.91136 16.1073 2.91256 16.1073 2.91376C16.1073 2.91496 16.1073 2.91616 16.1073 2.91737C16.1073 2.91857 16.1073 2.91977 16.1073 2.92097C16.1073 2.92217 16.1073 2.92338 16.1073 2.92458C16.1073 2.92578 16.1073 2.92698 16.1073 2.92819C16.1073 2.92939 16.1073 2.93059 16.1073 2.93179C16.1073 2.93299 16.1073 2.9342 16.1073 2.9354C16.1073 2.9366 16.1073 2.9378 16.1073 2.93901C16.1073 2.94021 16.1073 2.94141 16.1073 2.94261C16.1073 2.94382 16.1073 2.94502 16.1073 2.94622C16.1073 2.94742 16.1073 2.94862 16.1073 2.94983C16.1073 2.95103 16.1073 2.95223 16.1073 2.95343C16.1073 2.95464 16.1073 2.95584 16.1073 2.95704C16.1073 2.95824 16.1073 2.95945 16.1073 2.96065C16.1073 2.96185 16.1073 2.96305 16.1073 2.96426C16.1073 2.96546 16.1073 2.96666 16.1073 2.96787C16.1073 2.96907 16.1073 2.97027 16.1073 2.97147C16.1073 2.97268 16.1073 2.97388 16.1073 2.97508C16.1073 2.97628 16.1073 2.97749 16.1073 2.97869C16.1073 2.97989 16.1073 2.9811 16.1073 2.9823C16.1073 2.9835 16.1073 2.9847 16.1073 2.98591C16.1073 2.98711 16.1073 2.98831 16.1073 2.98952C16.1073 2.99072 16.1073 2.99192 16.1073 2.99312C16.1073 2.99433 16.1073 2.99553 16.1073 2.99673C16.1073 2.99794 16.1073 2.99914 16.1073 3.00034C16.1073 3.00154 16.1073 3.00275 16.1073 3.00395C16.1073 3.00515 16.1073 3.00636 16.1073 3.00756C16.1073 3.00876 16.1073 3.00997 16.1073 3.01117C16.1073 3.01237 16.1073 3.01358 16.1073 3.01478C16.1073 3.01598 16.1073 3.01718 16.1073 3.01839C16.1073 3.01959 16.1073 3.02079 16.1073 3.022C16.1073 3.0232 16.1073 3.0244 16.1073 3.02561C16.1073 3.02681 16.1073 3.02801 16.1073 3.02922C16.1073 3.03042 16.1073 3.03162 16.1073 3.03283C16.1073 3.03403 16.1073 3.03523 16.1073 3.03644C16.1073 3.03764 16.1073 3.03884 16.1073 3.04005C16.1073 3.04125 16.1073 3.04245 16.1073 3.04366C16.1073 3.04486 16.1073 3.04607 16.1073 3.04727C16.1073 3.04847 16.1073 3.04968 16.1073 3.05088C16.1073 3.05208 16.1073 3.05329 16.1073 3.05449C16.1073 3.05569 16.1073 3.0569 16.1073 3.0581C16.1073 3.05931 16.1073 3.06051 16.1073 3.06171C16.1073 3.06292 16.1073 3.06412 16.1073 3.06532C16.1073 3.06653 16.1073 3.06773 16.1073 3.06894C16.1073 3.07014 16.1073 3.07134 16.1073 3.07255C16.1073 3.07375 16.1073 3.07495 16.1073 3.07616C16.1073 3.07736 16.1073 3.07857 16.1073 3.07977C16.1073 3.08097 16.1073 3.08218 16.1073 3.08338C16.1073 3.08459 16.1073 3.08579 16.1073 3.08699C16.1073 3.0882 16.1073 3.0894 16.1073 3.09061C16.1073 3.09181 16.1073 3.09301 16.1073 3.09422C16.1073 3.09542 16.1073 3.09663 16.1073 3.09783C16.1073 3.09903 16.1073 3.10024 16.1073 3.10144C16.1073 3.10265 16.1073 3.10385 16.1073 3.10506C16.1073 3.10626 16.1073 3.10746 16.1073 3.10867C16.1073 3.10987 16.1073 3.11108 16.1073 3.11228C16.1073 3.11349 16.1073 3.11469 16.1073 3.11589C16.1073 3.1171 16.1073 3.1183 16.1073 3.11951C16.1073 3.12071 16.1073 3.12192 16.1073 3.12312C16.1073 3.12433 16.1073 3.12553 16.1073 3.12673C16.1073 3.12794 16.1073 3.12914 16.1073 3.13035C16.1073 3.13155 16.1073 3.13276 16.1073 3.13396C16.1073 3.13517 16.1073 3.13637 16.1073 3.13758C16.1073 3.13878 16.1073 3.13998 16.1073 3.14119C16.1073 3.14239 16.1073 3.1436 16.1073 3.1448C16.1073 3.14601 16.1073 3.14721 16.1073 3.14842C16.1073 3.14962 16.1073 3.15083 16.1073 3.15203C16.1073 3.15324 16.1073 3.15444 16.1073 3.15565C16.1073 3.15685 16.1073 3.15806 16.1073 3.15926C16.1073 3.16047 16.1073 3.16167 16.1073 3.16288C16.1073 3.16408 16.1073 3.16529 16.1073 3.16649C16.1073 3.1677 16.1073 3.1689 16.1073 3.17011C16.1073 3.17131 16.1073 3.17252 16.1073 3.17372C16.1073 3.17493 16.1073 3.17613 16.1073 3.17734C16.1073 3.17854 16.1073 3.17975 16.1073 3.18095C16.1073 3.18216 16.1073 3.18336 16.1073 3.18457C16.1073 3.18577 16.1073 3.18698 16.1073 3.18818C16.1073 3.18939 16.1073 3.19059 16.1073 3.1918C16.1073 3.19301 16.1073 3.19421 16.1073 3.19542C16.1073 3.19662 16.1073 3.19783 16.1073 3.19903C16.1073 3.20024 16.1073 3.20144 16.1073 3.20265C16.1073 3.20385 16.1073 3.20506 16.1073 3.20627C16.1073 3.20747 16.1073 3.20868 16.1073 3.20988C16.1073 3.21109 16.1073 3.21229 16.1073 3.2135C16.1073 3.2147 16.1073 3.21591 16.1073 3.21712C16.1073 3.21832 16.1073 3.21953 16.1073 3.22073C16.1073 3.22194 16.1073 3.22314 16.1073 3.22435C16.1073 3.22556 16.1073 3.22676 16.1073 3.22797C16.1073 3.22917 16.1073 3.23038 16.1073 3.23159C16.1073 3.23279 16.1073 3.234 16.1073 3.2352C16.1073 3.23641 16.1073 3.23761 16.1073 3.23882C16.1073 3.24003 16.1073 3.24123 16.1073 3.24244C16.1073 3.24364 16.1073 3.24485 16.1073 3.24606C16.1073 3.24726 16.1073 3.24847 16.1073 3.24967C16.1073 3.25088 16.1073 3.25209 16.1073 3.25329C16.1073 3.2545 16.1073 3.25571 16.1073 3.25691C16.1073 3.25812 16.1073 3.25932 16.1073 3.26053C16.1073 3.26174 16.1073 3.26294 16.1073 3.26415C16.1073 3.26536 16.1073 3.26656 16.1073 3.26777C16.1073 3.26897 16.1073 3.27018 16.1073 3.27139C16.1073 3.27259 16.1073 3.2738 16.1073 3.27501C16.1073 3.27621 16.1073 3.27742 16.1073 3.27863C16.1073 3.27983 16.1073 3.28104 16.1073 3.28225C16.1073 3.28345 16.1073 3.28466 16.1073 3.28587C16.1073 3.28707 16.1073 3.28828 16.1073 3.28949C16.1073 3.29069 16.1073 3.2919 16.1073 3.29311C16.1073 3.29431 16.1073 3.29552 16.1073 3.29673C16.1073 3.29793 16.1073 3.29914 16.1073 3.30035C16.1073 3.30155 16.1073 3.30276 16.1073 3.30397C16.1073 3.30517 16.1073 3.30638 16.1073 3.30759C16.1073 3.30879 16.1073 3.31 16.1073 3.31121C16.1073 3.31242 16.1073 3.31362 16.1073 3.31483C16.1073 3.31604 16.1073 3.31724 16.1073 3.31845C16.1073 3.31966 16.1073 3.32086 16.1073 3.32207C16.1073 3.32328 16.1073 3.32449 16.1073 3.32569C16.1073 3.3269 16.1073 3.32811 16.1073 3.32932C16.1073 3.33052 16.1073 3.33173 16.1073 3.33294C16.1073 3.33414 16.1073 3.33535 16.1073 3.33656C16.1073 3.33777 16.1073 3.33897 16.1073 3.34018C16.1073 3.34139 16.1073 3.3426 16.1073 3.3438C16.1073 3.34501 16.1073 3.34622 16.1073 3.34743C16.1073 3.34863 16.1073 3.34984 16.1073 3.35105C16.1073 3.35226 16.1073 3.35346 16.1073 3.35467C16.1073 3.35588 16.1073 3.35709 16.1073 3.35829C16.1073 3.3595 16.1073 3.36071 16.1073 3.36192C16.1073 3.36312 16.1073 3.36433 16.1073 3.36554C16.1073 3.36675 16.1073 3.36796 16.1073 3.36916C16.1073 3.37037 16.1073 3.37158 16.1073 3.37279C16.1073 3.37399 16.1073 3.3752 16.1073 3.37641C16.1073 3.37762 16.1073 3.37883 16.1073 3.38003C16.1073 3.38124 16.1073 3.38245 16.1073 3.38366C16.1073 3.38487 16.1073 3.38607 16.1073 3.38728C16.1073 3.38849 16.1073 3.3897 16.1073 3.39091C16.1073 3.39212 16.1073 3.39332 16.1073 3.39453C16.1073 3.39574 16.1073 3.39695 16.1073 3.39816C16.1073 3.39936 16.1073 3.40057 16.1073 3.40178C16.1073 3.40299 16.1073 3.4042 16.1073 3.40541C16.1073 3.40661 16.1073 3.40782 16.1073 3.40903C16.1073 3.41024 16.1073 3.41145 16.1073 3.41266C16.1073 3.41386 16.1073 3.41507 16.1073 3.41628C16.1073 3.41749 16.1073 3.4187 16.1073 3.41991C16.1073 3.42112 16.1073 3.42232 16.1073 3.42353C16.1073 3.42474 16.1073 3.42595 16.1073 3.42716C16.1073 3.42837 16.1073 3.42958 16.1073 3.43079C16.1073 3.43199 16.1073 3.4332 16.1073 3.43441C16.1073 3.43562 16.1073 3.43683 16.1073 3.43804C16.1073 3.43925 16.1073 3.44046 16.1073 3.44167C16.1073 3.44287 16.1073 3.44408 16.1073 3.44529C16.1073 3.4465 16.1073 3.44771 16.1073 3.44892C16.1073 3.45013 16.1073 3.45134 16.1073 3.45255C16.1073 3.45376 16.1073 3.45496 16.1073 3.45617C16.1073 3.45738 16.1073 3.45859 16.1073 3.4598C16.1073 3.46101 16.1073 3.46222 16.1073 3.46343C16.1073 3.46464 16.1073 3.46585 16.1073 3.46706C16.1073 3.46827 16.1073 3.46948 16.1073 3.47068C16.1073 3.47189 16.1073 3.4731 16.1073 3.47431C16.1073 3.47552 16.1073 3.47673 16.1073 3.47794C16.1073 3.47915 16.1073 3.48036 16.1073 3.48157C16.1073 3.48278 16.1073 3.48399 16.1073 3.4852C16.1073 3.48641 16.1073 3.48762 16.1073 3.48883C16.1073 3.49004 16.1073 3.49125 16.1073 3.49246C16.1073 3.49367 16.1073 3.49488 16.1073 3.49609C16.1073 3.4973 16.1073 3.4985 16.1073 3.49971C16.1073 3.50092 16.1073 3.50213 16.1073 3.50334C16.1073 3.50455 16.1073 3.50576 16.1073 3.50697C16.1073 3.50818 16.1073 3.50939 16.1073 3.5106C16.1073 3.51181 16.1073 3.51302 16.1073 3.51423C16.1073 3.51544 16.1073 3.51665 16.1073 3.51786C16.1073 3.51907 16.1073 3.52028 16.1073 3.52149C16.1073 3.5227 16.1073 3.52392 16.1073 3.52513C16.1073 3.52634 16.1073 3.52755 16.1073 3.52876C16.1073 3.52997 16.1073 3.53118 16.1073 3.53239C16.1073 3.5336 16.1073 3.53481 16.1073 3.53602C16.1073 3.53723 16.1073 3.53844 16.1073 3.53965C16.1073 3.54086 16.1073 3.54207 16.1073 3.54328C16.1073 3.54449 16.1073 3.5457 16.1073 3.54691C16.1073 3.54812 16.1073 3.54933 16.1073 3.55054C16.1073 3.55176 16.1073 3.55297 16.1073 3.55418C16.1073 3.55539 16.1073 3.5566 16.1073 3.55781C16.1073 3.55902 16.1073 3.56023 16.1073 3.56144C16.1073 3.56265 16.1073 3.56386 16.1073 3.56507C16.1073 3.56628 16.1073 3.5675 16.1073 3.56871C16.1073 3.56992 16.1073 3.57113 16.1073 3.57234C16.1073 3.57355 16.1073 3.57476 16.1073 3.57597C16.1073 3.57718 16.1073 3.57839 16.1073 3.57961C16.1073 3.58082 16.1073 3.58203 16.1073 3.58324C16.1073 3.58445 16.1073 3.58566 16.1073 3.58687C16.1073 3.58808 16.1073 3.5893 16.1073 3.59051C16.1073 3.59172 16.1073 3.59293 16.1073 3.59414C16.1073 3.59535 16.1073 3.59656 16.1073 3.59778C16.1073 3.59899 16.1073 3.6002 16.1073 3.60141C16.1073 3.60262 16.1073 3.60383 16.1073 3.60504C16.1073 3.60626 16.1073 3.60747 16.1073 3.60868C16.1073 3.60989 16.1073 3.6111 16.1073 3.61231C16.1073 3.61353 16.1073 3.61474 16.1073 3.61595C16.1073 3.61716 16.1073 3.61837 16.1073 3.61958C16.1073 3.6208 16.1073 3.62201 16.1073 3.62322C16.1073 3.62443 16.1073 3.62564 16.1073 3.62686C16.1073 3.62807 16.1073 3.62928 16.1073 3.63049C16.1073 3.6317 16.1073 3.63292 16.1073 3.63413C16.1073 3.63534 16.1073 3.63655 16.1073 3.63776C16.1073 3.63898 16.1073 3.64019 16.1073 3.6414C16.1073 3.64261 16.1073 3.64382 16.1073 3.64504C16.1073 3.64625 16.1073 3.64746 16.1073 3.64867C16.1073 3.64989 16.1073 3.6511 16.1073 3.65231C16.1073 3.65352 16.1073 3.65474 16.1073 3.65595C16.1073 3.65716 16.1073 3.65837 16.1073 3.65959C16.1073 3.6608 16.1073 3.66201 16.1073 3.66322C16.1073 3.66444 16.1073 3.66565 16.1073 3.66686C16.1073 3.66807 16.1073 3.66929 16.1073 3.6705C16.1073 3.67171 16.1073 3.67292 16.1073 3.67414C16.1073 3.67535 16.1073 3.67656 16.1073 3.67778C16.1073 3.67899 16.1073 3.6802 16.1073 3.68141C16.1073 3.68263 16.1073 3.68384 16.1073 3.68505C16.1073 3.68627 16.1073 3.68748 16.1073 3.68869C16.1073 3.6899 16.1073 3.69112 16.1073 3.69233C16.1073 3.69354 16.1073 3.69476 16.1073 3.69597C16.1073 3.69718 16.1073 3.6984 16.1073 3.69961C16.1073 3.70082 16.1073 3.70204 16.1073 3.70325C16.1073 3.70446 16.1073 3.70568 16.1073 3.70689C16.1073 3.7081 16.1073 3.70932 16.1073 3.71053C16.1073 3.71174 16.1073 3.71296 16.1073 3.71417C16.1073 3.71538 16.1073 3.7166 16.1073 3.71781C16.1073 3.71902 16.1073 3.72024 16.1073 3.72145C16.1073 3.72266 16.1073 3.72388 16.1073 3.72509C16.1073 3.72631 16.1073 3.72752 16.1073 3.72873C16.1073 3.72995 16.1073 3.73116 16.1073 3.73237C16.1073 3.73359 16.1073 3.7348 16.1073 3.73602C16.1073 3.73723 16.1073 3.73844 16.1073 3.73966C16.1073 3.74087 16.1073 3.74208 16.1073 3.7433C16.1073 3.74451 16.1073 3.74573 16.1073 3.74694C16.1073 3.74816 16.1073 3.74937 16.1073 3.75058C16.1073 3.7518 16.1073 3.75301 16.1073 3.75423C16.1073 3.75544 16.1073 3.75665 16.1073 3.75787C16.1073 3.75908 16.1073 3.7603 16.1073 3.76151C16.1073 3.76273 16.1073 3.76394 16.1073 3.76515C16.1073 3.76637 16.1073 3.76758 16.1073 3.7688C16.1073 3.77001 16.1073 3.77123 16.1073 3.77244C16.1073 3.77366 16.1073 3.77487 16.1073 3.77608C16.1073 3.7773 16.1073 3.77851 16.1073 3.77973C16.1073 3.78094 16.1073 3.78216 16.1073 3.78337C16.1073 3.78459 16.1073 3.7858 16.1073 3.78702C16.1073 3.78823 16.1073 3.78945 16.1073 3.79066C16.1073 3.79188 16.1073 3.79309 16.1073 3.79431C16.1073 3.79552 16.1073 3.79674 16.1073 3.79795C16.1073 3.79917 16.1073 3.80038 16.1073 3.8016C16.1073 3.80281 16.1073 3.80403 16.1073 3.80524C16.1073 3.80646 16.1073 3.80767 16.1073 3.80889C16.1073 3.8101 16.1073 3.81132 16.1073 3.81253C16.1073 3.81375 16.1073 3.81496 16.1073 3.81618C16.1073 3.81739 16.1073 3.81861 16.1073 3.81983C16.1073 3.82104 16.1073 3.82226 16.1073 3.82347C16.1073 3.82469 16.1073 3.8259 16.1073 3.82712C16.1073 3.82833 16.1073 3.82955 16.1073 3.83076C16.1073 3.83198 16.1073 3.8332 16.1073 3.83441C16.1073 3.83563 16.1073 3.83684 16.1073 3.83806C16.1073 3.83927 16.1073 3.84049 16.1073 3.84171C16.1073 3.84292 16.1073 3.84414 16.1073 3.84535C16.1073 3.84657 16.1073 3.84779 16.1073 3.849C16.1073 3.85022 16.1073 3.85143 16.1073 3.85265C16.1073 3.85387 16.1073 3.85508 16.1073 3.8563C16.1073 3.85751 16.1073 3.85873 16.1073 3.85995C16.1073 3.86116 16.1073 3.86238 16.1073 3.8636C16.1073 3.86481 16.1073 3.86603 16.1073 3.86724C16.1073 3.86846 16.1073 3.86968 16.1073 3.87089C16.1073 3.87211 16.1073 3.87333 16.1073 3.87454C16.1073 3.87576 16.1073 3.87698 16.1073 3.87819C16.1073 3.87941 16.1073 3.88062 16.1073 3.88184C16.1073 3.88306 16.1073 3.88427 16.1073 3.88549C16.1073 3.88671 16.1073 3.88792 16.1073 3.88914C16.1073 3.89036 16.1073 3.89158 16.1073 3.89279C16.1073 3.89401 16.1073 3.89523 16.1073 3.89644C16.1073 3.89766 16.1073 3.89888 16.1073 3.90009C16.1073 3.90131 16.1073 3.90253 16.1073 3.90374C16.1073 3.90496 16.1073 3.90618 16.1073 3.9074C16.1073 3.90861 16.1073 3.90983 16.1073 3.91105C16.1073 3.91226 16.1073 3.91348 16.1073 3.9147C16.1073 3.91592 16.1073 3.91713 16.1073 3.91835C16.1073 3.91957 16.1073 3.92078 16.1073 3.922C16.1073 3.92322 16.1073 3.92444 16.1073 3.92565C16.1073 3.92687 16.1073 3.92809 16.1073 3.92931C16.1073 3.93052 16.1073 3.93174 16.1073 3.93296C16.1073 3.93418 16.1073 3.9354 16.1073 3.93661C16.1073 3.93783 16.1073 3.93905 16.1073 3.94027C16.1073 3.94148 16.1073 3.9427 16.1073 3.94392C16.1073 3.94514 16.1073 3.94636 16.1073 3.94757C16.1073 3.94879 16.1073 3.95001 16.1073 3.95123C16.1073 3.95244 16.1073 3.95366 16.1073 3.95488C16.1073 3.9561 16.1073 3.95732 16.1073 3.95854C16.1073 3.95975 16.1073 3.96097 16.1073 3.96219C16.1073 3.96341 16.1073 3.96463 16.1073 3.96584C16.1073 3.96706 16.1073 3.96828 16.1073 3.9695C16.1073 3.97072 16.1073 3.97194 16.1073 3.97315C16.1073 3.97437 16.1073 3.97559 16.1073 3.97681C16.1073 3.97803 16.1073 3.97925 16.1073 3.98047C16.1073 3.98168 16.1073 3.9829 16.1073 3.98412C16.1073 3.98534 16.1073 3.98656 16.1073 3.98778C16.1073 3.989 16.1073 3.99021 16.1073 3.99143C16.1073 3.99265 16.1073 3.99387 16.1073 3.99509C16.1073 3.99631 16.1073 3.99753 16.1073 3.99875C16.1073 3.99997 16.1073 4.00118 16.1073 4.0024C16.1073 4.00362 16.1073 4.00484 16.1073 4.00606C16.1073 4.00728 16.1073 4.0085 16.1073 4.00972C16.1073 4.01094 16.1073 4.01216 16.1073 4.01338C16.1073 4.0146 16.1073 4.01581 16.1073 4.01703C16.1073 4.01825 16.1073 4.01947 16.1073 4.02069C16.1073 4.02191 16.1073 4.02313 16.1073 4.02435C16.1073 4.02557 16.1073 4.02679 16.1073 4.02801C16.1073 4.02923 16.1073 4.03045 16.1073 4.03167C16.1073 4.03289 16.1073 4.03411 16.1073 4.03533C16.1073 4.03655 16.1073 4.03777 16.1073 4.03899C16.1073 4.04021 16.1073 4.04143 16.1073 4.04264C16.1073 4.04386 16.1073 4.04508 16.1073 4.0463C16.1073 4.04752 16.1073 4.04874 16.1073 4.04996C16.1073 4.05118 16.1073 4.0524 16.1073 4.05362C16.1073 4.05484 16.1073 4.05607 16.1073 4.05728C16.1073 4.05851 16.1073 4.05973 16.1073 4.06095C16.1073 4.06217 16.1073 4.06339 16.1073 4.06461C16.1073 4.06583 16.1073 4.06705 16.1073 4.06827C16.1073 4.06949 16.1073 4.07071 16.1073 4.07193C16.1073 4.07315 16.1073 4.07437 16.1073 4.07559C16.1073 4.07681 16.1073 4.07803 16.1073 4.07925C16.1073 4.08047 16.1073 4.08169 16.1073 4.08291C16.1073 4.08413 16.1073 4.08536 16.1073 4.08658C16.1073 4.0878 16.1073 4.08902 16.1073 4.09024C16.1073 4.09146 16.1073 4.09268 16.1073 4.0939C16.1073 4.09512 16.1073 4.09634 16.1073 4.09756C16.1073 4.09879 16.1073 4.10001 16.1073 4.10123C16.1073 4.10245 16.1073 4.10367 16.1073 4.10489C16.1073 4.10611 16.1073 4.10733 16.1073 4.10855C16.1073 4.10978 16.1073 4.111 16.1073 4.11222C16.1073 4.11344 16.1073 4.11466 16.1073 4.11588C16.1073 4.1171 16.1073 4.11833 16.1073 4.11955C16.1073 4.12077 16.1073 4.12199 16.1073 4.12321C16.1073 4.12443 16.1073 4.12565 16.1073 4.12688C16.1073 4.1281 16.1073 4.12932 16.1073 4.13054H19.1073C19.1073 4.12932 19.1073 4.1281 19.1073 4.12688C19.1073 4.12565 19.1073 4.12443 19.1073 4.12321C19.1073 4.12199 19.1073 4.12077 19.1073 4.11955C19.1073 4.11833 19.1073 4.1171 19.1073 4.11588C19.1073 4.11466 19.1073 4.11344 19.1073 4.11222C19.1073 4.111 19.1073 4.10978 19.1073 4.10855C19.1073 4.10733 19.1073 4.10611 19.1073 4.10489C19.1073 4.10367 19.1073 4.10245 19.1073 4.10123C19.1073 4.10001 19.1073 4.09879 19.1073 4.09756C19.1073 4.09634 19.1073 4.09512 19.1073 4.0939C19.1073 4.09268 19.1073 4.09146 19.1073 4.09024C19.1073 4.08902 19.1073 4.0878 19.1073 4.08658C19.1073 4.08536 19.1073 4.08413 19.1073 4.08291C19.1073 4.08169 19.1073 4.08047 19.1073 4.07925C19.1073 4.07803 19.1073 4.07681 19.1073 4.07559C19.1073 4.07437 19.1073 4.07315 19.1073 4.07193C19.1073 4.07071 19.1073 4.06949 19.1073 4.06827C19.1073 4.06705 19.1073 4.06583 19.1073 4.06461C19.1073 4.06339 19.1073 4.06217 19.1073 4.06095C19.1073 4.05973 19.1073 4.05851 19.1073 4.05728C19.1073 4.05607 19.1073 4.05484 19.1073 4.05362C19.1073 4.0524 19.1073 4.05118 19.1073 4.04996C19.1073 4.04874 19.1073 4.04752 19.1073 4.0463C19.1073 4.04508 19.1073 4.04386 19.1073 4.04264C19.1073 4.04143 19.1073 4.04021 19.1073 4.03899C19.1073 4.03777 19.1073 4.03655 19.1073 4.03533C19.1073 4.03411 19.1073 4.03289 19.1073 4.03167C19.1073 4.03045 19.1073 4.02923 19.1073 4.02801C19.1073 4.02679 19.1073 4.02557 19.1073 4.02435C19.1073 4.02313 19.1073 4.02191 19.1073 4.02069C19.1073 4.01947 19.1073 4.01825 19.1073 4.01703C19.1073 4.01581 19.1073 4.0146 19.1073 4.01338C19.1073 4.01216 19.1073 4.01094 19.1073 4.00972C19.1073 4.0085 19.1073 4.00728 19.1073 4.00606C19.1073 4.00484 19.1073 4.00362 19.1073 4.0024C19.1073 4.00118 19.1073 3.99997 19.1073 3.99875C19.1073 3.99753 19.1073 3.99631 19.1073 3.99509C19.1073 3.99387 19.1073 3.99265 19.1073 3.99143C19.1073 3.99021 19.1073 3.989 19.1073 3.98778C19.1073 3.98656 19.1073 3.98534 19.1073 3.98412C19.1073 3.9829 19.1073 3.98168 19.1073 3.98047C19.1073 3.97925 19.1073 3.97803 19.1073 3.97681C19.1073 3.97559 19.1073 3.97437 19.1073 3.97315C19.1073 3.97194 19.1073 3.97072 19.1073 3.9695C19.1073 3.96828 19.1073 3.96706 19.1073 3.96584C19.1073 3.96463 19.1073 3.96341 19.1073 3.96219C19.1073 3.96097 19.1073 3.95975 19.1073 3.95854C19.1073 3.95732 19.1073 3.9561 19.1073 3.95488C19.1073 3.95366 19.1073 3.95244 19.1073 3.95123C19.1073 3.95001 19.1073 3.94879 19.1073 3.94757C19.1073 3.94636 19.1073 3.94514 19.1073 3.94392C19.1073 3.9427 19.1073 3.94148 19.1073 3.94027C19.1073 3.93905 19.1073 3.93783 19.1073 3.93661C19.1073 3.9354 19.1073 3.93418 19.1073 3.93296C19.1073 3.93174 19.1073 3.93052 19.1073 3.92931C19.1073 3.92809 19.1073 3.92687 19.1073 3.92565C19.1073 3.92444 19.1073 3.92322 19.1073 3.922C19.1073 3.92078 19.1073 3.91957 19.1073 3.91835C19.1073 3.91713 19.1073 3.91592 19.1073 3.9147C19.1073 3.91348 19.1073 3.91226 19.1073 3.91105C19.1073 3.90983 19.1073 3.90861 19.1073 3.9074C19.1073 3.90618 19.1073 3.90496 19.1073 3.90374C19.1073 3.90253 19.1073 3.90131 19.1073 3.90009C19.1073 3.89888 19.1073 3.89766 19.1073 3.89644C19.1073 3.89523 19.1073 3.89401 19.1073 3.89279C19.1073 3.89158 19.1073 3.89036 19.1073 3.88914C19.1073 3.88792 19.1073 3.88671 19.1073 3.88549C19.1073 3.88427 19.1073 3.88306 19.1073 3.88184C19.1073 3.88062 19.1073 3.87941 19.1073 3.87819C19.1073 3.87698 19.1073 3.87576 19.1073 3.87454C19.1073 3.87333 19.1073 3.87211 19.1073 3.87089C19.1073 3.86968 19.1073 3.86846 19.1073 3.86724C19.1073 3.86603 19.1073 3.86481 19.1073 3.8636C19.1073 3.86238 19.1073 3.86116 19.1073 3.85995C19.1073 3.85873 19.1073 3.85751 19.1073 3.8563C19.1073 3.85508 19.1073 3.85387 19.1073 3.85265C19.1073 3.85143 19.1073 3.85022 19.1073 3.849C19.1073 3.84779 19.1073 3.84657 19.1073 3.84535C19.1073 3.84414 19.1073 3.84292 19.1073 3.84171C19.1073 3.84049 19.1073 3.83927 19.1073 3.83806C19.1073 3.83684 19.1073 3.83563 19.1073 3.83441C19.1073 3.8332 19.1073 3.83198 19.1073 3.83076C19.1073 3.82955 19.1073 3.82833 19.1073 3.82712C19.1073 3.8259 19.1073 3.82469 19.1073 3.82347C19.1073 3.82226 19.1073 3.82104 19.1073 3.81983C19.1073 3.81861 19.1073 3.81739 19.1073 3.81618C19.1073 3.81496 19.1073 3.81375 19.1073 3.81253C19.1073 3.81132 19.1073 3.8101 19.1073 3.80889C19.1073 3.80767 19.1073 3.80646 19.1073 3.80524C19.1073 3.80403 19.1073 3.80281 19.1073 3.8016C19.1073 3.80038 19.1073 3.79917 19.1073 3.79795C19.1073 3.79674 19.1073 3.79552 19.1073 3.79431C19.1073 3.79309 19.1073 3.79188 19.1073 3.79066C19.1073 3.78945 19.1073 3.78823 19.1073 3.78702C19.1073 3.7858 19.1073 3.78459 19.1073 3.78337C19.1073 3.78216 19.1073 3.78094 19.1073 3.77973C19.1073 3.77851 19.1073 3.7773 19.1073 3.77608C19.1073 3.77487 19.1073 3.77366 19.1073 3.77244C19.1073 3.77123 19.1073 3.77001 19.1073 3.7688C19.1073 3.76758 19.1073 3.76637 19.1073 3.76515C19.1073 3.76394 19.1073 3.76273 19.1073 3.76151C19.1073 3.7603 19.1073 3.75908 19.1073 3.75787C19.1073 3.75665 19.1073 3.75544 19.1073 3.75423C19.1073 3.75301 19.1073 3.7518 19.1073 3.75058C19.1073 3.74937 19.1073 3.74816 19.1073 3.74694C19.1073 3.74573 19.1073 3.74451 19.1073 3.7433C19.1073 3.74208 19.1073 3.74087 19.1073 3.73966C19.1073 3.73844 19.1073 3.73723 19.1073 3.73602C19.1073 3.7348 19.1073 3.73359 19.1073 3.73237C19.1073 3.73116 19.1073 3.72995 19.1073 3.72873C19.1073 3.72752 19.1073 3.72631 19.1073 3.72509C19.1073 3.72388 19.1073 3.72266 19.1073 3.72145C19.1073 3.72024 19.1073 3.71902 19.1073 3.71781C19.1073 3.7166 19.1073 3.71538 19.1073 3.71417C19.1073 3.71296 19.1073 3.71174 19.1073 3.71053C19.1073 3.70932 19.1073 3.7081 19.1073 3.70689C19.1073 3.70568 19.1073 3.70446 19.1073 3.70325C19.1073 3.70204 19.1073 3.70082 19.1073 3.69961C19.1073 3.6984 19.1073 3.69718 19.1073 3.69597C19.1073 3.69476 19.1073 3.69354 19.1073 3.69233C19.1073 3.69112 19.1073 3.6899 19.1073 3.68869C19.1073 3.68748 19.1073 3.68627 19.1073 3.68505C19.1073 3.68384 19.1073 3.68263 19.1073 3.68141C19.1073 3.6802 19.1073 3.67899 19.1073 3.67778C19.1073 3.67656 19.1073 3.67535 19.1073 3.67414C19.1073 3.67292 19.1073 3.67171 19.1073 3.6705C19.1073 3.66929 19.1073 3.66807 19.1073 3.66686C19.1073 3.66565 19.1073 3.66444 19.1073 3.66322C19.1073 3.66201 19.1073 3.6608 19.1073 3.65959C19.1073 3.65837 19.1073 3.65716 19.1073 3.65595C19.1073 3.65474 19.1073 3.65352 19.1073 3.65231C19.1073 3.6511 19.1073 3.64989 19.1073 3.64867C19.1073 3.64746 19.1073 3.64625 19.1073 3.64504C19.1073 3.64382 19.1073 3.64261 19.1073 3.6414C19.1073 3.64019 19.1073 3.63898 19.1073 3.63776C19.1073 3.63655 19.1073 3.63534 19.1073 3.63413C19.1073 3.63292 19.1073 3.6317 19.1073 3.63049C19.1073 3.62928 19.1073 3.62807 19.1073 3.62686C19.1073 3.62564 19.1073 3.62443 19.1073 3.62322C19.1073 3.62201 19.1073 3.6208 19.1073 3.61958C19.1073 3.61837 19.1073 3.61716 19.1073 3.61595C19.1073 3.61474 19.1073 3.61353 19.1073 3.61231C19.1073 3.6111 19.1073 3.60989 19.1073 3.60868C19.1073 3.60747 19.1073 3.60626 19.1073 3.60504C19.1073 3.60383 19.1073 3.60262 19.1073 3.60141C19.1073 3.6002 19.1073 3.59899 19.1073 3.59778C19.1073 3.59656 19.1073 3.59535 19.1073 3.59414C19.1073 3.59293 19.1073 3.59172 19.1073 3.59051C19.1073 3.5893 19.1073 3.58808 19.1073 3.58687C19.1073 3.58566 19.1073 3.58445 19.1073 3.58324C19.1073 3.58203 19.1073 3.58082 19.1073 3.57961C19.1073 3.57839 19.1073 3.57718 19.1073 3.57597C19.1073 3.57476 19.1073 3.57355 19.1073 3.57234C19.1073 3.57113 19.1073 3.56992 19.1073 3.56871C19.1073 3.5675 19.1073 3.56628 19.1073 3.56507C19.1073 3.56386 19.1073 3.56265 19.1073 3.56144C19.1073 3.56023 19.1073 3.55902 19.1073 3.55781C19.1073 3.5566 19.1073 3.55539 19.1073 3.55418C19.1073 3.55297 19.1073 3.55176 19.1073 3.55054C19.1073 3.54933 19.1073 3.54812 19.1073 3.54691C19.1073 3.5457 19.1073 3.54449 19.1073 3.54328C19.1073 3.54207 19.1073 3.54086 19.1073 3.53965C19.1073 3.53844 19.1073 3.53723 19.1073 3.53602C19.1073 3.53481 19.1073 3.5336 19.1073 3.53239C19.1073 3.53118 19.1073 3.52997 19.1073 3.52876C19.1073 3.52755 19.1073 3.52634 19.1073 3.52513C19.1073 3.52392 19.1073 3.5227 19.1073 3.52149C19.1073 3.52028 19.1073 3.51907 19.1073 3.51786C19.1073 3.51665 19.1073 3.51544 19.1073 3.51423C19.1073 3.51302 19.1073 3.51181 19.1073 3.5106C19.1073 3.50939 19.1073 3.50818 19.1073 3.50697C19.1073 3.50576 19.1073 3.50455 19.1073 3.50334C19.1073 3.50213 19.1073 3.50092 19.1073 3.49971C19.1073 3.4985 19.1073 3.4973 19.1073 3.49609C19.1073 3.49488 19.1073 3.49367 19.1073 3.49246C19.1073 3.49125 19.1073 3.49004 19.1073 3.48883C19.1073 3.48762 19.1073 3.48641 19.1073 3.4852C19.1073 3.48399 19.1073 3.48278 19.1073 3.48157C19.1073 3.48036 19.1073 3.47915 19.1073 3.47794C19.1073 3.47673 19.1073 3.47552 19.1073 3.47431C19.1073 3.4731 19.1073 3.47189 19.1073 3.47068C19.1073 3.46948 19.1073 3.46827 19.1073 3.46706C19.1073 3.46585 19.1073 3.46464 19.1073 3.46343C19.1073 3.46222 19.1073 3.46101 19.1073 3.4598C19.1073 3.45859 19.1073 3.45738 19.1073 3.45617C19.1073 3.45496 19.1073 3.45376 19.1073 3.45255C19.1073 3.45134 19.1073 3.45013 19.1073 3.44892C19.1073 3.44771 19.1073 3.4465 19.1073 3.44529C19.1073 3.44408 19.1073 3.44287 19.1073 3.44167C19.1073 3.44046 19.1073 3.43925 19.1073 3.43804C19.1073 3.43683 19.1073 3.43562 19.1073 3.43441C19.1073 3.4332 19.1073 3.43199 19.1073 3.43079C19.1073 3.42958 19.1073 3.42837 19.1073 3.42716C19.1073 3.42595 19.1073 3.42474 19.1073 3.42353C19.1073 3.42232 19.1073 3.42112 19.1073 3.41991C19.1073 3.4187 19.1073 3.41749 19.1073 3.41628C19.1073 3.41507 19.1073 3.41386 19.1073 3.41266C19.1073 3.41145 19.1073 3.41024 19.1073 3.40903C19.1073 3.40782 19.1073 3.40661 19.1073 3.40541C19.1073 3.4042 19.1073 3.40299 19.1073 3.40178C19.1073 3.40057 19.1073 3.39936 19.1073 3.39816C19.1073 3.39695 19.1073 3.39574 19.1073 3.39453C19.1073 3.39332 19.1073 3.39212 19.1073 3.39091C19.1073 3.3897 19.1073 3.38849 19.1073 3.38728C19.1073 3.38607 19.1073 3.38487 19.1073 3.38366C19.1073 3.38245 19.1073 3.38124 19.1073 3.38003C19.1073 3.37883 19.1073 3.37762 19.1073 3.37641C19.1073 3.3752 19.1073 3.37399 19.1073 3.37279C19.1073 3.37158 19.1073 3.37037 19.1073 3.36916C19.1073 3.36796 19.1073 3.36675 19.1073 3.36554C19.1073 3.36433 19.1073 3.36312 19.1073 3.36192C19.1073 3.36071 19.1073 3.3595 19.1073 3.35829C19.1073 3.35709 19.1073 3.35588 19.1073 3.35467C19.1073 3.35346 19.1073 3.35226 19.1073 3.35105C19.1073 3.34984 19.1073 3.34863 19.1073 3.34743C19.1073 3.34622 19.1073 3.34501 19.1073 3.3438C19.1073 3.3426 19.1073 3.34139 19.1073 3.34018C19.1073 3.33897 19.1073 3.33777 19.1073 3.33656C19.1073 3.33535 19.1073 3.33414 19.1073 3.33294C19.1073 3.33173 19.1073 3.33052 19.1073 3.32932C19.1073 3.32811 19.1073 3.3269 19.1073 3.32569C19.1073 3.32449 19.1073 3.32328 19.1073 3.32207C19.1073 3.32086 19.1073 3.31966 19.1073 3.31845C19.1073 3.31724 19.1073 3.31604 19.1073 3.31483C19.1073 3.31362 19.1073 3.31242 19.1073 3.31121C19.1073 3.31 19.1073 3.30879 19.1073 3.30759C19.1073 3.30638 19.1073 3.30517 19.1073 3.30397C19.1073 3.30276 19.1073 3.30155 19.1073 3.30035C19.1073 3.29914 19.1073 3.29793 19.1073 3.29673C19.1073 3.29552 19.1073 3.29431 19.1073 3.29311C19.1073 3.2919 19.1073 3.29069 19.1073 3.28949C19.1073 3.28828 19.1073 3.28707 19.1073 3.28587C19.1073 3.28466 19.1073 3.28345 19.1073 3.28225C19.1073 3.28104 19.1073 3.27983 19.1073 3.27863C19.1073 3.27742 19.1073 3.27621 19.1073 3.27501C19.1073 3.2738 19.1073 3.27259 19.1073 3.27139C19.1073 3.27018 19.1073 3.26897 19.1073 3.26777C19.1073 3.26656 19.1073 3.26536 19.1073 3.26415C19.1073 3.26294 19.1073 3.26174 19.1073 3.26053C19.1073 3.25932 19.1073 3.25812 19.1073 3.25691C19.1073 3.25571 19.1073 3.2545 19.1073 3.25329C19.1073 3.25209 19.1073 3.25088 19.1073 3.24967C19.1073 3.24847 19.1073 3.24726 19.1073 3.24606C19.1073 3.24485 19.1073 3.24364 19.1073 3.24244C19.1073 3.24123 19.1073 3.24003 19.1073 3.23882C19.1073 3.23761 19.1073 3.23641 19.1073 3.2352C19.1073 3.234 19.1073 3.23279 19.1073 3.23159C19.1073 3.23038 19.1073 3.22917 19.1073 3.22797C19.1073 3.22676 19.1073 3.22556 19.1073 3.22435C19.1073 3.22314 19.1073 3.22194 19.1073 3.22073C19.1073 3.21953 19.1073 3.21832 19.1073 3.21712C19.1073 3.21591 19.1073 3.2147 19.1073 3.2135C19.1073 3.21229 19.1073 3.21109 19.1073 3.20988C19.1073 3.20868 19.1073 3.20747 19.1073 3.20627C19.1073 3.20506 19.1073 3.20385 19.1073 3.20265C19.1073 3.20144 19.1073 3.20024 19.1073 3.19903C19.1073 3.19783 19.1073 3.19662 19.1073 3.19542C19.1073 3.19421 19.1073 3.19301 19.1073 3.1918C19.1073 3.19059 19.1073 3.18939 19.1073 3.18818C19.1073 3.18698 19.1073 3.18577 19.1073 3.18457C19.1073 3.18336 19.1073 3.18216 19.1073 3.18095C19.1073 3.17975 19.1073 3.17854 19.1073 3.17734C19.1073 3.17613 19.1073 3.17493 19.1073 3.17372C19.1073 3.17252 19.1073 3.17131 19.1073 3.17011C19.1073 3.1689 19.1073 3.1677 19.1073 3.16649C19.1073 3.16529 19.1073 3.16408 19.1073 3.16288C19.1073 3.16167 19.1073 3.16047 19.1073 3.15926C19.1073 3.15806 19.1073 3.15685 19.1073 3.15565C19.1073 3.15444 19.1073 3.15324 19.1073 3.15203C19.1073 3.15083 19.1073 3.14962 19.1073 3.14842C19.1073 3.14721 19.1073 3.14601 19.1073 3.1448C19.1073 3.1436 19.1073 3.14239 19.1073 3.14119C19.1073 3.13998 19.1073 3.13878 19.1073 3.13758C19.1073 3.13637 19.1073 3.13517 19.1073 3.13396C19.1073 3.13276 19.1073 3.13155 19.1073 3.13035C19.1073 3.12914 19.1073 3.12794 19.1073 3.12673C19.1073 3.12553 19.1073 3.12433 19.1073 3.12312C19.1073 3.12192 19.1073 3.12071 19.1073 3.11951C19.1073 3.1183 19.1073 3.1171 19.1073 3.11589C19.1073 3.11469 19.1073 3.11349 19.1073 3.11228C19.1073 3.11108 19.1073 3.10987 19.1073 3.10867C19.1073 3.10746 19.1073 3.10626 19.1073 3.10506C19.1073 3.10385 19.1073 3.10265 19.1073 3.10144C19.1073 3.10024 19.1073 3.09903 19.1073 3.09783C19.1073 3.09663 19.1073 3.09542 19.1073 3.09422C19.1073 3.09301 19.1073 3.09181 19.1073 3.09061C19.1073 3.0894 19.1073 3.0882 19.1073 3.08699C19.1073 3.08579 19.1073 3.08459 19.1073 3.08338C19.1073 3.08218 19.1073 3.08097 19.1073 3.07977C19.1073 3.07857 19.1073 3.07736 19.1073 3.07616C19.1073 3.07495 19.1073 3.07375 19.1073 3.07255C19.1073 3.07134 19.1073 3.07014 19.1073 3.06894C19.1073 3.06773 19.1073 3.06653 19.1073 3.06532C19.1073 3.06412 19.1073 3.06292 19.1073 3.06171C19.1073 3.06051 19.1073 3.05931 19.1073 3.0581C19.1073 3.0569 19.1073 3.05569 19.1073 3.05449C19.1073 3.05329 19.1073 3.05208 19.1073 3.05088C19.1073 3.04968 19.1073 3.04847 19.1073 3.04727C19.1073 3.04607 19.1073 3.04486 19.1073 3.04366C19.1073 3.04245 19.1073 3.04125 19.1073 3.04005C19.1073 3.03884 19.1073 3.03764 19.1073 3.03644C19.1073 3.03523 19.1073 3.03403 19.1073 3.03283C19.1073 3.03162 19.1073 3.03042 19.1073 3.02922C19.1073 3.02801 19.1073 3.02681 19.1073 3.02561C19.1073 3.0244 19.1073 3.0232 19.1073 3.022C19.1073 3.02079 19.1073 3.01959 19.1073 3.01839C19.1073 3.01718 19.1073 3.01598 19.1073 3.01478C19.1073 3.01358 19.1073 3.01237 19.1073 3.01117C19.1073 3.00997 19.1073 3.00876 19.1073 3.00756C19.1073 3.00636 19.1073 3.00515 19.1073 3.00395C19.1073 3.00275 19.1073 3.00154 19.1073 3.00034C19.1073 2.99914 19.1073 2.99794 19.1073 2.99673C19.1073 2.99553 19.1073 2.99433 19.1073 2.99312C19.1073 2.99192 19.1073 2.99072 19.1073 2.98952C19.1073 2.98831 19.1073 2.98711 19.1073 2.98591C19.1073 2.9847 19.1073 2.9835 19.1073 2.9823C19.1073 2.9811 19.1073 2.97989 19.1073 2.97869C19.1073 2.97749 19.1073 2.97628 19.1073 2.97508C19.1073 2.97388 19.1073 2.97268 19.1073 2.97147C19.1073 2.97027 19.1073 2.96907 19.1073 2.96787C19.1073 2.96666 19.1073 2.96546 19.1073 2.96426C19.1073 2.96305 19.1073 2.96185 19.1073 2.96065C19.1073 2.95945 19.1073 2.95824 19.1073 2.95704C19.1073 2.95584 19.1073 2.95464 19.1073 2.95343C19.1073 2.95223 19.1073 2.95103 19.1073 2.94983C19.1073 2.94862 19.1073 2.94742 19.1073 2.94622C19.1073 2.94502 19.1073 2.94382 19.1073 2.94261C19.1073 2.94141 19.1073 2.94021 19.1073 2.93901C19.1073 2.9378 19.1073 2.9366 19.1073 2.9354C19.1073 2.9342 19.1073 2.93299 19.1073 2.93179C19.1073 2.93059 19.1073 2.92939 19.1073 2.92819C19.1073 2.92698 19.1073 2.92578 19.1073 2.92458C19.1073 2.92338 19.1073 2.92217 19.1073 2.92097C19.1073 2.91977 19.1073 2.91857 19.1073 2.91737C19.1073 2.91616 19.1073 2.91496 19.1073 2.91376C19.1073 2.91256 19.1073 2.91136 19.1073 2.91015C19.1073 2.90895 19.1073 2.90775 19.1073 2.90655C19.1073 2.90535 19.1073 2.90414 19.1073 2.90294C19.1073 2.90174 19.1073 2.90054 19.1073 2.89934C19.1073 2.89813 19.1073 2.89693 19.1073 2.89573C19.1073 2.89453 19.1073 2.89333 19.1073 2.89213C19.1073 2.89092 19.1073 2.88972 19.1073 2.88852C19.1073 2.88732 19.1073 2.88612 19.1073 2.88491C19.1073 2.88371 19.1073 2.88251 19.1073 2.88131C19.1073 2.88011 19.1073 2.87891 19.1073 2.8777C19.1073 2.8765 19.1073 2.8753 19.1073 2.8741C19.1073 2.8729 19.1073 2.8717 19.1073 2.87049C19.1073 2.86929 19.1073 2.86809 19.1073 2.86689C19.1073 2.86569 19.1073 2.86449 19.1073 2.86328C19.1073 2.86208 19.1073 2.86088 19.1073 2.85968C19.1073 2.85848 19.1073 2.85728 19.1073 2.85608C19.1073 2.85487 19.1073 2.85367 19.1073 2.85247C19.1073 2.85127 19.1073 2.85007 19.1073 2.84887C19.1073 2.84767 19.1073 2.84646 19.1073 2.84526C19.1073 2.84406 19.1073 2.84286 19.1073 2.84166C19.1073 2.84046 19.1073 2.83926 19.1073 2.83806C19.1073 2.83685 19.1073 2.83565 19.1073 2.83445C19.1073 2.83325 19.1073 2.83205 19.1073 2.83085C19.1073 2.82965 19.1073 2.82845 19.1073 2.82724C19.1073 2.82604 19.1073 2.82484 19.1073 2.82364C19.1073 2.82244 19.1073 2.82124 19.1073 2.82004C19.1073 2.81884 19.1073 2.81763 19.1073 2.81643C19.1073 2.81523 19.1073 2.81403 19.1073 2.81283C19.1073 2.81163 19.1073 2.81043 19.1073 2.80923C19.1073 2.80803 19.1073 2.80683 19.1073 2.80562C19.1073 2.80442 19.1073 2.80322 19.1073 2.80202C19.1073 2.80082 19.1073 2.79962 19.1073 2.79842C19.1073 2.79722 19.1073 2.79602 19.1073 2.79482C19.1073 2.79362 19.1073 2.79241 19.1073 2.79121C19.1073 2.79001 19.1073 2.78881 19.1073 2.78761C19.1073 2.78641 19.1073 2.78521 19.1073 2.78401C19.1073 2.78281 19.1073 2.78161 19.1073 2.78041C19.1073 2.77921 19.1073 2.77801 19.1073 2.7768C19.1073 2.7756 19.1073 2.7744 19.1073 2.7732C19.1073 2.772 19.1073 2.7708 19.1073 2.7696C19.1073 2.7684 19.1073 2.7672 19.1073 2.766C19.1073 2.7648 19.1073 2.7636 19.1073 2.7624C19.1073 2.7612 19.1073 2.76 19.1073 2.7588C19.1073 2.75759 19.1073 2.75639 19.1073 2.75519C19.1073 2.75399 19.1073 2.75279 19.1073 2.75159C19.1073 2.75039 19.1073 2.74919 19.1073 2.74799C19.1073 2.74679 19.1073 2.74559 19.1073 2.74439C19.1073 2.74319 19.1073 2.74199 19.1073 2.74079C19.1073 2.73959 19.1073 2.73839 19.1073 2.73719C19.1073 2.73599 19.1073 2.73479 19.1073 2.73359C19.1073 2.73239 19.1073 2.73119 19.1073 2.72999C19.1073 2.72879 19.1073 2.72758 19.1073 2.72638C19.1073 2.72518 19.1073 2.72398 19.1073 2.72278C19.1073 2.72158 19.1073 2.72038 19.1073 2.71918C19.1073 2.71798 19.1073 2.71678 19.1073 2.71558C19.1073 2.71438 19.1073 2.71318 19.1073 2.71198C19.1073 2.71078 19.1073 2.70958 19.1073 2.70838C19.1073 2.70718 19.1073 2.70598 19.1073 2.70478C19.1073 2.70358 19.1073 2.70238 19.1073 2.70118C19.1073 2.69998 19.1073 2.69878 19.1073 2.69758C19.1073 2.69638 19.1073 2.69518 19.1073 2.69398C19.1073 2.69278 19.1073 2.69158 19.1073 2.69038C19.1073 2.68918 19.1073 2.68798 19.1073 2.68678C19.1073 2.68558 19.1073 2.68438 19.1073 2.68318C19.1073 2.68198 19.1073 2.68078 19.1073 2.67958C19.1073 2.67838 19.1073 2.67718 19.1073 2.67598C19.1073 2.67478 19.1073 2.67358 19.1073 2.67238C19.1073 2.67118 19.1073 2.66998 19.1073 2.66878C19.1073 2.66758 19.1073 2.66638 19.1073 2.66519C19.1073 2.66399 19.1073 2.66279 19.1073 2.66159C19.1073 2.66039 19.1073 2.65919 19.1073 2.65799C19.1073 2.65679 19.1073 2.65559 19.1073 2.65439C19.1073 2.65319 19.1073 2.65199 19.1073 2.65079C19.1073 2.64959 19.1073 2.64839 19.1073 2.64719C19.1073 2.64599 19.1073 2.64479 19.1073 2.64359C19.1073 2.64239 19.1073 2.64119 19.1073 2.63999C19.1073 2.63879 19.1073 2.63759 19.1073 2.63639C19.1073 2.63519 19.1073 2.634 19.1073 2.6328C19.1073 2.6316 19.1073 2.6304 19.1073 2.6292C19.1073 2.628 19.1073 2.6268 19.1073 2.6256C19.1073 2.6244 19.1073 2.6232 19.1073 2.622C19.1073 2.6208 19.1073 2.6196 19.1073 2.6184C19.1073 2.6172 19.1073 2.616 19.1073 2.6148C19.1073 2.61361 19.1073 2.61241 19.1073 2.61121C19.1073 2.61001 19.1073 2.60881 19.1073 2.60761C19.1073 2.60641 19.1073 2.60521 19.1073 2.60401C19.1073 2.60281 19.1073 2.60161 19.1073 2.60041C19.1073 2.59921 19.1073 2.59801 19.1073 2.59682C19.1073 2.59562 19.1073 2.59442 19.1073 2.59322C19.1073 2.59202 19.1073 2.59082 19.1073 2.58962C19.1073 2.58842 19.1073 2.58722 19.1073 2.58602C19.1073 2.58482 19.1073 2.58363 19.1073 2.58243C19.1073 2.58123 19.1073 2.58003 19.1073 2.57883C19.1073 2.57763 19.1073 2.57643 19.1073 2.57523C19.1073 2.57403 19.1073 2.57283 19.1073 2.57163C19.1073 2.57044 19.1073 2.56924 19.1073 2.56804C19.1073 2.56684 19.1073 2.56564 19.1073 2.56444C19.1073 2.56324 19.1073 2.56204 19.1073 2.56084C19.1073 2.55964 19.1073 2.55845 19.1073 2.55725C19.1073 2.55605 19.1073 2.55485 19.1073 2.55365C19.1073 2.55245 19.1073 2.55125 19.1073 2.55005C19.1073 2.54885 19.1073 2.54766 19.1073 2.54646C19.1073 2.54526 19.1073 2.54406 19.1073 2.54286C19.1073 2.54166 19.1073 2.54046 19.1073 2.53926C19.1073 2.53807 19.1073 2.53687 19.1073 2.53567C19.1073 2.53447 19.1073 2.53327 19.1073 2.53207C19.1073 2.53087 19.1073 2.52967 19.1073 2.52848C19.1073 2.52728 19.1073 2.52608 19.1073 2.52488C19.1073 2.52368 19.1073 2.52248 19.1073 2.52128C19.1073 2.52008 19.1073 2.51889 19.1073 2.51769C19.1073 2.51649 19.1073 2.51529 19.1073 2.51409C19.1073 2.51289 19.1073 2.51169 19.1073 2.5105C19.1073 2.5093 19.1073 2.5081 19.1073 2.5069C19.1073 2.5057 19.1073 2.5045 19.1073 2.5033C19.1073 2.50211 19.1073 2.50091 19.1073 2.49971C19.1073 2.49851 19.1073 2.49731 19.1073 2.49611C19.1073 2.49491 19.1073 2.49372 19.1073 2.49252C19.1073 2.49132 19.1073 2.49012 19.1073 2.48892C19.1073 2.48772 19.1073 2.48653 19.1073 2.48533C19.1073 2.48413 19.1073 2.48293 19.1073 2.48173C19.1073 2.48053 19.1073 2.47934 19.1073 2.47814C19.1073 2.47694 19.1073 2.47574 19.1073 2.47454C19.1073 2.47334 19.1073 2.47215 19.1073 2.47095C19.1073 2.46975 19.1073 2.46855 19.1073 2.46735C19.1073 2.46615 19.1073 2.46496 19.1073 2.46376C19.1073 2.46256 19.1073 2.46136 19.1073 2.46016C19.1073 2.45896 19.1073 2.45777 19.1073 2.45657C19.1073 2.45537 19.1073 2.45417 19.1073 2.45297C19.1073 2.45177 19.1073 2.45058 19.1073 2.44938C19.1073 2.44818 19.1073 2.44698 19.1073 2.44578C19.1073 2.44459 19.1073 2.44339 19.1073 2.44219C19.1073 2.44099 19.1073 2.43979 19.1073 2.43859C19.1073 2.4374 19.1073 2.4362 19.1073 2.435C19.1073 2.4338 19.1073 2.4326 19.1073 2.43141C19.1073 2.43021 19.1073 2.42901 19.1073 2.42781C19.1073 2.42661 19.1073 2.42542 19.1073 2.42422C19.1073 2.42302 19.1073 2.42182 19.1073 2.42062C19.1073 2.41943 19.1073 2.41823 19.1073 2.41703C19.1073 2.41583 19.1073 2.41463 19.1073 2.41344C19.1073 2.41224 19.1073 2.41104 19.1073 2.40984C19.1073 2.40864 19.1073 2.40745 19.1073 2.40625C19.1073 2.40505 19.1073 2.40385 19.1073 2.40265C19.1073 2.40146 19.1073 2.40026 19.1073 2.39906C19.1073 2.39786 19.1073 2.39666 19.1073 2.39547C19.1073 2.39427 19.1073 2.39307 19.1073 2.39187C19.1073 2.39067 19.1073 2.38948 19.1073 2.38828C19.1073 2.38708 19.1073 2.38588 19.1073 2.38469C19.1073 2.38349 19.1073 2.38229 19.1073 2.38109C19.1073 2.37989 19.1073 2.3787 19.1073 2.3775C19.1073 2.3763 19.1073 2.3751 19.1073 2.37391C19.1073 2.37271 19.1073 2.37151 19.1073 2.37031C19.1073 2.36911 19.1073 2.36792 19.1073 2.36672C19.1073 2.36552 19.1073 2.36432 19.1073 2.36313C19.1073 2.36193 19.1073 2.36073 19.1073 2.35953C19.1073 2.35833 19.1073 2.35714 19.1073 2.35594C19.1073 2.35474 19.1073 2.35354 19.1073 2.35235C19.1073 2.35115 19.1073 2.34995 19.1073 2.34875C19.1073 2.34756 19.1073 2.34636 19.1073 2.34516C19.1073 2.34396 19.1073 2.34277 19.1073 2.34157C19.1073 2.34037 19.1073 2.33917 19.1073 2.33798C19.1073 2.33678 19.1073 2.33558 19.1073 2.33438C19.1073 2.33318 19.1073 2.33199 19.1073 2.33079C19.1073 2.32959 19.1073 2.32839 19.1073 2.3272C19.1073 2.326 19.1073 2.3248 19.1073 2.3236C19.1073 2.32241 19.1073 2.32121 19.1073 2.32001C19.1073 2.31881 19.1073 2.31762 19.1073 2.31642C19.1073 2.31522 19.1073 2.31402 19.1073 2.31283C19.1073 2.31163 19.1073 2.31043 19.1073 2.30923C19.1073 2.30804 19.1073 2.30684 19.1073 2.30564C19.1073 2.30445 19.1073 2.30325 19.1073 2.30205C19.1073 2.30085 19.1073 2.29966 19.1073 2.29846C19.1073 2.29726 19.1073 2.29606 19.1073 2.29487C19.1073 2.29367 19.1073 2.29247 19.1073 2.29127C19.1073 2.29008 19.1073 2.28888 19.1073 2.28768C19.1073 2.28648 19.1073 2.28529 19.1073 2.28409C19.1073 2.28289 19.1073 2.2817 19.1073 2.2805C19.1073 2.2793 19.1073 2.2781 19.1073 2.27691H16.1073ZM17.6073 2.63054C17.6064 2.63054 17.6055 2.63054 17.6047 2.63054C17.6038 2.63054 17.6029 2.63054 17.602 2.63054C17.6012 2.63054 17.6003 2.63054 17.5994 2.63054C17.5985 2.63054 17.5977 2.63054 17.5968 2.63054C17.5959 2.63054 17.595 2.63054 17.5942 2.63054C17.5933 2.63054 17.5924 2.63054 17.5915 2.63054C17.5907 2.63054 17.5898 2.63054 17.5889 2.63054C17.588 2.63054 17.5872 2.63054 17.5863 2.63054C17.5854 2.63054 17.5845 2.63054 17.5837 2.63054C17.5828 2.63054 17.5819 2.63054 17.581 2.63054C17.5802 2.63054 17.5793 2.63054 17.5784 2.63054C17.5775 2.63054 17.5767 2.63054 17.5758 2.63054C17.5749 2.63054 17.574 2.63054 17.5732 2.63054C17.5723 2.63054 17.5714 2.63054 17.5705 2.63054C17.5697 2.63054 17.5688 2.63054 17.5679 2.63054C17.567 2.63054 17.5662 2.63054 17.5653 2.63054C17.5644 2.63054 17.5635 2.63054 17.5627 2.63054C17.5618 2.63054 17.5609 2.63054 17.5601 2.63054C17.5592 2.63054 17.5583 2.63054 17.5574 2.63054C17.5566 2.63054 17.5557 2.63054 17.5548 2.63054C17.5539 2.63054 17.5531 2.63054 17.5522 2.63054C17.5513 2.63054 17.5504 2.63054 17.5496 2.63054C17.5487 2.63054 17.5478 2.63054 17.547 2.63054C17.5461 2.63054 17.5452 2.63054 17.5443 2.63054C17.5435 2.63054 17.5426 2.63054 17.5417 2.63054C17.5408 2.63054 17.54 2.63054 17.5391 2.63054C17.5382 2.63054 17.5374 2.63054 17.5365 2.63054C17.5356 2.63054 17.5347 2.63054 17.5339 2.63054C17.533 2.63054 17.5321 2.63054 17.5313 2.63054C17.5304 2.63054 17.5295 2.63054 17.5286 2.63054C17.5278 2.63054 17.5269 2.63054 17.526 2.63054C17.5251 2.63054 17.5243 2.63054 17.5234 2.63054C17.5225 2.63054 17.5217 2.63054 17.5208 2.63054C17.5199 2.63054 17.519 2.63054 17.5182 2.63054C17.5173 2.63054 17.5164 2.63054 17.5156 2.63054C17.5147 2.63054 17.5138 2.63054 17.5129 2.63054C17.5121 2.63054 17.5112 2.63054 17.5103 2.63054C17.5095 2.63054 17.5086 2.63054 17.5077 2.63054C17.5068 2.63054 17.506 2.63054 17.5051 2.63054C17.5042 2.63054 17.5034 2.63054 17.5025 2.63054C17.5016 2.63054 17.5007 2.63054 17.4999 2.63054C17.499 2.63054 17.4981 2.63054 17.4973 2.63054C17.4964 2.63054 17.4955 2.63054 17.4947 2.63054C17.4938 2.63054 17.4929 2.63054 17.492 2.63054C17.4912 2.63054 17.4903 2.63054 17.4894 2.63054C17.4886 2.63054 17.4877 2.63054 17.4868 2.63054C17.4859 2.63054 17.4851 2.63054 17.4842 2.63054C17.4833 2.63054 17.4825 2.63054 17.4816 2.63054C17.4807 2.63054 17.4799 2.63054 17.479 2.63054C17.4781 2.63054 17.4772 2.63054 17.4764 2.63054C17.4755 2.63054 17.4746 2.63054 17.4738 2.63054C17.4729 2.63054 17.472 2.63054 17.4712 2.63054C17.4703 2.63054 17.4694 2.63054 17.4685 2.63054C17.4677 2.63054 17.4668 2.63054 17.4659 2.63054C17.4651 2.63054 17.4642 2.63054 17.4633 2.63054C17.4625 2.63054 17.4616 2.63054 17.4607 2.63054C17.4599 2.63054 17.459 2.63054 17.4581 2.63054C17.4572 2.63054 17.4564 2.63054 17.4555 2.63054C17.4546 2.63054 17.4538 2.63054 17.4529 2.63054C17.452 2.63054 17.4512 2.63054 17.4503 2.63054C17.4494 2.63054 17.4486 2.63054 17.4477 2.63054C17.4468 2.63054 17.446 2.63054 17.4451 2.63054C17.4442 2.63054 17.4433 2.63054 17.4425 2.63054C17.4416 2.63054 17.4407 2.63054 17.4399 2.63054C17.439 2.63054 17.4381 2.63054 17.4373 2.63054C17.4364 2.63054 17.4355 2.63054 17.4347 2.63054C17.4338 2.63054 17.4329 2.63054 17.4321 2.63054C17.4312 2.63054 17.4303 2.63054 17.4295 2.63054C17.4286 2.63054 17.4277 2.63054 17.4269 2.63054C17.426 2.63054 17.4251 2.63054 17.4242 2.63054C17.4234 2.63054 17.4225 2.63054 17.4216 2.63054C17.4208 2.63054 17.4199 2.63054 17.419 2.63054C17.4182 2.63054 17.4173 2.63054 17.4164 2.63054C17.4156 2.63054 17.4147 2.63054 17.4138 2.63054C17.413 2.63054 17.4121 2.63054 17.4112 2.63054C17.4104 2.63054 17.4095 2.63054 17.4086 2.63054C17.4078 2.63054 17.4069 2.63054 17.406 2.63054C17.4052 2.63054 17.4043 2.63054 17.4034 2.63054C17.4026 2.63054 17.4017 2.63054 17.4008 2.63054C17.4 2.63054 17.3991 2.63054 17.3982 2.63054C17.3974 2.63054 17.3965 2.63054 17.3956 2.63054C17.3948 2.63054 17.3939 2.63054 17.393 2.63054C17.3922 2.63054 17.3913 2.63054 17.3904 2.63054C17.3896 2.63054 17.3887 2.63054 17.3878 2.63054C17.387 2.63054 17.3861 2.63054 17.3852 2.63054C17.3844 2.63054 17.3835 2.63054 17.3826 2.63054C17.3818 2.63054 17.3809 2.63054 17.38 2.63054C17.3792 2.63054 17.3783 2.63054 17.3774 2.63054C17.3766 2.63054 17.3757 2.63054 17.3748 2.63054C17.374 2.63054 17.3731 2.63054 17.3722 2.63054C17.3714 2.63054 17.3705 2.63054 17.3696 2.63054C17.3688 2.63054 17.3679 2.63054 17.367 2.63054C17.3662 2.63054 17.3653 2.63054 17.3645 2.63054C17.3636 2.63054 17.3627 2.63054 17.3619 2.63054C17.361 2.63054 17.3601 2.63054 17.3593 2.63054C17.3584 2.63054 17.3575 2.63054 17.3567 2.63054C17.3558 2.63054 17.3549 2.63054 17.3541 2.63054C17.3532 2.63054 17.3523 2.63054 17.3515 2.63054C17.3506 2.63054 17.3497 2.63054 17.3489 2.63054C17.348 2.63054 17.3471 2.63054 17.3463 2.63054C17.3454 2.63054 17.3446 2.63054 17.3437 2.63054C17.3428 2.63054 17.342 2.63054 17.3411 2.63054C17.3402 2.63054 17.3394 2.63054 17.3385 2.63054C17.3376 2.63054 17.3368 2.63054 17.3359 2.63054C17.335 2.63054 17.3342 2.63054 17.3333 2.63054C17.3324 2.63054 17.3316 2.63054 17.3307 2.63054C17.3299 2.63054 17.329 2.63054 17.3281 2.63054C17.3273 2.63054 17.3264 2.63054 17.3255 2.63054C17.3247 2.63054 17.3238 2.63054 17.3229 2.63054C17.3221 2.63054 17.3212 2.63054 17.3204 2.63054C17.3195 2.63054 17.3186 2.63054 17.3178 2.63054C17.3169 2.63054 17.316 2.63054 17.3152 2.63054C17.3143 2.63054 17.3134 2.63054 17.3126 2.63054C17.3117 2.63054 17.3109 2.63054 17.31 2.63054C17.3091 2.63054 17.3083 2.63054 17.3074 2.63054C17.3065 2.63054 17.3057 2.63054 17.3048 2.63054C17.3039 2.63054 17.3031 2.63054 17.3022 2.63054C17.3014 2.63054 17.3005 2.63054 17.2996 2.63054C17.2988 2.63054 17.2979 2.63054 17.297 2.63054C17.2962 2.63054 17.2953 2.63054 17.2944 2.63054C17.2936 2.63054 17.2927 2.63054 17.2919 2.63054C17.291 2.63054 17.2901 2.63054 17.2893 2.63054C17.2884 2.63054 17.2875 2.63054 17.2867 2.63054C17.2858 2.63054 17.285 2.63054 17.2841 2.63054C17.2832 2.63054 17.2824 2.63054 17.2815 2.63054C17.2806 2.63054 17.2798 2.63054 17.2789 2.63054C17.2781 2.63054 17.2772 2.63054 17.2763 2.63054C17.2755 2.63054 17.2746 2.63054 17.2737 2.63054C17.2729 2.63054 17.272 2.63054 17.2712 2.63054C17.2703 2.63054 17.2694 2.63054 17.2686 2.63054C17.2677 2.63054 17.2668 2.63054 17.266 2.63054C17.2651 2.63054 17.2643 2.63054 17.2634 2.63054C17.2625 2.63054 17.2617 2.63054 17.2608 2.63054C17.26 2.63054 17.2591 2.63054 17.2582 2.63054C17.2574 2.63054 17.2565 2.63054 17.2556 2.63054C17.2548 2.63054 17.2539 2.63054 17.2531 2.63054C17.2522 2.63054 17.2513 2.63054 17.2505 2.63054C17.2496 2.63054 17.2487 2.63054 17.2479 2.63054C17.247 2.63054 17.2462 2.63054 17.2453 2.63054C17.2444 2.63054 17.2436 2.63054 17.2427 2.63054C17.2419 2.63054 17.241 2.63054 17.2401 2.63054C17.2393 2.63054 17.2384 2.63054 17.2376 2.63054C17.2367 2.63054 17.2358 2.63054 17.235 2.63054C17.2341 2.63054 17.2332 2.63054 17.2324 2.63054C17.2315 2.63054 17.2307 2.63054 17.2298 2.63054C17.2289 2.63054 17.2281 2.63054 17.2272 2.63054C17.2264 2.63054 17.2255 2.63054 17.2246 2.63054C17.2238 2.63054 17.2229 2.63054 17.2221 2.63054C17.2212 2.63054 17.2203 2.63054 17.2195 2.63054C17.2186 2.63054 17.2178 2.63054 17.2169 2.63054C17.216 2.63054 17.2152 2.63054 17.2143 2.63054C17.2134 2.63054 17.2126 2.63054 17.2117 2.63054C17.2109 2.63054 17.21 2.63054 17.2091 2.63054C17.2083 2.63054 17.2074 2.63054 17.2066 2.63054C17.2057 2.63054 17.2048 2.63054 17.204 2.63054C17.2031 2.63054 17.2023 2.63054 17.2014 2.63054C17.2005 2.63054 17.1997 2.63054 17.1988 2.63054C17.198 2.63054 17.1971 2.63054 17.1962 2.63054C17.1954 2.63054 17.1945 2.63054 17.1937 2.63054C17.1928 2.63054 17.1919 2.63054 17.1911 2.63054C17.1902 2.63054 17.1894 2.63054 17.1885 2.63054C17.1876 2.63054 17.1868 2.63054 17.1859 2.63054C17.1851 2.63054 17.1842 2.63054 17.1834 2.63054C17.1825 2.63054 17.1816 2.63054 17.1808 2.63054C17.1799 2.63054 17.1791 2.63054 17.1782 2.63054C17.1773 2.63054 17.1765 2.63054 17.1756 2.63054C17.1748 2.63054 17.1739 2.63054 17.173 2.63054C17.1722 2.63054 17.1713 2.63054 17.1705 2.63054C17.1696 2.63054 17.1687 2.63054 17.1679 2.63054C17.167 2.63054 17.1662 2.63054 17.1653 2.63054C17.1644 2.63054 17.1636 2.63054 17.1627 2.63054C17.1619 2.63054 17.161 2.63054 17.1602 2.63054C17.1593 2.63054 17.1584 2.63054 17.1576 2.63054C17.1567 2.63054 17.1559 2.63054 17.155 2.63054C17.1541 2.63054 17.1533 2.63054 17.1524 2.63054C17.1516 2.63054 17.1507 2.63054 17.1498 2.63054C17.149 2.63054 17.1481 2.63054 17.1473 2.63054C17.1464 2.63054 17.1456 2.63054 17.1447 2.63054C17.1438 2.63054 17.143 2.63054 17.1421 2.63054C17.1413 2.63054 17.1404 2.63054 17.1395 2.63054C17.1387 2.63054 17.1378 2.63054 17.137 2.63054C17.1361 2.63054 17.1353 2.63054 17.1344 2.63054C17.1335 2.63054 17.1327 2.63054 17.1318 2.63054C17.131 2.63054 17.1301 2.63054 17.1292 2.63054C17.1284 2.63054 17.1275 2.63054 17.1267 2.63054C17.1258 2.63054 17.125 2.63054 17.1241 2.63054C17.1232 2.63054 17.1224 2.63054 17.1215 2.63054C17.1207 2.63054 17.1198 2.63054 17.119 2.63054C17.1181 2.63054 17.1172 2.63054 17.1164 2.63054C17.1155 2.63054 17.1147 2.63054 17.1138 2.63054C17.113 2.63054 17.1121 2.63054 17.1112 2.63054C17.1104 2.63054 17.1095 2.63054 17.1087 2.63054C17.1078 2.63054 17.1069 2.63054 17.1061 2.63054C17.1052 2.63054 17.1044 2.63054 17.1035 2.63054C17.1027 2.63054 17.1018 2.63054 17.1009 2.63054C17.1001 2.63054 17.0992 2.63054 17.0984 2.63054C17.0975 2.63054 17.0967 2.63054 17.0958 2.63054C17.0949 2.63054 17.0941 2.63054 17.0932 2.63054C17.0924 2.63054 17.0915 2.63054 17.0907 2.63054C17.0898 2.63054 17.0889 2.63054 17.0881 2.63054C17.0872 2.63054 17.0864 2.63054 17.0855 2.63054C17.0847 2.63054 17.0838 2.63054 17.0829 2.63054C17.0821 2.63054 17.0812 2.63054 17.0804 2.63054C17.0795 2.63054 17.0787 2.63054 17.0778 2.63054C17.077 2.63054 17.0761 2.63054 17.0752 2.63054C17.0744 2.63054 17.0735 2.63054 17.0727 2.63054C17.0718 2.63054 17.071 2.63054 17.0701 2.63054C17.0692 2.63054 17.0684 2.63054 17.0675 2.63054C17.0667 2.63054 17.0658 2.63054 17.065 2.63054C17.0641 2.63054 17.0632 2.63054 17.0624 2.63054C17.0615 2.63054 17.0607 2.63054 17.0598 2.63054C17.059 2.63054 17.0581 2.63054 17.0573 2.63054C17.0564 2.63054 17.0555 2.63054 17.0547 2.63054C17.0538 2.63054 17.053 2.63054 17.0521 2.63054C17.0513 2.63054 17.0504 2.63054 17.0495 2.63054C17.0487 2.63054 17.0478 2.63054 17.047 2.63054C17.0461 2.63054 17.0453 2.63054 17.0444 2.63054C17.0436 2.63054 17.0427 2.63054 17.0418 2.63054C17.041 2.63054 17.0401 2.63054 17.0393 2.63054C17.0384 2.63054 17.0376 2.63054 17.0367 2.63054C17.0359 2.63054 17.035 2.63054 17.0341 2.63054C17.0333 2.63054 17.0324 2.63054 17.0316 2.63054C17.0307 2.63054 17.0299 2.63054 17.029 2.63054C17.0282 2.63054 17.0273 2.63054 17.0264 2.63054C17.0256 2.63054 17.0247 2.63054 17.0239 2.63054C17.023 2.63054 17.0222 2.63054 17.0213 2.63054C17.0205 2.63054 17.0196 2.63054 17.0187 2.63054C17.0179 2.63054 17.017 2.63054 17.0162 2.63054C17.0153 2.63054 17.0145 2.63054 17.0136 2.63054C17.0128 2.63054 17.0119 2.63054 17.011 2.63054C17.0102 2.63054 17.0093 2.63054 17.0085 2.63054C17.0076 2.63054 17.0068 2.63054 17.0059 2.63054C17.0051 2.63054 17.0042 2.63054 17.0033 2.63054C17.0025 2.63054 17.0016 2.63054 17.0008 2.63054C16.9999 2.63054 16.9991 2.63054 16.9982 2.63054C16.9974 2.63054 16.9965 2.63054 16.9957 2.63054C16.9948 2.63054 16.9939 2.63054 16.9931 2.63054C16.9922 2.63054 16.9914 2.63054 16.9905 2.63054C16.9897 2.63054 16.9888 2.63054 16.988 2.63054C16.9871 2.63054 16.9863 2.63054 16.9854 2.63054C16.9845 2.63054 16.9837 2.63054 16.9828 2.63054C16.982 2.63054 16.9811 2.63054 16.9803 2.63054C16.9794 2.63054 16.9786 2.63054 16.9777 2.63054C16.9768 2.63054 16.976 2.63054 16.9751 2.63054C16.9743 2.63054 16.9734 2.63054 16.9726 2.63054C16.9717 2.63054 16.9709 2.63054 16.97 2.63054C16.9692 2.63054 16.9683 2.63054 16.9675 2.63054C16.9666 2.63054 16.9657 2.63054 16.9649 2.63054C16.964 2.63054 16.9632 2.63054 16.9623 2.63054C16.9615 2.63054 16.9606 2.63054 16.9598 2.63054C16.9589 2.63054 16.9581 2.63054 16.9572 2.63054C16.9563 2.63054 16.9555 2.63054 16.9546 2.63054C16.9538 2.63054 16.9529 2.63054 16.9521 2.63054C16.9512 2.63054 16.9504 2.63054 16.9495 2.63054C16.9487 2.63054 16.9478 2.63054 16.947 2.63054C16.9461 2.63054 16.9452 2.63054 16.9444 2.63054C16.9435 2.63054 16.9427 2.63054 16.9418 2.63054C16.941 2.63054 16.9401 2.63054 16.9393 2.63054C16.9384 2.63054 16.9376 2.63054 16.9367 2.63054C16.9359 2.63054 16.935 2.63054 16.9341 2.63054C16.9333 2.63054 16.9324 2.63054 16.9316 2.63054C16.9307 2.63054 16.9299 2.63054 16.929 2.63054C16.9282 2.63054 16.9273 2.63054 16.9265 2.63054C16.9256 2.63054 16.9248 2.63054 16.9239 2.63054C16.923 2.63054 16.9222 2.63054 16.9213 2.63054C16.9205 2.63054 16.9196 2.63054 16.9188 2.63054C16.9179 2.63054 16.9171 2.63054 16.9162 2.63054C16.9154 2.63054 16.9145 2.63054 16.9137 2.63054C16.9128 2.63054 16.912 2.63054 16.9111 2.63054C16.9102 2.63054 16.9094 2.63054 16.9085 2.63054C16.9077 2.63054 16.9068 2.63054 16.906 2.63054C16.9051 2.63054 16.9043 2.63054 16.9034 2.63054C16.9026 2.63054 16.9017 2.63054 16.9009 2.63054C16.9 2.63054 16.8992 2.63054 16.8983 2.63054C16.8974 2.63054 16.8966 2.63054 16.8957 2.63054C16.8949 2.63054 16.894 2.63054 16.8932 2.63054C16.8923 2.63054 16.8915 2.63054 16.8906 2.63054C16.8898 2.63054 16.8889 2.63054 16.8881 2.63054C16.8872 2.63054 16.8864 2.63054 16.8855 2.63054C16.8847 2.63054 16.8838 2.63054 16.8829 2.63054C16.8821 2.63054 16.8812 2.63054 16.8804 2.63054C16.8795 2.63054 16.8787 2.63054 16.8778 2.63054C16.877 2.63054 16.8761 2.63054 16.8753 2.63054C16.8744 2.63054 16.8736 2.63054 16.8727 2.63054C16.8719 2.63054 16.871 2.63054 16.8702 2.63054C16.8693 2.63054 16.8685 2.63054 16.8676 2.63054C16.8667 2.63054 16.8659 2.63054 16.865 2.63054C16.8642 2.63054 16.8633 2.63054 16.8625 2.63054C16.8616 2.63054 16.8608 2.63054 16.8599 2.63054C16.8591 2.63054 16.8582 2.63054 16.8574 2.63054C16.8565 2.63054 16.8557 2.63054 16.8548 2.63054C16.854 2.63054 16.8531 2.63054 16.8523 2.63054C16.8514 2.63054 16.8505 2.63054 16.8497 2.63054C16.8488 2.63054 16.848 2.63054 16.8471 2.63054C16.8463 2.63054 16.8454 2.63054 16.8446 2.63054C16.8437 2.63054 16.8429 2.63054 16.842 2.63054C16.8412 2.63054 16.8403 2.63054 16.8395 2.63054C16.8386 2.63054 16.8378 2.63054 16.8369 2.63054C16.8361 2.63054 16.8352 2.63054 16.8344 2.63054C16.8335 2.63054 16.8326 2.63054 16.8318 2.63054C16.8309 2.63054 16.8301 2.63054 16.8292 2.63054C16.8284 2.63054 16.8275 2.63054 16.8267 2.63054C16.8258 2.63054 16.825 2.63054 16.8241 2.63054C16.8233 2.63054 16.8224 2.63054 16.8216 2.63054C16.8207 2.63054 16.8199 2.63054 16.819 2.63054C16.8182 2.63054 16.8173 2.63054 16.8165 2.63054C16.8156 2.63054 16.8148 2.63054 16.8139 2.63054C16.8131 2.63054 16.8122 2.63054 16.8113 2.63054C16.8105 2.63054 16.8096 2.63054 16.8088 2.63054C16.8079 2.63054 16.8071 2.63054 16.8062 2.63054C16.8054 2.63054 16.8045 2.63054 16.8037 2.63054C16.8028 2.63054 16.802 2.63054 16.8011 2.63054C16.8003 2.63054 16.7994 2.63054 16.7986 2.63054C16.7977 2.63054 16.7969 2.63054 16.796 2.63054C16.7952 2.63054 16.7943 2.63054 16.7935 2.63054C16.7926 2.63054 16.7918 2.63054 16.7909 2.63054C16.7901 2.63054 16.7892 2.63054 16.7884 2.63054C16.7875 2.63054 16.7866 2.63054 16.7858 2.63054C16.7849 2.63054 16.7841 2.63054 16.7832 2.63054C16.7824 2.63054 16.7815 2.63054 16.7807 2.63054C16.7798 2.63054 16.779 2.63054 16.7781 2.63054C16.7773 2.63054 16.7764 2.63054 16.7756 2.63054C16.7747 2.63054 16.7739 2.63054 16.773 2.63054C16.7722 2.63054 16.7713 2.63054 16.7705 2.63054C16.7696 2.63054 16.7688 2.63054 16.7679 2.63054C16.7671 2.63054 16.7662 2.63054 16.7654 2.63054C16.7645 2.63054 16.7637 2.63054 16.7628 2.63054C16.762 2.63054 16.7611 2.63054 16.7603 2.63054C16.7594 2.63054 16.7586 2.63054 16.7577 2.63054C16.7568 2.63054 16.756 2.63054 16.7551 2.63054C16.7543 2.63054 16.7534 2.63054 16.7526 2.63054C16.7517 2.63054 16.7509 2.63054 16.75 2.63054C16.7492 2.63054 16.7483 2.63054 16.7475 2.63054C16.7466 2.63054 16.7458 2.63054 16.7449 2.63054C16.7441 2.63054 16.7432 2.63054 16.7424 2.63054C16.7415 2.63054 16.7407 2.63054 16.7398 2.63054C16.739 2.63054 16.7381 2.63054 16.7373 2.63054C16.7364 2.63054 16.7356 2.63054 16.7347 2.63054C16.7339 2.63054 16.733 2.63054 16.7322 2.63054C16.7313 2.63054 16.7305 2.63054 16.7296 2.63054C16.7288 2.63054 16.7279 2.63054 16.7271 2.63054C16.7262 2.63054 16.7254 2.63054 16.7245 2.63054C16.7237 2.63054 16.7228 2.63054 16.722 2.63054C16.7211 2.63054 16.7202 2.63054 16.7194 2.63054C16.7185 2.63054 16.7177 2.63054 16.7168 2.63054C16.716 2.63054 16.7151 2.63054 16.7143 2.63054C16.7134 2.63054 16.7126 2.63054 16.7117 2.63054C16.7109 2.63054 16.71 2.63054 16.7092 2.63054C16.7083 2.63054 16.7075 2.63054 16.7066 2.63054C16.7058 2.63054 16.7049 2.63054 16.7041 2.63054C16.7032 2.63054 16.7024 2.63054 16.7015 2.63054C16.7007 2.63054 16.6998 2.63054 16.699 2.63054C16.6981 2.63054 16.6973 2.63054 16.6964 2.63054C16.6956 2.63054 16.6947 2.63054 16.6939 2.63054C16.693 2.63054 16.6922 2.63054 16.6913 2.63054C16.6905 2.63054 16.6896 2.63054 16.6888 2.63054C16.6879 2.63054 16.6871 2.63054 16.6862 2.63054C16.6854 2.63054 16.6845 2.63054 16.6837 2.63054C16.6828 2.63054 16.682 2.63054 16.6811 2.63054C16.6803 2.63054 16.6794 2.63054 16.6786 2.63054C16.6777 2.63054 16.6769 2.63054 16.676 2.63054C16.6752 2.63054 16.6743 2.63054 16.6735 2.63054C16.6726 2.63054 16.6718 2.63054 16.6709 2.63054C16.6701 2.63054 16.6692 2.63054 16.6683 2.63054C16.6675 2.63054 16.6666 2.63054 16.6658 2.63054C16.6649 2.63054 16.6641 2.63054 16.6632 2.63054C16.6624 2.63054 16.6615 2.63054 16.6607 2.63054C16.6598 2.63054 16.659 2.63054 16.6581 2.63054C16.6573 2.63054 16.6564 2.63054 16.6556 2.63054C16.6547 2.63054 16.6539 2.63054 16.653 2.63054C16.6522 2.63054 16.6513 2.63054 16.6505 2.63054C16.6496 2.63054 16.6488 2.63054 16.6479 2.63054C16.6471 2.63054 16.6462 2.63054 16.6454 2.63054C16.6445 2.63054 16.6437 2.63054 16.6428 2.63054C16.642 2.63054 16.6411 2.63054 16.6403 2.63054C16.6394 2.63054 16.6386 2.63054 16.6377 2.63054C16.6369 2.63054 16.636 2.63054 16.6352 2.63054C16.6343 2.63054 16.6335 2.63054 16.6326 2.63054C16.6318 2.63054 16.6309 2.63054 16.6301 2.63054C16.6292 2.63054 16.6284 2.63054 16.6275 2.63054C16.6267 2.63054 16.6258 2.63054 16.625 2.63054C16.6241 2.63054 16.6233 2.63054 16.6224 2.63054C16.6216 2.63054 16.6207 2.63054 16.6199 2.63054C16.619 2.63054 16.6182 2.63054 16.6173 2.63054C16.6165 2.63054 16.6156 2.63054 16.6148 2.63054C16.6139 2.63054 16.6131 2.63054 16.6122 2.63054C16.6114 2.63054 16.6105 2.63054 16.6097 2.63054C16.6088 2.63054 16.608 2.63054 16.6071 2.63054C16.6063 2.63054 16.6054 2.63054 16.6046 2.63054C16.6037 2.63054 16.6029 2.63054 16.602 2.63054C16.6012 2.63054 16.6003 2.63054 16.5995 2.63054C16.5986 2.63054 16.5978 2.63054 16.5969 2.63054C16.5961 2.63054 16.5952 2.63054 16.5944 2.63054C16.5935 2.63054 16.5927 2.63054 16.5918 2.63054C16.591 2.63054 16.5901 2.63054 16.5893 2.63054C16.5884 2.63054 16.5876 2.63054 16.5867 2.63054C16.5859 2.63054 16.585 2.63054 16.5842 2.63054C16.5833 2.63054 16.5825 2.63054 16.5816 2.63054C16.5808 2.63054 16.5799 2.63054 16.5791 2.63054C16.5782 2.63054 16.5773 2.63054 16.5765 2.63054C16.5756 2.63054 16.5748 2.63054 16.5739 2.63054C16.5731 2.63054 16.5722 2.63054 16.5714 2.63054C16.5705 2.63054 16.5697 2.63054 16.5688 2.63054C16.568 2.63054 16.5671 2.63054 16.5663 2.63054C16.5654 2.63054 16.5646 2.63054 16.5637 2.63054C16.5629 2.63054 16.562 2.63054 16.5612 2.63054C16.5603 2.63054 16.5595 2.63054 16.5586 2.63054C16.5578 2.63054 16.5569 2.63054 16.5561 2.63054C16.5552 2.63054 16.5544 2.63054 16.5535 2.63054C16.5527 2.63054 16.5518 2.63054 16.551 2.63054C16.5501 2.63054 16.5493 2.63054 16.5484 2.63054C16.5476 2.63054 16.5467 2.63054 16.5459 2.63054C16.545 2.63054 16.5442 2.63054 16.5433 2.63054C16.5425 2.63054 16.5416 2.63054 16.5408 2.63054C16.5399 2.63054 16.5391 2.63054 16.5382 2.63054C16.5374 2.63054 16.5365 2.63054 16.5357 2.63054C16.5348 2.63054 16.534 2.63054 16.5331 2.63054C16.5323 2.63054 16.5314 2.63054 16.5306 2.63054C16.5297 2.63054 16.5289 2.63054 16.528 2.63054C16.5272 2.63054 16.5263 2.63054 16.5255 2.63054C16.5246 2.63054 16.5238 2.63054 16.5229 2.63054C16.5221 2.63054 16.5212 2.63054 16.5204 2.63054C16.5195 2.63054 16.5187 2.63054 16.5178 2.63054C16.517 2.63054 16.5161 2.63054 16.5153 2.63054C16.5144 2.63054 16.5136 2.63054 16.5127 2.63054C16.5119 2.63054 16.511 2.63054 16.5102 2.63054C16.5093 2.63054 16.5085 2.63054 16.5076 2.63054C16.5068 2.63054 16.5059 2.63054 16.5051 2.63054C16.5042 2.63054 16.5034 2.63054 16.5025 2.63054C16.5017 2.63054 16.5008 2.63054 16.5 2.63054C16.4991 2.63054 16.4983 2.63054 16.4974 2.63054C16.4966 2.63054 16.4957 2.63054 16.4949 2.63054C16.494 2.63054 16.4932 2.63054 16.4923 2.63054C16.4915 2.63054 16.4906 2.63054 16.4898 2.63054C16.4889 2.63054 16.4881 2.63054 16.4872 2.63054C16.4864 2.63054 16.4855 2.63054 16.4847 2.63054C16.4838 2.63054 16.483 2.63054 16.4821 2.63054C16.4813 2.63054 16.4804 2.63054 16.4796 2.63054C16.4787 2.63054 16.4779 2.63054 16.477 2.63054C16.4762 2.63054 16.4753 2.63054 16.4745 2.63054C16.4736 2.63054 16.4728 2.63054 16.4719 2.63054C16.4711 2.63054 16.4702 2.63054 16.4694 2.63054C16.4685 2.63054 16.4677 2.63054 16.4668 2.63054C16.466 2.63054 16.4651 2.63054 16.4642 2.63054C16.4634 2.63054 16.4625 2.63054 16.4617 2.63054C16.4608 2.63054 16.46 2.63054 16.4591 2.63054C16.4583 2.63054 16.4574 2.63054 16.4566 2.63054C16.4557 2.63054 16.4549 2.63054 16.454 2.63054C16.4532 2.63054 16.4523 2.63054 16.4515 2.63054C16.4506 2.63054 16.4498 2.63054 16.4489 2.63054C16.4481 2.63054 16.4472 2.63054 16.4464 2.63054C16.4455 2.63054 16.4447 2.63054 16.4438 2.63054C16.443 2.63054 16.4421 2.63054 16.4413 2.63054C16.4404 2.63054 16.4396 2.63054 16.4387 2.63054C16.4379 2.63054 16.437 2.63054 16.4362 2.63054C16.4353 2.63054 16.4345 2.63054 16.4336 2.63054C16.4328 2.63054 16.4319 2.63054 16.4311 2.63054C16.4302 2.63054 16.4294 2.63054 16.4285 2.63054C16.4277 2.63054 16.4268 2.63054 16.426 2.63054C16.4251 2.63054 16.4243 2.63054 16.4234 2.63054C16.4226 2.63054 16.4217 2.63054 16.4209 2.63054C16.42 2.63054 16.4192 2.63054 16.4183 2.63054C16.4175 2.63054 16.4166 2.63054 16.4158 2.63054C16.4149 2.63054 16.4141 2.63054 16.4132 2.63054C16.4124 2.63054 16.4115 2.63054 16.4107 2.63054C16.4098 2.63054 16.409 2.63054 16.4081 2.63054C16.4073 2.63054 16.4064 2.63054 16.4056 2.63054C16.4047 2.63054 16.4039 2.63054 16.403 2.63054C16.4022 2.63054 16.4013 2.63054 16.4004 2.63054C16.3996 2.63054 16.3987 2.63054 16.3979 2.63054C16.397 2.63054 16.3962 2.63054 16.3953 2.63054C16.3945 2.63054 16.3936 2.63054 16.3928 2.63054C16.3919 2.63054 16.3911 2.63054 16.3902 2.63054C16.3894 2.63054 16.3885 2.63054 16.3877 2.63054C16.3868 2.63054 16.386 2.63054 16.3851 2.63054C16.3843 2.63054 16.3834 2.63054 16.3826 2.63054C16.3817 2.63054 16.3809 2.63054 16.38 2.63054C16.3792 2.63054 16.3783 2.63054 16.3775 2.63054C16.3766 2.63054 16.3758 2.63054 16.3749 2.63054C16.3741 2.63054 16.3732 2.63054 16.3724 2.63054C16.3715 2.63054 16.3707 2.63054 16.3698 2.63054C16.369 2.63054 16.3681 2.63054 16.3673 2.63054C16.3664 2.63054 16.3656 2.63054 16.3647 2.63054C16.3639 2.63054 16.363 2.63054 16.3622 2.63054C16.3613 2.63054 16.3605 2.63054 16.3596 2.63054C16.3587 2.63054 16.3579 2.63054 16.357 2.63054C16.3562 2.63054 16.3553 2.63054 16.3545 2.63054C16.3536 2.63054 16.3528 2.63054 16.3519 2.63054C16.3511 2.63054 16.3502 2.63054 16.3494 2.63054C16.3485 2.63054 16.3477 2.63054 16.3468 2.63054C16.346 2.63054 16.3451 2.63054 16.3443 2.63054C16.3434 2.63054 16.3426 2.63054 16.3417 2.63054C16.3409 2.63054 16.34 2.63054 16.3392 2.63054C16.3383 2.63054 16.3375 2.63054 16.3366 2.63054C16.3358 2.63054 16.3349 2.63054 16.3341 2.63054C16.3332 2.63054 16.3324 2.63054 16.3315 2.63054C16.3307 2.63054 16.3298 2.63054 16.329 2.63054C16.3281 2.63054 16.3272 2.63054 16.3264 2.63054C16.3255 2.63054 16.3247 2.63054 16.3238 2.63054C16.323 2.63054 16.3221 2.63054 16.3213 2.63054C16.3204 2.63054 16.3196 2.63054 16.3187 2.63054C16.3179 2.63054 16.317 2.63054 16.3162 2.63054C16.3153 2.63054 16.3145 2.63054 16.3136 2.63054C16.3128 2.63054 16.3119 2.63054 16.3111 2.63054C16.3102 2.63054 16.3094 2.63054 16.3085 2.63054C16.3077 2.63054 16.3068 2.63054 16.306 2.63054C16.3051 2.63054 16.3043 2.63054 16.3034 2.63054C16.3026 2.63054 16.3017 2.63054 16.3008 2.63054C16.3 2.63054 16.2991 2.63054 16.2983 2.63054C16.2974 2.63054 16.2966 2.63054 16.2957 2.63054C16.2949 2.63054 16.294 2.63054 16.2932 2.63054C16.2923 2.63054 16.2915 2.63054 16.2906 2.63054V5.63054C16.2915 5.63054 16.2923 5.63054 16.2932 5.63054C16.294 5.63054 16.2949 5.63054 16.2957 5.63054C16.2966 5.63054 16.2974 5.63054 16.2983 5.63054C16.2991 5.63054 16.3 5.63054 16.3008 5.63054C16.3017 5.63054 16.3026 5.63054 16.3034 5.63054C16.3043 5.63054 16.3051 5.63054 16.306 5.63054C16.3068 5.63054 16.3077 5.63054 16.3085 5.63054C16.3094 5.63054 16.3102 5.63054 16.3111 5.63054C16.3119 5.63054 16.3128 5.63054 16.3136 5.63054C16.3145 5.63054 16.3153 5.63054 16.3162 5.63054C16.317 5.63054 16.3179 5.63054 16.3187 5.63054C16.3196 5.63054 16.3204 5.63054 16.3213 5.63054C16.3221 5.63054 16.323 5.63054 16.3238 5.63054C16.3247 5.63054 16.3255 5.63054 16.3264 5.63054C16.3272 5.63054 16.3281 5.63054 16.329 5.63054C16.3298 5.63054 16.3307 5.63054 16.3315 5.63054C16.3324 5.63054 16.3332 5.63054 16.3341 5.63054C16.3349 5.63054 16.3358 5.63054 16.3366 5.63054C16.3375 5.63054 16.3383 5.63054 16.3392 5.63054C16.34 5.63054 16.3409 5.63054 16.3417 5.63054C16.3426 5.63054 16.3434 5.63054 16.3443 5.63054C16.3451 5.63054 16.346 5.63054 16.3468 5.63054C16.3477 5.63054 16.3485 5.63054 16.3494 5.63054C16.3502 5.63054 16.3511 5.63054 16.3519 5.63054C16.3528 5.63054 16.3536 5.63054 16.3545 5.63054C16.3553 5.63054 16.3562 5.63054 16.357 5.63054C16.3579 5.63054 16.3587 5.63054 16.3596 5.63054C16.3605 5.63054 16.3613 5.63054 16.3622 5.63054C16.363 5.63054 16.3639 5.63054 16.3647 5.63054C16.3656 5.63054 16.3664 5.63054 16.3673 5.63054C16.3681 5.63054 16.369 5.63054 16.3698 5.63054C16.3707 5.63054 16.3715 5.63054 16.3724 5.63054C16.3732 5.63054 16.3741 5.63054 16.3749 5.63054C16.3758 5.63054 16.3766 5.63054 16.3775 5.63054C16.3783 5.63054 16.3792 5.63054 16.38 5.63054C16.3809 5.63054 16.3817 5.63054 16.3826 5.63054C16.3834 5.63054 16.3843 5.63054 16.3851 5.63054C16.386 5.63054 16.3868 5.63054 16.3877 5.63054C16.3885 5.63054 16.3894 5.63054 16.3902 5.63054C16.3911 5.63054 16.3919 5.63054 16.3928 5.63054C16.3936 5.63054 16.3945 5.63054 16.3953 5.63054C16.3962 5.63054 16.397 5.63054 16.3979 5.63054C16.3987 5.63054 16.3996 5.63054 16.4004 5.63054C16.4013 5.63054 16.4022 5.63054 16.403 5.63054C16.4039 5.63054 16.4047 5.63054 16.4056 5.63054C16.4064 5.63054 16.4073 5.63054 16.4081 5.63054C16.409 5.63054 16.4098 5.63054 16.4107 5.63054C16.4115 5.63054 16.4124 5.63054 16.4132 5.63054C16.4141 5.63054 16.4149 5.63054 16.4158 5.63054C16.4166 5.63054 16.4175 5.63054 16.4183 5.63054C16.4192 5.63054 16.42 5.63054 16.4209 5.63054C16.4217 5.63054 16.4226 5.63054 16.4234 5.63054C16.4243 5.63054 16.4251 5.63054 16.426 5.63054C16.4268 5.63054 16.4277 5.63054 16.4285 5.63054C16.4294 5.63054 16.4302 5.63054 16.4311 5.63054C16.4319 5.63054 16.4328 5.63054 16.4336 5.63054C16.4345 5.63054 16.4353 5.63054 16.4362 5.63054C16.437 5.63054 16.4379 5.63054 16.4387 5.63054C16.4396 5.63054 16.4404 5.63054 16.4413 5.63054C16.4421 5.63054 16.443 5.63054 16.4438 5.63054C16.4447 5.63054 16.4455 5.63054 16.4464 5.63054C16.4472 5.63054 16.4481 5.63054 16.4489 5.63054C16.4498 5.63054 16.4506 5.63054 16.4515 5.63054C16.4523 5.63054 16.4532 5.63054 16.454 5.63054C16.4549 5.63054 16.4557 5.63054 16.4566 5.63054C16.4574 5.63054 16.4583 5.63054 16.4591 5.63054C16.46 5.63054 16.4608 5.63054 16.4617 5.63054C16.4625 5.63054 16.4634 5.63054 16.4642 5.63054C16.4651 5.63054 16.466 5.63054 16.4668 5.63054C16.4677 5.63054 16.4685 5.63054 16.4694 5.63054C16.4702 5.63054 16.4711 5.63054 16.4719 5.63054C16.4728 5.63054 16.4736 5.63054 16.4745 5.63054C16.4753 5.63054 16.4762 5.63054 16.477 5.63054C16.4779 5.63054 16.4787 5.63054 16.4796 5.63054C16.4804 5.63054 16.4813 5.63054 16.4821 5.63054C16.483 5.63054 16.4838 5.63054 16.4847 5.63054C16.4855 5.63054 16.4864 5.63054 16.4872 5.63054C16.4881 5.63054 16.4889 5.63054 16.4898 5.63054C16.4906 5.63054 16.4915 5.63054 16.4923 5.63054C16.4932 5.63054 16.494 5.63054 16.4949 5.63054C16.4957 5.63054 16.4966 5.63054 16.4974 5.63054C16.4983 5.63054 16.4991 5.63054 16.5 5.63054C16.5008 5.63054 16.5017 5.63054 16.5025 5.63054C16.5034 5.63054 16.5042 5.63054 16.5051 5.63054C16.5059 5.63054 16.5068 5.63054 16.5076 5.63054C16.5085 5.63054 16.5093 5.63054 16.5102 5.63054C16.511 5.63054 16.5119 5.63054 16.5127 5.63054C16.5136 5.63054 16.5144 5.63054 16.5153 5.63054C16.5161 5.63054 16.517 5.63054 16.5178 5.63054C16.5187 5.63054 16.5195 5.63054 16.5204 5.63054C16.5212 5.63054 16.5221 5.63054 16.5229 5.63054C16.5238 5.63054 16.5246 5.63054 16.5255 5.63054C16.5263 5.63054 16.5272 5.63054 16.528 5.63054C16.5289 5.63054 16.5297 5.63054 16.5306 5.63054C16.5314 5.63054 16.5323 5.63054 16.5331 5.63054C16.534 5.63054 16.5348 5.63054 16.5357 5.63054C16.5365 5.63054 16.5374 5.63054 16.5382 5.63054C16.5391 5.63054 16.5399 5.63054 16.5408 5.63054C16.5416 5.63054 16.5425 5.63054 16.5433 5.63054C16.5442 5.63054 16.545 5.63054 16.5459 5.63054C16.5467 5.63054 16.5476 5.63054 16.5484 5.63054C16.5493 5.63054 16.5501 5.63054 16.551 5.63054C16.5518 5.63054 16.5527 5.63054 16.5535 5.63054C16.5544 5.63054 16.5552 5.63054 16.5561 5.63054C16.5569 5.63054 16.5578 5.63054 16.5586 5.63054C16.5595 5.63054 16.5603 5.63054 16.5612 5.63054C16.562 5.63054 16.5629 5.63054 16.5637 5.63054C16.5646 5.63054 16.5654 5.63054 16.5663 5.63054C16.5671 5.63054 16.568 5.63054 16.5688 5.63054C16.5697 5.63054 16.5705 5.63054 16.5714 5.63054C16.5722 5.63054 16.5731 5.63054 16.5739 5.63054C16.5748 5.63054 16.5756 5.63054 16.5765 5.63054C16.5773 5.63054 16.5782 5.63054 16.5791 5.63054C16.5799 5.63054 16.5808 5.63054 16.5816 5.63054C16.5825 5.63054 16.5833 5.63054 16.5842 5.63054C16.585 5.63054 16.5859 5.63054 16.5867 5.63054C16.5876 5.63054 16.5884 5.63054 16.5893 5.63054C16.5901 5.63054 16.591 5.63054 16.5918 5.63054C16.5927 5.63054 16.5935 5.63054 16.5944 5.63054C16.5952 5.63054 16.5961 5.63054 16.5969 5.63054C16.5978 5.63054 16.5986 5.63054 16.5995 5.63054C16.6003 5.63054 16.6012 5.63054 16.602 5.63054C16.6029 5.63054 16.6037 5.63054 16.6046 5.63054C16.6054 5.63054 16.6063 5.63054 16.6071 5.63054C16.608 5.63054 16.6088 5.63054 16.6097 5.63054C16.6105 5.63054 16.6114 5.63054 16.6122 5.63054C16.6131 5.63054 16.6139 5.63054 16.6148 5.63054C16.6156 5.63054 16.6165 5.63054 16.6173 5.63054C16.6182 5.63054 16.619 5.63054 16.6199 5.63054C16.6207 5.63054 16.6216 5.63054 16.6224 5.63054C16.6233 5.63054 16.6241 5.63054 16.625 5.63054C16.6258 5.63054 16.6267 5.63054 16.6275 5.63054C16.6284 5.63054 16.6292 5.63054 16.6301 5.63054C16.6309 5.63054 16.6318 5.63054 16.6326 5.63054C16.6335 5.63054 16.6343 5.63054 16.6352 5.63054C16.636 5.63054 16.6369 5.63054 16.6377 5.63054C16.6386 5.63054 16.6394 5.63054 16.6403 5.63054C16.6411 5.63054 16.642 5.63054 16.6428 5.63054C16.6437 5.63054 16.6445 5.63054 16.6454 5.63054C16.6462 5.63054 16.6471 5.63054 16.6479 5.63054C16.6488 5.63054 16.6496 5.63054 16.6505 5.63054C16.6513 5.63054 16.6522 5.63054 16.653 5.63054C16.6539 5.63054 16.6547 5.63054 16.6556 5.63054C16.6564 5.63054 16.6573 5.63054 16.6581 5.63054C16.659 5.63054 16.6598 5.63054 16.6607 5.63054C16.6615 5.63054 16.6624 5.63054 16.6632 5.63054C16.6641 5.63054 16.6649 5.63054 16.6658 5.63054C16.6666 5.63054 16.6675 5.63054 16.6683 5.63054C16.6692 5.63054 16.6701 5.63054 16.6709 5.63054C16.6718 5.63054 16.6726 5.63054 16.6735 5.63054C16.6743 5.63054 16.6752 5.63054 16.676 5.63054C16.6769 5.63054 16.6777 5.63054 16.6786 5.63054C16.6794 5.63054 16.6803 5.63054 16.6811 5.63054C16.682 5.63054 16.6828 5.63054 16.6837 5.63054C16.6845 5.63054 16.6854 5.63054 16.6862 5.63054C16.6871 5.63054 16.6879 5.63054 16.6888 5.63054C16.6896 5.63054 16.6905 5.63054 16.6913 5.63054C16.6922 5.63054 16.693 5.63054 16.6939 5.63054C16.6947 5.63054 16.6956 5.63054 16.6964 5.63054C16.6973 5.63054 16.6981 5.63054 16.699 5.63054C16.6998 5.63054 16.7007 5.63054 16.7015 5.63054C16.7024 5.63054 16.7032 5.63054 16.7041 5.63054C16.7049 5.63054 16.7058 5.63054 16.7066 5.63054C16.7075 5.63054 16.7083 5.63054 16.7092 5.63054C16.71 5.63054 16.7109 5.63054 16.7117 5.63054C16.7126 5.63054 16.7134 5.63054 16.7143 5.63054C16.7151 5.63054 16.716 5.63054 16.7168 5.63054C16.7177 5.63054 16.7185 5.63054 16.7194 5.63054C16.7202 5.63054 16.7211 5.63054 16.722 5.63054C16.7228 5.63054 16.7237 5.63054 16.7245 5.63054C16.7254 5.63054 16.7262 5.63054 16.7271 5.63054C16.7279 5.63054 16.7288 5.63054 16.7296 5.63054C16.7305 5.63054 16.7313 5.63054 16.7322 5.63054C16.733 5.63054 16.7339 5.63054 16.7347 5.63054C16.7356 5.63054 16.7364 5.63054 16.7373 5.63054C16.7381 5.63054 16.739 5.63054 16.7398 5.63054C16.7407 5.63054 16.7415 5.63054 16.7424 5.63054C16.7432 5.63054 16.7441 5.63054 16.7449 5.63054C16.7458 5.63054 16.7466 5.63054 16.7475 5.63054C16.7483 5.63054 16.7492 5.63054 16.75 5.63054C16.7509 5.63054 16.7517 5.63054 16.7526 5.63054C16.7534 5.63054 16.7543 5.63054 16.7551 5.63054C16.756 5.63054 16.7568 5.63054 16.7577 5.63054C16.7586 5.63054 16.7594 5.63054 16.7603 5.63054C16.7611 5.63054 16.762 5.63054 16.7628 5.63054C16.7637 5.63054 16.7645 5.63054 16.7654 5.63054C16.7662 5.63054 16.7671 5.63054 16.7679 5.63054C16.7688 5.63054 16.7696 5.63054 16.7705 5.63054C16.7713 5.63054 16.7722 5.63054 16.773 5.63054C16.7739 5.63054 16.7747 5.63054 16.7756 5.63054C16.7764 5.63054 16.7773 5.63054 16.7781 5.63054C16.779 5.63054 16.7798 5.63054 16.7807 5.63054C16.7815 5.63054 16.7824 5.63054 16.7832 5.63054C16.7841 5.63054 16.7849 5.63054 16.7858 5.63054C16.7866 5.63054 16.7875 5.63054 16.7884 5.63054C16.7892 5.63054 16.7901 5.63054 16.7909 5.63054C16.7918 5.63054 16.7926 5.63054 16.7935 5.63054C16.7943 5.63054 16.7952 5.63054 16.796 5.63054C16.7969 5.63054 16.7977 5.63054 16.7986 5.63054C16.7994 5.63054 16.8003 5.63054 16.8011 5.63054C16.802 5.63054 16.8028 5.63054 16.8037 5.63054C16.8045 5.63054 16.8054 5.63054 16.8062 5.63054C16.8071 5.63054 16.8079 5.63054 16.8088 5.63054C16.8096 5.63054 16.8105 5.63054 16.8113 5.63054C16.8122 5.63054 16.8131 5.63054 16.8139 5.63054C16.8148 5.63054 16.8156 5.63054 16.8165 5.63054C16.8173 5.63054 16.8182 5.63054 16.819 5.63054C16.8199 5.63054 16.8207 5.63054 16.8216 5.63054C16.8224 5.63054 16.8233 5.63054 16.8241 5.63054C16.825 5.63054 16.8258 5.63054 16.8267 5.63054C16.8275 5.63054 16.8284 5.63054 16.8292 5.63054C16.8301 5.63054 16.8309 5.63054 16.8318 5.63054C16.8326 5.63054 16.8335 5.63054 16.8344 5.63054C16.8352 5.63054 16.8361 5.63054 16.8369 5.63054C16.8378 5.63054 16.8386 5.63054 16.8395 5.63054C16.8403 5.63054 16.8412 5.63054 16.842 5.63054C16.8429 5.63054 16.8437 5.63054 16.8446 5.63054C16.8454 5.63054 16.8463 5.63054 16.8471 5.63054C16.848 5.63054 16.8488 5.63054 16.8497 5.63054C16.8505 5.63054 16.8514 5.63054 16.8523 5.63054C16.8531 5.63054 16.854 5.63054 16.8548 5.63054C16.8557 5.63054 16.8565 5.63054 16.8574 5.63054C16.8582 5.63054 16.8591 5.63054 16.8599 5.63054C16.8608 5.63054 16.8616 5.63054 16.8625 5.63054C16.8633 5.63054 16.8642 5.63054 16.865 5.63054C16.8659 5.63054 16.8667 5.63054 16.8676 5.63054C16.8685 5.63054 16.8693 5.63054 16.8702 5.63054C16.871 5.63054 16.8719 5.63054 16.8727 5.63054C16.8736 5.63054 16.8744 5.63054 16.8753 5.63054C16.8761 5.63054 16.877 5.63054 16.8778 5.63054C16.8787 5.63054 16.8795 5.63054 16.8804 5.63054C16.8812 5.63054 16.8821 5.63054 16.8829 5.63054C16.8838 5.63054 16.8847 5.63054 16.8855 5.63054C16.8864 5.63054 16.8872 5.63054 16.8881 5.63054C16.8889 5.63054 16.8898 5.63054 16.8906 5.63054C16.8915 5.63054 16.8923 5.63054 16.8932 5.63054C16.894 5.63054 16.8949 5.63054 16.8957 5.63054C16.8966 5.63054 16.8974 5.63054 16.8983 5.63054C16.8992 5.63054 16.9 5.63054 16.9009 5.63054C16.9017 5.63054 16.9026 5.63054 16.9034 5.63054C16.9043 5.63054 16.9051 5.63054 16.906 5.63054C16.9068 5.63054 16.9077 5.63054 16.9085 5.63054C16.9094 5.63054 16.9102 5.63054 16.9111 5.63054C16.912 5.63054 16.9128 5.63054 16.9137 5.63054C16.9145 5.63054 16.9154 5.63054 16.9162 5.63054C16.9171 5.63054 16.9179 5.63054 16.9188 5.63054C16.9196 5.63054 16.9205 5.63054 16.9213 5.63054C16.9222 5.63054 16.923 5.63054 16.9239 5.63054C16.9248 5.63054 16.9256 5.63054 16.9265 5.63054C16.9273 5.63054 16.9282 5.63054 16.929 5.63054C16.9299 5.63054 16.9307 5.63054 16.9316 5.63054C16.9324 5.63054 16.9333 5.63054 16.9341 5.63054C16.935 5.63054 16.9359 5.63054 16.9367 5.63054C16.9376 5.63054 16.9384 5.63054 16.9393 5.63054C16.9401 5.63054 16.941 5.63054 16.9418 5.63054C16.9427 5.63054 16.9435 5.63054 16.9444 5.63054C16.9452 5.63054 16.9461 5.63054 16.947 5.63054C16.9478 5.63054 16.9487 5.63054 16.9495 5.63054C16.9504 5.63054 16.9512 5.63054 16.9521 5.63054C16.9529 5.63054 16.9538 5.63054 16.9546 5.63054C16.9555 5.63054 16.9563 5.63054 16.9572 5.63054C16.9581 5.63054 16.9589 5.63054 16.9598 5.63054C16.9606 5.63054 16.9615 5.63054 16.9623 5.63054C16.9632 5.63054 16.964 5.63054 16.9649 5.63054C16.9657 5.63054 16.9666 5.63054 16.9675 5.63054C16.9683 5.63054 16.9692 5.63054 16.97 5.63054C16.9709 5.63054 16.9717 5.63054 16.9726 5.63054C16.9734 5.63054 16.9743 5.63054 16.9751 5.63054C16.976 5.63054 16.9768 5.63054 16.9777 5.63054C16.9786 5.63054 16.9794 5.63054 16.9803 5.63054C16.9811 5.63054 16.982 5.63054 16.9828 5.63054C16.9837 5.63054 16.9845 5.63054 16.9854 5.63054C16.9863 5.63054 16.9871 5.63054 16.988 5.63054C16.9888 5.63054 16.9897 5.63054 16.9905 5.63054C16.9914 5.63054 16.9922 5.63054 16.9931 5.63054C16.9939 5.63054 16.9948 5.63054 16.9957 5.63054C16.9965 5.63054 16.9974 5.63054 16.9982 5.63054C16.9991 5.63054 16.9999 5.63054 17.0008 5.63054C17.0016 5.63054 17.0025 5.63054 17.0033 5.63054C17.0042 5.63054 17.0051 5.63054 17.0059 5.63054C17.0068 5.63054 17.0076 5.63054 17.0085 5.63054C17.0093 5.63054 17.0102 5.63054 17.011 5.63054C17.0119 5.63054 17.0128 5.63054 17.0136 5.63054C17.0145 5.63054 17.0153 5.63054 17.0162 5.63054C17.017 5.63054 17.0179 5.63054 17.0187 5.63054C17.0196 5.63054 17.0205 5.63054 17.0213 5.63054C17.0222 5.63054 17.023 5.63054 17.0239 5.63054C17.0247 5.63054 17.0256 5.63054 17.0264 5.63054C17.0273 5.63054 17.0282 5.63054 17.029 5.63054C17.0299 5.63054 17.0307 5.63054 17.0316 5.63054C17.0324 5.63054 17.0333 5.63054 17.0341 5.63054C17.035 5.63054 17.0359 5.63054 17.0367 5.63054C17.0376 5.63054 17.0384 5.63054 17.0393 5.63054C17.0401 5.63054 17.041 5.63054 17.0418 5.63054C17.0427 5.63054 17.0436 5.63054 17.0444 5.63054C17.0453 5.63054 17.0461 5.63054 17.047 5.63054C17.0478 5.63054 17.0487 5.63054 17.0495 5.63054C17.0504 5.63054 17.0513 5.63054 17.0521 5.63054C17.053 5.63054 17.0538 5.63054 17.0547 5.63054C17.0555 5.63054 17.0564 5.63054 17.0573 5.63054C17.0581 5.63054 17.059 5.63054 17.0598 5.63054C17.0607 5.63054 17.0615 5.63054 17.0624 5.63054C17.0632 5.63054 17.0641 5.63054 17.065 5.63054C17.0658 5.63054 17.0667 5.63054 17.0675 5.63054C17.0684 5.63054 17.0692 5.63054 17.0701 5.63054C17.071 5.63054 17.0718 5.63054 17.0727 5.63054C17.0735 5.63054 17.0744 5.63054 17.0752 5.63054C17.0761 5.63054 17.077 5.63054 17.0778 5.63054C17.0787 5.63054 17.0795 5.63054 17.0804 5.63054C17.0812 5.63054 17.0821 5.63054 17.0829 5.63054C17.0838 5.63054 17.0847 5.63054 17.0855 5.63054C17.0864 5.63054 17.0872 5.63054 17.0881 5.63054C17.0889 5.63054 17.0898 5.63054 17.0907 5.63054C17.0915 5.63054 17.0924 5.63054 17.0932 5.63054C17.0941 5.63054 17.0949 5.63054 17.0958 5.63054C17.0967 5.63054 17.0975 5.63054 17.0984 5.63054C17.0992 5.63054 17.1001 5.63054 17.1009 5.63054C17.1018 5.63054 17.1027 5.63054 17.1035 5.63054C17.1044 5.63054 17.1052 5.63054 17.1061 5.63054C17.1069 5.63054 17.1078 5.63054 17.1087 5.63054C17.1095 5.63054 17.1104 5.63054 17.1112 5.63054C17.1121 5.63054 17.113 5.63054 17.1138 5.63054C17.1147 5.63054 17.1155 5.63054 17.1164 5.63054C17.1172 5.63054 17.1181 5.63054 17.119 5.63054C17.1198 5.63054 17.1207 5.63054 17.1215 5.63054C17.1224 5.63054 17.1232 5.63054 17.1241 5.63054C17.125 5.63054 17.1258 5.63054 17.1267 5.63054C17.1275 5.63054 17.1284 5.63054 17.1292 5.63054C17.1301 5.63054 17.131 5.63054 17.1318 5.63054C17.1327 5.63054 17.1335 5.63054 17.1344 5.63054C17.1353 5.63054 17.1361 5.63054 17.137 5.63054C17.1378 5.63054 17.1387 5.63054 17.1395 5.63054C17.1404 5.63054 17.1413 5.63054 17.1421 5.63054C17.143 5.63054 17.1438 5.63054 17.1447 5.63054C17.1456 5.63054 17.1464 5.63054 17.1473 5.63054C17.1481 5.63054 17.149 5.63054 17.1498 5.63054C17.1507 5.63054 17.1516 5.63054 17.1524 5.63054C17.1533 5.63054 17.1541 5.63054 17.155 5.63054C17.1559 5.63054 17.1567 5.63054 17.1576 5.63054C17.1584 5.63054 17.1593 5.63054 17.1602 5.63054C17.161 5.63054 17.1619 5.63054 17.1627 5.63054C17.1636 5.63054 17.1644 5.63054 17.1653 5.63054C17.1662 5.63054 17.167 5.63054 17.1679 5.63054C17.1687 5.63054 17.1696 5.63054 17.1705 5.63054C17.1713 5.63054 17.1722 5.63054 17.173 5.63054C17.1739 5.63054 17.1748 5.63054 17.1756 5.63054C17.1765 5.63054 17.1773 5.63054 17.1782 5.63054C17.1791 5.63054 17.1799 5.63054 17.1808 5.63054C17.1816 5.63054 17.1825 5.63054 17.1834 5.63054C17.1842 5.63054 17.1851 5.63054 17.1859 5.63054C17.1868 5.63054 17.1876 5.63054 17.1885 5.63054C17.1894 5.63054 17.1902 5.63054 17.1911 5.63054C17.1919 5.63054 17.1928 5.63054 17.1937 5.63054C17.1945 5.63054 17.1954 5.63054 17.1962 5.63054C17.1971 5.63054 17.198 5.63054 17.1988 5.63054C17.1997 5.63054 17.2005 5.63054 17.2014 5.63054C17.2023 5.63054 17.2031 5.63054 17.204 5.63054C17.2048 5.63054 17.2057 5.63054 17.2066 5.63054C17.2074 5.63054 17.2083 5.63054 17.2091 5.63054C17.21 5.63054 17.2109 5.63054 17.2117 5.63054C17.2126 5.63054 17.2134 5.63054 17.2143 5.63054C17.2152 5.63054 17.216 5.63054 17.2169 5.63054C17.2178 5.63054 17.2186 5.63054 17.2195 5.63054C17.2203 5.63054 17.2212 5.63054 17.2221 5.63054C17.2229 5.63054 17.2238 5.63054 17.2246 5.63054C17.2255 5.63054 17.2264 5.63054 17.2272 5.63054C17.2281 5.63054 17.2289 5.63054 17.2298 5.63054C17.2307 5.63054 17.2315 5.63054 17.2324 5.63054C17.2332 5.63054 17.2341 5.63054 17.235 5.63054C17.2358 5.63054 17.2367 5.63054 17.2376 5.63054C17.2384 5.63054 17.2393 5.63054 17.2401 5.63054C17.241 5.63054 17.2419 5.63054 17.2427 5.63054C17.2436 5.63054 17.2444 5.63054 17.2453 5.63054C17.2462 5.63054 17.247 5.63054 17.2479 5.63054C17.2487 5.63054 17.2496 5.63054 17.2505 5.63054C17.2513 5.63054 17.2522 5.63054 17.2531 5.63054C17.2539 5.63054 17.2548 5.63054 17.2556 5.63054C17.2565 5.63054 17.2574 5.63054 17.2582 5.63054C17.2591 5.63054 17.26 5.63054 17.2608 5.63054C17.2617 5.63054 17.2625 5.63054 17.2634 5.63054C17.2643 5.63054 17.2651 5.63054 17.266 5.63054C17.2668 5.63054 17.2677 5.63054 17.2686 5.63054C17.2694 5.63054 17.2703 5.63054 17.2712 5.63054C17.272 5.63054 17.2729 5.63054 17.2737 5.63054C17.2746 5.63054 17.2755 5.63054 17.2763 5.63054C17.2772 5.63054 17.2781 5.63054 17.2789 5.63054C17.2798 5.63054 17.2806 5.63054 17.2815 5.63054C17.2824 5.63054 17.2832 5.63054 17.2841 5.63054C17.285 5.63054 17.2858 5.63054 17.2867 5.63054C17.2875 5.63054 17.2884 5.63054 17.2893 5.63054C17.2901 5.63054 17.291 5.63054 17.2919 5.63054C17.2927 5.63054 17.2936 5.63054 17.2944 5.63054C17.2953 5.63054 17.2962 5.63054 17.297 5.63054C17.2979 5.63054 17.2988 5.63054 17.2996 5.63054C17.3005 5.63054 17.3014 5.63054 17.3022 5.63054C17.3031 5.63054 17.3039 5.63054 17.3048 5.63054C17.3057 5.63054 17.3065 5.63054 17.3074 5.63054C17.3083 5.63054 17.3091 5.63054 17.31 5.63054C17.3109 5.63054 17.3117 5.63054 17.3126 5.63054C17.3134 5.63054 17.3143 5.63054 17.3152 5.63054C17.316 5.63054 17.3169 5.63054 17.3178 5.63054C17.3186 5.63054 17.3195 5.63054 17.3204 5.63054C17.3212 5.63054 17.3221 5.63054 17.3229 5.63054C17.3238 5.63054 17.3247 5.63054 17.3255 5.63054C17.3264 5.63054 17.3273 5.63054 17.3281 5.63054C17.329 5.63054 17.3299 5.63054 17.3307 5.63054C17.3316 5.63054 17.3324 5.63054 17.3333 5.63054C17.3342 5.63054 17.335 5.63054 17.3359 5.63054C17.3368 5.63054 17.3376 5.63054 17.3385 5.63054C17.3394 5.63054 17.3402 5.63054 17.3411 5.63054C17.342 5.63054 17.3428 5.63054 17.3437 5.63054C17.3446 5.63054 17.3454 5.63054 17.3463 5.63054C17.3471 5.63054 17.348 5.63054 17.3489 5.63054C17.3497 5.63054 17.3506 5.63054 17.3515 5.63054C17.3523 5.63054 17.3532 5.63054 17.3541 5.63054C17.3549 5.63054 17.3558 5.63054 17.3567 5.63054C17.3575 5.63054 17.3584 5.63054 17.3593 5.63054C17.3601 5.63054 17.361 5.63054 17.3619 5.63054C17.3627 5.63054 17.3636 5.63054 17.3645 5.63054C17.3653 5.63054 17.3662 5.63054 17.367 5.63054C17.3679 5.63054 17.3688 5.63054 17.3696 5.63054C17.3705 5.63054 17.3714 5.63054 17.3722 5.63054C17.3731 5.63054 17.374 5.63054 17.3748 5.63054C17.3757 5.63054 17.3766 5.63054 17.3774 5.63054C17.3783 5.63054 17.3792 5.63054 17.38 5.63054C17.3809 5.63054 17.3818 5.63054 17.3826 5.63054C17.3835 5.63054 17.3844 5.63054 17.3852 5.63054C17.3861 5.63054 17.387 5.63054 17.3878 5.63054C17.3887 5.63054 17.3896 5.63054 17.3904 5.63054C17.3913 5.63054 17.3922 5.63054 17.393 5.63054C17.3939 5.63054 17.3948 5.63054 17.3956 5.63054C17.3965 5.63054 17.3974 5.63054 17.3982 5.63054C17.3991 5.63054 17.4 5.63054 17.4008 5.63054C17.4017 5.63054 17.4026 5.63054 17.4034 5.63054C17.4043 5.63054 17.4052 5.63054 17.406 5.63054C17.4069 5.63054 17.4078 5.63054 17.4086 5.63054C17.4095 5.63054 17.4104 5.63054 17.4112 5.63054C17.4121 5.63054 17.413 5.63054 17.4138 5.63054C17.4147 5.63054 17.4156 5.63054 17.4164 5.63054C17.4173 5.63054 17.4182 5.63054 17.419 5.63054C17.4199 5.63054 17.4208 5.63054 17.4216 5.63054C17.4225 5.63054 17.4234 5.63054 17.4242 5.63054C17.4251 5.63054 17.426 5.63054 17.4269 5.63054C17.4277 5.63054 17.4286 5.63054 17.4295 5.63054C17.4303 5.63054 17.4312 5.63054 17.4321 5.63054C17.4329 5.63054 17.4338 5.63054 17.4347 5.63054C17.4355 5.63054 17.4364 5.63054 17.4373 5.63054C17.4381 5.63054 17.439 5.63054 17.4399 5.63054C17.4407 5.63054 17.4416 5.63054 17.4425 5.63054C17.4433 5.63054 17.4442 5.63054 17.4451 5.63054C17.446 5.63054 17.4468 5.63054 17.4477 5.63054C17.4486 5.63054 17.4494 5.63054 17.4503 5.63054C17.4512 5.63054 17.452 5.63054 17.4529 5.63054C17.4538 5.63054 17.4546 5.63054 17.4555 5.63054C17.4564 5.63054 17.4572 5.63054 17.4581 5.63054C17.459 5.63054 17.4599 5.63054 17.4607 5.63054C17.4616 5.63054 17.4625 5.63054 17.4633 5.63054C17.4642 5.63054 17.4651 5.63054 17.4659 5.63054C17.4668 5.63054 17.4677 5.63054 17.4685 5.63054C17.4694 5.63054 17.4703 5.63054 17.4712 5.63054C17.472 5.63054 17.4729 5.63054 17.4738 5.63054C17.4746 5.63054 17.4755 5.63054 17.4764 5.63054C17.4772 5.63054 17.4781 5.63054 17.479 5.63054C17.4799 5.63054 17.4807 5.63054 17.4816 5.63054C17.4825 5.63054 17.4833 5.63054 17.4842 5.63054C17.4851 5.63054 17.4859 5.63054 17.4868 5.63054C17.4877 5.63054 17.4886 5.63054 17.4894 5.63054C17.4903 5.63054 17.4912 5.63054 17.492 5.63054C17.4929 5.63054 17.4938 5.63054 17.4947 5.63054C17.4955 5.63054 17.4964 5.63054 17.4973 5.63054C17.4981 5.63054 17.499 5.63054 17.4999 5.63054C17.5007 5.63054 17.5016 5.63054 17.5025 5.63054C17.5034 5.63054 17.5042 5.63054 17.5051 5.63054C17.506 5.63054 17.5068 5.63054 17.5077 5.63054C17.5086 5.63054 17.5095 5.63054 17.5103 5.63054C17.5112 5.63054 17.5121 5.63054 17.5129 5.63054C17.5138 5.63054 17.5147 5.63054 17.5156 5.63054C17.5164 5.63054 17.5173 5.63054 17.5182 5.63054C17.519 5.63054 17.5199 5.63054 17.5208 5.63054C17.5217 5.63054 17.5225 5.63054 17.5234 5.63054C17.5243 5.63054 17.5251 5.63054 17.526 5.63054C17.5269 5.63054 17.5278 5.63054 17.5286 5.63054C17.5295 5.63054 17.5304 5.63054 17.5313 5.63054C17.5321 5.63054 17.533 5.63054 17.5339 5.63054C17.5347 5.63054 17.5356 5.63054 17.5365 5.63054C17.5374 5.63054 17.5382 5.63054 17.5391 5.63054C17.54 5.63054 17.5408 5.63054 17.5417 5.63054C17.5426 5.63054 17.5435 5.63054 17.5443 5.63054C17.5452 5.63054 17.5461 5.63054 17.547 5.63054C17.5478 5.63054 17.5487 5.63054 17.5496 5.63054C17.5504 5.63054 17.5513 5.63054 17.5522 5.63054C17.5531 5.63054 17.5539 5.63054 17.5548 5.63054C17.5557 5.63054 17.5566 5.63054 17.5574 5.63054C17.5583 5.63054 17.5592 5.63054 17.5601 5.63054C17.5609 5.63054 17.5618 5.63054 17.5627 5.63054C17.5635 5.63054 17.5644 5.63054 17.5653 5.63054C17.5662 5.63054 17.567 5.63054 17.5679 5.63054C17.5688 5.63054 17.5697 5.63054 17.5705 5.63054C17.5714 5.63054 17.5723 5.63054 17.5732 5.63054C17.574 5.63054 17.5749 5.63054 17.5758 5.63054C17.5767 5.63054 17.5775 5.63054 17.5784 5.63054C17.5793 5.63054 17.5802 5.63054 17.581 5.63054C17.5819 5.63054 17.5828 5.63054 17.5837 5.63054C17.5845 5.63054 17.5854 5.63054 17.5863 5.63054C17.5872 5.63054 17.588 5.63054 17.5889 5.63054C17.5898 5.63054 17.5907 5.63054 17.5915 5.63054C17.5924 5.63054 17.5933 5.63054 17.5942 5.63054C17.595 5.63054 17.5959 5.63054 17.5968 5.63054C17.5977 5.63054 17.5985 5.63054 17.5994 5.63054C17.6003 5.63054 17.6012 5.63054 17.602 5.63054C17.6029 5.63054 17.6038 5.63054 17.6047 5.63054C17.6055 5.63054 17.6064 5.63054 17.6073 5.63054V2.63054ZM17.3657 3.0845C17.3268 3.04452 17.2939 3.01525 17.2841 3.00657C17.2772 3.00045 17.2716 2.99558 17.2688 2.99313C17.2673 2.9918 17.266 2.9907 17.2653 2.9901C17.2649 2.98979 17.2646 2.98951 17.2644 2.98936C17.2642 2.98917 17.2642 2.98915 17.2641 2.98911C17.2595 2.9851 17.2901 3.011 17.3254 3.04556C17.3561 3.07562 17.4386 3.15808 17.521 3.28295C17.5917 3.39003 17.7663 3.68158 17.7663 4.10135H14.7663C14.7663 4.52634 14.9431 4.82335 15.0175 4.93591C15.1035 5.06625 15.1909 5.15419 15.2269 5.18946C15.2676 5.22924 15.3039 5.26008 15.3044 5.2605C15.3327 5.28493 15.2715 5.23409 15.2155 5.17658L17.3657 3.0845ZM17.7663 4.10935C17.771 3.22856 17.731 2.62544 17.7892 1.94638L14.8002 1.69C14.7286 2.5247 14.7697 3.45203 14.7663 4.09335L17.7663 4.10935ZM17.7888 1.95035C17.8028 1.79273 17.8633 1.69689 17.9312 1.63522C18.0029 1.57005 18.1265 1.50498 18.3171 1.49934L18.2283 -1.49934C16.4612 -1.44705 14.9651 -0.174794 14.8005 1.68603L17.7888 1.95035Z", fill: "#404D60", mask: "url(#path-5-inside-2_1_1540)" }),
            React__default['default'].createElement("path", { d: "M12.8778 13.2188H12.8792C12.8787 13.2259 12.8783 13.2331 12.8778 13.2403V13.2393V13.2355V13.2318V13.228V13.2243V13.2206V13.2188Z", stroke: "#808191", "stroke-width": "1.5" }))));
};

var Icon$J = function (props) {
    return (React__default['default'].createElement(Svg, __assign({}, props, { xmlns: "http://www.w3.org/2000/svg", height: "32px", width: "32px", baseProfile: "basic", id: "Layer_1", version: "1.1", viewBox: "0 0 45 35" }),
        React__default['default'].createElement("g", null,
            React__default['default'].createElement("polygon", { opacity: "0.3", points: "2,28 16,21 40,33 26,40  " }),
            React__default['default'].createElement("g", null,
                React__default['default'].createElement("path", { d: "M21.5,30.8c-0.7-0.4-1.4-0.4-1.9-0.2l0,0l-1.4,0.7l0,0c-0.5,0.2-0.9,0.8-0.9,1.6c0,1.5,1.3,3.4,2.8,4.2    c0.8,0.4,1.5,0.4,2,0.2c0,0,1.4-0.7,1.5-0.8c0.5-0.3,0.7-0.8,0.7-1.5C24.3,33.4,23,31.5,21.5,30.8z", fill: "#2D3134" }),
                React__default['default'].createElement("path", { d: "M22,37.2c0.2-0.1,1.4-0.7,1.5-0.7c0.5-0.3,0.7-0.8,0.7-1.5c0-0.6-0.2-1.3-0.5-1.9l-1.4,0.7    c0.3,0.6,0.5,1.3,0.5,1.9C22.9,36.4,22.5,37,22,37.2z", opacity: "0.39" }),
                React__default['default'].createElement("path", { d: "M22.1,35.3c0,1.2-0.9,1.6-2.1,1c-1.2-0.6-2.1-2-2.1-3.2s0.9-1.6,2.1-1C21.2,32.7,22.1,34.1,22.1,35.3z", fill: "#999999" }),
                React__default['default'].createElement("path", { d: "M20.2,36.3c-1.2-0.6-2.1-2-2.1-3.2c0-0.6,0.2-1,0.6-1.2c-0.5,0.1-0.8,0.6-0.8,1.2c0,1.2,0.9,2.6,2.1,3.2    c0.6,0.3,1.1,0.3,1.5,0.1C21.2,36.6,20.7,36.5,20.2,36.3z", fill: "#808285" }),
                React__default['default'].createElement("path", { d: "M21.1,34.6c0,0.5-0.4,0.7-0.9,0.4s-0.9-0.8-0.9-1.3c0-0.5,0.4-0.7,0.9-0.4S21.1,34.1,21.1,34.6z", fill: "#2D3134" }),
                React__default['default'].createElement("path", { d: "M21.1,34.6c0,0.5-0.4,0.7-0.9,0.4s-0.9-0.8-0.9-1.3c0-0.5,0.4-0.7,0.9-0.4S21.1,34.1,21.1,34.6z", opacity: "0.39" }),
                React__default['default'].createElement("path", { d: "M20.9,34.7c0,0.5-0.4,0.7-0.9,0.4c-0.5-0.2-0.9-0.8-0.9-1.3s0.4-0.7,0.9-0.4    C20.5,33.6,20.9,34.2,20.9,34.7z", fill: "#2D3134" }),
                React__default['default'].createElement("path", { d: "M22.9,35.7c0,1.5-1.3,2.2-2.8,1.4c-1.5-0.8-2.8-2.7-2.8-4.2c0-1.5,1.3-2.2,2.8-1.4    C21.6,32.2,22.9,34.1,22.9,35.7z", opacity: "0.06" })),
            React__default['default'].createElement("polygon", { fill: "#2D3134", points: "22.5,32.9 22.5,36.7 25,35.4 25,31.7  " }),
            React__default['default'].createElement("polygon", { opacity: "0.06", points: "22.5,32.9 22.5,36.7 25,35.4 25,31.7  " }),
            React__default['default'].createElement("g", null,
                React__default['default'].createElement("path", { d: "M7.4,23.8c-0.7-0.4-1.4-0.4-1.9-0.2l0,0l-1.4,0.7l0,0c-0.5,0.2-0.9,0.8-0.9,1.6c0,1.5,1.3,3.4,2.8,4.2    c0.8,0.4,1.5,0.4,2,0.2c0,0,1.4-0.7,1.5-0.8c0.5-0.3,0.7-0.8,0.7-1.5C10.3,26.4,9,24.5,7.4,23.8z", fill: "#2D3134" }),
                React__default['default'].createElement("path", { d: "M8,30.2c0.2-0.1,1.4-0.7,1.5-0.7c0.5-0.3,0.7-0.8,0.7-1.5c0-0.6-0.2-1.3-0.5-1.9l-1.4,0.7    c0.3,0.6,0.5,1.3,0.5,1.9C8.9,29.4,8.5,30,8,30.2z", opacity: "0.39" }),
                React__default['default'].createElement("path", { d: "M8.1,28.3c0,1.2-0.9,1.6-2.1,1S4,27.4,4,26.2s0.9-1.6,2.1-1C7.2,25.7,8.1,27.1,8.1,28.3z", fill: "#999999" }),
                React__default['default'].createElement("path", { d: "M6.2,29.3c-1.2-0.6-2.1-2-2.1-3.2c0-0.6,0.2-1,0.6-1.2C4.3,25.1,4,25.5,4,26.2c0,1.2,0.9,2.6,2.1,3.2    c0.6,0.3,1.1,0.3,1.5,0.1C7.2,29.6,6.7,29.5,6.2,29.3z", fill: "#808285" }),
                React__default['default'].createElement("path", { d: "M7.1,27.6c0,0.5-0.4,0.7-0.9,0.4s-0.9-0.8-0.9-1.3s0.4-0.7,0.9-0.4S7.1,27.1,7.1,27.6z", fill: "#2D3134" }),
                React__default['default'].createElement("path", { d: "M7.1,27.6c0,0.5-0.4,0.7-0.9,0.4s-0.9-0.8-0.9-1.3s0.4-0.7,0.9-0.4S7.1,27.1,7.1,27.6z", opacity: "0.39" }),
                React__default['default'].createElement("path", { d: "M6.9,27.7c0,0.5-0.4,0.7-0.9,0.4s-0.9-0.8-0.9-1.3c0-0.5,0.4-0.7,0.9-0.4S6.9,27.2,6.9,27.7z", fill: "#2D3134" }),
                React__default['default'].createElement("path", { d: "M8.9,28.7c0,1.5-1.3,2.2-2.8,1.4c-1.5-0.8-2.8-2.7-2.8-4.2c0-1.5,1.3-2.2,2.8-1.4    C7.6,25.2,8.9,27.1,8.9,28.7z", opacity: "0.06" })),
            React__default['default'].createElement("polygon", { fill: "#2D3134", points: "8.5,25.9 8.5,29.7 11,28.4 11,24.7  " }),
            React__default['default'].createElement("polygon", { opacity: "0.06", points: "8.5,25.9 8.5,29.7 11,28.4 11,24.7  " }),
            React__default['default'].createElement("polygon", { fill: "#2D3134", points: "40,26 40,28 26,35 26,33  " }),
            React__default['default'].createElement("polygon", { fill: "#2D3134", points: "2,21 2,23 26,35 26,33  " }),
            React__default['default'].createElement("g", null,
                React__default['default'].createElement("polygon", { fill: "#28896D", points: "16,6 2,13 2,21 26,33 40,26 40,18   " }),
                React__default['default'].createElement("polygon", { opacity: "0.06", points: "30,22 16,15 16,7 38,18   " }),
                React__default['default'].createElement("polygon", { opacity: "0.39", points: "12,17 16,15 16,7 4,13   " }),
                React__default['default'].createElement("polygon", { opacity: "0.06", points: "26,35 2,23 2,13 26,25   " }),
                React__default['default'].createElement("polygon", { opacity: "0.39", points: "40,18 26,25 26,35 40,28   " }),
                React__default['default'].createElement("path", { d: "M16,6L2,13l24,12l14-7L16,6z M26,24L4,13l12-6l22,11L26,24z", fill: "#28896D" }),
                React__default['default'].createElement("polygon", { fill: "#FFFFFF", opacity: "0.1", points: "12,17 26,24 30,22 16,15   " })),
            React__default['default'].createElement("path", { d: "M36,28l-6,3v1l14,5l2-1v-1L36,28z M33.2,31.4L36,30l5.6,4.2L33.2,31.4z", fill: "#28896D" }),
            React__default['default'].createElement("polygon", { fill: "#28896D", points: "36,30 44,36 44,35 36,29 32,31 32,32  " }),
            React__default['default'].createElement("polygon", { opacity: "0.06", points: "30,31 30,32 44,37 44,36  " }),
            React__default['default'].createElement("polygon", { opacity: "0.39", points: "44,37 46,36 46,35 44,36  " }),
            React__default['default'].createElement("polygon", { opacity: "0.06", points: "36,30 41.6,34.2 44,35 36,29  " }),
            React__default['default'].createElement("polygon", { opacity: "0.39", points: "32,31 33.2,31.4 36,30 36,29  " })),
        React__default['default'].createElement("g", null,
            React__default['default'].createElement("path", { d: "M20,7c-6,0-11.1,3.4-13.9,7L26,24l10-5C36,14.6,28.8,7,20,7z", fill: "#FFCC00" }),
            React__default['default'].createElement("path", { d: "M28.8,18.6L28.8,18.6c2.6-1.3,3.7-4,3.4-6.4C29.3,9.3,24.9,7,20,7c-3.7,0-7.1,1.3-9.8,3.2   c0.5,1.4,1.5,2.6,3,3.4l10,5C25,19.5,27,19.5,28.8,18.6z", fill: "#FFFFFF", opacity: "0.2" }))));
};

var Icon$K = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M12 12.75C13.63 12.75 15.07 13.14 16.24 13.65C17.32 14.13 18 15.21 18 16.38V17C18 17.55 17.55 18 17 18H7C6.45 18 6 17.55 6 17V16.39C6 15.21 6.68 14.13 7.76 13.66C8.93 13.14 10.37 12.75 12 12.75ZM4 13C5.1 13 6 12.1 6 11C6 9.9 5.1 9 4 9C2.9 9 2 9.9 2 11C2 12.1 2.9 13 4 13ZM5.13 14.1C4.76 14.04 4.39 14 4 14C3.01 14 2.07 14.21 1.22 14.58C0.48 14.9 0 15.62 0 16.43V17C0 17.55 0.45 18 1 18H4.5V16.39C4.5 15.56 4.73 14.78 5.13 14.1ZM20 13C21.1 13 22 12.1 22 11C22 9.9 21.1 9 20 9C18.9 9 18 9.9 18 11C18 12.1 18.9 13 20 13ZM24 16.43C24 15.62 23.52 14.9 22.78 14.58C21.93 14.21 20.99 14 20 14C19.61 14 19.24 14.04 18.87 14.1C19.27 14.78 19.5 15.56 19.5 16.39V18H23C23.55 18 24 17.55 24 17V16.43ZM12 6C13.66 6 15 7.34 15 9C15 10.66 13.66 12 12 12C10.34 12 9 10.66 9 9C9 7.34 10.34 6 12 6Z" })));
};

var Icon$L = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("image", { width: "26", height: "26", href: '/images/open.png' })));
};

var Icon$M = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("image", { width: "26", height: "26", href: '/images/close.png' })));
};

var Icon$N = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
            React__default['default'].createElement("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M4.54 2H7.92C9.33 2 10.46 3.15 10.46 4.561V7.97C10.46 9.39 9.33 10.53 7.92 10.53H4.54C3.14 10.53 2 9.39 2 7.97V4.561C2 3.15 3.14 2 4.54 2ZM4.54 13.4697H7.92C9.33 13.4697 10.46 14.6107 10.46 16.0307V19.4397C10.46 20.8497 9.33 21.9997 7.92 21.9997H4.54C3.14 21.9997 2 20.8497 2 19.4397V16.0307C2 14.6107 3.14 13.4697 4.54 13.4697ZM19.4601 2H16.0801C14.6701 2 13.5401 3.15 13.5401 4.561V7.97C13.5401 9.39 14.6701 10.53 16.0801 10.53H19.4601C20.8601 10.53 22.0001 9.39 22.0001 7.97V4.561C22.0001 3.15 20.8601 2 19.4601 2ZM16.0801 13.4697H19.4601C20.8601 13.4697 22.0001 14.6107 22.0001 16.0307V19.4397C22.0001 20.8497 20.8601 21.9997 19.4601 21.9997H16.0801C14.6701 21.9997 13.5401 20.8497 13.5401 19.4397V16.0307C13.5401 14.6107 14.6701 13.4697 16.0801 13.4697Z" }))));
};

var Icon$O = function (props) {
    return (React__default['default'].createElement(Svg, __assign({}, props, { xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 1", height: "32", id: "Layer_1", viewBox: "0 0 32 32", width: "32" }),
        React__default['default'].createElement("path", { d: "M14.1947,3.7572a2.5909,2.5909,0,0,1,3.6694.0086l10.333,10.401a2.6022,2.6022,0,0,1,.7563,1.8226L28.98,21.98,29,26.3888A2.5983,2.5983,0,0,1,26.405,29H24V17L16,9,12.4734,5.4735Z", fill: "#4285f4" }),
        React__default['default'].createElement("path", { d: "M14.1161,3.7658,3.7831,14.1668a2.6022,2.6022,0,0,0-.7563,1.8226L3,21.98,7.98,17l8-8,3.5266-3.5265L17.7855,3.7572A2.5909,2.5909,0,0,0,14.1161,3.7658Z", fill: "#ea4435" }),
        React__default['default'].createElement("path", { d: "M8,24V17L3.02,21.98,3,26.3888A2.5983,2.5983,0,0,0,5.595,29H8Z", fill: "#fbc02d" }),
        React__default['default'].createElement("rect", { fill: "#00ac47", height: "5", width: "16", x: "8", y: "24" })));
};

var Icon$P = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
            React__default['default'].createElement("path", { d: "M4.0323 11.5961C3.64027 11.9822 3.72319 12.6366 4.19999 12.9119L15.3457 19.3469C15.82 19.6265 16.4326 19.3736 16.5709 18.8411M4.0323 11.5961L4.55449 12.1344C4.55547 12.1335 4.55645 12.1326 4.55742 12.1316M4.0323 11.5961C5.2121 10.4517 6.69553 9.64009 8.31545 9.2689C10.0906 6.53771 12.8634 4.45251 16.1366 3.53108L16.8832 3.30886M4.0323 11.5961L4.55855 12.1305C4.55817 12.1309 4.55779 12.1312 4.55742 12.1316M4.55742 12.1316C4.51912 12.1707 4.52856 12.2356 4.57499 12.2624L15.7207 18.6974L15.7267 18.7008L15.7267 18.7008C15.7489 18.7139 15.7724 18.7159 15.7981 18.7053C15.8235 18.6948 15.8383 18.6774 15.8447 18.6536M4.55742 12.1316C5.63892 11.0836 6.99876 10.34 8.48297 9.99995L8.77886 9.93215L8.94429 9.67762C10.6212 7.09755 13.2435 5.12466 16.3399 4.25302L16.3399 4.2531L16.3506 4.24991L16.7325 4.13622M15.8447 18.6536C15.8445 18.6546 15.8442 18.6556 15.844 18.6566L16.5709 18.8411M15.8447 18.6536C15.8448 18.6532 15.8449 18.6529 15.845 18.6526L16.5709 18.8411M15.8447 18.6536C16.2215 17.1672 16.1763 15.6467 15.7279 14.1886L15.6387 13.8987L15.7762 13.6283C17.1582 10.91 17.572 7.68085 16.8354 4.56459L16.8357 4.5659L17.565 4.39074M16.5709 18.8411C16.9829 17.2184 16.9333 15.5567 16.4448 13.9682C17.9073 11.0915 18.3429 7.68024 17.565 4.39074M17.565 4.39074L16.8351 4.56334L16.7325 4.13622M17.565 4.39074L17.3731 3.59172C17.3365 3.37228 17.1178 3.246 16.8832 3.30886M16.8832 3.30886L16.9866 3.65621L16.9944 3.68266L17.0971 4.02769L16.7325 4.13622M16.8832 3.30886L16.9767 3.65786L16.984 3.68517L17.0773 4.0333C17.0158 4.04978 16.9227 4.04896 16.8274 3.99394C16.7427 3.94505 16.6757 3.86286 16.6456 3.76645C16.6404 3.74974 16.6362 3.73261 16.6333 3.71515L16.6377 3.74119L16.6438 3.76687L16.7325 4.13622", stroke: "#808191", "stroke-width": "1.5" }),
            React__default['default'].createElement("path", { d: "M7.1717 20.6349C8.17342 21.2132 9.7681 20.3201 10.7379 18.6403L7.11597 16.5492C6.14617 18.2289 6.16999 20.0566 7.1717 20.6349Z", fill: "#404D60" }))));
};

var Icon$Q = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ xmlns: "http://www.w3.org/2000/svg" }, props, { height: "32px", width: "32px", "enable-background": "new 0 0 128 128", id: "Layer_1", version: "1.1", viewBox: "0 0 128 128" }),
        React__default['default'].createElement("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
            React__default['default'].createElement("path", { d: "M5.6326 19.5C5.26787 19.5006 4.90468 19.4527 4.5526 19.3575C3.49578 19.0561 2.59917 18.3525 2.05515 17.3977C1.51112 16.4428 1.36301 15.3128 1.6426 14.25L3.3901 7.61997C3.52619 7.0834 3.76813 6.57943 4.10171 6.13767C4.43529 5.6959 4.85378 5.32525 5.3326 5.04747C5.79882 4.77743 6.31399 4.60259 6.84827 4.53307C7.38254 4.46355 7.9253 4.50073 8.4451 4.64247C8.99766 4.79591 9.51231 5.06247 9.95643 5.42526C10.4006 5.78805 10.7645 6.23915 11.0251 6.74997H12.9751C13.2346 6.23833 13.5982 5.78657 14.0424 5.42364C14.4867 5.06072 15.002 4.79464 15.5551 4.64247C16.0749 4.50073 16.6177 4.46355 17.1519 4.53307C17.6862 4.60259 18.2014 4.77743 18.6676 5.04747C19.1441 5.32453 19.5611 5.69316 19.8944 6.13209C20.2278 6.57103 20.471 7.07161 20.6101 7.60497L22.3576 14.25C22.6414 15.3159 22.4944 16.4506 21.9485 17.4091C21.4027 18.3675 20.5016 19.0728 19.4401 19.3725C18.9203 19.5142 18.3775 19.5514 17.8433 19.4819C17.309 19.4124 16.7938 19.2375 16.3276 18.9675C15.8503 18.6914 15.4328 18.3231 15.0993 17.884C14.7658 17.4449 14.523 16.9438 14.3851 16.41L14.2501 15.75H9.7501L9.5776 16.395C9.43971 16.9288 9.19694 17.4299 8.86344 17.869C8.52994 18.3081 8.11238 18.6764 7.6351 18.9525C7.02571 19.3039 6.33605 19.4925 5.6326 19.5ZM7.3726 5.99997C6.92 6.00151 6.47554 6.12038 6.0826 6.34497C5.46674 6.70631 5.01909 7.29688 4.8376 7.98747L3.0901 14.6175C2.90724 15.3005 2.99964 16.0281 3.34744 16.6437C3.69524 17.2594 4.27068 17.714 4.9501 17.91C5.27823 17.9995 5.62085 18.023 5.95814 17.9793C6.29542 17.9355 6.62069 17.8253 6.9151 17.655C7.22163 17.478 7.48968 17.2415 7.70348 16.9595C7.91729 16.6774 8.07254 16.3554 8.1601 16.0125L8.6251 14.25H15.3751L15.8326 16.0125C15.9217 16.3548 16.0776 16.6761 16.2912 16.9579C16.5049 17.2398 16.7721 17.4767 17.0776 17.655C17.3735 17.8251 17.7 17.9352 18.0385 17.9789C18.3769 18.0227 18.7207 17.9993 19.0501 17.91C19.7303 17.7159 20.3065 17.2611 20.6534 16.6446C21.0002 16.0281 21.0898 15.2996 20.9026 14.6175L19.1551 7.98747C19.068 7.64532 18.9138 7.3239 18.7013 7.04192C18.4889 6.75994 18.2225 6.52303 17.9176 6.34497C17.6217 6.17484 17.2952 6.06475 16.9567 6.02099C16.6183 5.97724 16.2745 6.00068 15.9451 6.08997C15.5377 6.20609 15.164 6.41773 14.8548 6.70731C14.5457 6.99689 14.3101 7.35606 14.1676 7.75497L13.9876 8.24997H10.0126L9.8326 7.75497C9.68886 7.35552 9.45195 6.99611 9.14151 6.70654C8.83108 6.41698 8.45607 6.20561 8.0476 6.08997C7.8275 6.03062 7.60056 6.00036 7.3726 5.99997Z", fill: "#808191" }),
            React__default['default'].createElement("path", { d: "M7.5 12C7.20333 12 6.91332 11.912 6.66665 11.7472C6.41997 11.5824 6.22771 11.3481 6.11418 11.074C6.00065 10.7999 5.97094 10.4983 6.02882 10.2074C6.0867 9.91639 6.22956 9.64912 6.43934 9.43934C6.64912 9.22956 6.91639 9.0867 7.20737 9.02882C7.49834 8.97094 7.79994 9.00065 8.07403 9.11418C8.34812 9.22771 8.58238 9.41997 8.74721 9.66665C8.91203 9.91332 9 10.2033 9 10.5C9 10.8978 8.84197 11.2794 8.56066 11.5607C8.27936 11.842 7.89783 12 7.5 12Z", fill: "#404D60" }),
            React__default['default'].createElement("path", { d: "M16.5 9.75C16.9142 9.75 17.25 9.41421 17.25 9C17.25 8.58579 16.9142 8.25 16.5 8.25C16.0858 8.25 15.75 8.58579 15.75 9C15.75 9.41421 16.0858 9.75 16.5 9.75Z", fill: "#404D60" }),
            React__default['default'].createElement("path", { d: "M16.5 12.75C16.9142 12.75 17.25 12.4142 17.25 12C17.25 11.5858 16.9142 11.25 16.5 11.25C16.0858 11.25 15.75 11.5858 15.75 12C15.75 12.4142 16.0858 12.75 16.5 12.75Z", fill: "#404D60" }),
            React__default['default'].createElement("path", { d: "M15 11.25C15.4142 11.25 15.75 10.9142 15.75 10.5C15.75 10.0858 15.4142 9.75 15 9.75C14.5858 9.75 14.25 10.0858 14.25 10.5C14.25 10.9142 14.5858 11.25 15 11.25Z", fill: "#404D60" }),
            React__default['default'].createElement("path", { d: "M18 11.25C18.4142 11.25 18.75 10.9142 18.75 10.5C18.75 10.0858 18.4142 9.75 18 9.75C17.5858 9.75 17.25 10.0858 17.25 10.5C17.25 10.9142 17.5858 11.25 18 11.25Z", fill: "#404D60" }))));
};

var Icon$R = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
            React__default['default'].createElement("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M16.6857 2H7.31429C4.04762 2 2 4.31208 2 7.58516V16.4148C2 19.6879 4.0381 22 7.31429 22H16.6857C19.9619 22 22 19.6879 22 16.4148V7.58516C22 4.31208 19.9619 2 16.6857 2Z", stroke: "#808191", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" }),
            React__default['default'].createElement("path", { d: "M13.7337 17.1676L5.84937 12.6693C5.51209 12.4769 5.45441 12.0177 5.73272 11.7462M13.7337 17.1676L15.1951 6.10768C15.1695 5.95374 15.0148 5.86547 14.8485 5.90996L14.3194 6.06709C11.9994 6.71892 10.0321 8.18668 8.77028 10.1062C7.62227 10.3693 6.57023 10.9412 5.73272 11.7462M13.7337 17.1676C14.0691 17.3631 14.5035 17.1846 14.6023 16.8107L13.7337 17.1676ZM5.73272 11.7462L6.08139 12.1026C6.85318 11.3608 7.82305 10.8336 8.88102 10.5911L9.07938 10.5457L9.19066 10.3764C10.3863 8.55743 12.2526 7.16447 14.4541 6.54594L14.4541 6.54599L14.4613 6.54386L14.7616 6.45467L14.8407 6.78408C14.8408 6.78437 14.8409 6.78465 14.8409 6.78494C15.3592 8.9773 15.06 11.251 14.0737 13.1667L13.9811 13.3465L14.0404 13.5389C14.3572 14.5664 14.3869 15.6388 14.1163 16.6876C14.102 16.7397 14.0389 16.7667 13.9899 16.7382L13.9899 16.7381L13.9859 16.7359L6.1016 12.2376C6.05141 12.2089 6.04282 12.1403 6.08412 12.1L5.73272 11.7462Z", stroke: "#808191" }),
            React__default['default'].createElement("path", { d: "M7.9544 18.0723C8.66316 18.4766 9.79439 17.8471 10.4842 16.6665L7.92151 15.2044C7.23172 16.385 7.24564 17.6679 7.9544 18.0723Z", fill: "#404D60" }))));
};

var Icon$S = function (props) {
    return (React__default['default'].createElement(Svg, __assign({}, props, { height: "32px", width: "32px", xmlns: "http://www.w3.org/2000/svg", "enable-background": "new 0 0 128 128", id: "Layer_1", version: "1.1", viewBox: "0 0 128 128" }),
        React__default['default'].createElement("circle", { cx: "85", cy: "45", fill: "none", r: "8", stroke: "#00AEEF", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-miterlimit": "10", "stroke-width": "4" }),
        React__default['default'].createElement("path", { d: "  M102.6476822,65.245285l-40.2463036,40.1161652c-3.1256676,3.1155624-8.1839256,3.1114655-11.3045425-0.0091476  l-26.7890854-26.789093c-3.1289177-3.1289139-3.1234951-8.2035599,0.0121021-11.3257828l40.077301-39.9063568  C65.8964539,25.8381672,67.9261017,25,70.0419083,25H97c4.4182816,0,8,3.5817223,8,8v26.5792809  C105,61.7055016,104.1535873,63.7442589,102.6476822,65.245285z", fill: "none", stroke: "#00AEEF", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-miterlimit": "10", "stroke-width": "4" })));
};

var Icon$T = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM18.92 8H15.97C15.65 6.75 15.19 5.55 14.59 4.44C16.43 5.07 17.96 6.35 18.92 8ZM12 4.04C12.83 5.24 13.48 6.57 13.91 8H10.09C10.52 6.57 11.17 5.24 12 4.04ZM4.26 14C4.1 13.36 4 12.69 4 12C4 11.31 4.1 10.64 4.26 10H7.64C7.56 10.66 7.5 11.32 7.5 12C7.5 12.68 7.56 13.34 7.64 14H4.26ZM5.08 16H8.03C8.35 17.25 8.81 18.45 9.41 19.56C7.57 18.93 6.04 17.66 5.08 16ZM8.03 8H5.08C6.04 6.34 7.57 5.07 9.41 4.44C8.81 5.55 8.35 6.75 8.03 8ZM12 19.96C11.17 18.76 10.52 17.43 10.09 16H13.91C13.48 17.43 12.83 18.76 12 19.96ZM14.34 14H9.66C9.57 13.34 9.5 12.68 9.5 12C9.5 11.32 9.57 10.65 9.66 10H14.34C14.43 10.65 14.5 11.32 14.5 12C14.5 12.68 14.43 13.34 14.34 14ZM14.59 19.56C15.19 18.45 15.65 17.25 15.97 16H18.92C17.96 17.65 16.43 18.93 14.59 19.56ZM16.36 14C16.44 13.34 16.5 12.68 16.5 12C16.5 11.32 16.44 10.66 16.36 10H19.74C19.9 10.64 20 11.31 20 12C20 12.69 19.9 13.36 19.74 14H16.36Z" })));
};

var Logo = function (_a) {
    var isDark = _a.isDark, props = __rest(_a, ["isDark"]);
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 26 26" }, props),
        React__default['default'].createElement("image", { width: "26", height: "26", href: isDark ? '/images/logo.png' : '/images/logo.png' })));
};

var Logo$1 = function (_a) {
    _a.isDark; var props = __rest(_a, ["isDark"]);
    return (React__default['default'].createElement(Svg, __assign({ xmlns: "http://www.w3.org/2000/svg" }, props, { height: "32px", width: "32px", "enable-background": "new 0 0 173.822 200.0915", id: "envato", version: "1.1", viewBox: "0 0 173.822 200.0915" }),
        React__default['default'].createElement("g", null,
            React__default['default'].createElement("path", { d: "M77.8833,39.0915c-1.1191-1.1953-2.8496-1.5801-4.3789-0.9902   c-1.7188,0.6738-42.3438,16.8828-63.9375,51.6133c-22.0957,35.5371,0.8672,80.0918,1.8555,81.9746   c0.6934,1.3164,2.0586,2.1367,3.541,2.1367c0.0293,0,0.0605,0,0.0918,0c1.5176-0.0352,2.8848-0.9258,3.5293-2.3008l60-128.002   C79.2798,42.0407,79.0024,40.2849,77.8833,39.0915z", fill: "#314E55" }),
            React__default['default'].createElement("path", { d: "M15.0923,160.1267c-5.2617-13.6953-13.3086-42.7422,1.2676-66.1895   C30.311,71.5017,53.522,57.0231,66.6313,50.1774L15.0923,160.1267z", fill: "#5ECB66" }),
            React__default['default'].createElement("path", { d: "M171.6372,17.8435c-0.377-4.6406-0.6738-8.3066-0.6738-10.0176c0-5.3984-3.4258-7.0605-4.8984-7.5234   c-12.6582-4.0059-51.4863,32.5293-74.3789,65.2305c-27.7734,39.6758-69.7578,111.5547-70.1777,112.2773   c-1.0527,1.8047-0.5391,4.1172,1.1797,5.3047c0.3535,0.2461,25.0664,16.9766,57.373,16.9766   c14.3574,0,30.2207-3.3086,46.1016-12.8359c22.3457-13.4062,39.0762-43.625,44.7559-80.8242   C176.0786,72.6286,173.0786,35.6247,171.6372,17.8435z", fill: "#314E55" }),
            React__default['default'].createElement("path", { d: "M163.0083,105.2204c-5.3223,34.875-20.6367,62.9805-40.9629,75.1758   c-40.1113,24.0625-80.2871,4.5977-91.6484-1.9258c8.6426-14.6953,43.6953-73.8555,67.8438-108.3516   c26.7559-38.2207,57.8105-61.1465,64.7227-62.1641c0.0117,2.0566,0.3027,5.6289,0.6992,10.5352   C165.0806,35.9704,168.0298,72.3435,163.0083,105.2204z", fill: "#5ECB66" }))));
};

var Icon$U = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.1534 13.6089L4.15362 13.61C4.77322 16.8113 7.42207 19.3677 10.647 19.8853L10.6502 19.8858C13.0412 20.2736 15.2625 19.6103 16.9422 18.2833C11.3549 16.2878 7.9748 10.3524 9.26266 4.48816C5.69846 5.77194 3.35817 9.51245 4.1534 13.6089ZM10.0083 2.21054C4.76622 3.2533 1.09895 8.36947 2.19006 13.9901C2.97006 18.0201 6.28006 21.2101 10.3301 21.8601C13.8512 22.4311 17.0955 21.1608 19.2662 18.8587C19.2765 18.8478 19.2866 18.837 19.2968 18.8261C19.4385 18.6745 19.5757 18.5184 19.7079 18.3581C19.7105 18.355 19.713 18.3519 19.7156 18.3487C19.8853 18.1426 20.0469 17.9295 20.2001 17.7101C20.4101 17.4001 20.2401 16.9601 19.8701 16.9201C19.5114 16.8796 19.1602 16.8209 18.817 16.7452C18.7964 16.7406 18.7758 16.736 18.7552 16.7313C18.6676 16.7114 18.5804 16.6903 18.4938 16.6681C18.4919 16.6676 18.4901 16.6672 18.4882 16.6667C13.0234 15.2647 9.72516 9.48006 11.4542 4.03417C11.4549 4.03214 11.4555 4.03012 11.4562 4.0281C11.4875 3.92954 11.5205 3.83109 11.5552 3.73278C11.5565 3.72911 11.5578 3.72543 11.5591 3.72175C11.6768 3.38921 11.8136 3.05829 11.9701 2.73005C12.1301 2.39005 11.8501 2.01005 11.4701 2.03005C11.1954 2.04379 10.924 2.06848 10.6561 2.10368C10.6517 2.10427 10.6472 2.10486 10.6428 2.10545C10.4413 2.13221 10.2418 2.16492 10.0446 2.2034C10.0325 2.20576 10.0204 2.20814 10.0083 2.21054Z" })));
};

var Icon$V = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
            React__default['default'].createElement("path", { opacity: "0.5", d: "M7.37145 10.2017V17.0619", stroke: "#808191", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" }),
            React__default['default'].createElement("path", { opacity: "0.5", d: "M12.0381 6.91913V17.0618", stroke: "#808191", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" }),
            React__default['default'].createElement("path", { opacity: "0.5", d: "M16.6285 13.8268V17.0619", stroke: "#808191", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" }),
            React__default['default'].createElement("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M16.6857 2H7.31429C4.04762 2 2 4.31208 2 7.58516V16.4148C2 19.6879 4.0381 22 7.31429 22H16.6857C19.9619 22 22 19.6879 22 16.4148V7.58516C22 4.31208 19.9619 2 16.6857 2Z", stroke: "#808191", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" }))));
};

var Icon$W = function (props) {
    return (React__default['default'].createElement(Svg, __assign({}, props, { xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 45", height: "32", id: "Layer_45", viewBox: "0 0 24 24", width: "32" }),
        React__default['default'].createElement("title", null),
        React__default['default'].createElement("path", { d: "M14.12988,15.50342l-1.41406-1.415,1.42383-1.42285a2.02108,2.02108,0,0,0,0-2.855L9.87012,5.541a2.06778,2.06778,0,0,0-2.85547,0L5.59082,6.96436a2.02108,2.02108,0,0,0,0,2.855L4.17676,11.2334a4.02212,4.02212,0,0,1,0-5.68311L5.60059,4.127a4.01858,4.01858,0,0,1,5.68359,0l4.26953,4.26953a4.02449,4.02449,0,0,1,0,5.68359Z", fill: "#4c9ae8" }),
        React__default['default'].createElement("path", { d: "M15.55762,20.94971a3.99349,3.99349,0,0,1-2.8418-1.17725L8.44629,15.50293a4.02449,4.02449,0,0,1,0-5.68359L9.87012,8.396l1.41406,1.415L9.86035,11.23389a2.02108,2.02108,0,0,0,0,2.855l4.26953,4.26953a2.06778,2.06778,0,0,0,2.85547,0l1.42383-1.42334a2.02108,2.02108,0,0,0,0-2.855L19.82324,12.666a4.02449,4.02449,0,0,1,0,5.68359l-1.42383,1.42334A3.9917,3.9917,0,0,1,15.55762,20.94971Z", fill: "#4c9ae8" })));
};

var Icon$X = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
            React__default['default'].createElement("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M18.9859 13.9875C19.65 12.9457 20.0018 11.7355 19.9999 10.5C19.9999 6.91001 17.0899 4.00001 13.4999 4.00001C12.2164 4.00001 11.0199 4.37201 10.0124 5.01351C9.3419 5.05111 8.67825 5.16827 8.0354 5.36251C8.73597 4.61558 9.58248 4.02049 10.5225 3.61411C11.4624 3.20772 12.4758 2.9987 13.4999 3.00001C17.6419 3.00001 20.9999 6.35801 20.9999 10.5C20.9999 12.654 20.0919 14.5965 18.6374 15.9645C18.8279 15.333 18.9474 14.671 18.9859 13.9875Z", fill: "#808191" }),
            React__default['default'].createElement("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M19.9664 14.3015C19.6044 14.916 19.1569 15.4759 18.6374 15.9645C18.8279 15.333 18.9474 14.671 18.9859 13.9875C19.65 12.9457 20.0018 11.7355 19.9999 10.5C19.9999 6.91001 17.0899 4.00001 13.4999 4.00001C12.2164 4.00001 11.0199 4.37201 10.0124 5.01351C9.3419 5.05112 8.67825 5.16827 8.0354 5.36251C8.52403 4.84303 9.08395 4.39556 9.6984 4.03351C10.8502 3.35483 12.1631 2.9979 13.4999 3.00001C17.6419 3.00001 20.9999 6.35801 20.9999 10.5C21.0023 11.8369 20.6453 13.1498 19.9664 14.3015Z", fill: "#808191" }),
            React__default['default'].createElement("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M18 13.5C18 17.642 14.642 21 10.5 21C6.358 21 3 17.642 3 13.5C3 9.358 6.358 6 10.5 6C14.642 6 18 9.358 18 13.5ZM10 11C9.73478 11 9.48043 11.1054 9.29289 11.2929C9.10536 11.4804 9 11.7348 9 12C9 12.2652 9.10536 12.5196 9.29289 12.7071C9.48043 12.8946 9.73478 13 10 13V11ZM11 10V9.5H10V10C9.46957 10 8.96086 10.2107 8.58579 10.5858C8.21071 10.9609 8 11.4696 8 12C8 12.5304 8.21071 13.0391 8.58579 13.4142C8.96086 13.7893 9.46957 14 10 14V16C9.565 16 9.1945 15.7225 9.0565 15.3335C9.03603 15.2699 9.003 15.211 8.95936 15.1603C8.91573 15.1097 8.86239 15.0683 8.80248 15.0386C8.74257 15.0089 8.67732 14.9916 8.61059 14.9875C8.54386 14.9835 8.47699 14.9929 8.41396 15.0152C8.35092 15.0375 8.29299 15.0721 8.2436 15.1172C8.1942 15.1622 8.15434 15.2167 8.12637 15.2775C8.09841 15.3382 8.0829 15.4039 8.08078 15.4707C8.07865 15.5376 8.08995 15.6041 8.114 15.6665C8.25192 16.0565 8.50734 16.3941 8.8451 16.6329C9.18286 16.8718 9.58634 17 10 17V17.5H11V17C11.5304 17 12.0391 16.7893 12.4142 16.4142C12.7893 16.0391 13 15.5304 13 15C13 14.4696 12.7893 13.9609 12.4142 13.5858C12.0391 13.2107 11.5304 13 11 13V11C11.435 11 11.8055 11.2775 11.9435 11.6665C11.964 11.7301 11.997 11.789 12.0406 11.8397C12.0843 11.8903 12.1376 11.9317 12.1975 11.9614C12.2574 11.9911 12.3227 12.0084 12.3894 12.0125C12.4561 12.0165 12.523 12.0071 12.586 11.9848C12.6491 11.9625 12.707 11.9279 12.7564 11.8828C12.8058 11.8378 12.8457 11.7833 12.8736 11.7225C12.9016 11.6618 12.9171 11.5961 12.9192 11.5293C12.9213 11.4624 12.9101 11.3959 12.886 11.3335C12.7481 10.9435 12.4927 10.6059 12.1549 10.3671C11.8171 10.1282 11.4137 10 11 10ZM11 14V16C11.2652 16 11.5196 15.8946 11.7071 15.7071C11.8946 15.5196 12 15.2652 12 15C12 14.7348 11.8946 14.4804 11.7071 14.2929C11.5196 14.1054 11.2652 14 11 14Z", fill: "#808191" }))));
};

var Icon$Y = function (props) {
    return (React__default['default'].createElement(Svg, __assign({}, props, { xmlns: "http://www.w3.org/2000/svg", height: "32px", width: "32px", "enable-background": "new 0 0 195.3381 216", id: "xing", version: "1.1", viewBox: "0 0 195.3381 216" }),
        React__default['default'].createElement("g", null,
            React__default['default'].createElement("polygon", { fill: "#C1DB66", points: "195.3381,0 148.6252,0 70.8516,137 68.832,140.5584 70.9181,144 114.5548,216 162.2304,216    117.1212,137.7812  " }),
            React__default['default'].createElement("polygon", { fill: "#63B473", points: "73.8284,98.2892 52.3108,48 9.9316,48 31.4512,98.2892 0,156 42.3792,156 74.8244,100.6172  " }))));
};

var Icon$Z = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M7.5 13C7.5 11.8954 8.39543 11 9.5 11H12.5C13.6046 11 14.5 11.8954 14.5 13V15C14.5 16.1046 13.6046 17 12.5 17H9.5C8.39543 17 7.5 16.1046 7.5 15V13Z" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.5 2C8.39543 2 7.5 2.89543 7.5 4V6.49482C7.5 6.93167 7.2113 7.30895 6.81834 7.49981C5.15004 8.31009 4 10.0207 4 12V17C4 19.2091 5.79086 21 8 21H14C16.2091 21 18 19.2091 18 17V12C18 11.4175 17.9004 10.8583 17.7173 10.3385L17.7892 10.297C19.4786 9.32167 20.0574 7.16153 19.082 5.47221C18.1552 3.86682 16.1534 3.25957 14.5 4.05146V4C14.5 2.89543 13.6046 2 12.5 2H9.5ZM9.5 6.25V4H12.5V6.25H9.5ZM9.22663 7.75C8.89473 8.46917 8.30318 9.00205 7.69211 9.29884C6.68638 9.78731 6 10.8154 6 12V17C6 18.1046 6.89543 19 8 19H14C15.1046 19 16 18.1046 16 17V12C16 10.8154 15.3136 9.78731 14.3079 9.29884C13.6968 9.00205 13.1053 8.46917 12.7734 7.75H9.22663ZM14.5 6.3226V6.49482C14.5 6.93167 14.7887 7.30895 15.1817 7.49981C15.7529 7.77726 16.2634 8.16029 16.6878 8.62352L16.7892 8.56495C17.522 8.1419 17.773 7.20495 17.35 6.47221C16.9346 5.75269 16.0213 5.49542 15.2914 5.89229L14.5 6.3226Z" })));
};

var Icon$_ = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ xmlns: "http://www.w3.org/2000/svg" }, props, { height: "32px", width: "32px", "enable-background": "new 0 0 50 50", id: "Layer_1", version: "1.1", viewBox: "0 0 50 50" }),
        "\\",
        React__default['default'].createElement("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
            React__default['default'].createElement("path", { opacity: "0.4", d: "M7.24487 14.7815L10.238 10.8913L13.6522 13.5732L16.5813 9.79291", stroke: "#808191", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" }),
            React__default['default'].createElement("circle", { cx: "19.9954", cy: "4.20021", r: "1.9222", stroke: "#808191", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" }),
            React__default['default'].createElement("path", { d: "M14.9245 3.12012H7.65679C4.64535 3.12012 2.77808 5.25284 2.77808 8.26428V16.3467C2.77808 19.3581 4.60874 21.4817 7.65679 21.4817H16.2609C19.2724 21.4817 21.1396 19.3581 21.1396 16.3467V9.30776", stroke: "#808191", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" }))));
};

var Icon$$ = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M5.66 4.2L6.05 4.59C6.44 4.97 6.44 5.61 6.05 5.99L6.04 6C5.65 6.39 5.03 6.39 4.64 6L4.25 5.61C3.86 5.23 3.86 4.6 4.25 4.21L4.26 4.2C4.64 3.82 5.27 3.81 5.66 4.2Z" }),
        React__default['default'].createElement("path", { d: "M1.99 10.95H3.01C3.56 10.95 4 11.39 4 11.95V11.96C4 12.51 3.56 12.95 3 12.94H1.99C1.44 12.94 1 12.5 1 11.95V11.94C1 11.39 1.44 10.95 1.99 10.95Z" }),
        React__default['default'].createElement("path", { d: "M12 1H12.01C12.56 1 13 1.44 13 1.99V2.96C13 3.51 12.56 3.95 12 3.94H11.99C11.44 3.94 11 3.5 11 2.95V1.99C11 1.44 11.44 1 12 1Z" }),
        React__default['default'].createElement("path", { d: "M18.34 4.2C18.73 3.82 19.36 3.82 19.75 4.21C20.14 4.6 20.14 5.22 19.75 5.61L19.36 6C18.98 6.39 18.35 6.39 17.96 6L17.95 5.99C17.56 5.61 17.56 4.98 17.95 4.59L18.34 4.2Z" }),
        React__default['default'].createElement("path", { d: "M18.33 19.7L17.94 19.31C17.55 18.92 17.55 18.3 17.95 17.9C18.33 17.52 18.96 17.51 19.35 17.9L19.74 18.29C20.13 18.68 20.13 19.31 19.74 19.7C19.35 20.09 18.72 20.09 18.33 19.7Z" }),
        React__default['default'].createElement("path", { d: "M20 11.95V11.94C20 11.39 20.44 10.95 20.99 10.95H22C22.55 10.95 22.99 11.39 22.99 11.94V11.95C22.99 12.5 22.55 12.94 22 12.94H20.99C20.44 12.94 20 12.5 20 11.95Z" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M6 11.95C6 8.64 8.69 5.95 12 5.95C15.31 5.95 18 8.64 18 11.95C18 15.26 15.31 17.95 12 17.95C8.69 17.95 6 15.26 6 11.95ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" }),
        React__default['default'].createElement("path", { d: "M12 22.9H11.99C11.44 22.9 11 22.46 11 21.91V20.95C11 20.4 11.44 19.96 11.99 19.96H12C12.55 19.96 12.99 20.4 12.99 20.95V21.91C12.99 22.46 12.55 22.9 12 22.9Z" }),
        React__default['default'].createElement("path", { d: "M5.66 19.69C5.27 20.08 4.64 20.08 4.25 19.69C3.86 19.3 3.86 18.68 4.24 18.28L4.63 17.89C5.02 17.5 5.65 17.5 6.04 17.89L6.05 17.9C6.43 18.28 6.44 18.91 6.05 19.3L5.66 19.69Z" })));
};

var Icon$10 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M12 3C7.02985 3 3 7.02985 3 11.9904C3 16.9606 7.02985 21 12 21C16.9701 21 21 16.9606 21 11.9904C21 7.02985 16.9701 3 12 3ZM16.4328 8.65139C16.3753 9.48614 14.8305 15.7228 14.8305 15.7228C14.8305 15.7228 14.7345 16.0874 14.3987 16.097C14.2836 16.097 14.1301 16.0874 13.9574 15.9243C13.6023 15.6269 12.7964 15.0512 12.0384 14.5235C12.0096 14.5522 11.9808 14.581 11.9424 14.6098C11.7697 14.7633 11.5107 14.984 11.2324 15.2527C11.1269 15.3486 11.0117 15.4542 10.8966 15.5693L10.887 15.5789C10.8198 15.6461 10.7623 15.694 10.7143 15.7324C10.3401 16.0394 10.3017 15.7804 10.3017 15.6461L10.5032 13.4488V13.4296L10.5128 13.4104C10.5224 13.3817 10.5416 13.3721 10.5416 13.3721C10.5416 13.3721 14.4659 9.87953 14.5714 9.50533C14.581 9.48614 14.5522 9.46695 14.5043 9.48614C14.2452 9.57249 9.72601 12.4318 9.22708 12.7484C9.19829 12.7676 9.11194 12.758 9.11194 12.758L6.91471 12.0384C6.91471 12.0384 6.65565 11.9328 6.742 11.693C6.76119 11.645 6.78998 11.597 6.89552 11.5299C7.38486 11.1844 15.8955 8.12367 15.8955 8.12367C15.8955 8.12367 16.1354 8.04691 16.2793 8.09488C16.3465 8.12367 16.3849 8.15245 16.4232 8.2484C16.4328 8.28678 16.4424 8.36354 16.4424 8.44989C16.4424 8.49787 16.4328 8.55544 16.4328 8.65139Z" })));
};

var Icon$11 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
            React__default['default'].createElement("path", { opacity: "0.5", d: "M15.7161 16.2234H8.49609", stroke: "#808191", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" }),
            React__default['default'].createElement("path", { opacity: "0.5", d: "M15.7161 12.0369H8.49609", stroke: "#808191", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" }),
            React__default['default'].createElement("path", { opacity: "0.5", d: "M11.2512 7.86011H8.49622", stroke: "#808191", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" }),
            React__default['default'].createElement("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M15.9085 2.74982C15.9085 2.74982 8.23149 2.75382 8.21949 2.75382C5.45949 2.77082 3.75049 4.58682 3.75049 7.35682V16.5528C3.75049 19.3368 5.47249 21.1598 8.25649 21.1598C8.25649 21.1598 15.9325 21.1568 15.9455 21.1568C18.7055 21.1398 20.4155 19.3228 20.4155 16.5528V7.35682C20.4155 4.57282 18.6925 2.74982 15.9085 2.74982Z", stroke: "#808191", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" }))));
};

var Icon$12 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
            React__default['default'].createElement("path", { opacity: "0.4", d: "M16.8396 20.1642V6.54645", stroke: "#808191", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" }),
            React__default['default'].createElement("path", { d: "M20.9173 16.0681L16.8395 20.1648L12.7617 16.0681", stroke: "#808191", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" }),
            React__default['default'].createElement("path", { opacity: "0.4", d: "M6.91115 3.83289V17.4507", stroke: "#808191", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" }),
            React__default['default'].createElement("path", { d: "M2.8335 7.929L6.91127 3.83234L10.9891 7.929", stroke: "#808191", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" }))));
};

var Icon$13 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({}, props, { xmlns: "http://www.w3.org/2000/svg", "data-name": "Layer 45", height: "32", id: "Layer_45", viewBox: "0 0 24 24", width: "32" }),
        React__default['default'].createElement("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
            React__default['default'].createElement("path", { d: "M12 9.5C15.625 9.5 19.5 8.375 19.5 5.75C19.5 3.125 15.625 2 12 2C8.375 2 4.5 3.125 4.5 5.75C4.5 8.375 8.375 9.5 12 9.5Z", fill: "#808191" }),
            React__default['default'].createElement("path", { d: "M4.5 10.125V12C4.5 14.625 8.375 15.75 12 15.75C15.625 15.75 19.5 14.625 19.5 12V10.125C17.75 11.25 15.125 12 12 12C8.875 12 6.25 11.25 4.5 10.125Z", fill: "#404D60" }),
            React__default['default'].createElement("path", { d: "M4.5 16.375V18.25C4.5 20.875 8.375 22 12 22C15.625 22 19.5 20.875 19.5 18.25V16.375C17.75 17.625 15.125 18.25 12 18.25C8.875 18.25 6.25 17.5 4.5 16.375Z", fill: "#404D60" }))));
};

var Icon$14 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M8.65854 19C15.4488 19 19.1659 13.2338 19.1659 8.23717C19.1659 8.07728 19.1659 7.91739 19.1561 7.7475C19.878 7.21785 20.5024 6.5483 21 5.78881C20.3366 6.08861 19.6244 6.28847 18.8732 6.38841C19.6341 5.91872 20.2195 5.17921 20.5024 4.28981C19.7902 4.72951 19 5.03931 18.1512 5.20919C17.478 4.45969 16.522 4 15.4585 4C13.4195 4 11.761 5.69887 11.761 7.78747C11.761 8.08728 11.8 8.36709 11.8585 8.6469C8.79512 8.497 6.07317 6.97801 4.24878 4.68954C3.92683 5.25916 3.75122 5.90873 3.75122 6.59827C3.75122 7.90739 4.40488 9.06662 5.39024 9.74617C4.78537 9.72618 4.21951 9.5563 3.72195 9.27648C3.72195 9.28648 3.72195 9.30646 3.72195 9.32645C3.72195 11.1552 5 12.6942 6.67805 13.034C6.36585 13.1239 6.0439 13.1639 5.70244 13.1639C5.46829 13.1639 5.23415 13.1439 5.00976 13.0939C5.47805 14.6029 6.8439 15.6922 8.46341 15.7222C7.19512 16.7415 5.60488 17.3411 3.87805 17.3411C3.58537 17.3411 3.28293 17.3311 3 17.2911C4.62927 18.3704 6.57073 19 8.65854 19Z" })));
};

var Icon$15 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "m21.325 9.308c-.758 0-1.425.319-1.916.816-1.805-1.268-4.239-2.084-6.936-2.171l1.401-6.406 4.461 1.016c0 1.108.89 2.013 1.982 2.013 1.113 0 2.008-.929 2.008-2.038s-.889-2.038-2.007-2.038c-.779 0-1.451.477-1.786 1.129l-4.927-1.108c-.248-.067-.491.113-.557.365l-1.538 7.062c-2.676.113-5.084.928-6.895 2.197-.491-.518-1.184-.837-1.942-.837-2.812 0-3.733 3.829-1.158 5.138-.091.405-.132.837-.132 1.268 0 4.301 4.775 7.786 10.638 7.786 5.888 0 10.663-3.485 10.663-7.786 0-.431-.045-.883-.156-1.289 2.523-1.314 1.594-5.115-1.203-5.117zm-15.724 5.41c0-1.129.89-2.038 2.008-2.038 1.092 0 1.983.903 1.983 2.038 0 1.109-.89 2.013-1.983 2.013-1.113.005-2.008-.904-2.008-2.013zm10.839 4.798c-1.841 1.868-7.036 1.868-8.878 0-.203-.18-.203-.498 0-.703.177-.18.491-.18.668 0 1.406 1.463 6.07 1.488 7.537 0 .177-.18.491-.18.668 0 .207.206.207.524.005.703zm-.041-2.781c-1.092 0-1.982-.903-1.982-2.011 0-1.129.89-2.038 1.982-2.038 1.113 0 2.008.903 2.008 2.038-.005 1.103-.895 2.011-2.008 2.011z" })));
};

var Icon$16 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "-60 -30 600 600" }, props),
        React__default['default'].createElement("g", { id: "surface1" },
            React__default['default'].createElement("path", { d: "M 217.996094 158.457031 C 164.203125 158.457031 120.441406 202.21875 120.441406 256.007812 C 120.441406 309.800781 164.203125 353.5625 217.996094 353.5625 C 271.785156 353.5625 315.546875 309.800781 315.546875 256.007812 C 315.546875 202.21875 271.785156 158.457031 217.996094 158.457031 Z M 275.914062 237.636719 L 206.027344 307.523438 C 203.09375 310.457031 199.246094 311.925781 195.402344 311.925781 C 191.558594 311.925781 187.714844 310.460938 184.78125 307.523438 L 158.074219 280.816406 C 152.207031 274.953125 152.207031 265.441406 158.074219 259.574219 C 163.9375 253.707031 173.449219 253.707031 179.316406 259.574219 L 195.402344 275.660156 L 254.671875 216.394531 C 260.535156 210.527344 270.046875 210.527344 275.914062 216.394531 C 281.78125 222.257812 281.78125 231.769531 275.914062 237.636719 Z M 275.914062 237.636719 " }),
            React__default['default'].createElement("path", { d: "M 435.488281 138.917969 L 435.472656 138.519531 C 435.25 133.601562 435.101562 128.398438 435.011719 122.609375 C 434.59375 94.378906 412.152344 71.027344 383.917969 69.449219 C 325.050781 66.164062 279.511719 46.96875 240.601562 9.042969 L 240.269531 8.726562 C 227.578125 -2.910156 208.433594 -2.910156 195.738281 8.726562 L 195.40625 9.042969 C 156.496094 46.96875 110.957031 66.164062 52.089844 69.453125 C 23.859375 71.027344 1.414062 94.378906 0.996094 122.613281 C 0.910156 128.363281 0.757812 133.566406 0.535156 138.519531 L 0.511719 139.445312 C -0.632812 199.472656 -2.054688 274.179688 22.9375 341.988281 C 36.679688 379.277344 57.492188 411.691406 84.792969 438.335938 C 115.886719 468.679688 156.613281 492.769531 205.839844 509.933594 C 207.441406 510.492188 209.105469 510.945312 210.800781 511.285156 C 213.191406 511.761719 215.597656 512 218.003906 512 C 220.410156 512 222.820312 511.761719 225.207031 511.285156 C 226.902344 510.945312 228.578125 510.488281 230.1875 509.925781 C 279.355469 492.730469 320.039062 468.628906 351.105469 438.289062 C 378.394531 411.636719 399.207031 379.214844 412.960938 341.917969 C 438.046875 273.90625 436.628906 199.058594 435.488281 138.917969 Z M 217.996094 383.605469 C 147.636719 383.605469 90.398438 326.367188 90.398438 256.007812 C 90.398438 185.648438 147.636719 128.410156 217.996094 128.410156 C 288.351562 128.410156 345.59375 185.648438 345.59375 256.007812 C 345.59375 326.367188 288.351562 383.605469 217.996094 383.605469 Z M 217.996094 383.605469 " }))));
};

var Icon$17 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 367.488 367.488" }, props),
        React__default['default'].createElement("path", { d: "M366.745,70.58c-1.089-1.609-3.256-2.391-6.626-2.391c-1.835,0-3.77,0.227-5.25,0.424c-0.324,0.043-0.609,0.065-0.857,0.065\n\tc-0.471,0-0.638-0.08-0.656-0.07c-0.178-0.625,1.309-3.102,2.294-4.744c1.056-1.759,2.252-3.752,3.151-5.808\n\tc0.4-0.914,0.743-1.951,0.249-2.705c-0.261-0.399-0.708-0.628-1.228-0.628c-1.363,0-3.702,1.654-7.405,4.352\n\tc-1.648,1.201-3.771,2.749-5.007,3.428c0.471-1.447,1.783-4.158,2.799-6.257c3.352-6.926,5.154-10.905,3.226-12.19\n\tc-0.313-0.208-0.671-0.308-1.065-0.308c-2.211,0-5.302,3.529-10.131,9.324c-1.566,1.88-3.065,3.701-4.29,4.98\n\tc0.658-2.637,2.482-7.566,3.575-10.545c2.166-5.905,2.234-6.069,1.812-6.674l-0.322-0.265h-0.521c-0.614,0-0.94,0.315-1.157,0.639\n\tc-1.083,1.625-7.429,9.218-14.776,18.215c-9.186,11.247-20.618,25.244-27.213,33.885c-5.552,7.275-15.321,16.252-26.632,26.648\n\tc-12.835,11.795-27.382,25.164-39.671,39.647c-9.291,10.95-15.632,19.579-18.879,25.688c-1.11-2.641-3.512-7.23-7.478-9.434\n\tc-2.497-1.387-2.524-2.064-2.64-4.912c-0.03-0.726-0.063-1.561-0.145-2.538c-0.292-3.503-2.637-4.507-4.35-5.239\n\tc-1.22-0.522-1.985-0.881-2.321-1.664c-0.354-0.828-0.529-2.516-0.714-4.303c-0.432-4.178-0.921-8.914-4.155-9.474\n\tc-2.194-0.379-2.553-2.841-2.82-6.278c-0.147-1.894-0.275-3.53-1.057-4.506c-0.417-0.521-0.979-0.796-1.627-0.796\n\tc-1.109,0-2.238,0.821-3.433,1.69c-1.21,0.879-2.591,1.923-3.294,1.456c-0.682-0.455-0.436-2.507-0.199-4.491\n\tc0.332-2.768,0.744-6.212-0.665-9.061c-0.703-1.421-1.639-1.72-2.3-1.72c-1.993,0-3.793,2.671-5.698,5.5\n\tc-0.579,0.858-1.377,2.043-1.936,2.681c-0.063-1.228,0.327-3.785,0.601-5.588c0.895-5.886,1.334-9.849-0.647-11.264\n\tc-0.402-0.287-0.842-0.433-1.308-0.433c-1.934,0-3.523,2.531-5.205,5.211c-0.787,1.252-2.063,3.287-2.681,3.678\n\tc-0.082-0.81,0.498-2.995,0.894-4.489c1.103-4.156,2.475-9.329-1.082-10.298c-0.133-0.036-0.271-0.055-0.412-0.055\n\tc-2.719,0-8.7,10.338-17.778,30.726c-6.499,14.595-13.664,32.653-14.784,38.926c-1.278,7.16-0.536,8.665,0.182,10.12\n\tc0.418,0.849,0.78,1.582,0.629,4.002c-0.14,2.243-0.678,4.388-1.247,6.659c-1.07,4.268-2.176,8.682-0.785,14.247\n\tc1.162,4.648,7.209,14.769,12.544,23.698c3.621,6.06,7.709,12.902,8.01,14.507c-0.333,0.213-1.782,0.811-7.586,0.811\n\tc-7.13,0-17.116-0.859-23.724-1.428l-2.749-0.234c-9.665-0.805-36.443-6.166-43.041-7.887c-2.538-0.662-6.552-2.966-10.802-5.405\n\tc-6.211-3.564-12.633-7.25-17.146-7.585c-1.02-0.076-1.875-0.112-2.616-0.112c-4.49,0-6.282,1.348-11.073,4.949\n\tc-1.062,0.798-2.283,1.717-3.729,2.768c-9.126,6.638-14.019,9.476-20.79,13.403c-0.806,0.467-1.13,1.021-0.965,1.644\n\tc0.309,1.167,1.62,1.178,5.963,1.212c2.445,0.02,5.488,0.044,8.011,0.374c2.168,0.283,4.597,0.952,7.167,1.66\n\tc4.812,1.326,10.344,2.849,16.357,2.482c2.671-0.162,5.092-0.296,7.667-0.296c5.559,0,13.24,0.552,28.062,4.65\n\tc20.543,5.679,51.316,18.578,59.868,25.094c1.548,1.18,3.072,2.499,4.836,4.026c8.083,6.998,19.151,16.581,48.991,27.432\n\tc13.902,5.055,28.463,7.512,44.516,7.512c10.679,0,19.864-1.081,27.244-1.949c4.054-0.477,7.555-0.889,10.195-0.971\n\tc11.516-0.36,35.889-2.22,45.706-6.682c7.643-3.474,16.143-4.842,26.164-4.17c0.394,0.026,0.763,0.039,1.11,0.039\n\tc2.429,0,4.028-0.611,4.888-1.868c1.361-1.99,0.256-4.834-0.551-6.912c-0.115-0.296-0.225-0.578-0.355-0.884\n\tc0.247-0.401,2.149-0.791,3.286-1.023c2.866-0.587,6.114-1.252,6.676-3.874c0.09-0.423-0.006-0.862-0.273-1.237\n\tc-1.387-1.95-8.616-3.029-24.778-5.025c-10.793-1.333-23.025-2.845-26.244-4.702c-2.417-1.394-5.083-2.276-7.661-3.128\n\tc-5.369-1.775-10.44-3.452-13.952-9.422c-3.422-5.819,9.125-20.581,18.286-31.36c4.686-5.513,8.732-10.273,10.827-13.765\n\tc5.757-9.595,16.285-46.65,20.249-60.6c0.611-2.149,1.052-3.702,1.277-4.453c1.5-4.999,7.275-13.181,12.761-16.648\n\tc5.154-3.257,5.046-7.05,4.908-11.852c-0.023-0.81-0.047-1.659-0.047-2.552c0-6.047,4.308-10.327,8.964-14.052\n\tc5.427-4.341,5.902-11.041,1.338-18.865c-2.961-5.077,0.408-12.894,3.381-19.791c0.616-1.43,1.222-2.835,1.765-4.192\n\tC367.735,74.247,367.77,72.094,366.745,70.58z" })));
};

var Icon$18 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 506.161 506.161" }, props),
        React__default['default'].createElement("path", { d: "m165.858 329.247c6.161-5.421 6.766-14.807 1.352-20.974l-.818-.939c-2.599-2.953-6.269-4.745-10.195-4.98-.327 0-.655 0-.989 0-3.605-.006-7.087 1.308-9.79 3.693l-19.921 17.488-18.142 15.923c-6.143 5.428-6.744 14.799-1.345 20.967l.832.953c5.425 6.158 14.811 6.763 20.981 1.352l13.945-12.237z" }),
        React__default['default'].createElement("path", { d: "m118.026 369.9c-.413 0-.818 0-1.231-.036-4.876-.301-9.428-2.541-12.643-6.218l-.84-.96c-6.678-7.643-5.931-19.245 1.672-25.969l38.078-33.439c3.675-3.216 8.473-4.847 13.347-4.539 4.876.301 9.428 2.54 12.643 6.218l1.167 1.359c6.366 7.663 5.477 19.001-2.006 25.577l-38.064 33.439c-3.346 2.955-7.659 4.58-12.123 4.568zm37.167-64.032c-2.744.014-5.389 1.026-7.442 2.846l-38.064 33.439c-4.669 4.132-5.123 11.259-1.017 15.951l.84.96c4.128 4.676 11.262 5.131 15.951 1.017l38.057-33.439c4.682-4.122 5.14-11.257 1.025-15.944l-.832-.96c-1.97-2.253-4.76-3.624-7.748-3.806z" }),
        React__default['default'].createElement("path", { d: "m219.282 366.414c-3.605-.005-7.089 1.305-9.797 3.685l-19.644 17.246c-6.173 5.417-6.786 14.812-1.37 20.985 5.417 6.173 14.812 6.786 20.985 1.37l19.644-17.246c6.173-5.41 6.791-14.8 1.381-20.973-2.827-3.226-6.91-5.073-11.199-5.067z" }),
        React__default['default'].createElement("path", { d: "m199.667 416.942c-10.173.018-18.434-8.215-18.452-18.388-.009-5.317 2.28-10.38 6.279-13.884l19.651-17.246c7.748-6.414 19.154-5.672 26.004 1.693 6.714 7.651 5.956 19.295-1.693 26.011l-19.644 17.246c-3.357 2.953-7.676 4.577-12.145 4.568zm19.622-46.956c-2.746-.021-5.405.96-7.478 2.76l-19.651 17.246c-4.698 4.126-5.161 11.279-1.035 15.976 4.126 4.698 11.279 5.161 15.976 1.035l19.651-17.225c4.696-4.115 5.166-11.258 1.051-15.953-2.151-2.454-5.258-3.859-8.521-3.854z" }),
        React__default['default'].createElement("path", { d: "m44.004 93.793-39.942 174.253 31.931 17.943 82.63-134.41z" }),
        React__default['default'].createElement("path", { d: "m37.231 290.763-37.231-20.917 41.77-182.278 81.549 63.143zm-29.106-24.517 26.63 14.941 79.172-128.776-67.703-52.393z" }),
        React__default['default'].createElement("path", { d: "m119.648 309.013c6.171-5.42 6.782-14.815 1.366-20.988l-.256-.292c-2.593-2.97-6.267-4.779-10.202-5.023-.327 0-.655 0-.989 0-3.605-.006-7.087 1.308-9.79 3.693l-23.856 20.889c-6.171 5.42-6.782 14.815-1.366 20.988 5.309 6.317 14.734 7.133 21.051 1.823.065-.055.13-.11.194-.166l1.807-1.587 18.157-15.937z" }),
        React__default['default'].createElement("path", { d: "m86.152 337.172c-.455 0-.918 0-1.387-.05-4.97-.383-9.588-2.712-12.849-6.481-6.715-7.647-5.96-19.289 1.686-26.004l23.827-20.91c7.647-6.706 19.28-5.951 25.997 1.686 3.382 3.714 5.112 8.64 4.795 13.653-.301 4.879-2.543 9.435-6.225 12.65l-23.82 20.91c-3.317 2.935-7.595 4.553-12.024 4.546zm23.414-50.912c-2.744.011-5.391 1.023-7.442 2.846l-23.827 20.91c-4.696 4.121-5.161 11.269-1.04 15.964 0 0 .001.001.001.001 2.032 2.366 4.916 3.834 8.025 4.084 2.989.234 5.945-.758 8.189-2.746l23.82-20.91c4.692-4.124 5.157-11.269 1.039-15.965-1.998-2.411-4.895-3.899-8.018-4.119z" }),
        React__default['default'].createElement("path", { d: "m202.755 350.641c.269-3.938-1.051-7.82-3.664-10.779l-.213-.242c-2.595-2.95-6.26-4.742-10.181-4.98-.327 0-.662 0-.989 0-3.605-.006-7.087 1.307-9.79 3.693l-2.334 2.049-24.105 21.159-6.403 5.592c-6.183 5.595-6.659 15.142-1.065 21.324 2.61 2.885 6.234 4.651 10.115 4.929 3.939.274 7.823-1.046 10.779-3.664l32.82-28.807c2.988-2.611 4.801-6.313 5.03-10.274z" }),
        React__default['default'].createElement("path", { d: "m155.115 396.936c-.406 0-.804 0-1.209-.036-10.248-.634-18.041-9.456-17.406-19.704.304-4.916 2.547-9.511 6.236-12.775l32.792-28.843c3.681-3.207 8.475-4.837 13.347-4.539 4.869.298 9.417 2.532 12.629 6.204 3.375 3.708 5.101 8.628 4.781 13.632-.308 4.866-2.544 9.408-6.211 12.621l-32.82 28.807c-3.345 2.978-7.663 4.626-12.139 4.633zm22.767-53.937-30.458 26.737c-4.698 4.12-5.175 11.264-1.067 15.972 1.999 2.378 4.877 3.844 7.976 4.063 3.006.213 5.971-.795 8.225-2.796l32.82-28.807c4.695-4.116 5.165-11.258 1.049-15.954-.003-.004-.007-.008-.01-.012-1.993-2.391-4.877-3.861-7.983-4.07h-.754c-2.747 0-5.397 1.013-7.442 2.846z" }),
        React__default['default'].createElement("path", { d: "m399.398 303.122-115.785-94.348c-44.339 23.543-75.736 11.426-90.748 1.843-7.825-5.106-10.029-15.59-4.923-23.415 1.586-2.431 3.772-4.413 6.346-5.755l38.59-20.497c-.996-.149-1.971-.277-2.846-.363-34.825 5.502-69.995 8.531-105.248 9.064l-67.461 109.722 15.04 11.462 17.68-15.524c12.275-10.776 30.962-9.561 41.738 2.714.001.001.002.003.004.004l.256.292c3.538 4.057 5.891 9.009 6.802 14.315 5.361-3.658 11.795-5.411 18.271-4.98 7.833.488 15.145 4.09 20.305 10.003l.832.953c5.187 5.881 7.808 13.591 7.278 21.415v.043c1.354-.138 2.716-.183 4.077-.135 7.833.489 15.144 4.091 20.305 10.003l-5.315 5.094 5.528-4.852c5.195 5.883 7.821 13.599 7.293 21.429 0 .1-.043.192-.05.292 16.199-1.153 30.265 11.045 31.418 27.244.096 1.352.099 2.709.008 4.061-.365 5.088-2.052 9.993-4.895 14.229l31.724 18.306c6.955 3.944 15.787 1.604 19.878-5.265 3.88-6.556 1.988-15-4.319-19.274l-50.514-35.004c-.043 0-.064-.078-.1-.107l-3.401-2.355c-3.3-2.371-4.053-6.967-1.682-10.267 2.312-3.219 6.759-4.027 10.056-1.828l71.247 49.355c6.572 4.555 15.592 2.92 20.147-3.652.003-.004.006-.008.009-.012 4.471-6.535 2.889-15.445-3.557-20.042l-70.898-50.287c-.043 0-.057-.078-.1-.107-3.312-2.358-4.086-6.954-1.729-10.267s6.954-4.086 10.267-1.729l79.485 56.391c6.952 4.909 16.568 3.253 21.477-3.7 4.752-6.729 3.37-16.006-3.136-21.059l-85.526-61.627c-3.38-2.255-4.292-6.822-2.037-10.202s6.822-4.292 10.202-2.037c.127.085.251.173.373.266l5.848 4.169h.078l79.265 57.11c.149.107.256.242.398.349l1.309.939c.249.172.487.359.711.562l1.423.975c6.625 4.747 15.807 3.478 20.896-2.889 3.043-3.845 4.028-8.929 2.64-13.632-.844-2.914-2.568-5.495-4.934-7.393z" }),
        React__default['default'].createElement("path", { d: "m282.83 421.24c-3.145.001-6.234-.826-8.957-2.398l-35.026-20.199 2.134-3.13c7.907-11.928 4.646-28.007-7.282-35.914-3.783-2.508-8.159-3.978-12.689-4.263-.883-.043-1.768-.019-2.647.071l-4.774.299.277-4.048c.448-5.749-1.029-11.483-4.198-16.3l-2.668 2.348-4.81-5.236 2.704-2.59c-4.302-3.792-9.744-6.045-15.467-6.403-1.037-.034-2.076-.001-3.109.1l-3.821.285-.477-4.212v-.15c.373-6.782-1.926-13.44-6.403-18.548l-.84-.96c-8.565-9.832-23.125-11.713-33.909-4.383l-4.532 3.045-.953-5.379c-2.417-14.221-15.905-23.789-30.126-21.371-4.756.809-9.196 2.919-12.826 6.096l-19.871 17.445-19.957-15.19 70.158-114.12 1.914-.057c35.061-.535 70.041-3.543 104.679-9l.498-.1.505.043c.939.085 1.978.228 3.052.384l10.672 1.601-48.124 25.556c-6.556 3.387-9.124 11.448-5.737 18.004 1.062 2.055 2.639 3.799 4.577 5.062 14.123 9.014 44.261 20.761 87.148-1.999l2.085-1.11 117.606 95.828c2.92 2.371 5.038 5.582 6.069 9.199 1.718 5.8.508 12.074-3.244 16.819-6.284 7.853-17.615 9.416-25.791 3.557l-3.991-2.981-84.978-61.186c-1.698-1.219-4.063-.831-5.282.867-.004.005-.007.01-.011.016-1.221 1.702-.831 4.071.87 5.292.004.003.008.006.012.009l85.54 61.677c8.293 6.401 9.827 18.312 3.426 26.605-6.195 8.027-17.608 9.761-25.908 3.939l-79.507-56.363c-.825-.585-1.849-.818-2.846-.647-2.069.35-3.462 2.311-3.112 4.38.168.994.725 1.881 1.547 2.465l71.019 50.408c8.024 5.733 9.982 16.833 4.404 24.965-5.664 8.194-16.898 10.245-25.092 4.581-.003-.002-.006-.004-.009-.006l-71.232-49.362c-1.685-1.251-4.064-.899-5.315.786s-.899 4.064.786 5.315c.069.051.139.099.211.146l54.029 37.466c8.216 5.625 10.316 16.845 4.691 25.061-2.423 3.539-6.029 6.098-10.169 7.218-1.603.441-3.259.666-4.923.667zm-34.022-25.08 28.622 16.52c5.336 2.887 12.002.903 14.889-4.433 2.606-4.815 1.268-10.813-3.136-14.065l-40.376-28.018c2.734 5.325 3.964 11.295 3.557 17.267-.288 4.445-1.5 8.78-3.556 12.729zm-7.413-59.357c2.212-.004 4.372.669 6.19 1.928l71.232 49.355c4.961 3.429 11.763 2.19 15.197-2.768 3.375-4.927 2.185-11.649-2.675-15.119l-71.404-50.699c-4.725-3.742-5.522-10.607-1.78-15.332 3.585-4.526 10.074-5.477 14.807-2.17l79.507 56.391c5.368 3.747 12.757 2.432 16.504-2.936 3.597-5.154 2.546-12.219-2.395-16.103l-85.433-61.563c-4.902-3.505-6.034-10.32-2.529-15.222s10.32-6.034 15.222-2.529l5.934 4.205 80.965 58.405c.364.262.711.547 1.039.854l1.003.655c5.068 3.672 12.125 2.734 16.058-2.134 2.336-2.943 3.095-6.839 2.035-10.444-.619-2.234-1.913-4.222-3.707-5.692l-113.985-92.875c-44.958 22.98-77.009 10.331-92.228.605-9.487-6.155-12.188-18.835-6.033-28.322 1.927-2.971 4.592-5.391 7.734-7.024l21.814-11.583c-22.184 3.01-52.471 5.251-87.639 6.403l-64.745 105.366 10.181 7.748 15.503-13.603c13.747-12.071 34.678-10.712 46.749 3.035.003.003.006.007.009.01 2.974 3.364 5.244 7.29 6.674 11.547 5.037-2.448 10.627-3.535 16.214-3.152 8.783.545 16.982 4.583 22.767 11.213l.84.96c4.92 5.576 7.802 12.657 8.175 20.085h.711c7.662.501 14.908 3.664 20.483 8.943l.114-.1 1.928 2.206.206.228 2.241 2.554-.1.1c3.818 5.238 5.999 11.489 6.268 17.965h.434c3.16.206 6.275.863 9.249 1.949-1.368-5.858 2.273-11.716 8.131-13.084.833-.194 1.686-.29 2.541-.285z" }),
        React__default['default'].createElement("path", { d: "m462.149 91.146-74.605 57.786 69.013 112.249c.454.235.881.519 1.274.847 1.183 1.219 1.898 2.816 2.021 4.511l10.338 16.812 31.902-17.95z" }),
        React__default['default'].createElement("path", { d: "m468.922 288.124-12.557-20.433-.078-.825c-.046-.871-.399-1.698-.996-2.334l-1.366-.811-.42-.711-70.685-114.939 81.563-63.15 41.777 182.278zm-5.691-22.81 8.153 13.255 26.63-14.941-38.085-166.263-67.696 52.421 66.878 108.777c.441.264.849.579 1.217.939 1.56 1.583 2.583 3.616 2.924 5.813z" }),
        React__default['default'].createElement("path", { d: "m368.385 168.86c-14.472 5.958-30.597 6.544-45.463 1.651l-39.166-12.714c-5.413-1.716-11.287-1.204-16.321 1.423l-13.276 7.051c-.142.071-.263.157-.413.221l-52.606 27.947c-.749.359-1.237 1.105-1.266 1.935-.058.751.307 1.473.946 1.871 15.474 9.875 41.977 17.075 79.919-4.696 2.644-1.513 5.946-1.245 8.31.676l119.584 97.471c1.665 1.369 3.169 2.923 4.482 4.632l29.569-29.59-63.015-102.494z" }),
        React__default['default'].createElement("path", { d: "m412.809 301.649-2.476-3.138c-1.144-1.498-2.457-2.859-3.913-4.055l-119.612-97.443c-1.219-.974-2.908-1.112-4.269-.349-39.494 22.682-67.262 15.026-83.605 4.61-1.72-1.084-2.711-3.022-2.583-5.051.086-2.09 1.298-3.969 3.166-4.909l66.273-35.196c5.882-3.082 12.752-3.686 19.082-1.679l39.152 12.693c14.062 4.633 29.317 4.083 43.008-1.551l14.108-5.777 66.067 107.432zm-128.428-112.612c2.514-.005 4.953.854 6.908 2.433l119.591 97.471c.842.679 1.643 1.409 2.398 2.184l24.901-24.901-59.956-97.55-8.481 3.472c-15.258 6.281-32.259 6.896-47.932 1.736l-39.131-12.707c-4.506-1.415-9.39-.98-13.575 1.21l-64.267 34.151c14.891 8.651 39.387 13.923 74.156-6.047 1.641-.944 3.498-1.444 5.388-1.452z" })));
};

var Icon$19 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "-21 -21 682.66669 682" }, props),
        React__default['default'].createElement("svg", { width: "20", height: "20", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
            React__default['default'].createElement("path", { d: "M2.79438 5.05575C2.79438 3.80675 3.80738 2.79375 5.05538 2.79375H6.08438C6.68038 2.79375 7.25338 2.55775 7.67738 2.13675L8.39638 1.41675C9.27738 0.531746 10.7094 0.527746 11.5944 1.40875L11.6034 1.41675L12.3234 2.13675C12.7464 2.55775 13.3194 2.79375 13.9164 2.79375H14.9444C16.1934 2.79375 17.2064 3.80675 17.2064 5.05575V6.08275C17.2064 6.68075 17.4424 7.25275 17.8634 7.67675L18.5834 8.39675C19.4684 9.27775 19.4734 10.7087 18.5924 11.5947L18.5834 11.6037L17.8634 12.3237C17.4424 12.7457 17.2064 13.3197 17.2064 13.9157V14.9447C17.2064 16.1937 16.1934 17.2057 14.9444 17.2057H13.9164C13.3194 17.2057 12.7464 17.4427 12.3234 17.8637L11.6034 18.5827C10.7234 19.4687 9.29138 19.4727 8.40538 18.5917C8.40238 18.5887 8.39938 18.5857 8.39638 18.5827L7.67738 17.8637C7.25338 17.4427 6.68038 17.2057 6.08438 17.2057H5.05538C3.80738 17.2057 2.79438 16.1937 2.79438 14.9447V13.9157C2.79438 13.3197 2.55738 12.7457 2.13638 12.3237L1.41738 11.6037C0.531378 10.7227 0.527378 9.29075 1.40838 8.40575L1.41738 8.39675L2.13638 7.67675C2.55738 7.25275 2.79438 6.68075 2.79438 6.08275V5.05575", stroke: "#808191", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" }),
            React__default['default'].createElement("path", { opacity: "0.5", d: "M7.43005 12.5694L12.5701 7.42944", stroke: "#808191", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" }),
            React__default['default'].createElement("path", { opacity: "0.5", d: "M12.5668 13.3224C12.3668 13.3224 12.1768 13.2424 12.0368 13.1024C11.9668 13.0324 11.9168 12.9424 11.8768 12.8524C11.8368 12.7624 11.8168 12.6734 11.8168 12.5724C11.8168 12.4724 11.8368 12.3724 11.8768 12.2824C11.9168 12.1924 11.9668 12.1124 12.0368 12.0424C12.3168 11.7624 12.8168 11.7624 13.0968 12.0424C13.1668 12.1124 13.2268 12.1924 13.2668 12.2824C13.2968 12.3724 13.3168 12.4724 13.3168 12.5724C13.3168 12.6734 13.2968 12.7624 13.2668 12.8524C13.2268 12.9424 13.1668 13.0324 13.0968 13.1024C12.9568 13.2424 12.7668 13.3224 12.5668 13.3224Z", fill: "#808191" }),
            React__default['default'].createElement("path", { opacity: "0.5", d: "M7.42664 8.18277C7.32664 8.18277 7.23664 8.16177 7.14664 8.12177C7.05664 8.08177 6.96664 8.03277 6.89664 7.96277C6.82664 7.88277 6.77664 7.80277 6.73664 7.71277C6.69664 7.62177 6.67664 7.53277 6.67664 7.43277C6.67664 7.33177 6.69664 7.23277 6.73664 7.14277C6.77664 7.05277 6.82664 6.96277 6.89664 6.90277C7.18664 6.62177 7.67664 6.62177 7.95664 6.90277C8.09664 7.04177 8.17664 7.23277 8.17664 7.43277C8.17664 7.53277 8.16664 7.62177 8.12664 7.71277C8.08664 7.80277 8.02664 7.88277 7.95664 7.96277C7.88664 8.03277 7.80664 8.08177 7.71664 8.12177C7.62664 8.16177 7.52664 8.18277 7.42664 8.18277Z", fill: "#808191" }))));
};

var Icon$1a = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 502.436 502.436" }, props),
        React__default['default'].createElement("g", null,
            React__default['default'].createElement("path", { d: "M402.481,300.41c0.033-0.051,0.068-0.098,0.102-0.148C402.86,299.793,402.459,300.432,402.481,300.41z" }),
            React__default['default'].createElement("path", { d: "M402.581,199.504c-0.029-0.055-0.062-0.105-0.094-0.16c0.064,0.113,0.143,0.254,0.201,0.359\n\t\t\tC402.651,199.637,402.616,199.571,402.581,199.504z" }),
            React__default['default'].createElement("path", { d: "M406.079,55.139C406.471,54.674,405.678,55.6,406.079,55.139L406.079,55.139z" }),
            React__default['default'].createElement("g", null,
                React__default['default'].createElement("path", { d: "M292.844,383.368C293.102,383.25,293.04,383.279,292.844,383.368L292.844,383.368z" }),
                React__default['default'].createElement("path", { d: "M465.85,19.072c-1.174-2.404-2.348-4.809-3.521-7.215c-3.99,2.063-7.865,4.352-11.678,6.723\n\t\t\t\tc-2.168,1.35-4.312,2.74-6.438,4.156l-2.803,1.896c-0.859-1.303-1.721-2.605-2.578-3.91l2.768-1.709\n\t\t\t\tc2.293-1.393,4.604-2.76,6.939-4.078c3.986-2.254,8.037-4.42,12.189-6.348c-0.797-1.635-1.596-3.27-2.395-4.904\n\t\t\t\tc-0.473-0.971-0.945-1.939-1.42-2.908c-0.367-0.752-0.23-0.936-1.041-0.643c-7.271,2.625-14.391,5.65-21.355,8.998\n\t\t\t\tc-16.805,8.078-33.145,17.945-47.258,30.191c-14.646,12.707-27.654,27.381-36.574,44.721\n\t\t\t\tc-8.943,17.389-13.643,36.518-13.912,56.063c-0.133,9.852,1.146,19.521,2.941,29.184c1.818,9.791,5.121,19.123,8.516,28.455\n\t\t\t\tc2.318,6.732,5.961,12.953,8.506,19.604c1.656,4.328,2.861,8.682,3.896,13.186c0.953,4.148,1.133,8.771,0.643,12.994\n\t\t\t\tc-0.48,4.143-1.887,7.734-3.979,11.306c-2.197,3.748-5.549,6.987-8.752,9.877c-3.389,3.059-7.027,5.823-10.812,8.371\n\t\t\t\tc-16.141,10.856-34.52,18.27-52.9,24.368c-0.593,0.197-1.188,0.379-1.781,0.572l-37.776,77.905\n\t\t\t\tc0.518-0.172,1.038-0.334,1.556-0.508c9.101-3.029,18.152-6.215,27.103-9.67c3.841-1.482,7.658-3.014,11.472-4.568\n\t\t\t\tc0.313-0.129,1.05-0.448,1.05-0.448s0.495,1.215,0.717,1.715c1.938,4.396,3.873,8.787,5.812,13.183\n\t\t\t\tc0.8,1.813,1.601,3.629,2.399,5.44c0.138,0.313,0.274,0.629,0.414,0.94c0.006,0.017-2.73,1.261-3.295,1.517\n\t\t\t\tc0.129-0.06,0.25-0.114,0.346-0.159c-0.1,0.047-0.235,0.108-0.444,0.204c-15.015,6.884-30.364,13.048-45.89,18.673\n\t\t\t\tc-5.586,2.023-11.205,3.959-16.837,5.852l-45.024,92.852c6.834-2.465,13.628-5.039,20.391-7.648\n\t\t\t\tc18.019-6.959,35.824-14.482,53.357-22.588c35.633-16.473,70.357-35.328,102.297-58.234\n\t\t\t\tc30.525-22.016,59.324-48.219,78.301-81.114c9.527-16.517,16.473-34.782,19.074-53.728c2.66-19.358,0.836-39.19-5.188-57.772\n\t\t\t\tc-3.971-12.25-9.643-24.102-16.756-34.852c-3.158-4.773-6.484-9.369-9.947-13.92c-1.967-2.58-4.131-5.012-6.264-7.455\n\t\t\t\tc-3.205-3.674-5.84-7.859-8.459-11.953c-4.441-6.939-7.707-14.865-9.32-22.945c-1.992-9.973-1.287-19.959,1.338-29.74\n\t\t\t\tc5.035-18.758,16.883-35.439,29.934-49.518c8.021-8.656,16.82-16.625,26.174-23.818c1.865-1.436,3.756-2.84,5.676-4.199\n\t\t\t\tC466.758,20.401,466.6,20.608,465.85,19.072z M403.092,299.358c0,0-0.201,0.381-0.51,0.903c-0.072,0.109-0.096,0.144-0.102,0.148\n\t\t\t\tc-8.385,12.725-18.254,23.93-29.76,33.943c-10.844,9.438-22.645,17.574-34.791,25.221c-3.59-6.113-7.18-12.229-10.77-18.344\n\t\t\t\tc15.223-8.717,30.031-18.301,42.879-30.336c6.33-5.932,11.947-12.385,17.027-19.408l1.197-1.566L403.092,299.358\n\t\t\t\t M402.489,199.344c-0.121-0.217-0.18-0.324,0.094,0.16c0.254,0.459,0.215,0.391,0.105,0.199\n\t\t\t\tc8.68,15.752,14.639,33.172,14.564,51.32c-5.246-0.1-10.494-0.201-15.74-0.301c0.66-13.469-2.85-26.854-8.238-39.109\n\t\t\t\tc-2.982-6.785-6.766-13.166-10.443-19.588c-3.178-5.543-5.941-11.195-8.627-16.988c2.039-0.92,4.078-1.84,6.117-2.758\n\t\t\t\tc1.311-0.59,4.99-2.266,4.99-2.266l0.332,0.695c2.414,4.66,4.896,9.178,7.66,13.639\n\t\t\t\tC396.393,189.333,399.608,194.237,402.489,199.344z M406.079,55.139c-9.127,10.514-17.299,21.643-23.01,34.42\n\t\t\t\tc-5.342,11.959-8.377,24.941-8.166,38.061c-3.402-0.049-6.807-0.098-10.211-0.146c0.506-17.471,6.057-34.4,14.984-49.367\n\t\t\t\tc4.535-7.607,9.904-14.607,15.695-21.293c1.395-1.611,2.891-3.137,4.355-4.684c0.527-0.555,2.143-2.352,2.143-2.352\n\t\t\t\ts3.311,3.207,4.785,4.619c0.02,0.018,0.035,0.035,0.055,0.053C406.489,54.67,406.28,54.901,406.079,55.139z" })),
            React__default['default'].createElement("path", { d: "M291.195,210.11c0-70.35-57.233-127.584-127.583-127.584C93.263,82.526,36.03,139.76,36.03,210.11\n\t\t\tc0,20.615,4.921,40.1,13.64,57.353l113.942,234.973l113.96-235.01C286.28,250.182,291.195,230.709,291.195,210.11z\n\t\t\t M163.612,280.711c-38.931,0-70.604-31.671-70.604-70.602c0-38.932,31.674-70.605,70.604-70.605s70.604,31.674,70.604,70.605\n\t\t\tC234.215,249.04,202.542,280.711,163.612,280.711z" }))));
};

var Icon$1b = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "-8 0 464 464" }, props),
        React__default['default'].createElement("g", null,
            React__default['default'].createElement("path", { d: "m154.632812 336.320312c-2.738281 4.984376-2.703124 10.839844.085938 15.679688 2.792969 4.839844 7.847656 7.800781 13.539062 7.910156l2.191407.050782c-6.5625-7.3125-11.664063-15.945313-14.808594-25.480469zm0 0" }),
            React__default['default'].createElement("path", { d: "m154.71875 272c-2.789062 4.832031-2.824219 10.695312-.085938 15.679688l1.007813 1.839843c3.144531-9.535156 8.246094-18.160156 14.808594-25.480469l-2.191407.050782c-5.691406.117187-10.753906 3.078125-13.539062 7.910156zm0 0" }),
            React__default['default'].createElement("path", { d: "m176.089844 367.742188c.117187 5.691406 3.078125 10.753906 7.910156 13.539062 4.816406 2.78125 10.679688 2.824219 15.679688.085938l1.839843-1.007813c-9.535156-3.144531-18.160156-8.246094-25.480469-14.808594zm0 0" }),
            React__default['default'].createElement("path", { d: "m176 395.144531c-1.601562-.929687-3.039062-2.039062-4.433594-3.199219l-19.566406 64.054688 24-16 16 24 15.015625-61.03125c-2.191406-1.394531-4.273437-2.96875-6.085937-4.878906-8.296876 2.460937-17.242188 1.484375-24.929688-2.945313zm0 0" }),
            React__default['default'].createElement("path", { d: "m277.550781 359.960938 2.191407-.050782c5.691406-.117187 10.753906-3.078125 13.539062-7.910156 2.78125-4.832031 2.824219-10.695312.085938-15.679688l-1.007813-1.839843c-3.152344 9.542969-8.246094 18.167969-14.808594 25.480469zm0 0" }),
            React__default['default'].createElement("path", { d: "m209.320312 382.488281 1.054688 1.742188c2.945312 4.867187 8.039062 7.777343 13.625 7.777343s10.679688-2.902343 13.625-7.777343l1.054688-1.742188c-4.742188.984375-9.648438 1.511719-14.679688 1.511719s-9.9375-.527344-14.679688-1.511719zm0 0" }),
            React__default['default'].createElement("path", { d: "m272 395.144531c-7.695312 4.429688-16.632812 5.40625-24.929688 2.945313-1.8125 1.917968-3.894531 3.484375-6.085937 4.878906l15.015625 61.03125 16-24 24 16-19.566406-64.054688c-1.394532 1.160157-2.832032 2.269532-4.433594 3.199219zm0 0" }),
            React__default['default'].createElement("path", { d: "m271.910156 256.265625c-.117187-5.691406-3.078125-10.753906-7.910156-13.539063-4.824219-2.78125-10.6875-2.824218-15.679688-.085937l-1.839843 1.007813c9.535156 3.144531 18.160156 8.246093 25.480469 14.808593zm0 0" }),
            React__default['default'].createElement("path", { d: "m224 368c30.871094 0 56-25.128906 56-56s-25.128906-56-56-56-56 25.128906-56 56 25.128906 56 56 56zm0-48c-13.230469 0-24-10.769531-24-24 0-10.414062 6.710938-19.214844 16-22.527344v-9.472656h16v9.472656c9.289062 3.3125 16 12.113282 16 22.527344h-16c0-4.414062-3.585938-8-8-8s-8 3.585938-8 8 3.585938 8 8 8c13.230469 0 24 10.769531 24 24 0 10.414062-6.710938 19.214844-16 22.527344v9.472656h-16v-9.472656c-9.289062-3.3125-16-12.113282-16-22.527344h16c0 4.414062 3.585938 8 8 8s8-3.585938 8-8-3.585938-8-8-8zm0 0" }),
            React__default['default'].createElement("path", { d: "m199.679688 242.632812c-4.992188-2.722656-10.855469-2.6875-15.679688.085938-4.832031 2.792969-7.800781 7.847656-7.910156 13.539062l-.050782 2.191407c7.3125-6.5625 15.945313-11.664063 25.480469-14.808594zm0 0" }),
            React__default['default'].createElement("path", { d: "m248.320312 381.367188c5 2.746093 10.863282 2.695312 15.679688-.085938 4.832031-2.792969 7.800781-7.847656 7.910156-13.539062l.050782-2.191407c-7.3125 6.5625-15.945313 11.664063-25.480469 14.808594zm0 0" }),
            React__default['default'].createElement("path", { d: "m152 312c0-5.03125.527344-9.9375 1.511719-14.679688l-1.742188 1.054688c-4.867187 2.945312-7.769531 8.039062-7.769531 13.625s2.902344 10.679688 7.777344 13.625l1.742187 1.054688c-.992187-4.734376-1.519531-9.648438-1.519531-14.679688zm0 0" }),
            React__default['default'].createElement("path", { d: "m296.222656 298.375-1.742187-1.054688c.992187 4.742188 1.519531 9.648438 1.519531 14.679688s-.527344 9.9375-1.511719 14.679688l1.742188-1.054688c4.867187-2.945312 7.769531-8.03125 7.769531-13.625s-2.902344-10.679688-7.777344-13.625zm0 0" }),
            React__default['default'].createElement("path", { d: "m293.28125 272c-2.792969-4.832031-7.847656-7.800781-13.539062-7.910156l-2.191407-.050782c6.5625 7.3125 11.664063 15.945313 14.808594 25.480469l1.007813-1.839843c2.738281-4.984376 2.703124-10.839844-.085938-15.679688zm0 0" }),
            React__default['default'].createElement("path", { d: "m238.679688 241.519531-1.054688-1.742187c-2.945312-4.867188-8.039062-7.777344-13.625-7.777344s-10.679688 2.902344-13.625 7.777344l-1.054688 1.742187c4.742188-.984375 9.648438-1.511719 14.679688-1.511719s9.9375.519532 14.679688 1.511719zm0 0" }),
            React__default['default'].createElement("path", { d: "m32 32v31.191406c15.648438-3.191406 28-15.542968 31.191406-31.191406zm0 0" }),
            React__default['default'].createElement("path", { d: "m32 320h31.191406c-3.191406-15.648438-15.542968-28-31.191406-31.191406zm0 0" }),
            React__default['default'].createElement("path", { d: "m416 32h-31.191406c3.191406 15.648438 15.542968 28 31.191406 31.191406zm0 0" }),
            React__default['default'].createElement("path", { d: "m416 320v-31.191406c-15.648438 3.191406-28 15.542968-31.191406 31.191406zm0 0" }),
            React__default['default'].createElement("path", { d: "m320 312c0 2.761719-.464844 5.414062-1.136719 8h49.777344c3.527344-24.472656 22.886719-43.832031 47.359375-47.359375v-193.28125c-24.472656-3.527344-43.832031-22.886719-47.359375-47.359375h-289.28125c-3.527344 24.472656-22.886719 43.832031-47.359375 47.359375v193.28125c24.472656 3.527344 43.832031 22.886719 47.359375 47.359375h49.777344c-.671875-2.585938-1.136719-5.238281-1.136719-8 0-8.863281 3.617188-17.113281 9.910156-23.070312-2.476562-8.3125-1.484375-17.25 2.945313-24.929688 4.441406-7.679688 11.679687-13.007812 20.121093-15.023438 2.015626-8.441406 7.34375-15.679687 15.023438-20.121093 7.6875-4.429688 16.632812-5.414063 24.929688-2.945313 5.957031-6.292968 14.199218-9.910156 23.070312-9.910156s17.113281 3.617188 23.070312 9.910156c8.296876-2.46875 17.234376-1.484375 24.929688 2.945313 7.679688 4.441406 13.007812 11.679687 15.023438 20.121093 8.441406 2.015626 15.679687 7.34375 20.121093 15.023438 4.429688 7.679688 5.421875 16.617188 2.945313 24.929688 6.292968 5.964843 9.910156 14.207031 9.910156 23.070312zm0-176h-88v-16h88zm-160-88h128v48h-128zm-32 72h88v16h-88zm88 80h-88v-16h88zm72 0h-56v-16h56zm-160-32v-16h192v16zm176 32v-16h16v16zm0 0" }),
            React__default['default'].createElement("path", { d: "m0 0v352h137.734375c-1.359375-5.246094-1.398437-10.71875 0-16h-121.734375v-320h416v320h-121.734375c1.40625 5.28125 1.359375 10.753906 0 16h137.734375v-352zm0 0" }),
            React__default['default'].createElement("path", { d: "m176 64h96v16h-96zm0 0" }))));
};

var Icon$1c = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 207.918 207.918" }, props),
        React__default['default'].createElement("g", null,
            React__default['default'].createElement("path", { d: "M59.655,180.863c-0.926,1.604-2.606,2.5-4.334,2.5c-0.849,0-1.708-0.217-2.496-0.671\n\tC22.606,165.237,3.833,132.739,3.834,97.879c0-20.076,6.034-39.288,17.232-55.5l-6.344-6.267c-1.372-1.355-1.842-3.379-1.208-5.2\n\tc0.634-1.822,2.26-3.116,4.177-3.326l21.274-2.333c1.499-0.168,2.988,0.354,4.059,1.413c1.071,1.058,1.608,2.543,1.462,4.041\n\tl-2.074,21.301c-0.187,1.92-1.461,3.561-3.275,4.217c-0.555,0.201-1.13,0.299-1.7,0.299c-1.294,0-2.563-0.502-3.515-1.443\n\tl-5.612-5.544c-9.411,14.238-14.476,30.926-14.476,48.343c0,31.3,16.856,60.48,43.993,76.153\n\tC60.218,175.414,61.037,178.472,59.655,180.863z M194.591,92.675c-2.761,0-5,2.238-5,5l0,0.204\n\tc0,48.457-39.422,87.879-87.879,87.879c-1.773,0-3.543-0.056-5.308-0.161l1.911-7.653c0.467-1.871-0.184-3.845-1.672-5.07\n\tc-1.49-1.228-3.551-1.486-5.297-0.67l-19.385,9.068c-1.364,0.639-2.368,1.857-2.732,3.318s-0.052,3.008,0.852,4.212l12.848,17.117\n\tc0.956,1.273,2.445,1.999,3.999,1.999c0.329,0,0.662-0.032,0.992-0.1c1.891-0.382,3.393-1.817,3.86-3.689l2.169-8.688\n\tc2.579,0.203,5.169,0.317,7.766,0.317c53.971,0,97.879-43.908,97.879-97.915l0-0.168C199.591,94.913,197.352,92.675,194.591,92.675z\n\t M202.255,51.683c-1.491-1.223-3.552-1.48-5.299-0.658l-7.485,3.52C173.208,21.73,139.285,0,101.712,0\n\tC84.453,0.001,67.485,4.556,52.64,13.173c-2.388,1.387-3.2,4.446-1.814,6.834c1.386,2.388,4.444,3.203,6.834,1.814\n\tC70.982,14.089,86.215,10.001,101.713,10c33.671,0,64.077,19.434,78.71,48.8l-7.89,3.711c-1.746,0.82-2.863,2.572-2.872,4.501\n\tc-0.009,1.929,1.092,3.691,2.83,4.528l19.281,9.288c0.686,0.33,1.428,0.495,2.17,0.495c0.727,0,1.454-0.158,2.128-0.476\n\tc1.363-0.641,2.364-1.861,2.726-3.323l5.142-20.774C204.401,54.878,203.746,52.906,202.255,51.683z M70.811,138.821\n\tc-2.761,0-5-2.238-5-5s2.239-5,5-5h25.902v-26.94h-7.435c-12.939,0-23.467-10.527-23.467-23.467\n\tc0-12.946,10.527-23.474,23.467-23.474h7.435v-5.746c0-2.762,2.239-5,5-5s5,2.238,5,5v5.746h25.902c2.761,0,5,2.238,5,5\n\ts-2.239,5-5,5h-25.902v26.94h7.431c12.942,0,23.471,10.529,23.471,23.471s-10.529,23.47-23.471,23.47h-7.431v7.741\n\tc0,2.762-2.239,5-5,5s-5-2.238-5-5v-7.741H70.811z M89.278,91.881h7.435V64.94h-7.435c-7.426,0-13.467,6.041-13.467,13.467\n\tC75.811,85.84,81.852,91.881,89.278,91.881z M106.713,128.821h7.431c7.428,0,13.471-6.043,13.471-13.47\n\tc0-7.428-6.043-13.471-13.471-13.471h-7.431V128.821z" }))));
};

var Icon$1d = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 56 56" }, props),
        React__default['default'].createElement("g", null,
            React__default['default'].createElement("path", { id: "Shape", d: "m54.89 19.33c-1.65-3.16-4.39-5.33-7.89-5.33 1.9387753 4.8214002 2.9563558 9.9635739 3 15.16.1921013 6.0688357-2.3831761 11.8963206-7 15.84 5.82.28 10.9-2.58 12.85-8.55 1.83-5.66 1.45-12.53-.96-17.12z" }),
            React__default['default'].createElement("path", { id: "Shape", d: "m18.16 44.81c3.2315917 2.0831812 6.9951556 3.1907245 10.84 3.19 3.83925-.0374554 7.5924307-1.1419431 10.84-3.19 5.22-3.34 8.16-8.69 8.16-15.64 0-11.67-7.36-29.17-19-29.17-11.1 0-18.22 15.8-18.92 27-.48 7.47 1.67 13.7 8.08 17.81zm6.36-41.71c1.3871963-.71080538 2.9213462-1.08749398 4.48-1.1.5522847 0 1 .44771525 1 1s-.4477153 1-1 1c-1.2497589.01216582-2.4792834.31697831-3.59.89-.4916536.2469243-1.0904244.05031299-1.34-.44-.1210697-.23840257-.1416226-.51536113-.0570687-.76902291.0845539-.25366177.2671714-.46289687.5070687-.58097709zm4.36 25.9c-2.88-.37-6.88-.87-6.88-5.5 0-3.22 2.93-5.1 6-5.44v-2.06c0-.5522847.4477153-1 1-1s1 .4477153 1 1v2.05c4.27.37 5.81 3.07 5.88 3.19.1786328.3126074.1769222.696768-.0044873 1.0077722-.1814095.3110043-.5149577.5016032-.875.5-.3600423-.0016031-.6918799-.1951648-.8705127-.5077722-.06-.13-1.35-2.24-5.13-2.24-2.08 0-5 1.09-5 3.5 0 2.73 1.85 3.1 5.12 3.51 2.88.36 6.88.86 6.88 5.49 0 2.5-1.6 5.11-6 5.5v2c0 .5522847-.4477153 1-1 1s-1-.4477153-1-1v-2c-4-.2-5.54-1.59-5.71-1.76-.3921222-.3921222-.3921222-1.0278778 0-1.42s1.0278778-.3921222 1.42 0c1.54 1.33 10.29 2.6 10.29-2.32 0-2.73-1.85-3.1-5.12-3.5zm-12.28-17.48c1.0099054-1.85917744 2.2422964-3.58855444 3.67-5.15.3783151-.40316784 1.0118321-.42331501 1.415-.04499997.4031678.37831504.423315 1.0118321.045 1.41499997-1.3167051 1.43547667-2.4518907 3.0274234-3.38 4.74-.2761424.4832492-.8917508.6511424-1.375.375s-.6511424-.8917508-.375-1.375z" }),
            React__default['default'].createElement("path", { id: "Shape", d: "m15 45c-8.88-7.41-8.36-20.14-4-31-3.55 0-6.26 2.19-7.89 5.33-2.41 4.59-2.79 11.46-1 17.09 2.02 6.08 7.13 8.82 12.89 8.58z" }),
            React__default['default'].createElement("path", { id: "Shape", d: "m51.37 50.82 5.18-.49c-2.69-2-2.54-1.91-2.62-2-.3695814-.3660786-.5548165-.8790296-.5043991-1.3967767.0504173-.5177471.3311345-.9853244.7643991-1.2732233l.33-.18-2.79-.63c-3.3740505 1.9352367-7.3317613 2.5918972-11.15 1.85-7.0998733 4.3760158-16.0601267 4.3760158-23.16 0-3.823751.72837-7.78190651.0763551-11.17-1.84l-2.77.63.25.13c.459298.2749348.76648497.7459757.8328805 1.2771399.06639553.5311643-.11539102 1.0633268-.4928805 1.4428601-.08.08 0 0-2.62 2l5.15.49c.64038677.0713049 1.18894097.490663 1.42571345 1.0899279.23677249.5992649.12299447 1.2803137-.29571345 1.7700721l-.56.86 6.55-2.17c.9183874-.2960905 1.9231368-.1323536 2.7.44l2.51 1.88c.1137149.0896251.2677225.108876.4.05 6.09-2.89 5.67-2.75 6.15-2.75.4614024.000194.9038362.1836422 1.23.51.13.13 0 0 2.29 3.4 2.27-3.39 2.16-3.26 2.29-3.4.5872385-.5903148 1.5116873-.6785576 2.2-.21l5.18 2.44c.1322775.058876.2862851.0396251.4-.05l2.51-1.88c.7768632-.5723536 1.7816126-.7360905 2.7-.44l6.55 2.17-.56-.86c-.4172055-.4855792-.5340677-1.1610366-.3042517-1.7585583.2298161-.5975217.7691853-1.0205824 1.4042517-1.1014417z" }),
            React__default['default'].createElement("path", { id: "Shape", d: "m46.71 5.71 1-1c.2536586-.25365856.3527236-.62337399.2598781-.96987806-.0928455-.34650406-.363496-.61715454-.71-.71000002-.3465041-.09284548-.7162195.00621949-.9698781.25987808l-1 1c-.3921221.39212218-.3921221 1.02787781 0 1.41999996.3921222.39212216 1.0278778.39212218 1.42.00000004z" }),
            React__default['default'].createElement("path", { id: "Shape", d: "m48.32 9 3-1c.3394023-.11432499.5920313-.40103461.6627241-.75212813s-.0512905-.71323147-.32-.95-.6433218-.31219686-.9827241-.19787187l-3 1c-.3394023.11432498-.5920313.40103461-.6627241.75212813-.0706929.35109352.0512905.71323148.32.95000001s.6433218.31219685.9827241.19787186z" }),
            React__default['default'].createElement("path", { id: "Shape", d: "m12.71 4.29-1-1c-.2536586-.25365857-.623374-.35272352-.969878-.25987804-.3465041.09284548-.6171546.36349595-.71.71-.09284552.34650405.0062194.71621947.259878.96987804l1 1c.3921222.39212215 1.0278778.39212214 1.42-.00000002.3921221-.39212217.3921222-1.0278778 0-1.41999998z" }),
            React__default['default'].createElement("path", { id: "Shape", d: "m6.05 6.68c-.10156011.25804893-.09140308.54668422.02804477.7969559.11944785.25027169.33745932.43970373.60195523.5230441 3.14 1 3.04 1 3.32 1 .4927375.00386501.9148502-.35178371.9946449-.83803264.0797947-.48624892-.2065147-.95815151-.6746449-1.11196736l-3-1c-.25193645-.08555066-.52757913-.06717426-.76592958.05106258-.23835046.11823684-.41975528.32658479-.50407042.57893742z" }))));
};

var IconModule = /*#__PURE__*/Object.freeze({
    __proto__: null,
    FarmIcon: Icon$I,
    FarmUpdatedIcon: Icon$J,
    GroupsIcon: Icon$K,
    HamburgerIcon: Icon$L,
    HamburgerCloseIcon: Icon$M,
    HomeIcon: Icon$N,
    HomeUpdatedIcon: Icon$O,
    IfoIcon: Icon$P,
    IfoUpdatedIcon: Icon$Q,
    InfoIcon: Icon$R,
    InfoUpdatedIcon: Icon$S,
    LanguageIcon: Icon$T,
    LogoIcon: Logo,
    LotteryIcon: Logo$1,
    MoonIcon: Icon$U,
    MoreIcon: Icon$V,
    MoreUpdatedIcon: Icon$W,
    NftIcon: Icon$X,
    NftUpdatedIcon: Icon$Y,
    PoolIcon: Icon$Z,
    PoolUpdatedIcon: Icon$_,
    SunIcon: Icon$$,
    TelegramIcon: Icon$10,
    TicketIcon: Icon$11,
    TradeIcon: Icon$12,
    TradeUpdatedIcon: Icon$13,
    TwitterIcon: Icon$14,
    RedditIcon: Icon$15,
    AuditIcon: Icon$16,
    GooseIcon: Icon$17,
    HandshakeIcon: Icon$18,
    LayerIcon: Icon$19,
    RoadmapIcon: Icon$1a,
    BondsIcon: Icon$1b,
    VaultsIcon: Icon$1c,
    EggHouseIcon: Icon$1d
});

var MenuButton = styled__default['default'](Button)(templateObject_1$x || (templateObject_1$x = __makeTemplateObject(["\n  color: ", ";\n  padding: 0 8px;\n  border-radius: 8px;\n  margin-top: 0.65rem;\n  margin-left: 2rem;\n\n  ", "{\n    margin-top: 2.5rem;\n    margin-left: 2rem;\n  \n  }\n"], ["\n  color: ", ";\n  padding: 0 8px;\n  border-radius: 8px;\n  margin-top: 0.65rem;\n  margin-left: 2rem;\n\n  ", "{\n    margin-top: 2.5rem;\n    margin-left: 2rem;\n  \n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
MenuButton.defaultProps = {
    variant: "text",
};
var templateObject_1$x;

var StyledLink$1 = styled__default['default'](reactRouterDom.Link)(templateObject_1$y || (templateObject_1$y = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n\n  .mobile-icon {\n    display: none;\n    // @media only screen and (max-width: 768px) {     \n      \n    //   width: 52px;\n    // }\n  }\n\n\n  .desktop-icon {\n    width: 130px;\n    \n    display: block;\n    @media only screen and (max-width: 768px) {\n      display: none;\n    }\n  }\n"], ["\n  display: flex;\n  align-items: center;\n\n  .mobile-icon {\n    display: none;\n    // @media only screen and (max-width: 768px) {     \n      \n    //   width: 52px;\n    // }\n  }\n\n\n  .desktop-icon {\n    width: 130px;\n    \n    display: block;\n    @media only screen and (max-width: 768px) {\n      display: none;\n    }\n  }\n"])));
var Logo$2 = function (_a) {
    var isPushed = _a.isPushed, togglePush = _a.togglePush, isDark = _a.isDark, href = _a.href;
    var isAbsoluteUrl = href.startsWith("http");
    var innerLogo = (React__default['default'].createElement(React__default['default'].Fragment, null,
        React__default['default'].createElement(Icon$q, { className: "mobile-icon" }),
        React__default['default'].createElement(Logo, { className: "desktop-icon", isDark: isDark })));
    return (React__default['default'].createElement(Flex, null,
        isAbsoluteUrl ? (React__default['default'].createElement(StyledLink$1, { as: "a", href: href, "aria-label": "Pancake home page" }, innerLogo)) : (React__default['default'].createElement(StyledLink$1, { to: href, "aria-label": "Pancake home page" }, innerLogo)),
        React__default['default'].createElement(MenuButton, { "aria-label": "Toggle menu", onClick: togglePush, mr: "24px" }, isPushed ? (React__default['default'].createElement(Icon$M, { width: "24px" })) : (React__default['default'].createElement(Icon$L, { width: "24px", color: "#E8BB4E" })))));
};
var templateObject_1$y;

var links = [
    {
        label: "Home",
        icon: "HomeIcon",
        href: "/",
    },
    {
        label: "Trade",
        icon: "TradeIcon",
        items: [
            {
                label: "Exchange",
                href: "https://exchange.pancakeswap.finance",
            },
            {
                label: "Liquidity",
                href: "https://exchange.pancakeswap.finance/#/pool",
            },
        ],
    },
    {
        label: "Farms",
        icon: "FarmIcon",
        href: "/farms",
    },
    {
        label: "Pools",
        icon: "PoolIcon",
        href: "/syrup",
    },
    {
        label: "Lottery",
        icon: "TicketIcon",
        href: "/lottery",
    },
    {
        label: "NFT",
        icon: "NftIcon",
        href: "/nft",
    },
    {
        label: "Profile & Teams",
        icon: "GroupsIcon",
        items: [
            {
                label: "Leaderboard",
                href: "/",
            },
            {
                label: "YourProfile",
                href: "/",
            },
        ],
        calloutClass: "rainbow",
    },
    {
        label: "Info",
        icon: "InfoIcon",
        items: [
            {
                label: "Overview",
                href: "https://pancakeswap.info",
            },
            {
                label: "Tokens",
                href: "https://pancakeswap.info/tokens",
            },
            {
                label: "Pairs",
                href: "https://pancakeswap.info/pairs",
            },
            {
                label: "Accounts",
                href: "https://pancakeswap.info/accounts",
            },
        ],
    },
    {
        label: "IFO",
        icon: "IfoIcon",
        items: [
            {
                label: "Next",
                href: "/ifo",
            },
            {
                label: "History",
                href: "/ifo/history",
            },
        ],
    },
    {
        label: "More",
        icon: "MoreIcon",
        items: [
            // {
            //   label: "Voting",
            //   href: "https://voting.pancakeswap.finance",
            // },
            {
                label: "Github",
                href: "https://github.com/goosedefi/",
            },
            {
                label: "Docs",
                href: "https://goosedefi.gitbook.io/goose-finance/",
            },
            {
                label: "Blog",
                href: "https://goosefinance.medium.com/",
            },
        ],
    },
];
var MENU_HEIGHT = 94;
var MENU_ENTRY_HEIGHT = 56;
var SIDEBAR_WIDTH_FULL = 260;
var SIDEBAR_WIDTH_REDUCED = 0;

var rainbowAnimation = styled.keyframes(templateObject_1$z || (templateObject_1$z = __makeTemplateObject(["\n  0%,\n  100% {\n    background-position: 0 0;\n  }\n  50% {\n    background-position: 100% 0;\n  }\n"], ["\n  0%,\n  100% {\n    background-position: 0 0;\n  }\n  50% {\n    background-position: 100% 0;\n  }\n"])));
var LinkLabel = styled__default['default'].div(templateObject_2$a || (templateObject_2$a = __makeTemplateObject(["\n  color: ", ";\n  transition: color 0.4s;\n  flex-grow: 1;\n"], ["\n  color: ", ";\n  transition: color 0.4s;\n  flex-grow: 1;\n"])), function (_a) {
    var isPushed = _a.isPushed, theme = _a.theme;
    return (isPushed ? theme.colors.textSubtle : "transparent");
});
var MenuEntry = styled__default['default'].div(templateObject_3$6 || (templateObject_3$6 = __makeTemplateObject(["\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  height: ", "px;\n  padding: ", ";\n  font-size: ", ";\n  font-weight: bold;\n  background-color: ", ";\n  color: ", ";\n  // box-shadow: ", ";\n  background: ", ";\n  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;\n  a {\n    display: flex;\n    align-items: center;\n    width: 100%;\n    height: 100%;\n  }\n\n  svg {\n    fill: ", ";\n  }\n\n  &:hover {\n    border: 2px solid ", ";\n    border-radius: 0.8rem;\n  }\n\n  // Safari fix\n  flex-shrink: 0;\n\n  &.rainbow {\n    -webkit-background-clip: text;\n    animation: ", " 3s ease-in-out infinite;\n    background: ", ";\n    background-size: 200% 100%;\n    font-weight: bold;\n  }\n"], ["\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  height: ", "px;\n  padding: ", ";\n  font-size: ", ";\n  font-weight: bold;\n  background-color: ", ";\n  color: ", ";\n  // box-shadow: ", ";\n  background: ", ";\n  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;\n  a {\n    display: flex;\n    align-items: center;\n    width: 100%;\n    height: 100%;\n  }\n\n  svg {\n    fill: ", ";\n  }\n\n  &:hover {\n    border: 2px solid ", ";\n    border-radius: 0.8rem;\n  }\n\n  // Safari fix\n  flex-shrink: 0;\n\n  &.rainbow {\n    -webkit-background-clip: text;\n    animation: ", " 3s ease-in-out infinite;\n    background: ", ";\n    background-size: 200% 100%;\n    font-weight: bold;\n  }\n"])), MENU_ENTRY_HEIGHT, function (_a) {
    var isPushed = _a.isPushed;
    return (isPushed ? "0 50px" : "0 16px");
}, function (_a) {
    var secondary = _a.secondary;
    return (secondary ? "18px" : "19px");
}, function (_a) {
    var secondary = _a.secondary, theme = _a.theme; _a.isActive;
    return (secondary ? theme.colors.card : "transparent");
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.textSubtle;
}, function (_a) {
    var isActive = _a.isActive, theme = _a.theme;
    return (isActive ? "inset 12px 0px 0px " + theme.colors.primary : "none");
}, function (_a) {
    var isActive = _a.isActive; _a.theme;
    return (isActive ? "#F3BB2F" : "none");
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.textSubtle;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.primary;
}, rainbowAnimation, function (_a) {
    var theme = _a.theme;
    return theme.colors.gradients.bubblegum;
});
MenuEntry.defaultProps = {
    secondary: false,
    isActive: false,
    role: "button",
    isPushed: false,
};
var templateObject_1$z, templateObject_2$a, templateObject_3$6;

var Container$2 = styled__default['default'].div(templateObject_1$A || (templateObject_1$A = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  // Safari fix\n  flex-shrink: 0;\n  width: 100%;\n"], ["\n  display: flex;\n  flex-direction: column;\n  // Safari fix\n  flex-shrink: 0;\n  width: 100%;\n"])));
var AccordionContent = styled__default['default'].div(templateObject_2$b || (templateObject_2$b = __makeTemplateObject(["\n  max-height: ", ";\n  transition: max-height 0.3s ease-out;\n  overflow: hidden;\n  border-color: ", ";\n  border-style: solid;\n  border-width: 1px;\n  padding: 0 ; // ", ";\n"], ["\n  max-height: ", ";\n  transition: max-height 0.3s ease-out;\n  overflow: hidden;\n  border-color: ", ";\n  border-style: solid;\n  border-width: 1px;\n  padding: 0 ; // ", ";\n"])), function (_a) {
    var isOpen = _a.isOpen, maxHeight = _a.maxHeight;
    return (isOpen ? maxHeight + "px" : 0);
}, function (_a) {
    var isOpen = _a.isOpen, isPushed = _a.isPushed;
    return (isOpen && isPushed ? "rgba(133, 133, 133, 0.1)" : "transparent");
}, function (_a) {
    var isPushed = _a.isPushed;
    return (isPushed ? "0 25px" : "0 16px");
});
var Accordion = function (_a) {
    var label = _a.label, icon = _a.icon, isPushed = _a.isPushed, pushNav = _a.pushNav, _b = _a.initialOpenState, initialOpenState = _b === void 0 ? false : _b, children = _a.children, className = _a.className;
    var _c = React.useState(initialOpenState), isOpen = _c[0], setIsOpen = _c[1];
    var handleClick = function () {
        if (isPushed) {
            setIsOpen(function (prevState) { return !prevState; });
        }
        else {
            pushNav(true);
            setIsOpen(true);
        }
    };
    return (React__default['default'].createElement(Container$2, null,
        React__default['default'].createElement(MenuEntry, { onClick: handleClick, className: className },
            icon,
            React__default['default'].createElement(LinkLabel, { isPushed: isPushed }, label),
            isOpen ? React__default['default'].createElement(Icon$8, null) : React__default['default'].createElement(Icon$7, null)),
        React__default['default'].createElement(AccordionContent, { isOpen: isOpen, isPushed: isPushed, maxHeight: React__default['default'].Children.count(children) * MENU_ENTRY_HEIGHT }, children)));
};
var templateObject_1$A, templateObject_2$b;

var MenuLink = function (_a) {
    var href = _a.href, otherProps = __rest(_a, ["href"]);
    var isHttpLink = href === null || href === void 0 ? void 0 : href.startsWith("http");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var Tag = isHttpLink ? "a" : reactRouterDom.NavLink;
    var props = isHttpLink ? { href: href } : { to: href };
    return React__default['default'].createElement(Tag, __assign({}, props, otherProps));
};

var Icons = IconModule;
var Container$3 = styled__default['default'].div(templateObject_1$B || (templateObject_1$B = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  overflow-y: auto;\n  overflow-x: hidden;\n  height: 100%;\n  padding: 2rem  0 0 0;\n  // align-items: center;\n"], ["\n  display: flex;\n  flex-direction: column;\n  overflow-y: auto;\n  overflow-x: hidden;\n  height: 100%;\n  padding: 2rem  0 0 0;\n  // align-items: center;\n"])));
var PanelBody = function (_a) {
    var isPushed = _a.isPushed, pushNav = _a.pushNav, isMobile = _a.isMobile, links = _a.links;
    var location = reactRouterDom.useLocation();
    // Close the menu when a user clicks a link on mobile
    var handleClick = isMobile ? function () { return pushNav(false); } : undefined;
    return (React__default['default'].createElement(Container$3, null, links.map(function (entry) {
        var Icon = Icons[entry.icon];
        var iconElement = React__default['default'].createElement(Icon, { width: "24px", mr: "8px" });
        var calloutClass = entry.calloutClass ? entry.calloutClass : undefined;
        if (entry.items) {
            return (React__default['default'].createElement(Accordion, { key: entry.label, isPushed: isPushed, pushNav: pushNav, icon: iconElement, label: entry.label, initialOpenState: entry.initialOpenState, className: calloutClass }, isPushed &&
                entry.items.map(function (item) { return ( // Here background Accordation //
                React__default['default'].createElement(MenuEntry, { key: item.href, style: { backgroundColor: "rgb(39, 43, 47)" }, secondary: true, isActive: item.href === location.pathname, onClick: handleClick },
                    React__default['default'].createElement(MenuLink, { href: item.href }, item.label))); })));
        }
        return (React__default['default'].createElement(MenuEntry, { key: entry.label, isActive: entry.href === location.pathname, className: calloutClass },
            React__default['default'].createElement(MenuLink, { href: entry.href, onClick: handleClick },
                iconElement,
                React__default['default'].createElement(LinkLabel, { isPushed: isPushed }, entry.label))));
    })));
};
var templateObject_1$B;

var Icons$1 = IconModule;
var MoonIcon = Icons$1.MoonIcon, SunIcon = Icons$1.SunIcon; Icons$1.LanguageIcon;
var Container$4 = styled__default['default'].div(templateObject_1$C || (templateObject_1$C = __makeTemplateObject(["\n  flex: none;\n  padding: 8px 4px;\n  background: ", ";\n  border-top: solid 2px rgba(133, 133, 133, 0.1);\n  height: 8rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n"], ["\n  flex: none;\n  padding: 8px 4px;\n  background: ", ";\n  border-top: solid 2px rgba(133, 133, 133, 0.1);\n  height: 8rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.sideBar;
});
styled__default['default'].a(templateObject_2$c || (templateObject_2$c = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  svg {\n    transition: transform 0.3s;\n  }\n  :hover {\n    svg {\n      transform: scale(1.2);\n    }\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  svg {\n    transition: transform 0.3s;\n  }\n  :hover {\n    svg {\n      transform: scale(1.2);\n    }\n  }\n"])));
var SettingsEntry = styled__default['default'].div(templateObject_3$7 || (templateObject_3$7 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  height: ", "px;\n  padding: 0 8px;\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  height: ", "px;\n  padding: 0 8px;\n"])), MENU_ENTRY_HEIGHT);
styled__default['default'].div(templateObject_4$2 || (templateObject_4$2 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: ", "px;\n  padding: 0 16px;\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: ", "px;\n  padding: 0 16px;\n"])), MENU_ENTRY_HEIGHT);
var PanelFooter = function (_a) {
    var isPushed = _a.isPushed, pushNav = _a.pushNav, toggleTheme = _a.toggleTheme, isDark = _a.isDark; _a.cakePriceUsd; _a.currentLang; _a.langs; _a.setLang; _a.priceLink;
    if (!isPushed) {
        return (React__default['default'].createElement(Container$4, null,
            React__default['default'].createElement(IconButton, { variant: "text", onClick: function () { return pushNav(true); } },
                React__default['default'].createElement(Icon$l, null))));
    }
    return (React__default['default'].createElement(Container$4, null,
        React__default['default'].createElement(SettingsEntry, null,
            React__default['default'].createElement(Button, { style: { padding: "0rem 0.8rem 0rem 0.8rem" }, variant: "text", onClick: function () { return toggleTheme(!isDark); } },
                React__default['default'].createElement(Flex, { alignItems: "center" },
                    React__default['default'].createElement(SunIcon, { color: isDark ? "textDisabled" : "text", width: "24px" }),
                    React__default['default'].createElement(Text, { color: "textDisabled", mx: "4px" }, "/"),
                    React__default['default'].createElement(MoonIcon, { color: isDark ? "text" : "textDisabled", width: "24px" }))))));
};
var templateObject_1$C, templateObject_2$c, templateObject_3$7, templateObject_4$2;

var StyledPanel = styled__default['default'].div(templateObject_1$D || (templateObject_1$D = __makeTemplateObject(["\n  position: fixed;\n  padding-top: ", ";\n  top: 0;\n  left: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  flex-shrink: 0;\n  background: ", ";\n  width: ", ";\n  height: 100vh;\n  transition: padding-top 0.2s, width 0.2s;\n  border-right: ", ";\n  z-index: 11;\n  overflow: ", "; \n  transform: translate3d(0, 0, 0);\n\n  // ", " {\n  //   border-right: 2px solid rgba(133, 133, 133, 0.1);\n  //   width: ", ";\n  // }\n"], ["\n  position: fixed;\n  padding-top: ", ";\n  top: 0;\n  left: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  flex-shrink: 0;\n  background: ", ";\n  width: ", ";\n  height: 100vh;\n  transition: padding-top 0.2s, width 0.2s;\n  border-right: ", ";\n  z-index: 11;\n  overflow: ", "; \n  transform: translate3d(0, 0, 0);\n\n  // ", " {\n  //   border-right: 2px solid rgba(133, 133, 133, 0.1);\n  //   width: ", ";\n  // }\n"])), function (_a) {
    var showMenu = _a.showMenu;
    return (showMenu ? "80px" : 0);
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.sideBar;
}, function (_a) {
    var isPushed = _a.isPushed;
    return (isPushed ? SIDEBAR_WIDTH_FULL + "px" : 0);
}, function (_a) {
    var isPushed = _a.isPushed;
    return (isPushed ? "2px solid rgba(133, 133, 133, 0.1)" : 0);
}, function (_a) {
    var isPushed = _a.isPushed;
    return (isPushed ? "initial" : "hidden");
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
}, function (_a) {
    var isPushed = _a.isPushed;
    return (isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED) + "px";
});
var Panel = function (props) {
    var isPushed = props.isPushed, showMenu = props.showMenu;
    return (React__default['default'].createElement(StyledPanel, { isPushed: isPushed, showMenu: showMenu },
        React__default['default'].createElement(PanelBody, __assign({}, props)),
        React__default['default'].createElement(PanelFooter, __assign({}, props))));
};
var templateObject_1$D;

var Icon$1e = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React__default['default'].createElement("circle", { cx: "48", cy: "48", r: "48", fill: "white" }),
        React__default['default'].createElement("path", { d: "M77.7602 16.9155L51.9419 36.0497L56.7382 24.7733L77.7602 16.9155Z", fill: "#E17726" }),
        React__default['default'].createElement("path", { d: "M18.2656 16.9155L43.8288 36.2283L39.2622 24.7733L18.2656 16.9155Z", fill: "#E27625" }),
        React__default['default'].createElement("path", { d: "M68.4736 61.2808L61.6108 71.7918L76.3059 75.8482L80.4899 61.5104L68.4736 61.2808Z", fill: "#E27625" }),
        React__default['default'].createElement("path", { d: "M15.5356 61.5104L19.6941 75.8482L34.3892 71.7918L27.5519 61.2808L15.5356 61.5104Z", fill: "#E27625" }),
        React__default['default'].createElement("path", { d: "M33.5984 43.5251L29.491 49.699L44.0584 50.3624L43.5482 34.6724L33.5984 43.5251Z", fill: "#E27625" }),
        React__default['default'].createElement("path", { d: "M62.4274 43.525L52.2991 34.4937L51.9419 50.3622L66.5094 49.6989L62.4274 43.525Z", fill: "#E27625" }),
        React__default['default'].createElement("path", { d: "M34.3892 71.7922L43.1654 67.5316L35.6137 61.6128L34.3892 71.7922Z", fill: "#E27625" }),
        React__default['default'].createElement("path", { d: "M52.8345 67.5316L61.6107 71.7922L60.3861 61.6128L52.8345 67.5316Z", fill: "#E27625" }),
        React__default['default'].createElement("path", { d: "M61.6107 71.7923L52.8345 67.5317L53.5233 73.2465L53.4468 75.6446L61.6107 71.7923Z", fill: "#D5BFB2" }),
        React__default['default'].createElement("path", { d: "M34.3892 71.7923L42.5531 75.6446L42.502 73.2465L43.1654 67.5317L34.3892 71.7923Z", fill: "#D5BFB2" }),
        React__default['default'].createElement("path", { d: "M42.7062 57.8369L35.4097 55.6939L40.5631 53.3213L42.7062 57.8369Z", fill: "#233447" }),
        React__default['default'].createElement("path", { d: "M53.2937 57.8369L55.4367 53.3213L60.6412 55.6939L53.2937 57.8369Z", fill: "#233447" }),
        React__default['default'].createElement("path", { d: "M34.3893 71.7918L35.6649 61.2808L27.552 61.5104L34.3893 71.7918Z", fill: "#CC6228" }),
        React__default['default'].createElement("path", { d: "M60.3352 61.2808L61.6108 71.7918L68.4736 61.5104L60.3352 61.2808Z", fill: "#CC6228" }),
        React__default['default'].createElement("path", { d: "M66.5094 49.6987L51.9419 50.362L53.294 57.8371L55.4371 53.3215L60.6416 55.6941L66.5094 49.6987Z", fill: "#CC6228" }),
        React__default['default'].createElement("path", { d: "M35.4098 55.6941L40.5633 53.3215L42.7063 57.8371L44.0584 50.362L29.491 49.6987L35.4098 55.6941Z", fill: "#CC6228" }),
        React__default['default'].createElement("path", { d: "M29.491 49.6987L35.6139 61.6129L35.4098 55.6941L29.491 49.6987Z", fill: "#E27525" }),
        React__default['default'].createElement("path", { d: "M60.6414 55.6941L60.3862 61.6129L66.5092 49.6987L60.6414 55.6941Z", fill: "#E27525" }),
        React__default['default'].createElement("path", { d: "M44.0584 50.3618L42.7063 57.8369L44.4156 66.6641L44.7728 55.0305L44.0584 50.3618Z", fill: "#E27525" }),
        React__default['default'].createElement("path", { d: "M51.9415 50.3618L51.2527 55.005L51.5843 66.6641L53.2937 57.8369L51.9415 50.3618Z", fill: "#E27525" }),
        React__default['default'].createElement("path", { d: "M53.2938 57.8374L51.5845 66.6646L52.8346 67.532L60.3862 61.6132L60.6413 55.6943L53.2938 57.8374Z", fill: "#F5841F" }),
        React__default['default'].createElement("path", { d: "M35.4097 55.6943L35.6138 61.6132L43.1654 67.532L44.4155 66.6646L42.7062 57.8374L35.4097 55.6943Z", fill: "#F5841F" }),
        React__default['default'].createElement("path", { d: "M53.4468 75.6443L53.5233 73.2462L52.8855 72.6849H43.1143L42.502 73.2462L42.5531 75.6443L34.3892 71.792L37.2465 74.1391L43.0378 78.1445H52.962L58.7533 74.1391L61.6107 71.792L53.4468 75.6443Z", fill: "#C0AC9D" }),
        React__default['default'].createElement("path", { d: "M52.8346 67.5315L51.5845 66.6641H44.4156L43.1655 67.5315L42.5022 73.2462L43.1145 72.6849H52.8857L53.5235 73.2462L52.8346 67.5315Z", fill: "#161616" }),
        React__default['default'].createElement("path", { d: "M78.8314 37.2998L80.9999 26.7377L77.7599 16.9155L52.8345 35.4119L62.4271 43.5247L75.9485 47.4791L78.9335 43.984L77.6323 43.04L79.7243 41.1521L78.1426 39.902L80.2091 38.3458L78.8314 37.2998Z", fill: "#763E1A" }),
        React__default['default'].createElement("path", { d: "M15 26.7377L17.194 37.2998L15.7909 38.3458L17.8574 39.902L16.2756 41.1521L18.3676 43.04L17.0665 43.984L20.0514 47.4791L33.5984 43.5247L43.1655 35.4119L18.2656 16.9155L15 26.7377Z", fill: "#763E1A" }),
        React__default['default'].createElement("path", { d: "M75.9487 47.4793L62.4272 43.5249L66.5092 49.6989L60.3862 61.613L68.4736 61.511H80.4898L75.9487 47.4793Z", fill: "#F5841F" }),
        React__default['default'].createElement("path", { d: "M33.5983 43.5249L20.0513 47.4793L15.5356 61.511H27.5519L35.6137 61.613L29.4908 49.6989L33.5983 43.5249Z", fill: "#F5841F" }),
        React__default['default'].createElement("path", { d: "M51.9415 50.3617L52.8344 35.4115L56.7378 24.7729H39.262L43.1653 35.4115L44.0583 50.3617L44.3899 55.0559L44.4154 66.664H51.5843L51.6099 55.0559L51.9415 50.3617Z", fill: "#F5841F" })));
};

var Icon$1f = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React__default['default'].createElement("circle", { cx: "48", cy: "48", r: "48", fill: "white" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M66.4573 43.7107C64.8919 42.1452 64.8919 39.6071 66.4573 38.0416C68.0228 36.4762 70.5609 36.4762 72.1264 38.0416C73.6918 39.6071 73.6918 42.1452 72.1264 43.7107C70.5609 45.2762 68.0228 45.2762 66.4573 43.7107ZM52.9933 57.1747C51.8192 56.0006 51.8192 54.097 52.9933 52.9229C54.1674 51.7488 56.071 51.7488 57.2451 52.9229C58.4192 54.097 58.4192 56.0006 57.2451 57.1747C56.071 58.3488 54.1674 58.3488 52.9933 57.1747ZM74.2523 50.0884C73.0782 48.9143 73.0782 47.0107 74.2523 45.8366C75.4263 44.6625 77.3299 44.6625 78.504 45.8366C79.6781 47.0107 79.6781 48.9143 78.504 50.0884C77.3299 51.2625 75.4263 51.2625 74.2523 50.0884ZM67.166 57.1747C65.9919 56.0006 65.9919 54.097 67.166 52.9229C68.34 51.7488 70.2436 51.7488 71.4177 52.9229C72.5918 54.097 72.5918 56.0006 71.4177 57.1747C70.2436 58.3488 68.34 58.3488 67.166 57.1747ZM82.0472 56.466C81.2645 55.6833 81.2645 54.4142 82.0472 53.6315C82.8299 52.8488 84.099 52.8488 84.8817 53.6315C85.6644 54.4142 85.6644 55.6833 84.8817 56.466C84.099 57.2488 82.8299 57.2488 82.0472 56.466ZM74.9609 63.5523C74.1782 62.7696 74.1782 61.5005 74.9609 60.7178C75.7436 59.9351 77.0127 59.9351 77.7954 60.7178C78.5781 61.5005 78.5781 62.7696 77.7954 63.5523C77.0127 64.3351 75.7436 64.3351 74.9609 63.5523ZM59.371 50.797C57.8056 49.2315 57.8056 46.6934 59.371 45.1279C60.9365 43.5625 63.4746 43.5625 65.0401 45.1279C66.6055 46.6934 66.6055 49.2315 65.0401 50.797C63.4746 52.3625 60.9365 52.3625 59.371 50.797ZM59.371 36.6244C57.8056 35.0589 57.8056 32.5208 59.371 30.9553C60.9365 29.3899 63.4746 29.3899 65.0401 30.9553C66.6055 32.5208 66.6055 35.0589 65.0401 36.6244C63.4746 38.1898 60.9365 38.1898 59.371 36.6244ZM52.2847 43.7107C50.7193 42.1452 50.7193 39.6071 52.2847 38.0416C53.8502 36.4762 56.3883 36.4762 57.9538 38.0416C59.5192 39.6071 59.5192 42.1452 57.9538 43.7107C56.3883 45.2762 53.8502 45.2762 52.2847 43.7107ZM38.0462 43.7107C36.4808 42.1452 36.4808 39.6071 38.0462 38.0416C39.6117 36.4762 42.1498 36.4762 43.7153 38.0416C45.2807 39.6071 45.2807 42.1452 43.7153 43.7107C42.1498 45.2762 39.6117 45.2762 38.0462 43.7107ZM24.5823 57.1747C23.4082 56.0006 23.4082 54.097 24.5823 52.9229C25.7564 51.7488 27.66 51.7488 28.8341 52.9229C30.0081 54.097 30.0081 56.0006 28.8341 57.1747C27.66 58.3488 25.7564 58.3488 24.5823 57.1747ZM45.8412 50.0884C44.6671 48.9143 44.6671 47.0107 45.8412 45.8366C47.0153 44.6625 48.9189 44.6625 50.093 45.8366C51.2671 47.0107 51.2671 48.9143 50.093 50.0884C48.9189 51.2625 47.0153 51.2625 45.8412 50.0884ZM38.7549 57.1747C37.5808 56.0006 37.5808 54.097 38.7549 52.9229C39.929 51.7488 41.8326 51.7488 43.0067 52.9229C44.1807 54.097 44.1807 56.0006 43.0067 57.1747C41.8326 58.3488 39.929 58.3488 38.7549 57.1747ZM11.1183 56.466C10.3356 55.6833 10.3356 54.4142 11.1183 53.6315C11.901 52.8488 13.1701 52.8488 13.9528 53.6315C14.7356 54.4142 14.7356 55.6833 13.9528 56.466C13.1701 57.2488 11.901 57.2488 11.1183 56.466ZM18.2046 63.5523C17.4219 62.7696 17.4219 61.5005 18.2046 60.7178C18.9873 59.9351 20.2564 59.9351 21.0391 60.7178C21.8219 61.5005 21.8219 62.7696 21.0391 63.5523C20.2564 64.3351 18.9873 64.3351 18.2046 63.5523ZM46.5498 63.5523C45.7671 62.7696 45.7671 61.5005 46.5498 60.7178C47.3325 59.9351 48.6016 59.9351 49.3843 60.7178C50.1671 61.5005 50.1671 62.7696 49.3843 63.5523C48.6016 64.3351 47.3325 64.3351 46.5498 63.5523ZM17.496 50.0884C16.3219 48.9143 16.3219 47.0107 17.496 45.8366C18.6701 44.6625 20.5737 44.6625 21.7478 45.8366C22.9218 47.0107 22.9218 48.9143 21.7478 50.0884C20.5737 51.2625 18.6701 51.2625 17.496 50.0884ZM30.9599 50.797C29.3945 49.2315 29.3945 46.6934 30.9599 45.1279C32.5254 43.5625 35.0635 43.5625 36.629 45.1279C38.1944 46.6934 38.1944 49.2315 36.629 50.797C35.0635 52.3625 32.5254 52.3625 30.9599 50.797ZM30.9599 36.6244C29.3945 35.0589 29.3945 32.5208 30.9599 30.9553C32.5254 29.3899 35.0635 29.3899 36.629 30.9553C38.1944 32.5208 38.1944 35.0589 36.629 36.6244C35.0635 38.1898 32.5254 38.1898 30.9599 36.6244ZM23.8736 43.7107C22.3082 42.1452 22.3082 39.6071 23.8736 38.0416C25.4391 36.4762 27.9772 36.4762 29.5427 38.0416C31.1081 39.6071 31.1081 42.1452 29.5427 43.7107C27.9772 45.2762 25.4391 45.2762 23.8736 43.7107Z", fill: "#1D222A" })));
};

var Icon$1g = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React__default['default'].createElement("circle", { cx: "48", cy: "48", r: "48", fill: "white" }),
        React__default['default'].createElement("path", { d: "M44.3288 35.3546V21.7134H19.0926C18.581 21.7134 18.24 22.0544 18.24 22.566V41.8342C18.24 42.3457 18.581 42.6867 19.0926 42.6867H28.8119V77.8129C28.8119 78.3244 29.153 78.6654 29.6645 78.6654H45.5224C46.0339 78.6654 46.375 78.3244 46.375 77.8129V35.3546H44.3288Z", fill: "#29AEFF" }),
        React__default['default'].createElement("path", { d: "M61.8919 17.2798H55.7534H39.2134C38.7019 17.2798 38.3608 17.6208 38.3608 18.1324V73.3792C38.3608 73.8908 38.7019 74.2318 39.2134 74.2318H55.0713C55.5829 74.2318 55.9239 73.8908 55.9239 73.3792V59.397H62.0624C73.6575 59.397 83.0358 50.0187 83.0358 38.4237C83.0358 26.6581 73.487 17.2798 61.8919 17.2798Z", fill: "#2761E7" })));
};

var Icon$1h = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React__default['default'].createElement("g", { clipPath: "url(#clip0)" },
            React__default['default'].createElement("path", { d: "M48.0048 96.0097C74.5172 96.0097 96.0097 74.5172 96.0097 48.0048C96.0097 21.4925 74.5172 0 48.0048 0C21.4925 0 0 21.4925 0 48.0048C0 74.5172 21.4925 96.0097 48.0048 96.0097Z", fill: "#3375BB" }),
            React__default['default'].createElement("path", { d: "M48.0048 22.8922L49.3179 21.1833C48.9399 20.8928 48.4766 20.7354 48 20.7354C47.5233 20.7354 47.06 20.8928 46.682 21.1833L48.0048 22.8922ZM70.5783 29.5252H72.7313C72.7352 29.2396 72.6824 28.9561 72.576 28.6909C72.4696 28.4258 72.3118 28.1844 72.1116 27.9806C71.9114 27.7769 71.6729 27.6148 71.4097 27.5037C71.1465 27.3926 70.8639 27.3348 70.5783 27.3335V29.5252ZM48.0048 75.6377L46.8076 77.4335C47.1604 77.6697 47.5754 77.7958 48 77.7958C48.4245 77.7958 48.8395 77.6697 49.1924 77.4335L48.0048 75.6377ZM25.4506 29.5252V27.3625C25.165 27.3638 24.8824 27.4216 24.6192 27.5327C24.356 27.6437 24.1175 27.8058 23.9173 28.0096C23.7171 28.2134 23.5593 28.4548 23.4529 28.7199C23.3465 28.985 23.2937 29.2686 23.2976 29.5542L25.4506 29.5252ZM46.6917 24.5915C56.4626 32.1611 67.6528 31.6783 70.5879 31.6783V27.3625C67.5466 27.3625 57.8047 27.7487 49.3468 21.1833L46.6917 24.5915ZM68.4348 29.4866C68.2707 39.4892 67.8459 46.5471 67.0349 51.7704C66.2238 56.9938 65.1039 60.0448 63.6266 62.2268C62.1494 64.4089 60.257 65.8282 57.486 67.4792C54.715 69.1302 51.1716 70.9646 46.8076 73.8515L49.2406 77.4335C53.373 74.6818 56.8102 72.9246 59.7357 71.1771C62.6835 69.5717 65.2416 67.3367 67.228 64.6309C69.159 61.7344 70.4817 57.8724 71.3314 52.427C72.181 46.9815 72.6155 39.6534 72.7796 29.5542L68.4348 29.4866ZM49.2406 73.8515C44.9055 70.955 41.3718 69.1592 38.6201 67.4888C35.8684 65.8185 33.976 64.4861 32.4892 62.2268C31.0023 59.9676 29.7954 56.9648 28.9651 51.7704C28.1347 46.576 27.7678 39.4892 27.6037 29.4866L23.2976 29.5542C23.4617 39.6534 23.9058 47.0009 24.7458 52.427C25.5858 57.8531 26.8699 61.7151 28.8395 64.6309C30.8164 67.3382 33.3686 69.5739 36.3125 71.1771C39.2091 72.9246 42.6752 74.6818 46.8076 77.4335L49.2406 73.8515ZM25.4506 31.6783C28.3471 31.6783 39.547 32.1611 49.3179 24.5915L46.682 21.1833C38.2049 27.7487 28.463 27.3625 25.441 27.3625L25.4506 31.6783Z", fill: "white" })),
        React__default['default'].createElement("defs", null,
            React__default['default'].createElement("clipPath", { id: "clip0" },
                React__default['default'].createElement("rect", { width: "96", height: "96", fill: "white" })))));
};

var Icon$1i = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React__default['default'].createElement("path", { d: "M96 48C96 21.4903 74.5097 0 48 0C21.4903 0 0 21.4903 0 48C0 74.5097 21.4903 96 48 96C74.5097 96 96 74.5097 96 48Z", fill: "#3389FB" }),
        React__default['default'].createElement("path", { d: "M29.6927 35.4245C39.8036 25.5252 56.1965 25.5252 66.3074 35.4245L67.5242 36.6159C68.0298 37.1109 68.0298 37.9134 67.5242 38.4084L63.3616 42.4839C63.1088 42.7314 62.699 42.7314 62.4462 42.4839L60.7717 40.8444C53.7181 33.9384 42.282 33.9384 35.2284 40.8444L33.4351 42.6002C33.1823 42.8477 32.7725 42.8477 32.5197 42.6002L28.3571 38.5247C27.8515 38.0297 27.8515 37.2272 28.3571 36.7322L29.6927 35.4245ZM74.9161 43.8532L78.6208 47.4805C79.1264 47.9755 79.1264 48.778 78.6208 49.2729L61.9159 65.6288C61.4103 66.1237 60.5907 66.1237 60.0851 65.6288C60.0851 65.6288 60.0851 65.6288 60.0851 65.6288L48.229 54.0206C48.1026 53.8968 47.8977 53.8968 47.7713 54.0206C47.7713 54.0206 47.7713 54.0206 47.7713 54.0206L35.9153 65.6288C35.4098 66.1237 34.5902 66.1237 34.0846 65.6288C34.0846 65.6288 34.0846 65.6288 34.0846 65.6288L17.3792 49.2727C16.8736 48.7778 16.8736 47.9753 17.3792 47.4803L21.0839 43.853C21.5895 43.3581 22.4091 43.3581 22.9146 43.853L34.771 55.4614C34.8974 55.5851 35.1023 55.5851 35.2287 55.4614C35.2287 55.4614 35.2287 55.4614 35.2287 55.4614L47.0844 43.853C47.59 43.358 48.4096 43.358 48.9152 43.853C48.9152 43.853 48.9152 43.853 48.9152 43.853L60.7715 55.4614C60.8979 55.5851 61.1028 55.5851 61.2292 55.4614L73.0854 43.8532C73.5909 43.3583 74.4105 43.3583 74.9161 43.8532Z", fill: "white" })));
};

var Icon$1j = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 32 32" }, props),
        React__default['default'].createElement("path", { d: "M24 0H8C3.58172 0 0 3.58172 0 8V24C0 28.4183 3.58172 32 8 32H24C28.4183 32 32 28.4183 32 24V8C32 3.58172 28.4183 0 24 0Z", fill: "#1E2026" }),
        React__default['default'].createElement("path", { d: "M16.2857 4L9.97035 7.6761L12.2922 9.03415L16.2857 6.7161L20.2792 9.03415L22.6011 7.6761L16.2857 4Z", fill: "#F0B90B" }),
        React__default['default'].createElement("path", { d: "M20.2792 10.9541L22.6011 12.3122V15.0283L18.6075 17.3463V21.9824L16.2857 23.3405L13.9639 21.9824V17.3463L9.97035 15.0283V12.3122L12.2922 10.9541L16.2857 13.2722L20.2792 10.9541Z", fill: "#F0B90B" }),
        React__default['default'].createElement("path", { d: "M22.6011 16.9483V19.6644L20.2792 21.0224V18.3063L22.6011 16.9483Z", fill: "#F0B90B" }),
        React__default['default'].createElement("path", { d: "M20.2561 22.9424L24.2496 20.6244V15.9883L26.5714 14.6302V21.9824L20.2561 25.6585V22.9424Z", fill: "#F0B90B" }),
        React__default['default'].createElement("path", { d: "M24.2496 11.3522L21.9278 9.99414L24.2496 8.63609L26.5714 9.99414V12.7102L24.2496 14.0683V11.3522Z", fill: "#F0B90B" }),
        React__default['default'].createElement("path", { d: "M13.9639 26.642V23.9259L16.2857 25.2839L18.6075 23.9259V26.642L16.2857 28L13.9639 26.642Z", fill: "#F0B90B" }),
        React__default['default'].createElement("path", { d: "M12.2922 21.0224L9.97035 19.6644V16.9483L12.2922 18.3063V21.0224Z", fill: "#F0B90B" }),
        React__default['default'].createElement("path", { d: "M16.2857 11.3522L13.9639 9.99414L16.2857 8.63609L18.6075 9.99414L16.2857 11.3522Z", fill: "#F0B90B" }),
        React__default['default'].createElement("path", { d: "M10.6437 9.99414L8.32183 11.3522V14.0683L6 12.7102V9.99414L8.32183 8.63609L10.6437 9.99414Z", fill: "#F0B90B" }),
        React__default['default'].createElement("path", { d: "M6 14.6302L8.32183 15.9883V20.6244L12.3154 22.9424V25.6585L6 21.9824V14.6302Z", fill: "#F0B90B" })));
};

var connectors = [
    {
        title: "Metamask",
        icon: Icon$1e,
        connectorId: "injected",
    },
    {
        title: "TrustWallet",
        icon: Icon$1h,
        connectorId: "injected",
    },
    {
        title: "MathWallet",
        icon: Icon$1f,
        connectorId: "injected",
    },
    {
        title: "TokenPocket",
        icon: Icon$1g,
        connectorId: "injected",
    },
    {
        title: "WalletConnect",
        icon: Icon$1i,
        connectorId: "walletconnect",
    },
    {
        title: "Binance Chain Wallet",
        icon: Icon$1j,
        connectorId: "bsc",
    },
];
var localStorageKey = "accountStatus";

var WalletCard = function (_a) {
    var login = _a.login, walletConfig = _a.walletConfig, onDismiss = _a.onDismiss, mb = _a.mb;
    var title = walletConfig.title, Icon = walletConfig.icon;
    return (React__default['default'].createElement(Button, { fullWidth: true, variant: "tertiary", onClick: function () {
            login(walletConfig.connectorId);
            window.localStorage.setItem(localStorageKey, "1");
            onDismiss();
        }, style: { justifyContent: "space-between" }, mb: mb, id: "wallet-connect-" + title.toLocaleLowerCase() },
        React__default['default'].createElement(Text, { bold: true, color: "textSubtle", mr: "16px" }, title),
        React__default['default'].createElement(Icon, { width: "32px" })));
};

styled__default['default'](Link)(templateObject_1$E || (templateObject_1$E = __makeTemplateObject(["\n  display: flex;\n  align-self: center;\n  align-items: center;\n  margin-top: 24px;\n"], ["\n  display: flex;\n  align-self: center;\n  align-items: center;\n  margin-top: 24px;\n"])));
var ConnectModal = function (_a) {
    var login = _a.login, _b = _a.onDismiss, onDismiss = _b === void 0 ? function () { return null; } : _b;
    return (React__default['default'].createElement(Modal, { title: "Connect to a wallet", onDismiss: onDismiss }, connectors.map(function (entry, index) { return (React__default['default'].createElement(WalletCard, { key: entry.title, login: login, walletConfig: entry, onDismiss: onDismiss, mb: index < connectors.length - 1 ? "8px" : "0" })); })));
};
var templateObject_1$E;

var StyleButton = styled__default['default'](Text).attrs({ role: "button" })(templateObject_1$F || (templateObject_1$F = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  color: ", ";\n"], ["\n  position: relative;\n  display: flex;\n  align-items: center;\n  color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.primary;
});
var Tooltip = styled__default['default'].div(templateObject_2$d || (templateObject_2$d = __makeTemplateObject(["\n  display: ", ";\n  position: absolute;\n  bottom: -22px;\n  right: 0;\n  left: 0;\n  text-align: center;\n  background-color: ", ";\n  color: ", ";\n  border-radius: 16px;\n  opacity: 0.7;\n"], ["\n  display: ", ";\n  position: absolute;\n  bottom: -22px;\n  right: 0;\n  left: 0;\n  text-align: center;\n  background-color: ", ";\n  color: ", ";\n  border-radius: 16px;\n  opacity: 0.7;\n"])), function (_a) {
    var isTooltipDisplayed = _a.isTooltipDisplayed;
    return (isTooltipDisplayed ? "block" : "none");
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.contrast;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.invertedContrast;
});
var CopyToClipboard = function (_a) {
    var toCopy = _a.toCopy, children = _a.children, props = __rest(_a, ["toCopy", "children"]);
    var _b = React.useState(false), isTooltipDisplayed = _b[0], setIsTooltipDisplayed = _b[1];
    return (React__default['default'].createElement(StyleButton, __assign({ small: true, bold: true, onClick: function () {
            if (navigator.clipboard) {
                navigator.clipboard.writeText(toCopy);
                setIsTooltipDisplayed(true);
                setTimeout(function () {
                    setIsTooltipDisplayed(false);
                }, 1000);
            }
        } }, props),
        children,
        React__default['default'].createElement(Icon$n, { width: "20px", color: "primary", ml: "4px" }),
        React__default['default'].createElement(Tooltip, { isTooltipDisplayed: isTooltipDisplayed }, "Copied")));
};
var templateObject_1$F, templateObject_2$d;

var AccountModal = function (_a) {
    var account = _a.account, logout = _a.logout, _b = _a.onDismiss, onDismiss = _b === void 0 ? function () { return null; } : _b;
    return (React__default['default'].createElement(Modal, { title: "Your wallet", onDismiss: onDismiss },
        React__default['default'].createElement(Text, { fontSize: "20px", bold: true, style: { whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", marginBottom: "8px" } }, account),
        React__default['default'].createElement(Flex, { mb: "32px" },
            React__default['default'].createElement(LinkExternal, { small: true, href: "https://bscscan.com/address/" + account, mr: "16px" }, "View on BscScan"),
            React__default['default'].createElement(CopyToClipboard, { toCopy: account }, "Copy Address")),
        React__default['default'].createElement(Flex, { justifyContent: "center" },
            React__default['default'].createElement(Button, { size: "sm", variant: "secondary", onClick: function () {
                    logout();
                    window.localStorage.removeItem(localStorageKey);
                    onDismiss();
                    window.location.reload();
                } }, "Logout"))));
};

var useWalletModal = function (login, logout, account) {
    var onPresentConnectModal = useModal(React__default['default'].createElement(ConnectModal, { login: login }))[0];
    var onPresentAccountModal = useModal(React__default['default'].createElement(AccountModal, { account: account || "", logout: logout }))[0];
    return { onPresentConnectModal: onPresentConnectModal, onPresentAccountModal: onPresentAccountModal };
};

var T = styled__default['default'].p(templateObject_1$G || (templateObject_1$G = __makeTemplateObject(["\n  color: #FFFFFF;\n  display: none;\n  ", " {\n    display: block;\n  }\n"], ["\n  color: #FFFFFF;\n  display: none;\n  ", " {\n    display: block;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
});
var UserBlock = function (_a) {
    var account = _a.account, login = _a.login, logout = _a.logout;
    var _b = useWalletModal(login, logout, account), onPresentConnectModal = _b.onPresentConnectModal, onPresentAccountModal = _b.onPresentAccountModal;
    var accountEllipsis = account ? account.substring(0, 4) + "..." + account.substring(account.length - 4) : null;
    return (React__default['default'].createElement("div", null, account ? (React__default['default'].createElement(Button
    // size="sm"
    , { 
        // size="sm"
        variant: "tertiary", onClick: function () {
            onPresentAccountModal();
        } }, accountEllipsis)) : (React__default['default'].createElement(Button
    // size="sm"
    , { 
        // size="sm"
        onClick: function () {
            onPresentConnectModal();
        } },
        React__default['default'].createElement("img", { src: '/wallet.png', alt: "", style: { height: "2rem", width: "2rem", margin: " 0 1rem  0 0" } }),
        React__default['default'].createElement(T, null, "Connect Wallet")))));
};
var templateObject_1$G;

var Icon$1k = function (props) {
    var theme = styled.useTheme();
    var primaryColor = theme.isDark ? "#3C3742" : "#e9eaeb";
    var secondaryColor = theme.isDark ? "#666171" : "#bdc2c4";
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 32 32" }, props),
        React__default['default'].createElement("path", { d: "M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16z", fill: primaryColor }),
        React__default['default'].createElement("mask", { id: "A", "mask-type": "alpha", maskUnits: "userSpaceOnUse", x: "0", y: "0", width: "32", height: "32" },
            React__default['default'].createElement("path", { d: "M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16z", fill: "#c4c4c4" })),
        React__default['default'].createElement("g", { mask: "url(#A)" },
            React__default['default'].createElement("path", { d: "M25.128 16.436c0 3.115-4.133 5.641-9.231 5.641s-9.231-2.526-9.231-5.641V15h18.461v1.436zm2.205 13.806c0-3.815-5.074-6.908-11.333-6.908S4.667 26.426 4.667 30.242V32h22.667v-1.759z", fill: secondaryColor }),
            React__default['default'].createElement("path", { fillRule: "evenodd", d: "M10.234 5.601C9.942 4.264 10.96 3 12.328 3c1.184 0 2.143.959 2.143 2.143v3.873l1.427-.067c.589 0 1.166.034 1.724.098V5.143c0-1.184.959-2.143 2.143-2.143 1.368 0 2.386 1.264 2.093 2.601l-.931 4.258c2.529 1.006 4.201 2.749 4.201 4.731 0 3.115-4.133 5.641-9.231 5.641s-9.231-2.526-9.231-5.641c0-2.053 1.794-3.849 4.476-4.836l-.908-4.153z", fill: secondaryColor }),
            React__default['default'].createElement("ellipse", { cx: "12.308", cy: "14.846", rx: "1.026", ry: "1.538", fill: primaryColor }),
            React__default['default'].createElement("ellipse", { cx: "19.385", cy: "14.846", rx: "1.026", ry: "1.538", fill: primaryColor }))));
};

var StyledAvatar = styled__default['default'].div(templateObject_1$H || (templateObject_1$H = __makeTemplateObject(["\n  margin-left: 8px;\n  position: relative;\n\n  img {\n    border-radius: 50%;\n  }\n"], ["\n  margin-left: 8px;\n  position: relative;\n\n  img {\n    border-radius: 50%;\n  }\n"])));
var Pip = styled__default['default'].div(templateObject_2$e || (templateObject_2$e = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: 50%;\n  pointer-events: none;\n  height: 8px;\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 8px;\n"], ["\n  background-color: ", ";\n  border-radius: 50%;\n  pointer-events: none;\n  height: 8px;\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 8px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.failure;
});
var Avatar = function (_a) {
    var profile = _a.profile;
    var _b = profile.username, username = _b === void 0 ? "Bunny" : _b, image = profile.image, profileLink = profile.profileLink, noProfileLink = profile.noProfileLink, _c = profile.showPip, showPip = _c === void 0 ? false : _c;
    var link = profile.username ? profileLink : noProfileLink;
    var isExternal = link.startsWith("http");
    var ariaLabel = "Link to profile";
    var icon = image ? (React__default['default'].createElement("img", { src: image, alt: "profile avatar", height: "32px", width: "32px" })) : (React__default['default'].createElement(Icon$1k, { width: "32px", height: "32px" }));
    if (isExternal) {
        return (React__default['default'].createElement(StyledAvatar, { title: username },
            React__default['default'].createElement("a", { href: link, "aria-label": ariaLabel }, icon),
            showPip && React__default['default'].createElement(Pip, null)));
    }
    return (React__default['default'].createElement(StyledAvatar, { title: username },
        React__default['default'].createElement(reactRouterDom.Link, { to: link, "aria-label": ariaLabel }, icon),
        showPip && React__default['default'].createElement(Pip, null)));
};
var templateObject_1$H, templateObject_2$e;

var Wrapper$1 = styled__default['default'].div(templateObject_1$I || (templateObject_1$I = __makeTemplateObject(["\n  position: relative;\n  width: 100%;\n"], ["\n  position: relative;\n  width: 100%;\n"])));
var StyledNav = styled__default['default'].nav(templateObject_2$f || (templateObject_2$f = __makeTemplateObject(["\n  position: fixed;\n  top: ", ";\n  left: 0;\n  transition: top 0.2s;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-left: 8px;\n  padding-right: 16px;\n  width: 100%;\n  height: ", "px;\n  background: ", ";\n  // border-bottom: solid 2px rgba(133, 133, 133, 0.1);\n  z-index: 20;\n  transform: translate3d(0, 0, 0);\n"], ["\n  position: fixed;\n  top: ", ";\n  left: 0;\n  transition: top 0.2s;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-left: 8px;\n  padding-right: 16px;\n  width: 100%;\n  height: ", "px;\n  background: ", ";\n  // border-bottom: solid 2px rgba(133, 133, 133, 0.1);\n  z-index: 20;\n  transform: translate3d(0, 0, 0);\n"])), function (_a) {
    var showMenu = _a.showMenu;
    return (showMenu ? 0 : "-" + MENU_HEIGHT + "px");
}, MENU_HEIGHT, function (_a) {
    var theme = _a.theme;
    return theme.colors.navBar;
});
var BodyWrapper = styled__default['default'].div(templateObject_3$8 || (templateObject_3$8 = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n"], ["\n  position: relative;\n  display: flex;\n"])));
var Inner = styled__default['default'].div(templateObject_4$3 || (templateObject_4$3 = __makeTemplateObject(["\n  flex-grow: 1;\n  margin-top: ", ";\n  transition: margin-top 0.2s;\n  transform: translate3d(0, 0, 0);\n  // ", " {\n  //   margin-left: ", ";\n  // }\n"], ["\n  flex-grow: 1;\n  margin-top: ", ";\n  transition: margin-top 0.2s;\n  transform: translate3d(0, 0, 0);\n  // ", " {\n  //   margin-left: ", ";\n  // }\n"])), function (_a) {
    var showMenu = _a.showMenu;
    return (showMenu ? MENU_HEIGHT + "px" : 0);
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
}, function (_a) {
    var isPushed = _a.isPushed;
    return (isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED) + "px";
});
var MobileOnlyOverlay = styled__default['default'](Overlay)(templateObject_5$1 || (templateObject_5$1 = __makeTemplateObject(["\n  position: fixed;\n  height: 100%;\n\n  // ", " {\n  //   display: none;\n  // }\n"], ["\n  position: fixed;\n  height: 100%;\n\n  // ", " {\n  //   display: none;\n  // }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
});
var Search = styled__default['default'].input(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n\n  background-color: #001930;\n  border: none;\n  height: 2.5rem;\n  display: block;\n  border-radius: 0.5rem;\n  \n  color: #FFFFFF;\n  font-size: 1.2rem;\n\n  ::placeholder {\n    padding: 0 0 0 0.5rem;\n    color: #E5E5E5;\n    font-size: 1.1rem;\n  }\n\n  @media only screen and (max-width: 768px) {\n    display: none;\n  }\n \n"], ["\n\n  background-color: #001930;\n  border: none;\n  height: 2.5rem;\n  display: block;\n  border-radius: 0.5rem;\n  \n  color: #FFFFFF;\n  font-size: 1.2rem;\n\n  ::placeholder {\n    padding: 0 0 0 0.5rem;\n    color: #E5E5E5;\n    font-size: 1.1rem;\n  }\n\n  @media only screen and (max-width: 768px) {\n    display: none;\n  }\n \n"])));
var MSearch = styled__default['default'].input(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  display: none;\n  @media only screen and (max-width: 768px) {\n    display: block;\n    background-color: #00151E;\n    border: none;\n    height: 2.5rem;\n    width: 3rem;\n    border-radius: 0.5rem;\n    \n    color: #FFFFFF;\n    font-size: 1.2rem;\n  }\n"], ["\n  display: none;\n  @media only screen and (max-width: 768px) {\n    display: block;\n    background-color: #00151E;\n    border: none;\n    height: 2.5rem;\n    width: 3rem;\n    border-radius: 0.5rem;\n    \n    color: #FFFFFF;\n    font-size: 1.2rem;\n  }\n"])));
var SearchContainer = styled__default['default'].div(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  position: relative;\n  right: 25%;\n  @media only screen and (max-width: 1200px) {\n    right: 18%;\n  }\n  @media only screen and (max-width: 1200px) {\n    right: 13%;\n  }\n  @media only screen and (max-width: 768px) {\n    right: 6%;\n  }\n  \n"], ["\n  position: relative;\n  right: 25%;\n  @media only screen and (max-width: 1200px) {\n    right: 18%;\n  }\n  @media only screen and (max-width: 1200px) {\n    right: 13%;\n  }\n  @media only screen and (max-width: 768px) {\n    right: 6%;\n  }\n  \n"])));
var SearchButton = styled__default['default'].div(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  position: absolute;\n  right: 1rem;\n  top: 0.5rem;\n  cursor: pointer;\n"], ["\n  position: absolute;\n  right: 1rem;\n  top: 0.5rem;\n  cursor: pointer;\n"])));
styled__default['default'](Icon$E)(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n  position: absolute;\n  right: 0.2rem;\n"], ["\n  position: absolute;\n  right: 0.2rem;\n"])));
var Menu = function (_a) {
    var _b;
    var account = _a.account, login = _a.login, logout = _a.logout, isDark = _a.isDark, toggleTheme = _a.toggleTheme, langs = _a.langs, setLang = _a.setLang, currentLang = _a.currentLang, cakePriceUsd = _a.cakePriceUsd, links = _a.links, priceLink = _a.priceLink, profile = _a.profile, children = _a.children;
    var isXl = useMatchBreakpoints().isXl;
    var isMobile = isXl === false;
    var _c = React.useState(!isMobile), isPushed = _c[0], setIsPushed = _c[1];
    var _d = React.useState(true), showMenu = _d[0], setShowMenu = _d[1];
    var refPrevOffset = React.useRef(window.pageYOffset);
    React.useEffect(function () {
        var handleScroll = function () {
            var currentOffset = window.pageYOffset;
            var isBottomOfPage = window.document.body.clientHeight === currentOffset + window.innerHeight;
            var isTopOfPage = currentOffset === 0;
            // Always show the menu when user reach the top
            if (isTopOfPage) {
                setShowMenu(true);
            }
            // Avoid triggering anything at the bottom because of layout shift
            else if (!isBottomOfPage) {
                if (currentOffset < refPrevOffset.current) {
                    // Has scroll up
                    setShowMenu(true);
                }
                else {
                    // Has scroll down
                    setShowMenu(false);
                }
            }
            refPrevOffset.current = currentOffset;
        };
        var throttledHandleScroll = throttle__default['default'](handleScroll, 200);
        window.addEventListener("scroll", throttledHandleScroll);
        return function () {
            window.removeEventListener("scroll", throttledHandleScroll);
        };
    }, []);
    // Find the home link if provided
    var homeLink = links.find(function (link) { return link.label === "Home"; });
    return (React__default['default'].createElement(Wrapper$1, null,
        React__default['default'].createElement(StyledNav, { showMenu: showMenu },
            React__default['default'].createElement(Logo$2, { isPushed: isPushed, togglePush: function () { return setIsPushed(function (prevState) { return !prevState; }); }, isDark: isDark, href: (_b = homeLink === null || homeLink === void 0 ? void 0 : homeLink.href) !== null && _b !== void 0 ? _b : "/" }),
            React__default['default'].createElement(SearchContainer, null,
                React__default['default'].createElement(Search, { type: "text", placeholder: "Search" }),
                React__default['default'].createElement(MSearch, { type: "text" }),
                React__default['default'].createElement(SearchButton, null,
                    React__default['default'].createElement("svg", { width: "20", height: "20", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                        React__default['default'].createElement("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M9.61154 0C4.30323 0 0 4.20819 0 9.39926C0 14.5903 4.30323 18.7985 9.61154 18.7985C11.8819 18.7985 13.9684 18.0287 15.613 16.7415L18.7371 19.7886L18.8202 19.8586C19.1102 20.0685 19.5214 20.0446 19.7839 19.7873C20.0726 19.5043 20.072 19.0459 19.7825 18.7636L16.6952 15.7523C18.2649 14.0794 19.2231 11.8487 19.2231 9.39926C19.2231 4.20819 14.9198 0 9.61154 0ZM9.61154 1.44774C14.1022 1.44774 17.7426 5.00776 17.7426 9.39926C17.7426 13.7908 14.1022 17.3508 9.61154 17.3508C5.12086 17.3508 1.48044 13.7908 1.48044 9.39926C1.48044 5.00776 5.12086 1.44774 9.61154 1.44774Z", fill: "white" })))),
            React__default['default'].createElement(Flex, null,
                React__default['default'].createElement(UserBlock, { account: account, login: login, logout: logout }),
                profile && React__default['default'].createElement(Avatar, { profile: profile }))),
        React__default['default'].createElement(BodyWrapper, null,
            React__default['default'].createElement(Panel, { isPushed: isPushed, isMobile: isMobile, showMenu: showMenu, isDark: isDark, toggleTheme: toggleTheme, langs: langs, setLang: setLang, currentLang: currentLang, cakePriceUsd: cakePriceUsd, pushNav: setIsPushed, links: links, priceLink: priceLink }),
            React__default['default'].createElement(Inner, { isPushed: isPushed, showMenu: showMenu }, children),
            React__default['default'].createElement(MobileOnlyOverlay, { show: isPushed, onClick: function () { return setIsPushed(false); }, role: "presentation" }))));
};
var templateObject_1$I, templateObject_2$f, templateObject_3$8, templateObject_4$3, templateObject_5$1, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10;

var ToastAction = function (_a) {
    var action = _a.action;
    if (action.url.startsWith("http")) {
        return (React__default['default'].createElement(Button, __assign({ as: "a", size: "sm", href: action.url }, getExternalLinkProps()), action.text));
    }
    return (React__default['default'].createElement(Button, { as: reactRouterDom.Link, size: "sm", to: action.url }, action.text));
};

var types = {
    SUCCESS: "success",
    DANGER: "danger",
    WARNING: "warning",
    INFO: "info",
};

var _a$1;
var alertTypeMap = (_a$1 = {},
    _a$1[types.INFO] = variants$1.INFO,
    _a$1[types.SUCCESS] = variants$1.SUCCESS,
    _a$1[types.DANGER] = variants$1.DANGER,
    _a$1[types.WARNING] = variants$1.WARNING,
    _a$1);
var StyledToast = styled__default['default'].div(templateObject_1$J || (templateObject_1$J = __makeTemplateObject(["\n  right: 16px;\n  position: fixed;\n  max-width: calc(100% - 32px);\n  transition: all 250ms ease-in;\n  width: 100%;\n\n  ", " {\n    max-width: 400px;\n  }\n"], ["\n  right: 16px;\n  position: fixed;\n  max-width: calc(100% - 32px);\n  transition: all 250ms ease-in;\n  width: 100%;\n\n  ", " {\n    max-width: 400px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var Toast = function (_a) {
    var toast = _a.toast, onRemove = _a.onRemove, style = _a.style, ttl = _a.ttl, props = __rest(_a, ["toast", "onRemove", "style", "ttl"]);
    var timer = React.useRef();
    var ref = React.useRef(null);
    var removeHandler = React.useRef(onRemove);
    var id = toast.id, title = toast.title, description = toast.description, type = toast.type, action = toast.action;
    var handleRemove = React.useCallback(function () { return removeHandler.current(id); }, [id, removeHandler]);
    var handleMouseEnter = function () {
        clearTimeout(timer.current);
    };
    var handleMouseLeave = function () {
        if (timer.current) {
            clearTimeout(timer.current);
        }
        timer.current = window.setTimeout(function () {
            handleRemove();
        }, ttl);
    };
    React.useEffect(function () {
        if (timer.current) {
            clearTimeout(timer.current);
        }
        timer.current = window.setTimeout(function () {
            handleRemove();
        }, ttl);
        return function () {
            clearTimeout(timer.current);
        };
    }, [timer, ttl, handleRemove]);
    return (React__default['default'].createElement(reactTransitionGroup.CSSTransition, __assign({ nodeRef: ref, timeout: 250, style: style }, props),
        React__default['default'].createElement(StyledToast, { ref: ref, onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave },
            React__default['default'].createElement(Alert, { title: title, variant: alertTypeMap[type], onClick: handleRemove }, action ? (React__default['default'].createElement(React__default['default'].Fragment, null,
                React__default['default'].createElement(Text, { as: "p", mb: "8px" }, description),
                React__default['default'].createElement(ToastAction, { action: action }))) : (description)))));
};
var templateObject_1$J;

var ZINDEX = 1000;
var TOP_POSITION = 80; // Initial position from the top
var StyledToastContainer = styled__default['default'].div(templateObject_1$K || (templateObject_1$K = __makeTemplateObject(["\n  .enter,\n  .appear {\n    opacity: 0.01;\n  }\n\n  .enter.enter-active,\n  .appear.appear-active {\n    opacity: 1;\n    transition: opacity 250ms ease-in;\n  }\n\n  .exit {\n    opacity: 1;\n  }\n\n  .exit.exit-active {\n    opacity: 0.01;\n    transition: opacity 250ms ease-out;\n  }\n"], ["\n  .enter,\n  .appear {\n    opacity: 0.01;\n  }\n\n  .enter.enter-active,\n  .appear.appear-active {\n    opacity: 1;\n    transition: opacity 250ms ease-in;\n  }\n\n  .exit {\n    opacity: 1;\n  }\n\n  .exit.exit-active {\n    opacity: 0.01;\n    transition: opacity 250ms ease-out;\n  }\n"])));
var ToastContainer = function (_a) {
    var toasts = _a.toasts, onRemove = _a.onRemove, _b = _a.ttl, ttl = _b === void 0 ? 6000 : _b, _c = _a.stackSpacing, stackSpacing = _c === void 0 ? 24 : _c;
    return (React__default['default'].createElement(StyledToastContainer, null,
        React__default['default'].createElement(reactTransitionGroup.TransitionGroup, null, toasts.map(function (toast, index) {
            var zIndex = (ZINDEX - index).toString();
            var top = TOP_POSITION + index * stackSpacing;
            return (React__default['default'].createElement(Toast, { key: toast.id, toast: toast, onRemove: onRemove, ttl: ttl, style: { top: top + "px", zIndex: zIndex } }));
        }))));
};
var templateObject_1$K;

var ResetCSS = styled.createGlobalStyle(templateObject_1$L || (templateObject_1$L = __makeTemplateObject(["\n  /* prettier-ignore */\n  html, body, div, span, applet, object, iframe,\n  h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n  a, abbr, acronym, address, big, cite, code,\n  del, dfn, em, img, ins, kbd, q, s, samp,\n  small, strike, strong, sub, sup, tt, var,\n  b, u, i, center,\n  dl, dt, dd, ol, ul, li,\n  fieldset, form, label, legend,\n  table, caption, tbody, tfoot, thead, tr, th, td,\n  article, aside, canvas, details, embed, \n  figure, figcaption, footer, header, hgroup, \n  menu, nav, output, ruby, section, summary,\n  time, mark, audio, video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    vertical-align: baseline;\n  }\n  /* HTML5 display-role reset for older browsers */\n  /* prettier-ignore */\n  article, aside, details, figcaption, figure, \n  footer, header, hgroup, menu, nav, section {\n    display: block;\n  }\n  body {\n    line-height: 1;\n    font-size: 16px;\n  }\n  ol,\n  ul {\n    list-style: disc;\n    list-style-position: inside;\n  }\n  blockquote,\n  q {\n    quotes: none;\n  }\n  blockquote:before,\n  blockquote:after,\n  q:before,\n  q:after {\n    content: \"\";\n    content: none;\n  }\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n  a {\n    color: inherit;\n    text-decoration: none;\n  }\n  [role=\"button\"] {\n    cursor: pointer;\n  }\n  *,\n  *::before,\n  *::after {\n    box-sizing: border-box;\n  }\n  * {\n    // font-family: 'Kanit', sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n  /* Scrollbar */\n  ::-webkit-scrollbar {\n    width: 8px;\n  }\n  ::-webkit-scrollbar-thumb {\n    background: ", "; \n    border-radius: 8px;\n  }\n  ::-webkit-scrollbar-track {\n    box-shadow: inset 0 0 5px ", "; \n    border-radius: 10px;\n  }\n"], ["\n  /* prettier-ignore */\n  html, body, div, span, applet, object, iframe,\n  h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n  a, abbr, acronym, address, big, cite, code,\n  del, dfn, em, img, ins, kbd, q, s, samp,\n  small, strike, strong, sub, sup, tt, var,\n  b, u, i, center,\n  dl, dt, dd, ol, ul, li,\n  fieldset, form, label, legend,\n  table, caption, tbody, tfoot, thead, tr, th, td,\n  article, aside, canvas, details, embed, \n  figure, figcaption, footer, header, hgroup, \n  menu, nav, output, ruby, section, summary,\n  time, mark, audio, video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    vertical-align: baseline;\n  }\n  /* HTML5 display-role reset for older browsers */\n  /* prettier-ignore */\n  article, aside, details, figcaption, figure, \n  footer, header, hgroup, menu, nav, section {\n    display: block;\n  }\n  body {\n    line-height: 1;\n    font-size: 16px;\n  }\n  ol,\n  ul {\n    list-style: disc;\n    list-style-position: inside;\n  }\n  blockquote,\n  q {\n    quotes: none;\n  }\n  blockquote:before,\n  blockquote:after,\n  q:before,\n  q:after {\n    content: \"\";\n    content: none;\n  }\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n  a {\n    color: inherit;\n    text-decoration: none;\n  }\n  [role=\"button\"] {\n    cursor: pointer;\n  }\n  *,\n  *::before,\n  *::after {\n    box-sizing: border-box;\n  }\n  * {\n    // font-family: 'Kanit', sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n  /* Scrollbar */\n  ::-webkit-scrollbar {\n    width: 8px;\n  }\n  ::-webkit-scrollbar-thumb {\n    background: ", "; \n    border-radius: 8px;\n  }\n  ::-webkit-scrollbar-track {\n    box-shadow: inset 0 0 5px ", "; \n    border-radius: 10px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.textSubtle;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
});
var templateObject_1$L;

var baseColors = {
    failure: "#ED4B9E",
    primary: "#F3BB2F",
    primaryBright: "#C4B454",
    primaryDark: "#aa8929",
    secondary: "#FFBF00",
    success: "#31D0AA",
    warning: "#FFB237",
};
var brandColors = {
    binance: "#F0B90B",
};
var lightColors = __assign(__assign(__assign({}, baseColors), brandColors), { title: "#000000", navBar: "#00151E", sideBar: "#001930", background: "#00151E", white: "#FFFFFF", backgroundDisabled: "#E9EAEB", contrast: "#191326", invertedContrast: "#000000", input: "linear-gradient(to right, #dce35b, #45b649)", tertiary: "#EFF4F5", text: "#FFFFFF", textDisabled: "#BDC2C4", textSubtle: "#808191", borderColor: "#E9EAEB", card: "#001930", gradients: {
        bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
    } });
var darkColors = __assign(__assign(__assign({}, baseColors), brandColors), { title: "#FFFFFF", navBar: "#27262c", sideBar: "#27262c", secondary: "#9A6AFF", background: "#343135", white: "#FFFFFF", backgroundDisabled: "#3c3742", contrast: "#FFFFFF", invertedContrast: "#191326", input: "#483f5a", primaryDark: "#0098A1", tertiary: "#353547", text: "#EAE2FC", textDisabled: "#666171", textSubtle: "#c9c4d4", borderColor: "#524B63", card: "#27262c", gradients: {
        bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
    } });

var light = {
    background: lightColors.card,
};
var dark = {
    background: darkColors.card,
};

var _a$2, _b;
var PRIMARY = variants.PRIMARY, SECONDARY = variants.SECONDARY, TERTIARY = variants.TERTIARY, TEXT = variants.TEXT, DANGER = variants.DANGER, SUBTLE = variants.SUBTLE, SUCCESS = variants.SUCCESS;
var light$1 = (_a$2 = {},
    _a$2[PRIMARY] = {
        background: lightColors.primary,
        backgroundActive: lightColors.primaryDark,
        backgroundHover: lightColors.primaryBright,
        border: 0,
        borderColorHover: "currentColor",
        boxShadow: "inset 0px -1px 0px rgba(14, 14, 44, 0.4)",
        boxShadowActive: "inset 0px -1px 0px rgba(14, 14, 44, 0.4)",
        color: "#FFFFFF",
    },
    _a$2[SECONDARY] = {
        background: "transparent",
        backgroundActive: "transparent",
        backgroundHover: "transparent",
        border: "2px solid " + lightColors.primary,
        borderColorHover: lightColors.primaryBright,
        boxShadow: "none",
        boxShadowActive: "none",
        color: lightColors.secondary,
    },
    _a$2[TERTIARY] = {
        background: lightColors.tertiary,
        backgroundActive: lightColors.tertiary,
        backgroundHover: lightColors.tertiary,
        border: 0,
        borderColorHover: "currentColor",
        boxShadow: "none",
        boxShadowActive: "none",
        color: lightColors.secondary,
    },
    _a$2[TEXT] = {
        background: "transparent",
        backgroundActive: "transparent",
        backgroundHover: lightColors.tertiary,
        border: 0,
        borderColorHover: "currentColor",
        boxShadow: "none",
        boxShadowActive: "none",
        color: lightColors.secondary,
    },
    _a$2[DANGER] = {
        background: lightColors.failure,
        backgroundActive: "#D43285",
        backgroundHover: "#FF65B8",
        border: 0,
        borderColorHover: "currentColor",
        boxShadow: "none",
        boxShadowActive: "none",
        color: "#FFFFFF",
    },
    _a$2[SUBTLE] = {
        background: lightColors.textSubtle,
        backgroundActive: lightColors.textSubtle + "D9",
        backgroundHover: lightColors.textSubtle + "B3",
        border: 0,
        borderColorHover: "currentColor",
        boxShadow: "none",
        boxShadowActive: "none",
        color: "#FFFFFF",
    },
    _a$2[SUCCESS] = {
        background: lightColors.success,
        backgroundActive: lightColors.success + "D9",
        backgroundHover: lightColors.success + "B3",
        border: 0,
        borderColorHover: "currentColor",
        boxShadow: "none",
        boxShadowActive: "none",
        color: "#FFFFFF",
    },
    _a$2);
var dark$1 = (_b = {},
    _b[PRIMARY] = __assign({}, light$1.primary),
    _b[SECONDARY] = __assign({}, light$1.secondary),
    _b[TERTIARY] = __assign(__assign({}, light$1.tertiary), { background: darkColors.tertiary, backgroundActive: darkColors.tertiary, backgroundHover: darkColors.tertiary, color: darkColors.primary }),
    _b[TEXT] = __assign(__assign({}, light$1.text), { backgroundHover: darkColors.tertiary }),
    _b[DANGER] = __assign({}, light$1.danger),
    _b[SUBTLE] = __assign({}, light$1.subtle),
    _b[SUCCESS] = __assign({}, light$1.success),
    _b);

var light$2 = {
    background: lightColors.card,
    boxShadow: "0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05)",
    boxShadowActive: shadows.active,
    boxShadowSuccess: shadows.success,
    boxShadowWarning: shadows.warning,
    cardHeaderBackground: "linear-gradient(111.68deg, #F2ECF2 0%, #E8F2F6 100%)",
    dropShadow: "drop-shadow(0px 1px 4px rgba(25, 19, 38, 0.15))",
};
var dark$2 = {
    background: darkColors.card,
    boxShadow: "0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05)",
    boxShadowActive: shadows.active,
    boxShadowSuccess: shadows.success,
    boxShadowWarning: shadows.warning,
    cardHeaderBackground: "linear-gradient(166.77deg, #3B4155 0%, #3A3045 100%)",
    dropShadow: "drop-shadow(0px 1px 4px rgba(25, 19, 38, 0.15))",
};

var light$3 = {
    handleBackground: lightColors.card,
};
var dark$3 = {
    handleBackground: darkColors.card,
};

var light$4 = {
    handleBackground: lightColors.card,
};
var dark$4 = {
    handleBackground: darkColors.card,
};

var light$5 = {
    background: lightColors.card,
    hover: "#473015",
};
var dark$5 = {
    background: darkColors.card,
    hover: "#473d5d",
};

var light$6 = {
    background: lightColors.card,
};
var dark$6 = {
    background: darkColors.card,
};

var darkTheme = __assign(__assign({}, base), { isDark: true, alert: dark, button: dark$1, colors: darkColors, card: dark$2, toggle: dark$4, nav: dark$5, modal: dark$6, radio: dark$3 });

var lightTheme = __assign(__assign({}, base), { isDark: false, alert: light, button: light$1, colors: lightColors, card: light$2, toggle: light$4, nav: light$5, modal: light$6, radio: light$3 });

exports.AddIcon = Icon$4;
exports.Alert = Alert;
exports.ArrowBackIcon = Icon$5;
exports.ArrowDownIcon = Icon$6;
exports.ArrowDropDownIcon = Icon$7;
exports.ArrowDropUpIcon = Icon$8;
exports.ArrowForwardIcon = Icon$9;
exports.AutoRenewIcon = Icon$a;
exports.BackgroundImage = BackgroundImage;
exports.BaseLayout = GridLayout;
exports.BinanceIcon = Icon$b;
exports.BlockIcon = Icon$2;
exports.Breadcrumbs = Breadcrumbs;
exports.BunnyPlaceholderIcon = Icon$c;
exports.Button = Button;
exports.ButtonMenu = ButtonMenu;
exports.ButtonMenuItem = ButtonMenuItem;
exports.CalculateIcon = Icon$e;
exports.Card = Card;
exports.CardBody = CardBody;
exports.CardFooter = CardFooter;
exports.CardHeader = CardHeader;
exports.CardRibbon = CardRibbon;
exports.CardViewIcon = Icon$d;
exports.CardsLayout = GridLayout$1;
exports.Checkbox = Checkbox;
exports.CheckmarkCircleIcon = Icon;
exports.CheckmarkIcon = Icon$f;
exports.ChevronDownIcon = Icon$g;
exports.ChevronLeftIcon = Icon$h;
exports.ChevronRightIcon = Icon$i;
exports.ChevronUpIcon = Icon$j;
exports.CloseIcon = Icon$k;
exports.CogIcon = Icon$l;
exports.CommunityIcon = Icon$m;
exports.CopyIcon = Icon$n;
exports.CopyToClipboard = CopyToClipboard;
exports.Dropdown = Dropdown;
exports.ErrorIcon = Icon$1;
exports.Flex = Flex;
exports.GooseRoundIcon = Icon$w;
exports.Heading = Heading;
exports.HelpIcon = Icon$o;
exports.IconButton = IconButton;
exports.Image = Image;
exports.InfoIcon = Icon$3;
exports.Input = Input;
exports.Link = Link;
exports.LinkExternal = LinkExternal;
exports.ListViewIcon = Icon$p;
exports.LogoIcon = Icon$q;
exports.LogoRoundIcon = Icon$r;
exports.Menu = Menu;
exports.MinusIcon = Icon$s;
exports.Modal = Modal;
exports.ModalProvider = ModalProvider;
exports.OpenNewIcon = Icon$t;
exports.PancakeRoundIcon = Icon$v;
exports.PancakesIcon = Icon$u;
exports.PrizeIcon = Icon$x;
exports.Progress = Progress;
exports.ProgressBunny = Icon$A;
exports.Radio = Radio;
exports.RemoveIcon = Icon$y;
exports.ResetCSS = ResetCSS;
exports.SearchIcon = Icon$E;
exports.Skeleton = Skeleton;
exports.Spinner = Spinner;
exports.Svg = Svg;
exports.SwapVertIcon = Icon$F;
exports.SyncAltIcon = Icon$G;
exports.Tag = Tag;
exports.Text = Text;
exports.Ticket = Icon$C;
exports.TicketRound = Icon$D;
exports.ToastContainer = ToastContainer;
exports.Toggle = Toggle;
exports.VerifiedIcon = Icon$z;
exports.WarningIcon = Icon$H;
exports.Won = Icon$B;
exports.alertVariants = variants$1;
exports.byTextAscending = byTextAscending;
exports.byTextDescending = byTextDescending;
exports.dark = darkTheme;
exports.darkColors = darkColors;
exports.light = lightTheme;
exports.lightColors = lightColors;
exports.makeRender = makeRender;
exports.menuConfig = links;
exports.toastTypes = types;
exports.useMatchBreakpoints = useMatchBreakpoints;
exports.useModal = useModal;
exports.useParticleBurst = useParticleBurst;
exports.useTable = useTable;
exports.useWalletModal = useWalletModal;
