interface ChatBubbleProps {
  message: string;
  sender: 'system' | 'user';
  timestamp?: string;
}

export function ChatBubble({ message, sender, timestamp }: ChatBubbleProps) {
  const isSystem = sender === 'system';

  return (
    <div className={`flex ${isSystem ? 'justify-start' : 'justify-end'} mb-4`}>
      {isSystem && (
        <div className="w-8 h-8 rounded-full gradient-orange flex items-center justify-center text-white text-xs font-bold mr-2 flex-shrink-0 self-end mb-1">
          C4
        </div>
      )}
      <div
        className={`max-w-[75%] rounded-2xl px-4 py-3 ${
          isSystem
            ? 'bg-brown-50 border border-brown-100 text-brown-800 rounded-bl-sm'
            : 'gradient-orange text-white rounded-br-sm shadow-md'
        }`}
      >
        <p className="text-sm leading-relaxed">{message}</p>
        {timestamp && (
          <p className={`text-xs mt-1.5 ${isSystem ? 'text-brown-400' : 'text-white/70'}`}>
            {timestamp}
          </p>
        )}
      </div>
    </div>
  );
}
