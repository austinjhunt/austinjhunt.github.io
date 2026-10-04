import { socials, stats } from '../data/profile';
import Section from '../ui/Section';
import Icon from '../ui/icons';

const channelUrl = socials.find((s) => s.label === 'Instagram')?.href;

export default function About() {
  return (
    <Section id="about" index="01" label="About" title="can't stop this train">
      <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        <div className="reveal space-y-5 text-lg leading-relaxed text-muted">
          
          <p>My mom worked at a local law firm when I was growing up (she still does); she brought home some business T-shirts once early on with 
            their slogan: <strong>"Never settle for less."</strong> Twenty years later, those shirts still whisper to me. Don't write your name down until you're proud of what you built.
          </p>
          <p>My dad was (and is) an electrician, a mechanic, a general jack of all trades, who told me time and again that "if it was easy, everyone would do it." That's baked into me. It's the 
            unconscious force that raises my hand into the air in quiet rooms where no one else is volunteering for new work. Also, better to volunteer than to be voluntold.
          </p>

          <p>
            After 8 years of working and learning in a small IT shop at CofC (learning the ropes of enterprise network infrastructure, automation, IT communication strategies, and web development),
            I moved on to a <strong>full-time software engineering role</strong> at <strong>Splunk</strong>, where I work with a small, close-knit team
            of brilliant engineers to manage and scale a high-traffic Puppet control-repo
            for global Splunk cloud config deployments. We share a <strong>truly humbling</strong> rotation of week-long 24x7 on-call shifts that come
            with a nice <strong>ego-crushing</strong> helping of after-midnight incident pages.
          </p>

          <h3 className="font-bold">~/.outside-the-ropes</h3>
          <p>
            I love weightlifting and working on my Jeep, I decorate my own walls at home as a portrait artist, I enjoy reading (mostly nonfiction, comedy, philosophy), I just launched{' '}
            <a
              href="/snap-n-sell"
              target="_blank"
              rel="noreferrer"
              className="text-accent link-underline"
            >
              my first ever iOS app, Snap n' Sell
            </a>, and I'm both <strong>excited</strong> and <strong>terrified</strong> by the direction of the tech industry. And I'm right smack-dab in the middle of it. I also doom scroll a lot more than I'm comfortable with. FOMO.
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
        </div>
      </div>
    </Section>
  );
}
