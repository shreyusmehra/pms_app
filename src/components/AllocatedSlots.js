import { useGlobalContext } from "../context";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";

const AllocatedSlots = () => {
  const { allocatedSlots } = useGlobalContext();
  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };
  return (
    <div className="allocated-slots-container">
      <motion.div
        animate={{ x: [-1400, 0], opacity: 1 }}
        transition={{
          delay: 2,
          x: { type: "spring", stiffness: 100 },
          default: { duration: 2 },
        }}
        className="heading-container"
      >
        <motion.h2
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{ ease: "easeIn", duration: 1, delay: 3 }}
        >
          Allocated Slots Details
        </motion.h2>
      </motion.div>
      <div className="allocated-slots">
        {allocatedSlots?.map((slot) => {
          const { id, title, name, phone } = slot;
          return (
            <Card sx={{ minWidth: 275, margin: `20px` }} key={id}>
              <CardContent>
                <Typography variant="h5" component="div">
                  {title}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  Name:
                  {name}
                </Typography>
                {phone && (
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Phone:
                    {phone}
                  </Typography>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default AllocatedSlots;
