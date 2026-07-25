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
    <Section id="about" index="01" label="About" title="can't stop this train">
      <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        <div className="reveal space-y-5 text-lg leading-relaxed text-muted">
          <p>
            29-year-old engineer with a demonstrated history of perfectionist{' '}
            tendencies and control problems that manifested in a ton of solo dev projects{' '},
            a decorated Upwork profile, a quiet personal life of mostly solitude,
            and an extensive Github repository collection that screams "I'm good enough"{' '}
            ... mostly into the void, I guess.
          </p>
          <p>
            I've grown up though. I know the value of a team, and helping hands received and offered, and{' '}
            <b>persistent, intentional injection</b>{' '}of humanity and humor and real connection into life 
            and tech work, because tech feels increasingly
            <b>anti-human</b> with each passing year. After 8 years of working and learning in a small IT shop at CofC,
            I just passed my <b>1 year</b> mark working on a small, close-knit team
            of brilliant engineers at <b>Splunk</b>, where we manage a high-traffic Puppet control-repo
            for global config deployments and we share a <b>truly humbling</b> rotation of week-long 24x7 on-call shifts that come 
            with a nice <b>ego-crushing</b> helping of after-midnight incident pages.
          </p>

          <p><b>~/.outside-the-ropes</b></p>
          <p>
            I love weightlifting, I decorate my own walls at home as a{' '}
            <a
              href="https://sketchyactivity.com"
              target="_blank"
              rel="noreferrer"
              className="text-accent link-underline"
            >
              portrait artist
            </a>
            , I just started a{' '}
            <a
              href="https://instagram.com/talkingtechwithaustin"
              target="_blank"
              rel="noreferrer"
              className="text-accent link-underline"
            >
              tech channel
            </a> to work on [myself, communication_skills, technical_proficiency, comfort_on_camera, etc.], I just launched{' '}
            <a
              href="/snap-n-sell"
              target="_blank"
              rel="noreferrer"
              className="text-accent link-underline"
            >
              my first ever iOS app, "Snap n' Sell",
            </a> and I'm both <b>excited</b> and <b>terrified</b> by the direction of the tech industry. And I'm right smack-dab in the middle of it. I also doom scroll a lot more than I'm comfortable with.
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
            href="https://instagram.com/talkingtechwithaustin"
            target="_blank"
            rel="noreferrer"
            className="card card-hover col-span-2 flex items-center justify-between p-5"
          >
            <div>
              <div className="font-mono text-xs uppercase tracking-widest text-accent">
                figuring out content creation
              </div>
              <div className="mt-1 font-display text-lg font-semibold text-text">
                Talking tech with Austin
              </div>
            </div>
            <Icon name="arrow" className="h-5 w-5 text-muted" />
          </a>
        </div>
      </div>
    </Section>
  );
}
