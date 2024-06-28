import MenuIcon from "@mui/icons-material/Menu";
import { Badge, Box, Button, Grid, Typography, useTheme } from "@mui/material";
import { useState } from "react";
import LoginModal from "../modals/Login";
import SignupModal from "../modals/Signup";
import { NAV_LINKS } from "../utils/constants";

const Header = () => {
  const theme = useTheme();
  const [openLogin, setOpenLogin] = useState(false);
  const [openSignup, setOpenSignup] = useState(false);

  const handleOpenLogin = () => {
    setOpenLogin(true);
  };
  const handleCloseLogin = () => {
    setOpenLogin(false);
  };

  const handleOpenSignup = () => {
    setOpenSignup(true);
  };
  const handleCloseSignup = () => {
    setOpenSignup(false);
  };

  return (
    <>
      <Grid
        container
        sx={{ color: "#FFF", bgcolor: "#000000", height: "10vh" }}
        spacing={1}
      >
        <Grid
          item
          xs={10}
          lg={2}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h3" fontWeight={700}>
            LOGO
          </Typography>
        </Grid>
        {/* Menu Icon */}
        <Grid
          item
          xs={2}
          display={{
            xs: "flex",
            lg: "none",
          }}
          justifyContent={"end"}
          alignItems={"center"}
        >
          <Badge color="primary">
            <MenuIcon color="action" />
          </Badge>
        </Grid>

        {/* Nav Link List */}
        <Grid
          item
          lg={8}
          display={{ xs: "none", lg: "flex" }}
          justifyContent={"center"}
          alignItems={"center"}
          spacing={1}
        >
          {NAV_LINKS.map((nav) => (
            <Box sx={{ m: 1.5 }} key={nav.title}>
              <Typography
                variant="h5"
                fontWeight={600}
                sx={{
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  "&:hover": { color: theme.palette.primary.main },
                  whiteSpace: "nowrap",
                }}
              >
                {nav.title}
              </Typography>
            </Box>
          ))}
        </Grid>

        <Grid
          item
          lg={1}
          display={{ xs: "none", lg: "flex" }}
          justifyContent={"start"}
          alignItems={"center"}
          p={1}
        >
          <Button variant="contained" fullWidth onClick={handleOpenLogin}>
            Login
          </Button>
        </Grid>
        <LoginModal open={openLogin} onClose={handleCloseLogin} />

        <Grid
          item
          lg={1}
          display={{ xs: "none", lg: "flex" }}
          justifyContent={"center"}
          alignItems={"center"}
          p={1}
        >
          <Button variant="outlined" fullWidth onClick={handleOpenSignup}>
            Sign Up
          </Button>
        </Grid>
        <SignupModal open={openSignup} onClose={handleCloseSignup} />
      </Grid>
    </>
  );
};

export default Header;
