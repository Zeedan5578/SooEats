'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

// Catering is now handled via the floating chat bubble.
// This page redirects to home if someone visits /catering directly.
export default function CateringPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/');
  }, [router]);

  return (
    <main className="min-h-[50vh] flex items-center justify-center">
      <p className="text-brown-400 text-sm">Redirecting...</p>
    </main>
  );
}
