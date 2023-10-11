import { Outlet, useLocation } from "react-router-dom";

// import { useLinks } from "../../components/hooks.tsx";
import { useFetchPostInfo } from "./blog/components/useFetchPostInfo.tsx";
import BlogSummaryItem from "./blog/components/BlogSummaryItem.tsx";

const Blog = () => {
  // const blogRoot = useLinks();
  const { posts } = useFetchPostInfo();
  const location = useLocation();
  console.log(location.pathname);

  return (
    <>
      {/*<aside className="md:basis-1/3 bg-white mb-4 md:mb-0">*/}
      {/*  <h1 className="font-bold text-2xl">Blog</h1>*/}
      {/*  <ul>*/}
      {/*    {blogRoot?.map((item, index) => (*/}
      {/*      <li key={index}>*/}
      {/*        <NavLink to={item.path ?? ""}>{item.path}</NavLink>*/}
      {/*      </li>*/}
      {/*    ))}*/}
      {/*  </ul>*/}
      {/*</aside>*/}
      <main className="md:basis-2/3 flex flex-col md:ml-4">
        {location.pathname === "/blog" ? (
          <section className="bg-white">
            {posts
              .map((post, index) => (
                <BlogSummaryItem
                  id={index}
                  title={post.title}
                  summary={post.summary}
                  date={new Date(Date.parse(post.date))}
                  path={post.path}
                />
              ))
              .sort((b) => b.props.date)}
          </section>
        ) : (
          <article className="prose bg-white p-4">
            <Outlet />
          </article>
        )}
      </main>
    </>
  );
};

export default Blog;
