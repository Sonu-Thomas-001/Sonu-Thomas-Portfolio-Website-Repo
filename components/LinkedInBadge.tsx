import React, { useEffect, useRef, useState } from 'react';
import { Linkedin, ExternalLink, CheckCircle2 } from 'lucide-react';

interface LinkedInBadgeProps {
  theme?: 'dark' | 'light';
  size?: 'medium' | 'large';
  type?: 'HORIZONTAL' | 'VERTICAL';
  className?: string;
}

export const LinkedInBadge: React.FC<LinkedInBadgeProps> = ({
  theme = 'dark',
  size = 'large',
  type = 'HORIZONTAL',
  className = '',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);

  useEffect(() => {
    const scriptId = 'linkedin-profile-badge-script';
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;

    const executeParse = () => {
      setIsScriptLoaded(true);
      if (typeof window !== 'undefined' && (window as any).IN?.parse) {
        try {
          (window as any).IN.parse(containerRef.current);
        } catch (e) {
          console.warn('LinkedIn badge parse notice:', e);
        }
      }
    };

    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://platform.linkedin.com/badges/js/profile.js';
      script.async = true;
      script.defer = true;
      script.onload = executeParse;
      document.body.appendChild(script);
    } else {
      executeParse();
    }

    // Secondary re-trigger in case script was already loaded
    const timeout = setTimeout(() => {
      if ((window as any).IN?.parse && containerRef.current) {
        (window as any).IN.parse(containerRef.current);
      }
    }, 600);

    return () => clearTimeout(timeout);
  }, [theme, size, type]);

  const isDark = theme === 'dark';

  return (
    <div 
      ref={containerRef} 
      className={`linkedin-badge-container relative overflow-hidden rounded-2xl ${className}`}
    >
      <div
        className="badge-base LI-profile-badge"
        data-locale="en_US"
        data-size={size}
        data-theme={theme}
        data-type={type}
        data-vanity="sonuthomasai"
        data-version="v1"
      >
        {/* Elegant Fallback Card if script is delayed or blocked by ad-blockers */}
        <a
          className="badge-base__link LI-simple-link block p-5 rounded-2xl border transition-all duration-300 no-underline group shadow-soft-sm"
          style={{
            backgroundColor: isDark ? '#1C1917' : '#FEFCF9',
            borderColor: isDark ? '#3D3732' : '#E8E0D8',
            color: isDark ? '#EDE5DC' : '#1A1614',
          }}
          href="https://in.linkedin.com/in/sonuthomasai?trk=profile-badge"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex items-center justify-between gap-4 mb-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#0A66C2] text-white flex items-center justify-center shadow-sm shrink-0">
                <Linkedin className="w-4 h-4 fill-white" />
              </div>
              <div>
                <span className="font-display font-bold text-sm block leading-tight">
                  Sonu Thomas
                </span>
                <span className={`text-[10px] font-mono flex items-center gap-1 ${isDark ? 'text-emerald-400' : 'text-emerald-700'}`}>
                  <CheckCircle2 className="w-3 h-3" />
                  Verified Public Profile
                </span>
              </div>
            </div>
            <ExternalLink className={`w-4 h-4 ${isDark ? 'text-copper' : 'text-copper'} group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform`} />
          </div>

          <p className={`text-xs leading-relaxed font-light mb-3 ${isDark ? 'text-[#D5CDC5]' : 'text-[#57534E]'}`}>
            AI Software Engineer at HCLTech &bull; BSc (Hons) Data Science &amp; AI, IIT Guwahati
          </p>

          <div className="flex items-center justify-between pt-2.5 border-t border-dashed border-[#E8E0D8]/20 text-[11px] font-mono">
            <span className={isDark ? 'text-copper' : 'text-copper'}>linkedin.com/in/sonuthomasai</span>
            <span className="px-2.5 py-1 rounded-md bg-[#0A66C2] text-white font-semibold text-[10px] group-hover:bg-[#004182] transition-colors">
              View Profile
            </span>
          </div>
        </a>
      </div>
    </div>
  );
};
