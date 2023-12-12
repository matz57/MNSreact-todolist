class ToDoProps {
    constructor(title, description, completed = false) {
        this.title = title;
        this.description = description;
        this.completed = completed;
    }
}

export default ToDoProps;
