import { useEffect, useState } from 'react';
import useSWR from 'swr';
import 'tailwindcss/tailwind.css';

import Layout from '../components/layout/layout';
import SearchBar from '../components/searchBar';
import FilterCard from '../components/filterCard';
import JobsResultsList from '../components/jobsResultList';

const Index = () => {
  const [searchValue, setSearchValue] = useState('');
  const [filters, setFilters] = useState({});
  const [jobs, setJobs] = useState({});

  // Using SWR to deal with slow api, caching the response results
  const { data: filtersFetch } = useSWR('/api/filters', fetch);
  const { data: jobsFetch } = useSWR('/api/jobs', fetch);

  useEffect(() => {
    if (filtersFetch)
      filtersFetch
        .json()
        .then(data => setFilters(data))
        .catch(err => console.log(err));
  }, [filtersFetch]);

  useEffect(() => {
    if (jobsFetch)
      jobsFetch
        .json()
        .then(data => setJobs(data))
        .catch(err => console.log(err));
  }, [jobsFetch]);

  return (
    <Layout>
      <SearchBar />
      <main className="mx-auto">
        <div className="mx-0 md:mx-4">
          <div className="block md:grid md:grid-cols-5 md:gap-3 px-0 h-full">
            <div className="hidden md:flex md:flex-col">
              <FilterCard title="Job Type" items={filters['job_type'] ?? {}} />
              <FilterCard
                title="Department"
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
            <JobsResultsList jobsData={jobs} />
          </div>
          {/* <!-- /End replace --> */}
        </div>
      </main>
    </Layout>
  );
};
export default Index;
