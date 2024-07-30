function Footer() {
  return (
    <>
      <div className="bg-[black] mt-14 text-white p-8 flex flex-col items-center justify-center">
        <div className="flex mb-6">
          <a
            className="hover:scale-110 transition ease-in-out duration-300"
            href="https://www.instagram.com/grimsoulart/"
            target="_blank"
          >
            <img
              className="w-[20px] h-auto mr-6"
              src="../../images/instagram-icon.svg"
            />
          </a>
          <a
            className="hover:scale-110 transition ease-in-out duration-300"
            href="https://www.pinterest.com/grimsoulart/"
            target="_blank"
          >
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
