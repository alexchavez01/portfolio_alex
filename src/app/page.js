"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Github, Linkedin, Twitter, Mail, ChevronDown, ExternalLink } from "lucide-react"
import Navbar from "./components/Navbar"
import ProjectCard from "./components/project-card"
import SkillBadge from "./components/skill-badge"
import InteractiveSocials from "./components/interactive-socials"
import myImage from "/public/images/ghibli.png"
import unifyImage from "/public/images/unify.png"
import mealImage from "/public/images/mealmate.png"
import fanZone from "/public/images/fanZone.png"

export default function Home() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    // Check user preference
    const isDark =
      localStorage.getItem("darkMode") === "true" || window.matchMedia("(prefers-color-scheme: dark)").matches
    setDarkMode(isDark)
  }, [])

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("darkMode", "true")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("darkMode", "false")
    }
  }, [darkMode])

  const toggleDarkMode = () => setDarkMode(!darkMode)

  const projects = [
    {
      title: "Unify",
      description: "A networking application that allows users to connect with others in their field.",
      image: unifyImage,
      tags: ["React", "Next.js", "Javascript", "TailwindCSS"],
      github: "https://github.com/alexchavez01/unify",
      demo: "https://project1.demo.com",
    },
    {
      title: "FanZone",
      description: "World Cup application that provides real-time streaming, news, and statistics.",
      image: fanZone,
      tags: ["React", "Next.js", "Javascript", "TailwindCSS"],
      github: "https://github.com/alexchavez01/world-cup-app",
      demo: "https://world-cup-app-seven.vercel.app",
    },
    {
      title: "MealMate",
      description:
        "A meal planner, with recipe generator with AI features to generate recipe automatically based on users inputs.",
      image: mealImage,
      tags: ["React", "Javascript", "Pickaxe", "TailwindCSS"],
      github: "https://github.com/alexchavez01/mealmate",
      demo: "https://project1.demo.com",
    },
    {
      title: "Immersive  Portfolio",
      description: "An interactive  portfolio website built with Node.js and React.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Three.js", "React", "JavaScript", "TailWindCSS"],
      github: "https://github.com/username/project2",
      demo: "https://project1.demo.com",
    },
    {
      title: "Finace Dashboard",
      description: "A personal dashbaord to track, and view insights about your finances.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Node.js", "Express", "TailwindCSS", "MongoDB", "JWT", "Chart.js"],
      github: "https://github.com/username/project3",
      demo: "https://project1.demo.com",
    },
  ]

  const skills = [
    { name: "JavaScript", level: 90 },
    { name: "React", level: 92 },
    { name: "Next.js", level: 88 },
    { name: "Node.js", level: 80 },
    { name: "Python", level: 75 },
    { name: "AWS", level: 70 },
    { name: "Docker", level: 65 },
    { name: "GraphQL", level: 78 },
    { name: "TailwindCSS", level: 95 },
    { name: "MongoDB", level: 85 },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-100 transition-colors duration-300">
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32 flex flex-col md:flex-row items-center justify-between gap-10">
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block px-3 py-1 mb-4 text-sm font-medium rounded-full bg-primary/10 text-primary"
          >
            Software Engineer
          </motion.div>
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Alex Chavez
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            Building innovative solutions at the intersection of <span className="font-semibold text-primary">AI</span>,
            <span className="font-semibold text-primary"> game development</span>, and
            <span className="font-semibold text-primary"> full-stack engineering</span>.
          </motion.p>
          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <Link href="#projects" className="btn-primary">
              View Projects
            </Link>
            <Link href="#contact" className="btn-secondary">
              Contact Me
            </Link>
          </motion.div>
          <motion.div
            className="flex gap-4 mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <Link
              href="https://github.com/alexchavez01"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-link"
            >
              <Github size={20} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/alex-chavez30/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-link"
            >
              <Linkedin size={20} />
            </Link>
            <Link
              href="https://twitter.com/alexchavez"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-link"
            >
              <Twitter size={20} />
            </Link>
            <Link href="mailto:chavezalex285@gmail.com" className="social-icon-link">
              <Mail size={20} />
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-purple-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>
            <div className="relative overflow-hidden rounded-3xl border-4 border-white dark:border-gray-800 shadow-2xl">
              <Image
                src={myImage || "/placeholder.svg"}
                alt="Alex Chavez"
                width={500}
                height={500}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Scroll Indicator */}
      <motion.div
        className="flex justify-center mb-20"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        <Link
          href="#about"
          className="flex flex-col items-center text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <ChevronDown className="animate-bounce" />
        </Link>
      </motion.div>

      {/* About Section */}
      <section id="about" className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">My journey in tech</p>
          <div className="mt-8 text-lg text-gray-600 dark:text-gray-300 space-y-4">
            <p>
              I'm a Computer Science student with a passion for creating innovative solutions that solve real-world
              problems. My journey in technology began when I built my first game at 14, and I've been hooked ever
              since.
            </p>
            <p>
              With expertise in full-stack development, AI integration, and game development, I bring a versatile skill
              set to every project. I believe in writing clean, maintainable code and creating intuitive user
              experiences.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or
              sharing my knowledge through technical articles and mentoring.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Skills & Expertise</h2>
            <p className="section-subtitle">Technologies I work with</p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <SkillBadge name={skill.name} level={skill.level} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">Some of my recent work</p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link
            href="https://github.com/alexchavez01"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium"
          >
            View more projects on GitHub <ExternalLink size={16} />
          </Link>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Let's Connect</h2>
            <p className="section-subtitle">Find me on these platforms</p>
          </motion.div>
          <div className="max-w-4xl mx-auto">
            <InteractiveSocials />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center gap-6 mb-6">
            <Link
              href="https://github.com/alexchavez01"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-link"
            >
              <Github size={20} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/alex-chavez30/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-link"
            >
              <Linkedin size={20} />
            </Link>
            <Link
              href="https://twitter.com/alexchavez030"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-link"
            >
              <Twitter size={20} />
            </Link>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=chavezalex285@gmail.com"
            target="_blank" rel="noopener noreferrer" className="social-icon-link"
            > <Mail size={20} />
            </a>
          </div>
          <p className="text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Alex Chavez. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
