import Box from "@mui/material/Box";
import SkillImage1 from "../images/skillImage1.jpg";
import SkillImage2 from "../images/skillImage2.jpg";
import { Typography } from "@mui/material";
import FrontEndIcon from "../images/frontendicon.png";
import FrameworkIcon from "../images/frameworkIcon.png";
import DesignIcon from "../images/designIcon.png";
import BackendIcon from "../images/backendIcon.png";
import CollaboationIcon from "../images/collaborationIcon.png";
import { forwardRef } from "react";

const SecondSkill = forwardRef(({ language }, ref) => (
  <Box
    ref={(secondRef) => (ref.current[1] = secondRef)}
    sx={{
      height: 1200,
      width: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    }}
  >
    <Box />
    <Box
      sx={{
        height: 900,
        width: "100%",
        display: "flex",
        direction: "row",
        justifyContent: "space-between",
      }}
    >
      <Box sx={{ height: "100%", width: "25%" }}>
        <Box sx={{ height: "10%" }} />
        <Box
          sx={{
            backgroundImage: `url(${SkillImage1})`,
            height: "90%",
            width: "100%",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </Box>
      <Box
        sx={{
          height: "100%",
          width: "25%",
          display: "flex",
          alignItems: "flex-end",
        }}
      >
        <Box
          data-aos="skill-animation"
          data-aos-once="true"
          data-aos-delay="700"
          // sx={{
          //   transform: "rotate(270deg) translateX(180px)",
          //   transformOrigin: "30% 50%",
          // }}
        >
          <Typography
            fontFamily={language ? "Alatsi" : "Do Hyeon"}
            fontSize={language ? 128 : 110}
          >
            {language ? "SKILLS" : "기술스택"}
          </Typography>
          <Typography
            fontFamily={language ? "Karla" : "Noto Sans KR"}
            fontSize={24}
            fontWeight={language ? 200 : 100}
            color={"#616161"}
            width={800}
            sx={{ whiteSpace: "pre-line" }}
          >
            {language
              ? "Using the latest web technologies, I develop responsive web applications with intuitive, user-friendly designs."
              : "최신 웹 기술을 활용하여 직관적이고 사용자 친화적인 디자인을 갖춘 반응형 \n웹 애플리케이션을 구현합니다."}
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          height: "100%",
          width: "25%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
        }}
      >
        <Box />
        <Box>
          <Typography fontFamily={"Karla"} fontSize={32} fontWeight={300}>
            Basic
          </Typography>
          <Typography
            fontFamily={"Karla"}
            fontSize={24}
            fontWeight={200}
            color={"#616161"}
          >
            HTML, CSS, Javascript
          </Typography>
        </Box>
        <Box>
          <Typography fontFamily={"Karla"} fontSize={32} fontWeight={300}>
            Framework & Library
          </Typography>
          <Typography
            fontFamily={"Karla"}
            fontSize={24}
            fontWeight={200}
            color={"#616161"}
          >
            React, MUI
          </Typography>
        </Box>
        <Box>
          <Typography fontFamily={"Karla"} fontSize={32} fontWeight={300}>
            Design
          </Typography>
          <Typography
            fontFamily={"Karla"}
            fontSize={24}
            fontWeight={200}
            color={"#616161"}
          >
            Figma
          </Typography>
        </Box>
        <Box>
          <Typography fontFamily={"Karla"} fontSize={32} fontWeight={300}>
            Back end
          </Typography>
          <Typography
            fontFamily={"Karla"}
            fontSize={24}
            fontWeight={200}
            color={"#616161"}
          >
            Node.js, Redis
          </Typography>
        </Box>
        <Box>
          <Typography fontFamily={"Karla"} fontSize={32} fontWeight={300}>
            Collabration
          </Typography>
          <Typography
            fontFamily={"Karla"}
            fontSize={24}
            fontWeight={200}
            color={"#616161"}
          >
            Git, Github
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          height: "100%",
          width: "25%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "flex-end",
        }}
      >
        <Box
          width={540}
          height={140}
          bgcolor={"black"}
          position={"relative"}
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
              height: 60,
              width: 60,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <Box
            sx={{
              backgroundImage: `url(${FrameworkIcon})`,
              height: 60,
              width: 60,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <Box
            sx={{
              backgroundImage: `url(${DesignIcon})`,
              height: 60,
              width: 60,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <Box
            sx={{
              backgroundImage: `url(${BackendIcon})`,
              height: 60,
              width: 60,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <Box />
        </Box>

        <Box
          sx={{
            backgroundImage: `url(${SkillImage2})`,
            height: 470,
            width: 350,
            backgroundSize: "cover",
            backgroundPosition: "center",
            marginRight: 10,
          }}
        />
      </Box>
    </Box>
    <Box />
  </Box>
));

export default SecondSkill;

// export default function SecondSkill() {
//   return (
//     <Box
//       sx={{
//         height: 1000,
//         width: "100%",
//         display: "flex",
//         direction: "row",
//         justifyContent: "space-between",
//       }}
//     >
//       <Box sx={{ height: "100%", width: "25%" }}>
//         <Box sx={{ height: "10%" }} />
//         <Box
//           sx={{
//             backgroundImage: `url(${SkillImage1})`,
//             height: "90%",
//             width: "100%",
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//           }}
//         />
//       </Box>
//       <Box
//         sx={{
//           height: "100%",
//           width: "25%",
//           display: "flex",
//           //   justifyContent: "flex-start",
//           alignItems: "flex-end",
//         }}
//       >
//         <Box
//           sx={{
//             transform: "rotate(270deg) translateX(180px)",
//             transformOrigin: "30% 50%",
//           }}
//         >
//           <Typography fontFamily={"Alatsi"} fontSize={128}>
//             SKILLS
//           </Typography>
//           <Typography
//             fontFamily={"Karla"}
//             fontSize={24}
//             fontWeight={200}
//             width={800}
//           >
//             Using the latest web technologies, I develop responsive web
//             applications with intuitive, user-friendly designs.
//           </Typography>
//         </Box>
//       </Box>
//       <Box
//         sx={{
//           height: "100%",
//           width: "25%",
//           display: "flex",
//           flexDirection: "column",
//           justifyContent: "space-around",
//         }}
//       >
//         <Box />
//         <Box>
//           <Typography fontFamily={"Karla"} fontSize={32} fontWeight={300}>
//             Basic
//           </Typography>
//           <Typography
//             fontFamily={"Karla"}
//             fontSize={24}
//             fontWeight={200}
//             color={"#616161"}
//           >
//             HTML, CSS, Javascript
//           </Typography>
//         </Box>
//         <Box>
//           <Typography fontFamily={"Karla"} fontSize={32} fontWeight={300}>
//             Framework & Library
//           </Typography>
//           <Typography
//             fontFamily={"Karla"}
//             fontSize={24}
//             fontWeight={200}
//             color={"#616161"}
//           >
//             React, MUI
//           </Typography>
//         </Box>
//         <Box>
//           <Typography fontFamily={"Karla"} fontSize={32} fontWeight={300}>
//             Design
//           </Typography>
//           <Typography
//             fontFamily={"Karla"}
//             fontSize={24}
//             fontWeight={200}
//             color={"#616161"}
//           >
//             Figma
//           </Typography>
//         </Box>
//         <Box>
//           <Typography fontFamily={"Karla"} fontSize={32} fontWeight={300}>
//             Back end
//           </Typography>
//           <Typography
//             fontFamily={"Karla"}
//             fontSize={24}
//             fontWeight={200}
//             color={"#616161"}
//           >
//             Node.js, Redis
//           </Typography>
//         </Box>
//         <Box>
//           <Typography fontFamily={"Karla"} fontSize={32} fontWeight={300}>
//             Collabration
//           </Typography>
//           <Typography
//             fontFamily={"Karla"}
//             fontSize={24}
//             fontWeight={200}
//             color={"#616161"}
//           >
//             Git, Github
//           </Typography>
//         </Box>
//       </Box>
//       <Box
//         sx={{
//           height: "100%",
//           width: "25%",
//           display: "flex",
//           flexDirection: "column",
//           justifyContent: "space-between",
//           alignItems: "flex-end",
//         }}
//       >
//         <Box
//           width={540}
//           height={140}
//           bgcolor={"black"}
//           position={"relative"}
//           display={"flex"}
//           justifyContent={"space-around"}
//           alignItems={"center"}
//           marginTop={10}
//           sx={{
//             borderTopLeftRadius: 70,
//             borderBottomLeftRadius: 70,
//           }}
//         >
//           <Box />
//           <Box
//             sx={{
//               backgroundImage: `url(${FrontEndIcon})`,
//               height: 60,
//               width: 60,
//               backgroundSize: "cover",
//               backgroundPosition: "center",
//             }}
//           />
//           <Box
//             sx={{
//               backgroundImage: `url(${FrameworkIcon})`,
//               height: 60,
//               width: 60,
//               backgroundSize: "cover",
//               backgroundPosition: "center",
//             }}
//           />
//           <Box
//             sx={{
//               backgroundImage: `url(${DesignIcon})`,
//               height: 60,
//               width: 60,
//               backgroundSize: "cover",
//               backgroundPosition: "center",
//             }}
//           />
//           <Box
//             sx={{
//               backgroundImage: `url(${BackendIcon})`,
//               height: 60,
//               width: 60,
//               backgroundSize: "cover",
//               backgroundPosition: "center",
//             }}
//           />
//           <Box />
//         </Box>

//         <Box
//           sx={{
//             backgroundImage: `url(${SkillImage2})`,
//             height: 470,
//             width: 350,
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//             marginRight: 10,
//           }}
//         />
//       </Box>
//     </Box>
//   );
// }
