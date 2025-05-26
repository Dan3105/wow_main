"use client";

import {
  Sidebar,
  SidebarProvider,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarInset,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Editor } from "@craftjs/core";
import { Button } from "./_components/node/Button";
import { Text } from "./_components/node/Text";
import { Container } from "./_components/node/Container";
import { Toolbar } from "./_components/Toolbar";
import { ComponentsPanel } from "./_components/ComponentsPanel";
import { PropertiesPanel } from "./_components/PropertiesPanel";
import { Canvas } from "./_components/Canvas";

export default function Page() {
  const drdSidebar = "builder-d&d-sidebar";
  const propsSidebar = "builder-prop-sidebar";
  return (
    <>
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
        <SidebarProvider sidebarNames={[drdSidebar, propsSidebar]}>
          {/* Left Sidebar */}
          <Sidebar name={drdSidebar} side="left">
            <SidebarHeader>{/* Add trigger for left sidebar */}</SidebarHeader>
            <SidebarContent>
              <ComponentsPanel />
            </SidebarContent>
            <SidebarFooter />
          </Sidebar>
          {/* Main Content Area with Fixed Triggers */}
          <SidebarInset>
            {/* Fixed trigger bar at top */}
            <div className="absolute w-full h-10 top-0 z-50 flex justify-between items-center p-2 border-b">
              <SidebarTrigger name={drdSidebar} />
              <Toolbar />
              <SidebarTrigger name={propsSidebar} />
            </div>
            <div className="mt-12">
              <Canvas />
            </div>
          </SidebarInset>
          <Sidebar name={propsSidebar} side="right">
            <SidebarHeader>{/* Add trigger for right sidebar */}</SidebarHeader>
            <SidebarContent>
              <PropertiesPanel />
            </SidebarContent>
          </Sidebar>
        </SidebarProvider>
      </Editor>
    </>
  );
}
