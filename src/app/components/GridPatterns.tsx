import PatternCard from './PatternCard';

export default function GridPatterns() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">CSS Grid Patterns</h1>
        <p className="text-neutral-600">
          Master two-dimensional layouts with these powerful CSS Grid techniques
        </p>
      </div>

      <div className="space-y-8">
        {/* Holy Grail Layout */}
        <PatternCard
          title="Holy Grail Layout"
          description="Classic three-column layout with header and footer - one of the most requested layouts in web design"
          code={{
            html: `<div class="holy-grail">
  <header>Header</header>
  <nav>Navigation</nav>
  <main>Main Content</main>
  <aside>Sidebar</aside>
  <footer>Footer</footer>
</div>`,
            css: `.holy-grail {
  display: grid;
  grid-template-areas:
    "header header header"
    "nav main aside"
    "footer footer footer";
  grid-template-columns: 200px 1fr 200px;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
  gap: 1rem;
}

header { grid-area: header; }
nav { grid-area: nav; }
main { grid-area: main; }
aside { grid-area: aside; }
footer { grid-area: footer; }`,
          }}
          demo={
            <div
              style={{
                display: 'grid',
                gridTemplateAreas: `"header header header" "nav main aside" "footer footer footer"`,
                gridTemplateColumns: '150px 1fr 150px',
                gridTemplateRows: 'auto 300px auto',
                gap: '1rem',
                width: '100%',
              }}
            >
              <div style={{ gridArea: 'header' }} className="bg-blue-500 text-white p-4 rounded font-medium">
                Header
              </div>
              <div style={{ gridArea: 'nav' }} className="bg-purple-500 text-white p-4 rounded font-medium">
                Nav
              </div>
              <div style={{ gridArea: 'main' }} className="bg-green-500 text-white p-4 rounded font-medium">
                Main Content
              </div>
              <div style={{ gridArea: 'aside' }} className="bg-orange-500 text-white p-4 rounded font-medium">
                Sidebar
              </div>
              <div style={{ gridArea: 'footer' }} className="bg-blue-500 text-white p-4 rounded font-medium">
                Footer
              </div>
            </div>
          }
          diagram={
            <div className="space-y-2">
              <div className="grid grid-cols-3 gap-2 text-center text-sm">
                <div className="col-span-3 bg-blue-100 border-2 border-blue-300 p-3 rounded">
                  <span className="font-medium">Header</span>
                  <div className="text-xs text-neutral-600 mt-1">grid-area: header</div>
                </div>
                <div className="bg-purple-100 border-2 border-purple-300 p-3 rounded">
                  <span className="font-medium">Nav</span>
                  <div className="text-xs text-neutral-600 mt-1">200px</div>
                </div>
                <div className="bg-green-100 border-2 border-green-300 p-3 rounded">
                  <span className="font-medium">Main</span>
                  <div className="text-xs text-neutral-600 mt-1">1fr</div>
                </div>
                <div className="bg-orange-100 border-2 border-orange-300 p-3 rounded">
                  <span className="font-medium">Aside</span>
                  <div className="text-xs text-neutral-600 mt-1">200px</div>
                </div>
                <div className="col-span-3 bg-blue-100 border-2 border-blue-300 p-3 rounded">
                  <span className="font-medium">Footer</span>
                  <div className="text-xs text-neutral-600 mt-1">grid-area: footer</div>
                </div>
              </div>
            </div>
          }
          useCases={[
            'Traditional web applications with persistent navigation',
            'Blog layouts with sidebars for widgets and related content',
            'Dashboard interfaces with fixed header and navigation',
            'Documentation sites with table of contents',
          ]}
          notes={[
            'Use minmax() for responsive columns: grid-template-columns: minmax(150px, 200px) 1fr minmax(150px, 200px)',
            'Grid areas make it easy to reorder elements at different breakpoints',
            'Consider collapsing sidebars on mobile using grid-template-areas',
          ]}
        />

        {/* Auto-Fit Grid */}
        <PatternCard
          title="Auto-Fit Responsive Grid"
          description="Automatically creates as many columns as will fit, making items wrap responsively without media queries"
          code={{
            html: `<div class="auto-grid">
  <div class="card">Item 1</div>
  <div class="card">Item 2</div>
  <div class="card">Item 3</div>
  <div class="card">Item 4</div>
  <div class="card">Item 5</div>
  <div class="card">Item 6</div>
</div>`,
            css: `.auto-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

/* Alternative with auto-fill */
.auto-grid-fill {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
}`,
          }}
          demo={
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                gap: '1rem',
              }}
            >
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <div key={num} className="bg-gradient-to-br from-blue-500 to-purple-600 text-white p-6 rounded-lg text-center font-medium">
                  Item {num}
                </div>
              ))}
            </div>
          }
          diagram={
            <div className="space-y-4">
              <div>
                <div className="text-sm font-medium mb-2 text-neutral-700">auto-fit behavior:</div>
                <div className="grid grid-cols-3 gap-2">
                  <div className="bg-blue-100 border-2 border-blue-300 p-3 rounded text-center text-sm">
                    Expands
                  </div>
                  <div className="bg-blue-100 border-2 border-blue-300 p-3 rounded text-center text-sm">
                    To Fill
                  </div>
                  <div className="bg-blue-100 border-2 border-blue-300 p-3 rounded text-center text-sm">
                    Space
                  </div>
                </div>
              </div>
              <div>
                <div className="text-sm font-medium mb-2 text-neutral-700">auto-fill behavior:</div>
                <div className="grid grid-cols-5 gap-2">
                  <div className="bg-green-100 border-2 border-green-300 p-3 rounded text-center text-sm">
                    Item
                  </div>
                  <div className="bg-green-100 border-2 border-green-300 p-3 rounded text-center text-sm">
                    Item
                  </div>
                  <div className="bg-green-100 border-2 border-green-300 p-3 rounded text-center text-sm">
                    Item
                  </div>
                  <div className="border-2 border-dashed border-neutral-300 p-3 rounded text-center text-sm text-neutral-400">
                    Empty
                  </div>
                  <div className="border-2 border-dashed border-neutral-300 p-3 rounded text-center text-sm text-neutral-400">
                    Empty
                  </div>
                </div>
              </div>
            </div>
          }
          useCases={[
            'Product grids in e-commerce sites',
            'Photo galleries that adapt to screen width',
            'Card-based layouts (blog posts, team members, features)',
            'Icon grids and logo showcases',
          ]}
          notes={[
            'auto-fit: stretches items to fill available space',
            'auto-fill: creates empty tracks if there\'s extra space',
            'minmax(250px, 1fr) ensures minimum width of 250px and equal distribution',
            'No media queries needed for basic responsiveness!',
          ]}
        />

        {/* Named Grid Lines */}
        <PatternCard
          title="Named Grid Lines"
          description="Use descriptive names for grid lines to create more maintainable and semantic grid layouts"
          code={{
            html: `<div class="named-grid">
  <div class="content">Content</div>
  <div class="sidebar">Sidebar</div>
</div>`,
            css: `.named-grid {
  display: grid;
  grid-template-columns: 
    [main-start] 1fr 
    [main-end sidebar-start] 300px 
    [sidebar-end];
  grid-template-rows: 
    [header-start] auto 
    [header-end content-start] 1fr 
    [content-end];
  gap: 1rem;
}

.content {
  grid-column: main-start / main-end;
  grid-row: content-start / content-end;
}

.sidebar {
  grid-column: sidebar-start / sidebar-end;
  grid-row: content-start / content-end;
}`,
          }}
          demo={
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 200px',
                gap: '1rem',
                minHeight: '250px',
              }}
            >
              <div className="bg-blue-500 text-white p-6 rounded font-medium">
                <div className="text-sm opacity-90 mb-2">grid-column: main-start / main-end</div>
                <div>Main Content Area</div>
              </div>
              <div className="bg-purple-500 text-white p-6 rounded font-medium">
                <div className="text-sm opacity-90 mb-2">grid-column: sidebar-start / sidebar-end</div>
                <div>Sidebar</div>
              </div>
            </div>
          }
          diagram={
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs text-neutral-600 px-1">
                <span className="font-mono">main-start</span>
                <span className="font-mono">main-end / sidebar-start</span>
                <span className="font-mono">sidebar-end</span>
              </div>
              <div className="grid grid-cols-[1fr_200px] gap-2">
                <div className="bg-blue-100 border-2 border-blue-300 p-4 rounded text-center">
                  <div className="font-medium">Main</div>
                  <div className="text-xs text-neutral-600 mt-1">1fr</div>
                </div>
                <div className="bg-purple-100 border-2 border-purple-300 p-4 rounded text-center">
                  <div className="font-medium">Sidebar</div>
                  <div className="text-xs text-neutral-600 mt-1">300px</div>
                </div>
              </div>
              <div className="flex justify-between text-xs text-neutral-600 px-1">
                <span>↕</span>
                <span>↕</span>
                <span>↕</span>
              </div>
            </div>
          }
          useCases={[
            'Complex layouts where you need precise control over placement',
            'Layouts that need to be reconfigured at different breakpoints',
            'Teams collaborating on large codebases (names improve clarity)',
            'Overlapping elements with specific positioning',
          ]}
          notes={[
            'You can have multiple names for the same line: [main-end sidebar-start]',
            'Named lines are easier to understand than numeric positions',
            'Particularly useful when combined with grid-template-areas',
            'Line names can be reused across rows and columns',
          ]}
        />

        {/* Grid Area Overlap */}
        <PatternCard
          title="Overlapping Grid Items"
          description="Layer grid items on top of each other using z-index and grid positioning"
          code={{
            html: `<div class="overlap-grid">
  <div class="image">Image</div>
  <div class="overlay">Overlay Text</div>
</div>`,
            css: `.overlap-grid {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 300px;
}

.image {
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  z-index: 1;
}

.overlay {
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  z-index: 2;
  align-self: end;
  padding: 2rem;
}`,
          }}
          demo={
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr',
                gridTemplateRows: '300px',
              }}
            >
              <div
                style={{
                  gridColumn: '1 / 2',
                  gridRow: '1 / 2',
                  zIndex: 1,
                }}
                className="bg-gradient-to-br from-purple-400 to-pink-600 rounded-lg"
              />
              <div
                style={{
                  gridColumn: '1 / 2',
                  gridRow: '1 / 2',
                  zIndex: 2,
                  alignSelf: 'end',
                }}
                className="bg-gradient-to-t from-black/70 to-transparent text-white p-6 rounded-lg"
              >
                <h3 className="text-xl font-semibold mb-2">Overlay Content</h3>
                <p className="text-sm opacity-90">Text overlaid on background image</p>
              </div>
            </div>
          }
          diagram={
            <div className="space-y-3">
              <div className="relative h-40 border-2 border-neutral-300 rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-purple-200 flex items-center justify-center">
                  <span className="font-medium text-neutral-700">Layer 1 (z-index: 1)</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 to-transparent flex items-end p-4">
                  <span className="font-medium text-white">Layer 2 (z-index: 2)</span>
                </div>
              </div>
              <div className="text-xs text-neutral-600 text-center">
                Both elements occupy the same grid cell (1 / 2, 1 / 2)
              </div>
            </div>
          }
          useCases={[
            'Hero sections with text over images',
            'Card designs with overlaid buttons or badges',
            'Image galleries with captions',
            'Feature sections with decorative elements',
          ]}
          notes={[
            'Both items must reference the same grid cell to overlap',
            'Use z-index to control stacking order',
            'Combine with align-self and justify-self for positioning',
            'Great alternative to absolute positioning',
          ]}
        />

        {/* Dense Grid Packing */}
        <PatternCard
          title="Dense Grid Packing"
          description="Automatically fill gaps in the grid using grid-auto-flow: dense for masonry-like layouts"
          code={{
            html: `<div class="dense-grid">
  <div class="item wide">Wide</div>
  <div class="item tall">Tall</div>
  <div class="item">Regular</div>
  <div class="item">Regular</div>
  <div class="item large">Large</div>
</div>`,
            css: `.dense-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  grid-auto-rows: 100px;
  grid-auto-flow: dense;
  gap: 1rem;
}

.wide { grid-column: span 2; }
.tall { grid-row: span 2; }
.large { 
  grid-column: span 2;
  grid-row: span 2;
}`,
          }}
          demo={
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))',
                gridAutoRows: '100px',
                gridAutoFlow: 'dense',
                gap: '1rem',
              }}
            >
              <div style={{ gridColumn: 'span 2' }} className="bg-blue-500 text-white p-4 rounded font-medium">
                Wide
              </div>
              <div style={{ gridRow: 'span 2' }} className="bg-green-500 text-white p-4 rounded font-medium">
                Tall
              </div>
              <div className="bg-purple-500 text-white p-4 rounded font-medium">1</div>
              <div className="bg-purple-500 text-white p-4 rounded font-medium">2</div>
              <div style={{ gridColumn: 'span 2', gridRow: 'span 2' }} className="bg-orange-500 text-white p-4 rounded font-medium">
                Large
              </div>
              <div className="bg-purple-500 text-white p-4 rounded font-medium">3</div>
              <div className="bg-purple-500 text-white p-4 rounded font-medium">4</div>
              <div className="bg-purple-500 text-white p-4 rounded font-medium">5</div>
            </div>
          }
          diagram={
            <div className="space-y-2">
              <div className="text-sm font-medium text-neutral-700 mb-3">Without dense:</div>
              <div className="grid grid-cols-4 gap-2 mb-4">
                <div className="col-span-2 bg-blue-100 border-2 border-blue-300 p-2 text-center text-sm">Wide</div>
                <div className="row-span-2 bg-green-100 border-2 border-green-300 p-2 text-center text-sm">Tall</div>
                <div className="border-2 border-dashed border-neutral-300 p-2 text-center text-sm text-neutral-400">Gap</div>
                <div className="bg-purple-100 border-2 border-purple-300 p-2 text-center text-sm">1</div>
                <div className="bg-purple-100 border-2 border-purple-300 p-2 text-center text-sm">2</div>
              </div>
              <div className="text-sm font-medium text-neutral-700 mb-3">With dense:</div>
              <div className="grid grid-cols-4 gap-2">
                <div className="col-span-2 bg-blue-100 border-2 border-blue-300 p-2 text-center text-sm">Wide</div>
                <div className="row-span-2 bg-green-100 border-2 border-green-300 p-2 text-center text-sm">Tall</div>
                <div className="bg-purple-100 border-2 border-purple-300 p-2 text-center text-sm">1</div>
                <div className="bg-purple-100 border-2 border-purple-300 p-2 text-center text-sm">2</div>
                <div className="bg-purple-100 border-2 border-purple-300 p-2 text-center text-sm">3</div>
              </div>
            </div>
          }
          useCases={[
            'Pinterest-style masonry layouts',
            'Image galleries with varying aspect ratios',
            'Dashboard widgets of different sizes',
            'Content cards with dynamic heights',
          ]}
          notes={[
            'dense packing may change the visual order of items',
            'Can cause accessibility issues - DOM order differs from visual order',
            'Best for decorative layouts where order isn\'t critical',
            'Use with caution for interactive content',
          ]}
        />

        {/* Subgrid */}
        <PatternCard
          title="Subgrid Pattern"
          description="Align nested grid items with parent grid tracks for consistent layouts across components"
          code={{
            html: `<div class="parent-grid">
  <div class="card">
    <h3>Title</h3>
    <p>Content</p>
    <button>Action</button>
  </div>
  <div class="card">
    <h3>Title</h3>
    <p>Content</p>
    <button>Action</button>
  </div>
</div>`,
            css: `.parent-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.card {
  display: grid;
  grid-template-rows: subgrid;
  grid-row: span 3;
}

/* Simulated with manual grid */
.card {
  display: grid;
  grid-template-rows: auto 1fr auto;
  gap: 0.5rem;
}`,
          }}
          demo={
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '1rem',
              }}
            >
              {[
                { title: 'Short Title', content: 'Brief content here.' },
                { title: 'Much Longer Title Text', content: 'This card has more content to demonstrate how subgrid keeps items aligned across cards.' },
              ].map((card, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'grid',
                    gridTemplateRows: 'auto 1fr auto',
                    gap: '0.5rem',
                  }}
                  className="bg-white border-2 border-neutral-300 rounded-lg p-4"
                >
                  <h3 className="font-semibold text-neutral-900">{card.title}</h3>
                  <p className="text-neutral-600 text-sm">{card.content}</p>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded mt-2 text-sm">
                    Action
                  </button>
                </div>
              ))}
            </div>
          }
          diagram={
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <div className="bg-blue-100 border-2 border-blue-300 p-2 text-center text-sm h-12 flex items-center justify-center">
                    Title
                  </div>
                  <div className="bg-green-100 border-2 border-green-300 p-2 text-center text-sm h-20 flex items-center justify-center">
                    Content (auto)
                  </div>
                  <div className="bg-orange-100 border-2 border-orange-300 p-2 text-center text-sm h-10 flex items-center justify-center">
                    Button
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="bg-blue-100 border-2 border-blue-300 p-2 text-center text-sm h-12 flex items-center justify-center">
                    Title
                  </div>
                  <div className="bg-green-100 border-2 border-green-300 p-2 text-center text-sm h-20 flex items-center justify-center">
                    Content (1fr)
                  </div>
                  <div className="bg-orange-100 border-2 border-orange-300 p-2 text-center text-sm h-10 flex items-center justify-center">
                    Button
                  </div>
                </div>
              </div>
              <div className="text-xs text-neutral-600 text-center">
                Both cards' buttons align at the same height
              </div>
            </div>
          }
          useCases={[
            'Card grids where internal elements should align',
            'Form layouts with consistent field heights',
            'Pricing tables with aligned features',
            'Product comparison grids',
          ]}
          notes={[
            'Subgrid browser support is still limited - use fallback',
            'Can inherit parent gaps or define its own',
            'Useful for maintaining alignment in nested components',
            'Works with both rows and columns',
          ]}
        />
      </div>
    </div>
  );
}
