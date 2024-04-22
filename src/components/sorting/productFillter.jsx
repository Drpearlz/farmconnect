import React, { useState } from 'react'
import Paragraph from '../text/paragraph'

export default function ProductFillter() {
    let [showFilter,SetShowFilter]=useState(false)
  return (
    <div className='self-end'>
      {/* filter toggle */}
      <div className='flex items-center p-3 bg-green-100 self-end text-green-600 rounded-full cursor-pointer'>
        <Paragraph text="Filter Items" styles='font-semibold text-green-600' />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5"
          />
        </svg>
      </div>
      {/* filter list */}
      
    </div>
  );
}
