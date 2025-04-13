export default function PageHeader({children}: {children: React.ReactNode}) {
  return (
    <div className='flex justify-between items-center py-4 border-b border-[#E3E2D9] font-medium'>
      {children}
    </div>
  );
}