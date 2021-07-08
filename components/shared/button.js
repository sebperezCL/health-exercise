import { useEffect, useState } from 'react';

const Button = ({ children, size, ...props }) => {
  const [style, setStyle] = useState(
    'bg-transparent hover:bg-blue-500 text-blue-500 hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-lg'
  );

  useEffect(() => {
    if (size === 'sm') {
      setStyle(
        'bg-transparent hover:bg-blue-500 text-blue-500 hover:text-white py-1 px-2 border border-blue-500 hover:border-transparent rounded-lg text-sm'
      );
    }
  }, [size]);

  return (
    <button className={style} {...props}>
      {children}
    </button>
  );
};

export default Button;
