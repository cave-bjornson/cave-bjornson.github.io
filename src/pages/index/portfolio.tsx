import { Suspense, useState } from "react";
import { Modal } from "react-responsive-modal";
import { PortfolioItem, useGetPortFolioItems } from "./components/hooks.tsx";
import PortfolioCard from "./components/PortfolioCard.tsx";

const Portfolio = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const portfolioItems = useGetPortFolioItems();
  const [selectedItem, setSelectedItem] = useState<PortfolioItem>();

  const onOpenModal = (portfolioItem: PortfolioItem): void => {
    setSelectedItem(portfolioItem);
    setModalOpen(true);
  };
  const onCloseModal = () => {
    setSelectedItem(undefined);
    setModalOpen(false);
  };

  return (
    <>
      <main className="flex flex-col md:grid md:grid-cols-3 gap-4">
        <Suspense fallback={<div>Loading...</div>}>
          {portfolioItems.map((item) => (
            <a onClick={() => onOpenModal(item)} key={item.id}>
              <PortfolioCard portfolioItem={item} />
            </a>
          ))}
        </Suspense>
      </main>
      <Modal open={modalOpen} onClose={onCloseModal} center={true}>
        <div className="flex flex-col md:w-[640px]">
          <h1 className="text-xl font-bold">{selectedItem?.title}</h1>
          <img
            src={
              selectedItem?.imgUrl ??
              "https://placehold.co/640x480?text=No\\nImage"
            }
            alt=""
          />
          <p>{selectedItem?.description}</p>
        </div>
      </Modal>
    </>
  );
};

export default Portfolio;
