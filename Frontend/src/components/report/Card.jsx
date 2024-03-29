import { Link } from "react-router-dom";
import React from "react";

function Card({ image, name, isSelected, onClick }) {
  return (
    <Link to={`/form/${name}`}>
      <div
        className={`max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ${
          isSelected ? "bg-blue-200" : ""
        }`}
        onClick={() => onClick(name)}
      >
        {" "}
          <img className="rounded-t-lg" src={image} alt={name} />
        <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {name}
            </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Description of the damage or any other relevant information can go
            here.
          </p>
        </div>
      </div>
    </Link>
  );
}

export default Card;
