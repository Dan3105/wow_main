"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCreateProject } from "@/hooks/useProjects/useCreateProject";
import { useState } from "react";
import { Plus } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { toast } from "sonner"

export function CreateProjectModal() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [directory, setDirectory] = useState("");
  const { mutate: createProject, isPending } = useCreateProject();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    createProject(
      {
        name,
        directory,
        createdDate: new Date().toISOString(),
      },
      {
        onSuccess: () => {
          setOpen(false);
          setName("");
          toast.success("Project has been created.")
        },
      }
    );
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="w-full hover:bg-green-300 transition-colors" >
          <Plus className="mr-2 h-4 w-4" />
          New Project
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create New Project</DialogTitle>
          <DialogDescription>
            Enter a name for your new project.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Input
                id="name"
                placeholder="Project name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                disabled={isPending}
              />
            </div>
            <div className="grid gap-2">
              <Input
                id="directory"
                placeholder="Directory"
                value={directory}
                onChange={(e) => setDirectory(e.target.value)}
                disabled={isPending}
              />
            </div>
          </div>
          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={() => setOpen(false)}
              disabled={isPending}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={!name || isPending}>
              {isPending ? "Creating..." : "Create"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
