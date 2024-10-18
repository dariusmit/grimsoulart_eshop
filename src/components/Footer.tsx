function Footer() {
  return (
    <>
      <div
        className="bg-[black] text-white p-8 flex flex-col items-center justify-center
      "
      >
        <div className="flex mb-6">
          <a href="https://www.instagram.com/grimsoulart/" target="_blank">
            <img
              className="w-[20px] h-auto mr-6"
              src="../../images/instagram-icon.svg"
            />
          </a>
          <a href="https://www.pinterest.com/grimsoulart/" target="_blank">
            <img
              className="w-[20px] h-auto"
              src="../../images/pinterest-icon.svg"
            />
          </a>
        </div>
        <p>© 2024, Grimsoul Art</p>
      </div>
    </>
  );
}

export default Footer;
