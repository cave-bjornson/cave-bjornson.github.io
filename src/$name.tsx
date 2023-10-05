import { useParams } from "react-router-dom";
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

export const Component = () => {
  const { name } = useParams();

  return <LoadablePage page={name} />;
};
