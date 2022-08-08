import { TodoController } from './todoController';
import { UI } from './ui';

const tdc = new TodoController();
document.getElementById('btn').addEventListener('click',function(){
    UI.openModal('modal');
});
// window.addEventListener('click',function() {
//     UI.closeModal('modal');
// });
