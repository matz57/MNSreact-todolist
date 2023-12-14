import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';

function EditModal({ todoIndex, todoTitle, todoDescription, onEdit, onClose }) {

    const [show, setShow] = useState(false); // état pour contrôler l'affichage du modal
    const [newTitle, setNewTitle] = useState(''); // état pour stocker le nouveau titre
    const [newDescription, setNewDescription] = useState(''); // état pour stocker la nouvelle description

    useEffect(() => {
        setNewTitle(todoTitle);
        setNewDescription(todoDescription);
        setShow(true);
    }, [todoIndex, todoTitle, todoDescription]);

    // fonction pour gérer la fermeture du modal
    const handleClose = () => {
        setShow(false);
        setNewTitle('');
        setNewDescription('');
        onClose();
    };

    // fonction pour gérer la sauvegarde des modifications
    const handleSave = () => {
        onEdit(todoIndex, newTitle, newDescription);
        handleClose();
    };

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit ToDo</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/* champ de saisie pour le titre */}
                    <input
                        type="text"
                        className="form-control mb-2"
                        value={newTitle}
                        onChange={(e) => setNewTitle(e.target.value)}
                        placeholder="Title"
                    />

                    {/* champ de saisie pour la description */}
                    <textarea
                        className="form-control mb-2"
                        value={newDescription}
                        onChange={(e) => setNewDescription(e.target.value)}
                        placeholder="Description"
                    />
                </Modal.Body>
                <Modal.Footer>
                    {/* bouton pour annuler la modification */}
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    {/* bouton pour sauvegarder la modification */}
                    {newTitle && newDescription ? (
                        <Button variant="primary" onClick={handleSave}>Save</Button>
                    ) : (
                        <>
                        <Button variant="danger" disabled>Save</Button><br/>
                        <p>Fields cannot be empty.</p>
                        </>
                    )}
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default EditModal;