import ProjectImageComponent from "../component/projectImage";
import AngServicePage1 from "../images/ang_service_page_1.webp";
import AngServicePage2 from "../images/ang_service_page_2.webp";
import AngServicePage3 from "../images/ang_service_page_3.webp";

export const AngServiceCorpPage1 = ({ language }) => (
  <ProjectImageComponent
    language={language}
    English={"Landing page"}
    Korean={"메인 페이지"}
    ImageSrc={AngServicePage1}
    PaperHeight={"98%"}
    PaperWidth={"100%"}
    elevation={3}
  />
);
export const AngServiceCorpPage2 = ({ language }) => (
  <ProjectImageComponent
    language={language}
    English={"Service introduction page"}
    Korean={"서비스 안내 페이지"}
    ImageSrc={AngServicePage2}
    PaperHeight={"98%"}
    PaperWidth={"100%"}
    elevation={3}
  />
);
export const AngServiceCorpPage3 = ({ language }) => (
  <ProjectImageComponent
    language={language}
    English={"Company introduction page"}
    Korean={"회사 소개 페이지"}
    ImageSrc={AngServicePage3}
    PaperHeight={"98%"}
    PaperWidth={"100%"}
    elevation={3}
  />
);
