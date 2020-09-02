"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Img", {
  enumerable: true,
  get: function get() {
    return _gatsbyImage["default"];
  }
});
exports.ImageItem = exports.ImageGrid = exports.Thumbnail = void 0;

var _gatsbyImage = _interopRequireDefault(require("gatsby-image"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  :nth-child(5n) {\n  grid-column-end: span 2;\n}\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: grid;\n  grid-gap: 10px;\n  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\n  grid-auto-rows: minmax(50px, auto);\n}\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  border-radius: ", ";\n  transition: 0.3s;\n  height: 100%;\n  :hover {\n    transform: scale(1.05);\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Thumbnail = (0, _styledComponents["default"])(_gatsbyImage["default"])(_templateObject(), function (props) {
  return props.theme.mediumBorderRadius;
});
exports.Thumbnail = Thumbnail;

var ImageGrid = _styledComponents["default"].div(_templateObject2());

exports.ImageGrid = ImageGrid;

var ImageItem = _styledComponents["default"].div(_templateObject3());

exports.ImageItem = ImageItem;