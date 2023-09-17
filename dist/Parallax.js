"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function Parallax(_ref) {
  var imageUrl = _ref.imageUrl,
    _ref$minHeight = _ref.minHeight,
    minHeight = _ref$minHeight === void 0 ? '500px' : _ref$minHeight,
    title = _ref.title,
    description = _ref.description;
  var styles = {
    backgroundImage: "url(".concat(imageUrl, ")"),
    minHeight: minHeight,
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
    textAlign: 'center'
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: styles
  }, title && /*#__PURE__*/_react["default"].createElement("h2", null, title), description && /*#__PURE__*/_react["default"].createElement("p", null, description));
}
var _default = Parallax;
exports["default"] = _default;