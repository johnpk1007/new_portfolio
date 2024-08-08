import ProjectImageComponent from "../component/projectImage";
import Box from "@mui/material/Box";
import FilmviewPage1 from "../images/filmview_page_1.webp";
import FilmviewPage2 from "../images/filmview_page_2.webp";
import FilmviewPage3 from "../images/filmview_page_3.webp";
import FilmviewPage4 from "../images/filmview_page_4.webp";

export const FilmviewPage1Component = ({ language }) => (
  <Box>
    <ProjectImageComponent
      language={language}
      English={"Landing page"}
      Korean={"메인 페이지"}
      ImageSrc={FilmviewPage1}
      PaperHeight={"175px"}
      PaperWidth={"370px"}
      MarginBottom={"20px"}
      MarginRight={"0px"}
      BackgroundPosition={"top"}
    />
    <ProjectImageComponent
      language={language}
      English={"Account delete page"}
      Korean={"계정 삭제 페이지"}
      ImageSrc={FilmviewPage2}
      PaperHeight={"175px"}
      PaperWidth={"370px"}
      MarginRight={"0px"}
      BackgroundPosition={"top"}
    />
  </Box>
);

export const FilmviewPage2Component = ({ language }) => (
  <Box>
    <ProjectImageComponent
      language={language}
      English={"Writing new movie review page"}
      Korean={"영화 리뷰 작성 페이지"}
      ImageSrc={FilmviewPage4}
      PaperHeight={"175px"}
      PaperWidth={"370px"}
      MarginBottom={"20px"}
      BackgroundPosition={"top"}
    />
    <ProjectImageComponent
      language={language}
      English={"Movie review page"}
      Korean={"영화 리뷰 페이지"}
      ImageSrc={FilmviewPage3}
      PaperHeight={"175px"}
      PaperWidth={"370px"}
      BackgroundPosition={"top"}
    />
  </Box>
);

export const FilmviewPage4_1Component = ({ language }) => (
  <ProjectImageComponent
    language={language}
    English={"Landing page"}
    Korean={"메인 페이지"}
    ImageSrc={FilmviewPage1}
    PaperHeight={"175px"}
    PaperWidth={"370px"}
    BackgroundPosition={"top"}
  />
);

export const FilmviewPage4_2Component = ({ language }) => (
  <ProjectImageComponent
    language={language}
    English={"Account deletion page"}
    Korean={"계정 삭제 페이지"}
    ImageSrc={FilmviewPage2}
    PaperHeight={"175px"}
    PaperWidth={"370px"}
    BackgroundPosition={"top"}
  />
);

export const FilmviewPage4_3Component = ({ language }) => (
  <ProjectImageComponent
    language={language}
    English={"Writing new movie review page"}
    Korean={"영화 리뷰 작성 페이지"}
    ImageSrc={FilmviewPage4}
    PaperHeight={"175px"}
    PaperWidth={"370px"}
    BackgroundPosition={"top"}
  />
);

export const FilmviewPage4_4Component = ({ language }) => (
  <ProjectImageComponent
    language={language}
    English={"Movie review page"}
    Korean={"영화 리뷰 페이지"}
    ImageSrc={FilmviewPage3}
    PaperHeight={"175px"}
    PaperWidth={"370px"}
    BackgroundPosition={"top"}
  />
);
