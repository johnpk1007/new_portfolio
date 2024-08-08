import ProjectImageComponent from "../component/projectImage";
import apix from "../images/apix.webp";
import apix_page_1 from "../images/apix_page_1.webp";
import apix_page_2 from "../images/apix_page_2.webp";
import apix_page_3 from "../images/apix_page_3.webp";

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

export const ApixPage3 = ({ language }) => (
  <ProjectImageComponent
    language={language}
    English={"Artist page"}
    Korean={"아티스트 페이지"}
    ImageSrc={apix_page_3}
    PaperHeight={"98%"}
    PaperWidth={"100%"}
    elevation={3}
  />
);
