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
      <div className="w-1/4 h-full overflow-hidden bg-[#e4e2dd] border-r">
        <div className="h-full overflow-y-auto px-4">
          <StylingOptions setOptions={setOptions} />
        </div>
      </div>

      {/* Center Area - QR Canvas */}
      <div 
        className="w-1/2 h-full flex items-center justify-center bg-cover bg-center bg-no-repeat" 
        style={{ backgroundImage: 'url("/bg-image2.jpg")' }}
      >
        <QRCanvas options={options} />
      </div>

      {/* Right Sidebar - Export Options */}
      <div className="w-1/4 h-full overflow-hidden bg-[#e4e2dd] border-l">
        <div className="h-full overflow-y-auto p-4">
          <ExportOptions />
        </div>
      </div>
    </div>
  );
}
