"use client"

import { Briefcase, Calendar, MapPin, Globe, ChevronRight } from "lucide-react"
import Image from "next/image"
import { useState, useEffect } from "react"
import dynamic from "next/dynamic"

const MotionDiv = dynamic(() => import("framer-motion").then((mod) => mod.motion.div), { ssr: false })
const MotionH2 = dynamic(() => import("framer-motion").then((mod) => mod.motion.h2), { ssr: false })
const MotionLi = dynamic(() => import("framer-motion").then((mod) => mod.motion.li), { ssr: false })

const experiences = [
  {
    company: "Freelance",
    location: "Remote",
    period: "2024 ",
    role: "MERN Stack Developer",
    responsibilities: [
      "Developing custom web applications for international clients",
      "Building responsive and scalable frontend interfaces with React",
      "Implementing secure backend systems with Node.js and Express",
      "Collaborating with clients to deliver high-quality solutions",
    ],
  },
  {
    company: "Salaba Fasteners",
    location: "Saudi Arabia (Hybrid)",
    period: "2024" ,
    role: "MERN Stack Developer",
    responsibilities: [
      "Developed full-fledged ERP system using MERN stack",
      "Designed and implemented RESTful APIs",
      "Created responsive interfaces with React.js and Redux",
      "Implemented secure authentication systems",
    ],
  },
  
  
]

export default function Experience() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null // or a loading placeholder
  }

  return (
    <section
      id="experience"
      className="py-20 bg-gradient-to-br from-background to-background/80 transition-colors duration-300 overflow-hidden relative"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <MotionH2
          className="text-3xl sm:text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Professional Experience
        </MotionH2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <MotionDiv
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-2 h-full bg-primary transform origin-left scale-y-0 group-hover:scale-y-100 transition-transform duration-300 ease-in-out"></div>
              <div className="p-8">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
                  <h3 className="text-2xl font-semibold mb-2 sm:mb-0 flex items-center">
                    {exp.company === "Freelance" ? (
                      <Globe className="w-6 h-6 mr-2 text-primary" />
                    ) : (
                      <Briefcase className="w-6 h-6 mr-2 text-primary" />
                    )}
                    {exp.company}
                  </h3>
                  <div className="flex flex-col sm:flex-row sm:items-center text-sm text-muted-foreground">
                    <span className="flex items-center mb-1 sm:mb-0 sm:mr-4">
                      <MapPin className="w-4 h-4 mr-1" />
                      {exp.location}
                    </span>
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {exp.period}
                    </span>
                  </div>
                </div>
                <p className="text-xl font-medium mb-4 text-primary">{exp.role}</p>
                <ul className="space-y-2">
                  {exp.responsibilities.map((resp, idx) => (
                    <MotionLi
                      key={idx}
                      className="flex items-start text-muted-foreground"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.1 * idx }}
                    >
                      <ChevronRight className="w-5 h-5 mr-2 text-primary flex-shrink-0 mt-1" />
                      <span>{resp}</span>
                    </MotionLi>
                  ))}
                </ul>
              </div>
            </MotionDiv>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 right-0 w-64 h-64 -mb-32 -mr-32 opacity-10">
        <Image src="/placeholder.svg?height=256&width=256" alt="Decorative background" width={256} height={256} />
      </div>
    </section>
  )
}

