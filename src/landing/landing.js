import FirstImage from "./firstImage";
import SecondSkill from "./secondSkill";
import ThirdProject from "./thirdProject";
import FourthIntroduction from "./fourthIntroduction";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Buttons from "../component/button";
import { Box } from "@mui/material";
import { useState, useRef, useEffect } from "react";

export default function Landing() {
  const [language, setLanguage] = useState(true);
  const [selectedValue, setSelectedValue] = useState("first");
  const refs = useRef([null, null, null, null]);
  const scrollToRef = (index) => {
    if (refs.current[index]) {
      refs.current[index].scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition < 930) {
        setSelectedValue("first");
      } else if (scrollPosition < 2130) {
        setSelectedValue("second");
      } else if (scrollPosition < 5330) {
        setSelectedValue("third");
      } else {
        setSelectedValue("fourth");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
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
        {/* <SecondSkill language={language} ref={refs} />
        <ThirdProject language={language} ref={refs} />
        <FourthIntroduction language={language} ref={refs} /> */}
      </Box>
    </>
  );
}
