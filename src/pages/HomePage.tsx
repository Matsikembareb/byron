import { ArrowRight, Mail, MapPin, Sparkles, Handshake, Users, Heart, GraduationCap, Award, Code2, Briefcase } from 'lucide-react';
import { PROFILE, PROJECTS, SKILLS, EDUCATION, CERTIFICATIONS, CLUBS } from '../data';
import type { Page } from '../data';
import { useTypewriter } from '../hooks';

export function HomePage({ onNavigate }: { onNavigate: (p: Page, slug?: string) => void }) {
  const typed = useTypewriter(['Full-Stack Developer', 'Python Builder', 'Problem Solver', 'CS Student @ HIT']);
  const liveProjects = PROJECTS.filter(p => p.live);
  const otherProjects = PROJECTS.filter(p => !p.live);

  return (
    <div className="min-h-screen">
      {/* ─── Hero ─── */}
      <section className="relative min-h-screen flex items-center overflow-hidden noise">
        {/* Background portrait — mostly visible on landing */}
        <div className="absolute inset-0">
          <img
            src={PROFILE.portrait}
            alt="Portrait placeholder"
            className="absolute right-0 top-0 h-full w-full md:w-3/5 object-cover object-center opacity-30 md:opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0b1120] via-[#0b1120]/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b1120] via-transparent to-[#0b1120]/50" />
        </div>

        {/* Floating accent blobs */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-[#00d9b2]/8 rounded-full blur-3xl pointer-events-none animate-drift" />
        <div className="absolute bottom-1/4 right-1/3 w-60 h-60 bg-[#38bdf8]/6 rounded-full blur-3xl pointer-events-none animate-drift" style={{ animationDelay: '3s' }} />

        {/* Content pushed left so portrait shows more on the right */}
        <div className="relative w-full max-w-6xl mx-auto px-6 pt-24 pb-16 z-10">
          <div className="max-w-xl animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#00d9b2]/10 border border-[#00d9b2]/20 rounded-full text-[#00d9b2] text-xs font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-[#00d9b2] animate-pulse" />
              Available for hire & collaboration
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] mb-5">
              Byron
              <br />
              <span className="gradient-text">Matsikembare</span>
            </h1>

            <div className="flex items-center gap-2 text-xl md:text-2xl text-[#8896a8] mb-6 min-h-[2.2rem] font-medium">
              <span>{typed}</span>
              <span className="cursor-blink text-[#00d9b2]">|</span>
            </div>

            <p className="text-[#a8b3c7] leading-relaxed mb-9 max-w-md text-lg">
              {PROFILE.bio}
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <button
                onClick={() => onNavigate('projects')}
                className="flex items-center gap-2 px-6 py-3.5 bg-[#00d9b2] text-[#0b1120] font-semibold rounded-xl hover:bg-[#00f0c2] transition-all hover:scale-105 active:scale-95"
              >
                View My Work <ArrowRight size={17} />
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="flex items-center gap-2 px-6 py-3.5 border border-white/12 text-white rounded-xl hover:border-[#00d9b2]/40 hover:bg-white/5 transition-all"
              >
                <Mail size={17} /> Get in Touch
              </button>
            </div>

            <div className="flex items-center gap-8">
              <Stat value="3+" label="Live Systems" />
              <div className="w-px h-12 bg-white/10" />
              <Stat value="5" label="Projects Built" />
              <div className="w-px h-12 bg-white/10" />
              <Stat value="4+" label="Certifications" />
            </div>
          </div>
        </div>
      </section>

      {/* ─── About preview ─── */}
      <Section id="about-preview">
        <SectionHeader
          eyebrow="Who I Am"
          title={<>Building software that serves <span className="gradient-text">real people</span>.</>}
          onMore={() => onNavigate('about')}
          moreLabel="More about me"
        />
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="reveal">
            <p className="text-[#a8b3c7] leading-relaxed mb-4">
              I'm a Computer Science student at the Harare Institute of Technology with a track record of shipping production web systems for the Zimbabwean market — from community platforms to live streaming infrastructure.
            </p>
            <p className="text-[#a8b3c7] leading-relaxed mb-6">
              My focus is full-stack development with Python and Flask, and I care deeply about building things that work in real conditions: low bandwidth, real users, real constraints.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {[
                { k: 'Based in', v: 'Harare, ZW', icon: <MapPin size={15} /> },
                { k: 'Focus', v: 'Full-Stack', icon: <Sparkles size={15} /> },
                { k: 'Primary', v: 'Python / Flask', icon: <Code2 size={15} /> },
                { k: 'Open to', v: 'Collaborate', icon: <Handshake size={15} /> },
              ].map(item => (
                <div key={item.k} className="glass glass-hover rounded-xl p-4">
                  <div className="text-[#00d9b2] mb-1.5">{item.icon}</div>
                  <div className="text-xs text-[#8896a8] mb-0.5">{item.k}</div>
                  <div className="text-white font-semibold text-sm">{item.v}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Clubs & societies preview */}
          <div className="reveal" style={{ transitionDelay: '100ms' }}>
            <div className="flex items-center gap-2 mb-4">
              <Users size={18} className="text-[#00d9b2]" />
              <span className="text-white font-semibold text-sm">Clubs & Societies</span>
            </div>
            <div className="space-y-3">
              {CLUBS.map(club => (
                <div key={club.name} className="glass glass-hover rounded-xl p-4 flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#00d9b2]/10 border border-[#00d9b2]/20 flex items-center justify-center text-[#00d9b2] flex-shrink-0">
                    {club.name.includes('Friendship') ? <Heart size={16} /> : <Users size={16} />}
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">{club.name}</div>
                    <div className="text-[#00d9b2] text-xs mb-1">{club.role}</div>
                    <p className="text-[#8896a8] text-xs leading-relaxed">{club.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ─── Skills preview ─── */}
      <Section id="skills-preview" alt>
        <SectionHeader
          eyebrow="Technical Expertise"
          title="Skills & capabilities"
          subtitle="From Python and Flask to soft skills — the full toolkit I bring to every project."
          onMore={() => onNavigate('skills')}
          moreLabel="All skills"
        />
        <div className="grid md:grid-cols-3 gap-6">
          {/* Strong suites */}
          <div className="reveal glass rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles size={16} className="text-[#00d9b2]" />
              <h3 className="text-white font-semibold text-sm">Strong Suites</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {SKILLS.strong.map(s => (
                <span key={s.name} className="px-3 py-1.5 bg-[#00d9b2]/8 border border-[#00d9b2]/20 text-[#00d9b2] text-xs rounded-lg font-medium">{s.name}</span>
              ))}
            </div>
          </div>

          {/* Other */}
          <div className="reveal glass rounded-2xl p-6" style={{ transitionDelay: '80ms' }}>
            <div className="flex items-center gap-2 mb-4">
              <Code2 size={16} className="text-[#38bdf8]" />
              <h3 className="text-white font-semibold text-sm">Also Work With</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {SKILLS.other.map(s => (
                <span key={s.name} className="px-3 py-1.5 bg-white/5 border border-white/8 text-[#8896a8] text-xs rounded-lg">{s.name}</span>
              ))}
            </div>
          </div>

          {/* Soft skills */}
          <div className="reveal glass rounded-2xl p-6" style={{ transitionDelay: '160ms' }}>
            <div className="flex items-center gap-2 mb-4">
              <Heart size={16} className="text-[#fb923c]" />
              <h3 className="text-white font-semibold text-sm">Soft Skills</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {SKILLS.soft.map(s => (
                <span key={s.name} className="px-3 py-1.5 bg-[#fb923c]/8 border border-[#fb923c]/20 text-[#fb923c] text-xs rounded-lg font-medium">{s.name}</span>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ─── Projects preview ─── */}
      <Section id="projects-preview">
        <SectionHeader
          eyebrow="What I've Built"
          title="Projects"
          subtitle="Live production systems and collaborative builds — each with a full article behind it."
          onMore={() => onNavigate('projects')}
          moreLabel="All projects"
        />

        {/* Live systems */}
        <div className="reveal flex items-center gap-2 mb-6">
          <div className="w-2 h-2 rounded-full bg-[#00d9b2] animate-pulse" />
          <span className="text-[#00d9b2] text-sm font-semibold">Live Systems I Helped Build</span>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {liveProjects.map((project, i) => (
            <ProjectMini key={project.slug} project={project} index={i} onNavigate={onNavigate} />
          ))}
        </div>

        {/* Other projects */}
        <div className="reveal flex items-center gap-2 mb-6">
          <div className="w-2 h-2 rounded-full bg-[#fb923c]" />
          <span className="text-[#fb923c] text-sm font-semibold">Other Projects</span>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {otherProjects.map((project, i) => (
            <ProjectMini key={project.slug} project={project} index={i} onNavigate={onNavigate} compact />
          ))}
        </div>
      </Section>

      {/* ─── Education preview ─── */}
      <Section id="education-preview" alt>
        <SectionHeader
          eyebrow="Academic Journey"
          title="Education"
          subtitle="From secondary school through to a Computer Science degree at HIT."
          onMore={() => onNavigate('education')}
          moreLabel="Full education"
        />
        <div className="space-y-4">
          {EDUCATION.map((edu, i) => (
            <div key={i} className="reveal glass glass-hover rounded-xl p-5 flex items-start gap-4" style={{ transitionDelay: `${i * 80}ms` }}>
              <div className="w-10 h-10 rounded-lg bg-[#00d9b2]/10 border border-[#00d9b2]/20 flex items-center justify-center text-[#00d9b2] flex-shrink-0">
                <GraduationCap size={18} />
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between gap-3 flex-wrap">
                  <h3 className="text-white font-semibold text-sm leading-snug">{edu.degree}</h3>
                  {edu.current && (
                    <span className="px-2 py-0.5 bg-[#00d9b2]/10 border border-[#00d9b2]/20 text-[#00d9b2] text-xs rounded-full flex-shrink-0">Current</span>
                  )}
                </div>
                <p className="text-[#00d9b2] text-sm mt-1">{edu.institution}</p>
                <p className="text-[#8896a8] text-xs mt-1">{edu.location} · {edu.period}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ─── Qualifications preview ─── */}
      <Section id="qualifications-preview">
        <SectionHeader
          eyebrow="Certifications"
          title="Qualifications"
          subtitle="Professional certifications — separate from formal academic education."
          onMore={() => onNavigate('qualifications')}
          moreLabel="All qualifications"
        />
        <div className="grid md:grid-cols-3 gap-4">
          {CERTIFICATIONS.map((cert, i) => (
            <div key={cert.title} className="reveal glass glass-hover rounded-xl p-5" style={{ transitionDelay: `${i * 80}ms` }}>
              <div className="w-10 h-10 rounded-lg bg-[#fb923c]/10 border border-[#fb923c]/20 flex items-center justify-center text-[#fb923c] mb-3">
                <Award size={18} />
              </div>
              <h3 className="text-white font-semibold text-sm mb-1 leading-snug">{cert.title}</h3>
              <div className="text-[#fb923c] text-xs mb-2">{cert.issuer}</div>
              <p className="text-[#8896a8] text-xs leading-relaxed line-clamp-2">{cert.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ─── Contact preview (two CTAs) ─── */}
      <Section id="contact-preview" alt>
        <SectionHeader
          eyebrow="Let's Connect"
          title="Get in touch"
          subtitle="Whether you're hiring, exploring a collaboration, or just want to connect — my inbox is always open."
        />
        <div className="grid md:grid-cols-2 gap-6">
          <div className="reveal glass rounded-2xl p-8 border border-[#00d9b2]/15 glow-accent">
            <div className="w-12 h-12 rounded-xl bg-[#00d9b2]/10 border border-[#00d9b2]/20 flex items-center justify-center text-[#00d9b2] mb-5">
              <Briefcase size={20} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Looking to hire?</h3>
            <p className="text-[#8896a8] text-sm leading-relaxed mb-5">
              If you have a role or a project that needs a full-stack developer who ships, I'd love to hear from you.
            </p>
            <button onClick={() => onNavigate('contact')} className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#00d9b2] text-[#0b1120] text-sm font-semibold rounded-lg hover:bg-[#00f0c2] transition-all">
              Let's talk <ArrowRight size={15} />
            </button>
          </div>

          <div className="reveal glass rounded-2xl p-8 border border-[#38bdf8]/15" style={{ transitionDelay: '100ms' }}>
            <div className="w-12 h-12 rounded-xl bg-[#38bdf8]/10 border border-[#38bdf8]/20 flex items-center justify-center text-[#38bdf8] mb-5">
              <Handshake size={20} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Want to consult or collaborate?</h3>
            <p className="text-[#8896a8] text-sm leading-relaxed mb-5">
              Building something for the Zimbabwean market or need a technical partner? I'm open to collaboration and consulting conversations.
            </p>
            <button onClick={() => onNavigate('contact')} className="inline-flex items-center gap-2 px-5 py-2.5 border border-[#38bdf8]/30 text-[#38bdf8] text-sm font-semibold rounded-lg hover:bg-[#38bdf8]/10 transition-all">
              Start a conversation <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </Section>
    </div>
  );
}

// ─── Sub-components ──────────────────────────────────────────────────────────

function Section({ id, alt, children }: { id: string; alt?: boolean; children: React.ReactNode }) {
  return (
    <section id={id} className={`py-24 px-6 ${alt ? 'bg-[#080d18]' : ''}`}>
      <div className="max-w-6xl mx-auto">{children}</div>
    </section>
  );
}

function SectionHeader({ eyebrow, title, subtitle, onMore, moreLabel }: {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
  onMore?: () => void;
  moreLabel?: string;
}) {
  return (
    <div className="reveal flex flex-col items-center text-center mb-12">
      <span className="text-[#00d9b2] text-xs font-semibold uppercase tracking-[0.25em]">{eyebrow}</span>
      <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 leading-tight">{title}</h2>
      {subtitle && <p className="text-[#8896a8] mt-3 max-w-xl">{subtitle}</p>}
      {onMore && moreLabel && (
        <button onClick={onMore} className="text-[#00d9b2] font-medium text-sm flex items-center gap-2 hover:gap-3 transition-all mt-5">
          {moreLabel} <ArrowRight size={15} />
        </button>
      )}
    </div>
  );
}

function ProjectMini({ project, index, onNavigate, compact }: {
  project: typeof PROJECTS[0];
  index: number;
  onNavigate: (p: Page, slug?: string) => void;
  compact?: boolean;
}) {
  return (
    <button
      onClick={() => onNavigate('project-detail', project.slug)}
      className="reveal group text-left rounded-2xl overflow-hidden glass glass-hover"
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className={`relative overflow-hidden ${compact ? 'h-40' : 'h-52'}`}>
        <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b1120] via-[#0b1120]/30 to-transparent" />
        {project.live && (
          <div className="absolute top-4 left-4 px-2 py-1 rounded-full text-xs font-medium backdrop-blur-sm flex items-center gap-1.5" style={{ background: `${project.accent}25`, color: project.accent, border: `1px solid ${project.accent}40` }}>
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: project.accent }} /> Live
          </div>
        )}
      </div>
      <div className="p-5">
        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#00d9b2] transition-colors">{project.title}</h3>
        <p className="text-[#8896a8] text-sm leading-relaxed line-clamp-2">{project.tagline}</p>
        <div className="mt-3 text-[#00d9b2] text-xs font-medium flex items-center gap-1">
          Read article <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </button>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="text-2xl font-bold text-white">{value}</div>
      <div className="text-xs text-[#8896a8] mt-0.5">{label}</div>
    </div>
  );
}
