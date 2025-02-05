"use client";

import FeatureSection from "./components/FeaturerCards";
import Hero from "./components/Hero";
import type React from "react";
import PaymentOptionsWall from "./components/PaymentOptionWall";
import FeatureCards from "./components/Feature";
import { ParallaxProvider } from "react-scroll-parallax";

const InGameMonetizationPage: React.FC = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <div className="pt-14">
        <ParallaxProvider>
          <Hero />
          <div id="feature-section">
            <FeatureSection />
          </div>
          <PaymentOptionsWall />
          <FeatureCards />
        </ParallaxProvider>
      </div>
    </div>
  );
};

export default InGameMonetizationPage;
