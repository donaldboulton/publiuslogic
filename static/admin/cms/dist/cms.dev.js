"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _netlifyCms = _interopRequireDefault(require("netlify-cms"));

var _AboutPagePreview = _interopRequireDefault(require("./preview-templates/AboutPagePreview"));

var _ArticlePreview = _interopRequireDefault(require("./preview-templates/ArticlePreview"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_netlifyCms["default"].registerPreviewTemplate('about', _AboutPagePreview["default"]);

_netlifyCms["default"].registerPreviewTemplate('blog', _ArticlePreview["default"]);

var _default = {
  CMS: _netlifyCms["default"]
};
exports["default"] = _default;