import {
  Box,
  Button,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import BgImg from "../../assets/images/buyTicketBg.png";
import poster from "../../assets/images/poster10.png";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import ScheduleIcon from "@mui/icons-material/Schedule";
import RoomIcon from "@mui/icons-material/Room";
import Countdown from "../../components/Count down box/Countdown";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { ARTIST_LINEUP, ORGANIZE } from "../../jsons/TestData";
import EventRadio from "../../components/Event Radio/EventRadio";
import { useState } from "react";
const BuyTickets = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${BgImg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          // height: "100vh",
          backgroundAttachment: "inherit",
          position: "relative", // Ensure the section is positioned relative for absolute positioning of overlay
          backgroundColor: "#000000",
          color: "#FFF",
        }}
      >
        <Grid container sx={{ p: "8rem" }}>
          <Grid item xs={5}>
            <img
              src={poster}
              style={{
                minHeight: "25rem",
                minWidth: "25rem",
                maxWidth: "25rem",
              }}
              alt=""
            />
          </Grid>
          <Grid item xs={7}>
            <Typography variant="h1">NADHYA 2024</Typography>
            <Grid container>
              <Grid item xs={12} md={7}>
                <Box
                  sx={{
                    display: "flex",
                    flex: 1,
                    width: "100%",
                    mt: 5,
                    gap: 2,
                  }}
                >
                  <CalendarTodayIcon sx={{ fontSize: "2rem" }} />
                  <Typography variant="h4">
                    {/* {date} */}10th November 2024
                  </Typography>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    flex: 1,
                    width: "100%",
                    mt: 3,
                    gap: 2,
                  }}
                >
                  <ScheduleIcon sx={{ fontSize: "2rem" }} />
                  <Typography variant="h4">{/* {time} */} 17:00 PM</Typography>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    flex: 1,
                    width: "100%",
                    mt: 3,
                    gap: 2,
                  }}
                >
                  <RoomIcon sx={{ fontSize: "2rem" }} />
                  <Typography variant="h4">
                    {/* {location} */}Port City Ground
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={5}>
                <Typography variant="h4" mt={5}>
                  Ticket Prices
                </Typography>
                <RadioGroup value={selectedValue} onChange={handleChange}>
                  <Box sx={{ mt: 2 }}>
                    <EventRadio value="early_bird" label="Early Bird">
                      <Typography variant="h5"> LKR 2000.00</Typography>
                    </EventRadio>

                    <EventRadio value="vip" label="VIP Ticket">
                      <Typography variant="h5"> LKR 5000.00</Typography>
                    </EventRadio>
                  </Box>
                </RadioGroup>
              </Grid>
            </Grid>

            <Grid item xs={6} sx={{ mt: 5 }}>
              <Countdown />
            </Grid>

            <Box sx={{ mt: 5, width: "30%" }}>
              <Button fullWidth variant="contained">
                Buy Tickets
              </Button>
            </Box>
          </Grid>
        </Grid>
        <Box sx={{ p: "8rem", mt: -20 }}>
          <Typography variant="h2">Nadhya 2024</Typography>
          <Typography variant="subtitle1" mt={1}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Typography>

          <Grid container mt={5}>
            <Grid item xs={12} md={8}>
              <Typography variant="h2">Artist Lineup</Typography>
              <Stack direction="row" spacing={2} mt={2}>
                {ARTIST_LINEUP.map((artist) => (
                  <Avatar
                    key={artist.id}
                    alt={artist.name}
                    src={artist.image}
                    sx={{ width: 80, height: 80 }}
                  />
                ))}
              </Stack>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h2">Organized By</Typography>
              <Stack direction="row" spacing={2} mt={2}>
                {ORGANIZE.map((organize) => (
                  <Avatar
                    key={organize.id}
                    src={organize.image}
                    sx={{ width: 80, height: 80 }}
                  />
                ))}
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default BuyTickets;
