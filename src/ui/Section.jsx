// Section shell: consistent width, vertical rhythm, and a mono-labeled heading.
export default function Section({ id, index, label, title, intro, children, className = '' }) {
  return (
    <section id={id} className={`relative py-20 sm:py-28 ${className}`}>
      <div className="mx-auto w-full max-w-content px-5 sm:px-8">
        {(label || title) && (
          <header className="reveal mb-12 max-w-2xl">
            {label && (
              <div className="mb-3 flex items-center gap-3 font-mono text-xs text-accent">
                {index && <span className="text-faint">{index}</span>}
                <span className="uppercase tracking-[0.2em]">{label}</span>
                <span className="h-px flex-1 bg-line" />
              </div>
            )}
            {title && (
              <h2 className="font-display text-3xl font-bold text-text sm:text-4xl">
                {title}
              </h2>
            )}
            {intro && <p className="mt-4 text-base leading-relaxed text-muted">{intro}</p>}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}
