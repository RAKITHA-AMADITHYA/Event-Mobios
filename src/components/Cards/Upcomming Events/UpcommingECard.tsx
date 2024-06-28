import { Box, Divider, Grid, Typography, Button } from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import ScheduleIcon from "@mui/icons-material/Schedule";
import RoomIcon from '@mui/icons-material/Room';

interface UpcommingECardProps {
  image: string;
  title: string;
  date: string;
  time: string;
  location: string;
}

const UpcommingECard: React.FC<UpcommingECardProps> = ({ image, title, date, time, location }) => {
  return (
    <Box sx={{ mt: 2 }}>
      <Divider />

      <Grid container sx={{ mt: 2 }}>
        <Grid item xs={4}>
          <img src={image} alt={title} />
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h4">
            {title}
          </Typography>
          <Box sx={{ display: "flex", flex: 1, width: "100%", mt: 1, gap: 2 }}>
            <CalendarTodayIcon />
            <Typography variant="h6" fontWeight={300}>
              {date}
            </Typography>
          </Box>
        
          <Box sx={{ display: "flex", flex: 1, width: "100%", mt: 1, gap: 2 }}>
            <ScheduleIcon />
            <Typography variant="h6" fontWeight={300}>
              {time}
            </Typography>
          </Box>
         
          <Box sx={{ display: "flex", flex: 1, width: "100%", mt: 1, gap: 2 }}>
            <RoomIcon />
            <Typography variant="h6" fontWeight={300}>
              {location}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={2} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 2 }}>
          <Button variant="contained">Buy Ticket</Button>
          <Button variant="outlined">More Info</Button>
        </Grid>
      </Grid>
      {/* <Divider sx={{ mt: 2 }} /> */}
    </Box>
  );
};

export default UpcommingECard;
