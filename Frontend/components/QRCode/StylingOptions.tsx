'use client'

import { useState } from "react";
import { Options, DotType } from "qr-code-styling";

interface StylingOptionsProps {
  setOptions: (options: Options | ((prev: Options) => Options)) => void;
}

const StylingOptions= ({ setOptions }: StylingOptionsProps) => {

  const [dotColor, setDotColor] = useState("#000000");
  const [bgColor, setBgColor] = useState("#FFFFFF");
  const [dotType, setDotType] = useState<DotType>("rounded");

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>, type: "dot" | "bg") => {
    const color = e.target.value;
    if (type === "dot") {
      setDotColor(color);
      setOptions((prev: Options) => ({
        ...prev,
        dotsOptions: { ...prev.dotsOptions, color },
      }));
    } else {
      setBgColor(color);
      setOptions((prev: Options) => ({
        ...prev,
        backgroundOptions: { color },
      }));
    }
  };
  
  const handleDotTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const type = e.target.value as DotType;
    setDotType(type);
    setOptions((prev: Options) => ({
      ...prev,
      dotsOptions: { ...prev.dotsOptions, type },
    }));
  };
  
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const imageURL = URL.createObjectURL(e.target.files[0]);
      setOptions((prev: Options) => ({
        ...prev,
        image: imageURL,
      }));
    }
  };
  

  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Style Your QR</h2>

      {/* Dot Color Picker */}
      <label className="block mb-2 text-sm font-medium">Dot Color:</label>
      <input
        type="color"
        value={dotColor}
        onChange={(e) => handleColorChange(e, "dot")}
        className="w-full mb-4"
      />

      {/* Background Color Picker */}
      <label className="block mb-2 text-sm font-medium">Background Color:</label>
      <input
        type="color"
        value={bgColor}
        onChange={(e) => handleColorChange(e, "bg")}
        className="w-full mb-4"
      />

      {/* Dot Type Dropdown */}
      <label className="block mb-2 text-sm font-medium">Dot Style:</label>
      <select
        value={dotType}
        onChange={handleDotTypeChange}
        className="w-full p-2 border rounded-lg mb-4"
      >
        <option value="square">Square</option>
        <option value="dots">Dots</option>
        <option value="rounded">Rounded</option>
        <option value="extra-rounded">Extra Rounded</option>
      </select>

      {/* Image Upload */}
      <label className="block mb-2 text-sm font-medium">Upload Logo:</label>
      <input type="file" accept="image/*" onChange={handleImageUpload} className="w-full" />
    </div>
  );
}


export default StylingOptions;