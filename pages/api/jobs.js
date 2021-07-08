import readData from '../../lib/readData';

const { jobs, index } = readData();

export default async (req, res) => {
  res.statusCode = 200;
  // @todo: implement filters and search
  // @todo: implement automated tests

  // this timeout emulates unstable network connection, do not remove this one
  // you need to figure out how to guarantee that client side will render
  // correct results even if server-side can't finish replies in the right order
  await new Promise(resolve => setTimeout(resolve, 1000 * Math.random()));

  if (req.query?.type) {
    const { type, value } = req.query;
    if (type !== 'keyword') {
      /*const responseJobs = filterByAttribute(jobs, type, value);
      const totalJobs = calculateTotalJobs(responseJobs);
      return res.json({ jobs: responseJobs, totalJobs });*/
      return res.json(
        createResponseObject(filterByAttribute(jobs, type, value))
      );
    }

    const responseJobs = filterByKeyword(jobs, value);
    const totalJobs = calculateTotalJobs(responseJobs);
    return res.json({ jobs: responseJobs, totalJobs });
  }
  const totalJobs = calculateTotalJobs(jobs);
  return res.json({ jobs: jobs, totalJobs });
};

const createResponseObject = jobs => {
  return { jobs, totalJobs: calculateTotalJobs(jobs) };
};

const calculateTotalJobs = jobs => {
  const totalJobs = jobs.reduce(
    (totalJobs, item) => totalJobs + parseInt(item.total_jobs_in_hospital),
    0
  );
  return totalJobs;
};

const filterByAttribute = (jobs, attribute, value) => {
  const result = [];
  jobs.map(hospital => {
    const newValue = { ...hospital };
    newValue.items = hospital.items?.filter(item => {
      if (Array.isArray(item[attribute]))
        return item[attribute].includes(value);
      return item[attribute] === value;
    });
    newValue.total_jobs_in_hospital = newValue.items.length;
    result.push(newValue);
  });
  return result;
};

const filterByKeyword = (jobs, value) => {
  const result = [];
  const searchValues = value.toLowerCase().split(' ');

  // Look for the intersection within the search values array and
  // index array to get the job id's
  const ids = index
    .filter(job => {
      const newArray = intersect(job.values, searchValues);
      return newArray.length === searchValues.length;
    })
    .map(entry => entry.job_id);

  jobs.map(hospital => {
    const newValue = { ...hospital };
    newValue.items = hospital.items?.filter(item => ids.includes(item.job_id));
    newValue.total_jobs_in_hospital = newValue.items.length;
    result.push(newValue);
  });

  return result;
};

function intersect(a, b) {
  const setA = new Set(a);
  const setB = new Set(b);
  const intersection = new Set([...setA].filter(x => setB.has(x)));
  return Array.from(intersection);
}
