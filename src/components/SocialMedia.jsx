function SocialMedia({ icon, title, url }) {
  return (
    <a className="flex text-blue-600 hover:text-blue-800 px-6" href={url}>
      {icon}
      <span className="ml-2">{title}</span>
    </a>
  );
}

export default SocialMedia;
