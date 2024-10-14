function CheckoutForm() {
  return (
    <>
      <form>
        <label htmlFor="fname">First name:</label>
        <input className="bg-slate-200" type="text" id="fname" name="fname" />
        <label htmlFor="lname">Last name:</label>
        <input className="bg-slate-200" type="text" id="lname" name="lname" />
        <label htmlFor="email">Email:</label>
        <input className="bg-slate-200" type="text" id="email" name="email" />
      </form>
    </>
  );
}

export default CheckoutForm;
