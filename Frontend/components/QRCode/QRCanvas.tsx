"use client";

import { useEffect, useRef, useState } from "react";
import type QRCodeStylingType from "qr-code-styling";
import { Options } from "qr-code-styling";

interface QRCanvasProps {
  options: Options;
}

const QRCanvas: React.FC<QRCanvasProps> = ({ options }) => {
  const [qrCode, setQrCode] = useState<QRCodeStylingType | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  // Mount effect
  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  // Initialize QR code
  useEffect(() => {
    if (!mounted) return;

    const loadQRCode = async () => {
      const QRCodeStylingModule = (await import("qr-code-styling")).default;
      const qr = new QRCodeStylingModule(options);
      setQrCode(qr);

      // Store ref.current in a variable to avoid cleanup issues
      const currentRef = ref.current;
      if (currentRef) {
        qr.append(currentRef);
      }

      return () => {
        if (currentRef) {
          currentRef.innerHTML = "";
        }
      };
    };

    const cleanup = loadQRCode();
    return () => {
      cleanup.then(cleanupFn => cleanupFn());
    };
  }, [mounted, options]);

  // Update QR code when options change
  useEffect(() => {
    if (qrCode && mounted) {
      qrCode.update(options);
    }
  }, [qrCode, options, mounted]);

  return (
    <div className="w-[450px] h-[450px] bg-white rounded-2xl flex items-center justify-center">
      <div ref={ref} />
    </div>
  );
};

export default QRCanvas;