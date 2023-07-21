"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _outline = require("@heroicons/react/24/outline");
var _solid = require("@heroicons/react/24/solid");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function Search(_ref, ref) {
  var _onChange = _ref.onChange,
    placeholder = _ref.placeholder,
    prefix = _ref.prefix,
    value = _ref.value;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex items-center space-x-1.5 pl-3"
  }, /*#__PURE__*/_react["default"].createElement(_outline.MagnifyingGlassIcon, {
    className: "w-4 pointer-events-none text-gray-400 dark:text-gray-600"
  }), prefix !== null && prefix !== void 0 && prefix.length ? prefix.map(function (p) {
    return /*#__PURE__*/_react["default"].createElement(_react.Fragment, {
      key: p
    }, /*#__PURE__*/_react["default"].createElement("span", {
      className: "dark:text-white"
    }, p), /*#__PURE__*/_react["default"].createElement("span", {
      className: "text-gray-500"
    }, "/"));
  }) : null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex-1 relative"
  }, /*#__PURE__*/_react["default"].createElement("input", {
    ref: ref,
    spellCheck: false,
    className: "py-4 px-0 border-none w-full focus:outline-none focus:border-none focus:ring-0 bg-transparent placeholder-gray-500 dark:text-white",
    onChange: function onChange(e) {
      _onChange(e.currentTarget.value);
    },
    onFocus: function onFocus(e) {
      e.currentTarget.select();
    },
    onKeyDown: function onKeyDown(e) {
      if (e.key === "Escape" && value) {
        e.preventDefault();
        e.stopPropagation();
        _onChange("");
      }
    },
    id: "command-palette-search-input",
    placeholder: placeholder,
    value: value,
    type: "text",
    autoFocus: true
  }), value && /*#__PURE__*/_react["default"].createElement("button", {
    tabIndex: -1,
    type: "button",
    onClick: function onClick() {
      _onChange("");
      var inputElement = document.getElementById("command-palette-search-input");
      if (inputElement) {
        inputElement.focus();
      }
    }
  }, /*#__PURE__*/_react["default"].createElement(_solid.XCircleIcon, {
    className: "w-5 text-gray-300 dark:text-gray-600 hover:text-gray-500 dark:hover:text-gray-300 transition absolute right-3 top-1/2 transform -translate-y-1/2"
  }))));
}
var _default = /*#__PURE__*/(0, _react.forwardRef)(Search);
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCIsInJlcXVpcmUiLCJfb3V0bGluZSIsIl9zb2xpZCIsIl9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSIsIm5vZGVJbnRlcm9wIiwiV2Vha01hcCIsImNhY2hlQmFiZWxJbnRlcm9wIiwiY2FjaGVOb2RlSW50ZXJvcCIsIm9iaiIsIl9fZXNNb2R1bGUiLCJfdHlwZW9mIiwiY2FjaGUiLCJoYXMiLCJnZXQiLCJuZXdPYmoiLCJoYXNQcm9wZXJ0eURlc2NyaXB0b3IiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImtleSIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImRlc2MiLCJzZXQiLCJTZWFyY2giLCJfcmVmIiwicmVmIiwib25DaGFuZ2UiLCJwbGFjZWhvbGRlciIsInByZWZpeCIsInZhbHVlIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsIk1hZ25pZnlpbmdHbGFzc0ljb24iLCJsZW5ndGgiLCJtYXAiLCJwIiwiRnJhZ21lbnQiLCJzcGVsbENoZWNrIiwiZSIsImN1cnJlbnRUYXJnZXQiLCJvbkZvY3VzIiwic2VsZWN0Iiwib25LZXlEb3duIiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJpZCIsInR5cGUiLCJhdXRvRm9jdXMiLCJ0YWJJbmRleCIsIm9uQ2xpY2siLCJpbnB1dEVsZW1lbnQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZm9jdXMiLCJYQ2lyY2xlSWNvbiIsIl9kZWZhdWx0IiwiZm9yd2FyZFJlZiIsImV4cG9ydHMiXSwic291cmNlcyI6WyIuLi8uLi9zcmMvY29tcG9uZW50cy9TZWFyY2gudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBmb3J3YXJkUmVmLCBGcmFnbWVudCwgUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBNYWduaWZ5aW5nR2xhc3NJY29uIH0gZnJvbSBcIkBoZXJvaWNvbnMvcmVhY3QvMjQvb3V0bGluZVwiO1xuaW1wb3J0IHsgWENpcmNsZUljb24gfSBmcm9tIFwiQGhlcm9pY29ucy9yZWFjdC8yNC9zb2xpZFwiO1xuXG5pbnRlcmZhY2UgU2VhcmNoUHJvcHMge1xuICBvbkNoYW5nZTogKHZhbHVlOiBzdHJpbmcpID0+IHZvaWQ7XG4gIHBsYWNlaG9sZGVyPzogc3RyaW5nO1xuICBwcmVmaXg/OiBzdHJpbmdbXTtcbiAgdmFsdWU6IHN0cmluZztcbn1cblxuZnVuY3Rpb24gU2VhcmNoKFxuICB7IG9uQ2hhbmdlLCBwbGFjZWhvbGRlciwgcHJlZml4LCB2YWx1ZSB9OiBTZWFyY2hQcm9wcyxcbiAgcmVmOiBSZWY8SFRNTElucHV0RWxlbWVudD5cbikge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgc3BhY2UteC0xLjUgcGwtM1wiPlxuICAgICAgPE1hZ25pZnlpbmdHbGFzc0ljb24gY2xhc3NOYW1lPVwidy00IHBvaW50ZXItZXZlbnRzLW5vbmUgdGV4dC1ncmF5LTQwMCBkYXJrOnRleHQtZ3JheS02MDBcIiAvPlxuXG4gICAgICB7cHJlZml4Py5sZW5ndGhcbiAgICAgICAgPyBwcmVmaXgubWFwKChwKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8RnJhZ21lbnQga2V5PXtwfT5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkYXJrOnRleHQtd2hpdGVcIj57cH08L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ncmF5LTUwMFwiPi88L3NwYW4+XG4gICAgICAgICAgICAgIDwvRnJhZ21lbnQ+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pXG4gICAgICAgIDogbnVsbH1cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgcmVsYXRpdmVcIj5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgcmVmPXtyZWZ9XG4gICAgICAgICAgc3BlbGxDaGVjaz17ZmFsc2V9XG4gICAgICAgICAgY2xhc3NOYW1lPVwicHktNCBweC0wIGJvcmRlci1ub25lIHctZnVsbCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6Ym9yZGVyLW5vbmUgZm9jdXM6cmluZy0wIGJnLXRyYW5zcGFyZW50IHBsYWNlaG9sZGVyLWdyYXktNTAwIGRhcms6dGV4dC13aGl0ZVwiXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XG4gICAgICAgICAgICBvbkNoYW5nZShlLmN1cnJlbnRUYXJnZXQudmFsdWUpO1xuICAgICAgICAgIH19XG4gICAgICAgICAgb25Gb2N1cz17KGUpID0+IHtcbiAgICAgICAgICAgIGUuY3VycmVudFRhcmdldC5zZWxlY3QoKTtcbiAgICAgICAgICB9fVxuICAgICAgICAgIG9uS2V5RG93bj17KGUpID0+IHtcbiAgICAgICAgICAgIGlmIChlLmtleSA9PT0gXCJFc2NhcGVcIiAmJiB2YWx1ZSkge1xuICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgIG9uQ2hhbmdlKFwiXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH19XG4gICAgICAgICAgaWQ9XCJjb21tYW5kLXBhbGV0dGUtc2VhcmNoLWlucHV0XCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XG4gICAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBhdXRvRm9jdXNcbiAgICAgICAgLz5cblxuICAgICAgICB7dmFsdWUgJiYgKFxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIHRhYkluZGV4PXstMX1cbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICBvbkNoYW5nZShcIlwiKTtcbiAgICAgICAgICAgICAgY29uc3QgaW5wdXRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgICAgICAgICAgICAgXCJjb21tYW5kLXBhbGV0dGUtc2VhcmNoLWlucHV0XCJcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgaWYgKGlucHV0RWxlbWVudCkge1xuICAgICAgICAgICAgICAgIGlucHV0RWxlbWVudC5mb2N1cygpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxYQ2lyY2xlSWNvbiBjbGFzc05hbWU9XCJ3LTUgdGV4dC1ncmF5LTMwMCBkYXJrOnRleHQtZ3JheS02MDAgaG92ZXI6dGV4dC1ncmF5LTUwMCBkYXJrOmhvdmVyOnRleHQtZ3JheS0zMDAgdHJhbnNpdGlvbiBhYnNvbHV0ZSByaWdodC0zIHRvcC0xLzIgdHJhbnNmb3JtIC10cmFuc2xhdGUteS0xLzJcIiAvPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZvcndhcmRSZWYoU2VhcmNoKTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLElBQUFBLE1BQUEsR0FBQUMsdUJBQUEsQ0FBQUMsT0FBQTtBQUNBLElBQUFDLFFBQUEsR0FBQUQsT0FBQTtBQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtBQUF3RCxTQUFBRyx5QkFBQUMsV0FBQSxlQUFBQyxPQUFBLGtDQUFBQyxpQkFBQSxPQUFBRCxPQUFBLFFBQUFFLGdCQUFBLE9BQUFGLE9BQUEsWUFBQUYsd0JBQUEsWUFBQUEseUJBQUFDLFdBQUEsV0FBQUEsV0FBQSxHQUFBRyxnQkFBQSxHQUFBRCxpQkFBQSxLQUFBRixXQUFBO0FBQUEsU0FBQUwsd0JBQUFTLEdBQUEsRUFBQUosV0FBQSxTQUFBQSxXQUFBLElBQUFJLEdBQUEsSUFBQUEsR0FB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