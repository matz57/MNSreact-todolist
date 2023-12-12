import React, { useState, useEffect } from 'react';
import ToDoList from './components/ToDo/ToDoList';
import NewToDoForm from './components/ToDo/NewToDoForm';
import EditModal from './components/ToDo/EditModal';
import ToDoProps from './components/ToDo/ToDoProps';

function App() {
    const initialTodos = [
        new ToDoProps('Tâche 1', 'Développement du frontend'),
        new ToDoProps('Tâche 2', 'Développement du backend', true),
        new ToDoProps('Tâche 3', 'Développer la base de données'),
        new ToDoProps('Tâche 4', 'Réaliser les fonctionnalités'),
    ];

    const [todos, setTodos] = useState(() => {
        const storedTodos = JSON.parse(localStorage.getItem('todos'));
        return storedTodos || initialTodos;
    });

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const addTodo = (todo) => {
        setTodos([...todos, todo]);
    };

    const deleteTodo = (index) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };

    const toggleComplete = (index) => {
        const newTodos = [...todos];
        newTodos[index].completed = !newTodos[index].completed;
        setTodos(newTodos);
    };

    const editTodo = (index, newTitle, newDescription) => {
        const newTodos = [...todos];
        newTodos[index].title = newTitle;
        newTodos[index].description = newDescription;
        setTodos(newTodos);
    };

    return (
        <div className="container mt-5">
            <NewToDoForm onAdd={addTodo} />
            <ToDoList
                todos={todos}
                onDelete={deleteTodo}
                onToggleComplete={toggleComplete}
                onEdit={editTodo}
            />
            <EditModal onEdit={editTodo} />
        </div>
    );
}

export default App;