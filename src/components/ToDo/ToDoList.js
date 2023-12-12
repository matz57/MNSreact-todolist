import React from 'react';
import ToDo from './ToDo';

function ToDoList({ todos, onDelete, onToggleComplete, onEdit }) {
    return (
        <div>
            {todos.map((todo, index) => (
                <ToDo
                    key={index}
                    title={todo.title}
                    description={todo.description}
                    completed={todo.completed}
                    onDelete={() => onDelete(index)}
                    onToggleComplete={() => onToggleComplete(index)}
                    onEdit={() => onEdit(index)}
                />
            ))}
        </div>
    );
}

export default ToDoList;