"use client";
import React, { useState } from "react";
import LeftSidebar from "@/components/LeftSidebar";
import ClientQR from "@/components/ClientQR";
import { Options } from "qr-code-styling";
import Header from "@/components/Header";
import RightSidebar from "@/components/RightSidebar";

export default function Page() {
    const [qrOptions, setQrOptions] = useState<Options>({
        width: 300,
        height: 300,
        type: "svg",
        data: "Enter your link or text here",
        image: "https://avatar.iran.liara.run/public/12",
        margin: 10,
        qrOptions: {
            typeNumber: 0,
            mode: "Byte",
            errorCorrectionLevel: "Q",
        },
        imageOptions: {
            hideBackgroundDots: true,
            imageSize: 0.4,
            margin: 20,
            crossOrigin: "anonymous",
            saveAsBlob: true,
        },
        dotsOptions: {
            color: "#222222",
        },
        backgroundOptions: {
            color: "#b2ebe0",
        },
    });

    return (
        <div>
            <Header/>
            <div className="flex">
                {/* Sidebar for QR Code Options */}
                <LeftSidebar
                    onOptionsChange={(newOptions) => setQrOptions(newOptions)}
                    currentOptions={qrOptions}
                />
                {/* QR Code Renderer */}
                <div className="flex-grow">
                    <ClientQR options={qrOptions}/>
                </div>
                <RightSidebar
                    onOptionsChange={(newOptions) => setQrOptions(newOptions)}
                    currentOptions={qrOptions}
                />
            </div>
        </div>

    );
}
