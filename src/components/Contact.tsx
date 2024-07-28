const Contact = () => {
  return (
    <>
      <div className="text-black flex flex-col justify-center items-center w-[1110px] mx-auto">
        <p>Happy to talk!</p>
        <br />
        <p>grimsoulart@gmail.com</p>
        <br />
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
