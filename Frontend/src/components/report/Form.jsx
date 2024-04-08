import React, { useState, useEffect } from "react";
import Lightbox from 'react-image-lightbox';
import { IoIosCloseCircle } from "react-icons/io";
import { useParams, useNavigate } from "react-router-dom";
import axios from 'axios';


function Form({ onSubmit }) {
  const { entity } = useParams();
  const damagedEntity = entity || "";
  const navigate = useNavigate(); // Import useNavigate hook


  const [formData, setFormData] = useState({
    email: "",
    password: "",
    repeatPassword: "",
    phone: "",
    company: "",
    roomType: "", // Classroom or Lab
    roomNumber: "", // Classroom number or Lab number
    description: "",
    damagedEntity: damagedEntity, // Set the value of damagedEntity to selectedEntityName
    department: "",
    photo:null,
    });
    const [photoUrl, setPhotoUrl] = useState(null);
    const [lightboxOpen, setLightboxOpen] = useState(false);

    useEffect(() => {
      if (entity) {
        setFormData((prevData) => ({
          ...prevData,
          damagedEntity: entity
        }));
      }
    }, [entity]);

    console.log("Entity Name from Query:", entity);

    const handleChange = (e) => {
    if (e.target.name === "photo") {
      setFormData({ ...formData, [e.target.name]: e.target.files[0] });
      setPhotoUrl(URL.createObjectURL(e.target.files[0]));
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };
  const openLightbox = () => {
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        await axios.post('http://localhost:8888/api/reports', formData);
        navigate('/history');
    } catch (error) {
        console.error('Error submitting report:', error);
    }
};
  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen px-10 py-4">
      <div className="flex flex-col items-center justify-center p-8 ">
        <h2 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
            Entity Damage Report
        </h2>
        </div>
      <form className="max-w-md mx-auto bg-gray-800 p-12 rounded-lg drop-shadow-xl"  onSubmit={handleSubmit}>
      <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="damagedEntity"
            id="damagedEntity"
            value={formData.damagedEntity}
            onChange={handleChange}
            readOnly // Make the input read-only
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            required
            />
          <label
            htmlFor="damagedEntity"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
            Damaged Entity
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="email"
            name="email"
            id="email"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="email"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Email address
          </label>
        </div>

        <div className="relative z-0 w-full mb-5 group">
          <select
            name="department"
            value={formData.department}
            onChange={handleChange}
            className="block py-2.5 px-0 w-full text-sm bg-gray-50 dark:bg-gray-800 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            required
          >
            <option value="">Select Department</option>
            <option value="Computer Engineering">Computer Engineering</option>
            <option value="Information Technology">Information Technology</option>
            <option value="Electronics Communication">Electronics Communication</option>
            <option value="Chemical Engineering">Chemical Engineering</option>
            <option value="Mechanical Engineering">Mechanical Engineering</option>
            <option value="Civil Engineering">Civil Engineering</option>
            <option value="Instrumentation Control">Instrumentation Control</option>
          </select>
        </div>

        <div className="relative z-0 w-full mb-5 group">
          <select
            name="roomType"
            value={formData.roomType}
            onChange={handleChange}
            className="block py-2.5 px-0 w-full text-sm bg-gray-50 dark:bg-gray-800 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            required
          >
            <option value="">Select Room Type</option>
            <option value="classroom">Classroom</option>
            <option value="lab">Lab</option>
          </select>
        </div>
        {formData.roomType === "classroom" && (
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="roomNumber"
              value={formData.roomNumber}
              onChange={handleChange}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder="Classroom Number"
              required
            />
          </div>
        )}
        {formData.roomType === "lab" && (
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="roomNumber"
              value={formData.roomNumber}
              onChange={handleChange}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder="Lab Number"
              required
            />
          </div>
        )}
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="file"
            accept="image/*"
            name="photo"
            onChange={handleChange}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            required
          />
          {photoUrl && (
            <img
              src={photoUrl}
              alt="Uploaded"
              onClick={openLightbox}
              className="mt-2 cursor-pointer"
            />
          )}
        </div>
        {lightboxOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-black bg-opacity-50">
            <div className="relative max-w-full mx-auto">
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 text-white transition duration-300 ease-in-out hover:text-gray-300 focus:outline-none text-2xl"
              >
                <IoIosCloseCircle />

              </button>
              <img src={photoUrl} alt="Uploaded" className="max-w-full max-h-full" />
            </div>
          </div>
        )}
        <div className="relative z-0 w-full mb-5 group">
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder="Description"
            rows="4"
            required
          />
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;

