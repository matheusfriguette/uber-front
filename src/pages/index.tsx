import Layout from "components/core/layout";
import { getPage, getHeader } from "utils/page";
import { sectionList } from "utils/section";

const Home = ({ page, header }) => {
  console.log(header);
  const sections = page.sections.map((section) => {
    const Component = sectionList[section["__component"]];

    return <Component data={section} />;
  });

  return <Layout headerData={header}>{sections}</Layout>;
};

export const getStaticProps = async () => {
  const page = await getPage("2");
  const header = await getHeader();

  return {
    props: {
      page,
      header,
    },
  };
};

export default Home;
