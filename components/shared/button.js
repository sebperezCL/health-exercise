const Button = ({ children }) => {
  return (
    <button class="bg-transparent hover:bg-blue-500 text-blue-500 hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-lg">
      {children}
    </button>
  );
};

export default Button;
