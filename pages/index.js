import { useEffect, useState } from 'react';
import useSWR from 'swr';
import 'tailwindcss/tailwind.css';

import Layout from '../components/layout/layout';
import SearchBar from '../components/searchBar';
import { AppContextProvider } from '../components/context';
import FilterCard from '../components/filterCard';

const Index = () => {
  const [searchValue, setSearchValue] = useState('');

  const { data: filtersFetch, error } = useSWR('/api/filters', fetch);

  useEffect(() => {
    if (filtersFetch) filtersFetch.json().then(data => console.log(data));
    console.log(filtersFetch);
  }, [filtersFetch]);

  return (
    <Layout>
      <AppContextProvider
        value={{
          searchValue: searchValue,
          setSearchValue: setSearchValue,
          filters: {},
        }}
      >
        <SearchBar />
        <main className="mx-auto">
          <div className="mx-0 md:mx-4">
            <div className="block md:grid md:grid-cols-4 gap-3 px-4 sm:px-0 h-full">
              <div className="hidden md:flex h-96">
                <FilterCard />
              </div>
              <div className="md:col-span-3 border-2 border-gray-200 rounded-lg"></div>
            </div>
            {/* <!-- /End replace --> */}
          </div>
        </main>
      </AppContextProvider>
    </Layout>
  );
};
export default Index;
