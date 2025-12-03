import { motion, useScroll, useTransform } from 'framer-motion';
import { Brain, Activity, Gamepad2, ExternalLink } from 'lucide-react';
import { useRef } from 'react';

const aiProjects = [
  {
    icon: Gamepad2,
    name: 'Chess AI Bot',
    company: 'Personal Project',
    description: 'Improving an existing chess AI bot using Alpha-Beta Pruning and Big O notation instead of the casual Minimax algorithms it allows the bot to evaluate deeper moves in less time, making it more competitive against human players.',
    stats: [
      { label: 'Time Complexity', value: 'O(b^(d/2)) instead of O(b^d)' },
      { label: 'Space Complexity', value: 'O(bd) instead of O(b^d)' },
      { label: 'ELO', value: '~1500 instead of 600' }
    ],
    tech: ['Alpha-Beta Pruning', 'PST', 'JavaScript'],
    color: 'violet',
    link: 'https://chess-ai-peach.vercel.app/'
  },
  {
    icon: Brain,
    name: 'Skin Cancer Detection',
    company: 'Personal Project',
    description: 'Deep learning model classifying 7 skin cancer types with 92% accuracy',
    stats: [
      { label: 'Accuracy', value: '92%' },
      { label: 'Classes', value: '7' },
      { label: 'Images', value: '10K+' }
    ],
    tech: ['TensorFlow', 'OpenCV', 'Tkinter'],
    color: 'violet',
    link: 'https://github.com/yvanthecoder/AI-skin-cancer-'
  },
  {
    icon: Activity,
    name: 'NLP Training Chatbot',
    company: 'Dassault Side Project',
    description: 'Intelligent chatbot helping 200+ colleagues discover training programs',
    stats: [
      { label: 'Users', value: '200+' },
      { label: 'Accuracy', value: '85%' },
      { label: 'Time Saved', value: '60%' }
    ],
    tech: ['NLP', 'TensorFlow', 'LSTM'],
    color: 'blue',
    link: null
  }
];

const colorClasses = {
  violet: {
    card: 'from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800',
    border: 'border-slate-200 dark:border-slate-700',
    icon: 'bg-slate-900 dark:bg-white',
    iconText: 'text-white dark:text-slate-900',
    text: 'text-slate-900 dark:text-white',
    statBg: 'bg-slate-100 dark:bg-slate-800'
  },
  blue: {
    card: 'from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800',
    border: 'border-slate-200 dark:border-slate-700',
    icon: 'bg-slate-900 dark:bg-white',
    iconText: 'text-white dark:text-slate-900',
    text: 'text-slate-900 dark:text-white',
    statBg: 'bg-slate-100 dark:bg-slate-800'
  }
};

function AIProjectCard({ project, index }: { project: typeof aiProjects[0]; index: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 0.5, 1], [50, 0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const Icon = project.icon;
  const colors = colorClasses[project.color as keyof typeof colorClasses];

  const CardContent = (
    <motion.div
      ref={ref}
      style={{ y, opacity }}
      className="relative h-full"
    >
      <motion.div
        className={`bg-gradient-to-br ${colors.card} rounded-3xl p-8 border-2 ${colors.border} shadow-xl h-full flex flex-col ${project.link ? 'cursor-pointer' : ''}`}
        whileHover={{
          scale: 1.02,
          boxShadow: "0 20px 40px rgba(0,0,0,0.15)"
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Click indicator badge */}
        {project.link && (
          <motion.div
            className="absolute top-4 right-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 shadow-lg"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
          >
            <span>Click to view</span>
            <ExternalLink className="w-3 h-3" />
          </motion.div>
        )}

        {/* Icon */}
        <motion.div
          className={`w-16 h-16 ${colors.icon} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ duration: 0.3 }}
        >
          <Icon className={`w-8 h-8 ${colors.iconText}`} />
        </motion.div>

        {/* Title & Company */}
        <h3 className={`text-2xl font-bold ${colors.text} mb-2`}>
          {project.name}
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 font-medium">
          {project.company}
        </p>

        {/* Description */}
        <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6 flex-grow">
          {project.description}
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          {project.stats.map((stat, i) => (
            <motion.div
              key={i}
              className={`${colors.statBg} backdrop-blur-sm rounded-lg p-3 text-center border ${colors.border}`}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: false }}
              transition={{ delay: i * 0.1, type: "spring" }}
              whileHover={{ scale: 1.05, y: -3 }}
            >
              <p className={`text-xl font-bold ${colors.text} mb-1`}>
                {stat.value}
              </p>
              <p className="text-xs text-slate-600 dark:text-slate-400 font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech, i) => (
            <motion.span
              key={tech}
              className={`px-3 py-1.5 bg-white dark:bg-slate-900 ${colors.text} rounded-lg text-sm font-medium border ${colors.border}`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.2 + i * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );

  if (project.link) {
    return (
      <a href={project.link} target="_blank" rel="noopener noreferrer" className="block h-full">
        {CardContent}
      </a>
    );
  }

  return CardContent;
}

export function AIProjectsSection() {
  return (
    <section id="ai" className="py-24 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4"
          >
            AI & Machine Learning
          </motion.h2>
          <motion.div
            className="w-24 h-1.5 bg-slate-900 dark:bg-white mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {aiProjects.map((project, index) => (
            <AIProjectCard key={project.name} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
