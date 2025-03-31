'use client'

import { useEffect, useRef } from 'react';
import QRCodeStyling from 'qr-code-styling';
import { Options } from 'qr-code-styling';

interface QRCanvasProps {
  options: Options;
  onQRCodeInit: (qrCode: QRCodeStyling) => void;
}

const QRCanvas: React.FC<QRCanvasProps> = ({ options, onQRCodeInit }) => {
  const ref = useRef<HTMLDivElement>(null);
  const qrCodeRef = useRef<QRCodeStyling | null>(null);

  // Initialize QR code once
  useEffect(() => {
    if (!qrCodeRef.current) {
      const newQRCode = new QRCodeStyling(options);
      qrCodeRef.current = newQRCode;
      onQRCodeInit(newQRCode);
    }
  }, [options, onQRCodeInit]);

  // Handle DOM updates
  useEffect(() => {
    if (ref.current && qrCodeRef.current) {
      ref.current.innerHTML = '';
      qrCodeRef.current.append(ref.current);
    }
  }, []);

  // Update QR code options
  useEffect(() => {
    if (qrCodeRef.current) {
      qrCodeRef.current.update(options);
    }
  }, [options]);

  return <div ref={ref} className="bg-white p-4 rounded-lg shadow-lg" />;
};

export default QRCanvas;