import PatternCard from './PatternCard';

export default function CombinedPatterns() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Combined Patterns</h1>
        <p className="text-neutral-600">
          Harness the power of CSS Grid and Flexbox together for complex layouts
        </p>
      </div>

      <div className="space-y-8">
        {/* Dashboard Layout */}
        <PatternCard
          title="Dashboard Layout"
          description="Grid for overall structure, flexbox for component internals - the perfect combination"
          code={{
            html: `<div class="dashboard">
  <header class="header">Header with Flex</header>
  <nav class="sidebar">Sidebar</nav>
  <main class="main-content">
    <div class="card">Card with Flex</div>
  </main>
</div>`,
            css: `/* Grid for page structure */
.dashboard {
  display: grid;
  grid-template-areas:
    "header header"
    "sidebar main";
  grid-template-columns: 250px 1fr;
  grid-template-rows: auto 1fr;
  min-height: 100vh;
  gap: 1rem;
}

.header {
  grid-area: header;
  display: flex; /* Flex for internal layout */
  align-items: center;
  justify-content: space-between;
}

/* Flexbox for cards */
.card {
  display: flex;
  flex-direction: column;
}`,
          }}
          demo={
            <div
              style={{
                display: 'grid',
                gridTemplateAreas: '"header header" "sidebar main"',
                gridTemplateColumns: '150px 1fr',
                gridTemplateRows: 'auto 300px',
                gap: '1rem',
              }}
            >
              <div
                style={{ gridArea: 'header' }}
                className="bg-neutral-900 text-white p-4 rounded flex items-center justify-between"
              >
                <span className="font-medium">Dashboard</span>
                <div className="flex gap-2">
                  <div className="w-6 h-6 bg-white/20 rounded"></div>
                  <div className="w-6 h-6 bg-white/20 rounded"></div>
                </div>
              </div>
              <div
                style={{ gridArea: 'sidebar' }}
                className="bg-neutral-100 border border-neutral-300 p-4 rounded"
              >
                <div className="space-y-2">
                  <div className="bg-blue-500 text-white px-3 py-2 rounded text-sm">Home</div>
                  <div className="bg-white px-3 py-2 rounded text-sm">Stats</div>
                  <div className="bg-white px-3 py-2 rounded text-sm">Settings</div>
                </div>
              </div>
              <div
                style={{ gridArea: 'main' }}
                className="bg-white border border-neutral-300 p-4 rounded"
              >
                <div className="grid grid-cols-2 gap-4 h-full">
                  <div className="flex flex-col bg-blue-50 border border-blue-200 rounded p-4">
                    <div className="font-medium mb-2">Widget 1</div>
                    <div className="flex-1 bg-white rounded p-2 text-sm text-neutral-600">Content</div>
                  </div>
                  <div className="flex flex-col bg-green-50 border border-green-200 rounded p-4">
                    <div className="font-medium mb-2">Widget 2</div>
                    <div className="flex-1 bg-white rounded p-2 text-sm text-neutral-600">Content</div>
                  </div>
                </div>
              </div>
            </div>
          }
          diagram={
            <div className="space-y-2">
              <div className="grid grid-cols-[150px_1fr] gap-2">
                <div className="col-span-2 bg-neutral-100 border-2 border-neutral-300 p-3 rounded">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Header (Flexbox internally)</span>
                    <div className="flex gap-1">
                      <div className="w-4 h-4 bg-blue-300 rounded"></div>
                      <div className="w-4 h-4 bg-blue-300 rounded"></div>
                    </div>
                  </div>
                </div>
                <div className="bg-purple-100 border-2 border-purple-300 p-3 rounded">
                  <div className="text-sm font-medium">Sidebar</div>
                  <div className="text-xs text-neutral-600">Grid area</div>
                </div>
                <div className="bg-green-100 border-2 border-green-300 p-3 rounded">
                  <div className="text-sm font-medium">Main (Grid for cards)</div>
                  <div className="grid grid-cols-2 gap-1 mt-2">
                    <div className="bg-white border border-green-400 p-1 text-xs flex flex-col">
                      <div>Card</div>
                      <div className="text-neutral-500">(Flex)</div>
                    </div>
                    <div className="bg-white border border-green-400 p-1 text-xs flex flex-col">
                      <div>Card</div>
                      <div className="text-neutral-500">(Flex)</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          }
          useCases={[
            'Admin dashboards with charts and widgets',
            'Analytics platforms',
            'SaaS application interfaces',
            'Content management systems',
          ]}
          notes={[
            'Grid provides the page structure and layout',
            'Flexbox handles alignment and spacing within components',
            'This is the recommended approach for complex UIs',
            'Each layout method does what it does best',
          ]}
        />

        {/* Magazine Layout */}
        <PatternCard
          title="Magazine/Editorial Layout"
          description="Complex asymmetric grid with flexbox for article card internals"
          code={{
            html: `<div class="magazine">
  <article class="feature">Feature</article>
  <article class="story">Story 1</article>
  <article class="story">Story 2</article>
  <article class="story wide">Story 3</article>
</div>`,
            css: `.magazine {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 200px;
  gap: 1rem;
}

.feature {
  grid-column: span 2;
  grid-row: span 2;
  display: flex;
  flex-direction: column;
}

.wide {
  grid-column: span 2;
}

article {
  display: flex;
  flex-direction: column;
}`,
          }}
          demo={
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gridAutoRows: '150px',
                gap: '1rem',
              }}
            >
              <div
                style={{ gridColumn: 'span 2', gridRow: 'span 2' }}
                className="bg-gradient-to-br from-blue-600 to-blue-800 text-white p-6 rounded-lg flex flex-col justify-end"
              >
                <h3 className="font-bold text-lg">Featured Story</h3>
                <p className="text-sm opacity-90">Main article content</p>
              </div>
              <div className="bg-purple-500 text-white p-4 rounded-lg flex flex-col justify-end">
                <h4 className="font-medium">Story 1</h4>
              </div>
              <div className="bg-green-500 text-white p-4 rounded-lg flex flex-col justify-end">
                <h4 className="font-medium">Story 2</h4>
              </div>
              <div className="bg-orange-500 text-white p-4 rounded-lg flex flex-col justify-end">
                <h4 className="font-medium">Story 3</h4>
              </div>
              <div className="bg-pink-500 text-white p-4 rounded-lg flex flex-col justify-end">
                <h4 className="font-medium">Story 4</h4>
              </div>
              <div
                style={{ gridColumn: 'span 2' }}
                className="bg-indigo-500 text-white p-4 rounded-lg flex flex-col justify-end"
              >
                <h4 className="font-medium">Wide Story</h4>
              </div>
              <div
                style={{ gridColumn: 'span 2' }}
                className="bg-teal-500 text-white p-4 rounded-lg flex flex-col justify-end"
              >
                <h4 className="font-medium">Wide Story 2</h4>
              </div>
            </div>
          }
          diagram={
            <div className="grid grid-cols-4 gap-2 text-xs">
              <div className="col-span-2 row-span-2 bg-blue-100 border-2 border-blue-300 p-3 rounded flex items-end">
                <div>
                  <div className="font-medium">Feature</div>
                  <div className="text-neutral-600">col: span 2, row: span 2</div>
                </div>
              </div>
              <div className="bg-purple-100 border-2 border-purple-300 p-3 rounded flex items-center justify-center">
                Story 1
              </div>
              <div className="bg-green-100 border-2 border-green-300 p-3 rounded flex items-center justify-center">
                Story 2
              </div>
              <div className="bg-orange-100 border-2 border-orange-300 p-3 rounded flex items-center justify-center">
                Story 3
              </div>
              <div className="bg-pink-100 border-2 border-pink-300 p-3 rounded flex items-center justify-center">
                Story 4
              </div>
              <div className="col-span-2 bg-indigo-100 border-2 border-indigo-300 p-3 rounded text-center">
                Wide Story (col: span 2)
              </div>
              <div className="col-span-2 bg-teal-100 border-2 border-teal-300 p-3 rounded text-center">
                Wide Story 2
              </div>
            </div>
          }
          useCases={[
            'News and magazine websites',
            'Blog homepages with featured content',
            'Portfolio showcases',
            'Media galleries with varied sizes',
          ]}
          notes={[
            'Grid creates the asymmetric layout structure',
            'Flexbox positions content within each article',
            'Use grid-column: span and grid-row: span for sizing',
            'Very editorial and visually interesting',
          ]}
        />

        {/* Card Grid with Flex Cards */}
        <PatternCard
          title="Responsive Card Grid"
          description="Auto-fit grid for responsive columns, flexbox for equal-height cards"
          code={{
            html: `<div class="card-grid">
  <div class="card">
    <img src="image.jpg" alt="">
    <div class="card-content">
      <h3>Title</h3>
      <p>Description</p>
      <button>Action</button>
    </div>
  </div>
</div>`,
            css: `.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.card {
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
}

.card-content {
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 1rem;
}

.card-content button {
  margin-top: auto;
}`,
          }}
          demo={
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '1rem',
              }}
            >
              {[
                { title: 'Product 1', desc: 'Short description' },
                { title: 'Product 2', desc: 'This product has a much longer description to show flex behavior' },
                { title: 'Product 3', desc: 'Another item' },
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col border border-neutral-300 rounded-lg overflow-hidden bg-white">
                  <div className="h-32 bg-gradient-to-br from-blue-400 to-purple-600"></div>
                  <div className="flex flex-col flex-1 p-4">
                    <h3 className="font-medium mb-2">{item.title}</h3>
                    <p className="text-sm text-neutral-600 flex-1">{item.desc}</p>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded mt-4 text-sm">
                      Buy Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          }
          diagram={
            <div className="space-y-3">
              <div className="text-sm font-medium text-neutral-700">Grid creates columns:</div>
              <div className="grid grid-cols-3 gap-2">
                <div className="border-2 border-blue-300 rounded-lg p-2">
                  <div className="bg-blue-200 h-16 rounded mb-2"></div>
                  <div className="space-y-1">
                    <div className="bg-neutral-200 h-3 rounded"></div>
                    <div className="bg-neutral-200 h-3 rounded w-3/4"></div>
                  </div>
                </div>
                <div className="border-2 border-blue-300 rounded-lg p-2">
                  <div className="bg-blue-200 h-16 rounded mb-2"></div>
                  <div className="space-y-1">
                    <div className="bg-neutral-200 h-3 rounded"></div>
                    <div className="bg-neutral-200 h-3 rounded w-3/4"></div>
                  </div>
                </div>
                <div className="border-2 border-blue-300 rounded-lg p-2">
                  <div className="bg-blue-200 h-16 rounded mb-2"></div>
                  <div className="space-y-1">
                    <div className="bg-neutral-200 h-3 rounded"></div>
                    <div className="bg-neutral-200 h-3 rounded w-3/4"></div>
                  </div>
                </div>
              </div>
              <div className="text-sm font-medium text-neutral-700 mt-4">Flexbox inside each card:</div>
              <div className="border-2 border-green-300 rounded-lg overflow-hidden max-w-xs">
                <div className="bg-green-100 p-2 border-b-2 border-green-300 text-center text-sm">Image (fixed)</div>
                <div className="bg-green-50 p-2 border-b-2 border-dashed border-green-300 text-center text-sm">
                  Content (flex: 1)
                </div>
                <div className="bg-green-100 p-2 text-center text-sm">Button (mt-auto)</div>
              </div>
            </div>
          }
          useCases={[
            'E-commerce product listings',
            'Blog post grids',
            'Team member cards',
            'Service offerings showcases',
          ]}
          notes={[
            'Grid handles the responsive column layout',
            'Flexbox ensures equal card heights and button alignment',
            'auto-fit makes it responsive without media queries',
            'Perfect for content-heavy sites',
          ]}
        />

        {/* App Shell */}
        <PatternCard
          title="App Shell Pattern"
          description="Grid for app structure, flexbox for toolbar and content areas"
          code={{
            html: `<div class="app-shell">
  <header class="toolbar">Toolbar</header>
  <aside class="drawer">Drawer</aside>
  <main class="content">Content</main>
  <nav class="bottom-nav">Bottom Nav</nav>
</div>`,
            css: `.app-shell {
  display: grid;
  grid-template-areas:
    "toolbar toolbar"
    "drawer content"
    "bottom bottom";
  grid-template-columns: auto 1fr;
  grid-template-rows: auto 1fr auto;
  height: 100vh;
}

.toolbar {
  grid-area: toolbar;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.drawer {
  grid-area: drawer;
  display: flex;
  flex-direction: column;
}

.bottom-nav {
  grid-area: bottom;
  display: flex;
  justify-content: space-around;
}`,
          }}
          demo={
            <div
              style={{
                display: 'grid',
                gridTemplateAreas: '"toolbar toolbar" "drawer content" "bottom bottom"',
                gridTemplateColumns: '60px 1fr',
                gridTemplateRows: 'auto 1fr auto',
                height: '400px',
              }}
              className="border-2 border-neutral-300 rounded-lg overflow-hidden"
            >
              <div
                style={{ gridArea: 'toolbar' }}
                className="bg-blue-600 text-white px-4 py-3 flex items-center gap-3"
              >
                <div className="w-6 h-6 bg-white/20 rounded"></div>
                <span className="font-medium">App Toolbar</span>
                <div className="ml-auto flex gap-2">
                  <div className="w-6 h-6 bg-white/20 rounded"></div>
                  <div className="w-6 h-6 bg-white/20 rounded"></div>
                </div>
              </div>
              <div
                style={{ gridArea: 'drawer' }}
                className="bg-neutral-800 text-white flex flex-col items-center py-4 gap-3"
              >
                <div className="w-8 h-8 bg-white/20 rounded"></div>
                <div className="w-8 h-8 bg-white/20 rounded"></div>
                <div className="w-8 h-8 bg-white/20 rounded"></div>
              </div>
              <div
                style={{ gridArea: 'content' }}
                className="bg-white p-6"
              >
                <div className="space-y-3">
                  <div className="h-4 bg-neutral-200 rounded w-3/4"></div>
                  <div className="h-4 bg-neutral-200 rounded"></div>
                  <div className="h-4 bg-neutral-200 rounded w-5/6"></div>
                </div>
              </div>
              <div
                style={{ gridArea: 'bottom' }}
                className="bg-white border-t-2 border-neutral-200 flex justify-around py-3"
              >
                <div className="w-8 h-8 bg-blue-500 rounded"></div>
                <div className="w-8 h-8 bg-neutral-300 rounded"></div>
                <div className="w-8 h-8 bg-neutral-300 rounded"></div>
                <div className="w-8 h-8 bg-neutral-300 rounded"></div>
              </div>
            </div>
          }
          diagram={
            <div className="grid grid-cols-[60px_1fr] gap-2 text-xs border-2 border-neutral-300 rounded-lg overflow-hidden">
              <div className="col-span-2 bg-blue-100 border-b-2 border-blue-300 p-3 flex items-center justify-between">
                <span className="font-medium">Toolbar (Flexbox: space-between)</span>
                <div className="flex gap-1">
                  <div className="w-4 h-4 bg-blue-300 rounded"></div>
                  <div className="w-4 h-4 bg-blue-300 rounded"></div>
                </div>
              </div>
              <div className="bg-neutral-100 border-r-2 border-neutral-300 p-3 flex flex-col items-center gap-2">
                <div className="font-medium">Drawer</div>
                <div className="text-neutral-600">(Flex col)</div>
              </div>
              <div className="bg-green-100 border-r-2 border-green-300 p-3">
                <div className="font-medium">Content Area</div>
                <div className="text-neutral-600">Main scrollable content</div>
              </div>
              <div className="col-span-2 bg-orange-100 border-t-2 border-orange-300 p-3 flex justify-around">
                <div className="w-4 h-4 bg-orange-300 rounded"></div>
                <div className="w-4 h-4 bg-orange-300 rounded"></div>
                <div className="w-4 h-4 bg-orange-300 rounded"></div>
              </div>
            </div>
          }
          useCases={[
            'Mobile-first web applications',
            'Progressive web apps (PWAs)',
            'Desktop applications',
            'Admin panels and dashboards',
          ]}
          notes={[
            'Grid defines the application structure',
            'Flexbox handles internal component layout',
            'Perfect for mobile and desktop views',
            'Easy to show/hide drawer on different screen sizes',
          ]}
        />

        {/* Form Layout */}
        <PatternCard
          title="Complex Form Layout"
          description="Grid for form structure, flexbox for field groups and buttons"
          code={{
            html: `<form class="form-grid">
  <div class="form-row">
    <label>First Name</label>
    <input type="text">
  </div>
  <div class="form-row">
    <label>Last Name</label>
    <input type="text">
  </div>
  <div class="form-actions">
    <button>Cancel</button>
    <button>Submit</button>
  </div>
</form>`,
            css: `.form-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.form-row {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-actions {
  grid-column: 1 / -1;
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
}`,
          }}
          demo={
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '1rem',
              }}
              className="bg-white p-6 border border-neutral-300 rounded-lg"
            >
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-neutral-700">First Name</label>
                <input
                  type="text"
                  className="border border-neutral-300 rounded px-3 py-2"
                  placeholder="John"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-neutral-700">Last Name</label>
                <input
                  type="text"
                  className="border border-neutral-300 rounded px-3 py-2"
                  placeholder="Doe"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-neutral-700">Email</label>
                <input
                  type="email"
                  className="border border-neutral-300 rounded px-3 py-2"
                  placeholder="john@example.com"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-neutral-700">Phone</label>
                <input
                  type="tel"
                  className="border border-neutral-300 rounded px-3 py-2"
                  placeholder="(555) 123-4567"
                />
              </div>
              <div
                style={{ gridColumn: '1 / -1' }}
                className="flex flex-col gap-2"
              >
                <label className="text-sm font-medium text-neutral-700">Address</label>
                <input
                  type="text"
                  className="border border-neutral-300 rounded px-3 py-2"
                  placeholder="123 Main St"
                />
              </div>
              <div
                style={{ gridColumn: '1 / -1' }}
                className="flex gap-3 justify-end mt-2"
              >
                <button className="border border-neutral-300 px-6 py-2 rounded hover:bg-neutral-50">
                  Cancel
                </button>
                <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
                  Submit
                </button>
              </div>
            </div>
          }
          diagram={
            <div className="space-y-2">
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="bg-blue-100 border-2 border-blue-300 p-3 rounded">
                  <div className="font-medium mb-1">Field 1 (Flex col)</div>
                  <div className="bg-white p-1 rounded text-neutral-600">Label + Input</div>
                </div>
                <div className="bg-blue-100 border-2 border-blue-300 p-3 rounded">
                  <div className="font-medium mb-1">Field 2 (Flex col)</div>
                  <div className="bg-white p-1 rounded text-neutral-600">Label + Input</div>
                </div>
                <div className="col-span-2 bg-green-100 border-2 border-green-300 p-3 rounded">
                  <div className="font-medium mb-1">Full-width field</div>
                  <div className="bg-white p-1 rounded text-neutral-600">grid-column: 1 / -1</div>
                </div>
                <div className="col-span-2 bg-orange-100 border-2 border-orange-300 p-3 rounded flex justify-end gap-2">
                  <div className="bg-white px-2 py-1 rounded">Cancel</div>
                  <div className="bg-white px-2 py-1 rounded">Submit</div>
                </div>
              </div>
            </div>
          }
          useCases={[
            'Registration and signup forms',
            'Checkout forms in e-commerce',
            'User profile editors',
            'Settings pages',
          ]}
          notes={[
            'Grid creates the two-column layout',
            'Flexbox arranges label and input vertically',
            'grid-column: 1 / -1 spans full width',
            'Buttons use flexbox with justify-end for right alignment',
          ]}
        />

        {/* Sidebar Layout */}
        <PatternCard
          title="Content + Sticky Sidebar"
          description="Grid for main layout, flexbox for sidebar widget stacking"
          code={{
            html: `<div class="layout">
  <main class="main">Main Content</main>
  <aside class="sidebar">
    <div class="widget">Widget 1</div>
    <div class="widget">Widget 2</div>
  </aside>
</div>`,
            css: `.layout {
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 2rem;
  align-items: start;
}

.sidebar {
  position: sticky;
  top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.widget {
  display: flex;
  flex-direction: column;
}`,
          }}
          demo={
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 200px',
                gap: '1rem',
                alignItems: 'start',
              }}
              className="max-h-96 overflow-auto"
            >
              <div className="bg-white border border-neutral-300 rounded-lg p-6">
                <h2 className="font-bold mb-4">Article Title</h2>
                {[...Array(8)].map((_, i) => (
                  <p key={i} className="text-neutral-600 mb-3 text-sm">
                    This is paragraph {i + 1} of the main content. It demonstrates how the sidebar stays visible while scrolling through long content.
                  </p>
                ))}
              </div>
              <div className="flex flex-col gap-3 sticky top-4">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h3 className="font-medium text-sm mb-2">Related Links</h3>
                  <div className="space-y-1 text-xs text-blue-700">
                    <div>Link 1</div>
                    <div>Link 2</div>
                    <div>Link 3</div>
                  </div>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h3 className="font-medium text-sm mb-2">Popular</h3>
                  <div className="space-y-1 text-xs text-green-700">
                    <div>Item 1</div>
                    <div>Item 2</div>
                  </div>
                </div>
              </div>
            </div>
          }
          diagram={
            <div className="grid grid-cols-[1fr_200px] gap-3 text-xs">
              <div className="bg-green-100 border-2 border-green-300 p-4 rounded">
                <div className="font-medium mb-2">Main Content</div>
                <div className="space-y-1">
                  <div className="bg-white h-3 rounded"></div>
                  <div className="bg-white h-3 rounded"></div>
                  <div className="bg-white h-3 rounded w-3/4"></div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="bg-blue-100 border-2 border-blue-300 p-3 rounded">
                  <div className="font-medium">Widget 1</div>
                  <div className="text-neutral-600">Sticky sidebar</div>
                </div>
                <div className="bg-purple-100 border-2 border-purple-300 p-3 rounded">
                  <div className="font-medium">Widget 2</div>
                </div>
              </div>
            </div>
          }
          useCases={[
            'Blog posts with related content',
            'Product pages with specifications',
            'Documentation with table of contents',
            'Article pages with ads or widgets',
          ]}
          notes={[
            'Grid creates main + sidebar columns',
            'position: sticky keeps sidebar visible',
            'Flexbox stacks widgets vertically',
            'align-items: start prevents sidebar from stretching',
          ]}
        />
      </div>
    </div>
  );
}
