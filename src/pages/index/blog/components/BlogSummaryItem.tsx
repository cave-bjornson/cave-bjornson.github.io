import { NavLink } from "react-router-dom";

const BlogSummaryItem = (item: BlogSummaryData) => {
  return (
    <article className="px-4 py-0.5 border-b border-black last:border-0">
      <div className="flex w-full justify-between my-2">
        <NavLink to={item.path ?? ""}>
          <h1 className="text-2xl font-bold">{item.title}</h1>
        </NavLink>
        <h2 className="text-xl font-semibold">
          {item.date.toLocaleDateString()}
        </h2>
      </div>
      <p className="my-4">{`${item.summary}\u2026`}</p>
    </article>
  );
};

export default BlogSummaryItem;

export type BlogSummaryData = {
  id: number;
  title: string;
  summary: string;
  date: Date;
  path: string | undefined;
};
