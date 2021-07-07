import { useEffect, useState } from 'react';
import useSWR from 'swr';
import 'tailwindcss/tailwind.css';

import Layout from '../components/layout/layout';
import SearchBar from '../components/searchBar';
import { AppContextProvider } from '../components/context';
import FilterCard from '../components/filterCard';

const Index = () => {
  const [searchValue, setSearchValue] = useState('');
  const [filters, setFilters] = useState({});

  const { data: filtersFetch, error } = useSWR('/api/filters', fetch);

  useEffect(() => {
    if (filtersFetch)
      filtersFetch
        .json()
        .then(data => setFilters(data))
        .catch(err => console.log(err));
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
            <div className="block md:grid md:grid-cols-5 gap-3 px-4 sm:px-0 h-full">
              <div className="hidden md:flex md:flex-col">
                <FilterCard
                  title="Job Type"
                  items={filters['job_type'] ?? {}}
                />
                <FilterCard
                  title="Job Type"
                  items={filters['department'] ?? {}}
                  className="mt-3"
                />
                <FilterCard
                  title="Work Schedule"
                  items={filters['work_schedule'] ?? {}}
                  className="mt-3"
                />
                <FilterCard
                  title="Experience"
                  items={filters['experience'] ?? {}}
                  className="mt-3"
                />
              </div>
              <div className="md:col-span-4 border-2 border-gray-200 rounded-lg"></div>
            </div>
            {/* <!-- /End replace --> */}
          </div>
        </main>
      </AppContextProvider>
    </Layout>
  );
};
export default Index;
