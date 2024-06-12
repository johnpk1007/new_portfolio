import FirstImage from "./firstImage";
import SecondSkill from "./secondSkill";
import ThirdProject from "./thirdProject";
import FourthIntroduction from "./fourthIntroduction";
import CssBaseline from "@mui/material/CssBaseline";
import Buttons from "../component/button";
import { Box } from "@mui/material";
import { useState, useRef, useEffect } from "react";

export default function Landing() {
  const languageInfo = window.navigator.language === "ko-KR" ? false : true;
  const [language, setLanguage] = useState(languageInfo);
  const [selectedValue, setSelectedValue] = useState("first");
  const refs = useRef([null, null, null, null]);
  const scrollToRef = (index) => {
    if (refs.current[index]) {
      refs.current[index].scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = refs.current.indexOf(entry.target);
          if (index === 0) {
            setSelectedValue("first");
          } else if (index === 1) {
            setSelectedValue("second");
          } else if (index === 2) {
            setSelectedValue("third");
          } else if (index === 3) {
            setSelectedValue("fourth");
          }
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    const currentRefs = refs.current;

    currentRefs.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      currentRefs.forEach((ref) => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, []);

  return (
    <>
      <CssBaseline />
      <Box sx={{ position: "relative" }}>
        <Buttons
          language={language}
          setLanguage={setLanguage}
          selectedValue={selectedValue}
          setSelectedValue={setSelectedValue}
          scrollToRef={scrollToRef}
        />
        <FirstImage language={language} ref={refs} />
        <SecondSkill language={language} ref={refs} />
        <ThirdProject language={language} ref={refs} />
        <FourthIntroduction language={language} ref={refs} />
      </Box>
    </>
  );
}
