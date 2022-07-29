/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _todoController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoController */ \"./src/todoController.js\");\n\n\nconst tdc = new _todoController__WEBPACK_IMPORTED_MODULE_0__.TodoController();\n\n\n//# sourceURL=webpack://top-todo/./src/index.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Project\": () => (/* binding */ Project)\n/* harmony export */ });\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ \"./src/todo.js\");\n\n\nclass Project {\n    title;\n    todos = [];\n    constructor(title){\n        this.title = title;\n        this.todos = [];\n    }\n\n    // adds todo item to array\n    addTodo(todo) {\n        this.todos.push(todo);\n        return true;\n        // refactor to check if todo.id exists when adding\n    }\n\n    // removes todo by id\n    removeTodo(id) {\n        // fix me\n    }\n}\n\n//# sourceURL=webpack://top-todo/./src/project.js?");

/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Todo\": () => (/* binding */ Todo)\n/* harmony export */ });\nclass Todo {\n    id;\n    priority;\n    title;\n    description;\n    dueDate;\n    done;\n    constructor (id, title, description, priority, dueDate, done){\n        this.id = id;\n        this.title = title;\n        this.description = description;\n        this.priority = priority;\n        this.dueDate = dueDate;\n        this.done = done;\n    }\n\n}\n\n//# sourceURL=webpack://top-todo/./src/todo.js?");

/***/ }),

/***/ "./src/todoController.js":
/*!*******************************!*\
  !*** ./src/todoController.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TodoController\": () => (/* binding */ TodoController)\n/* harmony export */ });\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo */ \"./src/todo.js\");\n/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui */ \"./src/ui.js\");\n\n\n\n\nclass TodoController {\n    projects = [];\n    currentProjectIndex;\n    constructor(){\n        this.currentProjectIndex = 0;\n        this.seedProject();\n        _ui__WEBPACK_IMPORTED_MODULE_2__.UI.createTodos('todo-container',this.projects[this.currentProjectIndex].todos);\n    }\n\n    addProject(title){\n        if(this.projects.length == 0){\n            this.projects.push(new _project__WEBPACK_IMPORTED_MODULE_0__.Project(title))\n        }\n    }\n\n    seedProject(){\n        const project = new _project__WEBPACK_IMPORTED_MODULE_0__.Project('default');\n        const todo1 = new _todo__WEBPACK_IMPORTED_MODULE_1__.Todo(1,'Clean Dishes','Clean Dishes',1,'10/10/2025',false);\n        const todo2 = new _todo__WEBPACK_IMPORTED_MODULE_1__.Todo(2,'Laundry','Clean clothes',1,'10/10/2025',false);\n        const todo3 = new _todo__WEBPACK_IMPORTED_MODULE_1__.Todo(3,'Pack Suitcases','Business Travel',1,'10/10/2025',false);\n        project.addTodo(todo1);\n        project.addTodo(todo2);\n        project.addTodo(todo3);\n    }\n\n}\n\n//# sourceURL=webpack://top-todo/./src/todoController.js?");

/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"UI\": () => (/* binding */ UI)\n/* harmony export */ });\nclass UI {\n    static createTodos(id, arr){\n        this.resetContent(id);\n\n        const container = document.getElementById(id);\n        arr.forEach(e => {\n            const todo = document.createElement('div');\n            todo.innerHTML = `\n            <ul>\n                <li>${e.title}</li>\n                <li>${e.description}</li>\n                <li>${e.dueDate}</li>\n            </ul>\n            `;\n            container.appendChild(todo);\n        });\n    }\n\n    static resetContent(id){\n        const container = document.getElementById(id);\n        container.innerHTML = '';\n    }\n\n    static createProjects(id, arr){\n        this.resetContent(id);\n\n        const container = document.getElementById(id);\n        arr.forEach(e => {\n            const project = document.createElement('div');\n            project.innerText = e.title;\n            container.appendChild(project);\n        })\n    }\n}\n\n//# sourceURL=webpack://top-todo/./src/ui.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;