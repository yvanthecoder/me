import { motion, useScroll, useTransform } from 'framer-motion';
import { Smartphone, Code2, Terminal } from 'lucide-react';
import { useRef } from 'react';

const projects = [
  {
    icon: Smartphone,
    name: 'Sport Connect',
    description: 'Mobile sports networking app with real-time geolocation matching',
    stats: ['30+ beta testers', '90% satisfaction', 'Spring 2026 launch'],
    tech: ['React Native', 'Firebase', 'Expo'],
    color: 'blue',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Code2,
    name: 'LePhénix',
    description: 'Educational platform with course materials and interactive quizzes',
    stats: ['50+ students', 'Open Source', 'Quiz Games'],
    tech: ['HTML5/SCSS', 'JavaScript'],
    color: 'violet',
    gradient: 'from-violet-500 to-purple-500'
  },
  {
    icon: Smartphone,
    name: 'Note-Moi',
    description: 'Lighthearted rating app for evaluating friends',
    stats: ['300+ users', '100+ on launch', 'Open Source'],
    tech: ['Next.js', 'Firebase'],
    color: 'emerald',
    gradient: 'from-emerald-500 to-teal-500'
  },
  {
    icon: Terminal,
    name: 'ARWM WhatsApp Bot',
    description: 'Personal automation tool with NLP-based classification',
    stats: ['24/7 running', 'High accuracy', 'Open Source'],
    tech: ['Python', 'TensorFlow', 'PyAutoGUI'],
    color: 'amber',
    gradient: 'from-amber-500 to-orange-500'
  }
];

const colorClasses = {
  blue: {
    card: 'from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20',
    border: 'border-blue-200 dark:border-blue-800',
    icon: 'bg-blue-500',
    text: 'text-blue-600 dark:text-blue-400'
  },
  violet: {
    card: 'from-violet-50 to-purple-50 dark:from-violet-900/20 dark:to-purple-900/20',
    border: 'border-violet-200 dark:border-violet-800',
    icon: 'bg-violet-500',
    text: 'text-violet-600 dark:text-violet-400'
  },
  emerald: {
    card: 'from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20',
    border: 'border-emerald-200 dark:border-emerald-800',
    icon: 'bg-emerald-500',
    text: 'text-emerald-600 dark:text-emerald-400'
  },
  amber: {
    card: 'from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20',
    border: 'border-amber-200 dark:border-amber-800',
    icon: 'bg-amber-500',
    text: 'text-amber-600 dark:text-amber-400'
  }
};

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 0.5, 1], [100, 0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.8]);
  const rotateY = useTransform(scrollYProgress, [0, 0.5, 1], [-15, 0, 15]);

  const Icon = project.icon;
  const colors = colorClasses[project.color as keyof typeof colorClasses];

  return (
    <motion.div
      ref={ref}
      style={{ y, opacity, scale, rotateY, transformStyle: "preserve-3d" }}
      className="relative"
    >
      <motion.div
        className={`bg-gradient-to-br ${colors.card} rounded-3xl p-8 border-2 ${colors.border} shadow-xl relative overflow-hidden`}
        whileHover={{
          scale: 1.05,
          rotateY: 5,
          rotateX: 5,
          boxShadow: "0 25px 60px rgba(0,0,0,0.2)"
        }}
        transition={{ duration: 0.4 }}
      >
        {/* Animated background gradient */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0`}
          whileHover={{ opacity: 0.1 }}
          transition={{ duration: 0.4 }}
        />

        {/* Icon with pulse effect */}
        <motion.div
          className={`w-16 h-16 ${colors.icon} rounded-2xl flex items-center justify-center mb-6 shadow-lg relative z-10`}
          whileHover={{
            scale: 1.2,
            rotate: 360
          }}
          transition={{ duration: 0.6 }}
          animate={{
            boxShadow: [
              "0 0 20px rgba(59, 130, 246, 0.3)",
              "0 0 40px rgba(139, 92, 246, 0.5)",
              "0 0 20px rgba(59, 130, 246, 0.3)"
            ]
          }}
        >
          <Icon className="w-8 h-8 text-white" />
        </motion.div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 relative z-10">
          {project.name}
        </h3>

        {/* Description */}
        <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6 relative z-10">
          {project.description}
        </p>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 mb-6 relative z-10">
          {project.stats.map((stat, i) => (
            <motion.div
              key={i}
              className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-lg p-3 text-center"
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: false }}
              transition={{ delay: i * 0.1, type: "spring" }}
              whileHover={{ scale: 1.1, y: -5 }}
            >
              <p className={`text-xs font-semibold ${colors.text}`}>
                {stat}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 relative z-10">
          {project.tech.map((tech, i) => (
            <motion.span
              key={tech}
              className={`px-3 py-1.5 bg-white dark:bg-slate-800 ${colors.text} rounded-lg text-sm font-medium border ${colors.border}`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.2 + i * 0.1 }}
              whileHover={{ scale: 1.1, y: -3 }}
            >
              {tech}
            </motion.span>
          ))}
        </div>

        {/* Decorative corner element */}
        <motion.div
          className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${project.gradient} opacity-10 rounded-bl-full`}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>
    </motion.div>
  );
}

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 bg-slate-50 dark:bg-slate-800 relative overflow-hidden" style={{ perspective: 2000 }}>
      {/* Animated background elements */}
      <motion.div
        className="absolute top-20 left-10 text-blue-500/5 dark:text-blue-400/5 font-mono text-9xl"
        animate={{
          opacity: [0.05, 0.1, 0.05],
          rotate: [0, 5, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        {'</>'}
      </motion.div>

      <motion.div
        className="absolute bottom-20 right-10 text-violet-500/5 dark:text-violet-400/5 font-mono text-9xl"
        animate={{
          opacity: [0.05, 0.1, 0.05],
          rotate: [0, -5, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      >
        {'{}'}
      </motion.div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-4"
            style={{ transformStyle: "preserve-3d" }}
            whileInView={{
              rotateX: [20, 0],
              z: [50, 0]
            }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
          >
            Mobile & Web Projects
          </motion.h2>
          <motion.div
            className="w-24 h-1.5 bg-gradient-to-r from-blue-600 via-violet-600 to-emerald-600 mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: false }}
            transition={{ duration: 1, delay: 0.3 }}
          />
          <motion.p
            className="text-lg text-slate-600 dark:text-slate-400 mt-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ delay: 0.5 }}
          >
            Building products that reach hundreds of users
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.name} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
