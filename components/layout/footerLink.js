const FooterLink = ({ text, to }) => {
  return (
    <a href={to} className="block mt-2 text-sm text-gray-600 hover:underline">
      {text}
    </a>
  );
};

export default FooterLink;
