// AdminEntityList.jsx

import React, { useState } from 'react';
import AdminEntityItem from './AdminEntityItem';
import AdminEntityForm from "./AdminEntityForm.jsx";

function AdminEntityList({ entities, onDelete, onUpdate }) {
    const [editEntity, setEditEntity] = useState(null);

    const handleEdit = (entity) => {
        setEditEntity(entity);
    };

    const handleCancelEdit = () => {
        setEditEntity(null);
    };

    return (
        <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Entities List</h2>
            {entities.map((entity) => (
                <div key={entity.id} className="bg-white p-6 rounded-lg shadow-md mb-4">
                    {editEntity && editEntity.id === entity.id ? (
                        <AdminEntityForm
                            entity={editEntity}
                            onCancelEdit={handleCancelEdit}
                            onUpdate={onUpdate}
                        />
                    ) : (
                        <AdminEntityItem
                            entity={entity}
                            onDelete={onDelete}
                            onEdit={handleEdit}
                        />
                    )}
                </div>
            ))}
        </div>
    );
}

export default AdminEntityList;
