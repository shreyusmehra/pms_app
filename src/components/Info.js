import { useState } from "react";
import { motion } from "framer-motion";
import InstructionsModal from "./InstructionsModal";

const Info = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <motion.div
      animate={{ x: [-1400, 0], opacity: 1 }}
      transition={{
        delay: 2,
        x: { type: "spring", stiffness: 100 },
        default: { duration: 2 },
      }}
      className="info-container"
    >
      <div className="booked-container">
        <article className="booked-box"></article>
        <h4>Occupied</h4>
      </div>
      <div className="available-container">
        <article className="available-box"></article>
        <h4>Available</h4>
      </div>
      <div className="instructions-container" onClick={handleOpen}>
        <h4>Instructions</h4>
      </div>
      <InstructionsModal open={open} handleClose={handleClose} />
    </motion.div>
  );
};

export default Info;
