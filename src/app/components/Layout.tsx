import { Outlet, Link, useLocation } from 'react-router';
import { LayoutGrid, Box, Combine, Smartphone, Home } from 'lucide-react';

export default function Layout() {
  const location = useLocation();
  
  const navItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/grid', label: 'CSS Grid', icon: LayoutGrid },
    { path: '/flexbox', label: 'Flexbox', icon: Box },
    { path: '/combined', label: 'Combined', icon: Combine },
    { path: '/responsive', label: 'Responsive', icon: Smartphone },
  ];

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      <header className="bg-white border-b border-neutral-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center space-x-2">
              <LayoutGrid className="w-6 h-6 text-blue-600" />
              <h1 className="font-semibold text-lg">Layout Lab</h1>
            </Link>
            <nav className="hidden md:flex space-x-1">
              {navItems.slice(1).map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                      isActive
                        ? 'bg-blue-50 text-blue-700'
                        : 'text-neutral-600 hover:bg-neutral-100'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      <nav className="md:hidden bg-white border-b border-neutral-200 sticky top-16 z-40">
        <div className="flex overflow-x-auto">
          {navItems.slice(1).map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center space-x-2 px-4 py-3 whitespace-nowrap border-b-2 transition-colors ${
                  isActive
                    ? 'border-blue-600 text-blue-700'
                    : 'border-transparent text-neutral-600'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Main Content */}
      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-neutral-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-center text-neutral-600 text-sm">
            A comprehensive library of CSS Grid and Flexbox layout patterns
          </p>
        </div>
      </footer>
    </div>
  );
}
