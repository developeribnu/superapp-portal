"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import {
  Code2,
  Briefcase,
  TrendingUp,
  Zap,
  Gamepad2,
  Film,
  Gavel,
  Car,
  Users,
  ArrowRight,
  Sparkles,
  Building2,
  Target,
} from "lucide-react";

interface Superapp {
  id: string;
  name: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  accentColor: string;
  bgGradient: string;
  sectionCount: number;
  sections: string[];
  delay: number;
}

const superapps: Superapp[] = [
  {
    id: "tech",
    name: "superapp-tech",
    title: "Tech & AI Hub",
    description: "Explore cutting-edge technology and AI innovations",
    icon: <Code2 className="w-8 h-8" />,
    color: "cyan",
    accentColor: "from-cyan-500 to-blue-600",
    bgGradient: "from-cyan-500/20 to-blue-600/20",
    sectionCount: 10,
    sections: [
      "AI/LLM",
      "Cybersecurity",
      "Infrastructure",
      "Automation",
      "Scraping",
      "AI Tools",
      "GitHub",
      "Content Tools",
      "Prompts",
      "Distributed Systems",
    ],
    delay: 0,
  },
  {
    id: "business",
    name: "superapp-business",
    title: "Business Hub",
    description: "Master business strategy and entrepreneurship",
    icon: <Briefcase className="w-8 h-8" />,
    color: "emerald",
    accentColor: "from-emerald-500 to-green-600",
    bgGradient: "from-emerald-500/20 to-green-600/20",
    sectionCount: 12,
    sections: [
      "Sales",
      "Marketing",
      "Strategy",
      "Leadership",
      "Management",
      "Consulting",
      "HR",
      "Productivity",
      "Side Hustle",
      "Negotiation",
      "Product",
      "Project Tools",
    ],
    delay: 0.1,
  },
  {
    id: "finance",
    name: "superapp-finance",
    title: "Finance Hub",
    description: "Navigate personal and investment finance",
    icon: <TrendingUp className="w-8 h-8" />,
    color: "amber",
    accentColor: "from-amber-500 to-orange-600",
    bgGradient: "from-amber-500/20 to-orange-600/20",
    sectionCount: 7,
    sections: [
      "Personal Finance",
      "Investment",
      "Crypto",
      "Investment Banking",
      "Ekonomi",
      "Smart Money",
      "Polymarket",
    ],
    delay: 0.2,
  },
  {
    id: "otomotif",
    name: "superapp-otomotif",
    title: "Otomotif Hub",
    description: "Your complete automotive knowledge center",
    icon: <Car className="w-8 h-8" />,
    color: "red",
    accentColor: "from-red-500 to-rose-600",
    bgGradient: "from-red-500/20 to-rose-600/20",
    sectionCount: 2,
    sections: ["Mobil", "Motor"],
    delay: 0.3,
  },
  {
    id: "lifestyle",
    name: "superapp-lifestyle",
    title: "Lifestyle Hub",
    description: "Enhance your lifestyle and personal interests",
    icon: <Sparkles className="w-8 h-8" />,
    color: "teal",
    accentColor: "from-teal-500 to-cyan-600",
    bgGradient: "from-teal-500/20 to-cyan-600/20",
    sectionCount: 4,
    sections: ["Gadget", "Health", "Kebun", "Teknik Sipil"],
    delay: 0.4,
  },
  {
    id: "hukum",
    name: "superapp-hukum",
    title: "Hukum & Politik Hub",
    description: "Law, justice, and political knowledge",
    icon: <Gavel className="w-8 h-8" />,
    color: "indigo",
    accentColor: "from-indigo-500 to-purple-600",
    bgGradient: "from-indigo-500/20 to-purple-600/20",
    sectionCount: 3,
    sections: ["Law & Legal", "Politik", "Anti-Korupsi"],
    delay: 0.5,
  },
  {
    id: "media",
    name: "superapp-media",
    title: "Media Hub",
    description: "Create, share, and consume media content",
    icon: <Film className="w-8 h-8" />,
    color: "pink",
    accentColor: "from-pink-500 to-rose-600",
    bgGradient: "from-pink-500/20 to-rose-600/20",
    sectionCount: 4,
    sections: ["Social Media", "Film", "Video AI", "Content Creation"],
    delay: 0.6,
  },
  {
    id: "games",
    name: "superapp-games",
    title: "Games Hub",
    description: "Explore gaming strategies and entertainment",
    icon: <Gamepad2 className="w-8 h-8" />,
    color: "purple",
    accentColor: "from-purple-500 to-pink-600",
    bgGradient: "from-purple-500/20 to-pink-600/20",
    sectionCount: 3,
    sections: ["Game Vault", "Clash of Clans", "Travian"],
    delay: 0.7,
  },
];

const StatCounter: React.FC<{ end: number; suffix: string; label: string }> = ({
  end,
  suffix,
  label,
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => {
        if (prev < end) {
          return prev + Math.ceil(end / 100);
        }
        return end;
      });
    }, 50);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <motion.div
      className="flex flex-col items-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="text-4xl font-bold text-gradient">{count}+</div>
      <div className="text-sm text-cyan-300 mt-2">{label}</div>
    </motion.div>
  );
};

const SuperappCard: React.FC<{
  superapp: Superapp;
  index: number;
}> = ({ superapp, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  const colorMap: { [key: string]: string } = {
    cyan: "border-cyan-500/30 hover:border-cyan-400",
    emerald: "border-emerald-500/30 hover:border-emerald-400",
    amber: "border-amber-500/30 hover:border-amber-400",
    red: "border-red-500/30 hover:border-red-400",
    teal: "border-teal-500/30 hover:border-teal-400",
    indigo: "border-indigo-500/30 hover:border-indigo-400",
    pink: "border-pink-500/30 hover:border-pink-400",
    purple: "border-purple-500/30 hover:border-purple-400",
  };

  const textColorMap: { [key: string]: string } = {
    cyan: "text-cyan-400",
    emerald: "text-emerald-400",
    amber: "text-amber-400",
    red: "text-red-400",
    teal: "text-teal-400",
    indigo: "text-indigo-400",
    pink: "text-pink-400",
    purple: "text-purple-400",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: superapp.delay, duration: 0.6 }}
      viewport={{ once: true }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="h-full"
    >
      <div
        className={`group relative h-full p-8 rounded-2xl border-2 transition-all duration-300 cursor-pointer
          glass-morphism
          ${colorMap[superapp.color]}
          hover:shadow-2xl
          ${isHovered ? "scale-105" : "scale-100"}`}
      >
        {/* Gradient background overlay */}
        <div
          className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none
            bg-gradient-to-br ${superapp.bgGradient}`}
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col h-full">
          {/* Icon */}
          <motion.div
            className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4
              bg-gradient-to-br ${superapp.accentColor} text-white
              group-hover:shadow-lg transition-all duration-300`}
            animate={isHovered ? { scale: 1.1, rotate: 5 } : { scale: 1 }}
          >
            {superapp.icon}
          </motion.div>

          {/* Title */}
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
            {superapp.title}
          </h3>

          {/* Description */}
          <p className="text-sm text-gray-300 mb-6 flex-grow">
            {superapp.description}
          </p>

          {/* Section count badge */}
          <div className="mb-6 flex items-center gap-2">
            <span
              className={`text-xs font-semibold px-3 py-1 rounded-full
                bg-gradient-to-r ${superapp.accentColor} text-white`}
            >
              {superapp.sectionCount} Sections
            </span>
          </div>

          {/* Sections preview */}
          <div className="mb-6 flex flex-wrap gap-2">
            {superapp.sections.slice(0, 3).map((section, i) => (
              <motion.span
                key={i}
                className={`text-xs px-2 py-1 rounded
                  bg-slate-800/50 ${textColorMap[superapp.color]}
                  border border-current/20`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.1 * i }}
              >
                {section}
              </motion.span>
            ))}
            {superapp.sections.length > 3 && (
              <span className={`text-xs px-2 py-1 rounded ${textColorMap[superapp.color]}`}>
                +{superapp.sections.length - 3} more
              </span>
            )}
          </div>

          {/* CTA Button */}
          <motion.button
            className={`w-full mt-auto py-3 px-4 rounded-lg font-semibold
              bg-gradient-to-r ${superapp.accentColor} text-white
              hover:shadow-lg transition-all duration-300
              flex items-center justify-center gap-2
              group/btn`}
            whileHover={{ y: -2 }}
            whileTap={{ y: 0 }}
          >
            <span>Explore</span>
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </motion.button>
        </div>

        {/* Glow effect on hover */}
        {isHovered && (
          <motion.div
            className={`absolute inset-0 rounded-2xl pointer-events-none
              bg-gradient-to-r ${superapp.accentColor}`}
            style={{ opacity: 0.05 }}
            animate={{ opacity: [0.05, 0.1, 0.05] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        )}
      </div>
    </motion.div>
  );
};

const CategorySection: React.FC<{
  title: string;
  icon: React.ReactNode;
  superapps: Superapp[];
  accentColor: string;
}> = ({ title, icon, superapps, accentColor }) => {
  return (
    <motion.section
      className="mb-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {/* Section Header */}
      <div className="mb-12 flex items-center gap-4">
        <motion.div
          className={`p-3 rounded-xl bg-gradient-to-br ${accentColor} text-white`}
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          {icon}
        </motion.div>
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            {title}
          </h2>
          <p className="text-gray-400">
            Unified tools and knowledge in one place
          </p>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {superapps.map((superapp, index) => (
          <SuperappCard key={superapp.id} superapp={superapp} index={index} />
        ))}
      </div>
    </motion.section>
  );
};

export default function Home() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, 50]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.8]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Floating orbs */}
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 rounded-full bg-cyan-500/10 blur-3xl"
          animate={{ y: [0, 50, 0], x: [0, 30, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-72 h-72 rounded-full bg-purple-500/10 blur-3xl"
          animate={{ y: [0, -50, 0], x: [0, -30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-96 h-96 rounded-full bg-emerald-500/5 blur-3xl -translate-x-1/2 -translate-y-1/2"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <motion.section
          style={{ y, opacity }}
          className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 relative"
        >
          {/* Gradient backdrop */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-cyan-500/20 via-transparent to-transparent blur-3xl" />
          </div>

          <div className="relative z-10 text-center max-w-4xl mx-auto">
            {/* Animated badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/50 bg-cyan-500/10 backdrop-blur-sm mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span className="text-sm font-semibold text-cyan-300">
                Welcome to the Superapp Ecosystem
              </span>
            </motion.div>

            {/* Main title with gradient */}
            <motion.h1
              className="text-5xl sm:text-6xl md:text-7xl font-black mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <span className="text-gradient">Ibnu's Superapp</span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                Ecosystem
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-xl sm:text-2xl text-gray-300 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <span className="text-cyan-300 font-bold">8 Unified Web Applications</span> | One Powerful Ecosystem
            </motion.p>

            {/* Stats Section */}
            <motion.div
              className="grid grid-cols-3 gap-8 md:gap-12 mb-12 py-12 border-y border-cyan-500/30"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <StatCounter end={8} suffix="" label="Superapps" />
              <StatCounter end={80} suffix="+" label="Sections" />
              <StatCounter end={2000} suffix="+" label="Files" />
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-bold text-white hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -4 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Superapps
              </motion.button>
              <motion.button
                className="px-8 py-4 border-2 border-cyan-500 rounded-xl font-bold text-cyan-300 hover:bg-cyan-500/10 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -4 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.button>
            </motion.div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="flex flex-col items-center gap-2">
              <span className="text-sm text-gray-400">Scroll to explore</span>
              <div className="w-6 h-10 border-2 border-cyan-500/50 rounded-full flex items-start justify-center p-2">
                <motion.div
                  className="w-1 h-2 bg-cyan-500 rounded-full"
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* Content Sections Container */}
        <div className="px-4 sm:px-6 lg:px-8 py-20">
          {/* Knowledge & Skills Section */}
          <CategorySection
            title="Knowledge & Skills"
            icon={<Code2 className="w-6 h-6" />}
            superapps={[superapps[0], superapps[1], superapps[2]]}
            accentColor="from-cyan-500 to-blue-600"
          />

          {/* Lifestyle & Knowledge Section */}
          <CategorySection
            title="Lifestyle & Learning"
            icon={<Users className="w-6 h-6" />}
            superapps={[superapps[3], superapps[4], superapps[5]]}
            accentColor="from-teal-500 to-cyan-600"
          />

          {/* Media & Entertainment Section */}
          <CategorySection
            title="Media & Entertainment"
            icon={<Film className="w-6 h-6" />}
            superapps={[superapps[6], superapps[7]]}
            accentColor="from-pink-500 to-rose-600"
          />
        </div>

        {/* CTA Section */}
        <motion.section
          className="relative px-4 sm:px-6 lg:px-8 py-20 mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <div className="rounded-3xl glass-morphism border-2 border-cyan-500/30 p-12 text-center overflow-hidden relative">
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10" />

              <div className="relative z-10">
                <motion.h2
                  className="text-4xl md:text-5xl font-bold mb-6 text-gradient"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  Ready to Explore?
                </motion.h2>

                <motion.p
                  className="text-xl text-gray-300 mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  Dive into the most comprehensive superapp ecosystem and unlock
                  knowledge across 8 different domains.
                </motion.p>

                <motion.button
                  className="px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-bold text-white hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 inline-flex items-center gap-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -4 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Get Started Now</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Footer */}
        <motion.footer
          className="border-t border-cyan-500/20 py-12 px-4 sm:px-6 lg:px-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="max-w-6xl mx-auto">
            {/* Footer content */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-2 text-gradient">
                Ibnu's Superapp Ecosystem
              </h3>
              <p className="text-gray-400 max-w-2xl mx-auto">
                A unified platform designed to empower you with knowledge,
                skills, and tools across multiple domains.
              </p>
            </div>

            {/* Footer links */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              <div>
                <h4 className="font-semibold text-white mb-3">Product</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>
                    <a href="#" className="hover:text-cyan-400 transition-colors">
                      Features
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-cyan-400 transition-colors">
                      Superapps
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-cyan-400 transition-colors">
                      Pricing
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-white mb-3">Company</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>
                    <a href="#" className="hover:text-cyan-400 transition-colors">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-cyan-400 transition-colors">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-cyan-400 transition-colors">
                      Careers
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-white mb-3">Resources</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>
                    <a href="#" className="hover:text-cyan-400 transition-colors">
                      Docs
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-cyan-400 transition-colors">
                      API
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-cyan-400 transition-colors">
                      Support
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-white mb-3">Legal</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>
                    <a href="#" className="hover:text-cyan-400 transition-colors">
                      Privacy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-cyan-400 transition-colors">
                      Terms
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-cyan-400 transition-colors">
                      License
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Footer bottom */}
            <div className="border-t border-cyan-500/20 pt-8">
              <p className="text-gray-400 text-sm">
                <span className="font-semibold text-white">
                  Built by Ibnu
                </span>{" "}
                | Powered by Next.js 15 & React 19 | © 2026 All rights reserved
              </p>
            </div>
          </div>
        </motion.footer>
      </div>
    </div>
  );
}
