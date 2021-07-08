import { XCircleIcon } from '@heroicons/react/outline';
import { useState } from 'react';

const SearchBar = ({ searchValue, setSearchValue }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = event => {
    setInputValue(event.target.value);
  };

  const handleClear = () => {
    setInputValue('');
    setSearchValue({});
  };

  const handleSubmit = event => {
    event.preventDefault();
    setSearchValue({ type: 'keyword', value: inputValue, title: 'Keyword' });
    console.log(inputValue);
  };

  return (
    <header className="bg-white shadow md:m-4 border-t-2 md:border-none rounded-lg">
      <form onSubmit={handleSubmit}>
        <div className="mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-start items-center">
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <input
            className="w-full h-4 pl-2 outline-none"
            type="text"
            placeholder="Search for any job, title, keywords or company and press 'Enter'"
            value={inputValue}
            onChange={handleChange}
          />
          <XCircleIcon
            className="h-6 w-6"
            onClick={handleClear}
            role="button"
          />
        </div>
      </form>
    </header>
  );
};

export default SearchBar;
