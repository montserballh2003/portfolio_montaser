"use client"

import Image from "next/image"
import { GitlabIcon as GitHub, Linkedin, Mail, ArrowDown, Sparkles } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import type React from "react" // Added import for React

const HeroBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", updateMousePosition)
    return () => window.removeEventListener("mousemove", updateMousePosition)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Gradient Orb that follows mouse */}
      <div
        className="pointer-events-none absolute -inset-px opacity-50 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(29,78,216,0.15), transparent 80%)`,
        }}
      />

      {/* Ambient background gradients */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
        <div className="absolute top-0 -right-4 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-600 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:50px_50px]" />
    </div>
  )
}

const AnimatedText = ({ text }: { text: string }) => {
  return (
    <motion.span
      className="inline-block"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          className="inline-block"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.03 }}
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  )
}

export default function Hero() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background to-background/80 dark:from-background dark:to-background/80"
    >
      <HeroBackground />

      <div className="container px-4 mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 pt-20">
          <motion.div
            className="lg:w-1/2 text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div style={{ y, opacity }} className="space-y-6">
              <motion.div
                className="inline-flex items-center px-3 py-1 rounded-full border border-primary/20 bg-primary/10 text-primary backdrop-blur-sm"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <Sparkles className="w-4 h-4 mr-2" />
                <span className="text-sm font-medium">Available for hire</span>
              </motion.div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                <AnimatedText text="Montaser $7arfoush" />
              </h1>

              <h2 className="text-2xl md:text-3xl font-semibold text-foreground/80">
                <AnimatedText text="Full Stack Developer" />
              </h2>

              <motion.p
                className="text-lg md:text-xl text-muted-foreground max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                Passionate and highly motivated front-end web developer with a solid foundation in back-end technologies
and web design tools. Adept at creating dynamic, user-friendly websites and eager to contribute to innovative
projects through a rewarding internship or junior development role. Enthusiastic about collaborating with
experienced teams to enhance technical skills and deliver impactful web solutions.
              </motion.p>

              <motion.div
                className="flex justify-center lg:justify-start space-x-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 }}
              >
                <SocialLink href="https://github.com/montserballh2003" icon={<GitHub className="w-5 h-5" />} label="GitHub" />
                <SocialLink href="https://www.linkedin.com/in/montaser-harfoush-89084832b/" icon={<Linkedin className="w-5 h-5" />} label="LinkedIn" />
                <SocialLink href="mailto:mntserharfoush456@gmail.com" icon={<Mail className="w-5 h-5" />} label="Email" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.1 }}
              >
                <Button
                  size="lg"
                  onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Explore My Work
                  <ArrowDown className="w-4 h-4 ml-2" />
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96 mx-auto">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 dark:from-blue-600 dark:to-purple-600 rounded-3xl opacity-50 blur-2xl"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 10,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 dark:from-purple-600 dark:to-blue-600 rounded-3xl opacity-50 blur-2xl"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, -5, 5, 0],
                }}
                transition={{
                  duration: 10,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                  delay: 0.5,
                }}
              />
              <motion.div
                className="relative rounded-2xl overflow-hidden shadow-2xl backdrop-blur-sm border border-primary/20"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              >
               <div className="relative w-full aspect-square max-w-md mx-auto">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_2024-01-11_14-38-00.jpg-VGiVomYwkQM6Hin8Dt370FC4Nc5F6K.jpeg"
                alt="Profile photo"
                fill
                priority
                className="object-cover rounded-2xl shadow-2xl"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
                
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.3, duration: 0.8 }}
      >
        <motion.div
          className="w-1 h-12 bg-gradient-to-b from-primary to-primary/0 rounded-full"
          animate={{ scaleY: [1, 0.8, 1] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
        />
      </motion.div>
    </section>
  )
}

const SocialLink = ({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) => (
  <motion.a
    href={href}
    className="p-3 rounded-full bg-background/80 hover:bg-background dark:bg-foreground/10 dark:hover:bg-foreground/20 backdrop-blur-sm transition-all duration-300 shadow-lg hover:shadow-xl"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
  >
    {icon}
    <span className="sr-only">{label}</span>
  </motion.a>
)

