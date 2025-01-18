"use client";

import React, { useEffect, useRef } from "react";
import QRCodeStyling, { Options } from "qr-code-styling";

const ClientQR = ({ options }: { options: Options }) => {
    const ref = useRef<HTMLDivElement>(null);
    const qrCode = useRef<QRCodeStyling | null>(null);


    // Initialize QR Code Styling
    useEffect(() => {
        qrCode.current = new QRCodeStyling(options);
    });

    // Update QR Code when options change
    useEffect(() => {
        if (qrCode.current) {
            qrCode.current.update(options);
        }
    }, [options]);

    // Append QR Code to the DOM
    useEffect(() => {
        if (ref.current) {
            ref.current.innerHTML = ""; // Clear previous QR code
            qrCode.current?.append(ref.current);
        }
    }, [ref, options]);

    return (
        <div className="flex justify-center items-center bg-gray-100 bg-[length:20px_20px] bg-gradient-to-r from-gray-200 to-transparent h-screen p-5">
            <div className="relative bg-white shadow-lg rounded-xl p-6 flex justify-center items-center">
                <div ref={ref} className="w-[300px] h-[300px]" />
            </div>
        </div>
    );
};

export default ClientQR;
