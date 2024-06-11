import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { FirstImageCarousel } from "../component/firstImageCarousel";
import { forwardRef } from "react";

const FirstImage = forwardRef(({ language }, ref) => (
  <Box
    ref={(firstRef) => (ref.current[0] = firstRef)}
    sx={{
      height: { xs: 700, sm: 930 },
      width: "100%",
      display: "flex",
      direction: "row",
      justifyContent: "space-between",
    }}
  >
    <Box
      sx={{
        height: "100%",
        width: { xs: "70%", xsm: "60%", sm: "30%" },
        position: "relative",
      }}
    >
      <Box
        data-aos="fade-right"
        data-aos-once="true"
        data-aos-delay="700"
        sx={{
          position: "absolute",
          zIndex: 1,
          left: { xs: "30%", sm: "30%" },
          top: "30%",
        }}
      >
        <Typography
          fontFamily={language ? "Karla" : "Noto Sans KR"}
          fontSize={{ xs: 10, sm: 13, md: 17, xl: 24 }}
          fontWeight={200}
          color={"#B7B7B7"}
          marginBottom={1}
        >
          {language ? "USER CENTERED DESIGN" : "사용자 중심의 디자인"}
        </Typography>
        <Typography
          fontFamily={language ? "Playfair Display" : "Nanum Myeongjo"}
          fontSize={{ xs: 20, sm: 30, md: 40, xl: 60 }}
          width={{
            xs: 180,
            sm: 302,
            md: 425,
            xl: 670,
          }}
          marginBottom={5}
          sx={{ whiteSpace: "pre-line" }}
        >
          {language
            ? "The front end developer you were looking for"
            : "당신이 찾던\n프론트 엔드 개발자"}
        </Typography>
        <Typography
          fontFamily={language ? "Karla" : "Noto Sans KR"}
          fontSize={{ xs: 10, sm: 14, md: 18, xl: 32 }}
          fontWeight={200}
          color={"#616161"}
          width={{ xs: 160, sm: 352, md: 545, xl: 930 }}
        >
          {language
            ? "As a front-end developer, I create optimized user experiences through modern, intuitive design and seamless UI interactions."
            : "현대적이고 직관적인 디자인과 끊기거나 기다림 없이 부드러운 UI 경험의 구현을 통해 사용자를 위한 최적의 경험을 제공하고자 합니다."}
        </Typography>
      </Box>
      <Box
        sx={{
          display: { xs: "block", sm: "none" },
          position: "absolute",
          zIndex: 0,
          left: { xs: "20%" },
          top: "20%",
          height: "400px",
          width: "130px",
          backgroundColor: "#f8f8f8",
        }}
      ></Box>
    </Box>
    <Box
      sx={{
        height: "100%",
        width: { xs: "30%", xsm: "40%", sm: "70%" },
      }}
    >
      <FirstImageCarousel />
    </Box>
  </Box>
));

export default FirstImage;
