import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
const Home = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/cv");
  }, []);

  return (
    <>
      <div id="main" className="flex flex-row grow justify-around mt-4">
        <div
          id="main-content"
          className="flex flex-col md:flex-row justify-around w-full max-w-screen-lg h-fit"
        >
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Home;
