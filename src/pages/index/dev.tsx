import routes from "~react-pages";

const Dev = () => {
  return <pre>{JSON.stringify(routes, null, 2)}</pre>;
};

export default Dev;
