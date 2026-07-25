import Icon from '../ui/icons';
import { profile, socials } from '../data/profile';

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-24 sm:py-32">
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[360px] w-[640px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30 blur-[120px]"
        style={{ background: 'radial-gradient(circle, rgba(45,212,191,0.3), transparent 70%)' }}
      />
      <div className="mx-auto max-w-content px-5 text-center sm:px-8">
        <div className="reveal">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-accent">
            07 — Contact
          </p>
          <h2 className="font-display text-3xl font-bold text-text sm:text-5xl">
            Let's build something.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted">
            Whether it's a product, a migration, an AI integration, or a website that
            needs saving — my inbox is open.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="mailto:austincodescleanly@gmail.com"
              className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-[#04120f] transition-transform hover:-translate-y-0.5"
            >
              Email me
            </a>
            <a
              href={profile.resume.url}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-line-strong px-6 py-3 text-sm font-semibold text-text transition-colors hover:border-accent hover:text-accent"
            >
              Download résumé
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 font-mono text-xs text-muted transition-colors hover:text-accent"
              >
                <Icon name={s.icon} className="h-4 w-4" />
                {s.handle}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
