import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Info from "./Info";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.div
      animate={{ y: [-100, 0] }}
      transition={{ ease: "easeIn", duration: 2 }}
      className="header-container"
    >
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
              Parking Management System
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <Info />
    </motion.div>
  );
};

export default Header;
