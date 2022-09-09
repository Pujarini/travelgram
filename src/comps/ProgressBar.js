import { motion } from "framer-motion";
import React, { useEffect } from "react";
import useStorage from "../hooks/useStorage";

const ProgressBar = ({ file, setFile }) => {
  const { progress, url } = useStorage(file);

  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [file, setFile, url]);
  return (
    <motion.div
      className="progress"
      initial={{ width: 0 }}
      animate={{ width: `${progress}%` }}
    ></motion.div>
  );
};

export default ProgressBar;
