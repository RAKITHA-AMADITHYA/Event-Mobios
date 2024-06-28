import { Box, Grid, Typography, useTheme } from "@mui/material";
import { NAV_LINKS } from "../utils/constants";
import RoomIcon from "@mui/icons-material/Room";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
  const theme = useTheme();
  return (
    <>
      <Grid
        container
        sx={{ backgroundColor: "#000000", color: "#FFF", p: "3rem" }}
      >
        <Grid item md={4}>
          <Typography variant="h3">LOGO</Typography>
          <Typography variant="subtitle1" mt={5} fontWeight={400}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud
          </Typography>
        </Grid>
        <Grid
          item
          md={5}
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            textAlign: "center",
          }}
        >
          <Typography variant="h3">USEFUL LINKS </Typography>
          {NAV_LINKS.map((nav) => (
            <Typography
              variant="h6"
              fontWeight={600}
              sx={{
                cursor: "pointer",
                display: "flex",
                alignItems: "start",
                justifyContent: "center",
                textAlign: "start",
                "&:hover": { color: theme.palette.primary.main },
                whiteSpace: "nowrap",
              }}
            >
              {nav.title}
            </Typography>
          ))}
        </Grid>
        <Grid item md={3}>
          <Typography variant="h3">Contact Us </Typography>
          <Box sx={{ display: "flex", flex: 1, width: "100%", mt: 2, gap: 2 }}>
            <RoomIcon />
            <Typography variant="h6" >
              {/* {date} */}
              Lorem ipsum dolor sit amet,
            </Typography>
          </Box>
          <Box sx={{ display: "flex", flex: 1, width: "100%", mt: 1, gap: 2 }}>
            <LocalPhoneIcon />
            <Typography variant="h6" >+94 765432543 </Typography>
          </Box>
          <Box sx={{ display: "flex", flex: 1, width: "100%", mt: 1, gap: 2 }}>
            <EmailIcon />
            <Typography variant="h6" >event123@gmail.com</Typography>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Footer;
