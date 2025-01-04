class Todo {
    constructor(title, project, description, dueDate, priority, completed = false) {
        this.title = title;
        this.completed = completed;
        this.project = project;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }

    toggleCompleted() {
        this.completed = !this.completed;
    }
}

export default Todo;