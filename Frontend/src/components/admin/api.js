const API_URL = 'http://localhost:8888/api/admin-entities';

export const getAllEntities = async () => {
    const response = await fetch(API_URL);
    if (!response.ok) {
        throw new Error('Failed to fetch entities');
    }
    return response.json();
};

export const createEntity = async (entityData) => {
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(entityData),
    });
    if (!response.ok) {
        throw new Error('Failed to create entity');
    }
};

export const deleteEntity = async (entityId) => {
    const response = await fetch(`${API_URL}/${entityId}`, {
        method: 'DELETE',
    });
    if (!response.ok) {
        throw new Error('Failed to delete entity');
    }
};
