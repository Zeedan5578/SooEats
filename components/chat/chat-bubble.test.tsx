import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ChatBubble } from './chat-bubble';

describe('ChatBubble', () => {
  it('renders message text', () => {
    render(<ChatBubble message="Hello!" sender="user" />);
    expect(screen.getByText('Hello!')).toBeInTheDocument();
  });

  it('applies system styling for system messages', () => {
    const { container } = render(
      <ChatBubble message="System message" sender="system" />
    );
    const bubble = container.querySelector('.bg-brown-50');
    expect(bubble).toBeInTheDocument();
  });

  it('applies user styling for user messages', () => {
    const { container } = render(
      <ChatBubble message="User message" sender="user" />
    );
    const bubble = container.querySelector('.gradient-orange');
    expect(bubble).toBeInTheDocument();
  });

  it('aligns system messages to the left', () => {
    const { container } = render(
      <ChatBubble message="System message" sender="system" />
    );
    const wrapper = container.querySelector('.justify-start');
    expect(wrapper).toBeInTheDocument();
  });

  it('aligns user messages to the right', () => {
    const { container } = render(
      <ChatBubble message="User message" sender="user" />
    );
    const wrapper = container.querySelector('.justify-end');
    expect(wrapper).toBeInTheDocument();
  });

  it('displays timestamp when provided', () => {
    render(
      <ChatBubble
        message="Test message"
        sender="user"
        timestamp="10:30 AM"
      />
    );
    expect(screen.getByText('10:30 AM')).toBeInTheDocument();
  });

  it('does not display timestamp when not provided', () => {
    const { container } = render(
      <ChatBubble message="Test message" sender="user" />
    );
    const timestamp = container.querySelector('.text-xs');
    expect(timestamp).not.toBeInTheDocument();
  });
});
