'use client'

import { useState, useCallback } from "react";
import QRCodeStyling from "qr-code-styling";
import { Options } from "qr-code-styling";
import QRCanvas from "./QRCanvas";
import StylingOptions from "./StylingOptions";
import ExportOptions from "./ExportOptions";

interface QRGeneratorProps {
  initialData: string;
}

export default function QRGenerator({ initialData }: QRGeneratorProps) {
  const [options, setOptions] = useState<Options>({
    width: 400,
    height: 400,
    data: initialData || "https://example.com", // Use the passed data
    margin: 10,
    dotsOptions: { color: "#000000", type: "rounded" },
    backgroundOptions: { color: "#FFFFFF" },
    image: "",
    type: "svg"
  });
  const [qrCode, setQrCode] = useState<QRCodeStyling | null>(null);

  const handleQRCodeInit = useCallback((initializedQRCode: QRCodeStyling) => {
    setQrCode(initializedQRCode);
  }, []); // Empty dependency array since it doesn't depend on any values

  return (
    <div className="w-full h-full flex">
      <div className="w-1/4 h-full overflow-hidden bg-[#e4e2dd] border-r">
        <div className="h-full overflow-y-auto px-4">
          <StylingOptions 
            setOptions={setOptions} 
            initialData={initialData}
          />
        </div>
      </div>

      <div 
        className="w-1/2 h-full flex items-center justify-center bg-cover bg-center bg-no-repeat" 
        style={{ backgroundImage: 'url("/bg-image2.jpg")' }}
      >
        <QRCanvas 
          options={options} 
          onQRCodeInit={handleQRCodeInit}
        />
      </div>

      <div className="w-1/4 h-full overflow-hidden bg-[#e4e2dd] border-l">
        <div className="h-full overflow-y-auto px-4">
          <ExportOptions qrCode={qrCode} />
        </div>
      </div>
    </div>
  );
}
