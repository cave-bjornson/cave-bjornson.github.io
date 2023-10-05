import { router } from "../../router.ts";
import { NavLink, Outlet } from "react-router-dom";
export const Component = () => {
  const blogRoot: any[] = useLinks();
  //console.log(blogRoot);

  return (
    <>
      <aside>
        <h1 className="font-bold text-2xl">Blog</h1>
        <ul>
          {blogRoot.map((item) => (
            <li>
              <NavLink to={item.path}>{item.path}</NavLink>
            </li>
          ))}
        </ul>
      </aside>
      <main>
        <article className="prose">
          <Outlet />
        </article>
      </main>
    </>
  );
};

export const useLinks = () => {
  const blogRoot = router.routes[0].children[1].children.find(
    (item) => item.path === "blog"
  );

  return blogRoot.children;
};
