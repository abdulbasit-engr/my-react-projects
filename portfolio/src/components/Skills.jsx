import { motion } from "framer-motion";

export default function Skills() {
  const skills = ["HTML", "CSS", "JavaScript", "React", "Tailwind", "Git"];
  return (
    <motion.Skills
    whileHover={{ scale: 1.05 }}
    >
    <section className="py-20 text-center">
      <h2 className="text-3xl font-bold mb-6">Skills</h2>
      <div className="flex justify-center flex-wrap gap-4">
        {skills.map(skill => (
          <span key={skill} className="px-4 py-2 border rounded">
            {skill}
          </span>
        ))}
      </div>
    </section>
    </motion.Skills>
  );
}