"use client";
import { useGetProjects } from "@/hooks/useProjects/useGetProjects";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenuItem,
  SidebarMenuButton,
} from "../ui/sidebar";
import { FileCode } from "lucide-react";
import { CreateProjectModal } from "./modal/create-project-modal";
import { Separator } from "../ui/separator";
import { useDeleteProject } from "@/hooks/useProjects/useDeleteProject";

export function ProjectSubSidebar() {
  const { data: projects, isLoading, error } = useGetProjects();
  const { mutate: deleteProject, isPending } = useDeleteProject();
  const deleteHandler = (id: string) => {
    deleteProject(id);
  };

  return (
    <SidebarGroup>
      <SidebarGroupLabel>Projects</SidebarGroupLabel>
      {isLoading ? (
        <div className="flex items-center px-3 py-2">
          <div className="h-4 w-4 animate-spin rounded-full border-2 border-muted-foreground/20 border-t-muted-foreground" />
          <span className="ml-2 text-xs text-muted-foreground">Loading...</span>
        </div>
      ) : error ? (
        <div className="px-3 py-2">
          <span className="text-xs text-destructive">
            Failed to load projects
          </span>
        </div>
      ) : projects && projects.length > 0 ? (
        projects.map((project) => (
          <SidebarMenuItem key={project.id}>
            <SidebarMenuButton asChild>
              <a
                href={`/project/${project.id}`}
                className="flex items-center gap-2"
              >
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-2">
                    <FileCode />
                    <span className="truncate">{project.name}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                      }}
                      className="p-1 hover:bg-blue-300 transition-colors rounded-sm"
                    >
                      Edit
                    </button>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        deleteHandler(project.id);
                      }}
                      disabled={isPending}
                      className="p-1 hover:bg-destructive hover:text-white transition-colors rounded-sm disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isPending ? "Deleting..." : "Delete"}
                    </button>
                  </div>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))
      ) : (
        <div className="px-3 py-2 text-xs text-muted-foreground">
          No projects found
        </div>
      )}
      <Separator className="mt-2 mb-4" />
      <CreateProjectModal />
    </SidebarGroup>
  );
}
