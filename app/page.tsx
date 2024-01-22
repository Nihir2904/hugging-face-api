'use client';

import { useChat } from 'ai/react';

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <div style={{backgroundImage: "url('https://unsplash.com/photos/a-black-and-white-photo-of-sand-and-water-JZgyf8bPdbY')", height: "100vh"}}>
    <div className="flex flex-col w-full max-w-md py-24 mx-auto stretch bg-cover bg-center">
    <h1 className="text-4x1 front-bold text-center">FloyDroid</h1>
      {messages.map(m => (
        <div key={m.id} className="whitespace-pre-wrap">
          {m.role === 'user' ? 'User: ' : 'AI: '}
          {m.content}
        </div>
      ))}

      <form onSubmit={handleSubmit}>
        <input
          className="fixed bottom-0 w-full max-w-md p-2 mb-8 border border-gray-300 rounded shadow-xl"
          value={input}
          placeholder="Say something..."
          onChange={handleInputChange}
        />
      </form>
    </div>
    </div>
  );
}
