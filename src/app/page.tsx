'use client';

import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import {
  Search,
  TrendingUp,
  Zap,
  Code,
  Gamepad2,
  DollarSign,
  Cpu,
  Briefcase,
  Crown,
  Car,
  Heart,
  Users,
  Scale,
  Film,
  Wrench,
  Database,
  AlertCircle,
  Sparkles,
} from 'lucide-react';

// Types
interface Superapp {
  id: string;
  name: string;
  description: string;
  category: 'Knowledge' | 'Content' | 'Tools' | 'Fun';
  icon: React.ReactNode;
  color: string;
  colorBg: string;
  subs: number;
  routes: number;
}

// Superapp data with all 16 apps
const superapps: Superapp[] = [
  {
    id: 'superapp-finance',
    name: 'Finance & Investment',
    description: 'Crypto, ekonomi, investment banking, smart money, Polymarket',
    category: 'Knowledge',
    icon: <DollarSign className="w-8 h-8" />,
    color: '#3B82F6',
    colorBg: 'bg-blue-500/10 border-blue-500/20',
    subs: 6,
    routes: 86,
  },
  {
    id: 'superapp-tech',
    name: 'Tech & AI',
    description: 'LLM AI, cybersecurity, infra, distributed systems, prompt engineering',
    category: 'Knowledge',
    icon: <Cpu className="w-8 h-8" />,
    color: '#3B82F6',
    colorBg: 'bg-blue-500/10 border-blue-500/20',
    subs: 8,
    routes: 42,
  },
  {
    id: 'superapp-sales',
    name: 'Sales & Business',
    description: 'Business strategies, sales techniques, side hustles',
    category: 'Knowledge',
    icon: <TrendingUp className="w-8 h-8" />,
    color: '#3B82F6',
    colorBg: 'bg-blue-500/10 border-blue-500/20',
    subs: 3,
    routes: 122,
  },
  {
    id: 'superapp-leadership',
    name: 'Leadership & Management',
    description: 'Consulting, leadership, management, negotiation',
    category: 'Knowledge',
    icon: <Crown className="w-8 h-8" />,
    color: '#3B82F6',
    colorBg: 'bg-blue-500/10 border-blue-500/20',
    subs: 4,
    routes: 41,
  },
  {
    id: 'superapp-otomotif',
    name: 'Otomotif',
    description: 'Car and motorcycle knowledge, maintenance, reviews',
    category: 'Knowledge',
    icon: <Car className="w-8 h-8" />,
    color: '#3B82F6',
    colorBg: 'bg-blue-500/10 border-blue-500/20',
    subs: 2,
    routes: 29,
  },
  {
    id: 'superapp-lifestyle',
    name: 'Lifestyle',
    description: 'Gadgets, health, gardening, civil engineering',
    category: 'Knowledge',
    icon: <Heart className="w-8 h-8" />,
    color: '#3B82F6',
    colorBg: 'bg-blue-500/10 border-blue-500/20',
    subs: 4,
    routes: 38,
  },
  {
    id: 'superapp-workplace',
    name: 'Workplace Skills',
    description: 'Human resources, productivity, professional development',
    category: 'Knowledge',
    icon: <Users className="w-8 h-8" />,
    color: '#3B82F6',
    colorBg: 'bg-blue-500/10 border-blue-500/20',
    subs: 2,
    routes: 39,
  },
  {
    id: 'superapp-hukum',
    name: 'Hukum & Politik',
    description: 'Legal matters, politics, corruption analysis',
    category: 'Content',
    icon: <Scale className="w-8 h-8" />,
    color: '#A855F7',
    colorBg: 'bg-purple-500/10 border-purple-500/20',
    subs: 3,
    routes: 4,
  },
  {
    id: 'superapp-media',
    name: 'Media & Content',
    description: 'Social media, film, video AI, media content creation',
    category: 'Content',
    icon: <Film className="w-8 h-8" />,
    color: '#A855F7',
    colorBg: 'bg-purple-500/10 border-purple-500/20',
    subs: 4,
    routes: 14,
  },
  {
    id: 'superapp-content-tools',
    name: 'Content Tools',
    description: 'PDF tools, PowerPoint, YouTube summarizer',
    category: 'Content',
    icon: <Wrench className="w-8 h-8" />,
    color: '#A855F7',
    colorBg: 'bg-purple-500/10 border-purple-500/20',
    subs: 3,
    routes: 34,
  },
  {
    id: 'superapp-automation',
    name: 'Automation',
    description: 'Automate everything, bots, n8n, web automation, telegram backup',
    category: 'Tools',
    icon: <Zap className="w-8 h-8" />,
    color: '#10B981',
    colorBg: 'bg-green-500/10 border-green-500/20',
    subs: 9,
    routes: 74,
  },
  {
    id: 'superapp-scraper',
    name: 'Data Scraper',
    description: 'API collection, PDF extraction, eBay scraper, FOMO ID',
    category: 'Tools',
    icon: <Database className="w-8 h-8" />,
    color: '#10B981',
    colorBg: 'bg-green-500/10 border-green-500/20',
    subs: 4,
    routes: 5,
  },
  {
    id: 'superapp-productivity',
    name: 'Productivity Apps',
    description: 'Dashboard monitor, Trello, daily tasks, book manager, meetbot',
    category: 'Tools',
    icon: <Briefcase className="w-8 h-8" />,
    color: '#10B981',
    colorBg: 'bg-green-500/10 border-green-500/20',
    subs: 6,
    routes: 28,
  },
  {
    id: 'superapp-ai-tools',
    name: 'AI Tools',
    description: 'Claude management, Kimi, book summarizer',
    category: 'Tools',
    icon: <Sparkles className="w-8 h-8" />,
    color: '#10B981',
    colorBg: 'bg-green-500/10 border-green-500/20',
    subs: 3,
    routes: 18,
  },
  {
    id: 'superapp-github',
    name: 'GitHub Tools',
    description: 'GitHub management, trending repos, achievement tracker',
    category: 'Tools',
    icon: <Code className="w-8 h-8" />,
    color: '#10B981',
    colorBg: 'bg-green-500/10 border-green-500/20',
    subs: 3,
    routes: 13,
  },
  {
    id: 'superapp-games',
    name: 'Games',
    description: 'Interactive games, CoC, Travian, gaming hub',
    category: 'Fun',
    icon: <Gamepad2 className="w-8 h-8" />,
    color: '#F59E0B',
    colorBg: 'bg-amber-500/10 border-amber-500/20',
    subs: 3,
    routes: 4,
  },
];

const categories = ['All', 'Knowledge', 'Content', 'Tools', 'Fun'] as const;

export default function Home() {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<typeof categories[number]>('All');

  // Filter superapps based on search and category
  const filteredApps = useMemo(() => {
    return superapps.filter((app) => {
      const matchesSearch =
        app.name.toLowerCase().includes(search.toLowerCase()) ||
        app.description.toLowerCase().includes(search.toLowerCase());

      const matchesCategory =
        selectedCategory === 'All' || app.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [search, selectedCategory]);

  // Calculate stats
  const totalRoutes = superapps.reduce((sum, app) => sum + app.routes, 0);
  const totalSubs = superapps.reduce((sum, app) => sum + app.subs, 0);

  const categoryStats = {
    Knowledge: superapps.filter((a) => a.category === 'Knowledge').reduce((sum, a) => sum + a.routes, 0),
    Content: superapps.filter((a) => a.category === 'Content').reduce((sum, a) => sum + a.routes, 0),
    Tools: superapps.filter((a) => a.category === 'Tools').reduce((sum, a) => sum + a.routes, 0),
    Fun: superapps.filter((a) => a.category === 'Fun').reduce((sum, a) => sum + a.routes, 0),
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="pt-20 pb-16 px-4"
        >
          <div className="max-w-7xl mx-auto">
            {/* Title and subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center mb-12"
            >
              <div className="inline-block mb-4">
                <span className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 text-blue-300 text-sm font-medium">
                  🚀 Complete Ecosystem
                </span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight">
                Ibnu's Superapp Ecosystem
              </h1>

              <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
                A comprehensive platform with 16 interconnected superapps covering every aspect of knowledge, productivity, and entertainment
              </p>
            </motion.div>

            {/* Stats Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
            >
              <div className="bg-gradient-to-br from-blue-500/10 to-blue-500/5 border border-blue-500/20 rounded-lg p-4 backdrop-blur">
                <div className="text-3xl font-bold text-blue-400">16</div>
                <div className="text-sm text-slate-400">Superapps</div>
              </div>
              <div className="bg-gradient-to-br from-purple-500/10 to-purple-500/5 border border-purple-500/20 rounded-lg p-4 backdrop-blur">
                <div className="text-3xl font-bold text-purple-400">{totalRoutes}</div>
                <div className="text-sm text-slate-400">Total Routes</div>
              </div>
              <div className="bg-gradient-to-br from-green-500/10 to-green-500/5 border border-green-500/20 rounded-lg p-4 backdrop-blur">
                <div className="text-3xl font-bold text-green-400">{totalSubs}</div>
                <div className="text-sm text-slate-400">Sub-projects</div>
              </div>
              <div className="bg-gradient-to-br from-amber-500/10 to-amber-500/5 border border-amber-500/20 rounded-lg p-4 backdrop-blur">
                <div className="text-3xl font-bold text-amber-400">2155</div>
                <div className="text-sm text-slate-400">Total Files</div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Search and Filter Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="pb-12 px-4"
        >
          <div className="max-w-7xl mx-auto">
            {/* Search bar */}
            <div className="mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                <input
                  type="text"
                  placeholder="Search superapps..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-lg bg-slate-800/50 border border-slate-700/50 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all"
                />
              </div>
            </div>

            {/* Category tabs */}
            <div className="flex flex-wrap gap-2 mb-8">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/50'
                      : 'bg-slate-800/50 text-slate-400 border border-slate-700/50 hover:border-slate-600/50'
                  }`}
                >
                  {category}
                </motion.button>
              ))}
            </div>

            {/* Results count */}
            <p className="text-slate-400 mb-8">
              Showing <span className="text-white font-semibold">{filteredApps.length}</span> of{' '}
              <span className="text-white font-semibold">{superapps.length}</span> superapps
            </p>
          </div>
        </motion.section>

        {/* Grid of Superapps */}
        <section className="pb-24 px-4">
          <div className="max-w-7xl mx-auto">
            {filteredApps.length > 0 ? (
              <motion.div
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              >
                {filteredApps.map((app, index) => (
                  <motion.div
                    key={app.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{ y: -8, transition: { duration: 0.2 } }}
                    className={`group relative rounded-xl border backdrop-blur transition-all duration-300 overflow-hidden hover:shadow-2xl ${app.colorBg}`}
                  >
                    {/* Animated gradient border */}
                    <div
                      className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        background: `linear-gradient(135deg, ${app.color}40 0%, transparent 100%)`,
                        pointerEvents: 'none',
                      }}
                    ></div>

                    {/* Card content */}
                    <div className="relative p-6 h-full flex flex-col z-10">
                      {/* Icon */}
                      <div
                        className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-white transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12"
                        style={{ backgroundColor: `${app.color}20` }}
                      >
                        {app.icon}
                      </div>

                      {/* Title */}
                      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-opacity-100">
                        {app.name}
                      </h3>

                      {/* Description */}
                      <p className="text-sm text-slate-400 mb-4 flex-grow line-clamp-3">
                        {app.description}
                      </p>

                      {/* Stats */}
                      <div className="flex justify-between text-xs text-slate-500 mb-4 pt-4 border-t border-slate-700/30">
                        <span>{app.subs} sub-projects</span>
                        <span>{app.routes} routes</span>
                      </div>

                      {/* Category badge */}
                      <div className="flex items-center justify-between">
                        <span
                          className="text-xs font-semibold px-3 py-1 rounded-full text-white transition-all duration-300"
                          style={{
                            backgroundColor: `${app.color}30`,
                            color: app.color,
                          }}
                        >
                          {app.category}
                        </span>
                        <motion.div
                          whileHover={{ x: 4 }}
                          className="text-slate-400 group-hover:text-white transition-colors"
                        >
                          →
                        </motion.div>
                      </div>
                    </div>

                    {/* Hover effect background */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none"
                      style={{ backgroundColor: app.color }}
                    ></div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex flex-col items-center justify-center py-16"
              >
                <AlertCircle className="w-12 h-12 text-slate-400 mb-4" />
                <p className="text-slate-400 text-lg">No superapps found matching your search.</p>
                <p className="text-slate-500 text-sm">Try adjusting your filters or search terms.</p>
              </motion.div>
            )}
          </div>
        </section>

        {/* Category Breakdown Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="pb-24 px-4"
        >
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Breakdown by Category</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: 'Knowledge', color: 'blue', icon: TrendingUp, routes: categoryStats.Knowledge },
                { name: 'Content', color: 'purple', icon: Film, routes: categoryStats.Content },
                { name: 'Tools', color: 'green', icon: Wrench, routes: categoryStats.Tools },
                { name: 'Fun', color: 'amber', icon: Gamepad2, routes: categoryStats.Fun },
              ].map((cat, index) => {
                const Icon = cat.icon;
                const colorMap = {
                  blue: { bg: 'bg-blue-500/10', border: 'border-blue-500/20', text: 'text-blue-400', icon: 'text-blue-300' },
                  purple: { bg: 'bg-purple-500/10', border: 'border-purple-500/20', text: 'text-purple-400', icon: 'text-purple-300' },
                  green: { bg: 'bg-green-500/10', border: 'border-green-500/20', text: 'text-green-400', icon: 'text-green-300' },
                  amber: { bg: 'bg-amber-500/10', border: 'border-amber-500/20', text: 'text-amber-400', icon: 'text-amber-300' },
                };
                const style = colorMap[cat.color as keyof typeof colorMap];

                return (
                  <motion.div
                    key={cat.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -4 }}
                    className={`rounded-lg border ${style.bg} ${style.border} p-6 backdrop-blur hover:shadow-lg transition-all`}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <p className="text-slate-400 text-sm mb-1">Category</p>
                        <h3 className={`text-2xl font-bold ${style.text}`}>{cat.name}</h3>
                      </div>
                      <Icon className={`w-8 h-8 ${style.icon}`} />
                    </div>
                    <p className={`text-sm ${style.text}`}>{cat.routes} total routes</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.section>

        {/* Footer */}
        <footer className="border-t border-slate-800/50 py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div>
                <h3 className="text-white font-bold mb-4">Master Portal</h3>
                <p className="text-slate-400 text-sm">
                  Gateway to Ibnu's comprehensive superapp ecosystem spanning knowledge, content, tools, and entertainment.
                </p>
              </div>
              <div>
                <h3 className="text-white font-bold mb-4">Quick Stats</h3>
                <ul className="text-slate-400 text-sm space-y-2">
                  <li>📊 16 Superapps</li>
                  <li>🛣️ {totalRoutes} Routes</li>
                  <li>📦 {totalSubs} Sub-projects</li>
                  <li>📄 2155 Files</li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-bold mb-4">Categories</h3>
                <div className="flex flex-wrap gap-2">
                  {['Knowledge', 'Content', 'Tools', 'Fun'].map((cat) => (
                    <span
                      key={cat}
                      className="px-3 py-1 text-xs rounded-full bg-slate-800/50 border border-slate-700/50 text-slate-400"
                    >
                      {cat}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="border-t border-slate-800/50 pt-8 flex flex-col md:flex-row justify-between items-center">
              <p className="text-slate-500 text-sm">© 2024 Superapp Ecosystem. All rights reserved.</p>
              <div className="flex items-center gap-2 text-slate-400 mt-4 md:mt-0">
                <Sparkles className="w-4 h-4 text-purple-400" />
                <span className="text-sm font-semibold">Built by <span className="text-white">Ibnu</span></span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
