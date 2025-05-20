"use client";
import { useMutation, useQueryClient } from "@tanstack/react-query";

async function deleteProject(id: string): Promise<{ success: boolean }> {
  const response = await fetch(`/api/projects?id=${id}`, {
    method: 'DELETE',
  });

  if (!response.ok) {
    throw new Error("Failed to delete project");
  }

  return response.json();
}

export function useDeleteProject() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: deleteProject,
    onSuccess: () => {
      // Invalidate and refetch the projects list
      queryClient.invalidateQueries({ queryKey: ['projects'] });
    },
  });
}
