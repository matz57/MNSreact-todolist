import React from 'react';
import ToDo from './ToDo';

function ToDoList({ todos, onDelete, onToggleComplete, onEdit }) {
    return (
        <div>
            {/* boucle sur chaque Todo pour l'affichage de la liste */}
            {todos.length === 0 && <h2>No todos yet!</h2>}
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