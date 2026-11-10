import React, { useState, useEffect, useCallback, useRef, Component, type ReactNode } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { IntroLoader } from './components/intro';
import { CustomCursor } from './components/ui';
import { Navbar, Footer } from './components/layout';
import { JoinModal } from './components/common';
import { useMagneticButtons, use3DTilt, useScrollReveal } from './hooks';
import { playClickSound, playSparkSound, toggleSound, isSoundEnabled } from './lib/sound';

// 7 Page Modules
import {
  HomePage,
  AboutPage,
  ProjectsPage,
  EventsPage,
  TeamPage,
  GalleryPage,
  JoinPage,
} from './pages';

// ─── Error Boundary ────────────────────────────────────────────────────────
class ErrorBoundary extends Component<
  { children: ReactNode },
  { hasError: boolean; error: string }
> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { hasError: false, error: '' };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error: error.message };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error('[FYI ErrorBoundary]', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#F6F3EB] flex flex-col items-center justify-center p-8 font-mono text-center">
          <div className="border-4 border-[#111111] bg-white p-8 max-w-lg brutal-shadow-orange">
            <div className="text-[#FF4800] text-5xl font-black mb-4">⚡ CRASH</div>
            <h1 className="text-xl font-black uppercase tracking-tight mb-3">Something blew up</h1>
            <p className="text-sm text-[#6E6C65] mb-6 font-mono leading-relaxed">
              {this.state.error || 'An unexpected error occurred.'}
            </p>
            <button
              onClick={() => this.setState({ hasError: false, error: '' })}
              className="bg-[#111111] text-white font-black uppercase px-6 py-3 text-sm tracking-wider hover:bg-[#FF4800] transition-colors"
            >
              RETRY ↗
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

// ─── Trigger original logo intro on route/tab change ────────────────────────
function RouteChangeListener({ onTriggerIntro }: { onTriggerIntro: () => void }) {
  const location = useLocation();
  const isFirstRender = useRef(true);

  useEffect(() => {
    // Avoid re-triggering on initial mount since it plays on boot
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    onTriggerIntro();
  }, [location.pathname, onTriggerIntro]);

  return null;
}

// ─── Scroll to top on route change ─────────────────────────────────────────
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}

// ─── Main App ──────────────────────────────────────────────────────────────
export function App() {
  // Intro stage management: plays on every website load/refresh & on every tab/route navigation
  const [introKey, setIntroKey] = useState(0);
  const [introStage, setIntroStage] = useState<'playing' | 'lifting' | 'complete'>('playing');
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);
  const [prefilledEvent, setPrefilledEvent] = useState<string | undefined>(undefined);
  const [soundOn, setSoundOn] = useState(true);

  const triggerLogoIntro = useCallback(() => {
    setIntroKey((prev) => prev + 1);
    setIntroStage('playing');
  }, []);

  // Activate tactile magnetic pull physics on all .magnetic-btn elements
  useMagneticButtons();

  // Activate Two26 3D perspective tilt on [data-tilt] cards
  use3DTilt();

  // Activate scroll-driven editorial unmasking on .reveal-on-scroll elements
  useScrollReveal();

  // Global click haptic listener
  useEffect(() => {
    const handleGlobalClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (target?.closest('a, button, input, select, textarea, [role="button"]')) {
        playClickSound();
      }
    };
    window.addEventListener('click', handleGlobalClick, { capture: true });
    return () => window.removeEventListener('click', handleGlobalClick, { capture: true });
  }, []);

  const handleOpenJoin = (eventTitle?: string) => {
    setPrefilledEvent(eventTitle);
    setIsJoinModalOpen(true);
  };

  const handleSoundToggle = () => {
    const next = toggleSound();
    setSoundOn(next);
  };

  return (
    <BrowserRouter>
      <ErrorBoundary>
        <ScrollToTop />
        <RouteChangeListener onTriggerIntro={triggerLogoIntro} />
        <div className="min-h-screen bg-paper-noise font-body text-primary selection:bg-brand-yellow selection:text-primary relative flex flex-col justify-between overflow-x-hidden">

          {/* 1. Framer Vector Assembly Intro Overlay (plays on every website load & tab switch) */}
          {introStage !== 'complete' && (
            <ErrorBoundary>
              <IntroLoader
                key={introKey}
                onTransitionStart={() => {
                  setIntroStage('lifting');
                  playSparkSound();
                }}
                onComplete={() => {
                  setIntroStage('complete');
                }}
              />
            </ErrorBoundary>
          )}

          {/* 2. Bespoke Interactive Cursor */}
          <CustomCursor />

          {/* 3. Theatrical Page Content Wrapper with entrance interpolation */}
          <div
            className="w-full flex-grow flex flex-col justify-between transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{
              opacity: introStage === 'playing' ? 0.92 : 1,
              transform:
                introStage === 'playing'
                  ? 'scale(0.985) translateY(24px)'
                  : 'scale(1) translateY(0px)',
              filter: introStage === 'playing' ? 'blur(1px)' : 'none',
              transition: 'opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1), transform 0.95s cubic-bezier(0.16, 1, 0.3, 1), filter 0.8s ease',
            }}
          >
            {/* Sticky Shared Navigation */}
            <Navbar />

            {/* Modular 7-Page Routing Engine */}
            <main className="w-full flex-grow">
              <Routes>
                <Route path="/" element={<ErrorBoundary><HomePage onOpenJoin={handleOpenJoin} /></ErrorBoundary>} />
                <Route path="/about" element={<ErrorBoundary><AboutPage /></ErrorBoundary>} />
                <Route path="/projects" element={<ErrorBoundary><ProjectsPage /></ErrorBoundary>} />
                <Route path="/events" element={<ErrorBoundary><EventsPage /></ErrorBoundary>} />
                <Route path="/team" element={<ErrorBoundary><TeamPage /></ErrorBoundary>} />
                <Route path="/gallery" element={<ErrorBoundary><GalleryPage /></ErrorBoundary>} />
                <Route path="/join" element={<ErrorBoundary><JoinPage /></ErrorBoundary>} />
                {/* 404 fallback */}
                <Route
                  path="*"
                  element={
                    <div className="min-h-[60vh] flex flex-col items-center justify-center font-mono text-center p-8">
                      <div className="text-8xl font-black text-brand-orange mb-4">404</div>
                      <p className="text-xl font-bold uppercase tracking-tight mb-6">PAGE NOT FOUND</p>
                      <a
                        href="/"
                        className="bg-primary text-white px-6 py-3 font-black uppercase text-sm tracking-wider hover:bg-brand-orange transition-colors"
                      >
                        GO HOME ↗
                      </a>
                    </div>
                  }
                />
              </Routes>
            </main>

            {/* Shared Terminal Footer */}
            <Footer />
          </div>

          {/* 4. Cohort Application & Event RSVP Modal */}
          <JoinModal
            isOpen={isJoinModalOpen}
            onClose={() => setIsJoinModalOpen(false)}
            prefilledEvent={prefilledEvent}
          />

          {/* 5. Floating Tactical Audio Controls */}
          <div className="fixed bottom-4 right-4 z-40 flex items-center gap-2">
            {/* Sound Synthesizer Toggle */}
            <button
              onClick={handleSoundToggle}
              className="bg-white hover:bg-brand-yellow text-primary border-2 border-primary brutal-shadow-sm font-mono text-[10px] font-bold px-2.5 py-1.5 uppercase rounded transition-all opacity-85 hover:opacity-100 flex items-center gap-1.5"
              title={soundOn ? 'Mute tactile interaction sound' : 'Enable tactile interaction sound'}
            >
              <span>{soundOn ? '🔊' : '🔇'}</span>
              <span className="hidden sm:inline">{soundOn ? 'FX ON' : 'FX OFF'}</span>
            </button>
          </div>
        </div>
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;
