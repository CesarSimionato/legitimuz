'use client';

import { useState } from 'react';
import { Chat } from './components/Chat';
import { ClientSelector } from './components/ClientSelector';

export default function Home() {
  // Initial data
  const chatbotName = 'Chatbot';
  const chatbotImage = '/logo.png';
  const initialMessages = [
    'Esse aqui é um exemplo de Chatbot, aqui onde você inciará o seu teste.',
    'Siga as instruções detalhadas no Notion oficial e boa sorte!',
  ];
  const clients = [
    "Harry Potter",
    "Draco malfoy",
    "Cedrico Diggory",
    "Luna Lovegood",
  ]

  const [selectedClient, setSelectedClient] = useState(clients[0])

  return (
    <div className='min-h-screen flex items-center justify-center'>
      <Chat
        chatbotName={chatbotName}
        chatbotImage={chatbotImage}
        initialMessages={initialMessages}
        selectedClient={clients[0]}
      />

      <ClientSelector clients={clients} selectedClient={selectedClient} />
    </div>
  );
}
