import { useFakeOctokit } from "./hooks.tsx";
import { useState } from "react";
import { Modal } from "react-responsive-modal";

export const Portfolio = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [item, setItem] = useState(null);

  //const { repos } = useOctokit();
  const { repos } = useFakeOctokit();

  const onOpenModal = (portfolioitem) => {
    setItem(portfolioitem);
    setModalOpen(true);
  };
  const onCloseModal = () => {
    setItem(null);
    setModalOpen(false);
  };

  return (
    <>
      <ol>
        {repos &&
          repos.map((repo) => (
            <li key={repo.id} onClick={() => onOpenModal(repo.name)}>
              {repo.name}
            </li>
          ))}
      </ol>
      <Modal open={modalOpen} onClose={onCloseModal} center={true}>
        <h1>{item}</h1>
      </Modal>
    </>
  );
};
