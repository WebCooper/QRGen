import React, { useCallback, useRef, useState } from "react";
import { HexColorInput, HexAlphaColorPicker } from "react-colorful";
import useClickOutside from "./useClickOutside";

interface PopoverPickerProps {
  color: string;
  onChange: (color: string) => void;
}

export const PopoverPicker: React.FC<PopoverPickerProps> = ({ color, onChange }) => {
  const popover = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  const close = useCallback(() => setIsOpen(false), []);
  useClickOutside(popover, close);

  return (
    <div className="relative">
      <div
        className="w-10 h-10 rounded cursor-pointer border"
        style={{ backgroundColor: color }}
        onClick={() => setIsOpen(true)}
      />

      {isOpen && (
        <div 
          className="absolute z-10 mt-2 bg-white rounded-lg shadow-lg p-2 flex flex-col gap-2"
          ref={popover}
        >
          <HexAlphaColorPicker color={color} onChange={onChange} />
          <HexColorInput color={color} onChange={onChange} />
        </div>
      )}
    </div>
  );
};