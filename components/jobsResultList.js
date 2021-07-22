import JobGroup from './jobGroup';
import JobsCounter from './jobsCounter';
import SortBar from './sortBar';

const JobsResultsList = ({ jobsData, filter, setJobs }) => {
  return (
    <div className="md:col-span-4 bg-white border border-gray-200 rounded-lg">
      <div className="flex justify-between m-3">
        <JobsCounter jobsCount={jobsData?.totalJobs} filter={filter} />
        <SortBar jobsData={jobsData} filter={filter} setJobs={setJobs} />
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
