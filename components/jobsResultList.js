import { useEffect } from 'react';

import JobGroup from './jobGroup';

const JobsResultsList = ({ jobsData }) => {
  useEffect(() => {
    console.log(jobsData);
  }, [jobsData]);
  return (
    <div className="md:col-span-4 bg-white border border-gray-200 rounded-lg">
      <div className="flex justify-between m-3">
        <div className="flex justify-start">
          <span className="text-sm font-semibold">{jobsData?.totalJobs}</span>
          <span className="text-sm font-light pl-1">jobs postings</span>
        </div>
        <div className="hidden md:flex md:justify-start">
          <span className="text-sm font-semibold px-3">Sort by</span>
          <span className="text-sm font-light px-3">Location</span>
          <span className="text-sm font-light px-3">Role</span>
          <span className="text-sm font-light px-3">Department</span>
          <span className="text-sm font-light px-3">Education</span>
          <span className="text-sm font-light px-3">Experience</span>
        </div>
      </div>
      <div className="flex flex-col m-3">
        {jobsData.jobs?.map((job, i) => (
          <JobGroup key={`${job.name}${i}`} group={job} />
        ))}
      </div>
    </div>
  );
};

export default JobsResultsList;
