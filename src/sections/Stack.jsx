import Section from '../ui/Section';
import Icon from '../ui/icons';
import { stack, learning } from '../data/skills';
import { education, certifications } from '../data/career';

export default function Stack() {
  return (
    <Section
      id="stack"
      index="04"
      label="Stack & credentials"
      title="Tools, degrees, certs."
    >
      {/* stack groups */}
      <div className="reveal grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {stack.map((g) => (
          <div key={g.group} className="card p-5">
            <h3 className="mb-3 font-mono text-xs uppercase tracking-[0.15em] text-accent">
              {g.group}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {g.items.map((it) => (
                <li key={it} className="chip">
                  {it}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* education + certs */}
      <div className="mt-6 grid gap-5 lg:grid-cols-2">
        <div className="reveal card p-6">
          <h3 className="mb-4 font-mono text-xs uppercase tracking-[0.15em] text-accent">
            Education
          </h3>
          <ul className="space-y-4">
            {education.map((ed) => (
              <li key={ed.institution} className="flex items-start justify-between gap-3">
                <div>
                  <div className="font-display font-semibold text-text">{ed.degree}</div>
                  <div className="text-sm text-muted">
                    {ed.institution} · {ed.detail}
                  </div>
                </div>
                <div className="text-right font-mono text-xs text-faint">
                  <div>{ed.note}</div>
                  <div>
                    {ed.from}–{ed.to}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="reveal card p-6">
          <h3 className="mb-4 font-mono text-xs uppercase tracking-[0.15em] text-accent">
            Certifications
          </h3>
          <ul className="space-y-3">
            {certifications.map((c) => (
              <li key={c.name}>
                <a
                  href={c.link}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between gap-3"
                >
                  <span className="flex items-center gap-2 text-sm text-text">
                    <Icon name="doc" className="h-4 w-4 flex-none text-faint" />
                    <span className="link-underline">{c.name}</span>
                  </span>
                  <span className="font-mono text-xs text-faint">{c.year}</span>
                </a>
              </li>
            ))}
          </ul>
          {learning.length > 0 && (
            <div className="mt-5 border-t border-line pt-4">
              <div className="mb-2 font-mono text-xs uppercase tracking-[0.15em] text-muted">
                Currently learning
              </div>
              <div className="flex flex-wrap gap-2">
                {learning.map((l) => (
                  <span key={l} className="chip">
                    {l}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </Section>
  );
}
