import FirstImage from "./firstImage";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Buttons from "../component/button";

export default function Landing() {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="1800" sx={{ position: "relative" }}>
        <Buttons />
        <FirstImage />
      </Container>
    </>
  );
}
