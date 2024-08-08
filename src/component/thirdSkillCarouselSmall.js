import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback } from "react";
import { forwardRef, useImperativeHandle, useState } from "react";
import { DotButton, useDotButton } from "./emblaCarouselDotButton";
import { Box } from "@mui/material";

export const ThirdSkillCarouselSmall = forwardRef(
  ({ First, Second, Third, language }, ref) => {
    const [played, setPlayed] = useState(false);
    const [emblaRef, emblaApi] = useEmblaCarousel(
      { slidesToScroll: "auto", loop: "true" },
      [
        Autoplay({
          stopOnLastSnap: true,
          playOnInit: false,
          stopOnInteraction: false,
        }),
      ]
    );

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
            <div className="embla__slide">
              <Third language={language} />
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

// export function ThirdSkillCarouselSmall({ First, Second, Third }) {
//   const [emblaRef, emblaApi] = useEmblaCarousel({ slidesToScroll: "auto" }, [
//     Autoplay({ delay: 4000, stopOnLastSnap: true, playOnInit: false }),
//   ]);

//   const toggleAutoplay = useCallback(() => {
//     const autoplay = emblaApi?.plugins()?.autoplay;
//     if (!autoplay) return;

//     const playOrStop = autoplay.isPlaying() ? autoplay.stop : autoplay.play;
//     playOrStop();
//   }, [emblaApi]);

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
//           <div className="embla__slide">
//             <Third />
//           </div>
//         </div>
//       </div>
//       <Button onClick={toggleAutoplay}>click me</Button>
//     </section>
//   );
// }
