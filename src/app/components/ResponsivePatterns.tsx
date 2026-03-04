import PatternCard from './PatternCard';

export default function ResponsivePatterns() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Responsive Patterns</h1>
        <p className="text-neutral-600">
          Build adaptive layouts that work beautifully on any screen size
        </p>
      </div>

      <div className="space-y-8">
        {/* Responsive Grid */}
        <PatternCard
          title="Responsive Grid System"
          description="Adaptive grid that changes column count based on viewport width"
          code={{
            html: `<div class="responsive-grid">
  <div class="item">Item 1</div>
  <div class="item">Item 2</div>
  <div class="item">Item 3</div>
  <div class="item">Item 4</div>
</div>`,
            css: `.responsive-grid {
  display: grid;
  gap: 1rem;
}

/* Mobile: 1 column */
@media (min-width: 640px) {
  .responsive-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Tablet: 2 columns */
@media (min-width: 768px) {
  .responsive-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* Desktop: 4 columns */
@media (min-width: 1024px) {
  .responsive-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}`,
          }}
          responsive={{
            mobile: (
              <div className="grid grid-cols-1 gap-3 p-4 bg-neutral-50">
                {[1, 2, 3, 4].map((num) => (
                  <div key={num} className="bg-blue-500 text-white p-4 rounded text-center">
                    Item {num}
                  </div>
                ))}
              </div>
            ),
            tablet: (
              <div className="grid grid-cols-2 gap-3 p-4 bg-neutral-50">
                {[1, 2, 3, 4].map((num) => (
                  <div key={num} className="bg-purple-500 text-white p-4 rounded text-center">
                    Item {num}
                  </div>
                ))}
              </div>
            ),
            desktop: (
              <div className="grid grid-cols-4 gap-3 p-4 bg-neutral-50">
                {[1, 2, 3, 4].map((num) => (
                  <div key={num} className="bg-green-500 text-white p-4 rounded text-center">
                    Item {num}
                  </div>
                ))}
              </div>
            ),
          }}
          diagram={
            <div className="space-y-4 text-xs">
              <div>
                <div className="font-medium mb-2 text-neutral-700">Mobile (&lt; 640px): 1 column</div>
                <div className="grid grid-cols-1 gap-2 max-w-xs">
                  <div className="bg-blue-100 border-2 border-blue-300 p-2 text-center">Item</div>
                  <div className="bg-blue-100 border-2 border-blue-300 p-2 text-center">Item</div>
                </div>
              </div>
              <div>
                <div className="font-medium mb-2 text-neutral-700">Tablet (640px+): 2 columns</div>
                <div className="grid grid-cols-2 gap-2 max-w-md">
                  <div className="bg-purple-100 border-2 border-purple-300 p-2 text-center">Item</div>
                  <div className="bg-purple-100 border-2 border-purple-300 p-2 text-center">Item</div>
                </div>
              </div>
              <div>
                <div className="font-medium mb-2 text-neutral-700">Desktop (1024px+): 4 columns</div>
                <div className="grid grid-cols-4 gap-2">
                  <div className="bg-green-100 border-2 border-green-300 p-2 text-center">Item</div>
                  <div className="bg-green-100 border-2 border-green-300 p-2 text-center">Item</div>
                  <div className="bg-green-100 border-2 border-green-300 p-2 text-center">Item</div>
                  <div className="bg-green-100 border-2 border-green-300 p-2 text-center">Item</div>
                </div>
              </div>
            </div>
          }
          useCases={[
            'Product grids in e-commerce',
            'Blog post listings',
            'Image galleries',
            'Feature showcases',
          ]}
          notes={[
            'Use mobile-first approach: start with 1 column',
            'Add complexity as screen size increases',
            'Consider using auto-fit for simpler responsive grids',
            'Test at actual breakpoint values',
          ]}
        />

        {/* Adaptive Navigation */}
        <PatternCard
          title="Adaptive Navigation"
          description="Navigation that transforms from horizontal desktop menu to mobile hamburger"
          code={{
            html: `<nav class="navbar">
  <div class="logo">Logo</div>
  <button class="menu-toggle">☰</button>
  <ul class="nav-menu">
    <li>Home</li>
    <li>About</li>
    <li>Services</li>
    <li>Contact</li>
  </ul>
</nav>`,
            css: `/* Mobile first */
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav-menu {
  display: none; /* Hidden on mobile */
  flex-direction: column;
}

.menu-toggle {
  display: block;
}

/* Desktop */
@media (min-width: 768px) {
  .nav-menu {
    display: flex;
    flex-direction: row;
    gap: 2rem;
  }
  
  .menu-toggle {
    display: none;
  }
}`,
          }}
          responsive={{
            mobile: (
              <div className="bg-neutral-900 text-white p-4">
                <div className="flex items-center justify-between">
                  <div className="font-bold text-lg">Logo</div>
                  <button className="text-2xl">☰</button>
                </div>
                <div className="mt-4 space-y-2 border-t border-white/20 pt-4">
                  <div className="py-2 px-3 hover:bg-white/10 rounded">Home</div>
                  <div className="py-2 px-3 hover:bg-white/10 rounded">About</div>
                  <div className="py-2 px-3 hover:bg-white/10 rounded">Services</div>
                  <div className="py-2 px-3 hover:bg-white/10 rounded">Contact</div>
                </div>
              </div>
            ),
            tablet: (
              <div className="bg-neutral-900 text-white p-4">
                <div className="flex items-center justify-between">
                  <div className="font-bold text-lg">Logo</div>
                  <ul className="flex gap-6 list-none">
                    <li className="hover:text-blue-400 cursor-pointer">Home</li>
                    <li className="hover:text-blue-400 cursor-pointer">About</li>
                    <li className="hover:text-blue-400 cursor-pointer">Services</li>
                    <li className="hover:text-blue-400 cursor-pointer">Contact</li>
                  </ul>
                </div>
              </div>
            ),
            desktop: (
              <div className="bg-neutral-900 text-white p-4">
                <div className="flex items-center justify-between max-w-6xl mx-auto">
                  <div className="font-bold text-xl">Logo</div>
                  <ul className="flex gap-8 list-none">
                    <li className="hover:text-blue-400 cursor-pointer">Home</li>
                    <li className="hover:text-blue-400 cursor-pointer">About</li>
                    <li className="hover:text-blue-400 cursor-pointer">Services</li>
                    <li className="hover:text-blue-400 cursor-pointer">Contact</li>
                  </ul>
                  <button className="bg-blue-600 px-6 py-2 rounded">Sign Up</button>
                </div>
              </div>
            ),
          }}
          diagram={
            <div className="space-y-4 text-xs">
              <div>
                <div className="font-medium mb-2 text-neutral-700">Mobile: Stacked menu</div>
                <div className="border-2 border-neutral-300 rounded-lg p-3 max-w-xs">
                  <div className="flex items-center justify-between mb-2 pb-2 border-b border-neutral-300">
                    <div className="bg-blue-100 border-2 border-blue-300 px-2 py-1 rounded">Logo</div>
                    <div className="bg-orange-100 border-2 border-orange-300 px-2 py-1 rounded">☰</div>
                  </div>
                  <div className="space-y-1">
                    <div className="bg-green-100 border-2 border-green-300 p-1 rounded">Link</div>
                    <div className="bg-green-100 border-2 border-green-300 p-1 rounded">Link</div>
                  </div>
                </div>
              </div>
              <div>
                <div className="font-medium mb-2 text-neutral-700">Desktop: Horizontal menu</div>
                <div className="border-2 border-neutral-300 rounded-lg p-3">
                  <div className="flex items-center justify-between">
                    <div className="bg-blue-100 border-2 border-blue-300 px-2 py-1 rounded">Logo</div>
                    <div className="flex gap-2">
                      <div className="bg-green-100 border-2 border-green-300 px-2 py-1 rounded">Link</div>
                      <div className="bg-green-100 border-2 border-green-300 px-2 py-1 rounded">Link</div>
                      <div className="bg-green-100 border-2 border-green-300 px-2 py-1 rounded">Link</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          }
          useCases={[
            'Website headers and main navigation',
            'Mobile apps with expandable menus',
            'Dashboard sidebars',
            'E-commerce category menus',
          ]}
          notes={[
            'Mobile-first: start with vertical stacked menu',
            'Use display: none/flex to show/hide menu toggle',
            'Consider using transform for smooth menu animations',
            'Add ARIA attributes for accessibility',
          ]}
        />

        {/* Reordering Layout */}
        <PatternCard
          title="Content Reordering"
          description="Change visual order of elements at different breakpoints using grid or flexbox order"
          code={{
            html: `<div class="container">
  <aside class="sidebar">Sidebar</aside>
  <main class="main">Main Content</main>
  <div class="ads">Ads</div>
</div>`,
            css: `/* Mobile: vertical stack */
.container {
  display: flex;
  flex-direction: column;
}

.sidebar { order: 2; }
.main { order: 1; }
.ads { order: 3; }

/* Desktop: horizontal */
@media (min-width: 768px) {
  .container {
    display: grid;
    grid-template-columns: 200px 1fr 200px;
  }
  
  /* Reset order */
  .sidebar { order: 0; }
  .main { order: 0; }
  .ads { order: 0; }
}`,
          }}
          responsive={{
            mobile: (
              <div className="flex flex-col gap-3 p-4 bg-neutral-50">
                <div className="bg-green-500 text-white p-4 rounded text-center order-1">
                  Main Content (shown first)
                </div>
                <div className="bg-blue-500 text-white p-4 rounded text-center order-2">
                  Sidebar (shown second)
                </div>
                <div className="bg-orange-500 text-white p-4 rounded text-center order-3">
                  Ads (shown third)
                </div>
              </div>
            ),
            tablet: (
              <div className="grid grid-cols-[150px_1fr] gap-3 p-4 bg-neutral-50">
                <div className="bg-blue-500 text-white p-4 rounded text-center">Sidebar</div>
                <div className="bg-green-500 text-white p-4 rounded text-center">Main Content</div>
                <div className="col-span-2 bg-orange-500 text-white p-4 rounded text-center">
                  Ads (full width)
                </div>
              </div>
            ),
            desktop: (
              <div className="grid grid-cols-[150px_1fr_150px] gap-3 p-4 bg-neutral-50">
                <div className="bg-blue-500 text-white p-4 rounded text-center">Sidebar</div>
                <div className="bg-green-500 text-white p-4 rounded text-center">Main Content</div>
                <div className="bg-orange-500 text-white p-4 rounded text-center">Ads</div>
              </div>
            ),
          }}
          diagram={
            <div className="space-y-4 text-xs">
              <div>
                <div className="font-medium mb-2 text-neutral-700">Mobile: Content-first order</div>
                <div className="space-y-2 max-w-xs">
                  <div className="bg-green-100 border-2 border-green-300 p-2 rounded flex items-center justify-between">
                    <span>Main</span>
                    <span className="text-neutral-600">order: 1</span>
                  </div>
                  <div className="bg-blue-100 border-2 border-blue-300 p-2 rounded flex items-center justify-between">
                    <span>Sidebar</span>
                    <span className="text-neutral-600">order: 2</span>
                  </div>
                  <div className="bg-orange-100 border-2 border-orange-300 p-2 rounded flex items-center justify-between">
                    <span>Ads</span>
                    <span className="text-neutral-600">order: 3</span>
                  </div>
                </div>
              </div>
              <div>
                <div className="font-medium mb-2 text-neutral-700">Desktop: Natural DOM order</div>
                <div className="grid grid-cols-3 gap-2">
                  <div className="bg-blue-100 border-2 border-blue-300 p-2 rounded text-center">
                    Sidebar
                  </div>
                  <div className="bg-green-100 border-2 border-green-300 p-2 rounded text-center">
                    Main
                  </div>
                  <div className="bg-orange-100 border-2 border-orange-300 p-2 rounded text-center">
                    Ads
                  </div>
                </div>
              </div>
            </div>
          }
          useCases={[
            'Prioritizing main content on mobile',
            'Moving sidebars below content on small screens',
            'Reordering form fields for better mobile UX',
            'Changing image and text order',
          ]}
          notes={[
            'Use order property to change visual sequence',
            'Keep DOM order logical for accessibility',
            'Screen readers follow DOM order, not visual order',
            'Test with keyboard navigation',
          ]}
        />

        {/* Fluid Typography */}
        <PatternCard
          title="Fluid Typography with CSS Clamp"
          description="Text that scales smoothly between minimum and maximum sizes based on viewport"
          code={{
            html: `<h1 class="fluid-heading">
  Responsive Heading
</h1>
<p class="fluid-text">
  Body text that scales with viewport
</p>`,
            css: `.fluid-heading {
  font-size: clamp(2rem, 5vw, 4rem);
  /* Min: 2rem, Ideal: 5vw, Max: 4rem */
}

.fluid-text {
  font-size: clamp(1rem, 2vw, 1.25rem);
}

/* Alternative with calc */
.fluid-alt {
  font-size: calc(1rem + 1vw);
}`,
          }}
          responsive={{
            mobile: (
              <div className="p-6 bg-neutral-50">
                <h1 style={{ fontSize: 'clamp(1.5rem, 5vw, 2rem)' }} className="font-bold mb-3">
                  Responsive Heading
                </h1>
                <p style={{ fontSize: 'clamp(0.875rem, 2vw, 1rem)' }} className="text-neutral-700">
                  This text scales with the viewport width. On mobile, it's smaller but still readable.
                  The clamp function ensures it never gets too small or too large.
                </p>
              </div>
            ),
            tablet: (
              <div className="p-6 bg-neutral-50">
                <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }} className="font-bold mb-3">
                  Responsive Heading
                </h1>
                <p style={{ fontSize: 'clamp(1rem, 2vw, 1.125rem)' }} className="text-neutral-700">
                  This text scales with the viewport width. On tablet, it's medium-sized for comfortable reading
                  at typical viewing distances. The fluid typography adapts naturally.
                </p>
              </div>
            ),
            desktop: (
              <div className="p-6 bg-neutral-50">
                <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }} className="font-bold mb-4">
                  Responsive Heading
                </h1>
                <p style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)' }} className="text-neutral-700 leading-relaxed">
                  This text scales with the viewport width. On desktop, it reaches its maximum size for
                  optimal readability on larger screens. The clamp function creates a smooth transition
                  across all viewport sizes without requiring media queries.
                </p>
              </div>
            ),
          }}
          diagram={
            <div className="space-y-3 text-xs">
              <div className="border-2 border-neutral-300 rounded-lg p-4">
                <div className="font-mono mb-3 text-sm">clamp(2rem, 5vw, 4rem)</div>
                <div className="flex items-end justify-between">
                  <div className="text-center">
                    <div className="text-2xl mb-1">A</div>
                    <div className="text-neutral-600">Min: 2rem</div>
                    <div className="text-neutral-500">(mobile)</div>
                  </div>
                  <div className="flex-1 border-b-2 border-blue-300 mx-4 mb-8"></div>
                  <div className="text-center">
                    <div className="text-4xl mb-1">A</div>
                    <div className="text-neutral-600">Ideal: 5vw</div>
                    <div className="text-neutral-500">(scales)</div>
                  </div>
                  <div className="flex-1 border-b-2 border-blue-300 mx-4 mb-8"></div>
                  <div className="text-center">
                    <div className="text-5xl mb-1">A</div>
                    <div className="text-neutral-600">Max: 4rem</div>
                    <div className="text-neutral-500">(desktop)</div>
                  </div>
                </div>
              </div>
            </div>
          }
          useCases={[
            'Hero section headings',
            'Article titles and body text',
            'Marketing landing pages',
            'Responsive design systems',
          ]}
          notes={[
            'clamp(min, preferred, max) is modern and clean',
            'No media queries needed for basic fluid type',
            'Use vw units for the preferred value',
            'Always set reasonable min/max to prevent extremes',
          ]}
        />

        {/* Container Queries */}
        <PatternCard
          title="Container Query Pattern"
          description="Components that adapt based on their container size, not viewport (modern approach)"
          code={{
            html: `<div class="container">
  <div class="card">
    <img src="image.jpg" alt="">
    <div class="content">
      <h3>Title</h3>
      <p>Description</p>
    </div>
  </div>
</div>`,
            css: `.container {
  container-type: inline-size;
  container-name: card-container;
}

.card {
  display: flex;
  flex-direction: column;
}

/* When container is > 400px wide */
@container card-container (min-width: 400px) {
  .card {
    flex-direction: row;
  }
}`,
          }}
          demo={
            <div className="space-y-6">
              <div className="max-w-sm">
                <div className="text-sm font-medium text-neutral-700 mb-2">Narrow container (vertical):</div>
                <div className="flex flex-col bg-white border border-neutral-300 rounded-lg overflow-hidden">
                  <div className="h-32 bg-gradient-to-br from-blue-500 to-purple-600"></div>
                  <div className="p-4">
                    <h3 className="font-medium mb-1">Card Title</h3>
                    <p className="text-sm text-neutral-600">Content stacks vertically in narrow containers</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="text-sm font-medium text-neutral-700 mb-2">Wide container (horizontal):</div>
                <div className="flex bg-white border border-neutral-300 rounded-lg overflow-hidden">
                  <div className="w-48 bg-gradient-to-br from-blue-500 to-purple-600 flex-shrink-0"></div>
                  <div className="p-4 flex-1">
                    <h3 className="font-medium mb-1">Card Title</h3>
                    <p className="text-sm text-neutral-600">Content flows horizontally in wider containers</p>
                  </div>
                </div>
              </div>
            </div>
          }
          diagram={
            <div className="space-y-4 text-xs">
              <div>
                <div className="font-medium mb-2 text-neutral-700">Container &lt; 400px: Vertical layout</div>
                <div className="max-w-xs border-2 border-blue-300 rounded-lg overflow-hidden">
                  <div className="bg-blue-100 p-3 text-center border-b-2 border-blue-300">Image</div>
                  <div className="bg-green-100 p-3 border-b-2 border-green-300">
                    <div>Content</div>
                    <div className="text-neutral-600">flex-direction: column</div>
                  </div>
                </div>
              </div>
              <div>
                <div className="font-medium mb-2 text-neutral-700">Container ≥ 400px: Horizontal layout</div>
                <div className="border-2 border-blue-300 rounded-lg overflow-hidden flex">
                  <div className="bg-blue-100 p-3 w-24 text-center border-r-2 border-blue-300">Image</div>
                  <div className="bg-green-100 p-3 flex-1">
                    <div>Content</div>
                    <div className="text-neutral-600">flex-direction: row</div>
                  </div>
                </div>
              </div>
            </div>
          }
          useCases={[
            'Reusable card components in different contexts',
            'Sidebar widgets that work in various widths',
            'Grid items that adapt to available space',
            'Design system components',
          ]}
          notes={[
            'Container queries are relatively new (check browser support)',
            'More powerful than media queries for component-based design',
            'Component adapts to container, not viewport',
            'Perfect for modern component architectures',
          ]}
        />

        {/* Stack to Grid */}
        <PatternCard
          title="Stack to Grid Pattern"
          description="Simple vertical stack on mobile that becomes a grid on larger screens"
          code={{
            html: `<div class="stack-grid">
  <div class="item">Feature 1</div>
  <div class="item">Feature 2</div>
  <div class="item">Feature 3</div>
</div>`,
            css: `/* Mobile: stack */
.stack-grid {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

/* Tablet and up: grid */
@media (min-width: 768px) {
  .stack-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
}`,
          }}
          responsive={{
            mobile: (
              <div className="flex flex-col gap-3 p-4 bg-neutral-50">
                {['Feature 1', 'Feature 2', 'Feature 3'].map((text, idx) => (
                  <div key={idx} className="bg-white border border-neutral-300 rounded-lg p-4">
                    <div className="w-12 h-12 bg-blue-500 rounded-lg mb-3"></div>
                    <h3 className="font-medium mb-2">{text}</h3>
                    <p className="text-sm text-neutral-600">Description text for this feature</p>
                  </div>
                ))}
              </div>
            ),
            tablet: (
              <div className="grid grid-cols-2 gap-3 p-4 bg-neutral-50">
                {['Feature 1', 'Feature 2', 'Feature 3'].map((text, idx) => (
                  <div key={idx} className="bg-white border border-neutral-300 rounded-lg p-4">
                    <div className="w-12 h-12 bg-purple-500 rounded-lg mb-3"></div>
                    <h3 className="font-medium mb-2">{text}</h3>
                    <p className="text-sm text-neutral-600">Description text</p>
                  </div>
                ))}
              </div>
            ),
            desktop: (
              <div className="grid grid-cols-3 gap-3 p-4 bg-neutral-50">
                {['Feature 1', 'Feature 2', 'Feature 3'].map((text, idx) => (
                  <div key={idx} className="bg-white border border-neutral-300 rounded-lg p-4">
                    <div className="w-12 h-12 bg-green-500 rounded-lg mb-3"></div>
                    <h3 className="font-medium mb-2">{text}</h3>
                    <p className="text-sm text-neutral-600">Description text for this feature</p>
                  </div>
                ))}
              </div>
            ),
          }}
          diagram={
            <div className="space-y-4 text-xs">
              <div>
                <div className="font-medium mb-2 text-neutral-700">Mobile: Stacked (flex-direction: column)</div>
                <div className="space-y-2 max-w-xs">
                  <div className="bg-blue-100 border-2 border-blue-300 p-2 rounded">Feature 1</div>
                  <div className="bg-blue-100 border-2 border-blue-300 p-2 rounded">Feature 2</div>
                  <div className="bg-blue-100 border-2 border-blue-300 p-2 rounded">Feature 3</div>
                </div>
              </div>
              <div>
                <div className="font-medium mb-2 text-neutral-700">Desktop: Grid (grid-template-columns: repeat(3, 1fr))</div>
                <div className="grid grid-cols-3 gap-2">
                  <div className="bg-green-100 border-2 border-green-300 p-2 rounded text-center">Feature 1</div>
                  <div className="bg-green-100 border-2 border-green-300 p-2 rounded text-center">Feature 2</div>
                  <div className="bg-green-100 border-2 border-green-300 p-2 rounded text-center">Feature 3</div>
                </div>
              </div>
            </div>
          }
          useCases={[
            'Feature sections on landing pages',
            'Service offerings',
            'Team member grids',
            'Benefits or advantages sections',
          ]}
          notes={[
            'One of the most common responsive patterns',
            'Simple transition from flex to grid',
            'Keep gap consistent across breakpoints',
            'Consider 2-column layout for tablet sizes',
          ]}
        />
      </div>
    </div>
  );
}