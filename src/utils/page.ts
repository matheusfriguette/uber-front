import axios from "axios";

export const getPaths = async () => {
  const { data } = await axios.get("http://localhost:1337/pages");

  console.log(data);

  const paths = data.map((item) => ({ params: { slug: [item.url] } }));

  console.log(paths);

  return paths;
};

export const getPage = async (id: string) => {
  const { data } = await axios.get(`http://localhost:1337/pages/${id}`);

  return data;
};

export const getHeader = async () => {
  const { data } = await axios.get(`http://localhost:1337/header`);

  return data;
};
