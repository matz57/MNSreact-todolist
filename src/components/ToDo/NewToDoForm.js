import React, { useState } from 'react';
import ToDoProps from './ToDoProps';

function NewToDoForm({ onAdd }) {
    
    const [title, setTitle] = useState(''); // état pour stocker le titre du nouveau ToDo
    const [description, setDescription] = useState(''); // état pour stocker la description du nouveau ToDo

    // fonction pour gérer l'envoi du formulaire
    const handleSubmit = (e) => {
        e.preventDefault();
        // appel de la fonction onAdd pour ajouter le nouveau ToDo
        onAdd(new ToDoProps(title, description));
        setTitle('');
        setDescription('');
    };

    return (
        <form onSubmit={handleSubmit}>
            {/* champ pour le titre */}
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
                className="form-control mb-2"
            />

            {/* champ pour la description */}
            <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Description"
                className="form-control mb-2"
            />

            {/* bouton pour ajouter le ToDo */}
            {title && description ? (
                        <>
                        <button type="submit" className="btn btn-primary">Add ToDo</button><br/><br/>
                        </>
                    ) : (
                        <>
                        <button type="submit" className="btn btn-danger" disabled>Add ToDo</button><br/>
                        <p>Fields cannot be empty.</p>
                        </>
                    )}
        </form>
    );
}

export default NewToDoForm;