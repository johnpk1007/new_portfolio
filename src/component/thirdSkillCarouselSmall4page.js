import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback } from "react";
import { forwardRef, useImperativeHandle, useState } from "react";

export const ThirdSkillCarouselSmall4page = forwardRef(
  ({ First, Second, Third, Fourth }, ref) => {
    const [played, setPlayed] = useState(false);
    const [emblaRef, emblaApi] = useEmblaCarousel(
      { slidesToScroll: "auto", loop: "true" },
      [
        Autoplay({
          delay: 4000,
          stopOnLastSnap: true,
          playOnInit: false,
          stopOnInteraction: false,
        }),
      ]
    );

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
            <div className="embla__slide">
              <Fourth />
            </div>
          </div>
        </div>
      </section>
    );
  }
);

// export function ThirdSkillCarouselSmall4page({ First, Second, Third, Fourth }) {
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
//           <div className="embla__slide">
//             <Third />
//           </div>
//           <div className="embla__slide">
//             <Fourth />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
