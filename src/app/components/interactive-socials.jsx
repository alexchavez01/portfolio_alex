"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Github, Linkedin, Twitter, Mail, ExternalLink, Users, Code, MessageCircle, Send } from "lucide-react"

export default function InteractiveSocials() {
  const [hoveredCard, setHoveredCard] = useState(null)

  const socialPlatforms = [
    {
      id: "github",
      name: "GitHub",
      username: "@alexchavez01",
      description: "Check out my code repositories and open source contributions",
      url: "https://github.com/alexchavez01",
      icon: Github,
      color: "from-gray-700 to-gray-900",
      stats: "50+ Repositories",
      bgPattern: "bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900",
    },
    {
      id: "linkedin",
      name: "LinkedIn",
      username: "Alex Chavez",
      description: "Connect with me professionally and see my career journey",
      url: "https://www.linkedin.com/in/alex-chavez30/",
      icon: Linkedin,
      color: "from-blue-600 to-blue-800",
      stats: "Professional Network",
      bgPattern: "bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20",
    },
    {
      id: "twitter",
      name: "Twitter",
      username: "@alexchavez030",
      description: "Follow my thoughts on tech, development, and industry trends",
      url: "https://twitter.com/alexchavez030",
      icon: Twitter,
      color: "from-sky-500 to-sky-700",
      stats: "Tech Insights",
      bgPattern: "bg-gradient-to-br from-sky-50 to-sky-100 dark:from-sky-900/20 dark:to-sky-800/20",
    },
    {
      id: "email",
      name: "Email",
      username: "chavezalex285@gmail.com",
      description: "Send me a direct message for collaborations and opportunities",
      url: "https://mail.google.com/mail/?view=cm&fs=1&to=chavezalex285@gmail.com",
      icon: Mail,
      color: "from-emerald-600 to-emerald-800",
      stats: "Direct Contact",
      bgPattern: "bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-900/20 dark:to-emerald-800/20",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <div className="space-y-8">
      {/* Interactive Cards Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 gap-6"
      >
        {socialPlatforms.map((platform) => {
          const IconComponent = platform.icon
          return (
            <motion.div
              key={platform.id}
              variants={cardVariants}
              onHoverStart={() => setHoveredCard(platform.id)}
              onHoverEnd={() => setHoveredCard(null)}
              className="group relative"
            >
              <Link href={platform.url} target="_blank" rel="noopener noreferrer" className="block">
                <div
                  className={`relative overflow-hidden rounded-2xl ${platform.bgPattern} p-6 transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] border border-gray-200 dark:border-gray-700`}
                >
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent transform -skew-y-12 translate-y-full group-hover:translate-y-[-100%] transition-transform duration-1000"></div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-4">
                      <div
                        className={`p-3 rounded-xl bg-gradient-to-r ${platform.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                      >
                        <IconComponent size={24} />
                      </div>
                      <motion.div
                        initial={{ opacity: 0, x: 10 }}
                        animate={{
                          opacity: hoveredCard === platform.id ? 1 : 0,
                          x: hoveredCard === platform.id ? 0 : 10,
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        <ExternalLink size={20} className="text-gray-400" />
                      </motion.div>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{platform.name}</h3>

                    <p className="text-sm font-medium text-gray-600 dark:text-gray-300 mb-3">{platform.username}</p>

                    <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-4">
                      {platform.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-full">
                        {platform.stats}
                      </span>

                      <motion.div
                        animate={{
                          x: hoveredCard === platform.id ? 5 : 0,
                        }}
                        transition={{ duration: 0.2 }}
                        className="text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300"
                      >
                        →
                      </motion.div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          )
        })}
      </motion.div>

      {/* Fun Stats Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
        className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700"
      >
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            Let's Build Something Amazing Together
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            I'm always excited to collaborate on innovative projects and connect with fellow developers
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: Code, label: "Projects", value: "15+" },
            { icon: Users, label: "Collaborations", value: "8+" },
            { icon: MessageCircle, label: "Open to Chat", value: "24/7" },
            { icon: Send, label: "Response Time", value: "< 24h" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 text-primary rounded-xl mb-3">
                <stat.icon size={20} />
              </div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
          Ready to start a conversation? Pick your preferred platform above!
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
              href="https://mail.google.com/mail/?view=cm&fs=1&to=chavezalex285@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-medium hover:bg-primary/90 transition-colors"
            >
              <Mail size={18} />
              Quick Email
            </Link>
          <Link
            href="https://www.linkedin.com/in/alex-chavez30/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-700 transition-colors"
          >
            <Linkedin size={18} />
            Connect on LinkedIn
          </Link>
        </div>
      </motion.div>
    </div>
  )
}
