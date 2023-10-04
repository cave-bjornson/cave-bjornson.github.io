import { Simple404 } from "@404pagez/react";
import { useNavigate } from "react-router-dom";

export const Component = () => {
  const navigate = useNavigate();

  return (
    <>
      <Simple404
        size={20}
        isButton={true}
        buttonLabel="Home"
        onButtonClick={() => {
          navigate("/");
        }}
      />
    </>
  );
};
