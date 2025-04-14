export default function PageHeader({children, className}: {children: React.ReactNode, className?:string}) {
  return (
    <div className={`flex justify-between items-center py-4 border-b border-[#E3E2D9] font-medium ${className}`}>
      {children}
    </div>
  );
}