import NextLink from "next/link";
import classnames from "classnames";

const Link = ({ label, href }) => {
  return (
    <NextLink href={href}>
      <a className="inline-block font-body text-gray">
        <div className="pb-1 underline-animation">{label}</div>
      </a>
    </NextLink>
  );
};

export default Link;
