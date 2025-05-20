"use client";
import { useMutation, useQueryClient } from "@tanstack/react-query";

interface ProjectCreateProps {
  directory: string;
  createdDate: string;
  name: string;
}

interface ProjectResponse {
  id: string;
  directory: string;
  createdDate: string;
  name: string;
}

async function createProject(project: ProjectCreateProps): Promise<ProjectResponse> {
  const response = await fetch("/api/projects", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(project),
  });

  if (!response.ok) {
    throw new Error("Failed to create project");
  }

  return response.json();
}

export function useCreateProject() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: createProject,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['projects'] });
    },
  });
}
