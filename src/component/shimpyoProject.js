import ProjectImageComponent from "../component/projectImage";
import ShimpyoPage1 from "../images/shimpyo_page_1.webp";
import ShimpyoPage2 from "../images/shimpyo_page_2.webp";
import Box from "@mui/material/Box";
import ShimpyoCalendarModule from "../images/shimpyo_calendar_module.webp";
import ShimpyoBookingMdodule from "../images/shimpyo_booking_module_date.webp";
import ShimpyoGuestModule from "../images/shimpyo_booking_module_guest.webp";
import ShimpyoBookingUnregisteredModule from "../images/shimpyo_booking_unresgistered_module.webp";
import ShimpyoConfirmationModule from "../images/shimpyo_booking_confirmation_module.webp";
import ShimpyoPaymentModule from "../images/payment_module.webp";

export const ShimpyoPage1Component = ({ language }) => (
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

export const ShimpyoPage2Component = ({ language }) => (
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

export const ShimpyoPage3Component = ({ language }) => (
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
        English={"Unregistered user payment module"}
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
