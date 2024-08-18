'use client'
import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";

export default function App() {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => setIsOn(!isOn);

  return (
    <div 
      className={`w-20 h-fit bg-white/40 flex ${isOn ? 'justify-end' : 'justify-start'} rounded-full p-2.5 cursor-pointer`}
      onClick={toggleSwitch}
    >
      <motion.div className="w-8 h-8 bg-white rounded-full" layout transition={spring} />
    </div>
  );
}

const spring = {
  type: "spring",
  stiffness: 1000,
  damping: 30
};
