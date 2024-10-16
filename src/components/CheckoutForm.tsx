interface Props {
  firstName: string;
  lastName: string;
  email: string;
  setContactInfo: (firstName: string, lastName: string, email: string) => void;
}

function CheckoutForm({ firstName, lastName, email, setContactInfo }: Props) {
  return (
    <>
      <form className="flex flex-col">
        <label htmlFor="fname">First name:</label>
        <input
          className="bg-slate-200 mb-4"
          onChange={(e) => {
            setContactInfo(e.target.value, "", "");
          }}
          type="text"
          id="fname"
          name="fname"
        />
        <label htmlFor="lname">Last name:</label>
        <input
          className="bg-slate-200 mb-4"
          onChange={(e) => {
            setContactInfo("", e.target.value, "");
          }}
          type="text"
          id="lname"
          name="lname"
        />
        <label htmlFor="email">Email:</label>
        <input
          onChange={(e) => {
            setContactInfo("", "", e.target.value);
          }}
          className="bg-slate-200"
          type="text"
          id="email"
          name="email"
        />
      </form>
    </>
  );
}

export default CheckoutForm;
