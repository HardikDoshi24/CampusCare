import React from 'react';

function Modal({ children, onClose }) {
    return (
        <div className="fixed inset-0 z-50 overflow-y-auto flex justify-center items-center">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>
            <div className="bg-white rounded-lg p-8 max-w-lg w-full max-h-80vh overflow-auto relative transform transition-opacity transition-scale">
                <button className="absolute top-4 right-4 text-gray-600 hover:text-gray-800" onClick={onClose}>
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
                {children}
            </div>
        </div>
    );
}

export default Modal;
