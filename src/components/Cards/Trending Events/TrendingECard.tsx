import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import RoomIcon from '@mui/icons-material/Room';
import ScheduleIcon from "@mui/icons-material/Schedule";
import { Box, Card, Typography, useTheme } from "@mui/material";

interface CardProps {
  image: string;
  title: string;
  date: string;
  time: string;
  location: string;
}

const TrendingECard = ({ image, title, date, time, location }: CardProps) => {
  const theme = useTheme();

  return (
    <Card sx={{
      m: 1,
      transition: "transform 0.3s ease-in-out",
      "&:hover": {
        transform: "scale(1.05)"
      }
    }}>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <img src={image} width={"100%"} alt="" />
      </Box>
      <Box sx={{ p: 2 }}>
        <Typography variant="h5">
          {title}
        </Typography>
        <Box sx={{ display: "flex", flex: 1, width: "100%", mt: 1, gap: 2 }}>
          <CalendarTodayIcon />
          <Typography variant="h5" fontWeight={600}>
            {date}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", flex: 1, width: "100%", mt: 1, gap: 2 }}>
          <ScheduleIcon />
          <Typography variant="h5" fontWeight={600}>
            {time}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", flex: 1, width: "100%", mt: 1, gap: 2 }}>
          <RoomIcon />
          <Typography variant="h5" fontWeight={600}>
            {location}
          </Typography>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', bgcolor: theme.palette.primary.main, color: '#FFF', p: 1 }}>
        <Typography variant="h4">
          Book Now
        </Typography>
      </Box>
    </Card>
  );
};

export default TrendingECard;
