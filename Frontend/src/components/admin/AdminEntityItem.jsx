import React from 'react';

function AdminEntityItem({ entity, onDelete, onEdit }) {
    const handleEditClick = () => {
        onEdit(entity); // Call the onEdit function with the entity as parameter
    };
    return (
        <div className="bg-white p-6 rounded-lg shadow-md mb-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{entity.name}</h3>
            <img src={entity.imageUrl}/>
            <p className="text-sm text-gray-600">{entity.description}</p>
            <div className="mt-4">
                <button
                    onClick={() => onDelete(entity.id)}
                    className="inline-flex items-center px-3 py-2 mr-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                >
                    Delete
                </button>
                <button
                    onClick={handleEditClick}
                    className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                    Edit
                </button>
            </div>
        </div>
    );
}

export default AdminEntityItem;
