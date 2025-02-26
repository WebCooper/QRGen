"use client";

import React, { useEffect, useRef } from "react";
import QRCodeStyling, { Options } from "qr-code-styling";

const ClientQR = ({ options }: { options: Options }) => {
    const ref = useRef<HTMLDivElement>(null);
    const qrCode = useRef<QRCodeStyling | null>(null);

    useEffect(() => {
        if (!qrCode.current) {
            qrCode.current = new QRCodeStyling(options);
        } else {
            qrCode.current.update(options);
        }
    }, [options]);

    useEffect(() => {
        if (ref.current && qrCode.current) {
            ref.current.innerHTML = "";
            qrCode.current.append(ref.current);
        }
    }, [options]);

    return (
        <div className="flex justify-center items-center bg-gray-100 h-screen p-6">
            <div className="relative bg-white shadow-lg rounded-xl p-6 flex justify-center items-center">
                <div ref={ref} className="w-[300px] h-[300px]" />
            </div>
        </div>
    );
};

export default ClientQR;
