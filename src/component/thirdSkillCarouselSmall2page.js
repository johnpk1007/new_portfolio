import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback } from "react";
import { forwardRef, useImperativeHandle } from "react";
import { DotButton, useDotButton } from "./emblaCarouselDotButton";
import { Box } from "@mui/material";

export const ThirdSkillCarouselSmall2page = forwardRef(
  ({ First, Second, language }, ref) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ slidesToScroll: "auto" }, [
      Autoplay({
        delay: 4000,
        stopOnLastSnap: true,
        playOnInit: false,
        stopOnInteraction: false,
      }),
    ]);

    const { selectedIndex, scrollSnaps, onDotButtonClick } =
      useDotButton(emblaApi);

    const toggleAutoplay = useCallback(() => {
      const autoplay = emblaApi?.plugins()?.autoplay;
      if (!autoplay) return;

      const playOrStop = autoplay.isPlaying() ? autoplay.stop : autoplay.play;
      playOrStop();
    }, [emblaApi]);

    useImperativeHandle(ref, () => ({
      toggleAutoplay: () => toggleAutoplay(),
    }));

    return (
      <Box
        className="embla"
        sx={{ display: "flex", flexDirection: { xs: "row", md: "column" } }}
      >
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            <div className="embla__slide">
              <First language={language} />
            </div>
            <div className="embla__slide">
              <Second language={language} />
            </div>
          </div>
        </div>
        <div className="embla__controls">
          <Box
            className="embla__dots"
            sx={{ flexDirection: { xs: "column", md: "row" } }}
          >
            {scrollSnaps.map((_, index) => (
              <DotButton
                key={index}
                onClick={() => onDotButtonClick(index)}
                className={"embla__dot".concat(
                  index === selectedIndex ? " embla__dot--selected" : ""
                )}
              />
            ))}
          </Box>
        </div>
      </Box>
    );
  }
);

// export function ThirdSkillCarouselSmall2page({ First, Second }) {
//   const [emblaRef] = useEmblaCarousel({ slidesToScroll: "auto" }, [
//     Autoplay({ delay: 4000, stopOnLastSnap: true }),
//   ]);

//   return (
//     <section className="embla">
//       <div className="embla__viewport" ref={emblaRef}>
//         <div className="embla__container">
//           <div className="embla__slide">
//             <First />
//           </div>
//           <div className="embla__slide">
//             <Second />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
