import loadable from "@loadable/component";

const LoadablePage = loadable(
  (props) => {
    return import(`./${props.page}.mdx`);
  },
  {
    fallback: <div>Page is Loading...</div>,
    cacheKey: (props) => props.page,
  }
);

export const Facade = ({ name }) => {
  return <LoadablePage page={name} />;
};
