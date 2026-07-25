import Section from '../ui/Section';
import Icon from '../ui/icons';
import { experience } from '../data/career';

export default function Experience() {
  return (
    <Section id="experience" index="03" label="Experience" title="Where I've worked.">
      <ol className="relative border-l border-line pl-6 sm:pl-8">
        {experience.map((e, i) => (
          <li key={i} className="reveal relative pb-9 last:pb-0">
            <span
              className={`absolute -left-[7px] top-1.5 h-3 w-3 rounded-full border-2 border-bg ${
                e.current ? 'bg-accent accent-glow' : 'bg-faint'
              }`}
            />
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <div>
                <h3 className="font-display text-lg font-semibold text-text">{e.role}</h3>
                <a
                  href={e.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-accent link-underline"
                >
                  {e.company}
                  <Icon name="arrow" className="h-3.5 w-3.5" />
                </a>
              </div>
              <span className="font-mono text-xs text-faint">
                {e.from} — {e.to}
              </span>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
