import Box from "@mui/material/Box";
// import SkillImage1 from "../images/skillImage1.jpg";
// import SkillImage2 from "../images/skillImage2.jpg";
import SkillImage1 from "../images/skillImage1.webp";
import SkillImage2 from "../images/skillImage2.webp";
import { Typography } from "@mui/material";
import FrontEndIcon from "../images/frontendicon.png";
import FrameworkIcon from "../images/frameworkIcon.png";
import DesignIcon from "../images/designIcon.png";
import BackendIcon from "../images/backendIcon.png";
import { forwardRef } from "react";

const SecondSkill = forwardRef(({ language }, ref) => (
  <Box
    ref={(secondRef) => (ref.current[1] = secondRef)}
    sx={{
      height: { xs: 700, sm: 825, md: 950, xl: 1200 },
      width: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    }}
  >
    <Box position={"relative"}>
      <Box
        width={{ xs: 254, sm: 397, xl: 540 }}
        height={{ xs: 70, sm: 105, xl: 140 }}
        bgcolor={"black"}
        position={"absolute"}
        right={"0px"}
        display={"flex"}
        justifyContent={"space-around"}
        alignItems={"center"}
        marginTop={10}
        sx={{
          borderTopLeftRadius: 70,
          borderBottomLeftRadius: 70,
        }}
      >
        <Box />
        <Box
          sx={{
            backgroundImage: `url(${FrontEndIcon})`,
            height: { xs: 30, sm: 45, xl: 60 },
            width: { xs: 30, sm: 45, xl: 60 },
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Box
          sx={{
            backgroundImage: `url(${FrameworkIcon})`,
            height: { xs: 30, sm: 45, xl: 60 },
            width: { xs: 30, sm: 45, xl: 60 },
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Box
          sx={{
            backgroundImage: `url(${DesignIcon})`,
            height: { xs: 30, sm: 45, xl: 60 },
            width: { xs: 30, sm: 45, xl: 60 },
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Box
          sx={{
            backgroundImage: `url(${BackendIcon})`,
            height: { xs: 30, sm: 45, xl: 60 },
            width: { xs: 30, sm: 45, xl: 60 },
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Box />
      </Box>
    </Box>
    <Box
      sx={{
        height: "100%",
        width: "100%",
        display: "flex",
        direction: "row",
        justifyContent: "space-between",
      }}
    >
      <Box
        sx={{
          height: "100%",
          width: { xs: "15%", md: "25%" },
          display: { xs: "none", md: "block" },
        }}
      >
        <Box sx={{ height: "20%" }} />
        <Box
          sx={{
            maxWidth: "470px",
            backgroundImage: `url(${SkillImage1})`,
            height: "80%",
            width: "100%",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </Box>

      <Box
        sx={{
          height: "100%",
          width: { xs: "50%", md: "25%" },
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            height: "100%",
            width: "50%",
            display: "flex",
            alignItems: "flex-end",
            transform: {
              xs: "translate3d(-70px, 130px, 0)",
              sm: "translate3d(-50px, 130px, 0)",
              md: "translate3d(-100px, 130px, 0)",
            },
          }}
        >
          <Box
            data-aos="skill-animation"
            data-aos-once="true"
            data-aos-delay="700"
          >
            <Typography
              textAlign={"left"}
              fontFamily={language ? "Alatsi" : "Do Hyeon"}
              fontSize={
                language
                  ? { xs: 60, sm: 77, md: 94, xl: 128 }
                  : { xs: 48, sm: 63, md: 79, xl: 110 }
              }
            >
              {language ? "SKILLS" : "기술스택"}
            </Typography>
            <Typography
              fontFamily={language ? "Karla" : "Noto Sans KR"}
              fontSize={{ xs: 14, sm: 16, md: 19, xl: 24 }}
              fontWeight={language ? 200 : 100}
              color={"#616161"}
              width={{ xs: 370, sm: 445, md: 520, xl: 670 }}
              textAlign={"left"}
              sx={{ whiteSpace: "pre-line" }}
            >
              {language
                ? "Using the latest web technologies, I develop responsive web applications with intuitive, user-friendly designs."
                : "최신 웹 기술을 활용하여 직관적이고 사용자 친화적인 디자인을 갖춘 반응형 웹 애플리케이션을 구현합니다."}
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          height: "100%",
          width: { xs: "50%", md: "25%" },
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          paddingTop: { xs: "180px", sm: "250px" },
        }}
      >
        <Box>
          <Typography
            fontFamily={"Karla"}
            fontSize={{ xs: 20, md: 26, xl: 32 }}
            fontWeight={300}
          >
            Basic
          </Typography>
          <Typography
            fontFamily={"Karla"}
            fontSize={{ xs: 14, md: 19, xl: 24 }}
            fontWeight={200}
            color={"#616161"}
          >
            HTML, CSS, JavaScript
          </Typography>
        </Box>
        <Box>
          <Typography
            fontFamily={"Karla"}
            fontSize={{ xs: 20, md: 26, xl: 32 }}
            fontWeight={300}
          >
            Framework & Library
          </Typography>
          <Typography
            fontFamily={"Karla"}
            fontSize={{ xs: 14, md: 19, xl: 24 }}
            fontWeight={200}
            color={"#616161"}
          >
            React, Next.js, TypeScript, Tailwind CSS, Redux, MUI
          </Typography>
        </Box>
        <Box>
          <Typography
            fontFamily={"Karla"}
            fontSize={{ xs: 20, md: 26, xl: 32 }}
            fontWeight={300}
          >
            Design
          </Typography>
          <Typography
            fontFamily={"Karla"}
            fontSize={{ xs: 14, md: 19, xl: 24 }}
            fontWeight={200}
            color={"#616161"}
          >
            Figma
          </Typography>
        </Box>
        <Box>
          <Typography
            fontFamily={"Karla"}
            fontSize={{ xs: 20, md: 26, xl: 32 }}
            fontWeight={300}
          >
            Back end
          </Typography>
          <Typography
            fontFamily={"Karla"}
            fontSize={{ xs: 14, md: 19, xl: 24 }}
            fontWeight={200}
            color={"#616161"}
          >
            Node.js, Redis
          </Typography>
        </Box>
        <Box>
          <Typography
            fontFamily={"Karla"}
            fontSize={{ xs: 20, md: 26, xl: 32 }}
            fontWeight={300}
          >
            Collaboration
          </Typography>
          <Typography
            fontFamily={"Karla"}
            fontSize={{ xs: 14, md: 19, xl: 24 }}
            fontWeight={200}
            color={"#616161"}
          >
            Git, Github
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          position: "relative",
          height: "100%",
          width: "25%",
          display: { xs: "none", md: "flex" },
          flexDirection: "column",
          justifyContent: "flex-end",
          alignItems: "flex-end",
        }}
      >
        <Box
          sx={{
            display: { xs: "none", sm: "block" },
            backgroundImage: `url(${SkillImage2})`,
            height: { sm: 313, xl: 470 },
            width: { sm: 200, xl: 300 },
            backgroundSize: "cover",
            backgroundPosition: "center",
            marginRight: 10,
            marginBottom: 15,
          }}
        />
      </Box>
    </Box>
    <Box height={"100px"} />
  </Box>
));

export default SecondSkill;
