"use client"

import { motion } from "framer-motion"
import { ExternalLink, GitlabIcon as GitHub } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    title: "Disney+ Clone",
    description:
      "A fully responsive Disney+ streaming platform clone built with Next.js and Tailwind CSS. Features include dynamic content loading, smooth animations, and a dark theme.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/12124545-7AyszIqdHpj2M5jqlEeffAHviWwhrd.png",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
    githubLink: "https://github.com/yourusername/disney-plus-clone",
    liveLink: "https://disney-plus-clone.vercel.app",
  },
  {
    title: "emergency communication platform",
    description:
      "An intelligent chatbot that helps users create and customize their portfolio websites using natural language instructions.",
    image: "/emergency.png?height=300&width=400",
    technologies: ["Next.js","Tailwind CSS", "Raeact.JS", ],
    githubLink: "https://github.com/yourusername/ai-portfolio-assistant",
    liveLink: "https://ai-portfolio-assistant.vercel.app",
  },
  {
    title: "E-commerce ",
    description:
      "A comprehensive admin dashboard for managing online store operations, including inventory, orders, and analytics.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    githubLink: "https://github.com/yourusername/ecommerce-dashboard",
    liveLink: "https://ecommerce-dashboard.vercel.app",
  },
]

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-br from-background/80 to-background transition-colors duration-300 overflow-hidden relative"
    >
      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Featured Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group bg-card rounded-xl shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    <GitHub className="w-5 h-5 mr-2" />
                    GitHub
                  </a>
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

