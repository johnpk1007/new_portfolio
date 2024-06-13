import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback } from "react";
import { forwardRef, useImperativeHandle } from "react";

export const ThirdSkillCarouselSmall2page = forwardRef(
  ({ First, Second }, ref) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ slidesToScroll: "auto" }, [
      Autoplay({
        delay: 4000,
        stopOnLastSnap: true,
        playOnInit: false,
        stopOnInteraction: false,
      }),
    ]);

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
