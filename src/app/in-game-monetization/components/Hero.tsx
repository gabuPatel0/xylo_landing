"use client"
import { useState, useEffect, useMemo } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Parallax } from 'react-scroll-parallax'
import { Button } from "@/components/ui/button"
import { DollarSign, Gamepad2, Coins, Wallet, CircleDollarSign } from "lucide-react"
interface IconPosition {
  left: string;
  top: string;
}
const FloatingIcons = () => {
  const icons = useMemo(() => [Gamepad2, DollarSign, Coins, Wallet, CircleDollarSign], [])
  const [iconPositions, setIconPositions] = useState<IconPosition[]>([])
  useEffect(() => {
    const positions = icons.map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`
    }))
    setIconPositions(positions)
  }, [icons])
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {icons.map((Icon, index) => (
        iconPositions[index] && (
          <Parallax key={index} speed={5 + Math.random() * 10}>
            <motion.div
              className="absolute text-[#00FF94] opacity-30"
              style={iconPositions[index]}
              animate={{
                y: ["-5%", "5%", "-5%"],
                x: ["-2%", "2%", "-2%"],
              }}
              transition={{
                duration: 6 + Math.random() * 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <Icon className="w-8 h-8 md:w-12 md:h-12" />
            </motion.div>
          </Parallax>
        )
      ))}
    </div>
  )
}
const FloatingPaths = ({ position }: { position: number }) => {
  const paths = Array.from({ length: 36 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${289 + i * 6}C-${
      380 - i * 5 * position
    } -${289 + i * 6} -${312 - i * 5 * position} ${116 - i * 6} ${
      152 - i * 5 * position
    } ${243 - i * 6}C${616 - i * 5 * position} ${370 - i * 6} ${
      684 - i * 5 * position
    } ${775 - i * 6} ${684 - i * 5 * position} ${775 - i * 6}`,
  }))
  return (
    <div className="absolute inset-0 pointer-events-none">
      <Parallax speed={position * 5}>
        <svg className="w-full h-full text-[#00FF94]" viewBox="0 0 696 316" fill="none">
          <title>Background Paths</title>
          {paths.map((path) => (
            <motion.path
              key={path.id}
              d={path.d}
              stroke="currentColor"
              strokeWidth={0.5 + path.id * 0.05}
              strokeOpacity={0.15 + path.id * 0.015}
              initial={{ pathLength: 0.3, opacity: 0.3 }}
              animate={{
                pathLength: 1,
                opacity: [0.2, 0.4, 0.2],
                pathOffset: [0, 1, 0],
              }}
              transition={{
                duration: 20 + Math.random() * 10,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            />
          ))}
        </svg>
      </Parallax>
    </div>
  )
}
export default function Hero() {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  }
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  }
  const handleViewFeaturesClick = () => {
    const featureSection = document.getElementById("feature-section")
    if (featureSection) {
      const yOffset = -56 // Adjust this value if pt-14 is different
      const y = featureSection.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: "smooth" })
    }
  }
  return (
    <section className="relative min-h-screen overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Parallax speed={-20}>
          <div className="absolute inset-0 bg-gradient-to-b from-[#00FF94]/5 to-transparent pointer-events-none" />
        </Parallax>
      </div>
      <FloatingIcons />
      <FloatingPaths position={1} />
      <FloatingPaths position={-1} />
      <div className="relative z-10">
        <div className="container relative z-10 mx-auto flex min-h-screen items-stretch justify-center px-4 py-10  lg:px-8">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={containerVariants}
            className="flex flex-col items-center gap-8 text-center max-w-3xl"
          >
            <Parallax speed={5}>
              <motion.span
                variants={itemVariants}
                className="inline-block rounded-full bg-black/50 backdrop-blur-sm px-6 py-2 text-sm font-medium text-[#00D632] border border-[#00D632]/20"
              >
                GAME MONETIZATION SUITE
              </motion.span>
            </Parallax>
            <Parallax speed={10}>
              <motion.h1 variants={itemVariants} className="text-5xl font-bold tracking-tight text-white sm:text-7xl">
                Xylo Monetization Suite –{" "}
                <span className="bg-gradient-to-r from-[#00D632] to-[#00FF94] bg-clip-text text-transparent">
                  Power Up Your Game&apos;s Revenue!
                </span>
              </motion.h1>
            </Parallax>
            <Parallax speed={15}>
              <motion.p
                variants={itemVariants}
                className="text-xl text-gray-200 max-w-2xl bg-black/50 backdrop-blur-sm rounded-xl p-4"
              >
                Turn Your Game Into a Money-Making Machine – No Hassle, No Code! Xylo gives game developers a complete,
                no-code monetization suite to sell games, in-game assets, subscriptions, NFTs, and more in just a few
                clicks.
              </motion.p>
            </Parallax>
            <Parallax speed={20}>
              <motion.div variants={itemVariants} className="flex flex-wrap gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-[#00D632] to-[#00FF94] text-black hover:from-[#00FF94] hover:to-[#00D632] text-lg px-8"
                >
                  Start Monetizing
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[#00D632] text-[#00D632] hover:bg-[#00D632]/10 text-lg px-8 bg-black/50 hover:text-white backdrop-blur-sm"
                  onClick={handleViewFeaturesClick}
                >
                  View Features
                </Button>
              </motion.div>
            </Parallax>
          </motion.div>
        </div>
      </div>
    </section>
  )
}