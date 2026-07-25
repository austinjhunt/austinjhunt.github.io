import Section from '../ui/Section';
import Icon from '../ui/icons';

const stats = [
  { value: '8+', label: 'yrs building software' },
  { value: 'M.S.', label: 'CS, Vanderbilt (4.0)' },
  { value: 'CKA', label: 'K8s certified' },
  { value: '10+', label: 'shipped products' },
];

export default function About() {
  return (
    <Section id="about" index="01" label="About" title="Engineer who happens to draw.">
      <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        <div className="reveal space-y-5 text-lg leading-relaxed text-muted">
          <p>
            I build and operate reliable cloud and web systems — currently on{' '}
            <span className="text-text">Splunk's enterprise cloud infrastructure</span>{' '}
            team, and previously across higher-ed platforms, startups, and freelance
            products. My work spans full-stack web, automation pipelines, and AI
            integrations, always with an eye on clean code, least-privilege security,
            and things that actually ship.
          </p>
          <p>
            The other half of me is a{' '}
            <a
              href="https://sketchyactivity.com"
              target="_blank"
              rel="noreferrer"
              className="text-accent link-underline"
            >
              realistic portrait artist
            </a>
            . That instinct — obsessing over detail until it feels right — is the same
            one I bring to systems and interfaces.
          </p>
        </div>

        <div className="reveal grid grid-cols-2 gap-4">
          {stats.map((s) => (
            <div key={s.label} className="card p-5">
              <div className="font-display text-3xl font-bold text-accent">{s.value}</div>
              <div className="mt-1 text-sm text-muted">{s.label}</div>
            </div>
          ))}
          <a
            href="https://sketchyactivity.com"
            target="_blank"
            rel="noreferrer"
            className="card card-hover col-span-2 flex items-center justify-between p-5"
          >
            <div>
              <div className="font-mono text-xs uppercase tracking-widest text-accent">
                Side of me
              </div>
              <div className="mt-1 font-display text-lg font-semibold text-text">
                Austin Hunt Portraiture
              </div>
            </div>
            <Icon name="arrow" className="h-5 w-5 text-muted" />
          </a>
        </div>
      </div>
    </Section>
  );
}
