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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/home/llisho/Developer/AlmacenDePuertas/app/components/Tareas.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\nvar tareasIniciales = [{\n  id: 1,\n  title: 'Tarea 1',\n  description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores, voluptates nemo impedit maiores excepturi rem voluptate doloribus possimus sint hic non incidunt nesciunt dicta consequatur mollitia, aliquid ab debitis'\n}, {\n  id: 2,\n  title: 'Tarea 2',\n  description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores, voluptates nemo impedit maiores excepturi rem voluptate doloribus possimus sint hic non incidunt nesciunt dicta consequatur mollitia, aliquid ab debitis'\n}];\n\nvar Tareas = function Tareas() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(tareasIniciales),\n      tareas = _useState[0],\n      setTareas = _useState[1];\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n      children: \" Mis tareas pendientes\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 9\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.List, {\n      spacing: 3,\n      children: tareas.map(function (tarea) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ListItem, {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {\n            bg: \"teal.400\",\n            p: \"10px\",\n            h: \"100%\",\n            w: \"80vw\",\n            color: \"white\",\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Heading, {\n              as: \"h2\",\n              size: \"xl\",\n              children: [tarea.title, \" \"]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 27,\n              columnNumber: 25\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {\n              fontSize: \"md\",\n              isTruncated: true,\n              children: tarea.description\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 28,\n              columnNumber: 25\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {\n              colorScheme: \"teal\",\n              size: \"sm\",\n              children: \"Borrar\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 29,\n              columnNumber: 25\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 26,\n            columnNumber: 21\n          }, _this)\n        }, tarea.id, false, {\n          fileName: _jsxFileName,\n          lineNumber: 25,\n          columnNumber: 17\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 9\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(Tareas, \"5MpwErdWLOOtm//UXAMtFuuzkv8=\");\n\n_c = Tareas;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Tareas);\n\nvar _c;\n\n$RefreshReg$(_c, \"Tareas\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UYXJlYXMuanN4P2RjZjgiXSwibmFtZXMiOlsidGFyZWFzSW5pY2lhbGVzIiwiaWQiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiVGFyZWFzIiwidXNlU3RhdGUiLCJ0YXJlYXMiLCJzZXRUYXJlYXMiLCJtYXAiLCJ0YXJlYSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUMsSUFBTUEsZUFBZSxHQUFHLENBQ3JCO0FBQUlDLElBQUUsRUFBRSxDQUFSO0FBQ0lDLE9BQUssRUFBRSxTQURYO0FBRUlDLGFBQVcsRUFBRTtBQUZqQixDQURxQixFQUtyQjtBQUFJRixJQUFFLEVBQUUsQ0FBUjtBQUNJQyxPQUFLLEVBQUUsU0FEWDtBQUVJQyxhQUFXLEVBQUU7QUFGakIsQ0FMcUIsQ0FBeEI7O0FBWUQsSUFBTUMsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUFBOztBQUFBLGtCQUVVQywrQ0FBUSxDQUFDTCxlQUFELENBRmxCO0FBQUEsTUFFWE0sTUFGVztBQUFBLE1BRUhDLFNBRkc7O0FBSWpCLHNCQUNHO0FBQUEsNEJBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERCxlQUVDLDhEQUFDLGtEQUFEO0FBQU0sYUFBTyxFQUFFLENBQWY7QUFBQSxnQkFDS0QsTUFBTSxDQUFDRSxHQUFQLENBQVcsVUFBQUMsS0FBSztBQUFBLDRCQUNiLDhEQUFDLHNEQUFEO0FBQUEsaUNBQ0ksOERBQUMsaURBQUQ7QUFBSyxjQUFFLEVBQUMsVUFBUjtBQUFtQixhQUFDLEVBQUMsTUFBckI7QUFBNEIsYUFBQyxFQUFDLE1BQTlCO0FBQXFDLGFBQUMsRUFBQyxNQUF2QztBQUE4QyxpQkFBSyxFQUFDLE9BQXBEO0FBQUEsb0NBQ0ksOERBQUMscURBQUQ7QUFBUyxnQkFBRSxFQUFDLElBQVo7QUFBaUIsa0JBQUksRUFBQyxJQUF0QjtBQUFBLHlCQUE0QkEsS0FBSyxDQUFDUCxLQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREosZUFFSSw4REFBQyxrREFBRDtBQUFNLHNCQUFRLEVBQUMsSUFBZjtBQUFvQix5QkFBVyxNQUEvQjtBQUFBLHdCQUFpQ08sS0FBSyxDQUFDTjtBQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZKLGVBR0ksOERBQUMsb0RBQUQ7QUFBUSx5QkFBVyxFQUFDLE1BQXBCO0FBQTJCLGtCQUFJLEVBQUMsSUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREosV0FBZU0sS0FBSyxDQUFDUixFQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURhO0FBQUEsT0FBaEI7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkQ7QUFBQSxrQkFESDtBQWdCSCxDQXBCRDs7R0FBTUcsTTs7S0FBQUEsTTtBQXNCTiwrREFBZUEsTUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvVGFyZWFzLmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExpc3QsIExpc3RJdGVtLCBCb3gsIEJ1dHRvbiwgSGVhZGluZywgVGV4dCB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG4gY29uc3QgdGFyZWFzSW5pY2lhbGVzID0gW1xuICAgIHsgICBpZDogMSwgXG4gICAgICAgIHRpdGxlOiAnVGFyZWEgMScsIFxuICAgICAgICBkZXNjcmlwdGlvbjogJ0xvcmVtLCBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBBc3BlcmlvcmVzLCB2b2x1cHRhdGVzIG5lbW8gaW1wZWRpdCBtYWlvcmVzIGV4Y2VwdHVyaSByZW0gdm9sdXB0YXRlIGRvbG9yaWJ1cyBwb3NzaW11cyBzaW50IGhpYyBub24gaW5jaWR1bnQgbmVzY2l1bnQgZGljdGEgY29uc2VxdWF0dXIgbW9sbGl0aWEsIGFsaXF1aWQgYWIgZGViaXRpcycgXG4gICAgfSxcbiAgICB7ICAgaWQ6IDIsIFxuICAgICAgICB0aXRsZTogJ1RhcmVhIDInLCBcbiAgICAgICAgZGVzY3JpcHRpb246ICdMb3JlbSwgaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gQXNwZXJpb3Jlcywgdm9sdXB0YXRlcyBuZW1vIGltcGVkaXQgbWFpb3JlcyBleGNlcHR1cmkgcmVtIHZvbHVwdGF0ZSBkb2xvcmlidXMgcG9zc2ltdXMgc2ludCBoaWMgbm9uIGluY2lkdW50IG5lc2NpdW50IGRpY3RhIGNvbnNlcXVhdHVyIG1vbGxpdGlhLCBhbGlxdWlkIGFiIGRlYml0aXMnIFxuICAgIH1cbl1cblxuXG5jb25zdCBUYXJlYXMgPSAoKSA9PiB7XG5cbiAgIGNvbnN0IFt0YXJlYXMsIHNldFRhcmVhc10gPSB1c2VTdGF0ZSh0YXJlYXNJbmljaWFsZXMpXG5cbiAgICByZXR1cm4gKFxuICAgICAgIDw+XG4gICAgICAgIDxoMj4gTWlzIHRhcmVhcyBwZW5kaWVudGVzPC9oMj5cbiAgICAgICAgPExpc3Qgc3BhY2luZz17M30+XG4gICAgICAgICAgICB7dGFyZWFzLm1hcCh0YXJlYSA9PiBcbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW0ga2V5PXt0YXJlYS5pZH0+IFxuICAgICAgICAgICAgICAgICAgICA8Qm94IGJnPVwidGVhbC40MDBcIiBwPVwiMTBweFwiIGg9XCIxMDAlXCIgdz1cIjgwdndcIiBjb2xvcj1cIndoaXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SGVhZGluZyBhcz1cImgyXCIgc2l6ZT1cInhsXCI+e3RhcmVhLnRpdGxlfSA8L0hlYWRpbmc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBmb250U2l6ZT1cIm1kXCIgaXNUcnVuY2F0ZWQ+e3RhcmVhLmRlc2NyaXB0aW9ufTwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY29sb3JTY2hlbWU9XCJ0ZWFsXCIgc2l6ZT1cInNtXCIgPkJvcnJhcjwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPiAgICBcbiAgICAgICAgICAgICl9XG4gICAgICAgIDwvTGlzdD5cbiAgICAgICAgPC8+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgVGFyZWFzOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Tareas.jsx\n");

/***/ })

});