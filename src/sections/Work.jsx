import { useMemo, useState } from 'react';
import Section from '../ui/Section';
import Icon from '../ui/icons';
import { projects, research, CATEGORIES } from '../data/projects';

function StatusDot({ status }) {
  const live = /live|production/i.test(status);
  return (
    <span className="inline-flex items-center gap-1.5 font-mono text-xs text-muted">
      <span className={`h-1.5 w-1.5 rounded-full ${live ? 'bg-accent' : 'bg-faint'}`} />
      {status}
    </span>
  );
}

function ProjectLinks({ links = {}, visibility }) {
  return (
    <div className="flex flex-wrap items-center gap-4 font-mono text-xs">
      {links.live && (
        <a
          href={links.live}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 text-muted transition-colors hover:text-accent"
        >
          <Icon name="external" className="h-3.5 w-3.5" /> Live
        </a>
      )}
      {links.github && visibility !== 'private' && (
        <a
          href={links.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 text-muted transition-colors hover:text-accent"
        >
          <Icon name="github" className="h-3.5 w-3.5" /> Source
        </a>
      )}
      {links.video && (
        <a
          href={links.video}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 text-muted transition-colors hover:text-accent"
        >
          <Icon name="video" className="h-3.5 w-3.5" /> Demo
        </a>
      )}
      {visibility === 'private' && (
        <span className="inline-flex items-center gap-1.5 text-faint">
          <Icon name="lock" className="h-3.5 w-3.5" /> Private source
        </span>
      )}
    </div>
  );
}

function ProjectCard({ p, featured }) {
  return (
    <article
      className={`card card-hover reveal flex flex-col p-6 ${
        featured ? 'sm:p-7' : ''
      }`}
    >
      <div className="mb-3 flex items-start justify-between gap-3">
        <div className="flex items-center gap-2">
          <StatusDot status={p.status} />
          {p.visibility === 'private' && (
            <span className="inline-flex items-center gap-1 rounded-full border border-line px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-faint">
              <Icon name="lock" className="h-3 w-3" /> Private
            </span>
          )}
        </div>
        <span className="font-mono text-xs text-faint">{p.year}</span>
      </div>

      <h3 className="font-display text-xl font-semibold text-text">{p.name}</h3>
      <p className="mt-1 text-sm font-medium text-accent">{p.tagline}</p>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{p.description}</p>

      {p.highlights && featured && (
        <ul className="mt-4 space-y-1.5">
          {p.highlights.map((h) => (
            <li key={h} className="flex gap-2 text-sm text-muted">
              <span className="mt-1.5 h-1 w-1 flex-none rounded-full bg-accent" />
              {h}
            </li>
          ))}
        </ul>
      )}

      <div className="mt-5 flex flex-wrap gap-2">
        {p.tech.map((t) => (
          <span key={t} className="chip">
            {t}
          </span>
        ))}
        {typeof p.stars === 'number' && p.stars > 0 && (
          <span className="chip text-accent">★ {p.stars}</span>
        )}
      </div>

      <div className="mt-5 border-t border-line pt-4">
        <ProjectLinks links={p.links} visibility={p.visibility} />
      </div>
    </article>
  );
}

export default function Work() {
  const [filter, setFilter] = useState('All');

  const visible = useMemo(
    () => (filter === 'All' ? projects : projects.filter((p) => p.category === filter)),
    [filter]
  );
  const featured = visible.filter((p) => p.featured);
  const rest = visible.filter((p) => !p.featured);

  return (
    <Section
      id="work"
      index="02"
      label="Selected work"
      title="Things I've built."
      intro="A curated mix of public open source and private product work — because the most impactful things I ship usually aren't on my GitHub."
    >
      {/* filters */}
      <div className="reveal mb-8 flex flex-wrap gap-2">
        {CATEGORIES.map((c) => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            className={`rounded-full border px-3.5 py-1.5 font-mono text-xs transition-colors ${
              filter === c
                ? 'border-accent bg-accent-dim text-accent'
                : 'border-line text-muted hover:border-line-strong hover:text-text'
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {featured.length > 0 && (
        <div className="mb-6 grid gap-5 md:grid-cols-2">
          {featured.map((p) => (
            <ProjectCard key={p.name} p={p} featured />
          ))}
        </div>
      )}

      {rest.length > 0 && (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((p) => (
            <ProjectCard key={p.name} p={p} />
          ))}
        </div>
      )}

      {/* research */}
      <div className="reveal mt-14">
        <h3 className="mb-5 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-accent">
          Research & writing <span className="h-px flex-1 bg-line" />
        </h3>
        <div className="grid gap-4 md:grid-cols-3">
          {research.map((r) => (
            <a
              key={r.name}
              href={r.link}
              target="_blank"
              rel="noreferrer"
              className="card card-hover group flex flex-col p-5"
            >
              <div className="flex items-start justify-between gap-2">
                <h4 className="font-display text-base font-semibold text-text">{r.name}</h4>
                <Icon name="doc" className="h-4 w-4 flex-none text-faint" />
              </div>
              <p className="mt-1 text-xs font-medium text-accent">{r.tagline}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted">{r.description}</p>
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
}
