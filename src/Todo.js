class Todo {
  constructor(contents, done, manager) {
    this.contents = contents;
    this.done = done;
    this.manager = manager;
  }
  toggle() {
    this.done = !this.done;
    this.manager.changeLeftTodoCount(this.done);
  }
}

export default Todo;