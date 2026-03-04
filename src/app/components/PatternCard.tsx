import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Code, Eye, Info, Monitor, Tablet, Smartphone } from 'lucide-react';
import { motion } from 'motion/react';

interface PatternCardProps {
  title: string;
  description: string;
  code: {
    html?: string;
    css?: string;
  };
  demo: React.ReactNode;
  useCases: string[];
  diagram?: React.ReactNode;
  notes?: string[];
  responsive?: {
    mobile: React.ReactNode;
    tablet: React.ReactNode;
    desktop: React.ReactNode;
  };
}

export default function PatternCard({
  title,
  description,
  code,
  demo,
  useCases,
  diagram,
  notes,
  responsive,
}: PatternCardProps) {
  const [activeTab, setActiveTab] = useState<'demo' | 'code' | 'info'>('demo');
  const [viewport, setViewport] = useState<'mobile' | 'tablet' | 'desktop'>('desktop');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl shadow-sm border border-neutral-200 overflow-hidden"
    >
      {/* Header */}
      <div className="border-b border-neutral-200 bg-neutral-50 p-4">
        <h3 className="font-semibold text-lg mb-1">{title}</h3>
        <p className="text-sm text-neutral-600">{description}</p>
      </div>

      {/* Tabs */}
      <div className="border-b border-neutral-200 flex items-center">
        <button
          onClick={() => setActiveTab('demo')}
          className={`flex items-center space-x-2 px-4 py-3 border-b-2 transition-colors ${
            activeTab === 'demo'
              ? 'border-blue-600 text-blue-700'
              : 'border-transparent text-neutral-600 hover:text-neutral-900'
          }`}
        >
          <Eye className="w-4 h-4" />
          <span>Demo</span>
        </button>
        <button
          onClick={() => setActiveTab('code')}
          className={`flex items-center space-x-2 px-4 py-3 border-b-2 transition-colors ${
            activeTab === 'code'
              ? 'border-blue-600 text-blue-700'
              : 'border-transparent text-neutral-600 hover:text-neutral-900'
          }`}
        >
          <Code className="w-4 h-4" />
          <span>Code</span>
        </button>
        <button
          onClick={() => setActiveTab('info')}
          className={`flex items-center space-x-2 px-4 py-3 border-b-2 transition-colors ${
            activeTab === 'info'
              ? 'border-blue-600 text-blue-700'
              : 'border-transparent text-neutral-600 hover:text-neutral-900'
          }`}
        >
          <Info className="w-4 h-4" />
          <span>Info</span>
        </button>

        {/* Viewport Selector (only show for responsive patterns) */}
        {responsive && activeTab === 'demo' && (
          <div className="ml-auto flex items-center space-x-1 pr-4">
            <button
              onClick={() => setViewport('mobile')}
              className={`p-2 rounded ${
                viewport === 'mobile'
                  ? 'bg-blue-100 text-blue-700'
                  : 'text-neutral-600 hover:bg-neutral-100'
              }`}
              title="Mobile"
            >
              <Smartphone className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewport('tablet')}
              className={`p-2 rounded ${
                viewport === 'tablet'
                  ? 'bg-blue-100 text-blue-700'
                  : 'text-neutral-600 hover:bg-neutral-100'
              }`}
              title="Tablet"
            >
              <Tablet className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewport('desktop')}
              className={`p-2 rounded ${
                viewport === 'desktop'
                  ? 'bg-blue-100 text-blue-700'
                  : 'text-neutral-600 hover:bg-neutral-100'
              }`}
              title="Desktop"
            >
              <Monitor className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        {activeTab === 'demo' && (
          <div className="space-y-4">
            {responsive ? (
              <div className="flex justify-center">
                <div
                  className={`border-2 border-neutral-300 rounded-lg overflow-hidden transition-all duration-300 ${
                    viewport === 'mobile'
                      ? 'w-[375px]'
                      : viewport === 'tablet'
                      ? 'w-[768px]'
                      : 'w-full'
                  }`}
                >
                  {viewport === 'mobile' && responsive.mobile}
                  {viewport === 'tablet' && responsive.tablet}
                  {viewport === 'desktop' && responsive.desktop}
                </div>
              </div>
            ) : (
              <div className="border-2 border-neutral-200 rounded-lg p-4 bg-neutral-50">
                {demo}
              </div>
            )}
            {diagram && (
              <div className="mt-6">
                <h4 className="font-medium text-sm text-neutral-700 mb-3">Visual Diagram</h4>
                <div className="border-2 border-dashed border-neutral-300 rounded-lg p-4 bg-white">
                  {diagram}
                </div>
              </div>
            )}
          </div>
        )}

        {activeTab === 'code' && (
          <div className="space-y-4">
            {code.html && (
              <div>
                <h4 className="font-medium text-sm text-neutral-700 mb-2">HTML</h4>
                <SyntaxHighlighter
                  language="html"
                  style={vscDarkPlus}
                  customStyle={{
                    borderRadius: '0.5rem',
                    fontSize: '0.875rem',
                    margin: 0,
                  }}
                >
                  {code.html}
                </SyntaxHighlighter>
              </div>
            )}
            {code.css && (
              <div>
                <h4 className="font-medium text-sm text-neutral-700 mb-2">CSS</h4>
                <SyntaxHighlighter
                  language="css"
                  style={vscDarkPlus}
                  customStyle={{
                    borderRadius: '0.5rem',
                    fontSize: '0.875rem',
                    margin: 0,
                  }}
                >
                  {code.css}
                </SyntaxHighlighter>
              </div>
            )}
          </div>
        )}

        {activeTab === 'info' && (
          <div className="space-y-6">
            <div>
              <h4 className="font-medium text-neutral-900 mb-3">Use Cases</h4>
              <ul className="space-y-2">
                {useCases.map((useCase, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span className="text-neutral-700">{useCase}</span>
                  </li>
                ))}
              </ul>
            </div>
            {notes && notes.length > 0 && (
              <div>
                <h4 className="font-medium text-neutral-900 mb-3">Important Notes</h4>
                <div className="space-y-2">
                  {notes.map((note, index) => (
                    <div
                      key={index}
                      className="bg-amber-50 border border-amber-200 rounded-lg p-3 text-sm text-amber-900"
                    >
                      {note}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
}
