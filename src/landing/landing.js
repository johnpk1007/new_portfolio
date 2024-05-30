import FirstImage from "./firstImage";
import SecondSkill from "./secondSkill";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Buttons from "../component/button";
import { useState } from "react";

export default function Landing() {
  const [language, setLanguage] = useState(true);

  return (
    <>
      <CssBaseline />
      <Container maxWidth="1800" sx={{ position: "relative" }}>
        <Buttons language={language} setLanguage={setLanguage} />
        <FirstImage language={language} />
        <SecondSkill />
      </Container>
    </>
  );
}
