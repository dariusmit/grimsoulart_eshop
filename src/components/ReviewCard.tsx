interface Props {
  title: string;
  stars: string;
  children: string;
}

function ReviewCard({ title, stars, children }: Props) {
  return (
    <>
      <div className="mb-10">
        <p className="font-bold mb-1">{title}</p>
        <p className="mb-3">{stars}</p>
        <p className="max-w-[90%]">{children}</p>
      </div>
    </>
  );
}

export default ReviewCard;
