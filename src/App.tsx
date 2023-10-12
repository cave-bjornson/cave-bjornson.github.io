import useKeypress from "react-use-keypress";
import { Suspense, useEffect, useState } from "react";
import { RouteObject, useRoutes } from "react-router-dom";
import { Modal } from "react-responsive-modal";
import routes from "~react-pages";
import { Nav } from "./components/Nav.tsx";
import { Footer } from "./components/Footer.tsx";
import CurryV from "./pages/index/index.tsx";

export const App = () => {
  const [nKeyPress, setNKeyPress] = useState(0);
  const [leetOpen, setLeetOpen] = useState(false);

  const keySequence = ["1", "3", "3", "7"];
  // const navigate = useNavigate();

  useEffect(() => {
    if (nKeyPress >= keySequence.length) {
      onOpenLeetModal();
    }
  }, [nKeyPress, keySequence.length]);

  const incrementCount = () => {
    setNKeyPress(nKeyPress + 1);
  };

  useKeypress(["1", "3", "7"], (event: { key: string }) => {
    if (event.key === keySequence[nKeyPress]) {
      console.log(event.key);
      incrementCount();
    } else {
      setNKeyPress(0);
    }
  });

  const onOpenLeetModal = () => {
    console.log("Modal opening" + leetOpen);
    setLeetOpen(true);
  };
  const onCloseLeetModal = () => {
    console.log("Modal closing" + leetOpen);
    setLeetOpen(false);
  };

  // const element = useRoutes([
  //   {
  //     path: "/",
  //     element: <About />,
  //   },
  //   { path: "cv", element: <CV /> },
  //   { path: "portfolio", element: <Portfolio /> },
  //   { path: "blog", element: "" },
  //   {
  //     path: "*",
  //     element: (
  //       <Simple404
  //         size={20}
  //         isButton={true}
  //         buttonLabel="Home"
  //         onButtonClick={() => {
  //           navigate("/");
  //         }}
  //       />
  //     ),
  //   },
  // ]);

  const cvRoute: RouteObject = {
    path: "/",
    children: [{ path: "cv", element: <CurryV /> }],
  };

  // @ts-ignore
  routes[0].children = [...routes[0].children, cvRoute];

  return (
    <div
      id="body"
      className="bg-gray-200 min-h-screen flex flex-col justify-items-stretch"
    >
      <Nav />
      <Suspense fallback={<div>Loading...</div>}>{useRoutes(routes)}</Suspense>
      <Footer />
      <Modal open={leetOpen} onClose={onCloseLeetModal} center={true}>
        <h1>1337</h1>
      </Modal>
    </div>
  );
};
