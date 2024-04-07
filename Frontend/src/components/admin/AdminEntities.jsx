import React, { useState, useEffect } from 'react';
import Modal from "./Modal.jsx";
import AdminEntityList from './AdminEntityList';
import AdminEntityForm from './AdminEntityForm';
import { toast } from 'react-toastify';

function AdminEntities() {
    const [entities, setEntities] = useState([]);
    const [editingEntity, setEditingEntity] = useState(null);
    const [showForm, setShowForm] = useState(false); // State to toggle form visibility
    const [isCreating, setIsCreating] = useState(false); // State to track whether creating a new entity

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:8888/api/admin-entities');
            if (!response.ok) {
                throw new Error('Failed to fetch entities');
            }
            const data = await response.json();
            setEntities(data);
        } catch (error) {
            console.error('Error fetching entities:', error);
            toast.error('Failed to fetch entities.');
        }
    };

    const handleCreateOrUpdateEntity = async (entityData) => {
        const url = editingEntity ? `http://localhost:8888/api/admin-entities/${editingEntity.id}` : 'http://localhost:8888/api/admin-entities';
        const method = editingEntity ? 'PUT' : 'POST';

        try {
            const response = await fetch(url, {
                method: method,
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(entityData),
            });
            if (!response.ok) {
                throw new Error(editingEntity ? 'Failed to update entity' : 'Failed to create entity');
            }
            toast.success(editingEntity ? 'Entity updated successfully.' : 'Entity created successfully.');
            setEditingEntity(null); // Reset editing entity
            setShowForm(false); // Hide form after creation or update
            setIsCreating(false); // Reset isCreating state
            fetchData(); // Refresh entities after creation or update
        } catch (error) {
            console.error(editingEntity ? 'Error updating entity:' : 'Error creating entity:', error);
            toast.error(editingEntity ? 'Failed to update entity.' : 'Failed to create entity.');
        }
    };

    const handleEditEntity = (entity) => {
        setEditingEntity(entity);
        setShowForm(true); // Show form when editing an entity
    };

    const handleAddEntity = () => {
        setEditingEntity(null); // Reset editing entity
        setShowForm(true); // Show form for adding a new entity
        setIsCreating(true); // Set isCreating state to true
    };

    const handleDeleteEntity = async (entityId) => {
        try {
            const response = await fetch(`http://localhost:8888/api/admin-entities/${entityId}`, {
                method: 'DELETE',
            });
            if (!response.ok) {
                throw new Error('Failed to delete entity');
            }
            toast.success('Entity deleted successfully.');
            fetchData(); // Refresh entities after deletion
        } catch (error) {
            console.error('Error deleting entity:', error);
            toast.error('Failed to delete entity.');
        }
    };

    return (
        <div className="container mx-auto py-8">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-semibold text-gray-800 mb-4 pt-4">Manage Entities</h1>
                <button
                    onClick={handleAddEntity} // Show form when Add Entity button is clicked
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    Add Entity
                </button>
            </div>
            {showForm && (
                <Modal onClose={() => setShowForm(false)}>
                    <AdminEntityForm onCreateOrUpdate={handleCreateOrUpdateEntity} editingEntity={editingEntity}
                                     isCreating={isCreating}/>
                </Modal>
            )}
            <div>
                <AdminEntityList entities={entities} onDelete={handleDeleteEntity} onEdit={handleEditEntity}/>
            </div>
        </div>
    );
}

export default AdminEntities;
