import { profile, socials } from '../data/profile';
import { focus } from '../data/skills';
import Icon from '../ui/icons';

export default function Hero() {
  const primary = socials.filter((s) => s.primary);
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-16 sm:pt-40">
      {/* backdrop */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid" />
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[420px] w-[720px] -translate-x-1/2 rounded-full opacity-40 blur-[120px]"
        style={{ background: 'radial-gradient(circle, rgba(45,212,191,0.25), transparent 70%)' }}
      />

      <div className="mx-auto grid max-w-content items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr]">
        {/* left: copy */}
        <div className="animate-fade-up">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-bg-card px-3 py-1.5 font-mono text-xs text-muted">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            {profile.role} @ {profile.company.name} · {profile.location}
          </div>

          <h1 className="font-display text-4xl font-bold leading-[1.05] text-text sm:text-6xl">
            Austin&nbsp;J.&nbsp;Hunt
          </h1>

          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
            {profile.tagline} What can I say? I'm single and I like to tinker.
          </p>

          {/* focus tags */}
          <div className="mt-6 flex flex-wrap gap-2">
            {focus.map((f) => (
              <span key={f} className="chip">
                {f}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#work"
              className="rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-[#04120f] transition-transform hover:-translate-y-0.5"
            >
              View work
            </a>
            <a
              href="#contact"
              className="rounded-full border border-line-strong px-5 py-2.5 text-sm font-semibold text-text transition-colors hover:border-accent hover:text-accent"
            >
              Get in touch
            </a>
            <a
              href={profile.resume.url}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-1.5 px-2 py-2.5 font-mono text-sm text-muted transition-colors hover:text-text"
            >
              <Icon name="doc" className="h-4 w-4" />
              {profile.resume.label}
            </a>
          </div>

          {/* socials */}
          <div className="mt-8 flex items-center gap-4">
            {primary.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="text-muted transition-colors hover:text-accent"
              >
                <Icon name={s.icon} className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        {/* right: terminal-framed avatar */}
        <div className="animate-fade-up justify-self-center [animation-delay:120ms] lg:justify-self-end">
          <div className="card w-[300px] overflow-hidden sm:w-[340px]">
            <div className="flex items-center gap-2 border-b border-line px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
              <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
              <span className="h-3 w-3 rounded-full bg-[#28c840]" />
              <span className="ml-2 font-mono text-xs text-faint">austin.svg</span>
            </div>
            <div
              className="relative"
              style={{ background: 'radial-gradient(circle at 50% 35%, rgba(45,212,191,0.14), transparent 65%)' }}
            >
              <img
                src="/img/profile.svg"
                alt="Low-poly portrait of Austin Hunt"
                width="340"
                height="300"
                loading="eager"
                className="mx-auto h-auto w-[78%] py-6"
              />
            </div>
            <div className="border-t border-line px-4 py-3 font-mono text-xs text-muted">
              <span className="text-accent">const</span> role ={' '}
              <span className="text-accent-bright">'engineer + artist'</span>;
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
