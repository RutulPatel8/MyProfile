const SectionHeading = ({ label, title }: { label: string; title: string }) => (
  <div className="mb-12">
    <span className="font-mono text-primary text-sm">{label}.</span>
    <h2 className="text-3xl sm:text-4xl font-bold mt-1 tracking-tight">{title}</h2>
    <div className="h-1 w-16 bg-primary rounded-full mt-3" />
  </div>
);

export default SectionHeading;
