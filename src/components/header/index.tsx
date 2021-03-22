import NextLink from "next/link";

import Item from "./components/item";

const Header = ({ data }) => {
  return (
    <header className="bg-black">
      <div className="lg:container">
        <div className="py-4">
          <nav className="flex justify-between items-center">
            <div className="flex items-center">
              <NextLink href="/">
                <a className="font-title font-normal text-white text-2xl">
                  {data.title}
                </a>
              </NextLink>
              <ul className="flex items-center mx-6">
                {data.items.map((item, index) => (
                  <li className={index > 0 && "ml-1"}>
                    <Item
                      type={item.type}
                      label={item.label}
                      href={item.href}
                      subitems={item.subitems}
                    />
                  </li>
                ))}
              </ul>
            </div>
            <div></div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
