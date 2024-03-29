import React, { useState, useEffect } from "react";
import Card from "./Card";
import { IoSearch } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";

function Report() {
  const [selectedEntities, setSelectedEntities] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterOption, setFilterOption] = useState("All"); // Initialize filter option to show all entities
  const [sortingOption, setSortingOption] = useState(""); // Initialize sorting option to sort entities alphabetically in ascending order

  const [entities, setEntities] = useState([
    // Your array of entities
    { id: 1, name: "Light", image: "src/assets/demoimage.jpg" },
    { id: 2, name: "Fan", image: "src/assets/demoimage.jpg", type: "Classroom" },
    { id: 3, name: "Bench", image: "src/assets/demoimage.jpg", type: "Classroom"},
    { id: 4, name: "Switch Board", image: "src/assets/demoimage.jpg" },
    { id: 5, name: "Window/Window Glass", image: "src/assets/demoimage.jpg" },
    { id: 6, name: "Computer Table", image: "src/assets/demoimage.jpg", type: "Lab" },
    { id: 7, name: "PC", image: "src/assets/demoimage.jpg", type: "Lab" },
    { id: 8, name: "Chair", image: "src/assets/demoimage.jpg", type: "Lab" },
    { id: 9, name: "Door", image: "src/assets/demoimage.jpg" },
    { id: 10, name: "Projector", image: "src/assets/demoimage.jpg", type: "Classroom"},
    { id: 11, name: "Keyboard", image: "src/assets/demoimage.jpg", type: "Lab"},
    { id: 12, name: "Mouse", image: "src/assets/demoimage.jpg", type: "Lab" },
    { id: 13, name: "CPU", image: "src/assets/demoimage.jpg", type: "Lab" },
    { id: 14, name: "White Board", image: "src/assets/demoimage.jpg" },

  ]);
  
  useEffect(() => {
    fetchEntities();
  }, []);

  const fetchEntities = async () => {
    try {
      const response = await axios.get('http://localhost:8092/api/damaged-entities');
      setEntities(response.data);
    } catch (error) {
      console.error('Error fetching entities:', error);
    }
  };
  
  const navigate = useNavigate();
  const handleCardClick = (name) => {
    setSelectedEntities((prevSelected) => {
      if (prevSelected.includes(name)) {
        return prevSelected.filter((entityName) => entityName !== name);
      } else {
        return [...prevSelected, name];
      }
    });
    console.log("Selected Entity Name:", name);
    navigate(`/form?entity=${encodeURIComponent(name)}`);
  };
  
  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleFilterChange = (event) => {
    setFilterOption(event.target.value);
  };

  const handleSortingChange = (event) => {
    setSortingOption(event.target.value);
  };

  const sortedEntities = [...entities].sort((a, b) => {
    if (sortingOption === "A-Z") {
      return a.name.localeCompare(b.name);
    } else if (sortingOption === "Z-A") {
      return b.name.localeCompare(a.name);
    }
  });
  const filteredEntities = sortedEntities.filter((entity) => {
    const nameMatches = entity.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const typeMatches =
      filterOption === "All" || entity.type === filterOption || !entity.type; // Include entities without a type
    return nameMatches && typeMatches;
  });

  return (
    <div className="bg-gray-50 dark:bg-gray-900 px-10 py-4">
      <div className="flex justify-between items-center py-4">
        <h2 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
          Report Damaged Entities
        </h2>
        <div className="relative hidden md:block">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <IoSearch />
          </div>
          <input
            type="text"
            id="search-navbar"
            value={searchQuery}
            onChange={handleSearch}
            className="block w-48 md:w-auto p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search..."
          />
        </div>
          <div className="relative">
          <select
            value={filterOption}
            onChange={handleFilterChange}
            className="ml-4 p-2 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white"
          >
            <option value="All">All</option>
            <option value="Classroom">Classroom</option>
            <option value="Lab">Lab</option>
          </select>

        <select
          value={sortingOption}
          onChange={handleSortingChange}
          className="ml-4 p-2 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white"
          >
          <option value="A-Z">Ascending</option>
          <option value="Z-A">Descending</option>
        </select>
        </div>
      </div>

      <div className="flex flex-wrap -mx-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Render multiple instances of Card component */}
          {filteredEntities.map((entity) => (
            <Card
              key={entity.id}
              image={entity.image}
              name={entity.name}
              isSelected={selectedEntities.includes(entity.name)}
              onClick={handleCardClick}
            />
          ))}
          {/* {entities.map((entity) => (
          <Card key={entity.id} name={entity.name} />
        ))} */}
        </div>
      </div>
    </div>
  );
}

export default Report;
