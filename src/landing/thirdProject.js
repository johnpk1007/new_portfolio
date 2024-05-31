import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { forwardRef } from "react";
import ProjectImage from "../images/projectImage.jpg";

const ThirdProject = forwardRef(({ language }, ref) => (
  <Box
    ref={(firstRef) => (ref.current[2] = firstRef)}
    sx={{
      height: 3500,
      width: "100%",
      display: "flex",
      flexDirection: "column",
      backgroundColor: "#f9f9f9",
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
        <Typography fontFamily={"Alatsi"} fontSize={48} color={"white"}>
          PROJECTS
        </Typography>
        <Typography
          fontFamily={"Karla"}
          fontSize={12}
          fontWeight={300}
          width={"60%"}
          color={"white"}
        >
          I have completed various projects that provide personalized solutions
          tailored to customer demands, showcasing my development skills
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
  </Box>
));
export default ThirdProject;
