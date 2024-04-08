import React, { useState, useEffect } from 'react';

function AdminEntityForm({ onCreateOrUpdate, editingEntity }) {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [type, setType] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    useEffect(() => {
        if (editingEntity) {
            setName(editingEntity.name);
            setDescription(editingEntity.description);
            setType(editingEntity.type);
            setImageUrl(editingEntity.imageUrl);
        } else {
            // Reset form if not editing
            resetForm();
        }
    }, [editingEntity]);

    const handleSubmit = (e) => {
        e.preventDefault();
        onCreateOrUpdate({ name, description, type, imageUrl, id: editingEntity?.id });
        resetForm();
        setName('');
        setDescription('');
        setType('Lab'); // Reset type to Lab after submission
        setImageUrl('');
    };
    const resetForm = () => {
        setName('');
        setDescription('');
        setType('Lab');
        setImageUrl('');
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">{editingEntity ? 'Edit Entity' : 'Add New Entity'}</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                        Description
                    </label>
                    <textarea
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    ></textarea>
                </div>
                <div className="mb-4">
                    <label htmlFor="type" className="block text-sm font-medium text-gray-700">
                        Type
                    </label>
                    <select
                        id="type"
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    >
                        <option value="Lab">Lab</option>
                        <option value="Classroom">Classroom</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700">
                        Image URL
                    </label>
                    <input
                        type="text"
                        id="imageUrl"
                        value={imageUrl}
                        onChange={(e) => setImageUrl(e.target.value)}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>
                <button
                    type="submit"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    {editingEntity ? 'Update' : 'Save'}

                </button>
            </form>
        </div>
    );
}

export default AdminEntityForm;
