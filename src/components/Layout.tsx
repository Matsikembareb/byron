import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS, PROFILE } from '../data';
import type { Page } from '../data';

export function Navbar({ current, onNavigate }: { current: Page; onNavigate: (p: Page) => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (page: Page) => {
    onNavigate(page);
    setOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#0b1120]/95 backdrop-blur-md border-b border-white/5' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <button onClick={() => go('home')} className="font-syne text-xl font-bold tracking-tight flex items-center gap-1">
          <span className="gradient-text">BTM</span>
        </button>

        <ul className="hidden lg:flex gap-7">
          {NAV_ITEMS.map(item => (
            <li key={item.page}>
              <button
                onClick={() => go(item.page)}
                className={`nav-link text-sm font-medium transition-colors ${current === item.page || (current === 'project-detail' && item.page === 'projects') ? 'text-[#00d9b2] active' : 'text-[#8896a8] hover:text-white'}`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <button onClick={() => go('contact')} className="hidden lg:flex items-center gap-2 px-4 py-2 border border-[#00d9b2]/30 text-[#00d9b2] text-sm rounded-full hover:bg-[#00d9b2]/10 transition-all">
          Let's Talk
        </button>

        <button className="lg:hidden text-[#8896a8]" onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-[#0b1120]/98 border-t border-white/5 px-6 py-4 flex flex-col gap-4">
          {NAV_ITEMS.map(item => (
            <button key={item.page} onClick={() => go(item.page)} className={`text-left font-medium transition-colors ${current === item.page ? 'text-[#00d9b2]' : 'text-[#8896a8] hover:text-white'}`}>
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}

export function Footer({ onNavigate }: { onNavigate: (p: Page) => void }) {
  return (
    <footer className="border-t border-white/5 bg-[#080d18] py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="font-syne text-xl font-bold gradient-text mb-3">BTM</div>
            <p className="text-[#8896a8] text-sm leading-relaxed max-w-xs">
              {PROFILE.bio}
            </p>
          </div>

          {/* Nav links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Navigate</h4>
            <div className="grid grid-cols-2 gap-2">
              {NAV_ITEMS.map(item => (
                <button key={item.page} onClick={() => onNavigate(item.page)} className="text-left text-[#8896a8] hover:text-[#00d9b2] text-sm transition-colors">
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Connect</h4>
            <div className="flex flex-col gap-2 text-sm">
              <a href={PROFILE.social.email} className="text-[#8896a8] hover:text-[#00d9b2] transition-colors">{PROFILE.email}</a>
              <a href={`tel:${PROFILE.phone.replace(/\s/g, '')}`} className="text-[#8896a8] hover:text-[#00d9b2] transition-colors">{PROFILE.phone}</a>
              <span className="text-[#8896a8]">{PROFILE.location}</span>
            </div>
            <div className="flex gap-3 mt-4">
              <SocialLink href={PROFILE.social.github} label="GitHub">GH</SocialLink>
              <SocialLink href={PROFILE.social.linkedin} label="LinkedIn">in</SocialLink>
              <SocialLink href={PROFILE.social.instagram} label="Instagram">IG</SocialLink>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-[#8896a8] text-xs">
            &copy; {new Date().getFullYear()} {PROFILE.name}. All rights reserved.
          </p>
          <p className="text-[#8896a8] text-xs">Designed & built with care in Harare, Zimbabwe</p>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="w-9 h-9 rounded-lg glass glass-hover flex items-center justify-center text-[#8896a8] text-xs font-semibold hover:text-[#00d9b2]"
    >
      {children}
    </a>
  );
}

// Re-export for convenience
export { PROFILE };
