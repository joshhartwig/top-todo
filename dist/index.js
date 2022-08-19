/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
        this.clearContent();
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
            let btnDiv = document.createElement('div');
            let btn = document.createElement('button');
            btn.innerText = 'Create New Todo';
            btnDiv.appendChild(btn);
            projContainer.appendChild(btnDiv);
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
const todo_1 = __webpack_require__(/*! ./todo */ "./src/todo.ts");
const ui_1 = __webpack_require__(/*! ./ui */ "./src/ui.ts");
let projects = [];
let todos = [];
const modal = document.getElementById('modal-container');
const modalBtn = document.getElementById('modal-btn');
const frmBtn = document.getElementById('frm-btn');
const title = document.getElementById('todo-title');
const date = document.getElementById('todo-date');
const project = document.getElementById('todo-project');
registerEventHandlers();
let ui = new ui_1.UI({
    todoContainer: 'todo-container',
    projectContainer: 'project-container',
    modalContainer: 'modal-container',
});
retrieveFromLocalStorage();
ui.updateDisplay(todos);
function registerEventHandlers() {
    window.onclick = function (e) {
        if (e.target === modal) {
            if (modal) {
                modal.style.display = 'none';
            }
        }
    };
    if (modalBtn) {
        modalBtn.onclick = () => {
            ui.openModal();
        };
    }
    if (frmBtn) {
        frmBtn.onclick = () => {
            newTodo();
        };
    }
}
function newTodo() {
    const id = todos.length + 1;
    todos.push(new todo_1.Todo(id, title.value, date.value, false, project.value));
    localStorage.setItem('todos', JSON.stringify(todos));
    ui.updateDisplay(todos);
    ui.closeModal();
}
function retrieveFromLocalStorage() {
    if (localStorage.getItem('todos') === null) {
        seedTodos();
    }
    else {
        let tmp = localStorage.getItem('todos');
        todos = JSON.parse(tmp);
    }
}
function seedTodos() {
    if (todos.length === 0) {
        todos.push(new todo_1.Todo(1, 'Wash Dishes', '10/10/2024', false, 'default'));
        todos.push(new todo_1.Todo(2, 'Clean Room', '10/10/2024', false, 'default'));
        todos.push(new todo_1.Todo(3, 'Tidy Up House', '10/10/2024', false, 'default'));
        todos.push(new todo_1.Todo(4, 'Meal Prep', '10/10/2024', false, 'default'));
    }
}

})();

/******/ })()
;
//# sourceMappingURL=index.js.map