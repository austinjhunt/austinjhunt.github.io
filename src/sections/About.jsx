import { socials, stats } from '../data/profile';
import Section from '../ui/Section';
import Icon from '../ui/icons';

const channelUrl = socials.find((s) => s.label === 'Instagram')?.href;

export default function About() {
  return (
    <Section id="about" index="01" label="About" title="can't stop this train">
      <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        <div className="reveal space-y-5 text-lg leading-relaxed text-muted">
          <p>
            29-year-old engineer with a demonstrated history of perfectionist
            tendencies and control problems that manifests in an abundance of solitude
            and an extensive Github portfolio that screams "I'm good enough, please hire me", mostly into the void,
            complemented by a potentially undiagnosed bursty attention issue in the form of many unfinished compulsive side projects, usually started after midnight.
            My real need for a mind-husher, a consistent focal point, fueled thousands of hours of drawing ballpoint portraits that became
            increasingly realistic as a decade passed. High school, undergrad, work, post-grad, more work. Obsession with "becoming something" pushed me through an M.S. program
            at Vandy where I maintained a 4.0 while working full time. Brutal workload. Granted, as I danced along
            that yellow brick road of sleep deprivation, my hands were held warmly by caffeine, friends &amp; family, and a forgiving manager.
          </p>
          <p>My mom worked at a local law firm when I was growing up (she still does); she brought home some business T-shirts once early on with 
            their slogan: <strong>"Never settle for less."</strong> Twenty years later, those shirts still whisper to me. Don't write your name down until you're proud of what you built.
          </p>
          <p>My dad was (and is) an electrician, a mechanic, a general jack of all trades, who told me time and again that "if it was easy, everyone would do it." That's baked into me. It's the 
            unconscious force that raises my hand into the air in quiet rooms where no one else is volunteering for new work. Also, better to volunteer than to be voluntold.
          </p>

          <p>
            I've grown up though. I know the value of a team, and helping hands received and offered, and{' '}
            <strong>persistent, intentional injection</strong>{' '}of humanity and humor and real connection into life
            and tech work, because tech feels increasingly{' '}
            <strong>anti-human</strong> with each passing year and I don't want to contribute to that problem. After 8 years of working and learning in a small IT shop at CofC,
            I just passed my <strong>1 year</strong> mark working on a small, close-knit team
            of brilliant engineers at <strong>Splunk</strong>, where we manage a high-traffic Puppet control-repo
            for global config deployments and we share a <strong>truly humbling</strong> rotation of week-long 24x7 on-call shifts that come
            with a nice <strong>ego-crushing</strong> helping of after-midnight incident pages.
          </p>

          <h3 className="font-bold">~/.outside-the-ropes</h3>
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
              href={channelUrl}
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
              my first ever iOS app, Snap n' Sell
            </a>, and I'm both <strong>excited</strong> and <strong>terrified</strong> by the direction of the tech industry. And I'm right smack-dab in the middle of it. I also doom scroll a lot more than I'm comfortable with.
          </p>
        </div>

        <div className="reveal self-start space-y-4">
          <dl className="grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="card p-5">
                <dt className="font-display text-3xl font-bold text-accent">{s.value}</dt>
                <dd className="mt-1 text-sm text-muted">{s.label}</dd>
              </div>
            ))}
          </dl>
          <a
            href={channelUrl}
            target="_blank"
            rel="noreferrer"
            className="card card-hover flex items-center justify-between p-5"
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
