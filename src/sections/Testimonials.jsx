import Section from '../ui/Section';
import { testimonials } from '../data/services';

export default function Testimonials() {
  return (
    <Section id="testimonials" index="06" label="Testimonials" title="Kind words.">
      <div className="columns-1 gap-5 md:columns-2 lg:columns-3 [&>*]:mb-5">
        {testimonials.map((t, i) => (
          <figure key={i} className="card reveal break-inside-avoid p-6">
            <span className="font-display text-4xl leading-none text-accent/50">“</span>
            <blockquote className="mt-1 text-sm leading-relaxed text-muted">
              {t.quote}
            </blockquote>
            <figcaption className="mt-4 border-t border-line pt-3">
              <div className="font-display text-sm font-semibold text-text">{t.author}</div>
              <div className="font-mono text-xs text-faint">
                {t.context} · {t.date}
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}
