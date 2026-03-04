import PatternCard from './PatternCard';

export default function FlexboxPatterns() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Flexbox Patterns</h1>
        <p className="text-neutral-600">
          Create flexible one-dimensional layouts with these essential Flexbox techniques
        </p>
      </div>

      <div className="space-y-8">
        {/* Navigation Bar */}
        <PatternCard
          title="Flexible Navigation Bar"
          description="Classic navbar with logo on left and navigation items with space distribution"
          code={{
            html: `<nav class="navbar">
  <div class="logo">Logo</div>
  <ul class="nav-items">
    <li>Home</li>
    <li>About</li>
    <li>Contact</li>
  </ul>
  <button class="cta">Sign Up</button>
</nav>`,
            css: `.navbar {
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 1rem 2rem;
}

.nav-items {
  display: flex;
  gap: 2rem;
  margin-left: auto; /* Push to right */
  list-style: none;
}

.cta {
  margin-left: auto; /* Push to far right */
}`,
          }}
          demo={
            <div className="flex items-center gap-8 p-4 bg-neutral-900 text-white rounded-lg">
              <div className="font-bold text-lg">Logo</div>
              <ul className="flex gap-6 ml-auto list-none">
                <li className="hover:text-blue-400 cursor-pointer">Home</li>
                <li className="hover:text-blue-400 cursor-pointer">About</li>
                <li className="hover:text-blue-400 cursor-pointer">Contact</li>
              </ul>
              <button className="ml-auto bg-blue-600 px-4 py-2 rounded hover:bg-blue-700">
                Sign Up
              </button>
            </div>
          }
          diagram={
            <div className="space-y-3">
              <div className="flex items-center gap-4 border-2 border-neutral-300 rounded-lg p-4">
                <div className="bg-blue-100 border-2 border-blue-300 px-4 py-2 rounded">Logo</div>
                <div className="flex-1 border-2 border-dashed border-neutral-300 text-center py-2 text-sm text-neutral-500">
                  flex-grow space (ml-auto)
                </div>
                <div className="bg-purple-100 border-2 border-purple-300 px-3 py-2 rounded text-sm">Home</div>
                <div className="bg-purple-100 border-2 border-purple-300 px-3 py-2 rounded text-sm">About</div>
                <div className="bg-purple-100 border-2 border-purple-300 px-3 py-2 rounded text-sm">Contact</div>
                <div className="flex-1 border-2 border-dashed border-neutral-300 text-center py-2 text-sm text-neutral-500">
                  flex-grow space (ml-auto)
                </div>
                <div className="bg-green-100 border-2 border-green-300 px-4 py-2 rounded">Button</div>
              </div>
              <div className="text-xs text-neutral-600 text-center">
                margin-left: auto pushes items to opposite sides
              </div>
            </div>
          }
          useCases={[
            'Website headers and navigation menus',
            'App bars in mobile applications',
            'Toolbar layouts with actions on both ends',
            'Breadcrumb navigation with actions',
          ]}
          notes={[
            'margin-left: auto is key to spacing items apart',
            'Use gap for consistent spacing between items',
            'align-items: center vertically centers all items',
            'Consider wrapping on mobile with flex-wrap',
          ]}
        />

        {/* Card Layout */}
        <PatternCard
          title="Flexible Card Layout"
          description="Card with header, flexible content area, and footer that stays at bottom"
          code={{
            html: `<div class="card">
  <div class="card-header">Header</div>
  <div class="card-body">Content</div>
  <div class="card-footer">Footer</div>
</div>`,
            css: `.card {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.card-header {
  /* Fixed height */
}

.card-body {
  flex: 1; /* Takes remaining space */
}

.card-footer {
  /* Fixed height, stays at bottom */
  margin-top: auto;
}`,
          }}
          demo={
            <div className="grid grid-cols-2 gap-4">
              {[
                { title: 'Card 1', content: 'Short content.' },
                { title: 'Card 2', content: 'This card has much more content to demonstrate how the footer stays at the bottom regardless of content length.' },
              ].map((card, idx) => (
                <div
                  key={idx}
                  className="flex flex-col border-2 border-neutral-300 rounded-lg overflow-hidden"
                  style={{ height: '300px' }}
                >
                  <div className="bg-blue-500 text-white p-4 font-medium">{card.title}</div>
                  <div className="flex-1 p-4 text-neutral-700">{card.content}</div>
                  <div className="bg-neutral-100 border-t border-neutral-200 p-4 mt-auto">
                    <button className="bg-blue-600 text-white px-4 py-2 rounded text-sm w-full">
                      Action
                    </button>
                  </div>
                </div>
              ))}
            </div>
          }
          diagram={
            <div className="space-y-2">
              <div className="border-2 border-neutral-300 rounded-lg overflow-hidden">
                <div className="bg-blue-100 border-b-2 border-blue-300 p-3 text-center">
                  <div className="font-medium">Header</div>
                  <div className="text-xs text-neutral-600">Fixed size</div>
                </div>
                <div className="bg-green-100 border-b-2 border-green-300 p-8 text-center">
                  <div className="font-medium">Body</div>
                  <div className="text-xs text-neutral-600">flex: 1 (grows to fill space)</div>
                </div>
                <div className="bg-orange-100 border-t-2 border-orange-300 p-3 text-center">
                  <div className="font-medium">Footer</div>
                  <div className="text-xs text-neutral-600">margin-top: auto (stays at bottom)</div>
                </div>
              </div>
            </div>
          }
          useCases={[
            'Product cards with consistent button placement',
            'Blog post previews with read more buttons',
            'Profile cards with action buttons',
            'Dashboard widgets with fixed footers',
          ]}
          notes={[
            'flex: 1 makes the body grow to fill available space',
            'margin-top: auto on footer pushes it to bottom',
            'Container needs defined height for this to work',
            'Great for equal-height card grids',
          ]}
        />

        {/* Media Object */}
        <PatternCard
          title="Media Object Pattern"
          description="Classic layout with fixed-width media (image/icon) and flexible content beside it"
          code={{
            html: `<div class="media">
  <img class="media-img" src="avatar.jpg" alt="Avatar">
  <div class="media-body">
    <h3>Title</h3>
    <p>Description text...</p>
  </div>
</div>`,
            css: `.media {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
}

.media-img {
  width: 64px;
  height: 64px;
  flex-shrink: 0; /* Prevents image from shrinking */
  border-radius: 50%;
}

.media-body {
  flex: 1; /* Takes remaining space */
}`,
          }}
          demo={
            <div className="space-y-4">
              {[
                { name: 'Alice Johnson', message: 'This is a short message.' },
                { name: 'Bob Smith', message: 'This is a longer message that demonstrates how the media object pattern works with varying content lengths. The image stays fixed width while the text wraps.' },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 items-start p-4 bg-white border border-neutral-200 rounded-lg">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex-shrink-0 flex items-center justify-center text-white font-medium">
                    {item.name[0]}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-neutral-900">{item.name}</h3>
                    <p className="text-sm text-neutral-600 mt-1">{item.message}</p>
                  </div>
                </div>
              ))}
            </div>
          }
          diagram={
            <div className="flex gap-4 border-2 border-neutral-300 rounded-lg p-4">
              <div className="bg-blue-100 border-2 border-blue-300 rounded-lg w-16 h-16 flex-shrink-0 flex items-center justify-center">
                <div className="text-xs text-center">
                  <div className="font-medium">Image</div>
                  <div className="text-neutral-600">flex-shrink: 0</div>
                </div>
              </div>
              <div className="bg-green-100 border-2 border-green-300 rounded-lg p-3 flex-1">
                <div className="font-medium text-sm">Content</div>
                <div className="text-xs text-neutral-600">flex: 1 (expands to fill)</div>
              </div>
            </div>
          }
          useCases={[
            'Comment sections and discussion threads',
            'Social media posts and feeds',
            'Notification lists',
            'User profile listings',
            'Product reviews with avatars',
          ]}
          notes={[
            'flex-shrink: 0 prevents the image from getting squished',
            'align-items: flex-start keeps image at top',
            'Use min-width: 0 on body to prevent overflow issues',
            'One of the most common UI patterns',
          ]}
        />

        {/* Sticky Footer */}
        <PatternCard
          title="Sticky Footer Layout"
          description="Footer that sticks to bottom of viewport when content is short, or follows content when it's long"
          code={{
            html: `<div class="page">
  <header>Header</header>
  <main>Content</main>
  <footer>Footer</footer>
</div>`,
            css: `.page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

header {
  /* Fixed height */
}

main {
  flex: 1; /* Grows to fill space */
}

footer {
  /* Fixed height, pushed to bottom */
}`,
          }}
          demo={
            <div className="grid grid-cols-2 gap-4">
              <div
                className="flex flex-col border-2 border-neutral-300 rounded-lg overflow-hidden"
                style={{ height: '350px' }}
              >
                <div className="bg-blue-500 text-white p-4 text-center font-medium">Header</div>
                <div className="flex-1 p-4 text-neutral-700">
                  <p className="text-sm">Short content</p>
                </div>
                <div className="bg-neutral-800 text-white p-4 text-center">Footer (at bottom)</div>
              </div>
              <div
                className="flex flex-col border-2 border-neutral-300 rounded-lg overflow-hidden"
                style={{ height: '350px' }}
              >
                <div className="bg-blue-500 text-white p-4 text-center font-medium">Header</div>
                <div className="flex-1 p-4 text-neutral-700 overflow-auto">
                  <p className="text-sm mb-2">Long content that scrolls...</p>
                  {[...Array(10)].map((_, i) => (
                    <p key={i} className="text-sm mb-2">Paragraph {i + 1}</p>
                  ))}
                </div>
                <div className="bg-neutral-800 text-white p-4 text-center">Footer (after content)</div>
              </div>
            </div>
          }
          diagram={
            <div className="space-y-4">
              <div className="text-sm font-medium text-neutral-700">Short content:</div>
              <div className="border-2 border-neutral-300 rounded-lg h-48 flex flex-col">
                <div className="bg-blue-100 border-b-2 border-blue-300 p-2 text-center text-sm">Header</div>
                <div className="bg-green-100 border-b-2 border-green-300 p-2 text-center text-sm flex-1">
                  Main (flex: 1 expands)
                </div>
                <div className="bg-orange-100 border-t-2 border-orange-300 p-2 text-center text-sm">Footer</div>
              </div>
            </div>
          }
          useCases={[
            'Simple websites with variable content length',
            'Login and registration pages',
            'Error pages (404, 500, etc.)',
            'Landing pages with minimal content',
          ]}
          notes={[
            'min-height: 100vh ensures full viewport height',
            'flex: 1 on main makes it grow to fill space',
            'Footer naturally stays at bottom',
            'Works for any amount of content',
          ]}
        />

        {/* Space Distribution */}
        <PatternCard
          title="Space Distribution (justify-content)"
          description="Control how items are distributed along the main axis with various spacing options"
          code={{
            html: `<div class="flex-container">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>`,
            css: `/* Space between items */
.justify-between {
  display: flex;
  justify-content: space-between;
}

/* Space around items */
.justify-around {
  display: flex;
  justify-content: space-around;
}

/* Space evenly */
.justify-evenly {
  display: flex;
  justify-content: space-evenly;
}`,
          }}
          demo={
            <div className="space-y-4">
              <div>
                <div className="text-sm font-medium text-neutral-700 mb-2">space-between</div>
                <div className="flex justify-between bg-neutral-100 p-4 rounded-lg border border-neutral-200">
                  <div className="bg-blue-500 text-white px-4 py-2 rounded">Item 1</div>
                  <div className="bg-blue-500 text-white px-4 py-2 rounded">Item 2</div>
                  <div className="bg-blue-500 text-white px-4 py-2 rounded">Item 3</div>
                </div>
              </div>
              <div>
                <div className="text-sm font-medium text-neutral-700 mb-2">space-around</div>
                <div className="flex justify-around bg-neutral-100 p-4 rounded-lg border border-neutral-200">
                  <div className="bg-purple-500 text-white px-4 py-2 rounded">Item 1</div>
                  <div className="bg-purple-500 text-white px-4 py-2 rounded">Item 2</div>
                  <div className="bg-purple-500 text-white px-4 py-2 rounded">Item 3</div>
                </div>
              </div>
              <div>
                <div className="text-sm font-medium text-neutral-700 mb-2">space-evenly</div>
                <div className="flex justify-evenly bg-neutral-100 p-4 rounded-lg border border-neutral-200">
                  <div className="bg-green-500 text-white px-4 py-2 rounded">Item 1</div>
                  <div className="bg-green-500 text-white px-4 py-2 rounded">Item 2</div>
                  <div className="bg-green-500 text-white px-4 py-2 rounded">Item 3</div>
                </div>
              </div>
            </div>
          }
          diagram={
            <div className="space-y-4 text-xs">
              <div>
                <div className="font-medium mb-2 text-neutral-700">space-between:</div>
                <div className="flex border-2 border-neutral-300 rounded-lg p-2">
                  <div className="bg-blue-100 border-2 border-blue-300 p-2">Item</div>
                  <div className="flex-1 border-2 border-dashed border-neutral-300 mx-1"></div>
                  <div className="bg-blue-100 border-2 border-blue-300 p-2">Item</div>
                  <div className="flex-1 border-2 border-dashed border-neutral-300 mx-1"></div>
                  <div className="bg-blue-100 border-2 border-blue-300 p-2">Item</div>
                </div>
                <div className="text-neutral-600 mt-1">No space at edges, equal space between</div>
              </div>
              <div>
                <div className="font-medium mb-2 text-neutral-700">space-around:</div>
                <div className="flex border-2 border-neutral-300 rounded-lg p-2">
                  <div className="flex-1 border-2 border-dashed border-neutral-300 mr-1"></div>
                  <div className="bg-purple-100 border-2 border-purple-300 p-2">Item</div>
                  <div className="flex-1 border-2 border-dashed border-neutral-300 mx-1"></div>
                  <div className="bg-purple-100 border-2 border-purple-300 p-2">Item</div>
                  <div className="flex-1 border-2 border-dashed border-neutral-300 mx-1"></div>
                  <div className="bg-purple-100 border-2 border-purple-300 p-2">Item</div>
                  <div className="flex-1 border-2 border-dashed border-neutral-300 ml-1"></div>
                </div>
                <div className="text-neutral-600 mt-1">Half space at edges, full space between</div>
              </div>
              <div>
                <div className="font-medium mb-2 text-neutral-700">space-evenly:</div>
                <div className="flex border-2 border-neutral-300 rounded-lg p-2">
                  <div className="flex-1 border-2 border-dashed border-neutral-300 mr-1"></div>
                  <div className="bg-green-100 border-2 border-green-300 p-2">Item</div>
                  <div className="flex-1 border-2 border-dashed border-neutral-300 mx-1"></div>
                  <div className="bg-green-100 border-2 border-green-300 p-2">Item</div>
                  <div className="flex-1 border-2 border-dashed border-neutral-300 mx-1"></div>
                  <div className="bg-green-100 border-2 border-green-300 p-2">Item</div>
                  <div className="flex-1 border-2 border-dashed border-neutral-300 ml-1"></div>
                </div>
                <div className="text-neutral-600 mt-1">Equal space everywhere</div>
              </div>
            </div>
          }
          useCases={[
            'Toolbar buttons distribution',
            'Footer menu items',
            'Pagination controls',
            'Step indicators in multi-step forms',
          ]}
          notes={[
            'space-between: no space at edges',
            'space-around: items have equal space on both sides',
            'space-evenly: all gaps are equal (best for visual balance)',
            'Prefer gap property for consistent spacing when possible',
          ]}
        />

        {/* Centering */}
        <PatternCard
          title="Perfect Centering"
          description="Center content both horizontally and vertically using flexbox"
          code={{
            html: `<div class="center-container">
  <div class="centered-content">
    Perfectly Centered
  </div>
</div>`,
            css: `.center-container {
  display: flex;
  justify-content: center; /* Horizontal */
  align-items: center;     /* Vertical */
  min-height: 400px;
}

/* Alternative method */
.center-alt {
  display: flex;
}

.centered-content {
  margin: auto; /* Centers in both directions */
}`,
          }}
          demo={
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-neutral-100 border-2 border-neutral-300 rounded-lg flex justify-center items-center" style={{ height: '250px' }}>
                <div className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium">
                  Method 1:<br />justify + align
                </div>
              </div>
              <div className="bg-neutral-100 border-2 border-neutral-300 rounded-lg flex" style={{ height: '250px' }}>
                <div className="bg-purple-600 text-white px-6 py-3 rounded-lg font-medium m-auto">
                  Method 2:<br />margin: auto
                </div>
              </div>
            </div>
          }
          diagram={
            <div className="border-2 border-neutral-300 rounded-lg p-8 relative" style={{ height: '200px' }}>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-blue-100 border-2 border-blue-300 rounded-lg p-4 text-center">
                  <div className="font-medium">Centered Content</div>
                  <div className="text-xs text-neutral-600 mt-1">
                    justify-content: center<br />
                    align-items: center
                  </div>
                </div>
              </div>
              <div className="absolute top-0 left-1/2 w-px h-full bg-neutral-300"></div>
              <div className="absolute left-0 top-1/2 w-full h-px bg-neutral-300"></div>
            </div>
          }
          useCases={[
            'Loading spinners and modals',
            'Hero sections with centered CTAs',
            'Empty states and error messages',
            'Login forms and auth pages',
          ]}
          notes={[
            'Most common and reliable centering method',
            'Works with any content size',
            'margin: auto is a neat alternative',
            'Container needs defined height for vertical centering',
          ]}
        />

        {/* Auto Margins */}
        <PatternCard
          title="Auto Margins for Alignment"
          description="Use auto margins to push items to edges or create space in flex layouts"
          code={{
            html: `<div class="flex-container">
  <div>Left</div>
  <div class="ml-auto">Right</div>
</div>

<div class="flex-container">
  <div>Left</div>
  <div class="mx-auto">Center</div>
  <div>Right</div>
</div>`,
            css: `.flex-container {
  display: flex;
  gap: 1rem;
}

.ml-auto {
  margin-left: auto;
}

.mx-auto {
  margin-left: auto;
  margin-right: auto;
}`,
          }}
          demo={
            <div className="space-y-4">
              <div className="flex gap-4 bg-neutral-100 p-4 rounded-lg border border-neutral-200">
                <div className="bg-blue-500 text-white px-4 py-2 rounded">Left</div>
                <div className="bg-purple-500 text-white px-4 py-2 rounded ml-auto">Right (ml-auto)</div>
              </div>
              <div className="flex gap-4 bg-neutral-100 p-4 rounded-lg border border-neutral-200">
                <div className="bg-blue-500 text-white px-4 py-2 rounded">Left</div>
                <div className="bg-green-500 text-white px-4 py-2 rounded mx-auto">Center (mx-auto)</div>
                <div className="bg-orange-500 text-white px-4 py-2 rounded">Right</div>
              </div>
              <div className="flex gap-4 bg-neutral-100 p-4 rounded-lg border border-neutral-200">
                <div className="bg-blue-500 text-white px-4 py-2 rounded">Item 1</div>
                <div className="bg-blue-500 text-white px-4 py-2 rounded">Item 2</div>
                <div className="bg-purple-500 text-white px-4 py-2 rounded ml-auto">Last Item (ml-auto)</div>
              </div>
            </div>
          }
          diagram={
            <div className="space-y-3 text-xs">
              <div className="flex border-2 border-neutral-300 rounded-lg p-2">
                <div className="bg-blue-100 border-2 border-blue-300 p-2">Item</div>
                <div className="flex-1 border-2 border-dashed border-neutral-300 mx-1 flex items-center justify-center text-neutral-500">
                  auto margin
                </div>
                <div className="bg-purple-100 border-2 border-purple-300 p-2">Item (ml-auto)</div>
              </div>
            </div>
          }
          useCases={[
            'Navbar items with logo left and menu right',
            'Card headers with title left and icon right',
            'Form buttons (cancel left, submit right)',
            'Notification badges in corners',
          ]}
          notes={[
            'margin-left: auto consumes all available space to the left',
            'More intuitive than justify-content for asymmetric layouts',
            'Can be combined with other flex properties',
            'Works in both flex and grid contexts',
          ]}
        />

        {/* Flex Wrap */}
        <PatternCard
          title="Responsive Wrapping"
          description="Allow flex items to wrap to multiple lines when space is limited"
          code={{
            html: `<div class="flex-wrap">
  <div class="tag">HTML</div>
  <div class="tag">CSS</div>
  <div class="tag">JavaScript</div>
  <div class="tag">React</div>
  <div class="tag">TypeScript</div>
</div>`,
            css: `.flex-wrap {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tag {
  padding: 0.5rem 1rem;
  background: #3b82f6;
  color: white;
  border-radius: 0.5rem;
  white-space: nowrap;
}`,
          }}
          demo={
            <div className="flex flex-wrap gap-2">
              {['HTML', 'CSS', 'JavaScript', 'React', 'TypeScript', 'Tailwind', 'Node.js', 'Python', 'GraphQL', 'MongoDB'].map((tag) => (
                <div key={tag} className="bg-blue-600 text-white px-3 py-1.5 rounded-full text-sm whitespace-nowrap">
                  {tag}
                </div>
              ))}
            </div>
          }
          diagram={
            <div className="space-y-2">
              <div className="text-sm font-medium text-neutral-700 mb-3">flex-wrap behavior:</div>
              <div className="border-2 border-neutral-300 rounded-lg p-3">
                <div className="flex flex-wrap gap-2">
                  <div className="bg-blue-100 border-2 border-blue-300 px-3 py-2 rounded text-sm">Tag</div>
                  <div className="bg-blue-100 border-2 border-blue-300 px-3 py-2 rounded text-sm">Tag</div>
                  <div className="bg-blue-100 border-2 border-blue-300 px-3 py-2 rounded text-sm">Tag</div>
                  <div className="bg-blue-100 border-2 border-blue-300 px-3 py-2 rounded text-sm">Tag</div>
                </div>
                <div className="border-t-2 border-dashed border-neutral-300 my-2"></div>
                <div className="flex flex-wrap gap-2">
                  <div className="bg-blue-100 border-2 border-blue-300 px-3 py-2 rounded text-sm">Tag</div>
                  <div className="bg-blue-100 border-2 border-blue-300 px-3 py-2 rounded text-sm">Tag</div>
                </div>
              </div>
              <div className="text-xs text-neutral-600 text-center">Items wrap to new line when space runs out</div>
            </div>
          }
          useCases={[
            'Tag clouds and filter chips',
            'Skill badges on resumes',
            'Category labels for articles',
            'Breadcrumb navigation that wraps',
          ]}
          notes={[
            'flex-wrap: wrap allows items to wrap to new lines',
            'flex-wrap: wrap-reverse wraps in reverse order',
            'Use gap for consistent spacing in wrapped layouts',
            'Consider min-width on items to control wrapping behavior',
          ]}
        />
      </div>
    </div>
  );
}
