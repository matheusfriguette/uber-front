import { getPage, getPaths } from "utils/page";
import { sectionList } from "utils/section";

const Home = ({ page }) => {
  const sections = page.sections.map((section) => {
    const Component = sectionList[section["__component"]];

    return <Component data={section} />;
  });

  return <>{sections}</>;
};

export const getStaticPaths = async () => {
  const paths = await getPaths();

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async () => {
  const page = await getPage("2");

  return {
    props: {
      page,
    },
  };
};

export default Home;
