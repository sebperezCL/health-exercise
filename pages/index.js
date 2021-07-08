import { useEffect, useState } from 'react';
import useSWR from 'swr';
import axios from 'axios';
import 'tailwindcss/tailwind.css';
import queryString from 'query-string';

import Layout from '../components/layout/layout';
import SearchBar from '../components/searchBar';
import FilterCard from '../components/filterCard';
import JobsResultsList from '../components/jobsResultList';

const Index = () => {
  const [searchValue, setSearchValue] = useState({});
  const [searchUrl, setSearchUrl] = useState('/api/jobs');
  const [sort, setSort] = useState({});
  const [filters, setFilters] = useState({});
  const [jobs, setJobs] = useState({});
  const fetcher = url => axios.get(url).then(res => res.data);

  // Using SWR to deal with slow api, caching the response results
  const { data: filtersFetch } = useSWR('/api/filters', fetcher);
  const { data: jobsFetch } = useSWR(searchUrl, fetcher);

  // To build the url to call the api based in sort and filters objects.
  useEffect(() => {
    const sortString = queryStringFromObject(sort);

    if (searchValue?.type) {
      return setSearchUrl(
        `/api/jobs?type=${searchValue?.type}&value=${searchValue?.value}&${sortString}`
      );
    }
    setSearchUrl(`/api/jobs?${sortString}`);
  }, [searchValue, sort]);

  useEffect(() => {
    if (filtersFetch) setFilters(filtersFetch);
  }, [filtersFetch]);

  useEffect(() => {
    if (jobsFetch) setJobs(jobsFetch);
    console.log(jobsFetch);
  }, [jobsFetch]);

  const queryStringFromObject = filters => {
    return queryString.stringify(
      Object.fromEntries(
        Object.entries(filters).filter(value => (value[1] ? value : null))
      )
    );
  };

  return (
    <Layout>
      <SearchBar setSearchValue={setSearchValue} searchValue={searchValue} />
      <main className="mx-auto">
        <div className="mx-0 md:mx-4">
          <div className="block md:grid md:grid-cols-5 md:gap-3 px-0 h-full">
            <div className="hidden md:flex md:flex-col">
              <FilterCard
                setSearchValue={setSearchValue}
                searchAttribute="job_type"
                title="Job Type"
                items={filters['job_type'] ?? {}}
              />
              <FilterCard
                setSearchValue={setSearchValue}
                title="Department"
                searchAttribute="department"
                items={filters['department'] ?? {}}
                className="mt-3"
              />
              <FilterCard
                setSearchValue={setSearchValue}
                title="Work Schedule"
                searchAttribute="work_schedule"
                items={filters['work_schedule'] ?? {}}
                className="mt-3"
              />
              <FilterCard
                setSearchValue={setSearchValue}
                title="Experience"
                searchAttribute="experience"
                items={filters['experience'] ?? {}}
                className="mt-3"
              />
            </div>
            <JobsResultsList
              jobsData={jobs}
              filter={searchValue}
              setSort={setSort}
              sort={sort}
            />
          </div>
        </div>
      </main>
    </Layout>
  );
};
export default Index;
