import jobs from '../data/jobs.json';

// used to remove stopwords from index
import sw from 'stopword';

/**
 * Function to create a simple index of the jobs file,
 * it only indexes this fields:
 * - required_skills
 * - name
 * - county
 * - type
 * - work_schedule
 * - required_credentials
 * - description
 * - job_title
 * - department
 * - job_type
 */
export default () => {
  const index = [];
  jobs.map(hospital => {
    hospital.items.map(job => {
      const entry = { job_id: job.job_id };
      const skills = getWords(job.required_skills);
      const credentials = getWords(job.required_credentials);
      const department = getWords(job.department);
      const description = getWords(job.description.split(' '));
      const name = getWords(job.name.split(' '));
      entry.values = [
        ...skills,
        ...credentials,
        ...department,
        ...description,
        ...name,
        job.county.toLowerCase(),
        job.type.toLowerCase(),
        job.job_type.toLowerCase(),
        job.work_schedule.toLowerCase(),
      ];
      index.push(entry);
    });
  });
  return { jobs, index };
};

export const getWords = wordsArray => {
  return sw.removeStopwords(wordsArray.join(' ').toLowerCase().split(' '));
};
