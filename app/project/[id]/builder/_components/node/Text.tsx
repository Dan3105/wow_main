import { useNode } from "@craftjs/core";
import React from "react";
import { CraftComponent } from "../../type";

// Basic draggable components
export const Text: CraftComponent<{
  text?: string;
  fontSize?: number;
  color?: string;
}> = ({ text = "Sample Text", fontSize = 16, color = "#000000" }) => {
  const {
    connectors: { connect, drag },
    selected,
  } = useNode((state) => ({
    selected: state.events.selected,
  }));
  return (
    <div
      ref={(ref: HTMLDivElement | null) => {
        if (ref) connect(drag(ref));
      }}
      className={`p-2 cursor-move transition-all ${
        selected ? "ring-2 ring-blue-500" : ""
      }`}
      style={{
        fontSize: `${fontSize}px`,
        color,
        border: selected ? "2px solid #3b82f6" : "2px solid transparent",
      }}
    >
      {text}
    </div>
  );
};

Text.craft = {
  displayName: "Text",
  props: {
    text: "Sample Text",
    fontSize: 16,
    color: "#000000",
  },
  related: {},
  rules: {
    canDrag: () => true,
    canDrop: () => true,
    canMoveIn: () => false,
    canMoveOut: () => true,
  },
};
