import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer, Tooltip } from 'recharts';
import { motion } from 'framer-motion';

const skillsData = [
  { skill: 'React/Next.js', level: 95, fullMark: 100 },
  { skill: 'Node.js', level: 90, fullMark: 100 },
  { skill: 'TypeScript', level: 92, fullMark: 100 },
  { skill: 'Python/AI', level: 88, fullMark: 100 },
  { skill: 'React Native', level: 85, fullMark: 100 },
  { skill: 'System Design', level: 82, fullMark: 100 },
];

export function SkillsRadarChart() {
  return (
    <motion.div
      className="w-full h-[400px] bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-800 dark:to-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-700"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.8 }}
      whileHover={{ scale: 1.02 }}
    >
      <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 text-center">
        Technical Skills
      </h3>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart data={skillsData}>
          <PolarGrid
            stroke="#94a3b8"
            strokeDasharray="3 3"
          />
          <PolarAngleAxis
            dataKey="skill"
            tick={{ fill: '#64748b', fontSize: 12 }}
          />
          <PolarRadiusAxis
            angle={90}
            domain={[0, 100]}
            tick={false}
            tickCount={0}
          />
          <Radar
            name="Skill Level"
            dataKey="level"
            stroke="#3b82f6"
            fill="#3b82f6"
            fillOpacity={0.6}
            animationDuration={1500}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: 'rgba(15, 23, 42, 0.9)',
              border: 'none',
              borderRadius: '12px',
              color: '#fff'
            }}
          />
        </RadarChart>
      </ResponsiveContainer>
    </motion.div>
  );
}
