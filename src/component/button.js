import Box from "@mui/material/Box";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

export default function Landing() {
  return (
    <Box sx={{ position: "absolute" }}>
      <FormControl>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="first"
          name="radio-buttons-group"
        >
          <FormControlLabel value="first" control={<Radio />} />
          <FormControlLabel value="second" control={<Radio />} />
          <FormControlLabel value="third" control={<Radio />} />
          <FormControlLabel value="fourth" control={<Radio />} />
        </RadioGroup>
      </FormControl>
    </Box>
  );
}
