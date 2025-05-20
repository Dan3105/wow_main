import { AppSidebar } from "@/components/app-sidebar";
import { TanstackProvider } from "@/components/tanstack-provider";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <SidebarProvider>
        <TanstackProvider>
          <AppSidebar />
        </TanstackProvider>
        <main>
          <SidebarTrigger />
          {children}
        </main>
      </SidebarProvider>
    </div>
  );
}
