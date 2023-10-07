import { NavLink, Outlet, useLocation } from "react-router-dom";

import { useLinks } from "../../components/hooks.tsx";
import { useFetchPostInfo } from "./blog/components/useFetchPostInfo.tsx";

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
          <section>
            <h1>Summary</h1>
            {posts.map((post, index) => (
              <article key={index}>
                <h2>{post.title}</h2>
                <p>{post.summary}</p>
              </article>
            ))}
          </section>
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
