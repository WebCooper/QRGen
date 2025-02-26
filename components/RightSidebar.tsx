import React from "react";

import { Options} from "qr-code-styling"




const RightSideBar = ({
                         onOptionsChange,
                         currentOptions,
                     }: {
    onOptionsChange: (options: Options) => void;
    currentOptions: Options;
}) => {
    const handleChange = <K extends keyof Options>(field: K, value: Options[K]) => {
        const updatedOptions = { ...currentOptions, [field]: value };
        onOptionsChange(updatedOptions);
    };


    return (
        <div className="p-6 w-1/4 border-r border-gray-200 bg-gray-50 h-screen overflow-auto shadow-lg">
            <h2 className="text-lg font-semibold mb-6 text-gray-700">QR Code Styling Options</h2>

            {/* Input fields */}
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600 mb-1">Data:</label>
                <input
                    type="text"
                    value={currentOptions.data}
                    onChange={(e) => handleChange("data", e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
                    placeholder="Enter data to encode"
                />
            </div>
        </div>

    );
};

export default RightSideBar;
