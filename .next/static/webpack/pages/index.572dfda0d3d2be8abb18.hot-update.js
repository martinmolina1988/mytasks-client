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
            setFolder(folderS);

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

  function deleteFolder(_x2) {
    return _deleteFolder.apply(this, arguments);
  }

  function _deleteFolder() {
    _deleteFolder = (0,C_Users_martin_Desktop_proyectos_SpringBoot_mytask_mytask_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/C_Users_martin_Desktop_proyectos_SpringBoot_mytask_mytask_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee3(id) {
      var request;
      return C_Users_martin_Desktop_proyectos_SpringBoot_mytask_mytask_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              if (confirm("¿Desea eliminar el usuario?")) {
                _context3.next = 2;
                break;
              }

              return _context3.abrupt("return");

            case 2:
              _context3.next = 4;
              return fetch("http://localhost:8080/api/folder/" + id, {
                method: "DELETE",
                headers: getHeaders()
              });

            case 4:
              request = _context3.sent;
              location.reload;

            case 6:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));
    return _deleteFolder.apply(this, arguments);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_Container__WEBPACK_IMPORTED_MODULE_5__.default, {
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
                  lineNumber: 86,
                  columnNumber: 19
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("th", {
                  children: "User ID"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 87,
                  columnNumber: 19
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("th", {
                  children: "Name Folder"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 88,
                  columnNumber: 19
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("th", {
                  children: "Create At"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 89,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 85,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 84,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("tbody", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("ul", {
                className: "list-group",
                children: (0,lodash__WEBPACK_IMPORTED_MODULE_6__.map)(folder, function (e, index) {
                  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("tr", {
                    onClick: function onClick() {
                      return next_router__WEBPACK_IMPORTED_MODULE_4___default().push("/tasks/[id]", "/tasks/".concat(e.folder_id));
                    },
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("td", {
                      children: e.folder_id
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 97,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("td", {
                      children: e.user_id
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 98,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("td", {
                      children: e.name
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 99,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("td", {
                      children: e.create_at
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 100,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("td", {
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("a", {
                        href: "#",
                        onClick: deleteFolder(e.folder_id),
                        "class": "btn btn-danger btn-circle btn-sm",
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("i", {
                          "class": "fas fa-trash"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 102,
                          columnNumber: 25
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 101,
                        columnNumber: 27
                      }, _this), " "]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 101,
                      columnNumber: 23
                    }, _this)]
                  }, index, true, {
                    fileName: _jsxFileName,
                    lineNumber: 96,
                    columnNumber: 21
                  }, _this);
                })
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 94,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 93,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 78,
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
          lineNumber: 117,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("label", {
          htmlFor: "inputName",
          children: "Name "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 116,
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
            lineNumber: 128,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
        className: "mt-4 mb-0",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
          className: "d-grid"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 132,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 75,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNTcyZGZkYTBkM2QyYmU4YWJiMTguaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFDZSxTQUFTTSxNQUFULEdBQWtCO0FBQUE7O0FBQUE7O0FBQy9CLE1BQU1DLE9BQU8sR0FBRyxRQUFnQ0MsWUFBWSxDQUFDQyxPQUFiLENBQXFCLFNBQXJCLENBQWhDLEdBQWtFLENBQWxGO0FBQ0EsTUFBTUMsS0FBSyxHQUFHLFFBQWdDRixZQUFZLENBQUNDLE9BQWIsQ0FBcUIsT0FBckIsQ0FBaEMsR0FBZ0UsQ0FBOUU7O0FBQ0Esa0JBQXdCUCwrQ0FBUSxDQUFDO0FBQy9CUyxJQUFBQSxJQUFJLEVBQUUsRUFEeUI7QUFFL0JKLElBQUFBLE9BQU8sRUFBRUE7QUFGc0IsR0FBRCxDQUFoQztBQUFBLE1BQU9LLElBQVA7QUFBQSxNQUFhQyxPQUFiOztBQUlBLG1CQUE0QlgsK0NBQVEsQ0FBQyxDQUFDLEVBQUQsQ0FBRCxDQUFwQztBQUFBLE1BQU9JLE1BQVA7QUFBQSxNQUFlUSxTQUFmOztBQUNBLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLENBQUQsRUFBTztBQUMxQkgsSUFBQUEsT0FBTyxpQ0FDRkQsSUFERSwyS0FFSkksQ0FBQyxDQUFDQyxNQUFGLENBQVNOLElBRkwsRUFFWUssQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBRnJCLEdBQVA7QUFJRCxHQUxEOztBQU9BLE1BQU1DLFFBQVE7QUFBQSxtVkFBRyxpQkFBT0gsQ0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDZkEsY0FBQUEsQ0FBQyxDQUFDSSxjQUFGO0FBRGU7QUFBQSxxQkFFT0MsS0FBSyxDQUFDLGtDQUFELEVBQXFDO0FBQzlEQyxnQkFBQUEsTUFBTSxFQUFFLE1BRHNEO0FBRTlEQyxnQkFBQUEsT0FBTyxFQUFFO0FBQ1BDLGtC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b0MsZ0JBQUksRUFBQyxRQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBWEYsZUFnQkU7QUFBSyxpQkFBUyxFQUFDLFdBQWY7QUFBQSwrQkFDRTtBQUFLLG1CQUFTLEVBQUM7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWhCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF4Q0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBRkY7QUFrRUQ7O0dBdEl1QlQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9mb2xkZXJzL0NyZWF0ZUZvbGRlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJy4vLi4vQ29udGFpbmVyJztcclxuaW1wb3J0IHttYXB9IGZyb20gXCJsb2Rhc2hcIjtcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZm9sZGVyKCkge1xyXG4gIGNvbnN0IHVzZXJfaWQgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyX2lkJykgOiBudWxsXHJcbiAgY29uc3QgdG9rZW4gPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpIDogbnVsbFxyXG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKHtcclxuICAgIG5hbWU6IFwiXCIsXHJcbiAgICB1c2VyX2lkOiB1c2VyX2lkXHJcbiAgfSk7XHJcbiAgY29uc3QgW2ZvbGRlciwgc2V0Rm9sZGVyXSA9IHVzZVN0YXRlKFt7fV0pO1xyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICBzZXREYXRhKHtcclxuICAgICAgLi4uZGF0YSxcclxuICAgICAgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGNvbnN0IHNlbmREYXRhID0gYXN5bmMgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9hcGkvZm9sZGVyXCIsIHtcclxuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgdXNlRWZmZWN0KGFzeW5jICgpID0+IHtcclxuXHJcbiAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjgwODAvYXBpL2ZvbGRlci9cIiwge1xyXG4gICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgIGhlYWRlcnM6IGdldEhlYWRlcnMoKVxyXG4gICAgfVxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCBmb2xkZXJTID0gYXdhaXQgcmVxdWVzdC5qc29uKCk7XHJcblxyXG4gICAgc2V0Rm9sZGVyKGZvbGRlclMpXHJcbiAgfSwgW10pXHJcblxyXG4gIGZ1bmN0aW9uIGdldEhlYWRlcnMoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBcIkFjY2VwdFwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgIFwiQXV0aG9yaXphdGlvblwiOiB0b2tlblxyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUZvbGRlcihpZCkge1xyXG4gICAgaWYgKCFjb25maXJtKFwiwr9EZXNlYSBlbGltaW5hciBlbCB1c3VhcmlvP1wiKSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo4MDgwL2FwaS9mb2xkZXIvXCIgKyBpZCwge1xyXG4gICAgICBtZXRob2Q6IFwiREVMRVRFXCIsXHJcbiAgICAgIGhlYWRlcnM6IGdldEhlYWRlcnMoKVxyXG4gICAgfSk7XHJcblxyXG4gICAgbG9jYXRpb24ucmVsb2FkO1xyXG4gIH1cclxuXHJcblxyXG4gIHJldHVybiAoXHJcblxyXG4gICAgPENvbnRhaW5lciB0aXRsZT1cIkZvbGRlclwiPlxyXG5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXItZmx1aWQgcHgtNFwiPlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZCBtYi00XCI+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICA8dGFibGUgaWQ9XCJmb2xkZXJzXCI+XHJcbiAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICA8dGg+Rm9sZGVyIElEPC90aD5cclxuICAgICAgICAgICAgICAgICAgPHRoPlVzZXIgSUQ8L3RoPlxyXG4gICAgICAgICAgICAgICAgICA8dGg+TmFtZSBGb2xkZXI8L3RoPlxyXG4gICAgICAgICAgICAgICAgICA8dGg+Q3JlYXRlIEF0PC90aD5cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgPC90aGVhZD5cclxuXHJcbiAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgIHttYXAoZm9sZGVyLCAoZSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtpbmRleH0gb25DbGljaz17KCkgPT4gUm91dGVyLnB1c2goYC90YXNrcy9baWRdYCwgYC90YXNrcy8ke2UuZm9sZGVyX2lkfWApfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0ZD57ZS5mb2xkZXJfaWR9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0ZD57ZS51c2VyX2lkfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2UubmFtZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRkPntlLmNyZWF0ZV9hdH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRkPjxhIGhyZWY9XCIjXCIgb25DbGljaz17ZGVsZXRlRm9sZGVyKGUuZm9sZGVyX2lkKX0gY2xhc3M9XCJidG4gYnRuLWRhbmdlciBidG4tY2lyY2xlIGJ0bi1zbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS10cmFzaFwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvYT4gPC90ZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgPGZvcm0gb25TdWJtaXQ9e3NlbmREYXRhfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZmxvYXRpbmcgbWItM1wiPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIm5hbWVcIlxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiaW5wdXROYW1lXCI+TmFtZSA8L2xhYmVsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNCBtYi0wXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZ3JpZFwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiIHR5cGU9XCJzdWJtaXRcIj5DcmVhdGUgZm9sZGVyPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTQgbWItMFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWdyaWRcIj5cclxuXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKTtcclxufSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiUm91dGVyIiwiQ29udGFpbmVyIiwibWFwIiwiZm9sZGVyIiwidXNlcl9pZCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJ0b2tlbiIsIm5hbWUiLCJkYXRhIiwic2V0RGF0YSIsInNldEZvbGRlciIsImhhbmRsZUNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInNlbmREYXRhIiwicHJldmVudERlZmF1bHQiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJBY2NlcHQiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInJlcXVlc3QiLCJnZXRIZWFkZXJzIiwianNvbiIsImZvbGRlclMiLCJkZWxldGVGb2xkZXIiLCJpZCIsImNvbmZpcm0iLCJsb2NhdGlvbiIsInJlbG9hZCIsImluZGV4IiwicHVzaCIsImZvbGRlcl9pZCIsImNyZWF0ZV9hdCJdLCJzb3VyY2VSb290IjoiIn0=