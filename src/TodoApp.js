import Todo from "./Todo";
import TodosManager from "./TodosManager";

class TodoApp {
    constructor() {
        this.todoMap = new WeakMap();
        this.todo_container = document.getElementsByClassName('todo-container').item(0);
        this.add_todo = document.getElementsByClassName('add-todo').item(0);
        this.title = document.getElementsByClassName('title').item(0);
        this.span_left = document.getElementsByName('span_left').item(0);
        this.todosManager = new TodosManager(this);
    }

    init() {
        this.addTodoAddListener();
        this.addToggleListener();
        this.render();
    }

    render() {
        this.todosManager.getList().forEach(todoDom => {
            this.todo_container.appendChild(todoDom);
        });
        this.renderLeft();
        this.renderDate();
    }

    renderLeft(){
        this.span_left.innerText = this.todosManager.leftTodoCount();
    }

    renderDate(){
        let now = new Date();
        let strDate = (now.getMonth() + 1) + ' 월 ' + now.getDate() + ' 일 ';
        this.title.getElementsByTagName('h2').h2_date.innerText = strDate;
    }

    addToggleListener() {
        this.todo_container.addEventListener('change', elem => {
            const todoDom = elem.target.parentNode;
            this.todoMap.get(todoDom).toggle();
        });
    }

    addTodoAddListener() {
        this.add_todo.addEventListener('click', elem => {
            if(elem.target.name === 'btn_add'){
                let newContents = this.add_todo.querySelector('input');
                this.procAddTodo(newContents);
                this.render();
            }
        });
    }

    procAddTodo(newContentsDom){
        if(newContentsDom.value === '') return;
        this.todosManager.addTodo(newContentsDom.value);
        newContentsDom.value = "";
    }

}

export default TodoApp;