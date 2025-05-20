"use client";
import { useMutation, useQueryClient } from "@tanstack/react-query";

interface ProjectProps {
  id: string;
  directory?: string;
  createdDate?: string;
  name?: string;
}

async function updateProject(project: ProjectProps): Promise<ProjectProps> {
  const response = await fetch(`/api/projects?id=${project.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(project),
  });

  if (!response.ok) {
    throw new Error("Failed to update project");
  }

  return response.json();
}

export function useUpdateProject() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: updateProject,
    onSuccess: () => {
      // Invalidate and refetch the projects list
      queryClient.invalidateQueries({ queryKey: ['projects'] });
    },
  });
}
