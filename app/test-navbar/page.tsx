import { Navbar } from '@/components/layout/navbar';

export default function TestNavbarPage() {
  return (
    <div className="min-h-screen bg-cafe-brown-50">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-8">
          <section className="bg-white rounded-lg p-8 shadow-md">
            <h1 className="text-3xl font-bold text-cafe-brown-800 mb-4">
              Navbar Component Test Page
            </h1>
            <p className="text-cafe-brown-700 mb-4">
              This page demonstrates the Navbar component with all its features:
            </p>
            <ul className="list-disc list-inside space-y-2 text-cafe-brown-700">
              <li>✅ Sticky positioning - scroll down to see it stay at the top</li>
              <li>✅ Cafe-themed styling with coffee brown and cream colors</li>
              <li>✅ Desktop navigation with all 8 main pages</li>
              <li>✅ Mobile responsive design with hamburger menu</li>
              <li>✅ Smooth animations using Framer Motion</li>
              <li>✅ Keyboard accessible with focus indicators</li>
              <li>✅ ARIA labels for screen readers</li>
            </ul>
          </section>

          <section className="bg-white rounded-lg p-8 shadow-md">
            <h2 className="text-2xl font-bold text-cafe-brown-800 mb-4">
              Testing Instructions
            </h2>
            <div className="space-y-4 text-cafe-brown-700">
              <div>
                <h3 className="font-semibold mb-2">Desktop Navigation:</h3>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Hover over navigation links to see hover effects</li>
                  <li>Click on any link to navigate to that page</li>
                  <li>Use Tab key to navigate through links</li>
                  <li>Notice the orange focus ring on focused elements</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Mobile Navigation:</h3>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Resize your browser to mobile width (or use DevTools)</li>
                  <li>Click the hamburger menu icon to open mobile menu</li>
                  <li>Notice the smooth animation when opening/closing</li>
                  <li>Click any link to navigate and auto-close the menu</li>
                  <li>Click the X icon to close the menu</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Sticky Behavior:</h3>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Scroll down this page</li>
                  <li>The navbar should stay fixed at the top</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Spacer content to enable scrolling */}
          {[1, 2, 3, 4, 5].map((i) => (
            <section key={i} className="bg-white rounded-lg p-8 shadow-md">
              <h2 className="text-2xl font-bold text-cafe-brown-800 mb-4">
                Section {i}
              </h2>
              <p className="text-cafe-brown-700">
                This is placeholder content to demonstrate the sticky navbar behavior.
                Scroll down to see the navbar remain at the top of the page.
              </p>
              <div className="mt-4 h-32 bg-cafe-brown-100 rounded-lg flex items-center justify-center">
                <span className="text-cafe-brown-600">Placeholder Content</span>
              </div>
            </section>
          ))}
        </div>
      </main>
    </div>
  );
}
