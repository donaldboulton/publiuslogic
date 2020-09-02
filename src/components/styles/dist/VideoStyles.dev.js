"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Iframe = exports.VideoPlayer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _mediaQuery = _interopRequireDefault(require("../../utils/mediaQuery"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 580px;\n  ", " {\n    height: 480px;\n  }\n  ", " {\n     height: 380px;\n  }\n  ", " {\n     height: 250px;\n  }\n  ", " {\n     height: 230px;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  ", " {\n    > p {\n      text-align: center;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var VideoPlayer = _styledComponents["default"].div(_templateObject(), _mediaQuery["default"].minPhablet);

exports.VideoPlayer = VideoPlayer;

var Iframe = _styledComponents["default"].div(_templateObject2(), _mediaQuery["default"].minDesktopSmall, _mediaQuery["default"].minLaptop, _mediaQuery["default"].minPhablet, _mediaQuery["default"].minPhone);

exports.Iframe = Iframe;