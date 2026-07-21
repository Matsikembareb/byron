import { MapPin, ArrowRight, Users, Heart, GraduationCap, Target, Lightbulb, Globe, Code2 } from 'lucide-react';
import { PROFILE, CLUBS, PROJECTS } from '../data';
import type { Page } from '../data';
import { PageHeader } from '../components/PageHeader';

export function AboutPage({ onNavigate }: { onNavigate: (p: Page, slug?: string) => void }) {
  const liveProjects = PROJECTS.filter(p => p.live);

  return (
    <div>
      <PageHeader
        eyebrow="About Me"
        title="The person behind the code"
        subtitle="A developer who believes locally-built software can be just as polished and capable as anything built for a global audience."
      />

      {/* ─── Bio ─── */}
      <section className="max-w-4xl mx-auto px-6 pb-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="reveal md:col-span-1">
            <div className="rounded-2xl overflow-hidden glass">
              <img src={PROFILE.portrait} alt="Portrait placeholder" className="w-full h-72 object-cover" />
              <div className="p-4">
                <div className="text-white font-semibold">{PROFILE.name}</div>
                <div className="text-[#8896a8] text-sm flex items-center gap-1 mt-1">
                  <MapPin size={13} /> {PROFILE.location}
                </div>
              </div>
            </div>
          </div>

          <div className="reveal md:col-span-2" style={{ transitionDelay: '100ms' }}>
            <h2 className="text-2xl font-bold text-white mb-4">My story</h2>
            <div className="space-y-4 text-[#a8b3c7] leading-relaxed">
              <p>
                I'm Byron Tashinga Matsikembare, a Computer Science student at the Harare Institute of Technology and a full-stack developer with a focus on Python and Flask. I build web systems that work in real conditions — low bandwidth, real users, real constraints.
              </p>
              <p>
                My journey into software started with curiosity about how things work under the hood, and it evolved into a drive to build things that matter. My work spans community platforms, live streaming infrastructure, operations management tools, and deal aggregators. What ties it together is a commitment to building software that genuinely serves the people who use it — not software that looks impressive in a demo and falls apart in production.
              </p>
              <p>
                I'm particularly passionate about building for the Zimbabwean context. Too often, software for African markets is a retrofit of solutions designed elsewhere — tools that ignore local realities, local constraints, and local ways of doing things. I believe starting from local context is an advantage, not a limitation. The systems I've helped build, like chema.co.zw and Muzukuru, are proof of that principle.
              </p>
              <p>
                When I'm not coding, I'm active in community work. I volunteer as a counsellor with the Friendship Bench, providing mental health support, and I'm a member of Enactus HIT, where I apply technology and business skills toward community impact projects. I believe technical skills are most valuable when they're used to lift people up.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── What drives me (values) ─── */}
      <section className="max-w-4xl mx-auto px-6 pb-16">
        <div className="reveal text-center mb-10">
          <span className="text-[#00d9b2] text-xs font-semibold uppercase tracking-[0.25em]">Principles</span>
          <h2 className="text-2xl font-bold text-white mt-3">What drives me</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {[
            { icon: <Target size={20} />, title: 'Ship what matters', body: 'I prioritize features that solve real problems over features that look impressive. Working software that serves users beats a polished demo every time.' },
            { icon: <Globe size={20} />, title: 'Build for context', body: 'Software for Zimbabwe and Africa should start from local realities, not retrofit global solutions. Context is an advantage, not a constraint.' },
            { icon: <Lightbulb size={20} />, title: 'Learn by building', body: 'Every project is a chance to deepen my craft. I pick the stack that fits the problem, not the one that fits my comfort zone.' },
          ].map((value, i) => (
            <div key={value.title} className="reveal glass glass-hover rounded-2xl p-6" style={{ transitionDelay: `${i * 100}ms` }}>
              <div className="w-12 h-12 rounded-xl bg-[#00d9b2]/10 border border-[#00d9b2]/20 flex items-center justify-center text-[#00d9b2] mb-4">
                {value.icon}
              </div>
              <h3 className="text-white font-bold mb-2">{value.title}</h3>
              <p className="text-[#8896a8] text-sm leading-relaxed">{value.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Quick facts ─── */}
      <section className="max-w-4xl mx-auto px-6 pb-16">
        <div className="reveal text-center mb-8">
          <span className="text-[#38bdf8] text-xs font-semibold uppercase tracking-[0.25em]">At a glance</span>
        </div>
        <div className="reveal grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Name', value: 'Byron T. Matsikembare' },
            { label: 'Location', value: 'Harare, Zimbabwe' },
            { label: 'Field', value: 'Computer Science' },
            { label: 'Primary Stack', value: 'Python / Flask' },
            { label: 'Education', value: 'HIT (ongoing)' },
            { label: 'Focus', value: 'Full-Stack Web' },
            { label: 'Live Systems', value: '3+' },
            { label: 'Languages', value: 'Python, JS, SQL' },
          ].map(fact => (
            <div key={fact.label} className="glass glass-hover rounded-xl p-4">
              <div className="text-xs text-[#8896a8] mb-1">{fact.label}</div>
              <div className="text-white text-sm font-medium">{fact.value}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── How I work ─── */}
      <section className="max-w-4xl mx-auto px-6 pb-16">
        <div className="reveal text-center mb-10">
          <span className="text-[#fb923c] text-xs font-semibold uppercase tracking-[0.25em]">Process</span>
          <h2 className="text-2xl font-bold text-white mt-3">How I work</h2>
        </div>

        <div className="space-y-4">
          {[
            { step: '01', title: 'Understand the problem first', body: 'Before writing a single line of code, I invest time in understanding the actual problem — who the users are, what constraints they face, and what success looks like. The cheapest bug is the one you never write.' },
            { step: '02', title: 'Pick the right tool, not the trendy one', body: 'I reach for Flask and Python when server-rendered simplicity is the right call. I reach for React when interactivity demands it. The stack serves the problem, not the other way around.' },
            { step: '03', title: 'Build lean, ship fast, iterate', body: 'I favor small, shippable increments over long development cycles. Get something real in front of users, learn from feedback, and refine. This is how systems like chema.co.zw evolved.' },
            { step: '04', title: 'Optimize for real conditions', body: 'Low bandwidth, unstable connections, mobile-first users — I build with Zimbabwean network realities in mind. Performance is a feature, not an afterthought.' },
          ].map((item, i) => (
            <div key={item.step} className="reveal glass glass-hover rounded-2xl p-6 flex items-start gap-5" style={{ transitionDelay: `${i * 80}ms` }}>
              <div className="text-2xl font-bold gradient-text flex-shrink-0">{item.step}</div>
              <div>
                <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                <p className="text-[#8896a8] text-sm leading-relaxed">{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Clubs & Societies (separate) ─── */}
      <section className="max-w-4xl mx-auto px-6 pb-16">
        <div className="reveal text-center mb-10">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Users size={20} className="text-[#00d9b2]" />
            <span className="text-[#00d9b2] text-xs font-semibold uppercase tracking-[0.25em]">Beyond Code</span>
          </div>
          <h2 className="text-2xl font-bold text-white">Clubs &amp; Societies</h2>
          <p className="text-[#8896a8] mt-2 max-w-lg mx-auto">Life outside the editor — where I apply my energy to community and impact.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {CLUBS.map((club, i) => (
            <div key={club.name} className="reveal glass glass-hover rounded-2xl p-6" style={{ transitionDelay: `${i * 100}ms` }}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#00d9b2]/10 border border-[#00d9b2]/20 flex items-center justify-center text-[#00d9b2] flex-shrink-0">
                  {club.name.includes('Friendship') ? <Heart size={20} /> : <Users size={20} />}
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">{club.name}</h3>
                  <div className="text-[#00d9b2] text-sm font-medium mb-2">{club.role}</div>
                  <p className="text-[#8896a8] text-sm leading-relaxed">{club.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Notable work preview ─── */}
      <section className="max-w-4xl mx-auto px-6 pb-24">
        <div className="reveal text-center mb-10">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Code2 size={20} className="text-[#38bdf8]" />
            <span className="text-[#38bdf8] text-xs font-semibold uppercase tracking-[0.25em]">Notable Work</span>
          </div>
          <h2 className="text-2xl font-bold text-white">Systems I helped build</h2>
        </div>

        <div className="space-y-3">
          {liveProjects.map((project, i) => (
            <button
              key={project.slug}
              onClick={() => onNavigate('project-detail', project.slug)}
              className="reveal w-full flex items-center justify-between glass glass-hover rounded-xl p-5 text-left"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: project.accent }} />
                <div>
                  <div className="text-white font-semibold">{project.title}</div>
                  <div className="text-[#8896a8] text-sm">{project.tagline}</div>
                </div>
              </div>
              <ArrowRight size={18} className="text-[#00d9b2] flex-shrink-0" />
            </button>
          ))}
        </div>

        <div className="text-center mt-8">
          <button onClick={() => onNavigate('projects')} className="inline-flex items-center gap-2 px-5 py-2.5 border border-white/12 text-white rounded-xl hover:border-[#00d9b2]/40 hover:bg-white/5 transition-all text-sm">
            <GraduationCap size={16} /> View all projects
          </button>
        </div>
      </section>
    </div>
  );
}
