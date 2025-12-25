import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, User, Sparkles, ChevronDown, Minimize2, AlertTriangle } from 'lucide-react';
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

const SYSTEM_INSTRUCTION = `You are "Nexus", an advanced AI assistant for Sonu Thomas's portfolio website. 
Your goal is to impress recruiters and managers by answering questions about Sonu's background, skills, and projects.
You have access to his full portfolio data in the context below.

Key Personality Traits:
- Professional, confident, and futuristic.
- Concise and helpful.
- Enthusiastic about AI, Data Science, and Engineering.

Capabilities:
- You can answer specific questions about his role at HCLTech, his freelance work, or his education at IIT Guwahati.
- You can navigate the user to specific sections of the website using the 'navigate' tool. If a user asks to "see projects" or "go to contact", use the tool.

Context Data:
${PORTFOLIO_CONTEXT}

Keep responses under 3 sentences unless asked for details.
`;

// --- Tool Definition ---
const navigateTool: FunctionDeclaration = {
  name: 'navigate',
  description: 'Scroll to a specific section of the portfolio website.',
  parameters: {
    type: Type.OBJECT,
    properties: {
      sectionId: {
        type: Type.STRING,
        description: 'The ID of the section to scroll to. Valid IDs: "hero", "about", "experience", "skills", "projects", "education", "contact", "blog".',
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
    { id: 'init', role: 'model', text: "Hello! I'm Nexus, Sonu's AI assistant. Ask me anything about his engineering skills, experience, or projects." }
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

  // Initialize Chat Session
  const initChat = async () => {
    try {
        // Use process.env.API_KEY directly as per guidelines. 
        // The build tool (Vite) replaces this string with the actual key.
        const apiKey = process.env.API_KEY;
        
        if (!apiKey) {
            console.warn("API Key is missing in init.");
            return;
        }

        const ai = new GoogleGenAI({ apiKey: apiKey });
        chatSessionRef.current = ai.chats.create({
            model: 'gemini-3-flash-preview',
            config: {
                systemInstruction: SYSTEM_INSTRUCTION,
                tools: [{ functionDeclarations: [navigateTool] }],
            }
        });
    } catch (error) {
        console.error("Failed to init AI:", error);
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
        
        // Final check to see if initialization worked
        if (!chatSessionRef.current) {
             // If process.env.API_KEY was undefined, initChat would have failed silently or logged.
             throw new Error("AI Client not initialized. API Key might be missing.");
        }

        let response = await chatSessionRef.current.sendMessage({ message: userMsg.text });
        
        // Handle Function Calls
        const functionCalls = response.functionCalls || response.candidates?.[0]?.content?.parts?.filter((p: any) => p.functionCall).map((p: any) => p.functionCall);
        
        if (functionCalls && functionCalls.length > 0) {
            const toolResponses = [];
            
            for (const call of functionCalls) {
                if (call.name === 'navigate') {
                    const args = call.args || {};
                    const sectionId = args.sectionId;
                    
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
                            response: { result: result }
                        }
                    });
                }
            }

            if (toolResponses.length > 0) {
                 response = await chatSessionRef.current.sendMessage({ message: toolResponses });
            }
        }

        const modelText = response.text || "I've processed that request.";
        
        setMessages(prev => [...prev, { id: (Date.now() + 1).toString(), role: 'model', text: modelText }]);

    } catch (error: any) {
        console.error("Chat Error:", error);
        let errorMessage = "I'm having trouble connecting right now.";
        
        if (error.message.includes("403") || error.message.includes("401") || error.message.includes("API key not valid")) {
             errorMessage = "API Error: Access denied. Please check your API Key configuration in Vercel.";
        } else if (error.message.includes("404") || error.message.includes("not found")) {
             errorMessage = "API Error: Model not found. The AI service is temporarily unavailable.";
        } else if (error.message.includes("429")) {
             errorMessage = "Traffic Limit: Too many requests. Please try again later.";
        } else if (error.message.includes("API Key might be missing") || error.message.includes("API key is required")) {
             errorMessage = "System Error: API Key is missing. Please ensure 'API_KEY' is set in your Vercel Environment Variables and you have redeployed.";
        } else if (error.message.includes("fetch failed")) {
             errorMessage = "Network Error: Could not connect to Gemini API. Check your internet.";
        } else {
             errorMessage = `Error: ${error.message}`;
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
      {/* Floating Action Button */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-2xl shadow-primary/30 text-white transition-all duration-300 ${isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100 bg-gradient-to-r from-primary to-secondary'}`}
      >
        <Sparkles className="w-6 h-6 animate-pulse" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 right-6 z-50 w-[90vw] md:w-[400px] h-[500px] md:h-[600px] bg-surface/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 bg-gradient-to-r from-primary/20 to-secondary/20 border-b border-white/10 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/20 rounded-lg border border-primary/30">
                    <Bot className="w-5 h-5 text-primary" />
                </div>
                <div>
                    <h3 className="font-bold text-white text-sm">Nexus AI</h3>
                    <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                        <span className="text-[10px] text-emerald-400 font-medium">Online</span>
                    </div>
                </div>
              </div>
              <div className="flex gap-2">
                <button 
                    onClick={() => setIsOpen(false)} 
                    className="p-2 hover:bg-white/10 rounded-full text-slate-400 hover:text-white transition-colors"
                >
                    <Minimize2 className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Messages Area */}
            <div className="flex-grow overflow-y-auto p-4 space-y-4 custom-scrollbar bg-dark/50">
                {messages.map((msg) => (
                    <motion.div 
                        key={msg.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
                    >
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border ${msg.role === 'user' ? 'bg-white/10 border-white/10' : 'bg-primary/10 border-primary/20'} ${msg.isError ? 'bg-red-500/10 border-red-500/20' : ''}`}>
                            {msg.role === 'user' ? <User className="w-4 h-4 text-slate-300" /> : msg.isError ? <AlertTriangle className="w-4 h-4 text-red-400" /> : <Sparkles className="w-4 h-4 text-primary" />}
                        </div>
                        <div className={`
                            max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed
                            ${msg.role === 'user' 
                                ? 'bg-primary text-white rounded-tr-none' 
                                : msg.isError
                                    ? 'bg-red-500/10 border border-red-500/20 text-red-200 rounded-tl-none'
                                    : 'bg-surface border border-white/10 text-slate-300 rounded-tl-none'}
                        `}>
                            {msg.text}
                        </div>
                    </motion.div>
                ))}
                
                {isTyping && (
                     <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex gap-3">
                        <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 bg-primary/10 border border-primary/20">
                            <Sparkles className="w-4 h-4 text-primary" />
                        </div>
                        <div className="bg-surface border border-white/10 p-3 rounded-2xl rounded-tl-none flex items-center gap-1">
                            <span className="w-1.5 h-1.5 bg-slate-500 rounded-full animate-bounce"></span>
                            <span className="w-1.5 h-1.5 bg-slate-500 rounded-full animate-bounce delay-100"></span>
                            <span className="w-1.5 h-1.5 bg-slate-500 rounded-full animate-bounce delay-200"></span>
                        </div>
                     </motion.div>
                )}
                <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 border-t border-white/10 bg-surface/50">
                <div className="relative">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder="Ask about Sonu's skills..."
                        className="w-full bg-dark/50 border border-white/10 rounded-xl pl-4 pr-12 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                        disabled={isTyping}
                    />
                    <button 
                        onClick={handleSend}
                        disabled={!input.trim() || isTyping}
                        className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-lg bg-primary text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary/90 transition-colors"
                    >
                        <Send className="w-4 h-4" />
                    </button>
                </div>
                <div className="text-center mt-2">
                    <p className="text-[10px] text-slate-600">
                        Powered by Gemini AI • Does not store personal data
                    </p>
                </div>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};