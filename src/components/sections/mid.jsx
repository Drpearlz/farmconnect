import React from 'react';
import farmer from "../../assets/images/farmer.jpg";
import NavBar from '../navigation/navbar';


const Mid = () => {
  return (
    <div className='bg-white'>
      <div className="container flex flex-col py-10 px-6 mx-auto space-y-24 lg:h[32rem] lg:py-20 lg:flex-row lg:items-center">
        <div className="w-full lg:w-1/2">
          <div className="lg:max-w-lg">
            <h1 className="text-3xl font-semibold tracking-wide text-gray-800 lg:text-4xl">Find your premium in-season produce from farms in your area</h1>
            <p className="mt-4 text-gray-600">We work with the best farmers and logistics company to deliver fresh to your table.</p>
            <div className="grid gap-6 mt-8 sm:grid-cols-2">
        <div className="flex items-center text-gray-800 -px-3">
          <svg className="w-5 h-5 mx-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span className="mx-3">Premium selection</span>
        </div>
        <div className="flex items-center text-gray-800 -px-3">
          <svg className="w-5 h-5 mx-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span className="mx-3">Always fresh</span>
        </div>
        <div className="flex items-center text-gray-800 -px-3">
          <svg className="w-5 h-5 mx-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span className="mx-3">Doorstep delivery</span>
        </div>
        <div className="flex items-center text-gray-800 -px-3">
          <svg className="w-5 h-5 mx-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span className="mx-3">Reduced Carbon footprint</span>
        </div>
        <div className="flex items-center text-gray-800 -px-3">
          <svg className="w-5 h-5 mx-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span className="mx-3">Payment Security</span>
        </div>
        <div className="flex items-center text-gray-800 -px-3">
          <svg className="w-5 h-5 mx-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span className="mx-3">Fast delivery (+ Express)</span>
        </div>
      </div>
    </div>
  </div>
  <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
  <img
          src={farmer}
          alt="" className="object-cover w-full h-full  mx-auto rounded-md lg:max-w-2xl rounded-md" />
  </div>
</div>
    </div>
  )
}

export default Mid