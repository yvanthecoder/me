import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { motion } from 'framer-motion';

const projectsData = [
  { name: 'Sport Connect', users: 30, impact: 90, color: '#3b82f6' },
  { name: 'Note-Moi', users: 200, impact: 85, color: '#10b981' },
  { name: 'LePhénix', users: 120, impact: 88, color: '#8b5cf6' },
  { name: 'AI Models', users: 20, impact: 92, color: '#f59e0b' },
];

const aiStats = [
  { name: 'Skin Cancer', accuracy: 99, type: 'Medical AI' },
  { name: 'NLP Chatbot', accuracy: 75, type: 'NLP' },
  { name: 'WhatsApp Bot', accuracy: 60, type: 'Automation' },
];

export function ProjectImpactChart() {
  return (
    <motion.div
      className="w-full bg-gradient-to-br from-white to-blue-50 dark:from-slate-800 dark:to-slate-900 rounded-3xl p-4 sm:p-8 border border-slate-200 dark:border-slate-700"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.8 }}
      whileHover={{ scale: 1.01 }}
    >
      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-4 sm:mb-6">
        Project Impact & Reach
      </h3>
      <ResponsiveContainer width="100%" height={280}>
        <BarChart data={projectsData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
          <XAxis
            dataKey="name"
            tick={{ fill: '#64748b', fontSize: 10 }}
            angle={-20}
            textAnchor="end"
            height={60}
          />
          <YAxis
            tick={{ fill: '#64748b', fontSize: 10 }}
            label={{ value: 'Users', angle: -90, position: 'insideLeft', fill: '#64748b', fontSize: 12 }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: 'rgba(15, 23, 42, 0.95)',
              border: 'none',
              borderRadius: '12px',
              color: '#fff',
              padding: '8px',
              fontSize: '12px'
            }}
            cursor={{ fill: 'rgba(59, 130, 246, 0.1)' }}
          />
          <Bar dataKey="users" radius={[8, 8, 0, 0]} animationDuration={1500}>
            {projectsData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </motion.div>
  );
}

export function AIAccuracyChart() {
  return (
    <motion.div
      className="w-full bg-gradient-to-br from-violet-50 to-white dark:from-violet-900/20 dark:to-slate-900 rounded-3xl p-4 sm:p-8 border border-violet-200 dark:border-violet-800"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      whileHover={{ scale: 1.01 }}
    >
      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-4 sm:mb-6">
        AI Model Accuracy
      </h3>
      <div className="space-y-4 sm:space-y-6">
        {aiStats.map((stat, index) => (
          <motion.div
            key={stat.name}
            className="space-y-2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ delay: index * 0.15 }}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm sm:text-base font-semibold text-slate-900 dark:text-white">
                  {stat.name}
                </p>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                  {stat.type}
                </p>
              </div>
              <span className="text-xl sm:text-2xl font-bold text-violet-600 dark:text-violet-400">
                {stat.accuracy}%
              </span>
            </div>
            <div className="relative h-2 sm:h-3 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
              <motion.div
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-violet-500 to-purple-600 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: `${stat.accuracy}%` }}
                viewport={{ once: false }}
                transition={{ duration: 1, delay: index * 0.15 + 0.3, ease: "easeOut" }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
