interface Props {
  children: string;
  onClick: () => void;
  condition?: boolean;
}

function Button({ children, onClick, condition }: Props) {
  return (
    <>
      <button
        onClick={onClick}
        className={
          condition
            ? "opacity-40 pointer-events-none pb-1 border-white border-b min-[1024px]:hover:border-black min-[1024px]:transition min-[1024px]:ease-in-out min-[1024px]:duration-300"
            : "border-white pb-1 border-b min-[1024px]:hover:border-black min-[1024px]:transition min-[1024px]:ease-in-out min-[1024px]:duration-300"
        }
      >
        {children}
      </button>
    </>
  );
}

export default Button;
