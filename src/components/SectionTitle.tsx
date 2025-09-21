function SectionTitle({
  title,
  description
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="text-center mb-12">
      <h2 className="text-5xl text-foreground mb-6">{title}</h2>
      <p className="text-lg max-w-2xl mx-auto">{description}</p>
    </div>
  );
}

export default SectionTitle;
