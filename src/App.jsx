import { createContext, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import response from "./api";
import FirstPage from "./Pages/FirstPage";
import SecondPage from "./Pages/SecondPage";
import ThirdPage from "./Pages/ThirdPage";
import FourthPage from "./Pages/FourthPage";
import FifthPage from "./Pages/Fifthpage";
import SixthPage from "./Pages/SixthPage";
import SeventhPage from "./Pages/SeventhPage";
import EighthPage from "./Pages/EighthPage";
import NinthPage from "./Pages/NinthPage";
import "./Styles/index.css";
import { AnimatePresence, motion } from "framer-motion";
import TenthPage from "./Pages/Tenthpage";
const dataContext = createContext();

function App() {
  const [arr, setArr] = useState({});
  useEffect(() => {
    response()
      .then((data) => setArr({ ...data.data[0] }))
      .catch((err) => console.log(err));
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        // layout={{ duration: 0.3 }}
        // transition={{ duration: 1 }}
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 0.5 }}
        exit={{ opacity: 0, scale: 0.75 }}
        // whileTap={{ scale: 0.75 }}
      >
        <BrowserRouter>
          <dataContext.Provider value={arr}>
            <Routes>
              <Route path="/" element={<FirstPage />} />
              <Route path="/secondpage" element={<SecondPage />} />
              <Route path="/thirdpage" element={<ThirdPage />} />
              <Route path="/fourthpage" element={<FourthPage />} />
              <Route path="/fifthpage" element={<FifthPage />} />
              <Route path="/sixthpage" element={<SixthPage />} />
              <Route path="/seventhpage" element={<SeventhPage />} />
              <Route path="/eighthpage" element={<EighthPage />} />
              <Route path="/ninethpage" element={<NinthPage />} />
              <Route path="/tenthpage" element={<TenthPage />} />
            </Routes>
          </dataContext.Provider>
        </BrowserRouter>
      </motion.div>
    </AnimatePresence>
  );
}

export default App;
export { dataContext };
