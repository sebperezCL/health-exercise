import { useState } from 'react';
import 'tailwindcss/tailwind.css';

import Layout from '../components/layout/layout';
import SearchBar from '../components/searchBar';
import { AppContextProvider } from '../components/context';

const Index = () => {
  const [searchValue, setSearchValue] = useState('');
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
            {/* <!-- Replace with your content --> */}
            <div className="px-4 py-6 sm:px-0">
              <div className="border-4 border-dashed border-gray-200 rounded-lg h-96"></div>
            </div>
            {/* <!-- /End replace --> */}
          </div>
        </main>
      </AppContextProvider>
    </Layout>
  );
};
export default Index;
