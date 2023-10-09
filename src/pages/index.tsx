import { Navigate, Outlet } from "react-router-dom";
const Home = () => {
  return (
    <>
      {/*<Nav />*/}
      <div id="main" className="flex flex-row grow justify-around mt-4">
        <div
          id="main-content"
          className="flex flex-col md:flex-row justify-around w-full max-w-screen-lg h-fit"
        >
          <Outlet />
          <Navigate to="/cv" />
        </div>
      </div>
    </>
  );
};

export default Home;
