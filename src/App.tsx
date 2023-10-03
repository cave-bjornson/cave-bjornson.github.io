import useKeypress from "react-use-keypress";
import { useEffect, useState } from "react";
import { useNavigate, useRoutes } from "react-router-dom";
import { CV } from "./CV.tsx";
import { Simple404 } from "@404pagez/react";
import { About } from "./About.tsx";
import { Nav } from "./Nav.tsx";
import { Portfolio } from "./Portfolio.tsx";
import { Modal } from "react-responsive-modal";

export const App = () => {
  const [nKeyPress, setNKeyPress] = useState(0);
  const [leetOpen, setLeetOpen] = useState(false);

  const keySequence = ["1", "3", "3", "7"];
  const navigate = useNavigate();

  useEffect(() => {
    if (nKeyPress >= keySequence.length) {
      onOpenLeetModal();
    }
  }, [nKeyPress, keySequence.length]);

  const incrementCount = () => {
    setNKeyPress(nKeyPress + 1);
  };

  useKeypress(["1", "3", "7"], (event) => {
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

  const element = useRoutes([
    {
      path: "/",
      element: <About />,
    },
    { path: "cv", element: <CV /> },
    { path: "portfolio", element: <Portfolio /> },
    {
      path: "*",
      element: (
        <Simple404
          size={20}
          isButton={true}
          buttonLabel="Home"
          onButtonClick={() => {
            navigate("/");
          }}
        />
      ),
    },
  ]);

  return (
    <>
      <Nav />
      <div id="main-content" className="lg:flex">
        {element}
        <Modal open={leetOpen} onClose={onCloseLeetModal} center={true}>
          <h1>1337</h1>
        </Modal>
      </div>
    </>
  );
};
