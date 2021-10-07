"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/folders/CreateFolder.js":
/*!********************************************!*\
  !*** ./components/folders/CreateFolder.js ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ folder; }
/* harmony export */ });
/* harmony import */ var C_Users_martin_Desktop_proyectos_SpringBoot_mytask_mytask_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_martin_Desktop_proyectos_SpringBoot_mytask_mytask_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_Users_martin_Desktop_proyectos_SpringBoot_mytask_mytask_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_martin_Desktop_proyectos_SpringBoot_mytask_mytask_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Users_martin_Desktop_proyectos_SpringBoot_mytask_mytask_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../Container */ "./components/Container.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\martin\\Desktop\\proyectos\\SpringBoot\\mytask\\mytask-client\\components\\folders\\CreateFolder.js",
    _s = $RefreshSig$();



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_martin_Desktop_proyectos_SpringBoot_mytask_mytask_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






function folder() {
  _s();

  var _this = this;

  var user_id =  true ? localStorage.getItem('user_id') : 0;
  var token =  true ? localStorage.getItem('token') : 0;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({
    name: "",
    user_id: user_id
  }),
      data = _useState[0],
      setData = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([{}]),
      folder = _useState2[0],
      setFolder = _useState2[1];

  var handleChange = function handleChange(e) {
    setData(_objectSpread(_objectSpread({}, data), {}, (0,C_Users_martin_Desktop_proyectos_SpringBoot_mytask_mytask_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)({}, e.target.name, e.target.value)));
  };

  var sendData = /*#__PURE__*/function () {
    var _ref = (0,C_Users_martin_Desktop_proyectos_SpringBoot_mytask_mytask_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/C_Users_martin_Desktop_proyectos_SpringBoot_mytask_mytask_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee(e) {
      var request;
      return C_Users_martin_Desktop_proyectos_SpringBoot_mytask_mytask_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();
              _context.next = 3;
              return fetch("http://localhost:8080/api/folder", {
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
      return _ref.apply(this, arguments);
    };
  }();

  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)( /*#__PURE__*/(0,C_Users_martin_Desktop_proyectos_SpringBoot_mytask_mytask_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/C_Users_martin_Desktop_proyectos_SpringBoot_mytask_mytask_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2() {
    var request, folderS;
    return C_Users_martin_Desktop_proyectos_SpringBoot_mytask_mytask_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return fetch("http://localhost:8080/api/folder/", {
              method: "GET",
              headers: getHeaders()
            });

          case 2:
            request = _context2.sent;
            _context2.next = 5;
            return request.json();

          case 5:
            folderS = _context2.sent;
            console.log(folders);
            setFolder(folderS);

          case 8:
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

  var deleteFolder = /*#__PURE__*/function () {
    var _ref3 = (0,C_Users_martin_Desktop_proyectos_SpringBoot_mytask_mytask_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/C_Users_martin_Desktop_proyectos_SpringBoot_mytask_mytask_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee3(id) {
      var request;
      return C_Users_martin_Desktop_proyectos_SpringBoot_mytask_mytask_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return fetch("http://localhost:8080/api/folder/" + id, {
                method: "DELETE",
                headers: getHeaders()
              });

            case 2:
              request = _context3.sent;
              location.reload;

            case 4:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function deleteFolder(_x2) {
      return _ref3.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
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
                  lineNumber: 85,
                  columnNumber: 19
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("th", {
                  children: "User ID"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 86,
                  columnNumber: 19
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("th", {
                  children: "Name Folder"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 87,
                  columnNumber: 19
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("th", {
                  children: "Create At"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 88,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 84,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 83,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("tbody", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("ul", {
                className: "list-group",
                children: (0,lodash__WEBPACK_IMPORTED_MODULE_6__.map)(folder, function (e, index) {
                  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("tr", {
                    onClick: function onClick() {
                      return next_router__WEBPACK_IMPORTED_MODULE_4___default().push("/tasks/[folder_id]", "/tasks/".concat(e === null || e === void 0 ? void 0 : e.folder_id));
                    },
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("td", {
                      children: e === null || e === void 0 ? void 0 : e.folder_id
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 96,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("td", {
                      children: e === null || e === void 0 ? void 0 : e.user_id
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 97,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("td", {
                      children: e === null || e === void 0 ? void 0 : e.name
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 98,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("td", {
                      children: e === null || e === void 0 ? void 0 : e.create_at
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 99,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("td", {
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("button", {
                        onClick: deleteFolder(e.folder_id),
                        "class": "btn btn-danger btn-circle btn-sm",
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("i", {
                          "class": "fas fa-trash"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 101,
                          columnNumber: 25
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 100,
                        columnNumber: 27
                      }, _this), " "]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 100,
                      columnNumber: 23
                    }, _this)]
                  }, index, true, {
                    fileName: _jsxFileName,
                    lineNumber: 95,
                    columnNumber: 21
                  }, _this);
                })
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 93,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 92,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("form", {
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
          lineNumber: 116,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("label", {
          htmlFor: "inputName",
          children: "Name "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
        className: "mt-4 mb-0",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
          className: "d-grid",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("button", {
            className: "btn btn-primary",
            type: "submit",
            children: "Create folder"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 127,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
        className: "mt-4 mb-0",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
          className: "d-grid"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 131,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 74,
    columnNumber: 5
  }, this);
}

_s(folder, "QJ4J+O8ymcBTT2blypD6VWNJuB8=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNjc5ZTI1MjllMWNkYzY4OTU1YTUuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFDZSxTQUFTTSxNQUFULEdBQWtCO0FBQUE7O0FBQUE7O0FBQy9CLE1BQU1DLE9BQU8sR0FBRyxRQUFnQ0MsWUFBWSxDQUFDQyxPQUFiLENBQXFCLFNBQXJCLENBQWhDLEdBQWtFLENBQWxGO0FBQ0EsTUFBTUMsS0FBSyxHQUFHLFFBQWdDRixZQUFZLENBQUNDLE9BQWIsQ0FBcUIsT0FBckIsQ0FBaEMsR0FBZ0UsQ0FBOUU7O0FBQ0Esa0JBQXdCUCwrQ0FBUSxDQUFDO0FBQy9CUyxJQUFBQSxJQUFJLEVBQUUsRUFEeUI7QUFFL0JKLElBQUFBLE9BQU8sRUFBRUE7QUFGc0IsR0FBRCxDQUFoQztBQUFBLE1BQU9LLElBQVA7QUFBQSxNQUFhQyxPQUFiOztBQUlBLG1CQUE0QlgsK0NBQVEsQ0FBQyxDQUFDLEVBQUQsQ0FBRCxDQUFwQztBQUFBLE1BQU9JLE1BQVA7QUFBQSxNQUFlUSxTQUFmOztBQUNBLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLENBQUQsRUFBTztBQUMxQkgsSUFBQUEsT0FBTyxpQ0FDRkQsSUFERSwyS0FFSkksQ0FBQyxDQUFDQyxNQUFGLENBQVNOLElBRkwsRUFFWUssQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBRnJCLEdBQVA7QUFJRCxHQUxEOztBQU9BLE1BQU1DLFFBQVE7QUFBQSxtVkFBRyxpQkFBT0gsQ0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDZkEsY0FBQUEsQ0FBQyxDQUFDSSxjQUFGO0FBRGU7QUFBQSxxQkFFT0MsS0FBSyxDQUFDLGtDQUFELEVBQXFDO0FBQzlEQyxnQkFBQUEsTUFBTSxFQUFFLE1BRHNEO0FBRTlEQyxnQkFBQUEsT0FBTyxFQUFFO0FBQ1BDLGtC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LFFBQWY7QUFBQSxpQ0FDRTtBQUFRLHFCQUFTLEVBQUMsaUJBQWxCO0FBQW9DLGdCQUFJLEVBQUMsUUFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVhGLGVBZ0JFO0FBQUssaUJBQVMsRUFBQyxXQUFmO0FBQUEsK0JBQ0U7QUFBSyxtQkFBUyxFQUFDO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FoQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBeENGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUZGO0FBa0VEOztHQXJJdUJUIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZm9sZGVycy9DcmVhdGVGb2xkZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tICcuLy4uL0NvbnRhaW5lcic7XHJcbmltcG9ydCB7bWFwfSBmcm9tIFwibG9kYXNoXCI7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZvbGRlcigpIHtcclxuICBjb25zdCB1c2VyX2lkID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcl9pZCcpIDogbnVsbFxyXG4gIGNvbnN0IHRva2VuID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKSA6IG51bGxcclxuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZSh7XHJcbiAgICBuYW1lOiBcIlwiLFxyXG4gICAgdXNlcl9pZDogdXNlcl9pZFxyXG4gIH0pO1xyXG4gIGNvbnN0IFtmb2xkZXIsIHNldEZvbGRlcl0gPSB1c2VTdGF0ZShbe31dKTtcclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgc2V0RGF0YSh7XHJcbiAgICAgIC4uLmRhdGEsXHJcbiAgICAgIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWVcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBjb25zdCBzZW5kRGF0YSA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjgwODAvYXBpL2ZvbGRlclwiLCB7XHJcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICB9LFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gIHVzZUVmZmVjdChhc3luYyAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo4MDgwL2FwaS9mb2xkZXIvXCIsIHtcclxuICAgICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgICBoZWFkZXJzOiBnZXRIZWFkZXJzKClcclxuICAgIH1cclxuICAgICk7XHJcblxyXG4gICAgY29uc3QgZm9sZGVyUyA9IGF3YWl0IHJlcXVlc3QuanNvbigpO1xyXG5jb25zb2xlLmxvZyhmb2xkZXJzKTtcclxuICAgIHNldEZvbGRlcihmb2xkZXJTKVxyXG4gIH0sIFtdKVxyXG5cclxuXHJcbiAgZnVuY3Rpb24gZ2V0SGVhZGVycygpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIFwiQWNjZXB0XCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgXCJBdXRob3JpemF0aW9uXCI6IHRva2VuXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgIGNvbnN0IGRlbGV0ZUZvbGRlciA9IGFzeW5jIChpZCk9PiB7XHJcbiAgIFxyXG5cclxuICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9hcGkvZm9sZGVyL1wiICsgaWQsIHtcclxuICAgICAgbWV0aG9kOiBcIkRFTEVURVwiLFxyXG4gICAgICBoZWFkZXJzOiBnZXRIZWFkZXJzKClcclxuICAgIH0pO1xyXG5cclxuICAgIGxvY2F0aW9uLnJlbG9hZDtcclxuICB9XHJcblxyXG5cclxuICByZXR1cm4gKFxyXG5cclxuICAgIDxkaXY+XHJcblxyXG5cclxuICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lci1mbHVpZCBweC00XCI+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkIG1iLTRcIj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgIDx0YWJsZSBpZD1cImZvbGRlcnNcIj5cclxuICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgIDx0aD5Gb2xkZXIgSUQ8L3RoPlxyXG4gICAgICAgICAgICAgICAgICA8dGg+VXNlciBJRDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgIDx0aD5OYW1lIEZvbGRlcjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgIDx0aD5DcmVhdGUgQXQ8L3RoPlxyXG4gICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICA8L3RoZWFkPlxyXG5cclxuICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAge21hcChmb2xkZXIsIChlLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e2luZGV4fSBvbkNsaWNrPXsoKSA9PiBSb3V0ZXIucHVzaChgL3Rhc2tzL1tmb2xkZXJfaWRdYCwgYC90YXNrcy8ke2U/LmZvbGRlcl9pZH1gKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2U/LmZvbGRlcl9pZH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRkPntlPy51c2VyX2lkfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2U/Lm5hbWV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0ZD57ZT8uY3JlYXRlX2F0fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGQ+PGJ1dHRvbiBvbkNsaWNrPXtkZWxldGVGb2xkZXIoZS5mb2xkZXJfaWQpfSBjbGFzcz1cImJ0biBidG4tZGFuZ2VyIGJ0bi1jaXJjbGUgYnRuLXNtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLXRyYXNoXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+IDwvdGQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICAgIDxmb3JtIG9uU3VibWl0PXtzZW5kRGF0YX0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWZsb2F0aW5nIG1iLTNcIj5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICBuYW1lPVwibmFtZVwiXHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJuYW1lXCJcclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImlucHV0TmFtZVwiPk5hbWUgPC9sYWJlbD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTQgbWItMFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWdyaWRcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIiB0eXBlPVwic3VibWl0XCI+Q3JlYXRlIGZvbGRlcjwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC00IG1iLTBcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1ncmlkXCI+XHJcblxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlJvdXRlciIsIkNvbnRhaW5lciIsIm1hcCIsImZvbGRlciIsInVzZXJfaWQiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwidG9rZW4iLCJuYW1lIiwiZGF0YSIsInNldERhdGEiLCJzZXRGb2xkZXIiLCJoYW5kbGVDaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJzZW5kRGF0YSIsInByZXZlbnREZWZhdWx0IiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiQWNjZXB0IiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZXF1ZXN0IiwiZ2V0SGVhZGVycyIsImpzb24iLCJmb2xkZXJTIiwiY29uc29sZSIsImxvZyIsImZvbGRlcnMiLCJkZWxldGVGb2xkZXIiLCJpZCIsImxvY2F0aW9uIiwicmVsb2FkIiwiaW5kZXgiLCJwdXNoIiwiZm9sZGVyX2lkIiwiY3JlYXRlX2F0Il0sInNvdXJjZVJvb3QiOiIifQ==