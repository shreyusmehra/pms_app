import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
