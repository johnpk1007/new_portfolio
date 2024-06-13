import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback } from "react";
import { forwardRef, useImperativeHandle, useState } from "react";
import { DotButton, useDotButton } from "./emblaCarouselDotButton";
import { Box } from "@mui/material";

export const ThirdSkillCarouselBig = forwardRef(
  ({ First, Second, Third }, ref) => {
    const [played, setPlayed] = useState(false);
    const [emblaRef, emblaApi] = useEmblaCarousel({ slidesToScroll: "auto" }, [
      Autoplay({ stopOnLastSnap: true, playOnInit: false }),
    ]);

    const { selectedIndex, scrollSnaps, onDotButtonClick } =
      useDotButton(emblaApi);

    const toggleAutoplay = useCallback(() => {
      const autoplay = emblaApi?.plugins()?.autoplay;
      if (!autoplay) return;

      const playOrStop = autoplay.isPlaying() ? autoplay.stop : autoplay.play;
      if (played === false) {
        playOrStop();
        setPlayed(true);
      }
    }, [emblaApi, played]);

    useImperativeHandle(ref, () => ({
      toggleAutoplay: () => toggleAutoplay(),
    }));

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
          </div>
        </div>
        <div className="embla__controls">
          <div className="embla__dots">
            {scrollSnaps.map((_, index) => (
              <DotButton
                key={index}
                onClick={() => onDotButtonClick(index)}
                className={"embla__dot".concat(
                  index === selectedIndex ? " embla__dot--selected" : ""
                )}
              />
            ))}
          </div>
        </div>
      </section>
    );
  }
);

// export function ThirdSkillCarouselBig({ First, Second, Third }) {
//   const [emblaRef] = useEmblaCarousel({ slidesToScroll: "auto" }, [
//     Autoplay({ delay: 4000, stopOnLastSnap: true }),
//   ]);

//   return (
//     <div className="embla">
//       <div className="embla__viewport" ref={emblaRef}>
//         <div className="embla__container">
//           <div className="embla__slide">
//             <First />
//           </div>
//           <div className="embla__slide">
//             <Second />
//           </div>
//           <div className="embla__slide">
//             <Third />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
