import { Typography, Box, Paper, useTheme, useMediaQuery } from "@mui/material";

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
  sizeProp = "xs",
  elevation = 3,
  main = false,
  exception = false,
}) {
  const theme = useTheme();
  const isAboveBreakpoint = useMediaQuery(theme.breakpoints.up(sizeProp));
  const stopTransition = main ? "lg" : "xs";
  const isBelowBreakpointMain = useMediaQuery(theme.breakpoints.down("md"));
  const isBelowBreakpointAndStop = useMediaQuery(
    theme.breakpoints.down(stopTransition)
  );

  return (
    <Paper
      elevation={elevation}
      sx={{
        height: PaperHeight,
        width: PaperWidth,
        marginRight: MarginRight,
        marginBottom: main
          ? isBelowBreakpointMain
            ? exception
              ? "70px"
              : "270px"
            : 0
          : MarginBottom,
        overflow: "hidden",
        position: "relative",
        display: isAboveBreakpoint ? "block" : "none",
        "&:hover .background-image": isBelowBreakpointAndStop
          ? {}
          : { filter: "blur(2px)" },
        "&:hover .overlay": isBelowBreakpointAndStop
          ? {}
          : {
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
          opacity: isBelowBreakpointAndStop ? 1 : 0,
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
          display={isBelowBreakpointAndStop ? "none" : "block"}
        >
          {language ? English : Korean}
        </Typography>
      </Box>
    </Paper>
  );
}
