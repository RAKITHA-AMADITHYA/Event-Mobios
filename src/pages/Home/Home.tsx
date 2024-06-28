import { Box, Button, Grid, Typography, useTheme } from "@mui/material";
import HomeImg from "../../assets/images/landingImg.png";
import Background from "../../assets/images/background2.png";

import HomeText from "../../assets/images/hedding.png";
import EventSearchField from "../../components/Event Search Feild/EventSearchFeild";
import {
  EVENT_TYPES,
  SEARCH_LINKS,
  TRENDING_EVENTS,
  UPCOMMING_EVENTS,
} from "../../utils/constants";
import UpcommingECard from "../../components/Cards/Upcomming Events/UpcommingECard";
import TrendingECard from "../../components/Cards/Trending Events/TrendingECard";

const Home = () => {
  const theme = useTheme();

  return (
    <>
      {/* Landing section */}
      <Box
        sx={{
          backgroundImage: `url(${HomeImg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "100vh",
          backgroundAttachment: "fixed",
          position: "relative", // Ensure the section is positioned relative for absolute positioning of overlay
          backgroundColor: "#000000",
          color: "#FFF",
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
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <img src={HomeText} width={"50%"} alt="" />
          <Typography variant="h3" mt={"1rem"} fontWeight={600}>
            The Ultimate Event Booking Experience
          </Typography>

          <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
            <Button variant="contained">Contact Us</Button>
            <Button variant="outlined">Book Events</Button>
          </Box>
        </Box>
      </Box>

      {/* Search section */}
      <Box
        sx={{
          p: "8rem",
          backgroundColor: "#000000",
          color: "#FFF",
          backgroundImage: `url(${Background})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          position: "relative",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={4} md={6}>
            <EventSearchField options={SEARCH_LINKS} label="Search Events" />
          </Grid>
          <Grid item xs={4} md={4}>
            <EventSearchField options={EVENT_TYPES} label="Type of Event" />
          </Grid>
          <Grid
            item
            xs={4}
            md={2}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button variant="contained" fullWidth>
              Search
            </Button>
          </Grid>
        </Grid>
      </Box>

      {/* Upcomming section */}
      <Box
        sx={{
          p: "8rem",
          backgroundColor: "#000000",
          color: "#FFF",
          backgroundImage: `url(${Background})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        
          backgroundAttachment: "fixed",
          position: "relative",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h2" fontSize={"1.8rem"}>
            Upcomming Events
          </Typography>
          <Typography
            variant="h5"
            sx={{
              "&:hover": {
                color: theme.palette.primary.main,
              },
              cursor: "pointer",
            }}
          >
            View All
          </Typography>
        </Box>

        {UPCOMMING_EVENTS.map((event) => (
          <UpcommingECard
            key={event.id}
            image={event.image}
            title={event.title}
            date={event.date}
            time={event.time}
            location={event.location}
          />
        ))}
      </Box>

      {/* Most Trending Events section */}
      <Box
        sx={{
          p: "8rem",
          backgroundColor: "#000000",
          color: "#FFF",
          mt: -8,
          backgroundImage: `url(${Background})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        
          backgroundAttachment: "fixed",
          position: "relative",
        }}
      >
        <Box>
          <Typography variant="h2" fontSize={"1.8rem"}>
            Most Trending Events
          </Typography>
        </Box>

        <Grid container mt={2} spacing={2}>
          {TRENDING_EVENTS.map((event) => (
             <Grid xs={12} md={3}>
          <TrendingECard
            key={event.id}
            image={event.image}
            title={event.title}
            date={event.date}
            time={event.time}
            location={event.location}
          />  </Grid>
        ))}
        </Grid>
      </Box>
    </>
  );
};

export default Home;
