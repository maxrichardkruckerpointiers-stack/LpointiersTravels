import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot } from 'lucide-react';
import { sendMessageToGemini } from '../services/geminiService';
import { ChatMessage } from '../types';

const AiChatAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Hola! I\'m Carly, your local guide. Ask me anything about tours in Cartagena!' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    const responseText = await sendMessageToGemini(userMsg, messages);
    
    setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    setIsLoading(false);
  };

  return (
    <>
      {/* Floating Button */}
      <button 
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 bg-orange-500 text-white p-4 rounded-full shadow-2xl hover:bg-orange-600 transition-transform hover:scale-110 ${isOpen ? 'hidden' : 'flex'}`}
      >
        <MessageCircle size={28} />
      </button>

      {/* Chat Window */}
      <div className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 w-[90vw] sm:w-96 bg-white rounded-2xl shadow-2xl z-50 flex flex-col transition-all duration-300 origin-bottom-right ${isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'}`} style={{ maxHeight: '600px', height: '80vh' }}>
        
        {/* Header */}
        <div className="bg-emerald-900 text-white p-4 rounded-t-2xl flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-white/20 p-2 rounded-full">
              <Bot size={20} />
            </div>
            <div>
              <h3 className="font-bold">Carly - AI Guide</h3>
              <p className="text-xs text-emerald-200">Usually replies instantly</p>
            </div>
          </div>
          <button onClick={() => setIsOpen(false)} className="hover:text-orange-400">
            <X size={20} />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-grow overflow-y-auto p-4 space-y-4 bg-gray-50">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[80%] px-4 py-2 rounded-2xl text-sm ${
                msg.role === 'user' 
                  ? 'bg-orange-500 text-white rounded-br-none' 
                  : 'bg-white text-gray-800 border border-gray-200 rounded-bl-none shadow-sm'
              }`}>
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-white px-4 py-3 rounded-2xl rounded-bl-none border border-gray-200 shadow-sm flex gap-1">
                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-75"></span>
                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-150"></span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <form onSubmit={handleSend} className="p-3 border-t border-gray-100 bg-white rounded-b-2xl">
          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about tours, weather..."
              className="flex-grow px-4 py-2 bg-gray-100 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <button 
              type="submit" 
              disabled={isLoading}
              className="p-2 bg-emerald-900 text-white rounded-full hover:bg-emerald-800 disabled:opacity-50"
            >
              <Send size={18} />
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AiChatAssistant;