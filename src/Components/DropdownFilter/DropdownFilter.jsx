'use client';

import { useContext, useState } from 'react';
import { ProductsContext } from '../../context/Products.context';

export default function DropdownFilter() {
  const [showList, setShowList] = useState(false);
  const [checkSortHigh, setCheckSortHigh] = useState(false);
  const { setStatus } = useContext(ProductsContext);

  return (
    <>
      <div className="relative">
        <div
          className="flex justify-center items-center cursor-pointer  gap-2 bg-primary-500 py-2 px-3 rounded-md text-white"
          onClick={() => {
            setShowList(!showList);
          }}
        >
          <i className="fa-solid fa-filter text-lg"></i>
          <span className="text-lg font-semibold tracking-wide">Filter</span>
        </div>
        <ul
          className={`py-3 space-y-5 bg-slate-200 w-full   left-1/2 -translate-x-1/2 px-3  shadow-md absolute z-50  rounded-md ${
            showList ? 'block' : 'hidden'
          }`}
        >
          <li className="flex items-center gap-2 justify-center">
            <input
              id="sorthigh"
              type="checkbox"
              className="cursor-pointer rounded-md size-6 focus:shadow-none text-primary-500 hover:text-primary-800 flex items-center justify-center gap-2"
              onClick={() => {
                if (checkSortHigh) {
                  setStatus('products');
                  setCheckSortHigh(false);
                } else {
                  setCheckSortHigh(true);
                  setStatus('sortHigh'.toLowerCase());
                }
              }}
            />
            <label
              className="text-sm text-nowrap lg:text-lg font-semibold"
              htmlFor="sorthigh"
            >
              Sorted High
            </label>
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
