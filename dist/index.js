/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/controller.ts":
/*!***************************!*\
  !*** ./src/controller.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Controller = void 0;
const todo_1 = __webpack_require__(/*! ./todo */ "./src/todo.ts");
const ui_1 = __webpack_require__(/*! ./ui */ "./src/ui.ts");
class Controller {
    constructor(window) {
        this.projects = [];
        this.todos = [];
        this.window = window;
        this.todos.push(new todo_1.Todo(1, 'Wash Dishes', '10/10/2024', false, 'default'));
        this.todos.push(new todo_1.Todo(2, 'Clean Room', '10/10/2024', false, 'default'));
        this.todos.push(new todo_1.Todo(3, 'Tidy Up House', '10/10/2024', false, 'default'));
        this.todos.push(new todo_1.Todo(4, 'Meal Prep', '10/10/2024', false, 'default'));
        let uiMap = {
            todoContainer: 'todo-container',
            projectContainer: 'project-container',
            modalContainer: 'modal-container',
        };
        this.ui = new ui_1.UI(uiMap);
        this.modal = document.getElementById('modal');
        window.onclick = function (event) {
            if (event.target === this.modal) {
                this.modal.style.display = 'none';
            }
        };
        this.modalBtn = document.getElementById('modal-btn');
        this.modalBtn.onclick = function () {
            this.ui.openModal();
        };
        this.frmBtn = document.getElementById('frm-btn');
        this.frmBtn.onclick = function () {
            this.addTodo();
        };
        this.ui.updateDisplay(this.todos);
    }
    addTodo() {
        const title = document.getElementById('todo-title');
        const date = document.getElementById('todo-date');
        const isDone = false;
        const project = document.getElementById('todo-project');
        const newId = this.todos.length + 1;
        this.todos.push(new todo_1.Todo(newId, title.value, date.value, isDone, project.value));
        this.ui.updateDisplay(this.todos);
        console.log('added todo');
    }
}
exports.Controller = Controller;


/***/ }),

/***/ "./src/todo.ts":
/*!*********************!*\
  !*** ./src/todo.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Todo = void 0;
class Todo {
    constructor(id, title, dueDate, isDone, project) {
        this.id = id;
        this.title = title;
        this.dueDate = dueDate;
        this.isDone = isDone;
        this.project = project;
    }
}
exports.Todo = Todo;


/***/ }),

/***/ "./src/ui.ts":
/*!*******************!*\
  !*** ./src/ui.ts ***!
  \*******************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UI = void 0;
class UI {
    constructor(obj) {
        this.todoContainer = obj.todoContainer;
        this.projectContainer = obj.projectContainer;
        this.modalContainer = obj.modalContainer;
    }
    openModal() {
        const modal = document.getElementById(this.modalContainer);
        if (modal) {
            modal.style.display = 'block';
        }
    }
    closeModal() {
        const modal = document.getElementById(this.modalContainer);
        if (modal) {
            modal.style.display = 'none';
        }
    }
    clearContent() {
        const projContainer = document.getElementById(this.projectContainer);
        const todoContainer = document.getElementById(this.todoContainer);
        if (projContainer && todoContainer) {
            projContainer.innerHTML = '';
            todoContainer.innerHTML = '';
        }
    }
    updateDisplay(arr) {
        const projContainer = document.getElementById(this.projectContainer);
        if (projContainer) {
            const projects = [];
            arr.forEach(e => {
                projects.push(e.project);
            });
            let unique = [];
            unique = projects.filter((val, idx, self) => {
                return self.indexOf(val) === idx;
            });
            unique.forEach(e => {
                const project = document.createElement('div');
                project.innerText = `${e}`;
                projContainer === null || projContainer === void 0 ? void 0 : projContainer.appendChild(project);
            });
        }
        const container = document.getElementById(this.todoContainer);
        if (container) {
            arr.forEach(e => {
                const todo = document.createElement('div');
                todo.classList.add('todo');
                todo.innerHTML = `
                <div class='todo-accent'></div>
                <div class='todo-title'>
                    <p class='todo-title-para'>${e.title}</p>
                </div>
                <div class='todo-date'>
                    <p class='todo-date-para'>${e.dueDate}</p>
                </date>
                `;
                container.appendChild(todo);
            });
        }
    }
}
exports.UI = UI;


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const controller_1 = __webpack_require__(/*! ./controller */ "./src/controller.ts");
const cont = new controller_1.Controller(window);

})();

/******/ })()
;
//# sourceMappingURL=index.js.map