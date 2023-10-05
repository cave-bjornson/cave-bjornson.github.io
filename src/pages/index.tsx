import { Nav } from "../components/Nav.tsx";
import { Outlet } from "react-router-dom";

import routes from "~react-pages";
const Home = () => {
  // console.log(routes);

  return (
    <>
      <Nav />
      <div id="main-content" className="lg:flex">
        <Outlet />
      </div>
    </>
  );
};

export default Home;
