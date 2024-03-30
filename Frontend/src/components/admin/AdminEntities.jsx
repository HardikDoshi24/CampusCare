import React, { useState, useEffect } from 'react';
import { getAllEntities, createEntity, deleteEntity } from './api';
import AdminEntityList from './AdminEntityList';
import AdminEntityForm from './AdminEntityForm';
import { toast } from 'react-toastify';

function AdminEntities() {
    const [entities, setEntities] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const data = await getAllEntities();
            setEntities(data);
        } catch (error) {
            console.error('Error fetching entities:', error);
        }
    };

    const handleCreateEntity = async (entityData) => {
        try {
            await createEntity(entityData);
            toast.success('Entity created successfully.');
            fetchData();
        } catch (error) {
            console.error('Error creating entity:', error);
            toast.error('Failed to create entity.');
        }
    };

    const handleDeleteEntity = async (entityId) => {
        try {
            await deleteEntity(entityId);
            toast.success('Entity deleted successfully.');
            fetchData();
        } catch (error) {
            console.error('Error deleting entity:', error);
            toast.error('Failed to delete entity.');
        }
    };

    return (
        <div className="container mx-auto py-8">
            <h1 className="text-3xl font-semibold text-gray-800 mb-8">Manage Entities</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <AdminEntityList entities={entities} onDelete={handleDeleteEntity} />
                <AdminEntityForm onCreate={handleCreateEntity} />
            </div>
        </div>
    );
}

export default AdminEntities;
