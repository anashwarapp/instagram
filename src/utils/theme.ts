import { createTheme } from "@mui/material";
import { blue } from "@mui/material/colors";


const theme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: blue[500]
        },
    },
});

export default theme