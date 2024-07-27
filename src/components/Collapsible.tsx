import { ReactNode, useState } from "react";

interface Props {
  title: string;
  children: ReactNode;
  style?: string;
}

function Collapsible({ title, children, style }: Props) {
  let [collapsibleClass, setCollapsibleClass] = useState("hidden");

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
        <h1 className="py-2">{title}</h1>
        <div className={collapsibleClass}>{children}</div>
      </div>
    </>
  );
}

export default Collapsible;
