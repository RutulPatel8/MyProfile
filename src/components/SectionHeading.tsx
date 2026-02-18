const SectionHeading = ({ title }: { label?: string; title: string }) => (
  <div className="mb-12 text-center">
    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">{title}</h2>
    <div className="h-1 w-16 bg-primary rounded-full mt-4 mx-auto" />
  </div>
);

export default SectionHeading;
