const MenuItem = ({ children }) => {
  return (
    <a
      href="#"
      className="hover:bg-gray-100 text-black block md:flex px-3 py-2 rounded-md text-base md:text-sm uppercase"
    >
      {children}
    </a>
  );
};

export default MenuItem;
