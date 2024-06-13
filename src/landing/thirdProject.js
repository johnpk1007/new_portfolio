import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { forwardRef, useEffect } from "react";
import ProjectImage from "../images/projectImage.webp";
import AngServiceImage from "../images/ang_service.webp";
import AngServicePage1 from "../images/ang_service_page_1.webp";
import AngServicePage2 from "../images/ang_service_page_2.webp";
import AngServicePage3 from "../images/ang_service_page_3.webp";
import Shimpyo from "../images/shimpyo.webp";
import ShimpyoPage1 from "../images/shimpyo_page_1.webp";
import ShimpyoPage2 from "../images/shimpyo_page_2.webp";
import ShimpyoCalendarModule from "../images/shimpyo_calendar_module.webp";
import ShimpyoBookingMdodule from "../images/shimpyo_booking_module_date.webp";
import ShimpyoGuestModule from "../images/shimpyo_booking_module_guest.webp";
import ShimpyoBookingUnregisteredModule from "../images/shimpyo_booking_unresgistered_module.webp";
import ShimpyoConfirmationModule from "../images/shimpyo_booking_confirmation_module.webp";
import ShimpyoPaymentModule from "../images/payment_module.webp";
import FilmviewImage from "../images/filmview.webp";
import FilmviewPage1 from "../images/filmview_page_1.webp";
import FilmviewPage2 from "../images/filmview_page_2.webp";
import FilmviewPage3 from "../images/filmview_page_3.webp";
import FilmviewPage4 from "../images/filmview_page_4.webp";
import LinkIcon from "../images/link_icon.png";
import Link from "@mui/material/Link";
import ProjectImageComponent from "../component/projectImage";
import { ThirdSkillCarouselSmall } from "../component/thirdSkillCarouselSmall";
import { ThirdSkillCarouselBig } from "../component/thirdSkillCarouselBig";
import { ThirdSkillCarouselSmall2page } from "../component/thirdSkillCarouselSmall2page";
import { ThirdSkillCarouselSmall4page } from "../component/thirdSkillCarouselSmall4page";
import { useRef } from "react";

const ThirdProject = forwardRef(({ language }, ref) => {
  const AngServiceCorpPage1 = () => (
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
  const AngServiceCorpPage2 = () => (
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
  const AngServiceCorpPage3 = () => (
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

  const ShimpyoPage1Component = () => (
    <ProjectImageComponent
      language={language}
      English={"Landing page"}
      Korean={"메인 페이지"}
      ImageSrc={ShimpyoPage1}
      PaperHeight={"98%"}
      PaperWidth={"100%"}
      elevation={3}
    />
  );

  const ShimpyoPage2Component = () => (
    <ProjectImageComponent
      language={language}
      English={"Hotel introduction page"}
      Korean={"숙소 안내 페이지"}
      ImageSrc={ShimpyoPage2}
      PaperHeight={"98%"}
      PaperWidth={"100%"}
      elevation={3}
    />
  );

  const ShimpyoPage3Component = () => (
    <Box display={"flex"} flexDirection={"row"}>
      <Box>
        <ProjectImageComponent
          language={language}
          English={"Booking date search module"}
          Korean={"예약 날짜 검색 모듈"}
          ImageSrc={ShimpyoCalendarModule}
          PaperHeight={"122px"}
          PaperWidth={"157px"}
          MarginRight={"10px"}
          FontSize={14}
        />
        <Box
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"flex-start"}
          marginTop={"10px"}
        >
          <ProjectImageComponent
            language={language}
            English={"Booking date confirmation module"}
            Korean={"예약 날짜 확인 모듈"}
            ImageSrc={ShimpyoBookingMdodule}
            PaperHeight={"182px"}
            PaperWidth={"74px"}
            MarginRight={"10px"}
            FontSize={12}
          />
          <ProjectImageComponent
            language={language}
            English={"Booking guest check module"}
            Korean={"예약 게스트 확인 모듈"}
            ImageSrc={ShimpyoGuestModule}
            PaperHeight={"152px"}
            PaperWidth={"74px"}
            MarginRight={"10px"}
            FontSize={12}
          />
        </Box>
      </Box>
      <Box>
        <ProjectImageComponent
          language={language}
          English={"Unregisted user payment module"}
          Korean={"비회원 결제 모듈"}
          ImageSrc={ShimpyoBookingUnregisteredModule}
          PaperHeight={"79px"}
          PaperWidth={"67px"}
          MarginBottom={"10px"}
          FontSize={12}
        />
        <ProjectImageComponent
          language={language}
          English={"Booking final confirmation module"}
          Korean={"예약 최종 확인 모듈"}
          ImageSrc={ShimpyoConfirmationModule}
          PaperHeight={"80px"}
          PaperWidth={"67px"}
          MarginBottom={"10px"}
          FontSize={12}
        />
        <ProjectImageComponent
          language={language}
          English={"Kakao payment module"}
          Korean={"카카오 페이 모듈"}
          ImageSrc={ShimpyoPaymentModule}
          PaperHeight={"87px"}
          PaperWidth={"67px"}
          MarginBottom={"10px"}
          FontSize={12}
        />
      </Box>
    </Box>
  );

  const FilmviewPage1Component = () => (
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

  const FilmviewPage2Component = () => (
    <Box>
      <ProjectImageComponent
        language={language}
        English={"Movie review page"}
        Korean={"영화 리뷰 페이지"}
        ImageSrc={FilmviewPage3}
        PaperHeight={"175px"}
        PaperWidth={"370px"}
        MarginBottom={"20px"}
        BackgroundPosition={"top"}
      />
      <ProjectImageComponent
        language={language}
        English={"Writing new movie review page"}
        Korean={"영화 리뷰 작성 페이지"}
        ImageSrc={FilmviewPage4}
        PaperHeight={"175px"}
        PaperWidth={"370px"}
        BackgroundPosition={"top"}
      />
    </Box>
  );

  const FilmviewPage4_1Component = () => (
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

  const FilmviewPage4_2Component = () => (
    <ProjectImageComponent
      language={language}
      English={"Account delete page"}
      Korean={"계정 삭제 페이지"}
      ImageSrc={FilmviewPage2}
      PaperHeight={"175px"}
      PaperWidth={"370px"}
      BackgroundPosition={"top"}
    />
  );

  const FilmviewPage4_3Component = () => (
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

  const FilmviewPage4_4Component = () => (
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

  const childrenRef = useRef([null, null, null, null, null, null]);
  const triggerChildrenSmallFunction0 = () => {
    if (childrenRef.current[0]) childrenRef.current[0].toggleAutoplay();
  };
  const triggerChildrenSmallFunction1 = () => {
    if (childrenRef.current[1]) childrenRef.current[1].toggleAutoplay();
  };
  const triggerChildrenSmallFunction2 = () => {
    if (childrenRef.current[2]) childrenRef.current[2].toggleAutoplay();
  };
  const triggerChildrenSmallFunction3 = () => {
    if (childrenRef.current[3]) childrenRef.current[3].toggleAutoplay();
  };
  const triggerChildrenSmallFunction4 = () => {
    if (childrenRef.current[4]) childrenRef.current[4].toggleAutoplay();
  };
  const triggerChildrenSmallFunction5 = () => {
    if (childrenRef.current[5]) childrenRef.current[5].toggleAutoplay();
  };

  const projectRefs = useRef([null, null, null]);

  useEffect(() => {
    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = projectRefs.current.indexOf(entry.target);
          if (index === 0) {
            triggerChildrenSmallFunction0();
            triggerChildrenSmallFunction3();
          } else if (index === 1) {
            triggerChildrenSmallFunction1();
            triggerChildrenSmallFunction4();
          } else if (index === 2) {
            triggerChildrenSmallFunction2();
            triggerChildrenSmallFunction5();
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

    const currentRefs = projectRefs.current;

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
    <Box
      ref={(thirdRef) => (ref.current[2] = thirdRef)}
      sx={{
        // height: { xs: 2900, md: 3400 },
        width: "100%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#f9f9f9",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          height: { xs: 60, md: 500 },
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          position: "relative",
          marginBottom: { xs: "70px", md: "150px" },
        }}
      >
        <Box
          sx={{
            display: { xs: "none", md: "block" },
            backgroundImage: `url(${ProjectImage})`,
            height: "100%",
            width: { md: "60%", lg: "70%" },
            backgroundSize: "cover",
            backgroundPosition: "center",
            marginLeft: "80px",
          }}
        />
        <Box
          sx={{
            width: { xs: "60%", sm: "70%", md: 450, lg: 500 },
            height: { xs: 60, md: 250 },
            backgroundColor: "black",
            position: "absolute",
            top: { xs: 0, md: "50%" },
            left: { xs: 0, md: "40px" },
            // transform: "translate(0%, -50%)",

            transform: {
              xs: "translate(0%, 0%)",
              md: "translate(0%, -50%)",
            },

            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            paddingLeft: "40px",
          }}
        >
          <Typography
            fontFamily={language ? "Alatsi" : "Do Hyeon"}
            fontSize={{ xs: 24, md: 48 }}
            color={"white"}
          >
            {language ? "PROJECTS" : "프로젝트"}
          </Typography>
          <Typography
            display={{ xs: "none", md: "block" }}
            fontFamily={language ? "Karla" : "Noto Sans KR"}
            fontSize={{ xs: 6, sm: 12 }}
            fontWeight={300}
            width={{ xs: "100%", sm: 300 }}
            color={"white"}
            sx={{ whiteSpace: "pre-line" }}
          >
            {language
              ? "I have completed various projects that provide personalized solutions tailored to customer demands, showcasing my development skills"
              : "고객의 요구에 맞춘 맞춤형 솔루션들 및 개발실력을 \n향상시키기 위한 경험으로서 완성한 다양한\n프로젝트들입니다"}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            position: "absolute",
            top: { xs: "15px", md: "45%" },
            right: "3%",
          }}
        >
          <Box
            borderRight={"solid black 1px"}
            paddingRight={"20px"}
            height={{ xs: 40, md: 80 }}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography
              fontFamily={"Playfair Display"}
              fontSize={{ xs: 11, md: 22 }}
              textAlign={"right"}
              color={"black"}
            >
              ANG Services Corp
            </Typography>
            <Typography
              fontFamily={"Playfair Display"}
              fontSize={{ xs: 11, md: 22 }}
              textAlign={"right"}
              color={"black"}
            >
              Shimpyo
            </Typography>
            <Typography
              fontFamily={"Playfair Display"}
              fontSize={{ xs: 11, md: 22 }}
              textAlign={"right"}
              color={"black"}
            >
              Filmview
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box
        ref={(firstProject) => (projectRefs.current[0] = firstProject)}
        sx={{
          marginBottom: "110px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            marginBottom: "50px",
            position: "relative",
          }}
        >
          <ProjectImageComponent
            language={language}
            English={"February. 2024 - April. 2024"}
            Korean={"2024.02 - 2020.04"}
            ImageSrc={AngServiceImage}
            PaperHeight={{ xs: "30vw", md: "372px" }}
            PaperWidth={{ xs: "100vw", md: "780px" }}
            FontSize={30}
            main={true}
            MarginRight={{ xs: 0, md: "25px" }}
          />

          <Box
            className="small"
            display={{ xs: "block", lgxl: "none" }}
            position={{ xs: "absolute", lg: "relative" }}
            height={"380px"}
            width={"245px"}
            top={{ xs: "10%", lg: 0 }}
            left={{ xs: "10%", lg: 0 }}
          >
            <ThirdSkillCarouselSmall
              ref={(el) => (childrenRef.current[0] = el)}
              First={AngServiceCorpPage1}
              Second={AngServiceCorpPage2}
              Third={AngServiceCorpPage3}
            />
          </Box>

          <Box
            className="big"
            display={{ xs: "none", lgxl: "block", xxl: "none" }}
            height={"380px"}
            width={"500px"}
          >
            <ThirdSkillCarouselBig
              ref={(el) => (childrenRef.current[3] = el)}
              First={AngServiceCorpPage1}
              Second={AngServiceCorpPage2}
              Third={AngServiceCorpPage3}
            />
          </Box>
          <ProjectImageComponent
            language={language}
            English={"Landing page"}
            Korean={"메인 페이지"}
            ImageSrc={AngServicePage1}
            PaperHeight={"372px"}
            PaperWidth={"245px"}
            sizeProp="xxl"
          />
          <ProjectImageComponent
            language={language}
            English={"Service introduction page"}
            Korean={"서비스 안내 페이지"}
            ImageSrc={AngServicePage2}
            PaperHeight={"372px"}
            PaperWidth={"245px"}
            sizeProp="xxl"
          />
          <ProjectImageComponent
            language={language}
            English={"Company introduction page"}
            Korean={"회사 소개 페이지"}
            ImageSrc={AngServicePage3}
            PaperHeight={"372px"}
            PaperWidth={"245px"}
            sizeProp="xxl"
          />
        </Box>
        <Box marginLeft={{ xs: "25px", md: 0 }}>
          <Box marginBottom={{ xs: "25px", md: "120px" }}>
            <Typography
              fontFamily={"Playfair Display"}
              fontSize={{ xs: 20, md: 32 }}
              marginBottom={"20px"}
            >
              ANG Services Corp
            </Typography>
            <Typography
              fontFamily={language ? "Karla" : "Noto Sans KR"}
              fontSize={{ xs: 14, md: 20 }}
              fontWeight={200}
              whiteSpace={{ xs: "pre-line", lg: "normal" }}
            >
              {language
                ? "A company website created for ANG Services Corp."
                : "ANG Services Corp 회사의 의뢰를 맡아 제작한 웹사이트입니다."}
            </Typography>
            <Typography
              fontFamily={language ? "Karla" : "Noto Sans KR"}
              fontSize={{ xs: 14, md: 20 }}
              fontWeight={200}
              whiteSpace={{ xs: "pre-line", lg: "normal" }}
              marginBottom={"20px"}
            >
              {language
                ? "It is a static site that I designed, \ndeveloped the front end for, and deployed independently."
                : "정적 웹사이트로서 디자인, 프론트 엔드 개발, 배포를 혼자 담당하였습니다."}
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <Typography
                fontFamily={"Noto Sans KR"}
                fontSize={14}
                fontWeight={200}
                marginRight={"25px"}
              >
                ▪️ Figma
              </Typography>
              <Typography
                fontFamily={"Noto Sans KR"}
                fontSize={14}
                fontWeight={200}
                marginRight={"25px"}
              >
                ▪️ React
              </Typography>
              <Typography
                fontFamily={"Noto Sans KR"}
                fontSize={14}
                fontWeight={200}
                marginRight={"25px"}
              >
                ▪️ MUI
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: "inline-flex", flexDirection: "column" }}>
            <Link
              href="https://github.com/johnpk1007/arc-services-corp"
              underline="none"
              fontFamily={language ? "Karla" : "Noto Sans KR"}
              fontSize={{ xs: 14, md: 20 }}
              fontWeight={200}
              color={"black"}
              display={"inline-flex"}
              alignItems={"center"}
              target="_blank"
              rel="noopener"
            >
              {language ? "View source code" : "소스코드 확인"}
              <Box
                sx={{
                  marginLeft: "5px",
                  backgroundImage: `url(${LinkIcon})`,
                  height: "15px",
                  width: "15px",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </Link>
            <Link
              href="https://angservicescorp.com/"
              underline="none"
              fontFamily={language ? "Karla" : "Noto Sans KR"}
              fontSize={{ xs: 14, md: 20 }}
              fontWeight={200}
              color={"black"}
              display={"inline-flex"}
              alignItems={"center"}
              target="_blank"
              rel="noopener"
            >
              {language
                ? "Visit angservicescorp.com"
                : "angservicescorp.com 접속"}
              <Box
                sx={{
                  marginLeft: "5px",
                  backgroundImage: `url(${LinkIcon})`,
                  height: "15px",
                  width: "15px",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </Link>
          </Box>
        </Box>
      </Box>

      <Box
        ref={(secondProject) => (projectRefs.current[1] = secondProject)}
        sx={{
          marginBottom: "110px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            marginBottom: "50px",
            position: "relative",
          }}
        >
          <ProjectImageComponent
            language={language}
            English={"June 2023 - July 2023"}
            Korean={"2023.06 - 2023.07"}
            ImageSrc={Shimpyo}
            PaperHeight={{ xs: "30vw", md: "372px" }}
            PaperWidth={{ xs: "100vw", md: "780px" }}
            FontSize={30}
            BackgroundPosition={"top"}
            main={true}
            MarginRight={{ xs: 0, md: "25px" }}
          />

          <Box
            className="small"
            display={{ xs: "block", lgxl: "none" }}
            position={{ xs: "absolute", lg: "relative" }}
            height={"380px"}
            width={"245px"}
            top={{ xs: "10%", lg: 0 }}
            left={{ xs: "10%", lg: 0 }}
          >
            <ThirdSkillCarouselSmall
              ref={(el) => (childrenRef.current[1] = el)}
              First={ShimpyoPage1Component}
              Second={ShimpyoPage2Component}
              Third={ShimpyoPage3Component}
            />
          </Box>

          <Box
            className="big"
            display={{ xs: "none", lgxl: "block", xxl: "none" }}
            height={"380px"}
            width={"500px"}
          >
            <ThirdSkillCarouselBig
              ref={(el) => (childrenRef.current[4] = el)}
              First={ShimpyoPage1Component}
              Second={ShimpyoPage2Component}
              Third={ShimpyoPage3Component}
            />
          </Box>

          <ProjectImageComponent
            language={language}
            English={"Landing page"}
            Korean={"메인 페이지"}
            ImageSrc={ShimpyoPage1}
            PaperHeight={"372px"}
            PaperWidth={"245px"}
            sizeProp="xxl"
          />
          <ProjectImageComponent
            language={language}
            English={"Hotel introduction page"}
            Korean={"숙소 안내 페이지"}
            ImageSrc={ShimpyoPage2}
            PaperHeight={"372px"}
            PaperWidth={"245px"}
            sizeProp="xxl"
          />
          <Box display={{ xs: "none", xxl: "flex" }} flexDirection={"row"}>
            <Box>
              <ProjectImageComponent
                language={language}
                English={"Booking date search module"}
                Korean={"예약 날짜 검색 모듈"}
                ImageSrc={ShimpyoCalendarModule}
                PaperHeight={"122px"}
                PaperWidth={"157px"}
                MarginRight={"10px"}
                FontSize={14}
              />
              <Box
                display={"flex"}
                flexDirection={"row"}
                justifyContent={"flex-start"}
                marginTop={"10px"}
              >
                <ProjectImageComponent
                  language={language}
                  English={"Booking date confirmation module"}
                  Korean={"예약 날짜 확인 모듈"}
                  ImageSrc={ShimpyoBookingMdodule}
                  PaperHeight={"182px"}
                  PaperWidth={"74px"}
                  MarginRight={"10px"}
                  FontSize={12}
                />
                <ProjectImageComponent
                  language={language}
                  English={"Booking guest check module"}
                  Korean={"예약 게스트 확인 모듈"}
                  ImageSrc={ShimpyoGuestModule}
                  PaperHeight={"152px"}
                  PaperWidth={"74px"}
                  MarginRight={"10px"}
                  FontSize={12}
                />
              </Box>
            </Box>
            <Box>
              <ProjectImageComponent
                language={language}
                English={"Unregisted user payment module"}
                Korean={"비회원 결제 모듈"}
                ImageSrc={ShimpyoBookingUnregisteredModule}
                PaperHeight={"79px"}
                PaperWidth={"67px"}
                MarginBottom={"10px"}
                FontSize={12}
              />
              <ProjectImageComponent
                language={language}
                English={"Booking final confirmation module"}
                Korean={"예약 최종 확인 모듈"}
                ImageSrc={ShimpyoConfirmationModule}
                PaperHeight={"80px"}
                PaperWidth={"67px"}
                MarginBottom={"10px"}
                FontSize={12}
              />
              <ProjectImageComponent
                language={language}
                English={"Kakao payment module"}
                Korean={"카카오 페이 모듈"}
                ImageSrc={ShimpyoPaymentModule}
                PaperHeight={"87px"}
                PaperWidth={"67px"}
                MarginBottom={"10px"}
                FontSize={12}
              />
            </Box>
          </Box>
        </Box>
        <Box marginLeft={{ xs: "25px", md: 0 }}>
          <Box marginBottom={{ xs: "25px", md: "120px" }}>
            <Typography
              fontFamily={"Playfair Display"}
              fontSize={{ xs: 20, md: 32 }}
              marginBottom={"20px"}
            >
              Shimpyo
            </Typography>
            <Typography
              fontFamily={language ? "Karla" : "Noto Sans KR"}
              fontSize={{ xs: 14, md: 20 }}
              fontWeight={200}
              display={"inline-flex"}
              whiteSpace={{ xs: "pre-line", xl: "normal" }}
            >
              {language
                ? "Shimpyo is a group sandbox project for a hotel booking website. \nOur team consisted of six developers: three front-end and three back-end. "
                : "숙박 플랫폼을 구현한 그룹 토이 프로젝트입니다. \n프론트 엔드 3명, 백 엔드 3명, 총 6명의 팀원이 참여하였으며"}
            </Typography>
            <Typography
              fontFamily={language ? "Karla" : "Noto Sans KR"}
              fontSize={{ xs: 14, md: 20 }}
              fontWeight={200}
              whiteSpace={{ xs: "pre-line", lg: "normal" }}
            >
              {language
                ? "I was responsible for developing the front end of the landing page, \nhotel page, and payment system."
                : "저는 메인 페이지, 숙소 페이지, 결제 시스템 등을 담당하여 구현하였습니다. "}
            </Typography>
            <Typography
              fontFamily={language ? "Karla" : "Noto Sans KR"}
              fontSize={{ xs: 14, md: 20 }}
              fontWeight={200}
              whiteSpace={{ xs: "pre-line", lg: "normal" }}
              marginBottom={"20px"}
            >
              {language
                ? "Although the website has been shut down due to payment issues, \nyou can watch a demonstration video if you're interested."
                : "현재 웹사이트는 운영을 종료하였으나 대신 시연영상을 시청하실 수 있습니다."}
            </Typography>

            <Box
              sx={{
                display: "inline-flex",
                flexDirection: "row",
                flexWrap: "wrap",
              }}
            >
              <Typography
                fontFamily={"Noto Sans KR"}
                fontSize={14}
                fontWeight={200}
                marginRight={"25px"}
              >
                ▪️ React
              </Typography>
              <Typography
                fontFamily={"Noto Sans KR"}
                fontSize={14}
                fontWeight={200}
                marginRight={"25px"}
              >
                ▪️ Typescript
              </Typography>
              <Typography
                fontFamily={"Noto Sans KR"}
                fontSize={14}
                fontWeight={200}
                marginRight={"25px"}
              >
                ▪️ Recoil
              </Typography>
              <Typography
                fontFamily={"Noto Sans KR"}
                fontSize={14}
                fontWeight={200}
                marginRight={"25px"}
              >
                ▪️ MUI
              </Typography>
              <Typography
                fontFamily={"Noto Sans KR"}
                fontSize={14}
                fontWeight={200}
              >
                ▪️ Styled-component
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: "inline-flex", flexDirection: "column" }}>
            <Link
              href="https://github.com/Project-Shimpyo/front"
              underline="none"
              fontFamily={language ? "Karla" : "Noto Sans KR"}
              fontSize={{ xs: 14, md: 20 }}
              fontWeight={200}
              color={"black"}
              display={"inline-flex"}
              alignItems={"center"}
              target="_blank"
              rel="noopener"
            >
              {language ? "View source code" : "소스코드 확인"}
              <Box
                sx={{
                  marginLeft: "5px",
                  backgroundImage: `url(${LinkIcon})`,
                  height: "15px",
                  width: "15px",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </Link>
            <Link
              href="https://www.youtube.com/watch?v=RbrhiM4ybgI"
              underline="none"
              fontFamily={language ? "Karla" : "Noto Sans KR"}
              fontSize={{ xs: 14, md: 20 }}
              fontWeight={200}
              color={"black"}
              display={"inline-flex"}
              alignItems={"center"}
              target="_blank"
              rel="noopener"
            >
              {language
                ? "Watch shimpyo.com demonstration"
                : "shimpyo.com 시연영상 시청"}
              <Box
                sx={{
                  marginLeft: "5px",
                  backgroundImage: `url(${LinkIcon})`,
                  height: "15px",
                  width: "15px",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </Link>
          </Box>
        </Box>
      </Box>

      <Box
        ref={(thirdProject) => (projectRefs.current[2] = thirdProject)}
        sx={{ marginBottom: "110px" }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            marginBottom: "50px",
            position: "relative",
          }}
        >
          <ProjectImageComponent
            language={language}
            English={"November. 2022 - May. 2023"}
            Korean={"2022.11 - 2023.05"}
            ImageSrc={FilmviewImage}
            PaperHeight={{ xs: "30vw", md: "372px" }}
            PaperWidth={{ xs: "100vw", md: "780px" }}
            FontSize={30}
            main={true}
            exception={true}
            MarginRight={{ xs: 0, md: "25px" }}
          />

          <Box
            className="small"
            display={{ xs: "block", lg: "none" }}
            position={"absolute"}
            height={"372px"}
            width={"386px"}
            top={{ xs: "20%", md: "60%" }}
            left={{ xs: "50%", xsm: "10%" }}
            sx={{
              transform: {
                xs: "translate(-50%, 0%)",
                xsm: "translate(0%, 0%)",
              },
            }}
          >
            <ThirdSkillCarouselSmall4page
              ref={(el) => (childrenRef.current[2] = el)}
              First={FilmviewPage4_1Component}
              Second={FilmviewPage4_2Component}
              Third={FilmviewPage4_3Component}
              Fourth={FilmviewPage4_4Component}
            />
          </Box>

          <Box
            className="small"
            display={{ xs: "none", lg: "block", xxl: "none" }}
            position={"relative"}
            height={"372px"}
            width={"386px"}
          >
            <ThirdSkillCarouselSmall2page
              ref={(el) => (childrenRef.current[5] = el)}
              First={FilmviewPage1Component}
              Second={FilmviewPage2Component}
            />
          </Box>

          <Box
            display={{ xs: "none", xxl: "block" }}
            marginRight={{ xs: "0px", xl: "25px" }}
          >
            <ProjectImageComponent
              language={language}
              English={"Landing page"}
              Korean={"메인 페이지"}
              ImageSrc={FilmviewPage1}
              PaperHeight={"178px"}
              PaperWidth={"386px"}
              MarginBottom={"16px"}
              MarginRight={"0px"}
              BackgroundPosition={"top"}
            />
            <ProjectImageComponent
              language={language}
              English={"Account delete page"}
              Korean={"계정 삭제 페이지"}
              ImageSrc={FilmviewPage2}
              PaperHeight={"178px"}
              PaperWidth={"386px"}
              MarginRight={"0px"}
              BackgroundPosition={"top"}
            />
          </Box>
          <Box display={{ xs: "none", xxl: "block" }}>
            <ProjectImageComponent
              language={language}
              English={"Movie review page"}
              Korean={"영화 리뷰 페이지"}
              ImageSrc={FilmviewPage3}
              PaperHeight={"178px"}
              PaperWidth={"386px"}
              MarginBottom={"16px"}
              BackgroundPosition={"top"}
            />
            <ProjectImageComponent
              language={language}
              English={"Writing new movie review page"}
              Korean={"영화 리뷰 작성 페이지"}
              ImageSrc={FilmviewPage4}
              PaperHeight={"178px"}
              PaperWidth={"386px"}
              BackgroundPosition={"top"}
            />
          </Box>
        </Box>
        <Box marginLeft={{ xs: "25px", lg: 0 }}>
          <Box marginBottom={"120px"}>
            <Typography
              fontFamily={"Playfair Display"}
              fontSize={{ xs: 20, md: 32 }}
              marginBottom={"20px"}
            >
              Filmview
            </Typography>
            <Typography
              fontFamily={language ? "Karla" : "Noto Sans KR"}
              fontSize={{ xs: 14, md: 20 }}
              fontWeight={200}
              whiteSpace={{ xs: "pre-line", lg: "normal" }}
            >
              {language
                ? "Filmview is a sandbox project for a movie review website."
                : "영화 평론 사이트을 구현한 토이 프로젝트입니다."}
            </Typography>
            <Typography
              fontFamily={language ? "Karla" : "Noto Sans KR"}
              fontSize={{ xs: 14, md: 20 }}
              fontWeight={200}
              whiteSpace={{ xs: "pre-line", lg: "normal" }}
            >
              {language
                ? "For this dynamic site, I designed and developed both the front end and back end, \nand handled the deployment independently."
                : "동적 웹사이트로서 디자인, 프론트 엔드, 백 엔드, 배포를 혼자 담당하였습니다."}
            </Typography>
            <Typography
              fontFamily={language ? "Karla" : "Noto Sans KR"}
              fontSize={{ xs: 14, md: 20 }}
              fontWeight={200}
              whiteSpace={{ xs: "pre-line", lg: "normal" }}
            >
              {language
                ? "Users can write, edit, delete, and search reviews, \nas well as log in locally or via Google and Naver OAuth."
                : "게시물 생성, 수정, 삭제, 게시물 검색,  로컬 로그인, 구글 로그인, 네이버 로그인, "}
            </Typography>
            <Typography
              fontFamily={language ? "Karla" : "Noto Sans KR"}
              fontSize={{ xs: 14, md: 20 }}
              fontWeight={200}
              whiteSpace={{ xs: "pre-line", lg: "normal" }}
              marginBottom={"20px"}
            >
              {language
                ? "Additionally, account creation and deletion are managed through email verification."
                : "이메일을 통한 계정 생성, 이메일을 통한 계정 삭제 등이 가능합니다."}
            </Typography>
            <Box
              sx={{
                display: "inline-flex",
                flexDirection: "row",
                flexWrap: "wrap",
              }}
            >
              <Typography
                fontFamily={"Noto Sans KR"}
                fontSize={14}
                fontWeight={200}
                marginRight={"25px"}
              >
                ▪️ React
              </Typography>
              <Typography
                fontFamily={"Noto Sans KR"}
                fontSize={14}
                fontWeight={200}
                marginRight={"25px"}
              >
                ▪️ Redux
              </Typography>
              <Typography
                fontFamily={"Noto Sans KR"}
                fontSize={14}
                fontWeight={200}
                marginRight={"25px"}
              >
                ▪️ MUI
              </Typography>
              <Typography
                fontFamily={"Noto Sans KR"}
                fontSize={14}
                fontWeight={200}
                marginRight={"25px"}
              >
                ▪️ Mongoose
              </Typography>
              <Typography
                fontFamily={"Noto Sans KR"}
                fontSize={14}
                fontWeight={200}
                marginRight={"25px"}
              >
                ▪️ Redis
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: "inline-flex", flexDirection: "column" }}>
            <Link
              href="https://github.com/johnpk1007/movie_project"
              underline="none"
              fontFamily={language ? "Karla" : "Noto Sans KR"}
              fontSize={{ xs: 14, md: 20 }}
              fontWeight={200}
              color={"black"}
              display={"inline-flex"}
              alignItems={"center"}
              target="_blank"
              rel="noopener"
            >
              {language ? "View source code" : "소스코드 확인"}
              <Box
                sx={{
                  marginLeft: "5px",
                  backgroundImage: `url(${LinkIcon})`,
                  height: "15px",
                  width: "15px",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </Link>
            <Link
              href="https://filmview.xyz/"
              underline="none"
              fontFamily={language ? "Karla" : "Noto Sans KR"}
              fontSize={{ xs: 14, md: 20 }}
              fontWeight={200}
              color={"black"}
              display={"inline-flex"}
              alignItems={"center"}
              target="_blank"
              rel="noopener"
            >
              {language ? "Visit filmview.xyz" : "filmview.xyz 접속"}
              <Box
                sx={{
                  marginLeft: "5px",
                  backgroundImage: `url(${LinkIcon})`,
                  height: "15px",
                  width: "15px",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
});
export default ThirdProject;
