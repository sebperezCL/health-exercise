import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/outline';

const SortOption = ({ title, sort, setSort }) => {
  const handleClick = () => {
    if (sort[title] === 'asc') return setSort({ ...sort, [title]: 'desc' });
    if (!sort[title]) return setSort({ ...sort, [title]: 'asc' });
    setSort({ ...sort, [title]: '' });
  };
  return (
    <div
      className="flex justify-start px-3"
      role="button"
      onClick={handleClick}
    >
      <span className="text-sm font-light">{title}</span>
      {sort[title] ? (
        sort[title] === 'asc' ? (
          <ChevronUpIcon className="w-5 h-5" />
        ) : (
          <ChevronDownIcon className="w-5 h-5" />
        )
      ) : (
        ''
      )}
    </div>
  );
};

export default SortOption;
