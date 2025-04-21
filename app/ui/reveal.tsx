import * as motion from "motion/react-client";

export default function Reveal({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      className="w-full"
      initial={{ opacity: 0, y: 25 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 },
      }}
    >
      {children}
    </motion.div>
  );
}
