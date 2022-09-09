import { motion } from "framer-motion";
import React from "react";

const Modal = ({ selectedImg, setSelectedImg }) => {
  return (
    <motion.div
      className="backdrop"
      onClick={() => setSelectedImg(null)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <p>Click anywhere outside image to close</p>
      <img src={selectedImg} className="xl-pic" alt="modal-img" />
    </motion.div>
  );
};

export default Modal;
