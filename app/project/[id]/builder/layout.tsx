export default function BuilderLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <div className="h-screen w-screen">{children}</div>;
}
