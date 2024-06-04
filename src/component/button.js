import Box from "@mui/material/Box";
import Radio from "@mui/material/Radio";
import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import English from "../images/english.png";
import Korean from "../images/korean.png";

export default function Buttons({
  language,
  setLanguage,
  selectedValue,
  setSelectedValue,
  scrollToRef,
}) {
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleClickEvent = () => {
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
    <Box sx={{ position: "fixed", zIndex: 2 }}>
      <Radio {...controlProps("first")} onClick={() => scrollToRef(0)} />
      <Radio {...controlProps("second")} onClick={() => scrollToRef(1)} />
      <Radio {...controlProps("third")} onClick={() => scrollToRef(2)} />
      <Radio {...controlProps("fourth")} onClick={() => scrollToRef(3)} />
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
