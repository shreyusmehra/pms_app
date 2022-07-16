import { useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useGlobalContext } from "../context";
import InfoModal from "./InfoModal";

const ParkingSlot = ({ id, title }) => {
  const { allocatedSlots, setAllocatedSlots } = useGlobalContext();
  const [book, setBook] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  const handleAllocate = () => {
    let current = new Date();
    setAllocatedSlots([
      ...allocatedSlots,
      {
        id,
        title,
        name: "random allocated",
        phone: "",
        booking: true,
        allocatedTime: current.getMinutes(),
      },
    ]);
    setAnchorEl(null);
    setBook(true);
  };

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleSelect = () => {
    setOpenModal(true);
  };
  const handleFreeUp = () => {
    const slot = allocatedSlots.find((item) => item.id === id);
    const { allocatedTime } = slot;
    let current = new Date();
    const charge = (current.getMinutes() - allocatedTime) * 1.0;
    const filterdSlots = allocatedSlots?.filter((slot) => slot.id !== id);
    setAllocatedSlots(filterdSlots);
    setAnchorEl(null);
    setBook(false);
    alert(`Your Total Parking Charge for the slot ${id} is Rs.${charge}/-`);
  };

  return (
    <div>
      <div
        className={book ? "parking-slots-clicked" : "parking-slots"}
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <h3>{title}</h3>
      </div>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {openModal && (
          <InfoModal
            openModal={openModal}
            setOpenModal={setOpenModal}
            title={title}
            setAnchorEl={setAnchorEl}
            setBook={setBook}
            id={id}
          />
        )}
        {!book && (
          <div>
            <MenuItem onClick={handleSelect}>
              Allocate to specific person
            </MenuItem>
            <MenuItem onClick={() => handleAllocate(id)}>
              Allocate random
            </MenuItem>
          </div>
        )}
        {/* Add modal for input*/}
        {book && <MenuItem onClick={handleFreeUp}>Free up space</MenuItem>}
      </Menu>
    </div>
  );
};

export default ParkingSlot;
