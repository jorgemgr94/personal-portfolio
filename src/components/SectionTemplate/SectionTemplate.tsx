interface SectionTemplateProps {
  children: React.ReactNode;
  id: string;
  flexDirection?: string;
}

export default function SectionTemplate ({
  children,
  id,
  flexDirection = 'flex-row'
}: SectionTemplateProps) {
  return (
    <div
      id={id}
      className={`flex ${flexDirection} min-h-screen p-10 items-center justify-center`}
    >
      {children}
    </div>
  );
}
