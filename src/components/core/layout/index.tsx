import Header from "components/header";

const Layout = ({ headerData, children }) => {
  return (
    <>
      <Header data={headerData} />
      {children}
    </>
  );
};

export default Layout;
