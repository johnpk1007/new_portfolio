import ProjectImageComponent from "./projectImage";
import HoverProjectImageComponent from "./hoverProjectImage";
import apix from "../images/apix.webp";
import apix_page_1 from "../images/apix_page_1.webp";
import apix_page_2 from "../images/apix_page_2.webp";
import apix_mobile_page_1 from "../images/apix_mobile_page_1.webp";
import apix_mobile_page_2 from "../images/apix_mobile_page_2.webp";
import apix_mobile_icon from "../images/apix_icon.png";
import Box from "@mui/material/Box";
import { useGlobalContext } from "./globalProvider";

export const Apix = ({ language }) => (
  <ProjectImageComponent
    language={language}
    English={"Landing page"}
    Korean={"메인 페이지"}
    ImageSrc={apix}
    PaperHeight={"98%"}
    PaperWidth={"100%"}
    elevation={3}
  />
);

export const ApixPage1 = ({ language }) => (
  <ProjectImageComponent
    language={language}
    English={"Landing page"}
    Korean={"메인 페이지"}
    ImageSrc={apix_page_1}
    PaperHeight={"98%"}
    PaperWidth={"100%"}
    elevation={3}
  />
);

export const ApixPage2 = ({ language }) => (
  <ProjectImageComponent
    language={language}
    English={"Artist page"}
    Korean={"아티스트 페이지"}
    ImageSrc={apix_page_2}
    PaperHeight={"98%"}
    PaperWidth={"100%"}
    elevation={3}
  />
);

export const ApixPage3 = ({ language }) => {
  const { otherHover, setOtherHover } = useGlobalContext();
  return (
    <Box position={"relative"}>
      <HoverProjectImageComponent
        language={language}
        English={"Mobile application landing page"}
        Korean={"모바일 앱 메인 페이지"}
        FontSize={13}
        ImageSrc={apix_mobile_page_1}
        PaperHeight={300}
        PaperWidth={"70%"}
        elevation={3}
        BackgroundPosition="top"
        zIndex={1}
        otherHover={otherHover}
        setOtherHover={setOtherHover}
      />
      <HoverProjectImageComponent
        language={language}
        English={"Mobile application artist page"}
        Korean={"모바일 앱 아티스트 페이지"}
        FontSize={13}
        ImageSrc={apix_mobile_page_2}
        PaperHeight={300}
        PaperWidth={"70%"}
        elevation={3}
        BackgroundPosition="top"
        position="absolute"
        top={45}
        left={50}
        zIndex={0}
        otherHover={otherHover}
        setOtherHover={setOtherHover}
      />
      <ProjectImageComponent
        language={language}
        English={"Icon"}
        Korean={"아이콘"}
        ImageSrc={apix_mobile_icon}
        PaperHeight={30}
        PaperWidth={30}
        elevation={3}
        position="absolute"
        FontSize={7}
        top={0}
        right={0}
      />
    </Box>
  );
};
