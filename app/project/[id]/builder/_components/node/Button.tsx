import { useNode } from "@craftjs/core";
import React from "react";
import { CraftComponent } from "../../type";

export const Button: CraftComponent<{
  text?: string;
  backgroundColor?: string;
  textColor?: string;
}> = ({
  text = "Click Me",
  backgroundColor = "#3b82f6",
  textColor = "#ffffff",
}) => {
  const {
    connectors: { connect, drag },
    selected,
  } = useNode((state) => ({
    selected: state.events.selected,
  }));
  return (
    <button
      ref={(ref: HTMLButtonElement | null) => {
        if (ref) connect(drag(ref));
      }}
      className={`px-4 py-2 rounded cursor-move transition-all ${
        selected ? "ring-2 ring-blue-500" : ""
      }`}
      style={{
        backgroundColor,
        color: textColor,
        border: selected ? "2px solid #3b82f6" : "none",
      }}
    >
      {text}
    </button>
  );
};
Button.craft = {
  displayName: "Button",
  props: {
    text: "Click Me",
    backgroundColor: "#3b82f6",
    textColor: "#ffffff",
  },
  related: {},
  rules: {
    canDrag: () => true,
    canDrop: () => true,
    canMoveIn: () => false,
    canMoveOut: () => true,
  },
};
