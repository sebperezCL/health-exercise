import { useEffect, useState } from 'react';
import SortOption from './sortOption';
const SortBar = ({ jobsData, filter, setJobs }) => {
  const [sort, setSort] = useState({});

  // Clears sort object after every search to the api
  useEffect(() => {
    setSort({});
  }, [filter]);

  useEffect(() => {
    const { jobs, unSorted } = jobsData;
    if (jobs) {
      let result = [];
      if (sort['Location'])
        result = sortHelper(
          result.length > 0 ? result : jobs,
          'Location',
          'name'
        );
      if (sort['Role'])
        result = sortHelper(
          result.length > 0 ? result : jobs,
          'Role',
          'job_title'
        );
      if (sort['Total Jobs']) {
        console.log('aca');
        result = sortHelper(
          result.length > 0 ? result : jobs,
          'Total Jobs',
          'total_jobs_in_hospital'
        );
      }

      if (sort['Location'] || sort['Role'] || sort['Total Jobs']) {
        return setJobs({ ...jobsData, jobs: [...result] });
      }
      return setJobs({ ...jobsData, jobs: [...unSorted] });
    }
  }, [sort]);

  const sortHelper = (originalArray, attribute, keyJson) => {
    let result = [];
    if (sort[attribute] && sort[attribute] === 'asc') {
      result = originalArray.sort(compare(keyJson));
    } else if (sort[attribute] && sort[attribute] === 'desc')
      result = originalArray.reverse(compare(keyJson));
    return result.length > 0 ? result : originalArray;
  };

  const compare = key => (a, b) => {
    if (a[key] < b[key]) {
      return -1;
    }
    if (a[key] > b[key]) {
      return 1;
    }
    return 0;
  };

  return (
    <div className="hidden md:flex md:justify-start">
      <span className="text-sm font-semibold px-3">Sort by</span>
      <SortOption title="Location" sort={sort} setSort={setSort} />
      <SortOption title="Role" sort={sort} setSort={setSort} />
      <SortOption title="Total Jobs" sort={sort} setSort={setSort} />
    </div>
  );
};

export default SortBar;
