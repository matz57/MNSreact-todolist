import React, { useState, useEffect } from 'react';
import ToDoList from './components/ToDo/ToDoList'; // importation du composant ToDoList
import NewToDoForm from './components/ToDo/NewToDoForm'; // importation du composant NewToDoForm
import EditModal from './components/ToDo/EditModal'; // importation du composant EditModal
import ToDoProps from './components/ToDo/ToDoProps'; // importation du composant ToDoProps

function App() {
    // initialisation des tâches
    const initTodos = [
        new ToDoProps('Tâche 1', 'Développement du frontend'),
        new ToDoProps('Tâche 2', 'Développement du backend', true),
        new ToDoProps('Tâche 3', 'Développer la base de données'),
        new ToDoProps('Tâche 4', 'Réaliser les fonctionnalités'),
    ];

    const [todos, setTodos] = useState(() => {
        const storedTodos = JSON.parse(localStorage.getItem('todos')); // récupération des tâches stockées
        return storedTodos || initTodos; // retourne les tâches stockées ou les tâches initiales si aucune tâche n'est stockée
    });

    // utilisation de useState pour gérer l'index de la tâche à modifier
    const [editTodoIndex, setEditTodoIndex] = useState(null);

    // utilisation de useEffect pour mettre à jour le stockage local à chaque changement dans les tâches
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    // fonction pour ajouter une tâche
    const addTodo = (todo) => {
        setTodos([...todos, todo]);
    };

    // fonction pour supprimer une tâche
    const deleteTodo = (index) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };

    // fonction pour basculer l'état de complete/incomplete
    const toggleComplete = (index) => {
        const newTodos = [...todos];
        newTodos[index].completed = !newTodos[index].completed;
        setTodos(newTodos);
    };

    // fonction pour modifier une tâche
    const editTodo = (index, newTitle, newDescription) => {
        const newTodos = [...todos];
        newTodos[index].title = newTitle;
        newTodos[index].description = newDescription;
        setTodos(newTodos);
    };

    // fonction pour ouvrir le modal
    const openEditModal = (index) => {
        setEditTodoIndex(index);
    };

    // fonction pour fermer le modal
    const closeEditModal = () => {
        setEditTodoIndex(null);
    };

    return (
        <div className="container mt-5">
            <NewToDoForm onAdd={addTodo} />
            <ToDoList
                todos={todos}
                onDelete={deleteTodo}
                onToggleComplete={toggleComplete}
                onEdit={openEditModal}
            />
            {editTodoIndex !== null && (
                <EditModal
                    todoIndex={editTodoIndex}
                    todoTitle={todos[editTodoIndex].title}
                    todoDescription={todos[editTodoIndex].description}
                    onEdit={editTodo}
                    onClose={closeEditModal}
                />
            )}
        </div>
    );
}

export default App;