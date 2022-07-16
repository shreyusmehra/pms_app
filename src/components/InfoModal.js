import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useGlobalContext } from "../context";

const InfoModal = ({
  openModal,
  setOpenModal,
  title,
  setAnchorEl,
  setBook,
  id,
}) => {
  const {
    nameInput,
    setNameInput,
    phone,
    setPhone,
    allocatedSlots,
    setAllocatedSlots,
  } = useGlobalContext();

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
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& > :not(style)": { m: 1 },
  };
  const handleClose = () => {
    setOpenModal(false);
    setAnchorEl(null);
  };
  const handleSubmit = () => {
    let current = new Date();
    if (!nameInput || nameInput.length < 3) {
      return alert("name is required and length should greater than 2");
    }
    setAllocatedSlots([
      ...allocatedSlots,
      {
        id,
        title,
        name: nameInput,
        phone,
        booking: true,
        allocatedTime: current.getMinutes(),
      },
    ]);
    setOpenModal(false);
    setAnchorEl(null);
    setBook(true);
    setNameInput("");
    setPhone("");
  };

  return (
    <div>
      <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography>{title}</Typography>
          <TextField
            required
            helperText=" "
            id="name-input"
            label="Name"
            value={nameInput}
            onChange={(e) => setNameInput(e.target.value)}
          />
          <TextField
            helperText=" "
            id="phone-input"
            label="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <Button variant="outlined" onClick={handleSubmit}>
            Submit
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default InfoModal;
