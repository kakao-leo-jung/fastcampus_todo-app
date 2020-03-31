import Todo from './Todo';

class TodosManager{
    constructor(app) {
        this.app = app;
        this.leftCount = 0;
        this.todoList = new Array();
        this.addTodo("시험1");
        this.addTodo("시험2");
        this.addTodo("시험3");
    }

    leftTodoCount(){
        return this.leftCount;
    }

    addTodo(contents, done = false){
        let newTodo = new Todo(contents, false, this);
        let newTodoDom = this.makeTodoDom(newTodo);
        this.leftCount++;
        this.todoList.push(newTodoDom);
        this.app.todoMap.set(newTodoDom, newTodo);
    }

    makeTodoDom(todo){
        let _div = document.createElement('div');
        let _input = document.createElement('input');
        let _label = document.createElement('label');
        _div.className = 'todo';
        _input.type = 'checkbox';
        _input.checked = todo.done;
        _label.innerText = " " + todo.contents;
        _div.appendChild(_input);
        _div.appendChild(_label);
        return _div;
    }

    getList(){
        return this.todoList;
    }

    changeLeftTodoCount(doneFlag){
        if(doneFlag) this.leftCount--;
        else this.leftCount++;
        this.app.renderLeft();
    }

}

export default TodosManager;