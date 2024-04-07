// AdminEntityList.jsx

import React, { useState } from 'react';
import AdminEntityItem from './AdminEntityItem';
import AdminEntityForm from "./AdminEntityForm.jsx";

function AdminEntityList({ entities, onDelete, onEdit }) {
    const [editEntity, setEditEntity] = useState(null);

    const handleEdit = (entity) => {
        setEditEntity(entity);
    };

    const handleCancelEdit = () => {
        setEditEntity(null);
    };

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {/*<h2 className="text-xl font-semibold text-gray-800 mb-4">Entities List</h2>*/}
            {entities.map((entity) => (
                <div key={entity.id} className="bg-white p-6 rounded-lg shadow-md mb-4">
                    {editEntity && editEntity.id === entity.id ? (
                        <AdminEntityForm
                            entity={editEntity}
                            onCancelEdit={handleCancelEdit}
                            onCreateOrUpdate={onEdit}
                        />
                    ) : (
                        <AdminEntityItem
                            entity={entity}
                            onDelete={onDelete}
                            onEdit={onEdit}
                        />
                    )}
                </div>
            ))}
        </div>
    );
}

export default AdminEntityList;
