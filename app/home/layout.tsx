import { AppSidebar } from "@/components/app-sidebar";
import { TanstackProvider } from "@/components/tanstack-provider";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const namesidebar = "main-sidebar";
  return (
    <div>
      <SidebarProvider sidebarNames={[namesidebar]}>
        <TanstackProvider>
          <AppSidebar nameSidebar={namesidebar} />
        </TanstackProvider>
        <main>
          <SidebarTrigger name={namesidebar} />
          {children}
        </main>
      </SidebarProvider>
    </div>
  );
}
