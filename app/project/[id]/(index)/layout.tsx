"use client";
import { TanstackProvider } from "@/components/tanstack-provider";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { useParams } from "next/navigation";
import ProjectSidebar from "../../_components/project-sidebar";

export default function ProjectLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const params = useParams();
  const projectId = params?.id as string;
  const nameSidebar = "project-sidebar";
  return (
    <div>
      <SidebarProvider>
        <TanstackProvider>
          <ProjectSidebar nameSidebar={nameSidebar} projectId={projectId} />
        </TanstackProvider>
        <main className="flex-1">
          <SidebarTrigger
            name={nameSidebar}
            className="ml-2 mt-2 fixed z-50 bg-white opacity-10 hover:opacity-100"
          />
          {children}
        </main>
      </SidebarProvider>
    </div>
  );
}
