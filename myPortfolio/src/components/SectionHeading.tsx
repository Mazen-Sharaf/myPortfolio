export function SectionHeading({ label, title }: { label: string; title: string }) {
  return <div className="section-heading"><span className="section-label">{label}</span><h2>{title}</h2></div>;
}
