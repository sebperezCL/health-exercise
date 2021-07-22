import FooterLink from './footerLink';

const FooterSection = ({ title, items, ...props }) => {
  return (
    <div {...props}>
      <h3 className="text-gray-800 text-2xl font-medium">{title}</h3>
      {items.map(i => (
        <FooterLink key={i.text} text={i.text} to={i.to} />
      ))}
    </div>
  );
};

export default FooterSection;
