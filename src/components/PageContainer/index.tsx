export function PageContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col h-screen w-full justify-center items-center">
      {children}
    </div>
  );
}
