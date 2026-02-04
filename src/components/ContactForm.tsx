"use client";

import { useState } from "react";
import { Send, Loader2, Mail, User, MessageSquare } from "lucide-react";
import { SpotlightCard } from "./ui/SpotlightCard";

export const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        // Basic validation
        if (!formData.name || !formData.email || !formData.message) return;

        setStatus("submitting");

        // Use Web3Forms
        const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

        if (!WEB3FORMS_KEY) {
            console.error("Web3Forms Access Key is missing in .env.local");
            // Simulate success for demo purposes if no ID is set
            setTimeout(() => setStatus("error"), 1000);
            return;
        }

        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    access_key: WEB3FORMS_KEY,
                    ...formData,
                }),
            });

            if (res.ok) {
                setStatus("success");
                setFormData({ name: "", email: "", message: "" });
            } else {
                setStatus("error");
            }
        } catch (error) {
            console.error("Form error:", error);
            setStatus("error");
        }
    };

    return (
        <section id="contact" className="mb-10 max-w-2xl mx-auto">
            <h2 className="text-xl font-bold text-black dark:text-white mb-6 text-center">Get in Touch</h2>
            <SpotlightCard className="p-6 md:p-8">
                {status === "success" ? (
                    <div className="flex flex-col items-center justify-center py-10 text-center animate-in fade-in zoom-in duration-500">
                        <div className="w-16 h-16 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mb-4">
                            <Send size={32} />
                        </div>
                        <h3 className="text-xl font-bold text-black dark:text-white mb-2">Message Sent!</h3>
                        <p className="text-neutral-600 dark:text-neutral-400">
                            Thanks for reaching out! I'll get back to you as soon as possible.
                        </p>
                        <button 
                            onClick={() => setStatus("idle")}
                            className="mt-6 text-sm text-accent-500 hover:text-accent-600 font-medium"
                        >
                            Send another message
                        </button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Name Input */}
                            <div className="relative group">
                                <div className="absolute left-3 top-3 text-neutral-400 group-focus-within:text-accent-500 transition-colors">
                                    <User size={18} />
                                </div>
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-xl pl-10 pr-4 py-2.5 outline-none focus:border-accent-500/50 focus:ring-2 focus:ring-accent-500/10 transition-all placeholder:text-neutral-400 text-neutral-800 dark:text-neutral-200 text-sm"
                                    required
                                />
                            </div>

                            {/* Email Input */}
                            <div className="relative group">
                                <div className="absolute left-3 top-3 text-neutral-400 group-focus-within:text-accent-500 transition-colors">
                                    <Mail size={18} />
                                </div>
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-xl pl-10 pr-4 py-2.5 outline-none focus:border-accent-500/50 focus:ring-2 focus:ring-accent-500/10 transition-all placeholder:text-neutral-400 text-neutral-800 dark:text-neutral-200 text-sm"
                                    required
                                />
                            </div>
                        </div>

                        {/* Message Input */}
                        <div className="relative group">
                            <div className="absolute left-3 top-3 text-neutral-400 group-focus-within:text-accent-500 transition-colors">
                                <MessageSquare size={18} />
                            </div>
                            <textarea
                                placeholder="What's on your mind?"
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                rows={4}
                                className="w-full bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-xl pl-10 pr-4 py-3 outline-none focus:border-accent-500/50 focus:ring-2 focus:ring-accent-500/10 transition-all placeholder:text-neutral-400 text-neutral-800 dark:text-neutral-200 text-sm resize-none"
                                required
                            />
                        </div>

                        {/* Submit Button */}
                        <div className="flex items-center justify-between pt-2">
                             {status === "error" && (
                                <p className="text-red-500 text-xs">
                                    Something went wrong. Please try again or email directly.
                                </p>
                             )}
                            <button
                                type="submit"
                                disabled={status === "submitting"}
                                className="ml-auto flex items-center gap-2 bg-neutral-900 dark:bg-white text-white dark:text-black px-6 py-2.5 rounded-xl font-medium text-sm hover:opacity-90 active:scale-95 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {status === "submitting" ? (
                                    <>
                                        <Loader2 size={16} className="animate-spin" />
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        Send Message
                                        <Send size={16} />
                                    </>
                                )}
                            </button>
                        </div>
                    </form>
                )}
            </SpotlightCard>
        </section>
    );
};
