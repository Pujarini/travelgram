import React from "react";
import useFireStore from "../hooks/useFirestore";
import { motion } from "framer-motion";

const ImageGrid = ({ setSelectedImg }) => {
  const { docs } = useFireStore("images");
  console.log(docs);
  return (
    <div className="img-grid">
      {docs &&
        docs.length > 0 &&
        docs.map((img) => {
          return (
            <motion.div
              className="img-wrap"
              layout
              key={img.id}
              whileHover={{
                scale: 1.1,
                opacity: 1,
                transition: { duration: 0.5 },
              }}
              onClick={() => setSelectedImg(img.url)}
            >
              <motion.img
                src={img.url}
                alt="img"
                className="img-key"
                key={img.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              />
            </motion.div>
          );
        })}
    </div>
  );
};

export default ImageGrid;
