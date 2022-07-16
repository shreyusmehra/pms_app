import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const InstructionsModal = ({ open, handleClose }) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Instructions
          </Typography>
          <Typography id="modal-modal-description1" sx={{ mt: 2 }}>
            1. Click on the respective slot for menu options to open.
          </Typography>
          <Typography id="modal-modal-description2" sx={{ mt: 2 }}>
            2. Click on the Occupied slot to free up the slot.
          </Typography>
          <Typography id="modal-modal-description3" sx={{ mt: 2 }}>
            3. Charges for the slots are Re 1.0/- per minute.
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default InstructionsModal;
