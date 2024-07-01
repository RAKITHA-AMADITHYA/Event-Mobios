import CloseIcon from "@mui/icons-material/Close";
import { Box, Card, Grid, Modal } from "@mui/material";
import GuestImg from "../assets/images/forguest.png";
import Organizer from "../assets/images/fororganizer.png";
import { useNavigate } from "react-router-dom";

interface LoginModalProps {
  open: boolean;
  onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ open, onClose }) => {
  const navigate = useNavigate();
  const handleCloseLogin = () => {
    onClose();
  };
  const handleCardClick = (path: string) => {
    onClose();
    navigate(path);
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="login-modal-title"
      aria-describedby="login-modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 550,
          bgcolor: "#232323",
          border: "2px solid #8e8e8e",
          boxShadow: 24,
          p: 2,
          borderRadius: 1,
          color: "#FFF",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "end", alignItems: "end" }}>
          <CloseIcon onClick={handleCloseLogin} sx={{ cursor: "pointer" }} />
        </Box>
        <Grid container spacing={2} p={2}>
          <Grid item xs={6}>
            <Card sx={{
                overflow: "hidden",
                cursor: "pointer",
                "&:hover img": {
                  transform: "scale(1.1)",
                },
              }}  onClick = {
                () => handleCardClick('/login-guest')
              }>
              <img src={GuestImg}  style={{
                  transition: "transform 0.3s ease-in-out",
                }} width={'100%'} alt="Guest" />
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card sx={{
                overflow: "hidden",
                cursor: "pointer",
                "&:hover img": {
                  transform: "scale(1.1)",
                },
              }}>
              <img src={Organizer}  style={{
                  transition: "transform 0.3s ease-in-out",
                }} width={'100%'} alt="Organizer" />
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Modal>
  );
};

export default LoginModal;
