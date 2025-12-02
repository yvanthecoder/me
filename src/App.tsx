import { Code2, Brain, Smartphone, Github, Linkedin, Mail, Terminal, Moon, Sun, Gamepad } from 'lucide-react';
import { useState, useEffect } from 'react';
import { SkillsRadarChart } from './components/SkillsChart';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { ProjectImpactChart } from './components/ProjectStats';
import { HeroSection } from './components/HeroSection';
import { ProjectsSection } from './components/ProjectsSection';
import { AIProjectsSection } from './components/AIProjectsSection';
import { ExperienceCardsSection } from './components/ExperienceCardsSection';

function App() {
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('hero');
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved === 'dark';
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      const sections = ['hero', 'about', 'experience', 'projects', 'ai', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };


    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-lg shadow-sm dark:shadow-slate-800/50' : 'bg-transparent'}`}>
        <div className="max-w-6xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <button
              onClick={() => scrollToSection('hero')}
              className="flex items-center space-x-2 group"
            >
              <div className="w-10 h-10 bg-slate-900 dark:bg-white rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                <Terminal className="w-5 h-5 text-white dark:text-slate-900" />
              </div>
              <span className="text-xl font-bold text-slate-900 dark:text-white">
                Yvan Djopa
              </span>
            </button>
            <div className="flex items-center gap-6">
              <div className="hidden md:flex space-x-8">
                {['about', 'experience', 'projects', 'ai', 'contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`capitalize font-medium transition-colors ${activeSection === item
                      ? 'text-blue-600 dark:text-blue-400'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                      }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                aria-label="Toggle theme"
              >
                {isDark ? (
                  <Sun className="w-5 h-5 text-slate-900 dark:text-slate-100" />
                ) : (
                  <Moon className="w-5 h-5 text-slate-900" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - New Advanced Version */}
      <HeroSection scrollToSection={scrollToSection} />

      {/* About Section */}
      <section id="about" className="py-24 bg-white dark:bg-slate-900">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 bg-blue-600 dark:bg-blue-500 mx-auto rounded-full"></div>
          </div>
          <div className="bg-slate-50 dark:bg-slate-800 rounded-3xl p-10 md:p-14 space-y-6 border border-slate-200 dark:border-slate-700">
            <p className="text-xl text-slate-700 dark:text-slate-300 leading-relaxed">
              Software Engineer building <span className="font-semibold text-slate-900 dark:text-white">enterprise applications</span> at Dassault Systèmes and creating <span className="font-semibold text-slate-900 dark:text-white">AI models with ~90% accuracy</span>.
            </p>
            <p className="text-xl text-slate-700 dark:text-slate-300 leading-relaxed">
              Full-stack and eating <span className="font-semibold text-slate-900 dark:text-white">JavaScript/TypeScript, React/Next.js, Node.js, and Python/TensorFlow</span> for the dinner. Delivered solutions reaching thousands of users with 99%+ uptime.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Visualization Section */}
      <section className="py-24 bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              Skills & Expertise
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-violet-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <SkillsRadarChart />
            <div className="space-y-6">
              <ProjectImpactChart />
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section with Timeline - Keep for visual journey */}
      <section id="experience" className="py-24 bg-white dark:bg-slate-900">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              Professional Journey
            </h2>
            <div className="w-20 h-1 bg-slate-900 dark:bg-white mx-auto rounded-full"></div>
          </div>
          <ExperienceTimeline />
        </div>
      </section>

      {/* Experience Cards - New Design with Metrics */}
      <ExperienceCardsSection />

      {/* AI Projects Section - New Card Design */}
      <AIProjectsSection />

      {/* Projects Section - New Advanced Version */}
      <ProjectsSection />
      <section id="academical-projects" className="py-24 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              Academical Projects
            </h2>
            <div className="w-20 h-1 bg-emerald-600 dark:bg-emerald-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-xl flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-slate-900 dark:text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2"><a href='https://github.com/yvanthecoder/DeepLearning-from-scratch'>Deep Learning from Scratch</a></h3>
              <p className="text-slate-700 dark:text-slate-300 mb-4">
                Binary neural network classifier for plant toxicity from scratch using gradient descent
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg text-xs font-medium">Numpy</span>
                <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg text-xs font-medium">Math</span>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-xl flex items-center justify-center mb-4">
                <Code2 className="w-6 h-6 text-slate-900 dark:text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2"><a href='https://eseo-groupe5.vercel.app'>Travel Booking Platform</a></h3>
              <p className="text-slate-700 dark:text-slate-300 mb-4">
                Full-stack travel booking app with REST API, team collaboration via Git & Notion
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg text-xs font-medium">Node.js</span>
                <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg text-xs font-medium">React</span>
              </div>
            </div>
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-xl flex items-center justify-center mb-4">
                <Smartphone className="w-6 h-6 text-slate-900 dark:text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2"><a href='https://github.com/yvanthecoder/Djopflix'>DjopFlix</a></h3>
              <p className="text-slate-700 dark:text-slate-300 mb-4">
                Android movie catalog app with API integration, built with Kotlin
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg text-xs font-medium">Kotlin</span>
                <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg text-xs font-medium">Android</span>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-xl flex items-center justify-center mb-4">
                <Gamepad className="w-6 h-6 text-slate-900 dark:text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2"><a href='https://github.com/yvanthecoder/projet_python_ESEO'>Multiplayer Tetris</a></h3>
              <p className="text-slate-700 dark:text-slate-300 mb-4">
                2-4 player Tetris with network layer, sockets, and multi-threading in Python
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg text-xs font-medium">Python</span>
                <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg text-xs font-medium">Sockets</span>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white dark:bg-slate-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Blow up my notifications!
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-500 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Reach out if you have a great deal to share.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:yvandjopa01@gmail.com"
              className="flex items-center gap-3 px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl font-semibold hover:bg-blue-600 dark:hover:bg-blue-500 transition-colors shadow-lg hover:shadow-xl"
            >
              <Mail className="w-5 h-5" />
              Email Me
            </a>
            <a
              href="https://github.com/yvanthecoder"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border-2 border-slate-200 dark:border-slate-700 rounded-xl font-semibold hover:border-slate-900 dark:hover:border-white transition-colors"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>
            <a
              href="https://leetcode.com/u/YvanDjopa"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border-2 border-slate-200 dark:border-slate-700 rounded-xl font-semibold hover:border-slate-900 dark:hover:border-white transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                className="w-5 h-5"
                fill="currentColor"
              >
                <path d="M21.6 6.6L9 19.2c-3.6 3.6-3.6 9.6 0 13.2l12.6 12.6 4.2-4.2L13.2 28.8c-1.2-1.2-1.2-3.6 0-4.8L25.8 6.6c3.6-3.6 9.6-3.6 13.2 0 3.6 3.6 3.6 9.6 0 13.2l-8.4 8.4 4.2 4.2 8.4-8.4c6-6 6-15.6 0-21.6-6-6-15.6-6-21.6 0z" />
              </svg>
              LeetCode
            </a>

            <a
              href="https://www.linkedin.com/in/yvan-djopa-4b105019b"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border-2 border-slate-200 dark:border-slate-700 rounded-xl font-semibold hover:border-blue-600 hover:text-blue-600 dark:hover:border-blue-400 dark:hover:text-blue-400 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-6xl mx-auto px-6 text-center text-slate-600 dark:text-slate-400">
          <p>© 2025 Yvan Djopa. Built with Vite.js and the relentless encouragement of my upstairs neighbor shouting “don’t stop, keep going!”.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
