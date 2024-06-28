import { Box, Button, Modal, TextField, Typography } from "@mui/material";

interface SignupModalProps {
  open: boolean;
  onClose: () => void;
}

const SignupModal: React.FC<SignupModalProps> = ({ open, onClose }) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="signup-modal-title"
      aria-describedby="signup-modal-description"
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
        <Typography id="signup-modal-title" variant="h6" component="h2">
          Signup
        </Typography>
        <Typography id="signup-modal-description" sx={{ mt: 2, mb: 2 }}>
          Please fill in the details to create an account.
        </Typography>
        <TextField
          fullWidth
          label="Name"
          variant="outlined"
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          label="Email"
          variant="outlined"
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          label="Password"
          type="password"
          variant="outlined"
          sx={{ mb: 2 }}
        />
        <Button variant="contained" color="primary" fullWidth onClick={onClose}>
          Sign Up
        </Button>
      </Box>
    </Modal>
  );
};

export default SignupModal;
