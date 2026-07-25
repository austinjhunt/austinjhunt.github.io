const items = [
  'Python', 'React', 'AWS', 'Kubernetes', 'Docker', 'Django', 'TypeScript',
  'Terraform', 'Ansible', 'Java', 'Spring Boot', 'GraphQL', 'PostgreSQL',
  'GitHub Actions', 'Azure', 'GCP', 'Node.js', 'LLM / RAG', 'Linux',
];

export default function TechMarquee() {
  const row = [...items, ...items];
  return (
    <div className="border-y border-line bg-bg-elev py-4">
      <div className="marquee-mask overflow-hidden">
        <div className="marquee-track flex w-max items-center gap-8">
          {row.map((t, i) => (
            <span key={i} className="flex items-center gap-8 font-mono text-sm text-faint">
              <span className="transition-colors hover:text-accent">{t}</span>
              <span className="text-accent/40">/</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
