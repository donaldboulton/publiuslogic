"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _netlifyCmsApp = _interopRequireDefault(require("netlify-cms-app"));

var _netlifyCmsMediaLibraryCloudinary = _interopRequireDefault(require("netlify-cms-media-library-cloudinary"));

var _Slides = require("./Slides");

var _AboutPagePreview = _interopRequireDefault(require("./preview-templates/AboutPagePreview"));

var _ArticlePagePreview = _interopRequireDefault(require("./preview-templates/ArticlePagePreview"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_netlifyCmsApp["default"].registerMediaLibrary(_netlifyCmsMediaLibraryCloudinary["default"]);

_netlifyCmsApp["default"].registerWidget('slides', _Slides.SlidesControl, _Slides.SlidesPreview);

_netlifyCmsApp["default"].registerPreviewTemplate('about', _AboutPagePreview["default"]);

_netlifyCmsApp["default"].registerPreviewTemplate('blog', _ArticlePagePreview["default"]);

var _default = {
  CMS: _netlifyCmsApp["default"]
};
exports["default"] = _default;