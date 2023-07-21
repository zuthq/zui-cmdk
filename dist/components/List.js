"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = List;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function List(_ref) {
  var children = _ref.children,
    heading = _ref.heading;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "space-y-1",
    tabIndex: -1
  }, heading && /*#__PURE__*/_react["default"].createElement("h4", {
    className: "px-3.5 text-gray-500 text-sm font-medium"
  }, heading), /*#__PURE__*/_react["default"].createElement("ul", {
    tabIndex: -1
  }, children));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsIm9iaiIsIl9fZXNNb2R1bGUiLCJMaXN0IiwiX3JlZiIsImNoaWxkcmVuIiwiaGVhZGluZyIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJ0YWJJbmRleCJdLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL0xpc3QudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBSZWFjdE5vZGUgfSBmcm9tIFwicmVhY3RcIjtcblxuaW50ZXJmYWNlIExpc3RQcm9wcyB7XG4gIGNoaWxkcmVuOiBSZWFjdE5vZGU7XG4gIGhlYWRpbmc/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExpc3QoeyBjaGlsZHJlbiwgaGVhZGluZyB9OiBMaXN0UHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMVwiIHRhYkluZGV4PXstMX0+XG4gICAgICB7aGVhZGluZyAmJiAoXG4gICAgICAgIDxoNCBjbGFzc05hbWU9XCJweC0zLjUgdGV4dC1ncmF5LTUwMCB0ZXh0LXNtIGZvbnQtbWVkaXVtXCI+e2hlYWRpbmd9PC9oND5cbiAgICAgICl9XG5cbiAgICAgIDx1bCB0YWJJbmRleD17LTF9PntjaGlsZHJlbn08L3VsPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxJQUFBQSxNQUFBLEdBQUFDLHNCQUFBLENBQUFDLE9BQUE7QUFBeUMsU0FBQUQsdUJBQUFFLEdBQUEsV0FBQUEsR0FBQSxJQUFBQSxHQUFBLENBQUFDLFVBQUEsR0FBQUQsR0FBQSxnQkFBQUEsR0FBQTtBQU8xQixTQUFTRSxJQUFJQSxDQUFBQyxJQUFBLEVBQW1DO0VBQUEsSUFBaENDLFFBQVEsR0FBQUQsSUFBQSxDQUFSQyxRQUFRO0lBQUVDLE9BQU8sR0FBQUYsSUFBQSxDQUFQRSxPQUFPO0VBQzlDLG9CQUNFUixNQUFBLFlBQUFTLGFBQUE7SUFBS0MsU0FBUyxFQUFDLFdBQVc7SUFBQ0MsUUFBUSxFQUFFLENBQUM7RUFBRSxHQUNyQ0gsT0FBTyxpQkFDTlIsTUFBQSxZQUFBUyxhQUFBO0lBQUlDLFNBQVMsRUFBQztFQUEwQyxHQUFFRixPQUFZLENBQ3ZFLGVBRURSLE1BQUEsWUFBQVMsYUFBQTtJQUFJRSxRQUFRLEVBQUUsQ0FBQztFQUFFLEdBQUVKLFFBQWEsQ0FDN0IsQ0FBQztBQUVWIn0=