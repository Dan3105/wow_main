import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarFooter,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";

export default function ProjectSidebar({
  projectId,
  nameSidebar,
}: {
  projectId: string;
  nameSidebar: string;
}) {
  const feature_functions = [
    {
      title: "UI Building",
      url: `/project/${projectId}/builder`,
    },
  ];

  return (
    <Sidebar name={`${nameSidebar}`}>
      <SidebarHeader />
      <SidebarContent>
        <SidebarGroup />
        <SidebarGroupLabel>
          <a href={`/project/${projectId}`}>
            <span>Main Section</span>
          </a>
        </SidebarGroupLabel>
        {feature_functions.map((item) => (
          <SidebarMenuItem key={item.title}>
            <SidebarMenuButton asChild>
              <a href={item.url}>
                <span>{item.title}</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
