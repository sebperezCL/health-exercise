const JobsCounter = ({ jobsCount, filter }) => {
  return (
    <div className="flex justify-start">
      <span className="text-sm font-semibold">{jobsCount}</span>
      <span className="text-sm font-light pl-1">jobs postings</span>
      {filter?.title && (
        <>
          <span className="text-sm font-light pl-1">with filter</span>
          <span className="text-sm font-semibold pl-1 text-blue-700">
            {filter.title}: {filter?.value}
          </span>
        </>
      )}
    </div>
  );
};

export default JobsCounter;
