"use client";
import { useState, useEffect } from "react";
import { dummyPaymentOptions } from "@/data/payment-wall";
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import Image from 'next/image';

interface LogoItem {
  imgUrl: string;
  altText: string;
}

interface PaymentOptionsWallProps {
  items?: LogoItem[];
  direction?: "horizontal" | "vertical";
  pauseOnHover?: boolean;
  size?: string;
  duration?: string;
  textColor?: string;
  bgColor?: string;
  bgAccentColor?: string;
}

function PaymentOptionsWall({
  items = dummyPaymentOptions,
  direction = "horizontal",
  pauseOnHover = true,
  size = "clamp(8rem, 1rem + 20vmin, 20rem)",
  duration = "60s",
  textColor = "#FFFFFF",
  bgColor = "#000000",
  bgAccentColor = "#111111",
}: PaymentOptionsWallProps) {
  const [isPaused, setIsPaused] = useState(false);
  const [key, setKey] = useState(0);

  useEffect(() => {
    setKey((prevKey) => prevKey + 1);
  }, []);

  const wrapperClass = [
    "flex",
    "flex-col",
    "gap-[calc(var(--size)/14)]",
    "mx-auto",
    "max-w-full",
    "p-[20px_10px]",
    direction === "vertical" && "flex-row justify-center h-full",
  ]
    .filter(Boolean)
    .join(" ");

  const marqueeClass = [
    "relative",
    "flex",
    "overflow-hidden",
    "select-none",
    "gap-[calc(var(--size)/14)]",
    "justify-start",
    "w-full",
    direction === "vertical" ? "flex-col h-full" : "",
    isPaused && "paused",
  ]
    .filter(Boolean)
    .join(" ");

  const scrollClass = direction === "vertical" ? "animate-scrollY" : "animate-scrollX";

  const maskStyle = {
    maskImage:
      direction === "vertical"
        ? "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 20%, rgba(0, 0, 0, 1) 80%, rgba(0, 0, 0, 0) 100%)"
        : "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 20%, rgba(0, 0, 0, 1) 80%, rgba(0, 0, 0, 0) 100%)",
    maskSize: "cover",
    maskRepeat: "no-repeat",
  };

  return (
    <ParallaxProvider>
      <section className="py-16 bg-black text-white relative overflow-hidden">
        <style jsx>{`
          @keyframes scrollX {
            from { transform: translateX(0); }
            to { transform: translateX(-100%); }
          }
          @keyframes scrollY {
            from { transform: translateY(0); }
            to { transform: translateY(-100%); }
          }
          .animate-scrollX {
            animation: scrollX var(--duration) linear infinite;
          }
          .animate-scrollY {
            animation: scrollY var(--duration) linear infinite;
          }
          .paused .animate-scrollX,
          .paused .animate-scrollY {
            animation-play-state: paused;
          }
        `}</style>
        {/* Parallax Background Elements */}
        <Parallax translateY={[20, -20]} className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1f3e28] to-[#000000 ]" />
        </Parallax>
        <div className="container mx-auto px-4 relative">
          <Parallax translateY={[-10, 10]} className="mb-8">
            <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-[#00D632] to-[#00FF94] text-transparent bg-clip-text">
              Payment Options
            </h2>
          </Parallax>
          <Parallax translateY={[-15, 15]} className="mb-12">
            <p className="text-xl text-center max-w-3xl mx-auto">
              We provide a wide range of payment options to ensure smooth transactions for your game monetization needs.
              Choose from popular methods trusted by gamers worldwide.
            </p>
          </Parallax>
          <article
            key={key}
            className={wrapperClass}
            style={{
              ["--size" as string]: size,
              ["--duration" as string]: duration,
              ["--color-text" as string]: textColor,
              ["--color-bg" as string]: bgColor,
              ["--color-bg-accent" as string]: bgAccentColor,
              color: "var(--color-text)",
              backgroundColor: "var(--color-bg)",
            }}
          >
            <div
              className={marqueeClass}
              style={maskStyle}
              onMouseEnter={() => pauseOnHover && setIsPaused(true)}
              onMouseLeave={() => pauseOnHover && setIsPaused(false)}
            >
              <div
                className={`flex-shrink-0 flex items-center justify-around gap-[calc(var(--size)/14)] min-w-full ${scrollClass}`}
              >
                {items.map((item, idx) => (
                  <Parallax key={idx} translateY={[5, -5]} className="flex-shrink-0">
                    <Image
                      src={item.imgUrl || "/placeholder.svg"}
                      alt={item.altText}
                      width={500}
                      height={300}
                      className={[
                        "bg-[var(--color-bg-accent)]",
                        "rounded-md",
                        "object-contain",
                        "aspect-video",
                        `w-[var(--size)] p-[calc(var(--size)/10)]`,
                        direction === "vertical" && "aspect-square w-[calc(var(--size)/1.5)] p-[calc(var(--size)/6)]",
                      ]
                        .filter(Boolean)
                        .join(" ")}

                        //gooof
                    />
                  </Parallax>
                ))}
              </div>
              {/* Duplicate for seamless loop */}
              <div
                aria-hidden="true"
                className={`flex-shrink-0 flex items-center justify-around gap-[calc(var(--size)/14)] min-w-full ${scrollClass}`}
              >
                {items.map((item, idx) => (
                  <Parallax key={`dup-${idx}`} translateY={[5, -5]} className="flex-shrink-0">
                    <Image
                      src={item.imgUrl || "/placeholder.svg"}
                      alt={item.altText}
                      width={500}
                      height={300}
                      className={[
                        "bg-[var(--color-bg-accent)]",
                        "rounded-md",
                        "object-contain",
                        "aspect-video",
                        `w-[var(--size)] p-[calc(var(--size)/10)]`,
                        direction === "vertical" && "aspect-square w-[calc(var(--size)/1.5)] p-[calc(var(--size)/6)]",
                      ]
                        .filter(Boolean)
                        .join(" ")}
                    />
                  </Parallax>
                ))}
              </div>
            </div>
          </article>
        </div>
      </section>
    </ParallaxProvider>
  );
}

export default PaymentOptionsWall;