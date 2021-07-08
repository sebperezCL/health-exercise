import { useState } from 'react';
import SortOption from './sortOption';
const SortBar = () => {
  const [sort, setSort] = useState({});

  return (
    <div className="hidden md:flex md:justify-start">
      <span className="text-sm font-semibold px-3">Sort by</span>
      <SortOption title="Location" sort={sort} setSort={setSort} />
      <SortOption title="Role" sort={sort} setSort={setSort} />
      <SortOption title="Department" sort={sort} setSort={setSort} />
      <SortOption title="Education" sort={sort} setSort={setSort} />
      <SortOption title="Experience" sort={sort} setSort={setSort} />
    </div>
  );
};

export default SortBar;
