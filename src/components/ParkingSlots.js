import { useGlobalContext } from "../context";
import ParkingSlot from "./ParkingSlot";
import { motion } from "framer-motion";
import { Button } from "@mui/material";

const ParkingSlots = () => {
  const { parkingSlots, AddParkingSlots, displayedSlots } = useGlobalContext();
  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  return (
    <div className="parking-slots-container">
      {parkingSlots.map((slot) => {
        const { id, title } = slot;
        return (
          <motion.article
            key={id}
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={{ ease: "easeIn", duration: 1, delay: 1 }}
          >
            <ParkingSlot id={id} title={title} />
          </motion.article>
        );
      })}
      {displayedSlots < 100 && (
        <motion.div
          className="add-slots-container"
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{ ease: "easeIn", duration: 1, delay: 2 }}
        >
          <Button variant="outlined" onClick={AddParkingSlots}>
            + Add 10 more Slots
          </Button>
        </motion.div>
      )}
    </div>
  );
};

export default ParkingSlots;
