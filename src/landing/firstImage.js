import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { EmblaCarousel } from "../component/carousel";
import { forwardRef } from "react";

const FirstImage = forwardRef(({ language }, ref) => (
  <Box
    ref={(firstRef) => (ref.current[0] = firstRef)}
    sx={{
      height: 930,
      width: "100%",
      display: "flex",
      direction: "row",
      justifyContent: "space-between",
    }}
  >
    <Box sx={{ height: "100%", width: "30%", position: "relative" }}>
      <Box
        data-aos="fade-right"
        data-aos-once="true"
        data-aos-delay="700"
        sx={{
          position: "absolute",
          zIndex: 1,
          left: "30%",
          top: "30%",
        }}
      >
        <Typography
          fontFamily={language ? "Karla" : "Noto Sans KR"}
          fontSize={24}
          fontWeight={200}
          color={"#B7B7B7"}
          marginBottom={1}
        >
          {language ? "USER CENTERED DESIGN" : "사용자 중심의 디자인"}
        </Typography>
        <Typography
          fontFamily={language ? "Playfair Display" : "Nanum Myeongjo"}
          fontSize={60}
          width={670}
          marginBottom={5}
          sx={{ whiteSpace: "pre-line" }}
        >
          {language
            ? "The front end developer you were looking for"
            : "당신이 찾던\n프론트 엔드 개발자"}
        </Typography>
        <Typography
          fontFamily={language ? "Karla" : "Noto Sans KR"}
          fontSize={32}
          fontWeight={200}
          color={"#616161"}
          width={930}
        >
          {language
            ? "As a front-end developer, I create optimized user experiences through modern, intuitive design and seamless UI interactions."
            : "현대적이고 직관적인 디자인과 끊기거나 기다림 없이 부드러운 UI 경험의 구현을 통해 사용자를 위한 최적의 경험을 제공하고자 합니다."}
        </Typography>
      </Box>
    </Box>
    <Box
      sx={{
        height: "100%",
        width: "70%",
      }}
    >
      <EmblaCarousel />
    </Box>
  </Box>
));

export default FirstImage;
