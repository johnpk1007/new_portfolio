import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import landingImage1 from "../images/landingImage1.jpg";

export default function FirstImage() {
  return (
    <Box
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
          sx={{
            position: "absolute",
            left: "30%",
            top: "30%",
          }}
        >
          <Typography
            fontFamily={"Karla"}
            fontSize={24}
            color={"#B7B7B7"}
            marginBottom={1}
          >
            USER CENTERED DESIGN
          </Typography>
          <Typography
            fontFamily={"Playfair Display"}
            fontSize={60}
            width={670}
            marginBottom={5}
          >
            The front end developer you were looking for!
          </Typography>
          <Typography
            fontFamily={"Karla"}
            fontSize={32}
            color={"#616161"}
            width={930}
          >
            As a front-end developer, I create optimized user experiences
            through modern, intuitive design and seamless UI interactions.
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          backgroundImage: `url(${landingImage1})`,
          height: "100%",
          width: "70%",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
    </Box>
  );
}
