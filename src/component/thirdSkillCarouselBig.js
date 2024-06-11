import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export function ThirdSkillCarouselBig({ First, Second, Third }) {
  const [emblaRef] = useEmblaCarousel({ slidesToScroll: "auto" }, [
    Autoplay({ delay: 4000, stopOnLastSnap: true }),
  ]);

  return (
    <div className="embla">
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
        </div>
      </div>
    </div>
  );
}
