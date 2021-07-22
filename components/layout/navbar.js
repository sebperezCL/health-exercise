import { Transition } from '@headlessui/react';
import { useState } from 'react';

import MenuBar from './menuBar';
import MenuItem from './menuItem';
import ProfileMenu from './profileMenu';
import Button from '../shared/button';

// Component that renders the top navigation bar
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="content-center">
      <nav className="bg-white">
        <div className="max-w-none mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between md:grid md:grid-cols-6 2xl:grid-cols-3 h-16 gap-2 items-center">
            <div className="-mr-2 flex md:hidden">
              <button
                type="button"
                className="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <span className="sr-only">Open main menu</span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
            <div className="flex items-center justify-between">
              <span className="uppercase text-blue-500 font-bold">
                Health Explore
              </span>
            </div>
            <div className="hidden md:block md:col-span-3 2xl:col-span-1">
              <div className="ml-10 space-x-4 md:flex md:justify-between">
                <MenuBar />
              </div>
            </div>
            <div className="md:col-span-2 2xl:col-span-1 flex justify-end">
              <div className="hidden lg:block">
                <Button>
                  <span className="uppercase text-sm font-semibold">
                    Create Job
                  </span>
                </Button>
              </div>
              <ProfileMenu />
              <div className="hidden lg:flex items-center">
                <MenuItem>Logout</MenuItem>
              </div>
            </div>
          </div>
        </div>

        <Transition
          show={menuOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <div className="md:hidden" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <MenuBar />
            </div>
          </div>
        </Transition>
      </nav>
    </div>
  );
};

export default Navbar;
