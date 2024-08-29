import CommissionsCard from "./CommissionsCard";
import ReviewCard from "./ReviewCard";
import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

function CommissionsPage() {
  return (
    <>
      <div className="flex flex-col items-center">
        <div
          className="w-full mt-8 mb-16 px-4
            min-[1024px]:flex min-[1024px]:flex-wrap min-[1024px]:mx-auto min-[1024px]:justify-center
            min-[1440px]:max-w-[1110px]"
        >
          <CommissionsCard id={1} />
          <CommissionsCard id={2} />
          <CommissionsCard id={3} />
          <CommissionsCard id={4} />
          <CommissionsCard id={5} />
          <CommissionsCard id={6} />
          <CommissionsCard id={7} />
          <CommissionsCard id={8} />
          <CommissionsCard id={9} />
          <CommissionsCard id={10} />
          <CommissionsCard id={11} />
          <CommissionsCard id={12} />
          <div className="flex p-2 pt-16">
            <div className="w-1/2">
              <ReviewCard title="Three Queens Spice Co." stars="⭐⭐⭐⭐⭐">
                I have worked with Darius twice in order to obtain some artwork
                for my business. Both times he has provided exceptional work,
                constant updates and friendly and helpful communications. He is
                fantastic at listening to ideas and presenting them through his
                artwork. He was able to make all suggested edits and the final
                products always came out even better than we anticipated. His
                prices were always fair and our tips were always warranted. We
                will continue to use Darius for many more art projects to come!
              </ReviewCard>
              <ReviewCard title="Bryan" stars="⭐⭐⭐⭐⭐">
                Our company was looking for someone to help create our logo. We
                found Grimsoul Art by chance and what a blessing it was. High
                quality art with great communication. Grimsoul will spend the
                time to give you exactly what you are looking for. I highly
                recommend them and will definitely use them again in the future!
              </ReviewCard>
              <ReviewCard title="Maxime Gosselin" stars="⭐⭐⭐⭐⭐">
                Great Artist! Quick answers, quick delivery, beautiful art. I
                reccomend it!
              </ReviewCard>
              <ReviewCard title="Paulius Navickas" stars="⭐⭐⭐⭐">
                Good communication, responsive and awesome drawings for a fair
                price, recommended! \m/
              </ReviewCard>
              <ReviewCard title="Chad Peek" stars="⭐⭐⭐⭐⭐">
                Darius is simply top shelf in the industry. He is patient,
                professional and his imagination and artwork can't be beat!!
              </ReviewCard>
              <ReviewCard title="Hellhookah" stars="⭐⭐⭐⭐⭐">
                Grimsoul art did a couple of awesome artworks for our band
                Hellhookah. It was a pleasure to work together, and we were
                really happy with the results. Thank you!
              </ReviewCard>
            </div>
            <div className="w-1/2">
              <img
                className="w-full h-auto"
                src="../../images/commissions/clients.png"
              />
            </div>
          </div>
          <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]}>
            <img src="../../images/commissions/agoge.png"></img>
            <img src="../../images/commissions/bodyache.png"></img>
            <CommissionsCard id={12} />
          </LightGallery>
        </div>
      </div>
    </>
  );
}

export default CommissionsPage;
