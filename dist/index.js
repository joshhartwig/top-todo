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

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Todo\": () => (/* binding */ Todo)\n/* harmony export */ });\nclass Todo {\n    id;\n    priority;\n    title;\n    dueDate;\n    done;\n    project;\n    constructor (id, title, priority, dueDate, done, project){\n        this.id = id;\n        this.title = title;\n        this.priority = priority;\n        this.dueDate = dueDate;\n        this.done = done;\n        this.project = project;\n    }\n\n}\n\n//# sourceURL=webpack://top-todo/./src/todo.js?");

/***/ }),

/***/ "./src/todoController.js":
/*!*******************************!*\
  !*** ./src/todoController.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TodoController\": () => (/* binding */ TodoController)\n/* harmony export */ });\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ \"./src/todo.js\");\n/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui */ \"./src/ui.js\");\n\n\n\n\nclass TodoController {\n    todos\n\n    constructor(){\n        this.todos = [];\n        this.projects = [];\n        this.currentProjectIndex = 0;\n        this.seed();    \n        _ui__WEBPACK_IMPORTED_MODULE_1__.UI.createTodos('todo-container',this.todos);  \n        _ui__WEBPACK_IMPORTED_MODULE_1__.UI.createProjects('project-container', this.todos);\n    }\n\n    addTodo(title,priority,dueDate,project){\n        const newId = this.todos.length + 1;\n        this.todos.push(new _todo__WEBPACK_IMPORTED_MODULE_0__.Todo(newId,title,priority,dueDate,false,project));\n    }\n\n    seed(){\n        this.addTodo('Math Homework',2,'9/22/2022','Default');\n        this.addTodo('Laundry Day',1,'10/10/2022','Default');\n        this.addTodo('Pay Utils',3,'10/12/2022','Home');\n        this.addTodo('Rent Due',1,'9/20/22','Work');\n    }\n\n}\n\n//# sourceURL=webpack://top-todo/./src/todoController.js?");

/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"UI\": () => (/* binding */ UI)\n/* harmony export */ });\nclass UI {\n\n    // create a div for each todo item in our container\n    static createTodos(id, arr){\n        this.resetContent(id);\n\n        const container = document.getElementById(id);\n        arr.forEach(e => {\n            const todo = document.createElement('div');\n            todo.classList.add('todo');\n            todo.innerHTML = `\n            <div class='todo-accent'></div>\n            <div class='todo-title'>\n                <p class='todo-title-para'>${e.title}</p>\n            </div>\n            <div class='todo-date'>\n                <p class='todo-date-para'>${e.dueDate}</p>\n            </date>\n            `;\n            container.appendChild(todo);\n        });\n    }\n\n    // reset all html content in specified container\n    static resetContent(id){\n        const container = document.getElementById(id);\n        container.innerHTML = \"\";\n    }\n\n    // creates a div for projects in specific container, only one item per title found\n    static createProjects(id, arr){\n        this.resetContent(id);\n\n        let projects = new Set();\n        arr.forEach(e => {\n            projects.add(e.project);\n            console.log(e.project);\n        })\n\n        const container = document.getElementById(id);\n        projects.forEach(e => {\n            const project = document.createElement('div');\n            project.classList.add('project');\n            project.innerText = `#${e}`;\n            container.appendChild(project);\n        });\n    }\n}\n\n//# sourceURL=webpack://top-todo/./src/ui.js?");

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