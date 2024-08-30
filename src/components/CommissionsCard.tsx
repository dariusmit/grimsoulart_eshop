import commissionsList from "../data/commissionsList";

interface Props {
  id: number;
  openLightbox: (id: number) => void;
}

function CommissionsCard({ id, openLightbox }: Props) {
  const specificCommission = commissionsList.find(
    (commission) => commission.id === id
  );

  return (
    <>
      <div
        className={
          "w-full h-full pb-4 " +
          "min-[1024px]:w-[31vw] min-[1024px]:h-auto " +
          "min-[1024px]:hover:scale-[104%] min-[1024px]:hover:cursor-pointer min-[1024px]:transition min-[1024px]:p-0 min-[1024px]:ease-in-out min-[1024px]:duration-300 " +
          "min-[1440px]:max-w-[32%] " +
          specificCommission!!.marginValues
        }
        onClick={() => openLightbox(id)}
      >
        <div
          className="w-full h-full
          min-[1024px]:h-[31vw]
          min-[1440px]:max-h-[360px]"
        >
          <img
            className="object-cover blur-[0.3px] w-full h-[95.73vw] min-[1024px]:blur-[0.6px] min-[1024px]:h-full"
            src={specificCommission!!.imgUrl}
          ></img>
        </div>
        <div className="text-gray-800 bg-gray-100 min-h-[96px] p-6">
          <p>{specificCommission!!.title}</p>
        </div>
      </div>
    </>
  );
}

export default CommissionsCard;
