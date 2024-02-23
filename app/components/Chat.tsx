import { FormEvent, useState } from 'react';

import { Avatar } from './Avatar';
import { Message, MessageProps } from './Message';

type ChatProps = {
  chatbotName: string;
  chatbotImage: string;
  initialMessages: string[];
};

export const Chat: React.FC<ChatProps> = ({
  chatbotName,
  chatbotImage,
  initialMessages,
}) => {
  const [inputText, setInputText] = useState('');
  const [messages, setMessages] = useState<MessageProps[]>([]);

  const sendMessage = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (inputText.trim() !== '') {
      setMessages([
        ...messages,
        { message: inputText, messageOwner: name, isReceived: false },
      ]);
      setInputText('');
    }
  };

  return (
    <div className="flex flex-col w-full max-w-sm border border-gray-200 rounded-lg overflow-hidden">
      <header className="flex items-center p-4 border-b">
        <div className="flex items-center space-x-4">
          <span className="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8">
            <Avatar image={chatbotImage} alt="logo" size="sm" />
          </span>

          <h1 className="text-xl font-bold">{chatbotName}</h1>
        </div>
      </header>

      <div className="flex flex-col p-4 gap-4 overflow-hidden">
        {/* Initial Messages */}
        <div className="flex flex-col gap-4">
          {initialMessages.map((message, index) => (
            <Message
              key={index}
              message={message}
              messageOwner="chatbot"
              isReceived={true}
            />
          ))}
        </div>

        {/* New Messages */}
        <div className="flex flex-col gap-4">
          {messages.map((message, index) => (
            <div key={index} className="flex items-center gap-4">
              <Avatar image={chatbotImage} alt="" />

              <Message
                key={index}
                message={message.message}
                messageOwner={message.messageOwner}
                isReceived={message.isReceived}
              />
            </div>
          ))}
        </div>

        <form
          className="flex items-center gap-4 border-t p-4"
          onSubmit={sendMessage}
        >
          <input
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 flex-1 min-w-0"
            placeholder="Digite sua mensagem aqui..."
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />

          <button
            className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-full w-10 h-10"
            type="submit"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4"
            >
              <path d="m22 2-7 20-4-9-9-4Z" />
              <path d="M22 2 11 13" />
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
};
