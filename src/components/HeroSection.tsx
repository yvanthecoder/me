import { ChevronDown } from 'lucide-react';
import { TypeWriter } from './TypeWriter';

interface HeroSectionProps {
  scrollToSection: (id: string) => void;
}

export function HeroSection({ scrollToSection }: HeroSectionProps) {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative bg-gradient-to-b from-slate-50 to-white dark:from-slate-800 dark:to-slate-900 overflow-hidden"
    >
      {/* Simple Static Background */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-slate-300/20 dark:bg-slate-600/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-slate-400/15 dark:bg-slate-700/15 rounded-full blur-3xl" />

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center pt-20 relative z-10">
        {/* Logo - Simple version without animations */}
        <div className="inline-block mb-8">
          <div className="w-20 h-20 sm:w-28 sm:h-28 bg-slate-900 dark:bg-white rounded-3xl flex items-center justify-center mx-auto shadow-2xl">
            <span className="text-4xl sm:text-5xl" style={{ color: 'white', fontFamily: 'monospace' }}>{'YD'}</span>
          </div>
        </div>

        {/* Name - No animation on mobile */}
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-6 text-slate-900 dark:text-white">
          Yvan Djopa
        </h1>

        {/* Title with TypeWriter */}
        <div className="text-xl sm:text-3xl md:text-4xl text-slate-900 dark:text-white font-bold mb-6 min-h-[4rem] sm:min-h-[5rem] flex items-center justify-center px-4">
          <TypeWriter
            words={['Software Engineer', "I'm playin' basketball as hobby", 'I love Chess, Math and philosophy', 'Messi is the best football/soccer player ever']}
            className="text-xl sm:text-3xl md:text-4xl text-slate-900 dark:text-white font-bold"
          />
        </div>

        {/* Description */}
        <p className="text-base sm:text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-4xl mx-auto mb-10 leading-relaxed px-4">
          Building <span className="font-semibold text-slate-900 dark:text-white">efficient</span>,{' '}
          <span className="font-semibold text-slate-900 dark:text-white">scalable</span>, and{' '}
          <span className="font-semibold text-slate-900 dark:text-white">user-friendly</span> applications
        </p>

        {/* Tech Tags */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12 px-4">
          {[
            { name: 'Node.js' },
            { name: 'React/Next.js' },
            { name: 'TensorFlow' },
            { name: 'Python' }
          ].map((tech) => (
            <span
              key={tech.name}
              className="px-3 py-2 sm:px-6 sm:py-3 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-xl text-sm sm:text-base font-semibold shadow-lg border border-slate-200 dark:border-slate-700"
            >
              {tech.name}
            </span>
          ))}
        </div>

        {/* CTA Button */}
        <button
          onClick={() => scrollToSection('contact')}
          className="px-6 py-3 sm:px-10 sm:py-5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-2xl font-bold text-base sm:text-xl hover:bg-slate-800 dark:hover:bg-slate-100 transition-all shadow-2xl"
        >
          Let's Build Something Awesome
        </button>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={() => scrollToSection('about')}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-slate-400 dark:text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors z-10"
      >
        <ChevronDown className="w-8 h-8 sm:w-10 sm:h-10" />
      </button>
    </section>
  );
}
