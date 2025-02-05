"use client";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";

interface Feature {
  id: number;
  question: string;
  answer: string[];
}

const features: Feature[] = [
  {
    id: 1,
    question: "Why Choose Xylo?",
    answer: [
      "All-in-One Monetization Platform",
      "Forget juggling multiple services—Xylo gives you everything in one place!",
    ],
  },
  {
    id: 2,
    question: "Sell Your Game & DLCs",
    answer: ["One-time purchases", "Expansions", "Exclusive editions"],
  },
  {
    id: 3,
    question: "In-Game Purchases",
    answer: ["Virtual items", "Skins", "Characters", "Power-ups—whatever you want!"],
  },
  {
    id: 4,
    question: "Battle Pass & Subscriptions",
    answer: ["Boost retention with premium access", "Exclusive rewards"],
  },
  {
    id: 5,
    question: "NFT Creation & Marketplace",
    answer: ["Mint", "Sell", "Resell NFTs effortlessly"],
  },
  {
    id: 6,
    question: "Regional Pricing & Smart Discounts",
    answer: ["Set prices based on location", "User type & more"],
  },
];

export default function FeatureCards() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  return (
    <section className="w-full overflow-x-hidden py-12 md:py-24 lg:py-32 bg-black">
      <div className="container px-4 md:px-6">
        <motion.div 
          className="text-center mb-12"
          style={{
            opacity: useTransform(scrollYProgress, [0, 0.2], [0, 1]),
            y: useTransform(scrollYProgress, [0, 0.2], [50, 0])
          }}
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#00D632] to-[#00FF94] bg-clip-text text-transparent mb-4">
            Game Monetization Made Simple
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Discover how Xylo transforms your game&apos;s monetization strategy with our comprehensive suite of tools and
            features.
          </p>
        </motion.div>
        <div className="grid gap-4 overflow-hidden" ref={containerRef}>
          {features.map((feature, index) => (
            <FeatureCard 
              key={feature.id} 
              feature={feature} 
              isEven={feature.id % 2 === 0} 
              scrollYProgress={scrollYProgress}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ 
  feature, 
  isEven, 
  scrollYProgress, 
  index 
}: { 
  feature: Feature; 
  isEven: boolean; 
  scrollYProgress: MotionValue<number>;
  index: number;
}) {
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    [isEven ? 100 : -100, 0]
  );
  return (
    <motion.div
      style={{
        x,
        opacity: useTransform(
          scrollYProgress,
          [0, 0.2 + index * 0.1],
          [0, 1]
        ),
      }}
    >
      <Card className="group relative h-[120px] overflow-hidden rounded-xl border border-white/10 bg-black shadow-[0_0_15px_rgba(0,214,50,0.1)] transition-all duration-500 hover:shadow-[0_0_30px_rgba(0,214,50,0.2)] w-full">
        <motion.div
          initial="initial"
          whileHover="hover"
          className="relative h-full w-full flex items-center justify-center"
        >
          {/* Question */}
          <motion.h3
            variants={{
              initial: { opacity: 1 },
              hover: { opacity: 0 },
            }}
            className="bg-gradient-to-r from-[#00D632] to-[#00FF94] bg-clip-text text-3xl md:text-4xl font-bold text-transparent text-center px-6"
          >
            {feature.question}
          </motion.h3>
          {/* Answer Container */}
          <motion.div
            variants={{
              initial: {
                x: isEven ? "100%" : "-100%",
                opacity: 0,
              },
              hover: {
                x: 0,
                opacity: 1,
              },
            }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
            className={cn(
              "absolute inset-0 flex flex-col justify-center items-center bg-gradient-to-r p-4",
              isEven ? "from-[#00FF94] to-[#00D632]" : "from-[#00D632] to-[#00FF94]",
            )}
          >
            <ul className=" text-black text-center">
              {feature.answer.map((item, index) => (
                <li key={index} className="text-xl ">
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </Card>
    </motion.div>
  );
}