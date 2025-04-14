export default function PageContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="flex h-full flex-1 flex-col gap-4 pb-4">{children}</div>;
}
