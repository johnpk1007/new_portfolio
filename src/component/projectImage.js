import { Typography, Box, Paper } from "@mui/material";

export default function ProjectImage({
  language,
  English,
  Korean,
  ImageSrc,
  PaperHeight,
  PaperWidth,
  MarginRight = "25px",
  MarginBottom = "0px",
  FontSize = 18,
  BackgroundPosition = "center",
}) {
  return (
    <Paper
      elevation={3}
      sx={{
        height: PaperHeight,
        width: PaperWidth,
        marginRight: MarginRight,
        marginBottom: MarginBottom,
        overflow: "hidden",
        position: "relative",
        "&:hover .background-image": {
          filter: "blur(2px)",
        },
        "&:hover .overlay": {
          opacity: 1,
        },
      }}
    >
      <Box
        className="background-image"
        sx={{
          backgroundImage: `url(${ImageSrc})`,
          height: "100%",
          width: "100%",
          backgroundSize: "cover",
          backgroundPosition: BackgroundPosition,
          transition: "filter 0.3s ease",
        }}
      />
      <Box
        className="overlay"
        sx={{
          height: "100%",
          width: "100%",
          backgroundColor: "rgba(0,0,0,0.5)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "absolute",
          top: "0px",
          left: "0px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          opacity: 0,
          transition: "opacity 0.3s ease",
          padding: "5px",
        }}
      >
        <Typography
          fontFamily={language ? "Karla" : "Noto Sans KR"}
          fontSize={FontSize}
          fontWeight={200}
          color={"white"}
          textAlign={"center"}
        >
          {language ? English : Korean}
        </Typography>
      </Box>
    </Paper>
  );
}
