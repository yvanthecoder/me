import { motion } from 'framer-motion';
import { Briefcase, Rocket, Zap } from 'lucide-react';

const experiences = [
  {
    company: 'Dassault Systèmes',
    period: 'Sept 2023 - Currently',
    role: 'Software Engineer (ENOVIA)',
    icon: Briefcase,
    color: 'blue',
    link: 'https://www.3ds.com',
    achievements: [
      'Building app used by 20K+ users',
      '95%+ test coverage',
      'World impact projects'
    ]
  },
  {
    company: 'La Mater Tech',
    period: 'Nov 2022 - Sept 2023',
    role: 'Frontend Developer',
    icon: Rocket,
    color: 'emerald',
    link: null,
    achievements: [
      'Big O evaluation tool',
      'Pixel-perfect implementation',
      'Maintenance & updates applications used by 100+ users'
    ]
  },
  {
    company: 'Saint Jean',
    period: 'Sept 2020 - July 2021',
    role: 'Junior Enterprise',
    icon: Zap,
    color: 'violet',
    link: 'https://institutsaintjean.org/',
    achievements: [
      'Building application used by +300 students',
      'Helping students in their projects'
    ]
  }
];

const colorClasses = {
  blue: {
    bg: 'bg-blue-500',
    light: 'bg-blue-100 dark:bg-blue-900/30',
    text: 'text-blue-600 dark:text-blue-400',
    border: 'border-blue-200 dark:border-blue-800'
  },
  emerald: {
    bg: 'bg-emerald-500',
    light: 'bg-emerald-100 dark:bg-emerald-900/30',
    text: 'text-emerald-600 dark:text-emerald-400',
    border: 'border-emerald-200 dark:border-emerald-800'
  },
  violet: {
    bg: 'bg-violet-500',
    light: 'bg-violet-100 dark:bg-violet-900/30',
    text: 'text-violet-600 dark:text-violet-400',
    border: 'border-violet-200 dark:border-violet-800'
  }
};

export function ExperienceTimeline() {
  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-emerald-500 to-violet-500" />

      <div className="space-y-12">
        {experiences.map((exp, index) => {
          const Icon = exp.icon;
          const colors = colorClasses[exp.color as keyof typeof colorClasses];

          return (
            <motion.div
              key={exp.company}
              className="relative pl-20"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* Icon */}
              <motion.div
                className={`absolute left-0 w-16 h-16 ${colors.light} rounded-2xl flex items-center justify-center border-4 border-white dark:border-slate-900`}
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Icon className={`w-8 h-8 ${colors.text}`} />
              </motion.div>

              {/* Content Card */}
              <motion.div
                className={`bg-white dark:bg-slate-800 rounded-2xl p-6 border ${colors.border} shadow-lg hover:shadow-2xl transition-shadow`}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                      {exp.link ? (
                        <a href={exp.link} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                          {exp.company}
                        </a>
                      ) : (
                        exp.company
                      )}
                    </h3>
                    <p className={`text-sm font-semibold ${colors.text} mt-1`}>
                      {exp.role}
                    </p>
                  </div>
                  <span className="text-sm text-slate-500 dark:text-slate-400 font-medium">
                    {exp.period}
                  </span>
                </div>

                {/* Achievements */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-4">
                  {exp.achievements.map((achievement, i) => (
                    <motion.div
                      key={i}
                      className={`${colors.light} rounded-lg p-3 text-center`}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: 0.4 + i * 0.1 }}
                    >
                      <p className={`text-sm font-semibold ${colors.text}`}>
                        {achievement}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
