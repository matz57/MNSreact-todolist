import React from 'react';

function ToDo({ title, description, completed, onDelete, onToggleComplete, onEdit }) {
    return (
        <div className="card mb-3">
            <div className="card-body">
                {/* titre du ToDo */}
                <h5 className="card-title">{title}</h5>

                {/* description du ToDo */}
                <p className="card-text">{description}</p>

                {/* état du ToDo */}
                <p className="card-text">
                    <small className="text-muted">{completed ? 'Completed' : 'Not Completed'}</small>
                </p>

                <div className="btn-group" role="group">
                    {/* bouton pour marquer le ToDo comme complet/incomplet */}
                    <button className="btn btn-primary mr-2" onClick={onToggleComplete}>
                        {completed ? 'Toggle Incomplete' : 'Toggle Complete'}
                    </button>

                    {/* bouton pour modifier le ToDo */}
                    <button className="btn btn-secondary mr-2" onClick={onEdit}>
                        <i className="bi bi-pencil-square"></i>
                    </button>

                    {/* bouton pour supprimer le ToDo */}
                    <button className="btn btn-danger" onClick={onDelete}>
                        <i className="bi bi-trash"></i>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ToDo;