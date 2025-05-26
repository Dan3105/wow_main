import { useEditor } from "@craftjs/core";
import React from "react";

// Properties panel for editing selected components
export const PropertiesPanel: React.FC = () => {
  const { selected, actions } = useEditor((state) => {
    const currentNodeId = Array.from(state.events.selected)[0]; // Get first selected item
    let selected;

    if (currentNodeId && state.nodes[currentNodeId]) {
      const node = state.nodes[currentNodeId];
      if (node.data) {
        selected = {
          id: currentNodeId,
          name: node.data.displayName || node.data.name || "Unknown",
          settings: node.related && node.related.settings,
          props: node.data.props || {},
        };
      }
    }

    return {
      selected,
    };
  });

  if (!selected) {
    return (
      <div className="w-full bg-gray-50 p-4">
        <h3 className="font-bold mb-4 text-lg">Properties</h3>
        <p className="text-gray-500 text-sm">
          Select a component to edit its properties
        </p>
      </div>
    );
  }

  return (
    <div className="w-full bg-gray-50 p-4">
      <h3 className="font-bold mb-4 text-lg">Properties</h3>
      <div className="mb-4 p-2 bg-blue-100 rounded">
        <span className="text-sm font-medium text-blue-800">
          Selected: {selected.name}
        </span>
      </div>

      {/* Text Component Properties */}
      {selected.name === "Text" && (
        <div className="space-y-3">
          <div>
            <label className="block text-sm font-medium mb-1">
              Text Content
            </label>{" "}
            <input
              type="text"
              value={selected.props.text || ""}
              onChange={(e) =>
                actions.setProp(selected.id, (props: any) => {
                  props.text = e.target.value;
                })
              }
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Font Size</label>
            <input
              type="number"
              value={selected.props.fontSize || 16}
              onChange={(e) =>
                actions.setProp(selected.id, (props: any) => {
                  props.fontSize = parseInt(e.target.value);
                })
              }
              className="w-full p-2 border rounded"
              min="8"
              max="72"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Color</label>
            <input
              type="color"
              value={selected.props.color || "#000000"}
              onChange={(e) =>
                actions.setProp(selected.id, (props: any) => {
                  props.color = e.target.value;
                })
              }
              className="w-full p-2 border rounded"
            />
          </div>
        </div>
      )}

      {/* Button Component Properties */}
      {selected.name === "Button" && (
        <div className="space-y-3">
          <div>
            <label className="block text-sm font-medium mb-1">
              Button Text
            </label>
            <input
              type="text"
              value={selected.props.text || ""}
              onChange={(e) =>
                actions.setProp(selected.id, (props: any) => {
                  props.text = e.target.value;
                })
              }
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Background Color
            </label>
            <input
              type="color"
              value={selected.props.backgroundColor || "#3b82f6"}
              onChange={(e) =>
                actions.setProp(selected.id, (props: any) => {
                  props.backgroundColor = e.target.value;
                })
              }
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Text Color</label>
            <input
              type="color"
              value={selected.props.textColor || "#ffffff"}
              onChange={(e) =>
                actions.setProp(selected.id, (props: any) => {
                  props.textColor = e.target.value;
                })
              }
              className="w-full p-2 border rounded"
            />
          </div>
        </div>
      )}

      {/* Container Component Properties */}
      {selected.name === "Container" && (
        <div className="space-y-3">
          <div>
            <label className="block text-sm font-medium mb-1">Padding</label>
            <input
              type="number"
              value={selected.props.padding || 20}
              onChange={(e) =>
                actions.setProp(selected.id, (props: any) => {
                  props.padding = parseInt(e.target.value);
                })
              }
              className="w-full p-2 border rounded"
              min="0"
              max="100"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Background Color
            </label>
            <input
              type="color"
              value={selected.props.backgroundColor || "#f8f9fa"}
              onChange={(e) =>
                actions.setProp(selected.id, (props: any) => {
                  props.backgroundColor = e.target.value;
                })
              }
              className="w-full p-2 border rounded"
            />
          </div>
        </div>
      )}

      <button
        onClick={() => actions.delete(selected.id)}
        className="mt-4 w-full bg-red-500 text-white p-2 rounded hover:bg-red-600 transition-colors"
      >
        Delete Component
      </button>
    </div>
  );
};
