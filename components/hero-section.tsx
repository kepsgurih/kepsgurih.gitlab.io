"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { ParticlesBackground } from "@/components/ui/particles-background"
import Image from "next/image"

export function HeroSection() {
  return (
    <div className="justify-center align-center items-center relative min-h-screen flex flex-col overflow-hidden bg-gradient-to-br from-secondary/30 via-background to-accent/30">
      <Navbar />
      <ParticlesBackground className="opacity-30" />
      <div className="flex-1 flex items-center">
        <div className="container mx-auto p-[2rem] grid gap-8 py-12 md:grid-cols-2 md:py-24">
          <motion.div
            className="order-last md:order-first flex flex-col justify-center gap-4"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1
              className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {"Hi, I'm "}
              <motion.span
                className="text-primary"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 0.5,
                  type: "spring",
                  stiffness: 200,
                }}
              >
                Kevin Adhi Krisma
              </motion.span>
            </motion.h1>
            <motion.p
              className="max-w-[600px] text-muted-foreground md:text-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              A passionate full-stack developer specializing in creating beautiful and functional web applications.
            </motion.p>
            <motion.div
              className="flex flex-col gap-2 min-[400px]:flex-row"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <Button asChild size="lg" className="group">
                <Link href="#projects">
                  View My Work
                  <motion.span initial={{ x: 0 }} whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </motion.span>
                </Link>
              </Button>
              <Button variant="outline" size="lg">
                <Link href="#contact">Contact Me</Link>
              </Button>
            </motion.div>
          </motion.div>
          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              type: "spring",
              stiffness: 100,
            }}
          >
            <motion.div
              className="order-first md:order-last relative aspect-square w-full max-w-[500px] overflow-hidden rounded-full bg-transparent"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="absolute inset-0"
                transition={{
                  duration: 5,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              >
                <Image
                  alt="Profile"
                  className="aspect-square h-full w-full object-cover"
                  width={400}
                  height={400}
                  src="/myface.png"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <motion.div
        className="absolute bottom-4 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: 1.5,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm text-muted-foreground">Scroll Down</span>
          <div className="h-8 w-0.5 animate-pulse bg-primary"></div>
        </div>
      </motion.div>
    </div>
  )
}

