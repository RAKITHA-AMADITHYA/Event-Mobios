import { useEffect, useState } from "react";
import { Box, Card, Typography } from "@mui/material";

const Countdown = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date("2024-07-04") - +new Date();
    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Days */}
        <Card
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            width: '5rem',
            height: '5rem',
            p: "1.3rem",
            borderRadius: "10px",
          }}
        >
          <Typography variant="h1">{timeLeft.days}</Typography>
          <Typography variant="subtitle2">Days</Typography>
        </Card>

        {/* Hours */}
        <Card
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            p: "1.3rem",
            borderRadius: "10px",
            width: '5rem',
            height: '5rem',
          }}
        >
          <Typography variant="h1">{timeLeft.hours}</Typography>
          <Typography variant="subtitle2">Hours</Typography>
        </Card>

        {/* Minutes */}
        <Card
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            p: "1.3rem",
            borderRadius: "10px",
            width: '5rem',
            height: '5rem',
          }}
        >
          <Typography variant="h1">{timeLeft.minutes}</Typography>
          <Typography variant="subtitle2">Mins</Typography>
        </Card>

        {/* Seconds */}
        <Card
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            p: '1.3rem',
            borderRadius: '10px',
            width: '5rem',
            height: '5rem',
          }}
        >
          <Typography variant='h1'>{timeLeft.seconds}</Typography>
          <Typography variant='subtitle2'>Sec</Typography>
        </Card>
      </Box>
    </>
  );
};

export default Countdown;
