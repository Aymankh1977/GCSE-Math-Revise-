import { useEffect, useState } from 'react';

// A loving welcome for Mohammed, from his Dad. A different message shows each visit,
// cycling through the list so it stays fresh and encouraging.
const MESSAGES = [
  'you are so clever and capable',
  'your hard work is really paying off',
  'you make me so proud, every single day',
  'you can do anything you set your mind to',
  'you are braver and stronger than you know',
  'believe in yourself the way I believe in you',
  'every question you try makes you sharper',
  'keep going \u2014 you are doing brilliantly',
  'your determination amazes me',
  'you are my pride and joy',
];

const KEY = 'y8-revise:welcome-index';

export default function WelcomeFromDad() {
  const [msg, setMsg] = useState(MESSAGES[0]);

  useEffect(() => {
    let idx;
    try {
      const prev = parseInt(localStorage.getItem(KEY) ?? '-1', 10);
      idx = (Number.isNaN(prev) ? -1 : prev) + 1;
      if (idx >= MESSAGES.length) idx = 0;
      localStorage.setItem(KEY, String(idx));
    } catch {
      idx = Math.floor(Math.random() * MESSAGES.length);
    }
    setMsg(MESSAGES[idx]);
  }, []);

  return (
    <section className="welcome-mo rise relative overflow-hidden rounded-2xl border border-accent/30 p-6 sm:p-7">
      {/* floating bits */}
      <span className="float-bit" style={{ left: '8%', animationDelay: '0s' }}>⭐</span>
      <span className="float-bit" style={{ left: '24%', animationDelay: '1.6s' }}>🚀</span>
      <span className="float-bit" style={{ left: '52%', animationDelay: '0.8s' }}>🔥</span>
      <span className="float-bit" style={{ left: '74%', animationDelay: '2.2s' }}>🏆</span>
      <span className="float-bit" style={{ left: '90%', animationDelay: '1.1s' }}>💪</span>

      <div className="relative">
        <p className="font-display text-2xl sm:text-3xl text-ink">
          Hello Mohammed, <span className="italic text-accent">{msg}</span> 🚀
        </p>
        <p className="mt-3 font-display text-lg italic text-slate2">
          With all my love and every bit of pride in the world,
        </p>
        <p className="mt-1 font-display text-xl text-ink">
          Your loving Dad — Ayman <span className="whitespace-nowrap">❤️⭐</span>
        </p>
      </div>

      <style>{`
        .welcome-mo {
          background:
            radial-gradient(120% 140% at 0% 0%, rgba(31, 138, 76, 0.16), transparent 55%),
            radial-gradient(120% 140% at 100% 100%, rgba(47, 109, 181, 0.18), transparent 55%),
            linear-gradient(135deg, #eef7f0 0%, #eaf1fb 100%);
        }
        .dark .welcome-mo {
          background:
            radial-gradient(120% 140% at 0% 0%, rgba(60, 178, 104, 0.18), transparent 55%),
            radial-gradient(120% 140% at 100% 100%, rgba(47, 109, 181, 0.22), transparent 55%),
            linear-gradient(135deg, #14241b 0%, #131c28 100%);
        }
        .float-bit {
          position: absolute;
          bottom: -1.5rem;
          font-size: 1.1rem;
          opacity: 0;
          animation: floatUp 6s ease-in infinite;
          pointer-events: none;
          user-select: none;
        }
        @keyframes floatUp {
          0%   { transform: translateY(0) scale(0.8); opacity: 0; }
          15%  { opacity: 0.9; }
          80%  { opacity: 0.7; }
          100% { transform: translateY(-220px) scale(1.1) rotate(12deg); opacity: 0; }
        }
        @media (prefers-reduced-motion: reduce) {
          .float-bit { animation: none; opacity: 0.6; bottom: auto; top: 0.75rem; }
        }
      `}</style>
    </section>
  );
}
