"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.User = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _UserCircle = require("@styled-icons/fa-solid/UserCircle");

var _mediaQuery = _interopRequireDefault(require("../../utils/mediaQuery"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 1.2em;\n  top: calc(1.3vh + 1.5em);\n  pointer-events: none;\n  color: white;\n  z-index: 120;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var User = (0, _styledComponents["default"])(_UserCircle.UserCircle)(_templateObject());
exports.User = User;