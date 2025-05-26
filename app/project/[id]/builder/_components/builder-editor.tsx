import React from "react";
import { Editor } from "@craftjs/core";
import { ComponentsPanel } from "./ComponentsPanel";
import { Button } from "./node/Button";
import { Text } from "./node/Text";
import { Container } from "./node/Container";
import { PropertiesPanel } from "./PropertiesPanel";
import { Canvas } from "./Canvas";
import { Toolbar } from "./Toolbar";

// Main App Component
const App: React.FC = () => {
  return (
    <div className="h-screen flex flex-col">
      <Editor
        resolver={{
          Text,
          Button,
          Container,
        }}
        onRender={({ render }) => (
          <div className="craftjs-renderer">{render}</div>
        )}
      >
        <Toolbar />
        <div className="flex flex-1 overflow-hidden">
          <ComponentsPanel />
          <Canvas />
          <PropertiesPanel />
        </div>
      </Editor>
    </div>
  );
};

export default App;
