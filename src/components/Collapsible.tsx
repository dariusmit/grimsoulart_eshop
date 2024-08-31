import { ReactNode, useState } from "react";

interface Props {
  title: string;
  children: ReactNode;
  style?: string;
}

function Collapsible({ title, children, style }: Props) {
  let [collapsibleClass, setCollapsibleClass] = useState("hidden");
  let [collapsibleArrow, changeCollapsibleArrow] = useState("up");

  function setEmoji() {
    if (title == "Instant Download") {
      return <p className="mr-2">🚚</p>;
    } else if (title == "What People Say") {
      return <p className="mr-2">⭐</p>;
    } else return <p className="mr-2">📝</p>;
  }

  function openCollapsile() {
    if (collapsibleClass === "hidden") {
      setCollapsibleClass("block");
    } else {
      setCollapsibleClass("hidden");
    }
    if (collapsibleArrow === "down") {
      changeCollapsibleArrow("up");
    } else {
      changeCollapsibleArrow("down");
    }
  }

  return (
    <>
      <div
        onClick={openCollapsile}
        className={"pb-2 hover:cursor-pointer w-full border-t " + style}
      >
        <div className="flex justify-between py-2 text-gray-700">
          <div className="flex">
            {setEmoji()}
            {title}
          </div>
          <img
            className="w-[2.67vw] min-[1024px]:w-[0.98vw] min-[1440px]:w-[0.69vw] h-auto"
            src={
              collapsibleArrow === "down"
                ? "../../images/arrow-up.svg"
                : "../../images/arrow-down.svg"
            }
          />
        </div>
        <div className={" " + collapsibleClass}>{children}</div>
      </div>
    </>
  );
}

export default Collapsible;
