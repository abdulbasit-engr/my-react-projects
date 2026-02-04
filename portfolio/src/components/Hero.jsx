import { motion } from "framer-motion";
import profile from "../assets/profile.jpg";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-10
      bg-gray-100 dark:bg-zinc-900 px-6">

      <motion.img
        src={profile}
        alt="Basit"
        className="w-40 h-40 rounded-full border-4 border-black dark:border-white"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6 }}
      />

      <motion.div
        initial={{ opacity: 0, y: 70 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center md:text-left"
      >
        <h1 className="text-4xl font-bold dark:text-white">
          Hi, I'm Basit Jan 👋
        </h1>
        <p className="mt-4 text-lg dark:text-gray-300">
          Frontend Developer | React & Tailwind
        </p>
        <div className="mt-6 space-x-4">
          <a className="px-6 py-2 bg-black text-white rounded" href="#projects">
            Projects
          </a>
          <a className="px-6 py-2 border dark:text-white rounded" href="#contact">
            Contact
          </a>
        </div>
      </motion.div>
    </section>
  );
}