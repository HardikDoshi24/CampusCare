import React, { useState } from "react";

import { Link } from "react-router-dom";
import UserProfile from "../auth/UserProfile";

function Navbar({ isAdmin, isLoggedIn, handleLogin, user }) {
  const handleLogout = () => {
    // Your logout logic here
    // Set isLoggedIn to false
    handleLogin(false);
  };

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 fon">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            CampusCare
          </span>
        </Link>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-user"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                to="/"
                className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                aria-current="page"
              >
                Home
              </Link>
            </li>

            {isAdmin && (
              <li>
                <Link
                  to="/manage-entities"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Manage Entities
                </Link>
              </li>
            )}

            {!isAdmin && (
              <li>
                <Link
                  to="/report"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Report Issue
                </Link>
              </li>
            )}
            {!isAdmin && (
              <li>
                <Link
                  to="/history"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  History
                </Link>
              </li>
            )}
            <li>
              <Link
                to="/about"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                About
              </Link>
            </li>
          </ul>

          {isLoggedIn ? (
            <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse ml-10">
              <UserProfile user={user} />
            </div>
          ) : (
            <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse ml-10">
              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <Link to="/login">Login</Link>
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
