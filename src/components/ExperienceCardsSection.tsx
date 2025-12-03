import { motion, useScroll, useTransform } from 'framer-motion';
import { Briefcase, GraduationCap, Lightbulb } from 'lucide-react';
import { useRef } from 'react';

const experiences = [
  {
    icon: Briefcase,
    company: 'Dassault Systèmes',
    role: 'Software Engineer',
    period: 'Sept 2023 - Present',
    type: 'Full-time',
    link: 'https://www.3ds.com',
    description: 'Contributing the Real to Virtuality vision by delivering applications for a global user base. Responsible for the full development lifecycle from system architecture design to comprehensive unit testing and deployment to production working in an international team (France, India, England)',
    metrics: [
      { label: 'Users', value: 100, max: 100, unit: '+', display: '+20000'  },
      { label: 'Minimal Coverage required', value: 95, max: 100, unit: '%' },
      { label: 'Impact', value: 100, max: 100, unit: '%', display: 'world' }
    ],
    tech: ['Typescript', 'JavaScript', 'Git', 'Agile', 'Project Management'],
    color: 'blue'
  },
  {
    icon: Lightbulb,
    company: 'La Mater Tech',
    role: 'Full-Stack Developer',
    period: 'Feb 2023 - Jun 2023',
    type: 'Internship',
    link: null,
    description: 'DContributed as a Frontend Developer in a fully remote team of 3 developers, including 2 senior engineers, on ScolarBridge a web platform widely used in France that connects hundreds of students and teachers each year',
    metrics: [
      { label: 'Performance', value: 90, max: 100, unit: '%', display: 'Pixel Perfect' },
      { label: 'Features', value: 100, max: 100, unit: '%', display: 'Complete' },
      { label: 'Delivery', value: 100, max: 100, unit: '%', display: 'On-time' }
    ],
    tech: ['Next.js', 'Agile', 'GIT', 'GITLAB', 'Deadlines management'],
    color: 'emerald'
  },
  {
    icon: GraduationCap,
    company: 'Saint-Jean',
    role: 'IT Consultant & "Teacher"',
    period: 'Dec 2021 - Sept 2023',
    type: 'Part-time',
    link: 'https://institutsaintjean.org/',
    description: 'Developed the backend of a student management platform for my school using Node.js and Express. Implemented RESTful APIs with full CRUD operations and managed the database with NeDB',
    metrics: [
      { label: 'Students', value: 100, max: 100, unit: '+', display: '300+' },
      { label: 'Satisfaction', value: 100, max: 100, unit: '%' },
      { label: 'Impact', value: 100, max: 100, unit: '%', display: 'All the school' }
    ],
    tech: ['React JS', 'Node Js', 'NoSQL Databases', 'Projett Management', 'Teaching'],
    color: 'violet'
  }
];

const colorClasses = {
  blue: {
    card: 'from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800',
    border: 'border-slate-200 dark:border-slate-700',
    icon: 'bg-slate-900 dark:bg-white',
    iconText: 'text-white dark:text-slate-900',
    bar: 'bg-slate-900 dark:bg-white',
    barBg: 'bg-slate-200 dark:bg-slate-700'
  },
  emerald: {
    card: 'from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800',
    border: 'border-slate-200 dark:border-slate-700',
    icon: 'bg-slate-900 dark:bg-white',
    iconText: 'text-white dark:text-slate-900',
    bar: 'bg-slate-900 dark:bg-white',
    barBg: 'bg-slate-200 dark:bg-slate-700'
  },
  violet: {
    card: 'from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800',
    border: 'border-slate-200 dark:border-slate-700',
    icon: 'bg-slate-900 dark:bg-white',
    iconText: 'text-white dark:text-slate-900',
    bar: 'bg-slate-900 dark:bg-white',
    barBg: 'bg-slate-200 dark:bg-slate-700'
  }
};

function ExperienceCard({ experience, index }: { experience: typeof experiences[0]; index: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 0.5, 1], [60, 0, -60]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const Icon = experience.icon;
  const colors = colorClasses[experience.color as keyof typeof colorClasses];

  return (
    <motion.div
      ref={ref}
      style={{ y, opacity }}
      className="relative"
    >
      <motion.div
        className={`bg-gradient-to-br ${colors.card} rounded-3xl p-8 border-2 ${colors.border} shadow-xl h-full`}
        whileHover={{
          scale: 1.02,
          boxShadow: "0 20px 40px rgba(0,0,0,0.12)"
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Header */}
        <div className="flex items-start gap-4 mb-6">
          <motion.div
            className={`w-14 h-14 ${colors.icon} rounded-xl flex items-center justify-center shadow-lg flex-shrink-0`}
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.3 }}
          >
            <Icon className={`w-7 h-7 ${colors.iconText}`} />
          </motion.div>

          <div className="flex-grow">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
              {experience.link ? (
                <a href={experience.link} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  {experience.company}
                </a>
              ) : (
                experience.company
              )}
            </h3>
            <p className="text-base font-semibold text-slate-700 dark:text-slate-300 mb-1">
              {experience.role}
            </p>
            <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400">
              <span>{experience.period}</span>
              <span className="w-1 h-1 bg-slate-400 rounded-full"></span>
              <span className="font-medium">{experience.type}</span>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
          {experience.description}
        </p>

        {/* Metrics with Progress Bars */}
        <div className="space-y-4 mb-6">
          {experience.metrics.map((metric, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                  {metric.label}
                </span>
                <span className="text-sm font-bold text-slate-900 dark:text-white">
                  {metric.display || `${metric.value}${metric.unit}`}
                </span>
              </div>
              <div className={`relative h-2 ${colors.barBg} rounded-full overflow-hidden`}>
                <motion.div
                  className={`absolute inset-y-0 left-0 ${colors.bar} rounded-full`}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${metric.value}%` }}
                  viewport={{ once: false }}
                  transition={{ duration: 1, delay: i * 0.1 + 0.2, ease: "easeOut" }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {experience.tech.map((tech, i) => (
            <motion.span
              key={tech}
              className={`px-3 py-1.5 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-medium border ${colors.border}`}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ delay: 0.3 + i * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

export function ExperienceCardsSection() {
  return (
    <section id="experience" className="py-24 bg-slate-50 dark:bg-slate-800">
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
            Professional Experience
          </motion.h2>
          <motion.div
            className="w-24 h-1.5 bg-slate-900 dark:bg-white mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </motion.div>

        {/* Experience Cards */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
          {experiences.map((experience, index) => (
            <ExperienceCard key={experience.company} experience={experience} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
