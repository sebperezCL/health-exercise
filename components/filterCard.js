import clsx from 'clsx';

const FilterCard = ({
  searchAttribute,
  setSearchValue,
  title,
  items,
  ...props
}) => {
  const handleClick = key => {
    setSearchValue({ type: searchAttribute, value: key, title });
  };

  return (
    <div {...props}>
      <div className="w-full bg-white border border-gray-200 rounded-lg">
        <div className="flex flex-col items-start ml-4 mr-3">
          <span className="uppercase mt-4 font-medium text-sm">{title}</span>
          <ul className="mt-3 mb-3">
            {Array.isArray(items) &&
              items.map((item, i) => (
                <li
                  key={item.key}
                  className={clsx([
                    'flex',
                    item.key.length > 30
                      ? 'flex-col'
                      : 'items-end justify-start',
                  ])}
                >
                  <span
                    role="button"
                    onClick={() => handleClick(item.key)}
                    className="text-sm font-light"
                  >
                    {item.key}
                  </span>
                  <span className="text-xs font-normal pl-2 text-gray-400">
                    {item.doc_count}
                  </span>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FilterCard;
