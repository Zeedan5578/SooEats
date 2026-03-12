'use client';

import { Button } from '@/components/ui/button';

export default function TestButtonPage() {
  return (
    <div className="min-h-screen bg-cafe-cream p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold text-cafe-brown-800 mb-8">Button Component Test</h1>
        
        {/* Primary Variant */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-cafe-brown-700">Primary Variant</h2>
          <div className="flex gap-4 items-center">
            <Button variant="primary" size="sm">Small Primary</Button>
            <Button variant="primary" size="md">Medium Primary</Button>
            <Button variant="primary" size="lg">Large Primary</Button>
          </div>
        </section>

        {/* Secondary Variant */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-cafe-brown-700">Secondary Variant</h2>
          <div className="flex gap-4 items-center">
            <Button variant="secondary" size="sm">Small Secondary</Button>
            <Button variant="secondary" size="md">Medium Secondary</Button>
            <Button variant="secondary" size="lg">Large Secondary</Button>
          </div>
        </section>

        {/* Disabled State */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-cafe-brown-700">Disabled State</h2>
          <div className="flex gap-4 items-center">
            <Button variant="primary" disabled>Disabled Primary</Button>
            <Button variant="secondary" disabled>Disabled Secondary</Button>
          </div>
        </section>

        {/* Interactive Test */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-cafe-brown-700">Interactive Test</h2>
          <div className="flex gap-4 items-center">
            <Button variant="primary" onClick={() => alert('Primary clicked!')}>
              Click Me (Primary)
            </Button>
            <Button variant="secondary" onClick={() => alert('Secondary clicked!')}>
              Click Me (Secondary)
            </Button>
          </div>
          <p className="text-sm text-cafe-brown-600">
            Try hovering, clicking, and using keyboard navigation (Tab + Enter)
          </p>
        </section>
      </div>
    </div>
  );
}
