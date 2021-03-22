import Dropdown from "components/header/components/dropdown";
import Link from "components/header/components/link";

const Item = ({ type, label, href, subitems }) => {
  if (type === "link") {
    return <Link label={label} href={href} />;
  }

  if (type === "dropdown") {
    return <Dropdown label={label} subitems={subitems} />;
  }
};

export default Item;
