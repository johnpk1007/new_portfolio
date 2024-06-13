import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import landingImage1 from "../images/landingImage1.webp";
import landingImage2 from "../images/landingImage2.webp";
import landingImage3 from "../images/landingImage3.webp";
import Box from "@mui/material/Box";
import { forwardRef, useImperativeHandle, useCallback, useState } from "react";

export const FirstImageCarousel = forwardRef((props, ref) => {
  const [played, setPlayed] = useState(false);
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { slidesToScroll: "auto", loop: "true" },
    [Autoplay({ stopOnLastSnap: true, playOnInit: false })]
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
            <Box
              sx={{
                backgroundImage: `url(${landingImage3})`,
                height: "100%",
                width: "100%",
                backgroundSize: "cover",
                backgroundPosition: { xs: "55% 50%", sm: "center" },
              }}
            />
          </div>
          <div className="embla__slide">
            <Box
              sx={{
                backgroundImage: `url(${landingImage2})`,
                height: "100%",
                width: "100%",
                backgroundSize: "cover",
                backgroundPosition: { xs: "right", sm: "center" },
              }}
            />
          </div>
          <div className="embla__slide">
            <Box
              sx={{
                backgroundImage: `url(${landingImage1})`,
                height: "100%",
                width: "100%",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
});
