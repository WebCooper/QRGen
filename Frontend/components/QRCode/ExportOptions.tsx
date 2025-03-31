'use client'

import QRCodeStyling, { FileExtension } from "qr-code-styling";
import { useState } from "react";

interface ExportOptionsProps {
  qrCode: QRCodeStyling | null;
}

const ExportOptions: React.FC<ExportOptionsProps> = ({ qrCode }) => {
  const [size, setSize] = useState<number>(1000);
  const [downloading, setDownloading] = useState<boolean>(false);
  const [fileName, setFileName] = useState<string>('my-qr-code');
  const [fileExt, setFileExt] = useState<FileExtension>("svg");

  const handleDownload = async () => {
    if (!qrCode) return;
    
    setDownloading(true);
    try {
      await qrCode.download({
        extension: fileExt,
        name: `${fileName}`,
      });
    } catch (error) {
      console.error('Error downloading QR code:', error);
    } finally {
      setDownloading(false);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm">
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-3">
          Export QR Code
        </h2>

        {/* File Name Input */}
        <div className="mb-6">
          <label className="block mb-3 text-sm font-semibold text-gray-700">
            File Name
          </label>
          <input
            type="text"
            value={fileName}
            onChange={(e) => setFileName(e.target.value)}
            placeholder="Enter file name"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
          />
        </div>

        {/* Size Input */}
        <div className="mb-6">
          <label className="block mb-3 text-sm font-semibold text-gray-700">
            Size (px)
          </label>
          <input
            type="number"
            value={size}
            onChange={(e) => setSize(Number(e.target.value))}
            min="100"
            max="2000"
            step="100"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
          />
        </div>

        {/* File Format Selection */}
        <div className="mb-6">
          <label className="block mb-3 text-sm font-semibold text-gray-700">
            File Format
          </label>
          <select
            value={fileExt}
            onChange={(e) => setFileExt(e.target.value as FileExtension)}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
          >
            <option value="svg">SVG</option>
            <option value="png">PNG</option>
            <option value="jpeg">JPEG</option>
            <option value="webp">WEBP</option>
          </select>
        </div>

        {/* Download Button */}
        <div className="flex justify-center">
          <button
            onClick={handleDownload}
            disabled={!qrCode || downloading}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed w-full"
          >
            {downloading ? 'Downloading...' : `Download ${fileExt.toUpperCase()}`}
          </button>
        </div>

        {downloading && (
          <p className="mt-4 text-sm text-gray-600 text-center">
            Preparing download...
          </p>
        )}
      </div>
    </div>
  );
};

export default ExportOptions;