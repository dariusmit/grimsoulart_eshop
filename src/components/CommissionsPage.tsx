import CommissionsCard from "./CommissionsCard";
import ReviewCard from "./ReviewCard";
import LightGalleryComponent from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import commissionsList from "../data/commissionsList";
import type { LightGallery } from "lightgallery/lightgallery";
import { useRef } from "react";

function CommissionsPage() {
  const lightboxRef = useRef<LightGallery | null>(null);

  function openLightbox(id: number) {
    lightboxRef.current?.openGallery(id - 1);
  }

  return (
    <>
      <div className="flex flex-col items-center">
        <div
          className="w-full mt-8 mb-16 px-4
            min-[1024px]:flex min-[1024px]:flex-wrap min-[1024px]:mx-auto min-[1024px]:justify-center
            min-[1440px]:max-w-[1110px]"
        >
          {commissionsList.map((commission) => {
            return (
              <CommissionsCard
                id={commission.id}
                key={commission.id}
                openLightbox={() => openLightbox(commission.id)}
              />
            );
          })}

          <LightGalleryComponent
            onInit={(ref) => {
              if (ref) {
                lightboxRef.current = ref.instance;
              }
            }}
            speed={500}
            download={false}
            elementClassNames="lightgallery-img"
            dynamic
            dynamicEl={commissionsList.map((commission) => {
              return {
                src: commission.imgLightbox,
                thumb: commission.imgThumb,
                subHtml: commission.title,
              };
            })}
          />
          <div className="flex flex-col p-2 min-[1024px]:flex-row min-[1024px]:mt-12">
            <div className="text-center min-[1024px]:text-left w-full pt-8 min-[1024px]:w-1/2 min-[1024px]:pt-0">
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
            <div className="w-full pt-8 min-[1024px]:w-1/2 min-[1024px]:pt-0">
              <img
                className="w-full h-auto"
                src="../../images/commissions/clients.png"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CommissionsPage;
