import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Home } from "lucide-react"
import { ProjectSubSidebar } from "./project-sidebar/project-sub-sidebar"

const menu_configs = [
    {
    title: "Home",
    url: "#",
    icon: Home,
  },
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader />
      <SidebarContent>
        <SidebarGroup />
            <SidebarGroupLabel>Main Section</SidebarGroupLabel>
            {menu_configs.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
        <SidebarGroup />

        <ProjectSubSidebar/>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  )
}
