import React, { useState } from 'react';

const Option = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleRegisterClick = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="pt-36 h-screen">
      <div className="flex items-center justify-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5">
        <div className="w-full text-center">
          <h1 className="text-2xl font-semibold tracking-wider text-green-800 capitalize">
            Which are you?
          </h1>

          <div className="mt-6">
            <div className="mt-3 md:flex md:items-center md:-mx-2">
              <button
                onClick={handleRegisterClick}
                className="flex justify-center w-full px-6 py-3 text-white bg-green-800 rounded-lg md:w-auto md:mx-2 focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span className="mx-2">Farmer</span>
              </button>
              <button
                onClick={handleRegisterClick}
                className="flex justify-center w-full px-6 py-3 mt-4 text-green-800 border border-green-500 rounded-lg md:mt-0 md:w-auto md:mx-2 focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                <span className="mx-2">Buyer</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      {modalOpen && (
        <Modal onClose={handleCloseModal}>
          {/* Your modal content here */}
          <h2>Modal Content</h2>
          <p>This is your modal content.</p>
          <button onClick={handleCloseModal}>Close</button>
        </Modal>
      )}
    </div>
  );
};

export default Option;
