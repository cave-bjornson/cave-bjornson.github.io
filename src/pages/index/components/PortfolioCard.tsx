import { PortfolioItem } from "./hooks.tsx";

export const PortfolioCard = ({
  portfolioItem,
}: {
  portfolioItem: PortfolioItem;
}) => {
  return (
    <article className="bg-white h-full flex flex-col justify-evenly">
      <div className="grow flex flex-col justify-end">
        <img
          src={
            portfolioItem.imgUrl ??
            "https://placehold.co/640x480?text=No\\nImage"
          }
          alt=""
          className="w-full h-auto"
          width="640"
          height="480"
        />
      </div>
      <h1 className="p-4 text-xl font-bold flex-grow-0">
        {portfolioItem.title}
      </h1>
    </article>
  );
};

export default PortfolioCard;
