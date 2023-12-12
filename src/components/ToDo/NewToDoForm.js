import React, { useState } from 'react';
import ToDoProps from './ToDoProps';

function NewToDoForm({ onAdd }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onAdd(new ToDoProps(title, description));
        setTitle('');
        setDescription('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
                className="form-control mb-2"
            />
            <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Description"
                className="form-control mb-2"
            />
            <button type="submit" className="btn btn-primary">Add ToDo</button>
        </form>
    );
}

export default NewToDoForm;