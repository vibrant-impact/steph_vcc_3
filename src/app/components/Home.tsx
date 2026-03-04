import { Link } from 'react-router';
import { LayoutGrid, Box, Combine, Smartphone, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function Home() {
  const categories = [
    {
      title: 'CSS Grid Patterns',
      description: 'Master two-dimensional layouts with powerful grid techniques',
      icon: LayoutGrid,
      path: '/grid',
      color: 'blue',
      patterns: ['Holy Grail Layout', 'Auto-Fit Grid', 'Masonry Layout', 'Named Grid Areas'],
    },
    {
      title: 'Flexbox Patterns',
      description: 'Create flexible one-dimensional layouts with ease',
      icon: Box,
      path: '/flexbox',
      color: 'purple',
      patterns: ['Navbar Layout', 'Card Layout', 'Sidebar Pattern', 'Media Object'],
    },
    {
      title: 'Combined Patterns',
      description: 'Harness the power of Grid and Flexbox together',
      icon: Combine,
      path: '/combined',
      color: 'green',
      patterns: ['Dashboard Layout', 'Magazine Layout', 'App Shell', 'Complex Card'],
    },
    {
      title: 'Responsive Patterns',
      description: 'Build adaptive layouts that work on any screen size',
      icon: Smartphone,
      path: '/responsive',
      color: 'orange',
      patterns: ['Responsive Grid', 'Adaptive Navbar', 'Fluid Typography', 'Breakpoint System'],
    },
  ];

  const colorClasses = {
    blue: {
      bg: 'bg-blue-50',
      border: 'border-blue-200',
      icon: 'text-blue-600',
      button: 'bg-blue-600 hover:bg-blue-700',
    },
    purple: {
      bg: 'bg-purple-50',
      border: 'border-purple-200',
      icon: 'text-purple-600',
      button: 'bg-purple-600 hover:bg-purple-700',
    },
    green: {
      bg: 'bg-green-50',
      border: 'border-green-200',
      icon: 'text-green-600',
      button: 'bg-green-600 hover:bg-green-700',
    },
    orange: {
      bg: 'bg-orange-50',
      border: 'border-orange-200',
      icon: 'text-orange-600',
      button: 'bg-orange-600 hover:bg-orange-700',
    },
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          Layout Lab
        </h1>
        <p className="text-xl text-neutral-600 max-w-3xl mx-auto mb-8">
          A comprehensive library of CSS Grid and Flexbox experiments featuring detailed
          documentation, interactive demos, and responsive patterns
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-sm text-neutral-600">
          <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full border border-neutral-200">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span>40+ Patterns</span>
          </div>
          <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full border border-neutral-200">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span>Interactive Examples</span>
          </div>
          <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full border border-neutral-200">
            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
            <span>Full Documentation</span>
          </div>
        </div>
      </motion.div>

      {/* Categories Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {categories.map((category, index) => {
          const Icon = category.icon;
          const colors = colorClasses[category.color as keyof typeof colorClasses];
          
          return (
            <motion.div
              key={category.path}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link to={category.path} className="block group">
                <div className={`${colors.bg} border ${colors.border} rounded-xl p-6 h-full transition-all hover:shadow-lg hover:scale-[1.02]`}>
                  <div className="flex items-start justify-between mb-4">
                    <div className={`${colors.icon} bg-white p-3 rounded-lg`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <ArrowRight className="w-5 h-5 text-neutral-400 group-hover:translate-x-1 transition-transform" />
                  </div>
                  
                  <h3 className="font-semibold text-xl mb-2">{category.title}</h3>
                  <p className="text-neutral-600 mb-4">{category.description}</p>
                  
                  <div className="space-y-2">
                    {category.patterns.map((pattern) => (
                      <div
                        key={pattern}
                        className="flex items-center space-x-2 text-sm text-neutral-700"
                      >
                        <div className="w-1.5 h-1.5 bg-neutral-400 rounded-full"></div>
                        <span>{pattern}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className={`${colors.button} text-white px-4 py-2 rounded-lg mt-6 inline-flex items-center space-x-2 transition-colors`}>
                    <span>Explore Patterns</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>

      {/* Quick Reference */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-16 bg-gradient-to-br from-neutral-900 to-neutral-800 text-white rounded-xl p-8"
      >
        <h2 className="text-2xl font-semibold mb-6">Quick Reference Guide</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-medium mb-3 text-blue-300">When to Use CSS Grid</h3>
            <ul className="space-y-2 text-neutral-300">
              <li>• Two-dimensional layouts (rows and columns)</li>
              <li>• Complex page structures</li>
              <li>• Overlapping elements</li>
              <li>• Precise control over both axes</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-3 text-purple-300">When to Use Flexbox</h3>
            <ul className="space-y-2 text-neutral-300">
              <li>• One-dimensional layouts (row or column)</li>
              <li>• Component-level layout</li>
              <li>• Content-driven sizing</li>
              <li>• Alignment and distribution</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
