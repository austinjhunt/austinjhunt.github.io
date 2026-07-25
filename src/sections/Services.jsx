import Section from '../ui/Section';
import { services } from '../data/services';

export default function Services() {
  return (
    <Section
      id="services"
      index="05"
      label="Freelance"
      title="Need a developer? I'd love to help."
      intro="Available for freelance and contract work. Here's where I can plug in."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <div key={s.title} className="card card-hover reveal p-6">
            <div className="mb-3 font-mono text-xs text-faint">
              {String(i + 1).padStart(2, '0')}
            </div>
            <h3 className="font-display text-lg font-semibold text-text">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{s.summary}</p>
          </div>
        ))}

        <a
          href="#contact"
          className="reveal flex flex-col justify-center rounded-2xl border border-dashed border-line-strong p-6 text-center transition-colors hover:border-accent"
        >
          <span className="font-display text-lg font-semibold text-accent">
            Let's talk →
          </span>
          <span className="mt-1 text-sm text-muted">
            Tell me what you're building.
          </span>
        </a>
      </div>
    </Section>
  );
}
