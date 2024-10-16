import NoPage from "./NoPage";

interface Props {
  isPaid: boolean;
  firstName: string;
  lastName: string;
  email: string;
}

function Confirmation({ isPaid, firstName, lastName, email }: Props) {
  return (
    <>
      {isPaid ? (
        <>
          <p>
            Thank you {firstName} {lastName} for your order!
          </p>
          <p>Download link was sent to your email:{email}</p>
        </>
      ) : (
        <NoPage />
      )}
    </>
  );
}

export default Confirmation;
