import { motion } from "framer-motion";
import { useState } from "react";

export const Modal = ({ selectedImg, setSelectedImg, docs }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleClick = (e) => {
    if (e.target.classList.contains("backdrop")) {
      setSelectedImg(null);
    }
  };

  const handleNextImage = () => {
    // افزایش شماره عکس فعلی تا به عکس بعدی برویم
    const newIndex = (currentImageIndex + 1) % docs.length;
    setCurrentImageIndex(newIndex);
  };

  return (
    <motion.div
      className="backdrop"
      onClick={handleClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.img
        src={selectedImg}
        alt="enlarged pics"
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
      />

      {/* اضافه کردن دکمه بعدی */}
      <button className="button-next" onClick={handleNextImage}

>بعدی</button>
    </motion.div>
  );
};
