import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { forwardRef } from "react";
import ProjectImage from "../images/projectImage.jpg";
import AngServiceImage from "../images/ang_service.jpg";
import AngServicePage1 from "../images/ang_service_page_1.jpg";
import AngServicePage2 from "../images/ang_service_page_2.jpg";
import AngServicePage3 from "../images/ang_service_page_3.jpg";
import Shimpyo from "../images/shimpyo.jpg";
import ShimpyoPage1 from "../images/shimpyo_page_1.jpg";
import ShimpyoPage2 from "../images/shimpyo_page_2.jpg";
import ShimpyoCalendarModule from "../images/shimpyo_calendar_module.jpg";
import ShimpyoBookingMdodule from "../images/shimpyo_booking_module_date.jpg";
import ShimpyoGuestModule from "../images/shimpyo_booking_module_guest.jpg";
import ShimpyoBookingUnregisteredModule from "../images/shimpyo_booking_unresgistered_module.jpg";
import ShimpyoConfirmationModule from "../images/shimpyo_booking_confirmation_module.jpg";
import ShimpyoPaymentModule from "../images/payment_module.jpg";
import FilmviewImage from "../images/filmview.jpg";
import FilmviewPage1 from "../images/filmview_page_1.jpg";
import FilmviewPage2 from "../images/filmview_page_2.jpg";
import FilmviewPage3 from "../images/filmview_page_3.jpg";
import FilmviewPage4 from "../images/filmview_page_4.jpg";
import LinkIcon from "../images/link_icon.png";
import Link from "@mui/material/Link";
import ProjectImageComponent from "../component/projectImage";

const ThirdProject = forwardRef(({ language }, ref) => (
  <Box
    ref={(firstRef) => (ref.current[2] = firstRef)}
    sx={{
      height: 3500,
      width: "100%",
      display: "flex",
      flexDirection: "column",
      backgroundColor: "#f9f9f9",
      alignItems: "center",
    }}
  >
    <Box
      sx={{
        height: 500,
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        position: "relative",
        marginBottom: "150px",
      }}
    >
      <Box
        sx={{
          backgroundImage: `url(${ProjectImage})`,
          height: "100%",
          width: "80%",
          backgroundSize: "cover",
          backgroundPosition: "center",
          marginLeft: "80px",
        }}
      />
      <Box
        data-aos="project-animation"
        data-aos-once="true"
        data-aos-delay="700"
        sx={{
          width: 500,
          height: 250,
          backgroundColor: "black",
          position: "absolute",
          top: "25%",
          left: "40px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          paddingLeft: "40px",
        }}
      >
        <Typography
          fontFamily={language ? "Alatsi" : "Do Hyeon"}
          fontSize={48}
          color={"white"}
        >
          {language ? "PROJECTS" : "프로젝트"}
        </Typography>
        <Typography
          fontFamily={language ? "Karla" : "Noto Sans KR"}
          fontSize={12}
          fontWeight={300}
          width={"60%"}
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
        }}
      >
        <Box
          borderRight={"solid black"}
          paddingRight={"20px"}
          height={80}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography
            fontFamily={"Playfair Display"}
            fontSize={24}
            textAlign={"right"}
          >
            ANG Services Corp
          </Typography>
          <Typography
            fontFamily={"Playfair Display"}
            fontSize={24}
            textAlign={"right"}
          >
            Shimpyo
          </Typography>
          <Typography
            fontFamily={"Playfair Display"}
            fontSize={24}
            textAlign={"right"}
          >
            Filmview
          </Typography>
        </Box>
      </Box>
    </Box>

    <Box sx={{ marginBottom: "110px" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          marginBottom: "50px",
        }}
      >
        <ProjectImageComponent
          language={language}
          English={"February. 2024 - April. 2024"}
          Korean={"2024.02 - 2020.04"}
          ImageSrc={AngServiceImage}
          PaperHeight={"380px"}
          PaperWidth={"780px"}
          FontSize={30}
        />
        <ProjectImageComponent
          language={language}
          English={"Landing page"}
          Korean={"메인 페이지"}
          ImageSrc={AngServicePage1}
          PaperHeight={"380px"}
          PaperWidth={"245px"}
        />
        <ProjectImageComponent
          language={language}
          English={"Service introduction page"}
          Korean={"서비스 안내 페이지"}
          ImageSrc={AngServicePage2}
          PaperHeight={"380px"}
          PaperWidth={"245px"}
        />
        <ProjectImageComponent
          language={language}
          English={"Company introduction page"}
          Korean={"회사 소개 페이지"}
          ImageSrc={AngServicePage3}
          PaperHeight={"380px"}
          PaperWidth={"245px"}
        />
      </Box>
      <Box>
        <Box marginBottom={"120px"}>
          <Typography
            fontFamily={"Playfair Display"}
            fontSize={32}
            marginBottom={"20px"}
          >
            ANG Services Corp
          </Typography>
          <Typography
            fontFamily={language ? "Karla" : "Noto Sans KR"}
            fontSize={20}
            fontWeight={200}
            sx={{ whiteSpace: "pre-line" }}
            marginBottom={"20px"}
          >
            {language
              ? "A company website created for ANG Services Corp.\nIt is a static site that I designed, developed the front end for, and deployed independently."
              : "ANG Services Corp 회사의 의뢰를 맡아 제작한 웹사이트입니다.\n정적 웹사이트로서 디자인, 프론트 엔드 개발, 배포를 혼자 담당하였습니다."}
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
            fontSize={20}
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
            fontSize={20}
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
    <Box sx={{ marginBottom: "110px" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          marginBottom: "50px",
        }}
      >
        <ProjectImageComponent
          language={language}
          English={"June 2023 - July 2023"}
          Korean={"2023.06 - 2023.07"}
          ImageSrc={Shimpyo}
          PaperHeight={"380px"}
          PaperWidth={"780px"}
          FontSize={30}
          BackgroundPosition={"top"}
        />
        <ProjectImageComponent
          language={language}
          English={"Landing page"}
          Korean={"메인 페이지"}
          ImageSrc={ShimpyoPage1}
          PaperHeight={"380px"}
          PaperWidth={"245px"}
        />
        <ProjectImageComponent
          language={language}
          English={"Hotel introduction page"}
          Korean={"숙소 안내 페이지"}
          ImageSrc={ShimpyoPage2}
          PaperHeight={"380px"}
          PaperWidth={"245px"}
        />
        <Box display={"flex"} flexDirection={"row"}>
          <Box>
            <ProjectImageComponent
              language={language}
              English={"Booking date search module"}
              Korean={"예약 날짜 검색 모듈"}
              ImageSrc={ShimpyoCalendarModule}
              PaperHeight={"130px"}
              PaperWidth={"166px"}
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
                PaperHeight={"192px"}
                PaperWidth={"78px"}
                MarginRight={"10px"}
                FontSize={12}
              />
              <ProjectImageComponent
                language={language}
                English={"Booking guest check module"}
                Korean={"예약 게스트 확인 모듈"}
                ImageSrc={ShimpyoGuestModule}
                PaperHeight={"160px"}
                PaperWidth={"77px"}
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
              PaperHeight={"92px"}
              PaperWidth={"77px"}
              MarginBottom={"10px"}
              FontSize={12}
            />
            <ProjectImageComponent
              language={language}
              English={"Booking final confirmation module"}
              Korean={"예약 최종 확인 모듈"}
              ImageSrc={ShimpyoConfirmationModule}
              PaperHeight={"92px"}
              PaperWidth={"77px"}
              MarginBottom={"10px"}
              FontSize={12}
            />
            <ProjectImageComponent
              language={language}
              English={"Kakao payment module"}
              Korean={"카카오 페이 모듈"}
              ImageSrc={ShimpyoPaymentModule}
              PaperHeight={"100px"}
              PaperWidth={"77px"}
              MarginBottom={"10px"}
              FontSize={12}
            />
          </Box>
        </Box>
      </Box>
      <Box>
        <Box marginBottom={"120px"}>
          <Typography
            fontFamily={"Playfair Display"}
            fontSize={32}
            marginBottom={"20px"}
          >
            Shimpyo
          </Typography>
          <Typography
            fontFamily={language ? "Karla" : "Noto Sans KR"}
            fontSize={20}
            fontWeight={200}
            sx={{ whiteSpace: "pre-line" }}
            marginBottom={"20px"}
          >
            {language
              ? "Shimpyo is a group sandbox project for a hotel booking website. Our team consisted of six developers: three front-end and three back-end. \nI was responsible for developing the front end of the landing page, hotel page, and payment system. \nAlthough the website has been shut down due to payment issues, you can watch a demonstration video if you're interested."
              : "숙박 플랫폼을 구현한 그룹 토이 프로젝트입니다. \n프론트 엔드 3명, 백 엔드 3명, 총 6명의 팀원이 참여하였으며 저는 메인 페이지, 숙소 페이지, 결제 시스템 등을 담당하여 구현하였습니다. \n현재 웹사이트는 운영을 종료하였으나 대신 시연영상을 시청하실 수 있습니다."}
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row" }}>
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
            fontSize={20}
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
            fontSize={20}
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
    <Box sx={{ marginBottom: "110px" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          marginBottom: "50px",
        }}
      >
        <ProjectImageComponent
          language={language}
          English={"November. 2022 - May. 2023"}
          Korean={"2022.11 - 2023.05"}
          ImageSrc={FilmviewImage}
          PaperHeight={"380px"}
          PaperWidth={"780px"}
          FontSize={30}
        />
        <Box>
          <ProjectImageComponent
            language={language}
            English={"Landing page"}
            Korean={"메인 페이지"}
            ImageSrc={FilmviewPage1}
            PaperHeight={"183px"}
            PaperWidth={"386px"}
            MarginBottom={"16px"}
            BackgroundPosition={"top"}
          />
          <ProjectImageComponent
            language={language}
            English={"Account delete page"}
            Korean={"계정 삭제 페이지"}
            ImageSrc={FilmviewPage2}
            PaperHeight={"183px"}
            PaperWidth={"386px"}
            BackgroundPosition={"top"}
          />
        </Box>
        <Box>
          <ProjectImageComponent
            language={language}
            English={"Movie review page"}
            Korean={"영화 리뷰 페이지"}
            ImageSrc={FilmviewPage3}
            PaperHeight={"183px"}
            PaperWidth={"386px"}
            MarginBottom={"16px"}
            BackgroundPosition={"top"}
          />
          <ProjectImageComponent
            language={language}
            English={"Writing new movie review page"}
            Korean={"영화 리뷰 작성 페이지"}
            ImageSrc={FilmviewPage4}
            PaperHeight={"183px"}
            PaperWidth={"386px"}
            BackgroundPosition={"top"}
          />
        </Box>
      </Box>
      <Box>
        <Box marginBottom={"120px"}>
          <Typography
            fontFamily={"Playfair Display"}
            fontSize={32}
            marginBottom={"20px"}
          >
            Filmview
          </Typography>
          <Typography
            fontFamily={language ? "Karla" : "Noto Sans KR"}
            fontSize={20}
            fontWeight={200}
            sx={{ whiteSpace: "pre-line" }}
            marginBottom={"20px"}
          >
            {language
              ? "Filmview is a sandbox project for a movie review website. \nFor this dynamic site, I designed and developed both the front end and back end, and handled the deployment independently. \nUsers can write, edit, delete, and search reviews, as well as log in locally or via Google and Naver OAuth. \nAdditionally, account creation and deletion are managed through email verification."
              : "영화 평론 사이트을 구현한 토이 프로젝트입니다. \n동적 웹사이트로서 디자인, 프론트 엔드, 백 엔드, 배포를 혼자 담당하였습니다. \n게시물 생성, 수정, 삭제, 게시물 검색,  로컬 로그인, 구글 로그인, 네이버 로그인, 이메일을 통한 계정 생성, \n이메일을 통한 계정 삭제 등이 가능합니다."}
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row" }}>
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
            fontSize={20}
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
            fontSize={20}
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
));
export default ThirdProject;
