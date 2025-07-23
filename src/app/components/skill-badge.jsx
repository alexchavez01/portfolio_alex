"use client"

import { motion } from "framer-motion"

export default function SkillBadge({ name, level }) {
  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center"
      whileHover={{ scale: 1.05 }}
    >
      <div className="w-full mb-3">
        <div className="relative h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 h-full bg-primary rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${level}%` }}
            transition={{ duration: 1, delay: 0.2 }}
          />
        </div>
      </div>

      <p className="font-medium text-gray-800 dark:text-white text-center">{name}</p>
      <p className="text-xs text-gray-500 dark:text-gray-400">{level}%</p>
    </motion.div>
  )
}

