'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { PageHeader } from '@/components/ui/page-header';
import { SectionContainer } from '@/components/ui/section-container';
import { Button } from '@/components/ui/button';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      // Simulate form submission
      console.log('Form data:', data);
      setSubmitStatus('success');
      reset();
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  return (
    <main>
      <SectionContainer>
        <PageHeader
          title="Contact Us"
          subtitle="Get in touch with us - we'd love to hear from you"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-semibold text-cafe-brown-800 mb-6">
              Get In Touch
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-cafe-brown-700 mb-2">
                  📞 Phone
                </h3>
                <p className="text-cafe-brown-600">(555) 123-4567</p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-cafe-brown-700 mb-2">
                  ✉️ Email
                </h3>
                <p className="text-cafe-brown-600">hello@cafe4good.com</p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-cafe-brown-700 mb-2">
                  📱 Instagram
                </h3>
                <a
                  href="https://instagram.com/cafe4good"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cafe-orange hover:underline"
                >
                  @cafe4good
                </a>
              </div>

              {/* Map Placeholder */}
              <div className="mt-8">
                <h3 className="text-lg font-medium text-cafe-brown-700 mb-4">
                  📍 Location
                </h3>
                <div className="bg-cafe-brown-100 rounded-card h-64 flex items-center justify-center">
                  <p className="text-cafe-brown-600">Map Coming Soon</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-semibold text-cafe-brown-800 mb-6">
              Send Us a Message
            </h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Name Field */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-cafe-brown-700 mb-2"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  {...register('name')}
                  className="w-full px-4 py-3 border border-cafe-brown-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cafe-orange"
                  placeholder="Your name"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-cafe-brown-700 mb-2"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  {...register('email')}
                  className="w-full px-4 py-3 border border-cafe-brown-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cafe-orange"
                  placeholder="your@email.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                )}
              </div>

              {/* Message Field */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-cafe-brown-700 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  {...register('message')}
                  rows={5}
                  className="w-full px-4 py-3 border border-cafe-brown-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cafe-orange resize-none"
                  placeholder="Your message..."
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <Button type="submit" variant="primary" size="lg" className="w-full">
                Send Message
              </Button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <p className="text-green-600 text-center">
                  Message sent successfully! We'll get back to you soon.
                </p>
              )}
              {submitStatus === 'error' && (
                <p className="text-red-600 text-center">
                  Something went wrong. Please try again.
                </p>
              )}
            </form>
          </div>
        </div>
      </SectionContainer>
    </main>
  );
}
