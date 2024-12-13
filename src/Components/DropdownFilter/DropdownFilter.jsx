'use client';

import { useState } from 'react';

export default function DropdownFilter() {
  const [showList, setShowList] = useState(false);
  return (
    <>
      <div className="flex flex-col gap-1 ">
        <div
          className="flex items-center cursor-pointer  gap-2 bg-primary-500 py-2 px-3 rounded-md text-white"
          onClick={() => {
            setShowList(!showList);
            console.log(showList);
          }}
        >
          <i className="fa-solid fa-filter text-lg"></i>
          <span className="text-lg font-semibold tracking-wide">Filter</span>
        </div>
        <ul
          className={`py-3 space-y-5 bg-slate-100 shadow-md rounded-sm ${
            showList ? 'block' : 'hidden'
          }`}
        >
          <li className="cursor-pointer text-primary-500 hover:text-primary-800 flex items-center justify-center gap-2">
            <i className="fa-solid fa-sort "></i>
            <span>Sort</span>
          </li>
          <li className="cursor-pointer text-primary-500 hover:text-primary-800 flex items-center justify-center gap-2">
            <i className="fa-solid fa-sort "></i>
            <span>Sort</span>
          </li>
          <li className="cursor-pointer text-primary-500 hover:text-primary-800 flex items-center justify-center gap-2">
            <i className="fa-solid fa-sort "></i>
            <span>Sort</span>
          </li>
        </ul>
      </div>
    </>
  );
}
