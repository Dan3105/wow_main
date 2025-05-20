"use client";
import { useQuery } from "@tanstack/react-query";

interface ProjectProps {
  id: string;
  directory: string;
  createdDate: string;
  name: string;
}

async function fetchProjects(): Promise<ProjectProps[]> {
  const response = await fetch("/api/projects");

  if (!response.ok) {
    throw new Error("Failed to fetch projects");
  }

  return response.json();
}

export function useGetProjects() {
  return useQuery({
    queryKey: ["projects"],
    queryFn: fetchProjects,
    staleTime: 5 * 60 * 1000, // 5 minutes
    refetchOnWindowFocus: true,
  });
}
