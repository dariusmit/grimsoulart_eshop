import { useLocation } from "react-router-dom";
import Collapsible from "./Collapsible";

function ProductPage() {
  const location = useLocation();
  const data = location.state;

  return (
    <>
      <div className="flex text-[black] min-h-screen h-auto w-[1200px] mx-auto">
        <div className="w-[60%]">
          <img src={data.fullImgUrl}></img>
        </div>
        <div className="w-[40%]">
          <h1 className="text-4xl mb-4">{data.title}</h1>
          <h3 className="text-xl mb-4">{data.amount} EUR</h3>
          <div className="flex flex-col items-start">
            <a href={data.buyLink}>
              <button className="w-[100%] p-4 border bg-black border-black text-white mb-4">
                Buy it now
              </button>
            </a>
          </div>
          <div className="mb-8">
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
            <p>👇 See the agreement below before purchasing! 👇</p>
          </div>
          <div>
            <Collapsible title="Instant Download">
              <p>
                This is a digital art download. No physical item will be
                shipped. After the purchase you will get an email with a Google
                drive link to download these source files:
              </p>
              <ul>
                <li>Vector SVG file;</li>
                <li>Vector PDF file;</li>
                <li>High resolution PNG file;</li>
              </ul>
              <p>
                After the sale, the file will be no longer available to
                purchase.
              </p>
            </Collapsible>
            <Collapsible title="What People Say">
              <p>What people that worked with me before say about my art?</p>
              <p>Chad Peek</p>
              <p>⭐⭐⭐⭐⭐</p>
              <p>
                "Hands down...Darius is one of the best!" "He is patient,
                professional and his imagination and artwork can't be beat!!"
              </p>
              <p>Hellhookah</p>
              <p>⭐⭐⭐⭐⭐</p>
              <p>
                "Grimsoul art did a couple of awesome artworks for our band
                Hellhookah. It was a pleasure to work together, and we were
                really happy with the results. Thank you!"
              </p>
              <p>Three Queens Spice Co./</p>
              <p>⭐⭐⭐⭐⭐</p>
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
              <p>The Buyer agrees to these limitations:</p>
              <ul>
                <li>Artist retains copyright of the Artwork;</li>
                <li>
                  Artist retains the right to sell art prints digitally or
                  physically using this Artwork indefinitely on any platform and
                  in any location of the world he desires;
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
