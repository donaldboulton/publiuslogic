"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _netlifyCms = _interopRequireDefault(require("./netlify-cms"));

var _netlifyCmsMediaLibraryCloudinary = _interopRequireDefault(require("netlify-cms-media-library-cloudinary"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_netlifyCms["default"].registerMediaLibrary(_netlifyCmsMediaLibraryCloudinary["default"]);

var _default = {
  CMS: _netlifyCms["default"]
};
exports["default"] = _default;