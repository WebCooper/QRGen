"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  const [url, setUrl] = useState("");

  const handleGenerateQR = () => {
    if (!url.trim()) return;
    console.log("Generate QR for:", url);
    // Add logic to send URL to backend
  };

  return (
    <div className="flex items-center justify-center h-screen bg-[#e4e2dd] px-4">
      <div className="text-center mt-[-2vh] md:mt-[-5vh] w-full max-w-lg">
        {/* Centered Image (Responsive) */}
        <div className="flex justify-center ">
          <Image
            src="/QR-Gen.png"
            alt="QR Code"
            width={400}
            height={400}
            className="md:w-96 md:h-96"
          />
        </div>

        {/* Animated Heading (Responsive) */}
        <motion.h1
          className="text-3xl md:text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          How fast can you create a QR code?
        </motion.h1>

        {/* Input Field & Button (Responsive) */}
        <div className="flex flex-col md:flex-row gap-2 max-w-md mx-auto">
          <input
            type="text"
            placeholder="Type your URL"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none"
          />
          <button
            onClick={handleGenerateQR}
            className="px-5 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
          >
            Create My QR
          </button>
        </div>
      </div>
    </div>
  );
}
