'use client'

import { useState } from "react";
import QRCanvas from "./QRCanvas";
import StylingOptions from "./StylingOptions";
import ExportOptions from "./ExportOptions";
import { Options } from "qr-code-styling";

export default function QRGenerator() {
  const [options, setOptions] = useState<Options>({
    width: 400,
    height: 400,
    data: "https://example.com",
    margin: 10,
    dotsOptions: { color: "#000000", type: "rounded" },
    backgroundOptions: { color: "#FFFFFF" },
    image: "",
  });

  return (
    <div className="w-full h-full flex">
      {/* Left Sidebar - Styling Options */}
      <div className="w-1/4 p-4 bg-gray-100 border-r">
        <StylingOptions setOptions={setOptions} />
      </div>

      {/* Center Area - QR Canvas */}
      <div className="w-1/2 flex items-center justify-center bg-white">
        <QRCanvas options={options} />
      </div>

      {/* Right Sidebar - Export Options */}
      <div className="w-1/4 p-4 bg-gray-100 border-l">
        <ExportOptions />
      </div>
    </div>
  );
}
