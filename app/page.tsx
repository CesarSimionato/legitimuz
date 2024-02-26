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
    "Draco Malfoy",
    "Cedrico Diggory",
    "Luna Lovegood",
  ]

  const [selectedClient, setSelectedClient] = useState(clients[0])

  const handleSelectClient = (client: string) => {
    setSelectedClient(client)
  }

  return (
    <div className='min-h-screen pt-4 flex flex-col items-center justify-between gap-4'>
      <Chat
        chatbotName={chatbotName}
        chatbotImage={chatbotImage}
        initialMessages={initialMessages}
        selectedClient={selectedClient}
      />

      <ClientSelector clients={clients} selectedClient={selectedClient} handleSelectClient={handleSelectClient} />
    </div>
  );
}
