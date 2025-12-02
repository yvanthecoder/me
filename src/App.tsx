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
              I'm a Software Engineer with a strong focus on design AI Model, mobile, and web development.
              Some developers just write code  I build <span className="font-semibold text-slate-900 dark:text-white">enterprise-scale applications</span>,
              ship <span className="font-semibold text-slate-900 dark:text-white">production-ready freelance projects</span>, train
              <span className="font-semibold text-slate-900 dark:text-white"> medical AI models with 90%+ accuracy</span>,
              and create side projects that reach <span className="font-semibold text-slate-900 dark:text-white">hundreds of users</span>.
            </p>
            <p className="text-xl text-slate-700 dark:text-slate-300 leading-relaxed">
              My tech stack spans <span className="font-semibold text-blue-600 dark:text-blue-400">HTML/CSS/JavaScript/TypeScript</span>,
              <span className="font-semibold text-emerald-600 dark:text-emerald-400"> ReactNative/Next.js/Node.js</span>,
              <span className="font-semibold text-violet-600 dark:text-violet-400"> Python for Machine Learning (Numpy, Pandas, Matplotlib, ...) & Tensorflow</span>,
              and everything in between. I've optimized apps to handle thousands of concurrent users,
              reduced load times by 30%+, and maintained 99%+ uptime in production.
            </p>
            <p className="text-xl text-slate-700 dark:text-slate-300 leading-relaxed">
              Currently working as an <span className="font-semibold text-slate-900 dark:text-white">Apprentice Software Engineer</span> at <span className="font-semibold text-slate-900 dark:text-white">Dassault Systèmes</span> since September 2023, collaborating with an international team. I am strengthening both my technical expertise (JavaScript, TypeScript, system design) and my teamwork and organizational skills.
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
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl flex items-center justify-center mb-6">
                <Brain className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3"><a href='https://github.com/yvanthecoder/DeepLearning-from-scratch'>Deep Learning from Scratch</a></h3>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                Developed a <span className="font-semibold text-blue-600 dark:text-blue-400">deep learning model from scratch</span>
                without high-level frameworks. The project aimed to classify whether a plant was
                <span className="font-semibold text-emerald-600 dark:text-emerald-400">toxic or non-toxic</span>
                based on two parameters: <span className="font-semibold text-slate-900 dark:text-white">leaf length (X1)</span>
                and <span className="font-semibold text-slate-900 dark:text-white">leaf width (X2)</span>.
                Built a <span className="font-semibold text-violet-600 dark:text-violet-400">binary neural network classifier</span>,
                implemented <span className="font-semibold text-slate-900 dark:text-white">gradient descent optimization</span>,
                and evaluated errors using the <span className="font-semibold text-slate-900 dark:text-white">log-loss cost function</span>
                to iteratively adjust weights (w) and bias (b).
                This project was a strong exercise in applying <span className="font-semibold text-blue-600 dark:text-blue-400">mathematics and Numpy</span>
                to understand the foundations of machine learning beyond libraries.
              </p>

              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1.5 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 rounded-lg text-sm font-medium">
                  Linear Algebra
                </span>
                <span className="px-3 py-1.5 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-lg text-sm font-medium">
                  Probability
                </span>
                <span className="px-3 py-1.5 bg-violet-50 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 rounded-lg text-sm font-medium">
                  Gradient Descent
                </span>
                <span className="px-3 py-1.5 bg-amber-50 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 rounded-lg text-sm font-medium">
                  Numpy / sklearn / Matplotlib
                </span>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-xl flex items-center justify-center mb-6">
                <Code2 className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3"><a href='https://eseo-groupe5.vercel.app'>Travel Booking Web App</a></h3>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                Built an <span className="font-semibold text-blue-600 dark:text-blue-400">academic group project <a href='https://github.com/yvanthecoder/travel-agency'>Open-Sourced</a></span> 
                a full-stack web application for booking and managing trips.
                I worked primarily on the <span className="font-semibold text-slate-900 dark:text-white">backend (Node.js/Express)</span>,
                implementing the REST API, validation with Joi, and centralized error handling.
                A teammate handled the <span className="font-semibold text-emerald-600 dark:text-emerald-400">frontend (React.js/Next.js)</span>
                with a modern responsive UI, while another focused on
                <span className="font-semibold text-violet-600 dark:text-violet-400">database design (NeDB) and UX conception</span>.
                We collaborated using <span className="font-semibold text-slate-900 dark:text-white">Notion</span> for task tracking
                and <span className="font-semibold text-slate-900 dark:text-white">Git/GitHub</span> for version control.
              </p>

              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1.5 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-lg text-sm font-medium">
                  Node.js / Express
                </span>
                <span className="px-3 py-1.5 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 rounded-lg text-sm font-medium">
                  REST API / Joi
                </span>
                <span className="px-3 py-1.5 bg-violet-50 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 rounded-lg text-sm font-medium">
                  NeDB
                </span>
                <span className="px-3 py-1.5 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-lg text-sm font-medium">
                  Git / Notion
                </span>
              </div>
            </div>
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-xl flex items-center justify-center mb-6">
                <Smartphone className="w-6 h-6 text-red-600 dark:text-red-400" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3"><a href='https://github.com/yvanthecoder/Djopflix'>DjopFlix</a></h3>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                Co-developed an <span className="font-semibold text-blue-600 dark:text-blue-400">Android mobile application</span>
                in <span className="font-semibold text-slate-900 dark:text-white">Kotlin</span> with a team of four.
                The app displays a catalog of movies via an <span className="font-semibold text-emerald-600 dark:text-emerald-400">API call</span>,
                allowing users to view details such as the <span className="font-semibold text-violet-600 dark:text-violet-400">synopsis</span>
                by clicking on a film.
                I focused on the <span className="font-semibold text-slate-900 dark:text-white">frontend implementation</span>,
                ensuring a clean, responsive interface and smooth user experience.
                This project was a valuable opportunity to work with a <span className="font-semibold text-blue-600 dark:text-blue-400">native mobile language</span>
                and gain hands-on experience in Android development with Kotlin.
              </p>

              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1.5 bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-lg text-sm font-medium">
                  Kotlin / Android
                </span>
                <span className="px-3 py-1.5 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-lg text-sm font-medium">
                  API Integration
                </span>
                <span className="px-3 py-1.5 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 rounded-lg text-sm font-medium">
                  UX Design
                </span>
                <span className="px-3 py-1.5 bg-violet-50 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 rounded-lg text-sm font-medium">
                  Git / Github
                </span>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-xl flex items-center justify-center mb-6">
                <Gamepad className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">Multiplayer Tetris</h3>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                In a team of two, we developed a complete <span className="font-semibold text-blue-600 dark:text-blue-400"><a href='https://github.com/yvanthecoder/projet_python_ESEO'>Tetris</a></span>
                in <span className="font-semibold text-slate-900 dark:text-white">Python</span>, supporting
                <span className="font-semibold text-emerald-600 dark:text-emerald-400"> 2 to 4 players in multiplayer mode</span>.
                I was responsible for the <span className="font-semibold text-violet-600 dark:text-violet-400">network layer</span>,
                implementing communication between players using <span className="font-semibold text-slate-900 dark:text-white">PySockets</span>
                and handling <span className="font-semibold text-slate-900 dark:text-white">multi-threading</span> to ensure smooth real-time interactions.
                This project strengthened my skills in <span className="font-semibold text-blue-600 dark:text-blue-400">concurrent programming</span>
                and <span className="font-semibold text-emerald-600 dark:text-emerald-400">network protocols</span>.
              </p>

              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1.5 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-lg text-sm font-medium">
                  POO Python
                </span>
                <span className="px-3 py-1.5 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-lg text-sm font-medium">
                  PySockets
                </span>
                <span className="px-3 py-1.5 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 rounded-lg text-sm font-medium">
                  Multi-threading
                </span>
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
