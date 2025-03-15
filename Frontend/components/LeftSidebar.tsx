import React from "react";
import { Options, DotsOptions } from "@/types/options";

const LeftSidebar = ({
                         onOptionsChange,
                         currentOptions,
                     }: {
    onOptionsChange: (options: Options) => void;
    currentOptions: Options;
}) => {
    const handleChange = <K extends keyof Options>(
        field: K,
        value: Options[K]
    ) => {
        const updatedOptions = { ...currentOptions, [field]: value };
        onOptionsChange(updatedOptions);
    };

    const handleNestedChange = <
        P extends keyof Options,
        K extends keyof NonNullable<Options[P]>
    >(
        parentField: P,
        nestedField: K,
        value: NonNullable<Options[P]>[K]
    ) => {
        const updatedParent = {
            ...currentOptions[parentField],
            [nestedField]: value,
        };
        handleChange(parentField, updatedParent as Options[P]);
    };

    return (
        <div className="p-4 w-1/4 border-r border-gray-300 bg-gray-50 h-screen overflow-auto">
            <h2 className="text-lg font-bold mb-4">QR Code Styling Optionss</h2>
            {/* Image Options */}
            <div className="mb-6">
                <h3 className="text-md font-bold mb-2">Image Options</h3>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">
                        Hide Background Dots:
                    </label>
                    <input
                        type="checkbox"
                        checked={currentOptions.imageOptions?.hideBackgroundDots ?? true}
                        onChange={(e) =>
                            handleNestedChange(
                                "imageOptions",
                                "hideBackgroundDots",
                                e.target.checked
                            )
                        }
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Image Size:</label>
                    <input
                        type="range"
                        min={0.1}
                        max={0.5}
                        step={0.01}
                        value={currentOptions.imageOptions?.imageSize ?? 0.4}
                        onChange={(e) =>
                            handleNestedChange(
                                "imageOptions",
                                "imageSize",
                                parseFloat(e.target.value)
                            )
                        }
                        className="w-full"
                    />
                    <span className="text-sm">
                        Size: {currentOptions.imageOptions?.imageSize ?? 0.4}
                    </span>
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Image Margin (px):</label>
                    <input
                        type="number"
                        value={currentOptions.imageOptions?.margin ?? 0}
                        onChange={(e) =>
                            handleNestedChange(
                                "imageOptions",
                                "margin",
                                parseInt(e.target.value, 10)
                            )
                        }
                        className="w-full p-2 border rounded"
                        placeholder="Enter margin in px"
                        min={0}
                    />
                </div>
            </div>
            {/* Dots Options */}
            <div className="mb-6">
                <h3 className="text-md font-bold mb-2">Dots Options</h3>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Dots Color:</label>
                    <input
                        type="color"
                        value={currentOptions.dotsOptions?.color ?? "#000000"}
                        onChange={(e) =>
                            handleNestedChange("dotsOptions", "color", e.target.value)
                        }
                        className="w-full p-2 border rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Dots Style:</label>
                    <select
                        value={currentOptions.dotsOptions?.type ?? "square"}
                        onChange={(e) =>
                            handleNestedChange("dotsOptions", "type", e.target.value as DotsOptions["type"])
                        }
                        className="w-full p-2 border rounded"
                    >
                        <option value="square">Square</option>
                        <option value="rounded">Rounded</option>
                        <option value="dots">Dots</option>
                        <option value="classy">Classy</option>
                        <option value="classy-rounded">Classy-Rounded</option>
                        <option value="extra-rounded">Extra-Rounded</option>
                    </select>
                </div>
            </div>
            {/* Background Options */}
            <div>
                <h3 className="text-md font-bold mb-2">Background Options</h3>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Background Color:</label>
                    <input
                        type="color"
                        value={currentOptions.backgroundOptions?.color ?? "#ffffff"}
                        onChange={(e) =>
                            handleNestedChange("backgroundOptions", "color", e.target.value)
                        }
                        className="w-full p-2 border rounded"
                    />
                </div>
            </div>
        </div>
    );
};

export default LeftSidebar;
