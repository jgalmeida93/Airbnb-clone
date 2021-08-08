import Image from "next/image";
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UsersIcon,
} from "@heroicons/react/solid";
import { getData } from "../constants/getData";
import { useState } from "react";
import { DateRangePicker } from 'react-date-range';
import { useRouter } from "next/dist/client/router";

import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';


function Header({ placeholder }) {
  const [searchInput, setSearchInput] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [guestNumber, setGuestNumber] = useState(1);
  const router = useRouter();

  const selectionrange = {
    startDate: startDate,
    endDate: endDate,
    key: 'selection',
  }
  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  }

  const handleResetInput = () => {
    setSearchInput('');
  }

  const handleSearch = () => {
    router.push({
      pathname: '/search',
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        guestNumber,
      }
    });
  }
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      <div onClick={() => router.push('/')} className="relative flex items-center h-10 cursor-pointer my-auto">
        <Image
          src={`${getData}/qd3`}
          blurDataURL={`${getData}/qd3`}
          placeholder='blur'
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
        <input
          value={searchInput}
          onChange={(event) => setSearchInput(event.target.value)}
          className="pl-5 flex-grow bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400"
          type="text"
          placeholder={placeholder || 'Start your search'}
        />
        <SearchIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2" />
      </div>
      <div className="flex space-x-4 items-center justify-end text-gray-500">
        <p className="hidden md:inline cursor-pointer">Become a host</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />

        <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
          <MenuIcon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>

      {
        searchInput && (
          <div className='flex flex-col col-span-3 mx-auto'>
            <DateRangePicker
              ranges={[selectionrange]}
              onChange={handleSelect}
              minDate={new Date()}
              rangeColors={['#FD5B61']}
            />
            <div className='flex items-center border-b mb-4'>
              <h2 className='text-2xl flex-grow font-semibold'>Number of Guests</h2>

              <UsersIcon className='h-5' />
              <input type="number" min={1} value={guestNumber} onChange={(event) => setGuestNumber(event.target.value)} className='w-12 pl-2 text-lg outline-none text-red-400' />
            </div>

            <div className='flex'>
              <button className='text-gray-500 flex-grow' onClick={handleResetInput}>
                Cancel
              </button>
              <button className='text-red-400 flex-grow' onClick={handleSearch}>
                Search
              </button>
            </div>
          </div>
        )
      }
    </header>
  );
}

export default Header;
