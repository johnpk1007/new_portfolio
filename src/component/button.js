import Box from "@mui/material/Box";
import Radio from "@mui/material/Radio";
import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import English from "../images/english.png";
import Korean from "../images/korean.png";

export default function Buttons({ language, setLanguage }) {
  const [selectedValue, setSelectedValue] = useState("first");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleClickEvent = () => {
    console.log("click event");
    setLanguage((language) => !language);
  };

  const controlProps = (item) => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
    name: "size-radio-button-demo",
    inputProps: { "aria-label": item },
    sx: {
      color: "#dbdbdb",
      "&.Mui-checked": {
        color: "#dbdbdb",
      },
      "&:hover": {
        backgroundColor: "rgba(219,219,219,0.2)",
      },
    },
  });

  return (
    <Box sx={{ position: "absolute", zIndex: 2 }}>
      <Radio {...controlProps("first")} />
      <Radio {...controlProps("second")} />
      <Radio {...controlProps("third")} />
      <Radio {...controlProps("fourth")} />
      <IconButton aria-label="language" onClick={handleClickEvent}>
        <img
          src={language ? English : Korean}
          alt="language"
          height={20}
          width={20}
        />
      </IconButton>
    </Box>
  );
}
