import { Box, Button, Fab, Grid, Typography, useTheme } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Icon3 from "../../assets/images/apple.png";
import DeviderImg from "../../assets/images/devider.png";
import Icon1 from "../../assets/images/fb.png";
import Icon2 from "../../assets/images/google.png";
import Img from "../../assets/images/guestlogin.png";
import EventTextField from "../../components/Event Text Feild/EventTextfeild";
import EventCheckbox from "../../components/Eveny Check box/EventCheckBox";




const GuestLogin = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = (
 event: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => {
    setChecked(checked);
    console.log(event);
  };

  const handleCardClick = (path: string) => {
    navigate(path);
  };
  
  return (
    <>
      <Grid container sx={{ bgcolor: "#000", color: "#FFF" }}>
        <Grid
          item
          xs={12}
          md={7}
          sx={{
            backgroundImage: `url(${Img})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
        
            backgroundAttachment: "cover",
            position: "relative",
          }}
        ></Grid>
        <Grid
          item
          xs={12}
          md={5}
          p={"6rem"}
          sx={{
            display: "flex",
            justifyContent: "start",
            flexDirection: "column",
            textAlign: "center",
          }}
        >
          <Typography variant="h2">LOGO</Typography>
          <Typography variant="h1">Welcome Back</Typography>
          <Box mt={2} sx={{ spacing: 10 }}>
            <EventTextField
              label="UserName"
              placeholder="Enter your username"
              type="text"
            />
            <EventTextField
              label=" Password"
              placeholder="Enter Your password"
              type="password"
            />
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <EventCheckbox
                value="rember me"
                label="Remember Me"
                checked={checked}
                onChange={handleCheckboxChange}
              />
              <Typography
                variant="h6"
                fontWeight={400}
                sx={{
                  "&:hover": { color: theme.palette.primary.main },
                  cursor: "pointer",
                }}
              >
                Forget password
              </Typography>
            </Box>
            <Box
              mt={2}
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <Grid container spacing={2} alignItems="center">
                <Grid item xs={12}>
                  <Button variant="contained" fullWidth>
                    Login
                  </Button>
                </Grid>
                <Grid item xs={12}>
                  <Typography
                    variant="h6"
                    fontWeight={400}
                    sx={{
                      "&:hover": { color: theme.palette.primary.main },
                      cursor: "pointer",
                    }}
                    onClick = {
                        () => handleCardClick('/signup-guest')
                      }
                  >
                    Don’t have an account? Sign Up
                  </Typography>
                  <img
                    src={DeviderImg}
                    style={{ width: "100%", marginTop: 5 }}
                    alt=""
                  />
                </Grid>
      <Grid container spacing={2} justifyContent="center" alignItems={'center'} mt={1}>
        <Grid item ml={5}>
          <Fab color="primary" aria-label="icon1">
            <img src={Icon1} alt="icon1"  style={{width:'100%',height:'100%'} }/>
          </Fab>
        </Grid>
        <Grid item>
          <Fab color="primary" aria-label="icon2">
            <img src={Icon2} alt="icon2" style={{width:'100%',height:'100%'} } />
          </Fab>
        </Grid>
        <Grid item>
          <Fab color="primary" aria-label="icon3">
            <img src={Icon3} alt="icon3" style={{width:'100%',height:'100%'} } />
          </Fab>
        </Grid>
      </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default GuestLogin;
