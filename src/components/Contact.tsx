const Contact = () => {
  return (
    <>
      <div className="text-black">
        <p>Happy to talk!</p>
        <p>grimsoulart@gmail.com</p>
        <button
          onClick={() => window.open("mailto:grimsoulart@gmail.com", "_blank")}
        >
          SEND AN EMAIL
        </button>
      </div>
    </>
  );
};

export default Contact;
