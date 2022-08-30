import React from "react";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { TiTick } from "react-icons/ti";
import { AnimatePresence, motion } from "framer-motion";

function Tick() {
  return (
    <TiTick
      style={{
        color: "green",
        backgroundColor: "white",
        borderRadius: "50%",
        height: "10px",
        width: "10px",
      }}
    />
  );
}

const SideArrow = () => {
  return (
    <AnimatePresence>
      <motion.div
        layout
        transition={{ duration: 1 }}
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.6 }}
        whileTap={{ scale: 0.5 }}
      >
        <BsArrowRightCircleFill
          style={{ color: "#fb923c", height: "50px", width: "37px" }}
        />
      </motion.div>
    </AnimatePresence>
  );
};

export { Tick, SideArrow };
