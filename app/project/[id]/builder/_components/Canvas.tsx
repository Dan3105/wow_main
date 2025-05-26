import { Frame, Element } from "@craftjs/core";
import React from "react";
import { Container } from "./node/Container";
import { Text } from "./node/Text";

// Main Canvas Area
export const Canvas: React.FC = () => {
  return (
    <div className="flex-1 bg-white p-4">
      <div className="mb-4 border-b pb-2">
        <h2 className="text-xl font-bold">Canvas</h2>
        <p className="text-gray-600 text-sm">
          Drag components from the sidebar to build your layout
        </p>
      </div>

      <Frame>
        <Element is={Container} padding={40} backgroundColor="#ffffff" canvas>
          <Element is={Text} text="Welcome to the Web Builder!" fontSize={24} />
          <Element
            is={Text}
            text="Drag components from the left sidebar to get started."
            fontSize={16}
          />
        </Element>
      </Frame>
    </div>
  );
};
