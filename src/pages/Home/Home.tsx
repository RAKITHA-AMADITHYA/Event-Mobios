import { Box, Button, Typography } from "@mui/material";
import HomeImg from "../../assets/images/landingImg.png";
import HomeText from "../../assets/images/hedding.png";

const Home = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${HomeImg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        backgroundAttachment: "fixed",
        backgroundColor: "#000000",
        color:'#FFF'
      }}
    >
      {/* Overlay with semi-transparent black */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent black
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "center" ,flexDirection:'column',alignItems:'center'}}>
          <img
            src={HomeText}
            width={"40%"}
            style={{ marginTop: "15rem" }}
            alt=""
          />
          <Typography variant="h3" mt={'1rem'}>The Ultimate Event Booking Experience</Typography>

          <Box sx={{ display: 'flex', gap: 2,mt:2 }}>
            <Button variant="contained">Contact Us</Button>
            <Button variant="outlined">Book Events</Button>
          </Box>
        </Box>
      </Box>
    </section>
  );
};

export default Home;
