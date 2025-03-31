'use client'

import { useState } from "react";
import { Options, DotType } from "qr-code-styling";
import { HexAlphaColorPicker, HexColorInput } from "react-colorful";

interface StylingOptionsProps {
  setOptions: (options: Options | ((prev: Options) => Options)) => void;
}

const StylingOptions: React.FC<StylingOptionsProps> = ({ setOptions }) => {
  const [dotColor, setDotColor] = useState("#000000");
  const [bgColor, setBgColor] = useState("#FFFFFF");
  const [dotType, setDotType] = useState<DotType>("rounded");
  const [data, setData] = useState("https://example.com");

  const handleDataChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newData = e.target.value;
    setData(newData);
    setOptions((prev: Options) => ({
      ...prev,
      data: newData,
    }));
  };

  const handleDotColorChange = (color: string) => {
    setDotColor(color);
    setOptions((prev: Options) => ({
      ...prev,
      dotsOptions: { ...prev.dotsOptions, color },
    }));
  };

  const handleBgColorChange = (color: string) => {
    setBgColor(color);
    setOptions((prev: Options) => ({
      ...prev,
      backgroundOptions: { color },
    }));
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
    <div className="bg-white rounded-xl shadow-sm">
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-3">
          Style Your QR
        </h2>

        {/* QR Data Input */}
        <div className="mb-8">
          <label className="block mb-3 text-sm font-semibold text-gray-700">
            QR Content
          </label>
          <input
            type="text"
            value={data}
            onChange={handleDataChange}
            placeholder="Enter URL or text"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
          />
        </div>

        {/* Dot Color Picker */}
        <div className="mb-8">
          <label className="block mb-3 text-sm font-semibold text-gray-700">
            Dot Color
          </label>
          <div className="space-y-3">
            <HexAlphaColorPicker 
              color={dotColor} 
              onChange={handleDotColorChange}
              className="w-full max-w-[200px] mx-auto"
            />
            <div className="relative">
              <HexColorInput 
                color={dotColor} 
                onChange={handleDotColorChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                prefixed
              />
            </div>
          </div>
        </div>

        {/* Background Color Picker */}
        <div className="mb-6">
          <label className="block mb-3 text-sm font-semibold text-gray-700">
            Background Color
          </label>
          <div className="space-y-3">
            <HexAlphaColorPicker 
              color={bgColor} 
              onChange={handleBgColorChange}
              className="w-full max-w-[200px] mx-auto"
            />
            <div className="relative">
              <HexColorInput 
                color={bgColor} 
                onChange={handleBgColorChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                prefixed
              />
            </div>
          </div>
        </div>

        {/* Dot Type Dropdown */}
        <div className="mb-6">
          <label className="block mb-3 text-sm font-semibold text-gray-700">
            Dot Style
          </label>
          <select
            value={dotType}
            onChange={handleDotTypeChange}
            className="w-full px-4 py-2 border rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
          >
            <option value="square">Square</option>
            <option value="dots">Dots</option>
            <option value="rounded">Rounded</option>
            <option value="extra-rounded">Extra Rounded</option>
          </select>
        </div>

        {/* Image Upload */}
        <div className="mb-6">
          <label className="block mb-3 text-sm font-semibold text-gray-700">
            Upload Logo
          </label>
          <div className="relative">
            <input 
              type="file" 
              accept="image/*" 
              onChange={handleImageUpload} 
              className="w-full px-4 py-2 border rounded-lg text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 transition-all"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StylingOptions;