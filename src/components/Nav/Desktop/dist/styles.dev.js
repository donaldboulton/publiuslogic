"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "DownArrow", {
  enumerable: true,
  get: function get() {
    return _DownArrow.DownArrow;
  }
});
exports.SubNavLogin = exports.SubNav = exports.NavEntryLogin = exports.NavEntry = exports.DesktopNavDiv = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styles = require("../../styles");

var _DownArrow = require("@styled-icons/boxicons-solid/DownArrow");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  display: grid;\n  width: max-content;\n  border-radius: ", ";\n  grid-gap: 0.2em 0.5em;\n  position: absolute;\n  overflow: visible;\n  z-index: 10;\n  right: 0;\n  top: calc(100% + 0.3em);\n  padding: 0.5em 0.7em;\n  grid-template-columns: ", ";\n  background: rgba(0, 0, 0, 0.8);\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  display: grid;\n  width: max-content;\n  border-radius: ", ";\n  grid-gap: 0.2em 0.5em;\n  position: absolute;\n  overflow: visible;\n  z-index: 10;\n  left: 0;\n  top: calc(100% + 0.3em);\n  padding: 0.5em 0.7em;\n  grid-template-columns: ", ";\n  background: rgba(0, 0, 0, 0.8);\n  ", "\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  z-index: 22;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  z-index: 22;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: grid;\n  grid-gap: calc(1em + 1vw);\n  grid-auto-flow: column;\n  z-index: 20;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var DesktopNavDiv = _styledComponents["default"].nav(_templateObject());

exports.DesktopNavDiv = DesktopNavDiv;

var NavEntry = _styledComponents["default"].div(_templateObject2());

exports.NavEntry = NavEntry;

var NavEntryLogin = _styledComponents["default"].div(_templateObject3());

exports.NavEntryLogin = NavEntryLogin;

var SubNav = _styledComponents["default"].div(_templateObject4(), function (props) {
  return props.theme.smallBorderRadius;
}, function (props) {
  return props.children.length >= 10 ? "1fr 1fr" : "1fr";
}, (0, _styles.fadeInOnHoverParent)(NavEntry));

exports.SubNav = SubNav;

var SubNavLogin = _styledComponents["default"].div(_templateObject5(), function (props) {
  return props.theme.smallBorderRadius;
}, function (props) {
  return props.children.length >= 10 ? "1fr 1fr" : "1fr";
});

exports.SubNavLogin = SubNavLogin;