"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Logo = exports.HeaderContainer = void 0;

var _gatsby = require("gatsby");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _mediaQuery = _interopRequireDefault(require("../../utils/mediaQuery"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  grid-area: title;\n  transform: scale(1, 0.85);\n  color: inherit;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  top: 0;\n  width: 100vw;\n  display: grid;\n  grid-gap: 2vw;\n  z-index: 2;\n  justify-items: center;\n  align-items: center;\n  justify-content: space-between;\n  grid-template-areas: 'title nav login toggle search';\n  grid-template-columns: auto 1fr auto auto auto auto;\n  padding: 2vmin 3vmin;\n  background: #1d1d1d;\n  color: white;\n  font-size: 1.2em;\n  ", " {\n    justify-items: start;\n    grid-template-areas: 'title login toggle search';\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var HeaderContainer = _styledComponents["default"].header(_templateObject(), _mediaQuery["default"].minLaptop);

exports.HeaderContainer = HeaderContainer;
var Logo = (0, _styledComponents["default"])(_gatsby.Link)(_templateObject2());
exports.Logo = Logo;