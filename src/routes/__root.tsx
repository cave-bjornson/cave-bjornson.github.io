import { Outlet } from "react-router-dom";
import { Nav } from "../components/Nav.tsx";

export const Component = () => {
  return (
    <>
      <Nav />
      <div id="main-content" className="lg:flex">
        <Outlet />
      </div>
    </>
  );
};
