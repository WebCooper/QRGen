import { useEffect, useRef, useState } from "react";
import QRCodeStyling, {Options, DotType} from "qr-code-styling";

interface QRCanvasProps {
  options: Options;
}

const QRCanvas= ({ options }: QRCanvasProps) => {
  const [qrCode, setQrCode] = useState(new QRCodeStyling(options));
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      qrCode.append(ref.current);
    }
  }, [qrCode]);

  useEffect(() => {
    qrCode.update(options);
  }, [options]);

  return (
    <div className="w-[450px] h-[450px] bg-gray-200 rounded-2xl flex items-center justify-center">
      <div ref={ref} />
    </div>
  );
}

export default QRCanvas;