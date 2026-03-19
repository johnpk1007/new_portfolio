import ProjectImageComponent from "./projectImage";
import houseplant_1 from "../images/houseplant_1.webp"
import houseplant_2 from "../images/houseplant_2.webp"
import houseplant_3 from "../images/houseplant_3.webp"
import houseplant_4 from "../images/houseplant_4.webp"
import houseplant_5 from "../images/houseplant_5.webp"
import Box from "@mui/material/Box";

export const HouseplantPage1 = ({ language }) => (
    <ProjectImageComponent
        language={language}
        English={"Landing page"}
        Korean={"메인 페이지"}
        ImageSrc={houseplant_1}
        PaperHeight={"98%"}
        PaperWidth={"100%"}
        elevation={3}
    />
);

export const HouseplantPage2 = ({ language }) => (
    <Box display={"flex"} flexDirection={"column"} width={"100%"} height={"100%"}>
        <ProjectImageComponent
            language={language}
            English={"Product page"}
            Korean={"상품 페이지"}
            ImageSrc={houseplant_2}
            PaperHeight={"45%"}
            PaperWidth={"100%"}
            elevation={3}
            MarginBottom="auto"
        />
        <ProjectImageComponent
            language={language}
            English={"Cart page"}
            Korean={"카트 페이지"}
            ImageSrc={houseplant_3}
            PaperHeight={"45%"}
            PaperWidth={"100%"}
            elevation={3}
            MarginBottom="4%"
        />
    </Box>
)

export const HouseplantPage3 = ({ language }) => (
    <Box display={"flex"} flexDirection={"column"} width={"100%"} height={"100%"}>
        <ProjectImageComponent
            language={language}
            English={"Payment page"}
            Korean={"결제 페이지"}
            ImageSrc={houseplant_4}
            PaperHeight={"45%"}
            PaperWidth={"100%"}
            elevation={3}
            MarginBottom="auto"
        />
        <ProjectImageComponent
            language={language}
            English={"Confirmation page"}
            Korean={"확인 페이지"}
            ImageSrc={houseplant_5}
            PaperHeight={"45%"}
            PaperWidth={"100%"}
            elevation={3}
            MarginBottom="4%"
        />
    </Box>
)