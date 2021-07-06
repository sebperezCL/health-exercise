import { AppContextConsumer } from '../components/context';
const SearchBar = () => {
  return (
    <AppContextConsumer>
      {({ searchValue, setSearchValue }) => {
        const handleChange = event => {
          setSearchValue(event.target.value);
        };

        const handleSubmit = event => {
          event.preventDefault();
          console.log(searchValue);
        };

        return (
          <header className="bg-white shadow md:m-4 border-t-2 md:border-none">
            <form onSubmit={handleSubmit}>
              <div className="mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-start">
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
                  placeholder="Search for any job, title, keywords or company"
                  value={searchValue}
                  onChange={handleChange}
                />
              </div>
            </form>
          </header>
        );
      }}
    </AppContextConsumer>
  );
};

export default SearchBar;
