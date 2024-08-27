interface Props {
  title: string;
  stars: string;
  children: string;
}

function ReviewCard({ title, stars, children }: Props) {
  return (
    <>
      <p>{title}</p>
      <p>{stars}</p>
      <p>{children}</p>
    </>
  );
}

export default ReviewCard;
