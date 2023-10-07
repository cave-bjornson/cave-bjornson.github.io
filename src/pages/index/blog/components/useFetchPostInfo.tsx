import { useEffect, useState } from "react";
import { useLinks } from "../../../../components/hooks.tsx";

export const useFetchPostInfo = () => {
  const [posts, setPosts] = useState<PostMeta[]>([]);
  const blogRoot = useLinks();

  const updatePosts = (post: PostMeta) => {
    setPosts((prevState) => [...prevState, post]);
  };

  useEffect(() => {
    (async function onLoad() {
      const postPaths = blogRoot?.filter(
        (item) => item.path && item?.path?.length > 0
      );
      postPaths?.forEach((item) => {
        import(`../${item.path}.mdx`).then((res) => {
          updatePosts({ title: res.frontmatter.title, summary: "" });
        });
      });
    })();
  }, [blogRoot]);

  return { posts };
};

export interface PostMeta {
  title: string;
  summary: string;
}
