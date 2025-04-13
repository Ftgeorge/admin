export default function PageHeading({children}: {children: React.ReactNode}) {
  return (
    <h2 className="font-medium text-2xl">{children}</h2>
  );
}