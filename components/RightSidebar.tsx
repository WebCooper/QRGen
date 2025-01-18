import React from "react";

const LeftSidebar = ({
                         onOptionsChange,
                         currentOptions,
                     }: {
    onOptionsChange: (options: any) => void;
    currentOptions: any;
}) => {
    const handleChange = (field: string, value: any) => {
        const updatedOptions = { ...currentOptions, [field]: value };
        onOptionsChange(updatedOptions);
    };

    return (
        <div className="p-4 w-1/4 border-r border-gray-300 bg-gray-50 h-screen overflow-auto">
            <h2 className="text-lg font-bold mb-4">QR Code Styling Options</h2>
            {/* Data */}
            <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Data:</label>
                <input
                    type="text"
                    value={currentOptions.data}
                    onChange={(e) => handleChange("data", e.target.value)}
                    className="w-full p-2 border rounded"
                    placeholder="Enter data to encode"
                />
            </div>
            {/* Additional Inputs for styling options go here */}
            {/* Example: Background Color */}
            <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Background Color:</label>
                <input
                    type="color"
                    value={currentOptions.backgroundOptions.color}
                    onChange={(e) =>
                        handleChange("backgroundOptions", {
                            ...currentOptions.backgroundOptions,
                            color: e.target.value,
                        })
                    }
                    className="w-full p-2 border rounded"
                />
            </div>
        </div>
    );
};

export default LeftSidebar;
