class ToDoProps {
    // constructeur de la classe ToDoProps permettant d'avoir une structure pour mes tâches
    constructor(title, description, completed = false) {
        this.title = title;
        this.description = description;
        this.completed = completed;
    }
}

export default ToDoProps;