import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';

function EditModal({ todoIndex, todoTitle, todoDescription, onEdit }) {
    const [show, setShow] = useState(false);
    const [newTitle, setNewTitle] = useState('');
    const [newDescription, setNewDescription] = useState('');

    useEffect(() => {
        setNewTitle(todoTitle);
        setNewDescription(todoDescription);
        setShow(true);
    }, [todoIndex, todoTitle, todoDescription]);

    const handleClose = () => {
        setShow(false);
        setNewTitle('');
        setNewDescription('');
    };

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
                    <input
                        type="text"
                        className="form-control mb-2"
                        value={newTitle}
                        onChange={(e) => setNewTitle(e.target.value)}
                        placeholder="Title"
                    />
                    <textarea
                        className="form-control mb-2"
                        value={newDescription}
                        onChange={(e) => setNewDescription(e.target.value)}
                        placeholder="Description"
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={handleSave}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default EditModal;