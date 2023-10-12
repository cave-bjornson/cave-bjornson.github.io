import routes from "~react-pages";

const Dev = () => {
  console.log(routes);

  return <pre>{JSON.stringify(routes, null, 2)}</pre>;
};

export default Dev;
