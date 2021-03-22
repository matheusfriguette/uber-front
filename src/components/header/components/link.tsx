import NextLink from "next/link";

const Link = ({ label, href }) => {
  return (
    <NextLink href={href}>
      <a className="flex items-center py-2 px-3 rounded-3xl hover:bg-gray">
        <div className="font-medium font-body text-white text-sm">{label}</div>
      </a>
    </NextLink>
  );
};

export default Link;
