/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Tareas.jsx":
/*!*******************************!*\
  !*** ./components/Tareas.jsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/home/llisho/Developer/AlmacenDePuertas/app/components/Tareas.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\nvar tareasIniciales = [{\n  id: 1,\n  title: 'Tarea 1',\n  description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores, voluptates nemo impedit maiores excepturi rem voluptate doloribus possimus sint hic non incidunt nesciunt dicta consequatur mollitia, aliquid ab debitis'\n}, {\n  id: 2,\n  title: 'Tarea 2',\n  description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores, voluptates nemo impedit maiores excepturi rem voluptate doloribus possimus sint hic non incidunt nesciunt dicta consequatur mollitia, aliquid ab debitis'\n}];\n\nvar Tareas = function Tareas() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(tareasIniciales),\n      tareas = _useState[0],\n      setTareas = _useState[1];\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n      children: \" Mis tareas pendientes\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 9\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.List, {\n      spacing: 3,\n      children: tareas.map(function (tarea) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ListItem, {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Center, {\n            bg: \"tomato\",\n            h: \"100px\",\n            color: \"white\",\n            children: tarea.title\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 26,\n            columnNumber: 21\n          }, _this)\n        }, tarea.id, false, {\n          fileName: _jsxFileName,\n          lineNumber: 25,\n          columnNumber: 17\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 9\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(Tareas, \"5MpwErdWLOOtm//UXAMtFuuzkv8=\");\n\n_c = Tareas;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Tareas);\n\nvar _c;\n\n$RefreshReg$(_c, \"Tareas\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UYXJlYXMuanN4P2RjZjgiXSwibmFtZXMiOlsidGFyZWFzSW5pY2lhbGVzIiwiaWQiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiVGFyZWFzIiwidXNlU3RhdGUiLCJ0YXJlYXMiLCJzZXRUYXJlYXMiLCJtYXAiLCJ0YXJlYSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUMsSUFBTUEsZUFBZSxHQUFHLENBQ3JCO0FBQUlDLElBQUUsRUFBRSxDQUFSO0FBQ0lDLE9BQUssRUFBRSxTQURYO0FBRUlDLGFBQVcsRUFBRTtBQUZqQixDQURxQixFQUtyQjtBQUFJRixJQUFFLEVBQUUsQ0FBUjtBQUNJQyxPQUFLLEVBQUUsU0FEWDtBQUVJQyxhQUFXLEVBQUU7QUFGakIsQ0FMcUIsQ0FBeEI7O0FBWUQsSUFBTUMsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUFBOztBQUFBLGtCQUVVQywrQ0FBUSxDQUFDTCxlQUFELENBRmxCO0FBQUEsTUFFWE0sTUFGVztBQUFBLE1BRUhDLFNBRkc7O0FBSWpCLHNCQUNHO0FBQUEsNEJBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERCxlQUVDLDhEQUFDLGtEQUFEO0FBQU0sYUFBTyxFQUFFLENBQWY7QUFBQSxnQkFDS0QsTUFBTSxDQUFDRSxHQUFQLENBQVcsVUFBQUMsS0FBSztBQUFBLDRCQUNiLDhEQUFDLHNEQUFEO0FBQUEsaUNBQ0ksOERBQUMsTUFBRDtBQUFRLGNBQUUsRUFBQyxRQUFYO0FBQW9CLGFBQUMsRUFBQyxPQUF0QjtBQUE4QixpQkFBSyxFQUFDLE9BQXBDO0FBQUEsc0JBQ0tBLEtBQUssQ0FBQ1A7QUFEWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREosV0FBZU8sS0FBSyxDQUFDUixFQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURhO0FBQUEsT0FBaEI7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkQ7QUFBQSxrQkFESDtBQWNILENBbEJEOztHQUFNRyxNOztLQUFBQSxNO0FBb0JOLCtEQUFlQSxNQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9UYXJlYXMuanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGlzdCwgTGlzdEl0ZW0gfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuIGNvbnN0IHRhcmVhc0luaWNpYWxlcyA9IFtcbiAgICB7ICAgaWQ6IDEsIFxuICAgICAgICB0aXRsZTogJ1RhcmVhIDEnLCBcbiAgICAgICAgZGVzY3JpcHRpb246ICdMb3JlbSwgaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gQXNwZXJpb3Jlcywgdm9sdXB0YXRlcyBuZW1vIGltcGVkaXQgbWFpb3JlcyBleGNlcHR1cmkgcmVtIHZvbHVwdGF0ZSBkb2xvcmlidXMgcG9zc2ltdXMgc2ludCBoaWMgbm9uIGluY2lkdW50IG5lc2NpdW50IGRpY3RhIGNvbnNlcXVhdHVyIG1vbGxpdGlhLCBhbGlxdWlkIGFiIGRlYml0aXMnIFxuICAgIH0sXG4gICAgeyAgIGlkOiAyLCBcbiAgICAgICAgdGl0bGU6ICdUYXJlYSAyJywgXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnTG9yZW0sIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEFzcGVyaW9yZXMsIHZvbHVwdGF0ZXMgbmVtbyBpbXBlZGl0IG1haW9yZXMgZXhjZXB0dXJpIHJlbSB2b2x1cHRhdGUgZG9sb3JpYnVzIHBvc3NpbXVzIHNpbnQgaGljIG5vbiBpbmNpZHVudCBuZXNjaXVudCBkaWN0YSBjb25zZXF1YXR1ciBtb2xsaXRpYSwgYWxpcXVpZCBhYiBkZWJpdGlzJyBcbiAgICB9XG5dXG5cblxuY29uc3QgVGFyZWFzID0gKCkgPT4ge1xuXG4gICBjb25zdCBbdGFyZWFzLCBzZXRUYXJlYXNdID0gdXNlU3RhdGUodGFyZWFzSW5pY2lhbGVzKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICA8PlxuICAgICAgICA8aDI+IE1pcyB0YXJlYXMgcGVuZGllbnRlczwvaDI+XG4gICAgICAgIDxMaXN0IHNwYWNpbmc9ezN9PlxuICAgICAgICAgICAge3RhcmVhcy5tYXAodGFyZWEgPT4gXG4gICAgICAgICAgICAgICAgPExpc3RJdGVtIGtleT17dGFyZWEuaWR9PiBcbiAgICAgICAgICAgICAgICAgICAgPENlbnRlciBiZz1cInRvbWF0b1wiIGg9XCIxMDBweFwiIGNvbG9yPVwid2hpdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0YXJlYS50aXRsZX0gXG4gICAgICAgICAgICAgICAgICAgIDwvQ2VudGVyPlxuICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+ICAgIFxuICAgICAgICAgICAgKX1cbiAgICAgICAgPC9MaXN0PlxuICAgICAgICA8Lz5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBUYXJlYXM7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Tareas.jsx\n");

/***/ })

});