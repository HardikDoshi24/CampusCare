import React, { useState } from "react";

import { Link } from 'react-router-dom';

function UserProfile({user}) {
    const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
    const toggleDropdown = () => {
      setIsDropdownOpen(!isDropdownOpen);
    };
  
    const handleLogin = () => {
      // Your login logic here
      // Set isLoggedIn to true after successful login
      setIsLoggedIn(true);
    };
    return (
        <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse relative">
      <button
        type="button"
        className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
        id="user-menu-button"
        aria-expanded={isDropdownOpen ? 'true' : 'false'}
        onClick={toggleDropdown}
      >
        <span className="sr-only">Open user menu</span>
        <img
          className="w-8 h-8 rounded-full"
          src="/docs/images/people/profile-picture-3.jpg"
          alt="user photo"
        />
      </button>
      {isDropdownOpen && (
        <div
          className="absolute right-0 top-full mt-2 z-50 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
          id="user-dropdown"
        >
          <div className="px-4 py-3">
            <span className="block text-sm text-gray-900 dark:text-white">{user.namelogin}</span>
            <span className="block text-sm text-gray-500 truncate dark:text-gray-400">
              {user.emaillogin}
            </span>
          </div>
          <ul className="py-2">
            <li>
              <Link
                to="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              >
                Sign out
              </Link>
            </li>
          </ul>
        </div>
      )}
      <button
        data-collapse-toggle="navbar-user"
        type="button"
        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-user"
        aria-expanded={isDropdownOpen ? 'true' : 'false'}
        onClick={toggleDropdown}
      >
        <span className="sr-only">Open main menu</span>
      </button>
    </div>
    );
    
}
export default UserProfile;