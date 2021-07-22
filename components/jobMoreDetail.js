import Button from './shared/button';

const JobMoreDetail = ({ job }) => {
  return (
    <div className="m-0 mt-3 md:ml-6">
      <div className="grid grid-cols-3 gap-3">
        <div className="col-span-2 text-sm">
          <div className="flex flex-col mt-2 md:mt-0 md:grid md:grid-cols-2">
            <span className="font-bold">Department</span>
            <span className="text-left">{job?.department?.join(', ')}</span>
          </div>
          <div className="flex flex-col mt-3 md:grid md:grid-cols-2">
            <span className="font-bold">Hours / Shifts</span>
            <span className="text-left">{job?.hours[0]} hours</span>
          </div>
          <div className="flex flex-col mt-3 md:grid md:grid-cols-2">
            <span className="font-bold">Summary</span>
            <span className="text-left">{job?.description}</span>
          </div>
        </div>
        <div className="text-right flex flex-col">
          <div>
            <Button size="sm">More Details</Button>
          </div>
          <div className="mt-3">
            <Button size="sm">Save Job</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobMoreDetail;
