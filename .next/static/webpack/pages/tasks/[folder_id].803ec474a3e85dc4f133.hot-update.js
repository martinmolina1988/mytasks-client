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
              if (confirm("??Desea la tarea?")) {
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
                      children: e === null || e === void 0 ? void 0 : e.folder_id
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 102,
                      columnNumber: 45
                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("td", {
                      children: e === null || e === void 0 ? void 0 : e.user_id
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 103,
                      columnNumber: 45
                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("td", {
                      children: e === null || e === void 0 ? void 0 : e.task_id
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 104,
                      columnNumber: 45
                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("td", {
                      children: e === null || e === void 0 ? void 0 : e.completed
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 105,
                      columnNumber: 45
                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("td", {
                      children: e === null || e === void 0 ? void 0 : e.description
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 106,
                      columnNumber: 45
                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("td", {
                      children: e === null || e === void 0 ? void 0 : e.create_at
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 107,
                      columnNumber: 45
                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("td", {
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("button", {
                        onClick: deleteTask(e === null || e === void 0 ? void 0 : e.task_id),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdGFza3MvW2ZvbGRlcl9pZF0uODAzZWM0NzRhM2U4NWRjNGYxMzMuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLElBQU1LLElBQUksR0FBRyxTQUFQQSxJQUFPLE9BQWM7QUFBQTs7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7QUFFdkIsTUFBTUMsTUFBTSxHQUFHTCxzREFBUyxFQUF4QjtBQUNBLE1BQVFNLFNBQVIsR0FBc0JELE1BQU0sQ0FBQ0UsS0FBN0IsQ0FBUUQsU0FBUjtBQUVBLE1BQU1FLE9BQU8sR0FBRyxRQUFnQ0MsWUFBWSxDQUFDQyxPQUFiLENBQXFCLFNBQXJCLENBQWhDLEdBQWtFLENBQWxGO0FBQ0EsTUFBTUMsS0FBSyxHQUFHLFFBQWdDRixZQUFZLENBQUNDLE9BQWIsQ0FBcUIsT0FBckIsQ0FBaEMsR0FBZ0UsQ0FBOUU7O0FBQ0Esa0JBQXdCUiwrQ0FBUSxDQUFDO0FBQzdCVSxJQUFBQSxJQUFJLEVBQUUsRUFEdUI7QUFFN0JOLElBQUFBLFNBQVMsRUFBRUE7QUFGa0IsR0FBRCxDQUFoQztBQUFBLE1BQU9PLElBQVA7QUFBQSxNQUFhQyxPQUFiOztBQUlBLG1CQUEwQlosK0NBQVEsQ0FBQyxFQUFELENBQWxDO0FBQUEsTUFBT2EsS0FBUDtBQUFBLE1BQWNDLFFBQWQ7O0FBQ0EsTUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsQ0FBRCxFQUFPO0FBQ3hCSixJQUFBQSxPQUFPLGlDQUNBRCxJQURBLDJLQUVGSyxDQUFDLENBQUNDLE1BQUYsQ0FBU1AsSUFGUCxFQUVjTSxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FGdkIsR0FBUDtBQUlILEdBTEQ7O0FBT0EsTUFBTUMsUUFBUTtBQUFBLG9WQUFHLGlCQUFPSCxDQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNiQSxj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Q0ksbUJBQVMsRUFBQyxjQURkO0FBRUksY0FBSSxFQUFDLE1BRlQ7QUFHSSxjQUFJLEVBQUMsTUFIVDtBQUlJLHFCQUFXLEVBQUMsTUFKaEI7QUFLSSxrQkFBUSxFQUFFSjtBQUxkO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosZUFRSTtBQUFPLGlCQUFPLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFSSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixlQVdJO0FBQUssaUJBQVMsRUFBQyxXQUFmO0FBQUEsK0JBQ0k7QUFBSyxtQkFBUyxFQUFDLFFBQWY7QUFBQSxpQ0FDSTtBQUFRLHFCQUFTLEVBQUMsaUJBQWxCO0FBQW9DLGdCQUFJLEVBQUMsUUFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVhKLGVBZ0JJO0FBQUssaUJBQVMsRUFBQyxXQUFmO0FBQUEsK0JBQ0k7QUFBSyxtQkFBUyxFQUFDO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFoQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBMUNKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBbUVILENBM0lEOztHQUFNZDtVQUVhSDs7O0tBRmJHO0FBK0lOLCtEQUFlQSxJQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Rhc2tzL1tmb2xkZXJfaWRdLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0NvbnRhaW5lclwiO1xyXG5pbXBvcnQge21hcH0gZnJvbSBcImxvZGFzaFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgVXNlciA9ICh7IHVzZXIgfSkgPT4ge1xyXG5cclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgeyBmb2xkZXJfaWQgfSA9IHJvdXRlci5xdWVyeTtcclxuXHJcbiAgICBjb25zdCB1c2VyX2lkID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcl9pZCcpIDogbnVsbFxyXG4gICAgY29uc3QgdG9rZW4gPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpIDogbnVsbFxyXG4gICAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIG5hbWU6IFwiXCIsXHJcbiAgICAgICAgZm9sZGVyX2lkOiBmb2xkZXJfaWRcclxuICAgIH0pO1xyXG4gICAgY29uc3QgW3Rhc2tzLCBzZXRUYXNrc10gPSB1c2VTdGF0ZSh7fSk7XHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgICAgIHNldERhdGEoe1xyXG4gICAgICAgICAgICAuLi5kYXRhLFxyXG4gICAgICAgICAgICBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzZW5kRGF0YSA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9hcGkvZm9sZGVyL1wiK2ZvbGRlcl9pZCwge1xyXG4gICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICB1c2VFZmZlY3QoYXN5bmMoKSA9PiB7XHJcblxyXG4gICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9hcGkvdGFzay9cIiwge1xyXG4gICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IGdldEhlYWRlcnMoKVxyXG4gICAgICAgIH1cclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBjb25zdCB0YXNrID0gYXdhaXQgcmVxdWVzdC5qc29uKCk7XHJcblxyXG4gICAgICAgIHNldFRhc2tzKHRhc2spXHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICBmdW5jdGlvbiBnZXRIZWFkZXJzKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIFwiQWNjZXB0XCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6IHRva2VuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjb25zdCBkZWxldGVUYXNrPSBhc3luYyAoaWQpPT4ge1xyXG4gICAgICAgIGlmICghY29uZmlybShcIsK/RGVzZWEgbGEgdGFyZWE/XCIpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9hcGkvdGFzay9cIiArIGlkLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogXCJERUxFVEVcIixcclxuICAgICAgICAgICAgaGVhZGVyczogZ2V0SGVhZGVycygpXHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDb250YWluZXIgdGl0bGU9XCJGb2xkZXJcIj5cclxuXHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyLWZsdWlkIHB4LTRcIj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZCBtYi00XCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGlkPVwiZm9sZGVyc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkZvbGRlciBJRDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5Vc2VyIElEPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPk5hbWUgRm9sZGVyPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkNyZWF0ZSBBdDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge21hcCh0YXNrcywgKGUsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntlPy5mb2xkZXJfaWR9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2U/LnVzZXJfaWR9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2U/LnRhc2tfaWR9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2U/LmNvbXBsZXRlZH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57ZT8uZGVzY3JpcHRpb259PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2U/LmNyZWF0ZV9hdH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48YnV0dG9uICBvbkNsaWNrPXtkZWxldGVUYXNrKGU/LnRhc2tfaWQpfSBjbGFzcz1cImJ0biBidG4tZGFuZ2VyIGJ0bi1jaXJjbGUgYnRuLXNtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLXRyYXNoXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPiA8L3RkPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtzZW5kRGF0YX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZmxvYXRpbmcgbWItM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiaW5wdXROYW1lXCI+TmFtZSA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTQgbWItMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1ncmlkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCIgdHlwZT1cInN1Ym1pdFwiPkNyZWF0ZSBmb2xkZXI8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC00IG1iLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZ3JpZFwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICApO1xyXG59O1xyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBVc2VyOyJdLCJuYW1lcyI6WyJDb250YWluZXIiLCJtYXAiLCJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlVzZXIiLCJ1c2VyIiwicm91dGVyIiwiZm9sZGVyX2lkIiwicXVlcnkiLCJ1c2VyX2lkIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInRva2VuIiwibmFtZSIsImRhdGEiLCJzZXREYXRhIiwidGFza3MiLCJzZXRUYXNrcyIsImhhbmRsZUNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInNlbmREYXRhIiwicHJldmVudERlZmF1bHQiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJBY2NlcHQiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInJlcXVlc3QiLCJnZXRIZWFkZXJzIiwianNvbiIsInRhc2siLCJkZWxldGVUYXNrIiwiaWQiLCJjb25maXJtIiwibG9jYXRpb24iLCJyZWxvYWQiLCJpbmRleCIsInRhc2tfaWQiLCJjb21wbGV0ZWQiLCJkZXNjcmlwdGlvbiIsImNyZWF0ZV9hdCJdLCJzb3VyY2VSb290IjoiIn0=