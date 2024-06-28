import { Box, Modal, Typography } from "@mui/material";

interface LoginModalProps {
  open: boolean;
  onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ open, onClose }) => {
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
          width: 400,
          bgcolor: "background.paper",
          border: "2px solid #000",
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography id="login-modal-title" variant="h6" component="h2">
          Login
        </Typography>
        <Typography id="login-modal-description" sx={{ mt: 2 }}>
          This is a dummy login modal.
        </Typography>
      </Box>
    </Modal>
  );
};

export default LoginModal;
