const SectionHeading = ({ title }: { label?: string; title: string }) => (
  <div className="mb-12 text-center">
    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
      <span className="gradient-text">{title}</span>
    </h2>
    <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-transparent via-primary to-transparent" />
  </div>
);

export default SectionHeading;
