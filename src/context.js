import { createContext, useContext, useEffect, useState } from "react";
import ParkingDetails from "./data";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [displayedSlots, setDisplayedSlots] = useState(50);
  const [parkingSlots, setParkingSlots] = useState(
    ParkingDetails.slice(0, displayedSlots)
  );
  const [allocatedSlots, setAllocatedSlots] = useState([]);
  const [nameInput, setNameInput] = useState("");
  const [phone, setPhone] = useState("");

  const AddParkingSlots = () => {
    setDisplayedSlots(displayedSlots + 10);
  };

  useEffect(() => {
    if (displayedSlots === 100) {
      alert("You cannot add more than 100 slots");
    }
    setParkingSlots(ParkingDetails.slice(0, displayedSlots));
  }, [displayedSlots]);

  return (
    <AppContext.Provider
      value={{
        parkingSlots,
        setParkingSlots,
        allocatedSlots,
        setAllocatedSlots,
        nameInput,
        setNameInput,
        phone,
        setPhone,
        AddParkingSlots,
        displayedSlots,
        setDisplayedSlots,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// custom hook
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
