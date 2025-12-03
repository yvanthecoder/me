import { motion, useScroll, useTransform } from 'framer-motion';
import { Code2, ChevronDown } from 'lucide-react';
import { useRef } from 'react';
import { TypeWriter } from './TypeWriter';

interface HeroSectionProps {
  scrollToSection: (id: string) => void;
}

export function HeroSection({ scrollToSection }: HeroSectionProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  // Parallax effects
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);

  // Rotating background elements
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -360]);

  // Floating elements
  const float1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const float2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const float3 = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section
      ref={ref}
      id="hero"
      className="min-h-screen flex items-center justify-center relative bg-gradient-to-b from-slate-50 to-white dark:from-slate-800 dark:to-slate-900 overflow-hidden"
      style={{ perspective: 1000 }}
    >
      {/* Animated Background Blobs */}
      <motion.div
        className="absolute top-20 left-10 w-96 h-96 bg-slate-300/20 dark:bg-slate-600/20 rounded-full blur-3xl"
        style={{ y: float1, rotate: rotate1 }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-slate-400/15 dark:bg-slate-700/15 rounded-full blur-3xl"
        style={{ y: float2, rotate: rotate2 }}
      />
      <motion.div
        className="absolute top-1/2 left-1/4 w-80 h-80 bg-slate-300/10 dark:bg-slate-600/10 rounded-full blur-3xl"
        style={{ y: float3 }}
      />

      {/* Animated Geometric Shapes */}
      <motion.div
        className="absolute top-32 right-1/4 w-24 h-24 border-2 border-slate-300/30 dark:border-slate-600/30 rounded-xl"
        style={{ rotate: rotate1, y: float1 }}
        animate={{
          y: [0, -30, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="absolute bottom-32 left-1/4 w-20 h-20 border-2 border-slate-300/30 dark:border-slate-600/30 rounded-full"
        style={{ rotate: rotate2, y: float2 }}
        animate={{
          y: [0, 30, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="absolute top-1/4 left-1/3 w-16 h-16 bg-slate-300/20 dark:bg-slate-600/20 rounded-lg rotate-45"
        animate={{
          rotate: [45, 225, 45],
          scale: [1, 1.3, 1]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Main Content */}
      <motion.div
        className="max-w-5xl mx-auto px-6 text-center pt-20 relative z-10"
        style={{ y, opacity, scale }}
      >
        {/* Logo with advanced animation */}
        <motion.div
          className="inline-block mb-8"
          initial={{ scale: 0, rotate: -180, opacity: 0 }}
          animate={{ scale: 1, rotate: 0, opacity: 1 }}
          transition={{ duration: 1, type: "spring", stiffness: 100 }}
        >
          <motion.div
            className="w-28 h-28 bg-slate-900 dark:bg-white rounded-3xl flex items-center justify-center mx-auto shadow-2xl"
            whileHover={{
              scale: 1.1,
              rotate: 360,
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.3)"
            }}
            transition={{ duration: 0.6 }}
            animate={{
              boxShadow: [
                "0 10px 30px rgba(0, 0, 0, 0.2)",
                "0 15px 40px rgba(0, 0, 0, 0.25)",
                "0 10px 30px rgba(0, 0, 0, 0.2)"
              ]
            }}
          >
            <Code2 className="w-14 h-14 text-white dark:text-slate-900" />
          </motion.div>
        </motion.div>

        {/* Name with stagger effect */}
        <motion.h1
          className="text-6xl md:text-8xl font-bold mb-6 text-slate-900 dark:text-white"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {['Y', 'v', 'a', 'n', ' ', 'D', 'j', 'o', 'p', 'a'].map((letter, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.05 }}
              whileHover={{
                scale: 1.2,
                y: -5,
                transition: { duration: 0.2 }
              }}
              className="inline-block"
            >
              {letter === ' ' ? '\u00A0' : letter}
            </motion.span>
          ))}
        </motion.h1>

        {/* Title with TypeWriter */}
        <motion.div
          className="text-3xl md:text-4xl text-slate-900 dark:text-white font-bold mb-6 h-16 flex items-center justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <TypeWriter
            words={['Software Engineer', "I'm playin' basketball as hobby", 'I love Chess, Math and philosophy', 'Messi is the best football/soccer player ever']}
            className="text-3xl md:text-4xl text-slate-900 dark:text-white font-bold"
          />
        </motion.div>

        {/* Description */}
        <motion.p
          className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-4xl mx-auto mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          Building <span className="font-semibold text-slate-900 dark:text-white">efficient</span>,{' '}
          <span className="font-semibold text-slate-900 dark:text-white">scalable</span>, and{' '}
          <span className="font-semibold text-slate-900 dark:text-white">user-friendly</span> applications
        </motion.p>

        {/* Tech Tags */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          {[
            { name: 'Node.js' },
            { name: 'React/Next.js' },
            { name: 'TensorFlow' },
            { name: 'Python' }
          ].map((tech, i) => (
            <motion.span
              key={tech.name}
              className="px-6 py-3 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-xl text-base font-semibold shadow-lg border border-slate-200 dark:border-slate-700"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 + i * 0.1 }}
              whileHover={{
                scale: 1.15,
                y: -8,
                boxShadow: "0 20px 40px rgba(0,0,0,0.15)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              {tech.name}
            </motion.span>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.button
          onClick={() => scrollToSection('contact')}
          className="px-10 py-5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-2xl font-bold text-xl hover:bg-slate-800 dark:hover:bg-slate-100 transition-all shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          whileHover={{
            scale: 1.05,
            y: -5,
            boxShadow: "0 25px 50px rgba(0, 0, 0, 0.2)"
          }}
          whileTap={{ scale: 0.95 }}
        >
          Let's Build Something Awesome
        </motion.button>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={() => scrollToSection('about')}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-slate-400 dark:text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors z-10"
        animate={{
          y: [0, -15, 0]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        whileHover={{ scale: 1.2 }}
      >
        <ChevronDown className="w-10 h-10" />
      </motion.button>
    </section>
  );
}
