import { Mail, Phone, Github, Linkedin, Instagram, MapPin, Briefcase, Handshake, ArrowRight, MessageSquare, Clock, CheckCircle2, Lightbulb, Code2 } from 'lucide-react';
import { PROFILE } from '../data';
import { PageHeader } from '../components/PageHeader';

export function ContactPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Let's Connect"
        title="Get in touch"
        subtitle="Whether you're hiring, exploring a collaboration, or just want to connect — my inbox is always open."
      />

      {/* ─── Availability ─── */}
      <section className="max-w-3xl mx-auto px-6 pb-12">
        <div className="reveal glass rounded-2xl p-8 border border-[#00d9b2]/15">
          <div className="flex items-center gap-2 mb-3">
            <Clock size={18} className="text-[#00d9b2]" />
            <span className="text-[#00d9b2] text-xs font-semibold uppercase tracking-[0.25em]">Current Status</span>
          </div>
          <p className="text-[#a8b3c7] leading-relaxed">
            I'm currently open to <span className="text-white font-medium">full-time roles</span>, <span className="text-white font-medium">freelance projects</span>, and <span className="text-white font-medium">collaborations</span> — particularly anything built for the Zimbabwean or broader African market. I balance work alongside my studies, so I'm upfront about timelines and commit only to what I can deliver well.
          </p>
        </div>
      </section>

      {/* ─── Two paths: hire vs consult/collaborate ─── */}
      <section className="max-w-4xl mx-auto px-6 pb-16">
        <div className="reveal text-center mb-10">
          <span className="text-[#00d9b2] text-xs font-semibold uppercase tracking-[0.25em]">Two ways to work with me</span>
          <h2 className="text-2xl font-bold text-white mt-3">What brings you here?</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Hire */}
          <div className="reveal glass rounded-2xl p-8 border border-[#00d9b2]/15 glow-accent">
            <div className="w-14 h-14 rounded-2xl bg-[#00d9b2]/10 border border-[#00d9b2]/20 flex items-center justify-center text-[#00d9b2] mb-6">
              <Briefcase size={24} />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Looking to hire</h2>
            <p className="text-[#8896a8] text-sm leading-relaxed mb-5">
              You have a role or a project that needs a full-stack developer who ships real systems. I bring Python/Flask expertise, frontend competence, and a track record of live production deployments.
            </p>
            <ul className="space-y-2 mb-6">
              {['Full-stack web development', 'Python & Flask architecture', 'Database design (MySQL, MongoDB)', 'Production deployment experience'].map(item => (
                <li key={item} className="flex items-center gap-2 text-[#a8b3c7] text-sm">
                  <CheckCircle2 size={15} className="text-[#00d9b2] flex-shrink-0" /> {item}
                </li>
              ))}
            </ul>
            <a
              href={PROFILE.social.email}
              className="inline-flex items-center gap-2 px-5 py-3 bg-[#00d9b2] text-[#0b1120] text-sm font-semibold rounded-lg hover:bg-[#00f0c2] transition-all"
            >
              Reach out <ArrowRight size={15} />
            </a>
          </div>

          {/* Consult / Collaborate */}
          <div className="reveal glass rounded-2xl p-8 border border-[#38bdf8]/15" style={{ transitionDelay: '100ms' }}>
            <div className="w-14 h-14 rounded-2xl bg-[#38bdf8]/10 border border-[#38bdf8]/20 flex items-center justify-center text-[#38bdf8] mb-6">
              <Handshake size={24} />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Consult or collaborate</h2>
            <p className="text-[#8896a8] text-sm leading-relaxed mb-5">
              Building something for the Zimbabwean market? Need a technical partner, a second opinion, or a consulting conversation? I'm open to it — no project too small to discuss.
            </p>
            <ul className="space-y-2 mb-6">
              {['Technical consulting & architecture review', 'Collaboration on Zimbabwe-focused products', 'Code review & second opinions', 'Mentorship and knowledge sharing'].map(item => (
                <li key={item} className="flex items-center gap-2 text-[#a8b3c7] text-sm">
                  <CheckCircle2 size={15} className="text-[#38bdf8] flex-shrink-0" /> {item}
                </li>
              ))}
            </ul>
            <a
              href={PROFILE.social.email}
              className="inline-flex items-center gap-2 px-5 py-3 border border-[#38bdf8]/30 text-[#38bdf8] text-sm font-semibold rounded-lg hover:bg-[#38bdf8]/10 transition-all"
            >
              Start a conversation <ArrowRight size={15} />
            </a>
          </div>
        </div>
      </section>

      {/* ─── What happens next ─── */}
      <section className="max-w-3xl mx-auto px-6 pb-16">
        <div className="reveal text-center mb-10">
          <span className="text-[#fb923c] text-xs font-semibold uppercase tracking-[0.25em]">Expectations</span>
          <h2 className="text-2xl font-bold text-white mt-3">What happens after you reach out</h2>
        </div>

        <div className="space-y-4">
          {[
            { icon: <Mail size={18} />, step: 'You send a message', body: "Email is the best way to reach me. Tell me who you are, what you're working on, and what you need — even if it's just an exploratory conversation." },
            { icon: <MessageSquare size={18} />, step: 'I respond within 48 hours', body: "I read every message and reply personally. If there's a fit, we'll set up a call or exchange details to dig deeper." },
            { icon: <Lightbulb size={18} />, step: 'We scope the work together', body: "Whether it's a role, a project, or a collaboration, we figure out scope, timeline, and expectations before anything starts." },
            { icon: <Code2 size={18} />, step: 'We build something real', body: 'I commit to clear communication, honest timelines, and shipping work that holds up in production.' },
          ].map((item, i) => (
            <div key={item.step} className="reveal glass glass-hover rounded-2xl p-5 flex items-start gap-4" style={{ transitionDelay: `${i * 80}ms` }}>
              <div className="w-10 h-10 rounded-lg bg-[#fb923c]/10 border border-[#fb923c]/20 flex items-center justify-center text-[#fb923c] flex-shrink-0">
                {item.icon}
              </div>
              <div>
                <h3 className="text-white font-semibold text-sm mb-1">{item.step}</h3>
                <p className="text-[#8896a8] text-sm leading-relaxed">{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Contact channels ─── */}
      <section className="max-w-4xl mx-auto px-6 pb-16">
        <div className="reveal text-center mb-10">
          <div className="flex items-center justify-center gap-2 mb-2">
            <MessageSquare size={20} className="text-[#00d9b2]" />
            <span className="text-[#00d9b2] text-xs font-semibold uppercase tracking-[0.25em]">Direct Channels</span>
          </div>
          <h2 className="text-2xl font-bold text-white">Reach me directly</h2>
        </div>

        <div className="grid sm:grid-cols-3 gap-4">
          <ContactCard icon={<Mail size={20} />} label="Email" value={PROFILE.email} href={PROFILE.social.email} color="#00d9b2" />
          <ContactCard icon={<Phone size={20} />} label="Phone" value={PROFILE.phone} href={`tel:${PROFILE.phone.replace(/\s/g, '')}`} color="#fb923c" />
          <ContactCard icon={<MapPin size={20} />} label="Location" value={PROFILE.location} color="#38bdf8" />
        </div>
      </section>

      {/* ─── Social links ─── */}
      <section className="max-w-4xl mx-auto px-6 pb-24">
        <div className="reveal text-center mb-8">
          <span className="text-[#8896a8] text-xs font-semibold uppercase tracking-[0.25em]">Find me online</span>
        </div>

        <div className="grid sm:grid-cols-3 gap-4">
          <SocialCard icon={<Github size={22} />} label="GitHub" href={PROFILE.social.github} />
          <SocialCard icon={<Linkedin size={22} />} label="LinkedIn" href={PROFILE.social.linkedin} />
          <SocialCard icon={<Instagram size={22} />} label="Instagram" href={PROFILE.social.instagram} />
        </div>
      </section>
    </div>
  );
}

function ContactCard({ icon, label, value, href, color }: { icon: React.ReactNode; label: string; value: string; href?: string; color: string }) {
  const inner = (
    <div className="glass glass-hover rounded-2xl p-5 flex flex-col items-center text-center gap-3 h-full">
      <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: `${color}15`, border: `1px solid ${color}30`, color }}>
        {icon}
      </div>
      <div>
        <div className="text-xs text-[#8896a8] mb-1">{label}</div>
        <div className="text-sm font-medium text-white">{value}</div>
      </div>
    </div>
  );
  return href ? <a href={href} className="block">{inner}</a> : inner;
}

function SocialCard({ icon, label, href }: { icon: React.ReactNode; label: string; href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="glass glass-hover rounded-2xl p-5 flex items-center gap-4 group"
    >
      <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/8 flex items-center justify-center text-[#8896a8] group-hover:text-[#00d9b2] transition-colors">
        {icon}
      </div>
      <div>
        <div className="text-white font-semibold text-sm">{label}</div>
        <div className="text-[#8896a8] text-xs flex items-center gap-1 mt-0.5">
          Visit profile <ArrowRight size={12} />
        </div>
      </div>
    </a>
  );
}
