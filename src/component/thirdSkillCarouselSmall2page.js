import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export function ThirdSkillCarouselSmall2page({ First, Second }) {
  const [emblaRef] = useEmblaCarousel({ slidesToScroll: "auto" }, [
    Autoplay({ delay: 4000, stopOnLastSnap: true }),
  ]);

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          <div className="embla__slide">
            <First />
          </div>
          <div className="embla__slide">
            <Second />
          </div>
        </div>
      </div>
    </section>
  );
}
