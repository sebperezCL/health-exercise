import { useState } from 'react';
import { ChevronRightIcon, ChevronDownIcon } from '@heroicons/react/solid';

import JobDetail from './jobDetail';

const JobGroup = ({ group }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleExpand = () => setIsOpen(!isOpen);

  return (
    <div className="mt-3 flex justify-between items-center border p-4 rounded-lg">
      <div className="flex flex-col w-full">
        <div
          className="flex justify-start items-center"
          role="button"
          onClick={handleExpand}
        >
          <div
            className="uppercase bg-gray-400 w-10 h-10 flex justify-center items-center border rounded-lg"
            style={{ minWidth: '2.5rem' }}
          >
            <span className="text-white font-bold">
              {group?.name?.substring(0, 2)}
            </span>
          </div>
          <div className="pl-3 flex justify-between w-full">
            <span className="text-sm">{`${group?.total_jobs_in_hospital} jobs for ${group?.name}`}</span>
            {isOpen ? (
              <ChevronDownIcon className="h-6 w-6" />
            ) : (
              <ChevronRightIcon className="h-6 w-6" />
            )}
          </div>
        </div>
        {isOpen && group.items?.map(job => <JobDetail job={job} />)}
      </div>
    </div>
  );
};

export default JobGroup;
