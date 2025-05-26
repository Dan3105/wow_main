import { useNode } from "@craftjs/core";
import React from "react";
import { CraftComponent } from "../../type";

export const Container: CraftComponent<{
  children?: React.ReactNode;
  padding?: number;
  backgroundColor?: string;
}> = ({ children, padding = 20, backgroundColor = "#f8f9fa" }) => {
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
      className={`min-h-[100px] cursor-move transition-all ${
        selected ? "ring-2 ring-blue-500" : ""
      }`}
      style={{
        padding: `${padding}px`,
        backgroundColor,
        border: selected ? "2px solid #3b82f6" : "2px dashed #ccc",
      }}
    >
      {children}
    </div>
  );
};
Container.craft = {
  displayName: "Container",
  props: {
    padding: 20,
    backgroundColor: "#f8f9fa",
  },
  related: {},
  rules: {
    canDrag: () => true,
    canDrop: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
};
