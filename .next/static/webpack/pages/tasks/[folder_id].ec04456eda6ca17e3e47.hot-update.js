"use strict";
self["webpackHotUpdate_N_E"]("pages/tasks/[folder_id]",{

/***/ "./pages/tasks/[folder_id].js":
/*!************************************!*\
  !*** ./pages/tasks/[folder_id].js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_martin_Desktop_proyectos_SpringBoot_mytask_mytask_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_martin_Desktop_proyectos_SpringBoot_mytask_mytask_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_Users_martin_Desktop_proyectos_SpringBoot_mytask_mytask_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_martin_Desktop_proyectos_SpringBoot_mytask_mytask_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Users_martin_Desktop_proyectos_SpringBoot_mytask_mytask_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Container */ "./components/Container.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\martin\\Desktop\\proyectos\\SpringBoot\\mytask\\mytask-client\\pages\\tasks\\[folder_id].js",
    _this = undefined,
    _s = $RefreshSig$();



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_martin_Desktop_proyectos_SpringBoot_mytask_mytask_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







var User = function User(_ref) {
  _s();

  var user = _ref.user;
  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
  var folder_id = router.query.folder_id;
  var user_id =  true ? localStorage.getItem('user_id') : 0;
  var token =  true ? localStorage.getItem('token') : 0;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)({
    name: "",
    folder_id: folder_id
  }),
      data = _useState[0],
      setData = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)({}),
      tasks = _useState2[0],
      setTasks = _useState2[1];

  var handleChange = function handleChange(e) {
    setData(_objectSpread(_objectSpread({}, data), {}, (0,C_Users_martin_Desktop_proyectos_SpringBoot_mytask_mytask_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)({}, e.target.name, e.target.value)));
  };

  var sendData = /*#__PURE__*/function () {
    var _ref2 = (0,C_Users_martin_Desktop_proyectos_SpringBoot_mytask_mytask_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/C_Users_martin_Desktop_proyectos_SpringBoot_mytask_mytask_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee(e) {
      var request;
      return C_Users_martin_Desktop_proyectos_SpringBoot_mytask_mytask_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();
              _context.next = 3;
              return fetch("http://localhost:8080/api/folder/" + folder_id, {
                method: "POST",
                headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
              });

            case 3:
              request = _context.sent;

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function sendData(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)( /*#__PURE__*/(0,C_Users_martin_Desktop_proyectos_SpringBoot_mytask_mytask_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/C_Users_martin_Desktop_proyectos_SpringBoot_mytask_mytask_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2() {
    var request, task;
    return C_Users_martin_Desktop_proyectos_SpringBoot_mytask_mytask_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return fetch("http://localhost:8080/api/task/", {
              method: "GET",
              headers: getHeaders()
            });

          case 2:
            request = _context2.sent;
            _context2.next = 5;
            return request.json();

          case 5:
            task = _context2.sent;
            setTasks(task);

          case 7:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  })), []);

  function getHeaders() {
    return {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": token
    };
  }

  var deleteTask = /*#__PURE__*/function () {
    var _ref4 = (0,C_Users_martin_Desktop_proyectos_SpringBoot_mytask_mytask_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/C_Users_martin_Desktop_proyectos_SpringBoot_mytask_mytask_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee3(id) {
      var request;
      return C_Users_martin_Desktop_proyectos_SpringBoot_mytask_mytask_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              if (confirm("¿Desea la tarea?")) {
                _context3.next = 2;
                break;
              }

              return _context3.abrupt("return");

            case 2:
              _context3.next = 4;
              return fetch("http://localhost:8080/api/task/" + id, {
                method: "DELETE",
                headers: getHeaders()
              });

            case 4:
              request = _context3.sent;
              location.reload();

            case 6:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function deleteTask(_x2) {
      return _ref4.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_components_Container__WEBPACK_IMPORTED_MODULE_3__.default, {
    title: "Folder",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
      "class": "container-fluid px-4",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
        "class": "card mb-4",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
          "class": "card-body",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("table", {
            id: "folders",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("thead", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("tr", {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("th", {
                  children: "Folder ID"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 91,
                  columnNumber: 37
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("th", {
                  children: "User ID"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 92,
                  columnNumber: 37
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("th", {
                  children: "Name Folder"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 93,
                  columnNumber: 37
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("th", {
                  children: "Create At"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 94,
                  columnNumber: 37
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 90,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 89,
              columnNumber: 29
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("tbody", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("ul", {
                className: "list-group",
                children: (0,lodash__WEBPACK_IMPORTED_MODULE_4__.map)(tasks, function (e, index) {
                  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("tr", {
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("td", {
                      children: e.folder_id
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 102,
                      columnNumber: 45
                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("td", {
                      children: e.user_id
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 103,
                      columnNumber: 45
                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("td", {
                      children: e.task_id
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 104,
                      columnNumber: 45
                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("td", {
                      children: e.completed
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 105,
                      columnNumber: 45
                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("td", {
                      children: e.description
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 106,
                      columnNumber: 45
                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("td", {
                      children: e.create_at
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 107,
                      columnNumber: 45
                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("td", {
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("a", {
                        href: "#",
                        onClick: deleteTask(e.task_id),
                        "class": "btn btn-danger btn-circle btn-sm",
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("i", {
                          "class": "fas fa-trash"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 109,
                          columnNumber: 49
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 108,
                        columnNumber: 49
                      }, _this), " "]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 108,
                      columnNumber: 45
                    }, _this)]
                  }, index, true, {
                    fileName: _jsxFileName,
                    lineNumber: 101,
                    columnNumber: 41
                  }, _this);
                })
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 99,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 98,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("form", {
      onSubmit: sendData,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
        className: "form-floating mb-3",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("input", {
          className: "form-control",
          name: "name",
          type: "text",
          placeholder: "name",
          onChange: handleChange
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("label", {
          htmlFor: "inputName",
          children: "Name "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 131,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
        className: "mt-4 mb-0",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
          className: "d-grid",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("button", {
            className: "btn btn-primary",
            type: "submit",
            children: "Create folder"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 135,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
        className: "mt-4 mb-0",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
          className: "d-grid"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 139,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 80,
    columnNumber: 9
  }, _this);
};

_s(User, "n6AiXRwxKzodHGGZcseFfwXcbu0=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter];
});

_c = User;
/* harmony default export */ __webpack_exports__["default"] = (User);

var _c;

$RefreshReg$(_c, "User");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdGFza3MvW2ZvbGRlcl9pZF0uZWMwNDQ1NmVkYTZjYTE3ZTNlNDcuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLElBQU1LLElBQUksR0FBRyxTQUFQQSxJQUFPLE9BQWM7QUFBQTs7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7QUFFdkIsTUFBTUMsTUFBTSxHQUFHTCxzREFBUyxFQUF4QjtBQUNBLE1BQVFNLFNBQVIsR0FBc0JELE1BQU0sQ0FBQ0UsS0FBN0IsQ0FBUUQsU0FBUjtBQUVBLE1BQU1FLE9BQU8sR0FBRyxRQUFnQ0MsWUFBWSxDQUFDQyxPQUFiLENBQXFCLFNBQXJCLENBQWhDLEdBQWtFLENBQWxGO0FBQ0EsTUFBTUMsS0FBSyxHQUFHLFFBQWdDRixZQUFZLENBQUNDLE9BQWIsQ0FBcUIsT0FBckIsQ0FBaEMsR0FBZ0UsQ0FBOUU7O0FBQ0Esa0JBQXdCUiwrQ0FBUSxDQUFDO0FBQzdCVSxJQUFBQSxJQUFJLEVBQUUsRUFEdUI7QUFFN0JOLElBQUFBLFNBQVMsRUFBRUE7QUFGa0IsR0FBRCxDQUFoQztBQUFBLE1BQU9PLElBQVA7QUFBQSxNQUFhQyxPQUFiOztBQUlBLG1CQUEwQlosK0NBQVEsQ0FBQyxFQUFELENBQWxDO0FBQUEsTUFBT2EsS0FBUDtBQUFBLE1BQWNDLFFBQWQ7O0FBQ0EsTUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsQ0FBRCxFQUFPO0FBQ3hCSixJQUFBQSxPQUFPLGlDQUNBRCxJQURBLDJLQUVGSyxDQUFDLENBQUNDLE1BQUYsQ0FBU1AsSUFGUCxFQUVjTSxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FGdkIsR0FBUDtBQUlILEdBTEQ7O0FBT0EsTUFBTUMsUUFBUTtBQUFBLG9WQUFHLGlCQUFPSCxDQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNiQSxj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QkFBTyxFQUFDLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosZUFXSTtBQUFLLGlCQUFTLEVBQUMsV0FBZjtBQUFBLCtCQUNJO0FBQUssbUJBQVMsRUFBQyxRQUFmO0FBQUEsaUNBQ0k7QUFBUSxxQkFBUyxFQUFDLGlCQUFsQjtBQUFvQyxnQkFBSSxFQUFDLFFBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFYSixlQWdCSTtBQUFLLGlCQUFTLEVBQUMsV0FBZjtBQUFBLCtCQUNJO0FBQUssbUJBQVMsRUFBQztBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBaEJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQTFDSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQW1FSCxDQTNJRDs7R0FBTWQ7VUFFYUg7OztLQUZiRztBQStJTiwrREFBZUEsSUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy90YXNrcy9bZm9sZGVyX2lkXS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Db250YWluZXJcIjtcclxuaW1wb3J0IHttYXB9IGZyb20gXCJsb2Rhc2hcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IFVzZXIgPSAoeyB1c2VyIH0pID0+IHtcclxuXHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IHsgZm9sZGVyX2lkIH0gPSByb3V0ZXIucXVlcnk7XHJcblxyXG4gICAgY29uc3QgdXNlcl9pZCA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXJfaWQnKSA6IG51bGxcclxuICAgIGNvbnN0IHRva2VuID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKSA6IG51bGxcclxuICAgIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBuYW1lOiBcIlwiLFxyXG4gICAgICAgIGZvbGRlcl9pZDogZm9sZGVyX2lkXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IFt0YXNrcywgc2V0VGFza3NdID0gdXNlU3RhdGUoe30pO1xyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcclxuICAgICAgICBzZXREYXRhKHtcclxuICAgICAgICAgICAgLi4uZGF0YSxcclxuICAgICAgICAgICAgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2VuZERhdGEgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjgwODAvYXBpL2ZvbGRlci9cIitmb2xkZXJfaWQsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgdXNlRWZmZWN0KGFzeW5jKCkgPT4ge1xyXG5cclxuICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjgwODAvYXBpL3Rhc2svXCIsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiBnZXRIZWFkZXJzKClcclxuICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgY29uc3QgdGFzayA9IGF3YWl0IHJlcXVlc3QuanNvbigpO1xyXG5cclxuICAgICAgICBzZXRUYXNrcyh0YXNrKVxyXG4gICAgfSwgW10pXHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0SGVhZGVycygpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBcIkFjY2VwdFwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgICAgIFwiQXV0aG9yaXphdGlvblwiOiB0b2tlblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgY29uc3QgZGVsZXRlVGFzaz0gYXN5bmMgKGlkKT0+IHtcclxuICAgICAgICBpZiAoIWNvbmZpcm0oXCLCv0Rlc2VhIGxhIHRhcmVhP1wiKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjgwODAvYXBpL3Rhc2svXCIgKyBpZCwge1xyXG4gICAgICAgICAgICBtZXRob2Q6IFwiREVMRVRFXCIsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IGdldEhlYWRlcnMoKVxyXG4gICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Q29udGFpbmVyIHRpdGxlPVwiRm9sZGVyXCI+XHJcblxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lci1mbHVpZCBweC00XCI+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQgbWItNFwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZSBpZD1cImZvbGRlcnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5Gb2xkZXIgSUQ8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+VXNlciBJRDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5OYW1lIEZvbGRlcjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5DcmVhdGUgQXQ8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHttYXAodGFza3MsIChlLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57ZS5mb2xkZXJfaWR9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2UudXNlcl9pZH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57ZS50YXNrX2lkfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntlLmNvbXBsZXRlZH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57ZS5kZXNjcmlwdGlvbn08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57ZS5jcmVhdGVfYXR9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PGEgaHJlZj1cIiNcIiBvbkNsaWNrPXtkZWxldGVUYXNrKGUudGFza19pZCl9IGNsYXNzPVwiYnRuIGJ0bi1kYW5nZXIgYnRuLWNpcmNsZSBidG4tc21cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtdHJhc2hcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPiA8L3RkPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtzZW5kRGF0YX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZmxvYXRpbmcgbWItM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiaW5wdXROYW1lXCI+TmFtZSA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTQgbWItMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1ncmlkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCIgdHlwZT1cInN1Ym1pdFwiPkNyZWF0ZSBmb2xkZXI8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC00IG1iLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZ3JpZFwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICApO1xyXG59O1xyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBVc2VyOyJdLCJuYW1lcyI6WyJDb250YWluZXIiLCJtYXAiLCJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlVzZXIiLCJ1c2VyIiwicm91dGVyIiwiZm9sZGVyX2lkIiwicXVlcnkiLCJ1c2VyX2lkIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInRva2VuIiwibmFtZSIsImRhdGEiLCJzZXREYXRhIiwidGFza3MiLCJzZXRUYXNrcyIsImhhbmRsZUNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInNlbmREYXRhIiwicHJldmVudERlZmF1bHQiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJBY2NlcHQiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInJlcXVlc3QiLCJnZXRIZWFkZXJzIiwianNvbiIsInRhc2siLCJkZWxldGVUYXNrIiwiaWQiLCJjb25maXJtIiwibG9jYXRpb24iLCJyZWxvYWQiLCJpbmRleCIsInRhc2tfaWQiLCJjb21wbGV0ZWQiLCJkZXNjcmlwdGlvbiIsImNyZWF0ZV9hdCJdLCJzb3VyY2VSb290IjoiIn0=