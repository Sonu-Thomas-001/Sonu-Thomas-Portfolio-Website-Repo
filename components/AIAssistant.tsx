import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Bot, User, Sparkles, X, BrainCircuit, AlertTriangle } from 'lucide-react';
import { GoogleGenAI, Type, FunctionDeclaration } from "@google/genai";
import { PERSONAL_DETAILS, EXPERIENCE_DATA, SKILLS_DATA, PROJECTS_DATA, EDUCATION_DATA, BLOG_DATA } from '../constants';

// --- System Context Construction ---
const PORTFOLIO_CONTEXT = JSON.stringify({
  personal: PERSONAL_DETAILS,
  experience: EXPERIENCE_DATA,
  skills: SKILLS_DATA,
  projects: PROJECTS_DATA,
  education: EDUCATION_DATA,
  blog: BLOG_DATA
});

const SYSTEM_INSTRUCTION = `You are "Qubi", an advanced AI assistant for Sonu Thomas's portfolio website. 
Your goal is to impress recruiters and managers by answering questions about Sonu's background, skills, and projects.
You have access to his full portfolio data in the context below.

Key Personality Traits:
- Professional, confident, articulate, and futuristic.
- Concise and helpful.
- Enthusiastic about AI, Data Science, and Software Engineering.

Capabilities:
- You can answer specific questions about his role at HCLTech, freelance work, or education at IIT Guwahati.
- You can navigate the user to specific sections of the website using the 'navigate' tool. If a user asks to "see projects" or "go to contact", use the tool.

Context Data:
${PORTFOLIO_CONTEXT}

Keep responses under 3 sentences unless asked for details.
`;

const navigateTool: FunctionDeclaration = {
  name: 'navigate',
  description: 'Scroll to a specific section of the portfolio website.',
  parameters: {
    type: Type.OBJECT,
    properties: {
      sectionId: {
        type: Type.STRING,
        description: 'The ID of the section to scroll to. Valid IDs: "hero", "about", "experience", "skills", "projects", "education", "contact".',
      },
    },
    required: ['sectionId'],
  },
};

interface Message {
  id: string;
  role: 'user' | 'model';
  text: string;
  isThinking?: boolean;
  isError?: boolean;
}

export const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: 'init', role: 'model', text: "Hi! I'm Qubi, Sonu's AI assistant. Ask me anything about his AI engineering, enterprise experience at HCLTech, or projects." }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatSessionRef = useRef<any>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const initChat = async () => {
    try {
      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) return;

      const ai = new GoogleGenAI({ apiKey });
      chatSessionRef.current = ai.chats.create({
        model: 'gemini-2.5-flash',
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
          tools: [{ functionDeclarations: [navigateTool] }],
          thinkingConfig: { thinkingBudget: 0 }
        }
      });
    } catch (error) {
      console.error("Failed to initialize AI Chat:", error);
    }
  };

  useEffect(() => {
    if (isOpen && !chatSessionRef.current) {
      initChat();
    }
  }, [isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isTyping) return;

    const userMsg: Message = { id: Date.now().toString(), role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    try {
      if (!chatSessionRef.current) await initChat();
      
      if (!chatSessionRef.current) {
        throw new Error("API Key is not configured for local dev.");
      }

      let response = await chatSessionRef.current.sendMessage({ message: userMsg.text });
      const functionCalls = response.functionCalls || response.candidates?.[0]?.content?.parts?.filter((p: any) => p.functionCall).map((p: any) => p.functionCall);
      
      if (functionCalls && functionCalls.length > 0) {
        const toolResponses = [];
        for (const call of functionCalls) {
          if (call.name === 'navigate') {
            const sectionId = call.args?.sectionId;
            const element = document.getElementById(sectionId);
            let result = "Section not found";
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
              result = `Navigated to ${sectionId}`;
            }
            toolResponses.push({
              functionResponse: {
                name: 'navigate',
                id: call.id,
                response: { result }
              }
            });
          }
        }
        if (toolResponses.length > 0) {
          response = await chatSessionRef.current.sendMessage({ message: toolResponses });
        }
      }

      const modelText = response.text || "I've processed your inquiry.";
      setMessages(prev => [...prev, { id: (Date.now() + 1).toString(), role: 'model', text: modelText }]);
    } catch (error: any) {
      let errorMessage = "I'm having trouble connecting right now.";
      if (error.message?.includes("API Key is not configured")) {
        errorMessage = "Gemini API Key is not set up in the local environment.";
      }
      setMessages(prev => [...prev, { id: Date.now().toString(), role: 'model', text: errorMessage, isError: true }]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Floating Launcher Button */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 left-6 z-40 px-4 py-2.5 rounded-2xl bg-white border border-slate-200/90 text-slate-800 shadow-soft-lg hover:border-primary/40 flex items-center gap-2.5 cursor-pointer group transition-all duration-200 ${
          isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
        aria-label="Open AI Assistant"
      >
        <div className="w-7 h-7 rounded-xl bg-primary-50 text-primary flex items-center justify-center border border-primary/20 group-hover:scale-105 transition-transform">
          <BrainCircuit className="w-4 h-4" />
        </div>
        <div className="text-left">
          <span className="font-display font-bold text-xs text-slate-900 block group-hover:text-primary transition-colors">
            Ask Qubi
          </span>
          <span className="text-[10px] font-mono text-slate-400 block -mt-0.5">
            AI Assistant
          </span>
        </div>
      </motion.button>

      {/* Light Mode Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-6 left-6 z-50 w-[90vw] sm:w-[380px] h-[520px] bg-white/95 backdrop-blur-xl border border-slate-200/90 rounded-3xl shadow-soft-lg flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 bg-slate-50 border-b border-slate-100 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-primary-50 border border-primary/20 flex items-center justify-center text-primary">
                  <BrainCircuit className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-slate-900 text-sm">Qubi AI Assistant</h3>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[10px] font-mono text-emerald-700 font-semibold">Online & Context-Aware</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)} 
                className="p-1.5 rounded-xl hover:bg-slate-200/60 text-slate-400 hover:text-slate-700 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Messages Container */}
            <div className="flex-grow overflow-y-auto p-4 space-y-3.5 bg-slate-50/50">
              {messages.map((msg) => (
                <div 
                  key={msg.id}
                  className={`flex gap-2.5 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
                >
                  <div className={`w-7 h-7 rounded-xl flex items-center justify-center shrink-0 text-xs ${
                    msg.role === 'user' 
                      ? 'bg-slate-200 text-slate-700' 
                      : msg.isError 
                        ? 'bg-red-50 text-red-600 border border-red-200' 
                        : 'bg-primary-50 text-primary border border-primary/20'
                  }`}>
                    {msg.role === 'user' ? <User className="w-3.5 h-3.5" /> : msg.isError ? <AlertTriangle className="w-3.5 h-3.5" /> : <Sparkles className="w-3.5 h-3.5" />}
                  </div>
                  <div className={`
                    max-w-[80%] p-3.5 rounded-2xl text-xs leading-relaxed
                    ${msg.role === 'user' 
                      ? 'bg-primary text-white rounded-tr-sm shadow-soft-sm' 
                      : msg.isError
                        ? 'bg-red-50 border border-red-200 text-red-700 rounded-tl-sm'
                        : 'bg-white border border-slate-200/80 text-slate-700 rounded-tl-sm shadow-soft-sm'}
                  `}>
                    {msg.text}
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex gap-2.5">
                  <div className="w-7 h-7 rounded-xl bg-primary-50 border border-primary/20 flex items-center justify-center text-primary">
                    <Sparkles className="w-3.5 h-3.5" />
                  </div>
                  <div className="bg-white border border-slate-200/80 p-3 rounded-2xl rounded-tl-sm flex items-center gap-1 shadow-soft-sm">
                    <span className="w-1.5 h-1.5 bg-primary/60 rounded-full animate-bounce" />
                    <span className="w-1.5 h-1.5 bg-primary/60 rounded-full animate-bounce delay-100" />
                    <span className="w-1.5 h-1.5 bg-primary/60 rounded-full animate-bounce delay-200" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Footer */}
            <div className="p-3.5 border-t border-slate-100 bg-white">
              <div className="relative">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask about AI engineering, HCLTech..."
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-3.5 pr-10 py-2.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-primary focus:bg-white transition-all"
                  disabled={isTyping}
                />
                <button 
                  onClick={handleSend}
                  disabled={!input.trim() || isTyping}
                  className="absolute right-1.5 top-1/2 -translate-y-1/2 p-1.5 rounded-lg bg-primary text-white disabled:opacity-40 hover:bg-primary-600 transition-colors"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};