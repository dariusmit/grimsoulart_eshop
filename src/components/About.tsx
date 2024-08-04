const About = () => {
  return (
    <>
      <div
        className="flex flex-col mt-8 mb-16 px-4
      min-[1024px]:flex-row min-[1024px]:w-[900px] min-[1024px]:mx-auto min-[1024px]:mb-auto
      min-[1440px]:w-[1110px]
      "
      >
        <div className="min-[1024px]:w-[30%] pb-4 min-[1024px]:mr-14">
          <img src="../../images/profile.jpg" />
        </div>
        <div className="flex flex-col justify-center min-[1024px]:w-[70%]">
          <h1 className="text-4xl mb-4 text-gray-800">
            Grimsoul Art / Darius Molotokas
          </h1>
          <p className="leading-relaxed tracking-wide text-gray-500 max-w-[600px]">
            Grimsoul Art – my pseudonym, my real name is Darius Molotokas and I
            am Dark / Skull artist from Lithuania. I express my own passions for
            the darker side of the world and pen and ink is what shapes it. I am
            heavily inspired by the heavy metal, rock and goth music, horror and
            other dark, deep, twisted films or books. I take inspiration from
            such great artists as Mark Riddick, Chris Moyen, Blial Cabal,
            Defame, Godmachine also the bands Motorhead, Metallica, AC/DC, Black
            Sabbath, Darkthrone, Archgoat, Acid Witch, Gaahls Wyrd, Lebanon
            Hanover, Joy Division, She Past Away and many more are all idols of
            mine. In my free time I do like to play electric guitar, ride a bike
            or indulge in a great movie or book.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
