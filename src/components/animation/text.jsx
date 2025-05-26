import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.005,
    },
  },
};

const charVariants = {
  hidden: {
    y: 20,
    opacity: 0,
    filter: 'blur(4px)',
  },
  visible: {
    y: 0,
    opacity: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const TextReveal = ({ text }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  // Handle newlines by keeping them as individual characters
  const characters = text.split('').map((char, i) => ({
    char,
    key: `${char}-${i}`,
  }));

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      className="inline-block whitespace-pre-wrap leading-snug text-2xl font-semibold"
    >
      {characters.map(({ char, key }) =>
        char === '\n' ? (
          <br key={key} />
        ) : (
          <motion.span
            key={key}
            variants={charVariants}
            style={{ display: 'inline-block' }}
          >
            {char}
          </motion.span>
        )
      )}
    </motion.div>
  );
};

export default TextReveal;
