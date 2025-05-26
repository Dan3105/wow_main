import { useEditor, Element } from "@craftjs/core";
import React from "react";
import { Button } from "./node/Button";
import { Container } from "./node/Container";
import { Text } from "./node/Text";

// Sidebar component with draggable items
export const ComponentsPanel: React.FC = () => {
  const { connectors } = useEditor();

  return (
    <div className="w-full bg-gray-100 p-4 border-r">
      <h3 className="font-bold mb-4 text-lg">Components</h3>

      <div className="space-y-3">
        {" "}
        {/* Text Component */}
        <div
          ref={(ref: HTMLDivElement | null) => {
            if (ref)
              connectors.create(ref, <Element is={Text} text="Drag me!" />);
          }}
          className="p-3 bg-white rounded shadow cursor-grab hover:shadow-md transition-shadow border"
        >
          <div className="flex items-center">
            <span className="text-2xl mr-2">📝</span>
            <span className="font-medium">Text</span>
          </div>
          <p className="text-sm text-gray-500 mt-1">Add text content</p>
        </div>
        {/* Button Component */}
        <div
          ref={(ref: HTMLDivElement | null) => {
            if (ref)
              connectors.create(ref, <Element is={Button} text="New Button" />);
          }}
          className="p-3 bg-white rounded shadow cursor-grab hover:shadow-md transition-shadow border"
        >
          <div className="flex items-center">
            <span className="text-2xl mr-2">🔘</span>
            <span className="font-medium">Button</span>
          </div>
          <p className="text-sm text-gray-500 mt-1">Interactive button</p>
        </div>
        {/* Container Component */}
        <div
          ref={(ref: HTMLDivElement | null) => {
            if (ref) connectors.create(ref, <Element is={Container} canvas />);
          }}
          className="p-3 bg-white rounded shadow cursor-grab hover:shadow-md transition-shadow border"
        >
          <div className="flex items-center">
            <span className="text-2xl mr-2">📦</span>
            <span className="font-medium">Container</span>
          </div>
          <p className="text-sm text-gray-500 mt-1">Layout container</p>
        </div>
      </div>

      <div className="mt-6 p-3 bg-blue-50 rounded">
        <h4 className="font-medium text-blue-800 mb-1">How to use:</h4>
        <ol className="text-sm text-blue-700 space-y-1">
          <li>1. Drag components from here</li>
          <li>2. Drop them on the canvas</li>
          <li>3. Click to select and edit</li>
        </ol>
      </div>
    </div>
  );
};
