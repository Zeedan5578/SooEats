interface ChatBubbleProps {
  message: string;
  sender: 'system' | 'user';
  timestamp?: string;
}

export function ChatBubble({ message, sender, timestamp }: ChatBubbleProps) {
  const isSystem = sender === 'system';

  return (
    <div
      className={`flex ${isSystem ? 'justify-start' : 'justify-end'} mb-4`}
    >
      <div
        className={`max-w-[75%] rounded-2xl px-4 py-3 ${
          isSystem
            ? 'bg-cafe-brown-100 text-cafe-brown-800'
            : 'bg-cafe-orange text-white'
        }`}
      >
        <p className="text-sm leading-relaxed">{message}</p>
        {timestamp && (
          <p
            className={`text-xs mt-1 ${
              isSystem ? 'text-cafe-brown-600' : 'text-white/80'
            }`}
          >
            {timestamp}
          </p>
        )}
      </div>
    </div>
  );
}
