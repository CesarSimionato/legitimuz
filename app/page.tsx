'use client';

import { Chat } from './components/Chat';

export default function Home() {
  // Initial data
  const chatbotName = 'Chatbot';
  const chatbotImage = '/logo.png';
  const initialMessages = [
    'Esse aqui é um exemplo de Chatbot, aqui onde você inciará o seu teste.',
    'Siga as instruções detalhadas no Notion oficial e boa sorte!',
  ];
  const clients = [
    {
      userName: 'Harry Potter',
      avatar: '',
    },
    {
      userName: 'Draco Malfoy',
      avatar: '',
    },
    {
      userName: 'Rony Weasley',
      avatar: '',
    },
  ];

  return (
    <Chat
      chatbotName={chatbotName}
      chatbotImage={chatbotImage}
      initialMessages={initialMessages}
    />
  );
}
