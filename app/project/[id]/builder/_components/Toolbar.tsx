import { useEditor } from "@craftjs/core";
import React, { useState } from "react";

// Toolbar with actions
export const Toolbar: React.FC = () => {
  const { actions, query } = useEditor();
  const [jsonOutput, setJsonOutput] = useState("");

  const handleExport = () => {
    const json = query.serialize();
    setJsonOutput(JSON.stringify(JSON.parse(json), null, 2));
  };

  const handleImport = () => {
    if (jsonOutput.trim()) {
      try {
        actions.deserialize(jsonOutput);
      } catch (error) {
        alert("Invalid JSON format");
      }
    }
  };
  const handleClear = () => {
    // Simple clear - just deserialize a minimal state
    const initialState = JSON.stringify({
      ROOT: {
        type: { resolvedName: "Container" },
        isCanvas: true,
        props: { padding: 40, backgroundColor: "#ffffff" },
        displayName: "Container",
        custom: {},
        hidden: false,
        nodes: [],
        linkedNodes: {},
      },
    });
    try {
      actions.deserialize(initialState);
    } catch (error) {
      console.log("Reset to simple canvas");
    }
  };

  return (
    <div className="h-10 text-white flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <div className="flex justify-between space-x-2">
          <button
            onClick={handleExport}
            className="px-3 py-1 bg-blue-600 rounded hover:bg-blue-700 transition-colors text-sm"
          >
            Export JSON
          </button>
          <button
            onClick={handleImport}
            className="px-3 py-1 bg-green-600 rounded hover:bg-green-700 transition-colors text-sm"
          >
            Import JSON
          </button>
          <button
            onClick={handleClear}
            className="px-3 py-1 bg-red-600 rounded hover:bg-red-700 transition-colors text-sm"
          >
            Clear Canvas
          </button>
        </div>
      </div>

      {jsonOutput && (
        <div className="ml-4">
          <textarea
            value={jsonOutput}
            onChange={(e) => setJsonOutput(e.target.value)}
            className="w-120 h-50 p-2 text-xs font-mono rounded resize-none"
            placeholder="JSON will appear here after export..."
          />
        </div>
      )}
    </div>
  );
};
