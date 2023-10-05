import { useFakeOctokit } from "../../components/hooks.tsx";
import { useState } from "react";
import { Modal } from "react-responsive-modal";
import { GithubRepo } from "../../components/hooks.tsx";

const Portfolio = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [item, setItem] = useState("");

  //const { repos } = useOctokit();
  const repos: Array<GithubRepo> = useFakeOctokit();

  const onOpenModal = (portfolioitem: string): void => {
    setItem(portfolioitem);
    setModalOpen(true);
  };
  const onCloseModal = () => {
    setItem("");
    setModalOpen(false);
  };

  return (
    <>
      <ol>
        {repos &&
          repos.map((repo: GithubRepo) => (
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

export default Portfolio;
