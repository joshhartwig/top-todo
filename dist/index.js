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

/***/ "./src/controller.ts":
/*!***************************!*\
  !*** ./src/controller.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Controller = void 0;\nconst todo_1 = __webpack_require__(/*! ./todo */ \"./src/todo.ts\");\nconst ui_1 = __webpack_require__(/*! ./ui */ \"./src/ui.ts\");\nclass Controller {\n    constructor(window) {\n        this.projects = [];\n        this.todos = [];\n        this.todos.push(new todo_1.Todo(1, 'Wash Dishes', '10/10/2024', false, 'default'));\n        this.todos.push(new todo_1.Todo(2, 'Clean Room', '10/10/2024', false, 'default'));\n        this.todos.push(new todo_1.Todo(3, 'Tidy Up House', '10/10/2024', false, 'default'));\n        this.todos.push(new todo_1.Todo(4, 'Meal Prep', '10/10/2024', false, 'default'));\n        this.window = window;\n        this.window.onclick = function (event) {\n            if (event.target === this.modal) {\n                this.modal.style.display = 'none';\n            }\n        };\n        this.modal = document.getElementById('modal');\n        this.button = document.getElementById('btn');\n        this.button.onclick = function () {\n            ui_1.UI.openModal('modal');\n        };\n        this.formbutton = document.getElementById('frm-btn');\n        this.formbutton.onclick = function () {\n            this.addTodo();\n        };\n        ui_1.UI.updateDisplay('todo-container', 'project-container', this.todos);\n    }\n    addTodo() {\n        const title = document.getElementById('todo-title');\n        const date = document.getElementById('todo-date');\n        const isDone = false;\n        const project = document.getElementById('todo-project');\n        const newId = this.todos.length + 1;\n        this.todos.push(new todo_1.Todo(newId, title.value, date.value, isDone, project.value));\n        ui_1.UI.updateDisplay('todo-container', 'project-container', this.todos);\n        console.log('added todo');\n    }\n    openModal() {\n        ui_1.UI.openModal('modal');\n    }\n    closeModal() {\n        ui_1.UI.closeModal('modal');\n    }\n}\nexports.Controller = Controller;\n\n\n//# sourceURL=webpack://top-todo/./src/controller.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst controller_1 = __webpack_require__(/*! ./controller */ \"./src/controller.ts\");\nconst cont = new controller_1.Controller(window);\n\n\n//# sourceURL=webpack://top-todo/./src/index.ts?");

/***/ }),

/***/ "./src/todo.ts":
/*!*********************!*\
  !*** ./src/todo.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Todo = void 0;\nclass Todo {\n    constructor(id, title, dueDate, isDone, project) {\n        this.id = id;\n        this.title = title;\n        this.dueDate = dueDate;\n        this.isDone = isDone;\n        this.project = project;\n    }\n}\nexports.Todo = Todo;\n\n\n//# sourceURL=webpack://top-todo/./src/todo.ts?");

/***/ }),

/***/ "./src/ui.ts":
/*!*******************!*\
  !*** ./src/ui.ts ***!
  \*******************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.UI = void 0;\nclass UI {\n    static openModal(id) {\n        const modal = document.getElementById(id);\n        if (modal) {\n            modal.style.display = 'block';\n        }\n    }\n    static closeModal(id) {\n        const modal = document.getElementById(id);\n        if (modal) {\n            modal.style.display = 'none';\n        }\n    }\n    static clearContent(tdContainerId, prjContainerId) {\n        const projContainer = document.getElementById(prjContainerId);\n        const todoContainer = document.getElementById(tdContainerId);\n        if (projContainer && todoContainer) {\n            projContainer.innerHTML = '';\n            todoContainer.innerHTML = '';\n        }\n    }\n    static updateDisplay(tdContainerId, prjContainerId, arr) {\n        const projContainer = document.getElementById(prjContainerId);\n        if (projContainer) {\n            const projects = [];\n            arr.forEach(e => {\n                projects.push(e.project);\n            });\n            let unique = [];\n            unique = projects.filter((val, idx, self) => {\n                return self.indexOf(val) === idx;\n            });\n            unique.forEach(e => {\n                const project = document.createElement('div');\n                project.innerText = `${e}`;\n                projContainer === null || projContainer === void 0 ? void 0 : projContainer.appendChild(project);\n            });\n        }\n        const container = document.getElementById(tdContainerId);\n        if (container) {\n            arr.forEach(e => {\n                const todo = document.createElement('div');\n                todo.classList.add('todo');\n                todo.innerHTML = `\n                <div class='todo-accent'></div>\n                <div class='todo-title'>\n                    <p class='todo-title-para'>${e.title}</p>\n                </div>\n                <div class='todo-date'>\n                    <p class='todo-date-para'>${e.dueDate}</p>\n                </date>\n                `;\n                container.appendChild(todo);\n            });\n        }\n        console.log('ran updateDisplay');\n    }\n}\nexports.UI = UI;\n\n\n//# sourceURL=webpack://top-todo/./src/ui.ts?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;