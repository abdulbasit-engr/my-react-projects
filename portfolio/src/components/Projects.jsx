import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-black">
      <h2 className="text-3xl font-bold text-center dark:text-white mb-10">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto px-6">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="p-6 border rounded dark:border-gray-700"
        >
          <h3 className="text-xl font-semibold dark:text-white">
            React To-Do App
          </h3>
          <p className="mt-2 dark:text-gray-400">
            Task manager built with React.
          </p>
          <div className="mt-4 space-x-4">
            <a className="underline dark:text-white" href="#">Live</a>
            <a className="underline dark:text-white" href="#">GitHub</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}