import Link from "next/link";
import classnames from "classnames";

const ButtonLink = ({ label, href }) => {
  const buttonLinkClass = classnames(
    "inline-block bg-white py-3 px-6 font-body font-medium leading-tight"
  );

  return (
    <Link href={href}>
      <a className={buttonLinkClass}>{label}</a>
    </Link>
  );
};

export default ButtonLink;
