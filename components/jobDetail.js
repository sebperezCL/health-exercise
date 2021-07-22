import { useEffect, useState } from 'react';
import differenceInWeeks from 'date-fns/differenceInWeeks';
import { PlusIcon, MinusIcon } from '@heroicons/react/solid';

import JobMoreDetail from './jobMoreDetail';

const JobDetail = ({ job }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [salary, setSalary] = useState('');
  const [weeksAgo, setWeeksAgo] = useState('');

  const handleExpand = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (job.salary_range.length === 2) {
      setSalary(`$${job.salary_range[0]} - $${job.salary_range[0]} an hour`);
    }

    if (job.created) {
      try {
        const created = new Date(job.created);
        setWeeksAgo(differenceInWeeks(new Date(), created));
      } catch (error) {
        setWeeksAgo('');
      }
    }
  }, [job]);

  return (
    <div className="mt-3 pt-3 flex flex-col border-t">
      <div role="button" onClick={handleExpand}>
        <div>
          <span className="font-bold text-sm">{job.job_title}</span>
        </div>
        <div className="flex justify-between">
          <div className="flex justify-start items-center">
            {isOpen ? (
              <MinusIcon className="h-6 w-6 text-gray-500" />
            ) : (
              <PlusIcon className="h-6 w-6 text-gray-500" />
            )}
            <span className="text-sm">{`${job.job_type} | ${salary} | ${job.city}`}</span>
          </div>
          <span className="text-sm">{weeksAgo} Weeks Ago</span>
        </div>
      </div>
      {isOpen && <JobMoreDetail job={job} />}
    </div>
  );
};

export default JobDetail;
