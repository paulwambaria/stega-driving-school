"use client";

import { useState, useRef, useEffect, useCallback } from "react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const GREETING: Message = {
  role: "assistant",
  content:
    "Hi there! I'm the Stega Assistant. I can help you with questions about our driving courses, how to book, the NTSA licensing process, and anything else about Stega Driving School. What would you like to know?",
};

const QUICK_QUESTIONS = [
  "What courses do you offer?",
  "How long does it take to get a licence?",
  "How do I book a course?",
  "Do I need my own car?",
];

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([GREETING]);
  const [input, setInput] = useState("");
  const [streaming, setStreaming] = useState(false);
  const [unread, setUnread] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const abortRef = useRef<AbortController | null>(null);

  // Auto-open for first-time visitors
  useEffect(() => {
    const visited = localStorage.getItem("stega_visited");
    if (!visited) {
      localStorage.setItem("stega_visited", "1");
      const t = setTimeout(() => setOpen(true), 1800);
      return () => clearTimeout(t);
    }
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, streaming]);

  useEffect(() => {
    if (open) {
      setUnread(false);
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [open]);

  const send = useCallback(
    async (text: string) => {
      const trimmed = text.trim();
      if (!trimmed || streaming) return;

      const userMsg: Message = { role: "user", content: trimmed };
      const history = messages.filter((m) => m !== GREETING);
      const newHistory = [...history, userMsg];

      setMessages((prev) => [...prev, userMsg]);
      setInput("");
      setStreaming(true);

      const ctrl = new AbortController();
      abortRef.current = ctrl;

      try {
        const res = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ messages: newHistory }),
          signal: ctrl.signal,
        });

        if (!res.ok || !res.body) throw new Error("API error");

        // Add empty assistant placeholder
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: "" },
        ]);

        const reader = res.body.getReader();
        const decoder = new TextDecoder();
        let buffer = "";
        let assistantText = "";

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          buffer += decoder.decode(value, { stream: true });
          const lines = buffer.split("\n");
          buffer = lines.pop() ?? "";

          for (const line of lines) {
            if (!line.startsWith("data: ")) continue;
            const data = line.slice(6).trim();
            if (data === "[DONE]") break;
            try {
              const chunk = JSON.parse(data);
              const delta = chunk.choices?.[0]?.delta?.content ?? "";
              if (delta) {
                assistantText += delta;
                setMessages((prev) => [
                  ...prev.slice(0, -1),
                  { role: "assistant", content: assistantText },
                ]);
              }
            } catch {
              /* skip malformed chunk */
            }
          }
        }

        if (!open) setUnread(true);
      } catch (err: unknown) {
        if (err instanceof Error && err.name === "AbortError") return;
        setMessages((prev) => [
          ...prev.filter((m) => m.content !== ""),
          {
            role: "assistant",
            content:
              "Sorry, I'm having a connection issue. Please call us directly on **0722 213 810** and our team will assist you right away!",
          },
        ]);
      } finally {
        setStreaming(false);
        abortRef.current = null;
      }
    },
    [messages, streaming, open]
  );

  const handleKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send(input);
    }
  };

  const showQuickReplies =
    messages.length === 1 && messages[0] === GREETING;

  return (
    <>
      {/* ── CHAT WINDOW ─────────────────────────────── */}
      <div
        className={`fixed bottom-24 right-4 sm:right-6 z-50 transition-all duration-300 origin-bottom-right ${
          open
            ? "opacity-100 scale-100 pointer-events-auto"
            : "opacity-0 scale-95 pointer-events-none"
        }`}
        style={{ width: "min(calc(100vw - 2rem), 384px)" }}
      >
        <div className="bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-slate-100" style={{ height: "540px" }}>

          {/* Header */}
          <div className="bg-[#0F1C3F] px-4 py-3.5 flex items-center gap-3 flex-shrink-0">
            <div className="relative">
              <div className="w-10 h-10 bg-[#DC2626] rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12c0 1.54.36 2.98.97 4.29L1 23l6.71-1.97C9.02 21.64 10.46 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm-1 14H7v-2h4v2zm6 0h-4v-2h4v2zm0-4H7V9h10v2z" />
                </svg>
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-400 rounded-full border-2 border-[#0F1C3F]" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white font-bold text-sm leading-tight">Stega Assistant</p>
              <p className="text-green-400 text-xs font-medium">Online — AI powered</p>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="w-8 h-8 rounded-full hover:bg-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-colors flex-shrink-0"
              aria-label="Close chat"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4 bg-slate-50 scroll-smooth">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex items-end gap-2 ${msg.role === "user" ? "flex-row-reverse" : "flex-row"}`}
              >
                {msg.role === "assistant" && (
                  <div className="w-7 h-7 bg-[#DC2626] rounded-full flex items-center justify-center flex-shrink-0 mb-0.5">
                    <span className="text-white font-black text-[10px]">S</span>
                  </div>
                )}
                <div
                  className={`max-w-[78%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed whitespace-pre-wrap ${
                    msg.role === "user"
                      ? "bg-[#1D4DA1] text-white rounded-br-sm"
                      : "bg-white text-slate-700 border border-slate-100 shadow-sm rounded-bl-sm"
                  }`}
                >
                  {msg.content || (
                    <span className="flex gap-1 items-center py-0.5">
                      <span className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                      <span className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                      <span className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                    </span>
                  )}
                </div>
              </div>
            ))}

            {/* Typing indicator shown while fetching before first token */}
            {streaming && messages[messages.length - 1]?.role !== "assistant" && (
              <div className="flex items-end gap-2">
                <div className="w-7 h-7 bg-[#DC2626] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-black text-[10px]">S</span>
                </div>
                <div className="bg-white border border-slate-100 shadow-sm rounded-2xl rounded-bl-sm px-3.5 py-3">
                  <span className="flex gap-1 items-center">
                    <span className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                  </span>
                </div>
              </div>
            )}

            <div ref={bottomRef} />
          </div>

          {/* Quick reply chips */}
          {showQuickReplies && (
            <div className="px-4 py-2.5 bg-slate-50 border-t border-slate-100 flex flex-wrap gap-2 flex-shrink-0">
              {QUICK_QUESTIONS.map((q) => (
                <button
                  key={q}
                  onClick={() => send(q)}
                  className="text-xs bg-white border border-slate-200 hover:border-[#DC2626] hover:text-[#DC2626] text-slate-600 px-3 py-1.5 rounded-full transition-colors font-medium leading-tight"
                >
                  {q}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <div className="px-3 py-3 bg-white border-t border-slate-100 flex gap-2 flex-shrink-0">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKey}
              placeholder="Ask anything about Stega…"
              disabled={streaming}
              className="flex-1 min-w-0 bg-slate-50 border border-slate-200 focus:border-[#DC2626] rounded-xl px-4 py-2.5 text-sm text-slate-700 placeholder-slate-400 outline-none transition-colors disabled:opacity-50"
            />
            <button
              onClick={() => send(input)}
              disabled={!input.trim() || streaming}
              className="w-10 h-10 bg-[#DC2626] hover:bg-[#B91C1C] disabled:bg-slate-200 text-white rounded-xl flex items-center justify-center transition-colors flex-shrink-0"
              aria-label="Send"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                <path d="M22 2L11 13" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M22 2L15 22l-4-9-9-4 20-7z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          {/* Footer note */}
          <div className="bg-white px-4 pb-3 flex-shrink-0">
            <p className="text-slate-400 text-[11px] text-center">
              Powered by AI · Call <span className="font-bold text-[#DC2626]">0722 213 810</span> for urgent help
            </p>
          </div>
        </div>
      </div>

      {/* ── TOGGLE BUTTON ───────────────────────────── */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-5 right-4 sm:right-6 z-50 w-14 h-14 bg-[#DC2626] hover:bg-[#B91C1C] text-white rounded-full shadow-xl shadow-red-200/60 flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95"
        aria-label="Chat with Stega Assistant"
      >
        {/* Unread badge */}
        {unread && !open && (
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-amber-400 rounded-full border-2 border-white" />
        )}

        {/* Icon toggles */}
        <span className={`absolute transition-all duration-200 ${open ? "opacity-100 rotate-0" : "opacity-0 rotate-90"}`}>
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
            <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
          </svg>
        </span>
        <span className={`absolute transition-all duration-200 ${open ? "opacity-0 -rotate-90" : "opacity-100 rotate-0"}`}>
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12c0 1.54.36 2.98.97 4.29L1 23l6.71-1.97C9.02 21.64 10.46 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm-1 14H7v-2h4v2zm6 0h-4v-2h4v2zm0-4H7V9h10v2z" />
          </svg>
        </span>
      </button>
    </>
  );
}
