import { NavLink, Outlet, useLocation } from "react-router-dom";

import { useLinks } from "../../components/hooks.tsx";
import { useEffect, useState } from "react";
const Blog = () => {
  const blogRoot = useLinks();
  const { posts } = useFetchPostInfo();
  const location = useLocation();
  console.log(location.pathname);

  return (
    <>
      <aside>
        <h1 className="font-bold text-2xl">Blog</h1>
        <ul>
          {blogRoot?.map((item, index) => (
            <li key={index}>
              <NavLink to={item.path ?? ""}>{item.path}</NavLink>
            </li>
          ))}
        </ul>
      </aside>
      <main>
        {location.pathname === "/blog" ? (
          <>
            <h1>Summary</h1>
            <ul>
              {posts.map((post, index) => (
                <li key={index}>{post}</li>
              ))}
            </ul>
          </>
        ) : (
          <article className="prose">
            <Outlet />
          </article>
        )}
      </main>
    </>
  );
};

export default Blog;

export const useFetchPostInfo = () => {
  const [posts, setPosts] = useState<string[]>([]);
  const blogRoot = useLinks();

  const updatePosts = (post: string) => {
    setPosts((prevState) => [...prevState, post]);
  };

  useEffect(() => {
    (async function onLoad() {
      const postPaths = blogRoot?.filter(
        (item) => item.path && item?.path?.length > 0
      );
      postPaths?.forEach((item) => {
        import(`./blog/${item.path}.mdx`).then((res) => {
          updatePosts(res.title);
        });
      });
    })();
  }, [blogRoot]);

  return { posts };
};
