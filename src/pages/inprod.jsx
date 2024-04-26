import React from "react";
import f9 from "../assets/produce/f9.png";
import NavBar from "../components/navigation/navbar";

const ProductPage = () => {
  return (
    <>
      <NavBar />
      <div className="flex justify-center items-center h-screen">
        <div>
          <hr className="my-3" />
          <div className="flex justify-between mt-6">
            <main className="my-8">
              <div className="container mx-auto px-6">
                <div className="md:flex md:items-center">
                  <div className="w-full h-64 md:w-1/2 lg:h-96">
                    <img
                      className="h-full w-full rounded-md object-cover max-w-lg mx-auto"
                      src={f9}
                      alt="Nike Air"
                    />
                  </div>
                  <div className="w-full max-w-lg mx-auto mt-5 md:ml-8 md:mt-0 md:w-1/2">
                    <h3 className="text-gray-700 uppercase text-lg">Lettuce</h3>
                    <span className="text-gray-500 mt-3">N250</span>
                    <hr className="my-3" />
                    <div className="mt-2">
                      <label className="text-gray-700 text-sm" htmlFor="count">
                        Count/Bunch:
                      </label>
                      <div className="flex items-center mt-1">
                        <button className="text-gray-500 focus:outline-none focus:text-gray-600">
                          <svg
                            className="h-5 w-5"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </button>
                        <span className="text-gray-700 text-lg mx-2">5</span>
                        <button className="text-gray-500 focus:outline-none focus:text-gray-600">
                          <svg
                            className="h-5 w-5"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                    
                    <div className="flex items-center mt-6">
                      <button className="px-8 py-2 bg-indigo-600 text-white text-sm font-medium rounded hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500">
                        Order Now
                      </button>
                      <button className="mx-2 text-gray-600 border rounded-md p-2 hover:bg-gray-200 focus:outline-none">
                        <svg
                          className="h-5 w-5"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="mt-16">
                  <h3 className="text-gray-600 text-2xl font-medium">
                    Other Products
                  </h3>
                  <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
                    {/* Other products */}


                <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                  <div
                    className="flex items-end justify-end h-56 w-full bg-cover"
                    style={{}}
                  >
                    <button className="p-2 rounded-full bg-green-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </button>
                  </div>
                  <div className="px-5 py-3">
                    <h3 className="text-gray-700 uppercase">ugu</h3>
                    <span className="text-gray-500 mt-2">N200</span>
                  </div>
                </div>
                <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                  <div
                    className="flex items-end justify-end h-56 w-full bg-cover"
                    style={{}}
                  >
                    <button className="p-2 rounded-full bg-green-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </button>
                  </div>
                  <div className="px-5 py-3">
                    <h3 className="text-gray-700 uppercase">Fresh juice</h3>
                    <span className="text-gray-500 mt-2">N120</span>
                  </div>
                </div>
                <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                  <div
                    className="flex items-end justify-end h-56 w-full bg-cover"
                    style={{}}
                  >
                    <button className="p-2 rounded-full bg-green-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </button>
                  </div>
                  <div className="px-5 py-3">
                    <h3 className="text-gray-700 uppercase">Ginger root</h3>
                    <span className="text-gray-500 mt-2">N6512</span>
                  </div>
                </div>
                <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                  <div
                    className="flex items-end justify-end h-56 w-full bg-cover"
                    style={{}}
                  >
                    <button className="p-2 rounded-full bg-green-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </button>
                  </div>
                  <div className="px-5 py-3">
                    <h3 className="text-gray-700 uppercase">Yam</h3>
                    <span className="text-gray-500 mt-2">N1612</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
    </div>
    </>
  );
};

export default ProductPage;
