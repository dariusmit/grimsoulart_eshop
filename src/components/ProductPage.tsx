import { useLocation } from "react-router-dom";
import Collapsible from "./Collapsible";
import { useEffect } from "react";

function ProductPage() {
  const location = useLocation();
  const data = location.state;

  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <>
      <div
        className="flex w-full mt-8 mb-16 p-4 pt-0 flex-col mx-auto h-auto text-gray-500 min-h-screen leading-loose tracking-wide
      min-[1024px]:flex-row min-[1024px]:mb-auto min-[1024px]:p-0 min-[1024px]:w-[900px] min-[1024px]:min-h-min min-[1024px]:pb-16
      min-[1440px]:w-[1110px]"
      >
        <div className="min-[1024px]:w-[60%] min-[1024px]:mr-12">
          <img
            className="w-full blur-[0.3px] min-[1024px]:w-full min-[1024px]:blur-[0.5px] mb-4 h-auto"
            src={data.imgUrl}
          ></img>
        </div>
        <div className="w-full min-[1024px]:w-[40%]">
          <h1 className="text-4xl text-gray-800 mb-4">{data.title}</h1>
          <h3 className="text-xl text-gray-700 mb-4">{data.amount} EUR</h3>
          <div className="flex flex-col items-start w-full">
            <a className="w-full" href={data.buyLink}>
              <button className="w-full min-[1024px]:w-full px-4 py-2 border hover:scale-105 transition ease-in-out duration-300 bg-black border-black text-white mb-4">
                Buy it Now
              </button>
            </a>
          </div>
          <div className="mb-8">
            <p>
              🔒Pressing Buy will redirect you to securely pay with{" "}
              <b>
                <a
                  className="hover:underline"
                  href="https://stripe.com/en-lt"
                  target="_blank"
                >
                  Stripe
                </a>
              </b>
            </p>
            <br />
            <p>✳️ THIS IS INSTANT DIGITAL ART DOWNLOAD ✳️</p>
            <br />
            <p>
              👕 💿 💸 Use it for your Heavy Metal Band merch, CD/LP cover,
              Clothing Brand Apparel line or any other project you want and
              generate returns on your investment by selling it to your
              customers.
            </p>
            <br />
            <p>
              ✔️ Vector files allow you to resize the artwork to any size
              without loosing image quality. Print it on a wall if you wish!
            </p>
            <br />
            <p>
              ✔️ Sold just one time, to one owner only! Your competitors won't
              have it, the image will be unique and yours only, for a lifetime.
              After the purchase, the file will be no longer for sale.
            </p>
            <br />
            <p>
              ❌ The purchase is final! Whoever buys it first, owns it. Please
              understand that the product is instant art download. Because of
              that, there are no returns, exchanges, cancellations or refunds.
            </p>
            <br />
            <p>👇 See the agreement below before purchasing!</p>
          </div>
          <div>
            <Collapsible title="Instant Download">
              <p>
                This is a digital art download. No physical item will be
                shipped. After the purchase you will get a Google drive link to
                download these source files:
              </p>
              <ul className="[&>li]:list-disc [&>li]:ml-4 [&>li]:pl-1">
                <li>Vector SVG file;</li>
                <li>Vector PDF file;</li>
                <li>High resolution PNG file;</li>
              </ul>
              <br />
              <p>
                After the sale, the file will be no longer available to
                purchase.
              </p>
            </Collapsible>
            <Collapsible title="What People Say">
              <p className="underline">Chad Peek</p>
              <p className="opacity-80">⭐⭐⭐⭐⭐</p>
              <p>
                "Hands down...Darius is one of the best!" "He is patient,
                professional and his imagination and artwork can't be beat!!"
              </p>
              <br />
              <p className="underline">Hellhookah</p>
              <p className="opacity-80">⭐⭐⭐⭐⭐</p>
              <p>
                "Grimsoul art did a couple of awesome artworks for our band
                Hellhookah. It was a pleasure to work together, and we were
                really happy with the results. Thank you!"
              </p>
              <br />
              <p className="underline">Three Queens Spice Co.</p>
              <p className="opacity-80">⭐⭐⭐⭐⭐</p>
              <p>
                "Artwork for Business. I have worked with Darius twice in order
                to obtain some artwork for my business. Both times he has
                provided exceptional work, constant updates and friendly and
                helpful communications. He is fantastic at listening to ideas
                and presenting them through his artwork. He was able to make all
                suggested edits and the final products always came out even
                better than we anticipated. His prices were always fair and our
                tips were always warranted. We will continue to use Darius for
                many more art projects to come!"
              </p>
            </Collapsible>
            <Collapsible style="border-b" title="Agreement">
              <p>
                The Artist agrees to allow the Buyer of this Artwork to use the
                Artwork to create any physical or digital product for personal
                or commercial needs. The Buyer can use the Artwork on any
                product he wishes, he can create any number of products he wants
                and can sell them in any location of the world indefinitely.
              </p>
              <br />
              <p>The Buyer agrees to these limitations:</p>
              <ul className="[&>li]:list-disc [&>li]:ml-4 [&>li]:pl-1">
                <li>Artist retains copyright of the Artwork;</li>
                <li>
                  Artist retains the right to sell art prints digitally or
                  physically using this Artwork indefinitely on any platform and
                  in any location of the world he desires. Buyer is not allowed
                  to sell art prints using this Artwork, because that would lead
                  to conflict of interests;
                </li>
                <li>
                  Artist retains the right to display (for marketing purposes)
                  the Artwork on his portfolio website and/or social media
                  and/or in any other format with his name on it, stating that
                  the Artwork was created by the Artist;
                </li>
                <li>
                  Artwork digital files cannot be re-sold or sublicensed by
                  itself;
                </li>
              </ul>
              <br />
              <p>
                By buying this Artwork the Buyer agrees to all the rules written
                above this statement.
              </p>
            </Collapsible>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductPage;
