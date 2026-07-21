import { GraduationCap, MapPin, BookOpen, Award, TrendingUp } from 'lucide-react';
import { EDUCATION } from '../data';
import { PageHeader } from '../components/PageHeader';

export function EducationPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Academic Journey"
        title="Education"
        subtitle="My academic path — from secondary school through to a Computer Science degree at the Harare Institute of Technology."
      />

      {/* ─── Intro ─── */}
      <section className="max-w-3xl mx-auto px-6 pb-12">
        <div className="reveal glass rounded-2xl p-8 border border-[#00d9b2]/15">
          <div className="flex items-center gap-2 mb-3">
            <BookOpen size={18} className="text-[#00d9b2]" />
            <span className="text-[#00d9b2] text-xs font-semibold uppercase tracking-[0.25em]">My approach to learning</span>
          </div>
          <p className="text-[#a8b3c7] leading-relaxed">
            My academic foundation has been built across three institutions in Zimbabwe, each contributing a different layer — from the discipline of secondary school to the hands-on, technology-first environment of the Harare Institute of Technology. Formal education gave me structure; building real systems gave me depth. I treat both as equally important.
          </p>
        </div>
      </section>

      {/* ─── Academic Timeline ─── */}
      <section className="max-w-3xl mx-auto px-6 pb-16">
        <div className="reveal text-center mb-10">
          <div className="flex items-center justify-center gap-2 mb-2">
            <GraduationCap size={20} className="text-[#00d9b2]" />
            <span className="text-[#00d9b2] text-xs font-semibold uppercase tracking-[0.25em]">Timeline</span>
          </div>
          <h2 className="text-2xl font-bold text-white">Academic Timeline</h2>
        </div>

        <div className="space-y-6">
          {EDUCATION.map((edu, i) => (
            <div
              key={i}
              className={`reveal relative pl-8 border-l-2 transition-all ${edu.current ? 'border-[#00d9b2]' : 'border-white/10'}`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className={`absolute -left-[9px] top-1 w-4 h-4 rounded-full border-2 ${edu.current ? 'bg-[#00d9b2] border-[#00d9b2]' : 'bg-[#0b1120] border-white/20'}`} />

              <div className="glass glass-hover rounded-2xl p-6">
                {edu.current && (
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-[#00d9b2]/10 border border-[#00d9b2]/20 text-[#00d9b2] text-xs rounded-full mb-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00d9b2] animate-pulse" /> Current
                  </span>
                )}
                <h3 className="text-white font-bold text-lg mb-2 leading-snug">{edu.degree}</h3>
                <p className="text-[#00d9b2] font-medium">{edu.institution}</p>
                <div className="flex items-center justify-between mt-3 flex-wrap gap-2">
                  <span className="text-[#8896a8] text-sm flex items-center gap-1.5">
                    <MapPin size={13} /> {edu.location}
                  </span>
                  <span className="text-[#8896a8] text-sm">{edu.period}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Academic highlights ─── */}
      <section className="max-w-3xl mx-auto px-6 pb-16">
        <div className="reveal text-center mb-10">
          <div className="flex items-center justify-center gap-2 mb-2">
            <TrendingUp size={20} className="text-[#38bdf8]" />
            <span className="text-[#38bdf8] text-xs font-semibold uppercase tracking-[0.25em]">Achievements</span>
          </div>
          <h2 className="text-2xl font-bold text-white">Academic highlights</h2>
        </div>

        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { value: '21', label: 'A-Level Points', sub: "5 subjects, St Faith's High" },
            { value: '8A 7B', label: 'O-Level Results', sub: 'Kriste Mambo High' },
            { value: 'Honours', label: 'Degree Track', sub: 'Bachelor of Technology, HIT' },
          ].map((stat, i) => (
            <div key={stat.label} className="reveal glass glass-hover rounded-2xl p-6 text-center" style={{ transitionDelay: `${i * 100}ms` }}>
              <div className="text-3xl font-bold gradient-text mb-2">{stat.value}</div>
              <div className="text-white font-semibold text-sm">{stat.label}</div>
              <div className="text-[#8896a8] text-xs mt-1">{stat.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── What I'm studying ─── */}
      <section className="max-w-3xl mx-auto px-6 pb-16">
        <div className="reveal text-center mb-10">
          <span className="text-[#fb923c] text-xs font-semibold uppercase tracking-[0.25em]">Currently</span>
          <h2 className="text-2xl font-bold text-white mt-3">What I'm studying now</h2>
        </div>

        <div className="reveal glass rounded-2xl p-6">
          <p className="text-[#a8b3c7] leading-relaxed mb-4">
            At the Harare Institute of Technology, my Computer Science coursework covers the full spectrum of modern computing — from algorithms and data structures to database systems, software engineering, and web development. The program is hands-on and project-driven, which aligns perfectly with how I learn best: by building.
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            {['Data Structures & Algorithms', 'Database Systems', 'Software Engineering', 'Web Development', 'Operating Systems', 'Computer Networks', 'Object-Oriented Programming', 'Discrete Mathematics'].map(subject => (
              <span key={subject} className="px-3 py-1.5 bg-white/5 border border-white/8 text-[#8896a8] text-xs rounded-lg">{subject}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Note pointing to qualifications ─── */}
      <section className="max-w-3xl mx-auto px-6 pb-24">
        <div className="reveal glass rounded-2xl p-6 border border-[#38bdf8]/15 flex items-start gap-4">
          <div className="w-10 h-10 rounded-lg bg-[#38bdf8]/10 border border-[#38bdf8]/20 flex items-center justify-center text-[#38bdf8] flex-shrink-0">
            <Award size={18} />
          </div>
          <p className="text-[#a8b3c7] text-sm leading-relaxed">
            Looking for my <span className="text-[#38bdf8] font-medium">certifications and qualifications</span>? They're on a separate page — certifications are distinct from formal education, and I keep them organized accordingly.
          </p>
        </div>
      </section>
    </div>
  );
}
