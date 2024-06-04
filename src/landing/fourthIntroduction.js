import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { forwardRef } from "react";
import IntroductionImage from "../images/introductionImage.jpg";
import BirthdayIcon from "../images/birthday.png";
import EmailIcon from "../images/email.png";
import GraduationIcon from "../images/graduation.png";
import PhoneIcon from "../images/phone.png";

const FourthIntroduction = forwardRef(({ language }, ref) => (
  <Box
    ref={(fourthRef) => (ref.current[3] = fourthRef)}
    sx={{
      height: 800,
      width: "100%",
      display: "flex",
      flexDirection: "row",
    }}
  >
    <Box
      sx={{
        backgroundImage: `url(${IntroductionImage})`,
        height: "100%",
        width: "40%",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    />
    <Box
      sx={{
        height: "100%",
        width: "60%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography
        fontFamily={language ? "Playfair Display" : "Nanum Myeongjo"}
        fontSize={60}
        fontWeight={language ? 500 : 400}
        marginBottom={"70px"}
      >
        {language ? "About Me" : "자기소개"}
      </Typography>
      <Typography
        fontFamily={language ? "Karla" : "Noto Sans KR"}
        fontSize={language ? 20 : 18}
        fontWeight={200}
        color={"#787878"}
        textAlign={"center"}
        marginBottom={"30px"}
        whiteSpace={"pre-line"}
      >
        {language
          ? "Hello, I'm Hyun Jun Park, a front-end developer. \nI chose this career path out of a fascination with everything design-related and \nwith the hope of bringing my visions to life."
          : "안녕하세요. 프론트 엔드 개발자 박현준입니다. \n제 머릿속에 있던 구상을 웹에 그대로 구현하여 사람들과 공유할 수 있다는 점에 끌려 \n프론트 엔드 개발자가 되기로 하였습니다."}
      </Typography>
      <Typography
        fontFamily={language ? "Karla" : "Noto Sans KR"}
        fontSize={language ? 20 : 18}
        fontWeight={200}
        color={"#787878"}
        textAlign={"center"}
        marginBottom={"30px"}
        whiteSpace={"pre-line"}
      >
        {language
          ? "As a developer, I work tirelessly to meet project deadlines, \neven under the most challenging circumstances. \nI am a team player, able to follow directions and take the lead when necessary."
          : "개발자로서, 저는 예측을 벗어난  어려운 상황에 처하더라도 프로젝트 기한을 준수하기 위해 끊임없이 최선을 다하곤 하였습니다. \n팀의 일원으로서, 저는 맡은 역할을 완수하고, 필요시에는 주도적으로 일을 진행하여 프로젝트의 완성에 기여하였습니다."}
      </Typography>
      <Typography
        fontFamily={language ? "Karla" : "Noto Sans KR"}
        fontSize={language ? 20 : 18}
        fontWeight={200}
        color={"#787878"}
        textAlign={"center"}
        whiteSpace={"pre-line"}
        marginBottom={"60px"}
      >
        {language
          ? "Completing a project takes precedence and requires discipline—both skills I possess."
          : "프로젝트에 투입되었을 때 저의 모든 관심과 역량을 쏟아붇는 모습을 보게 되실 것을 약속드립니다."}
      </Typography>
      <Box display={"flex"} flexDirection={"row"}>
        <Box display={"flex"} flexDirection={"column"} marginRight={"30px"}>
          <Box
            display={"flex"}
            flexDirection={"row"}
            justifyContent={"flex-start"}
            alignItems={"center"}
            marginBottom={"15px"}
          >
            <Box
              sx={{
                backgroundImage: `url(${BirthdayIcon})`,
                height: "18px",
                width: "18px",
                backgroundSize: "cover",
                backgroundPosition: "center",
                marginRight: "19px",
                marginLeft: "4px",
              }}
            />
            <Typography
              fontFamily={language ? "Karla" : "Noto Sans KR"}
              fontSize={language ? 20 : 18}
              fontWeight={200}
              color={"#616161"}
              textAlign={"left"}
            >
              {language ? "10.7.1992" : "1992.10.07"}
            </Typography>
          </Box>
          <Box
            display={"flex"}
            flexDirection={"row"}
            justifyContent={"flex-start"}
            alignItems={"center"}
          >
            <Box
              sx={{
                backgroundImage: `url(${GraduationIcon})`,
                height: "26px",
                width: "26px",
                backgroundSize: "cover",
                backgroundPosition: "center",
                marginRight: "15px",
              }}
            />
            <Typography
              fontFamily={language ? "Karla" : "Noto Sans KR"}
              fontSize={language ? 20 : 18}
              fontWeight={200}
              color={"#616161"}
              textAlign={"left"}
            >
              {language ? "CAU, Philosophy major" : "중앙대학교 철학과 졸업"}
            </Typography>
          </Box>
        </Box>
        <Box>
          <Box
            display={"flex"}
            flexDirection={"row"}
            alignItems={"center"}
            marginBottom={"15px"}
          >
            <Box
              sx={{
                backgroundImage: `url(${EmailIcon})`,
                height: "18px",
                width: "18px",
                backgroundSize: "cover",
                backgroundPosition: "center",
                marginRight: "15px",
              }}
            />
            <Typography
              fontFamily={language ? "Karla" : "Noto Sans KR"}
              fontSize={language ? 20 : 18}
              fontWeight={200}
              color={"#616161"}
            >
              i2pss@naver.com
            </Typography>
          </Box>
          <Box display={"flex"} flexDirection={"row"} alignItems={"center"}>
            <Box
              sx={{
                backgroundImage: `url(${PhoneIcon})`,
                height: "18px",
                width: "18px",
                backgroundSize: "cover",
                backgroundPosition: "center",
                marginRight: "15px",
              }}
            />
            <Typography
              fontFamily={language ? "Karla" : "Noto Sans KR"}
              fontSize={language ? 20 : 18}
              fontWeight={200}
              color={"#616161"}
            >
              {language ? "+82 10-2999-1157" : "010-2999-1157"}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  </Box>
));

export default FourthIntroduction;
