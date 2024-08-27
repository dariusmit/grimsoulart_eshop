import CommissionsCard from "./CommissionsCard";
import ReviewCard from "./ReviewCard";

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
        </div>
        <img
          className="w-[650px] h-auto"
          src="../../images/commissions/clients.png"
        />
        <ReviewCard title="Three Queens Spice Co." stars="⭐⭐⭐⭐⭐">
          sadad
        </ReviewCard>
        <ReviewCard title="Bryan" stars="⭐⭐⭐⭐⭐">
          sad
        </ReviewCard>
        <ReviewCard title="Maxime Gosselin" stars="⭐⭐⭐⭐⭐">
          sda
        </ReviewCard>
        <ReviewCard title="Paulius Navickas" stars="⭐⭐⭐⭐">
          asda
        </ReviewCard>
        <ReviewCard title="Chad Peek" stars="⭐⭐⭐⭐⭐">
          asda
        </ReviewCard>
        <ReviewCard title="Hellhookah" stars="⭐⭐⭐⭐⭐">
          asda
        </ReviewCard>
        <div>
          <h1>Frequently asked questions</h1>
          <div>
            <p>
              <b>1. How much the illustration costs?</b>
            </p>
            <p>250 eur</p>
          </div>
          <div>
            <p>
              <b>1. How much the illustration costs?</b>
            </p>
            <p>250 eur</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default CommissionsPage;
