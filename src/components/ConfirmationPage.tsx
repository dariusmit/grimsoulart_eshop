import NoPage from "./NoPage";

interface Props {
  isPaid: boolean;
}

function ConfirmationPage({ isPaid }: Props) {
  return (
    <>
      {isPaid ? (
        <p>
          Order Confirmed. Thank you for your order! This is your download link:
          Google Drive link
        </p>
      ) : (
        <NoPage />
      )}
    </>
  );
}

export default ConfirmationPage;
