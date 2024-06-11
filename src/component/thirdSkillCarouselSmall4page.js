import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export function ThirdSkillCarouselSmall4page({ First, Second, Third, Fourth }) {
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
          <div className="embla__slide">
            <Third />
          </div>
          <div className="embla__slide">
            <Fourth />
          </div>
        </div>
      </div>
    </section>
  );
}
