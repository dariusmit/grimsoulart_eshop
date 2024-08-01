import { ReactNode, useState } from "react";

interface Props {
  title: string;
  children: ReactNode;
  style?: string;
}

function Collapsible({ title, children, style }: Props) {
  let [collapsibleClass, setCollapsibleClass] = useState("hidden");

  function setEmoji() {
    if (title == "Instant Download") {
      return <p className="mr-2">🚚</p>;
    } else if (title == "What People Say") {
      return <p className="mr-2">⭐</p>;
    } else return <p className="mr-2">📝</p>;
  }

  return (
    <>
      <div
        onClick={() =>
          collapsibleClass == "hidden"
            ? setCollapsibleClass("block")
            : setCollapsibleClass("hidden")
        }
        className={"pb-2 hover:cursor-pointer w-full border-t " + style}
      >
        <h1 className="flex py-2">
          {setEmoji()}
          {title}
        </h1>
        <div className={collapsibleClass}>{children}</div>
      </div>
    </>
  );
}

export default Collapsible;
