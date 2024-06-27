import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Box } from "@mui/material";
import Fab from "@mui/material/Fab";
import Fade from "@mui/material/Fade";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { Outlet } from "react-router-dom";
// import Footer from "./Footer";
import Header from "./Header";

type ScrollTopProps={
 children:React.ReactNode;
};

function ScrollTop({ children}:ScrollTopProps) {
  const trigger = useScrollTrigger({
    target: window,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={() => handleClick()}
        role="presentation"
        sx={{ position: "fixed", bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Fade>
  );
}

const Layout = () => {
 

  return (
    <div style={{ backgroundColor: "#ffff" }}>
      <div style={{ position: 'sticky', top: 0, zIndex: 10 }}>
        <Header />
      </div>

      <Box  minHeight={"60vh"}>
        <Outlet />
      </Box>

      {/* <Footer /> */}

      <ScrollTop>
        <Fab size="medium" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </div>
  );
};

export default Layout;
