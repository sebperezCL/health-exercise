import JobGroup from './jobGroup';
import JobsCounter from './jobsCounter';

const JobsResultsList = ({ jobsData, filter }) => {
  return (
    <div className="md:col-span-4 bg-white border border-gray-200 rounded-lg">
      <div className="flex justify-between m-3">
        <JobsCounter jobsCount={jobsData?.totalJobs} filter={filter} />
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
