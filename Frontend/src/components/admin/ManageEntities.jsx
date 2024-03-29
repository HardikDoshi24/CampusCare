import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ManagedEntities() {
  const [entities, setEntities] = useState([]);
  const [name, setName] = useState('');

  useEffect(() => {
    fetchEntities();
  }, []);

  const fetchEntities = async () => {
    try {
      const response = await axios.get('http://localhost:8092/api/damaged-entities');
      if (Array.isArray(response.data)) {
        setEntities(response.data);
      } else {
        console.error('Invalid response format:', response.data);
      }
    } catch (error) {
      console.error('Error fetching entities:', error);
    }
  };
  
  
  
  const addEntity = async () => {
    try {
      await axios.post('http://localhost:8092/api/damaged-entities', { name });
      fetchEntities();
      setName('');
    } catch (error) {
      console.error('Error adding entity:', error);
    }
  };

  const deleteEntity = async (id) => {
    try {
      await axios.delete(`http://localhost:8092/api/damaged-entities/${id}`);
      fetchEntities();
    } catch (error) {
      console.error('Error deleting entity:', error);
    }
  };

  return (
    <div>
      <h2>Manage Entities</h2>
      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter entity name"
        />
        <button onClick={addEntity}>Add Entity</button>
      </div>
      <ul>
        {entities.map((entity) => (
          <li key={entity.id}>
            {entity.name}
            <button onClick={() => deleteEntity(entity.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ManagedEntities;
