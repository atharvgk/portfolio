import React, { useEffect, useState, useLayoutEffect } from "react";
import { motion } from "framer-motion";
import { Logo } from "./ui/Logo";

// Use useLayoutEffect on client, useEffect on server
const useIsomorphicLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

export const Preloader = ({ onComplete }: { onComplete: () => void }) => {
    const [isDark, setIsDark] = useState<boolean | null>(null);

    // Detect and apply theme immediately on client mount
    useIsomorphicLayoutEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const shouldBeDark = savedTheme === 'dark' || (!savedTheme && prefersDark);

        setIsDark(shouldBeDark);

        if (shouldBeDark) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, []);

    // Simple timer to complete after animation
    useEffect(() => {
        if (isDark === null) return;

        const timer = setTimeout(() => {
            onComplete();
        }, 2000);

        return () => clearTimeout(timer);
    }, [isDark, onComplete]);

    if (isDark === null) {
        return null;
    }

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className={`fixed inset-0 z-100 flex flex-col justify-center items-center gap-5 ${isDark ? "bg-zinc-950" : "bg-white"}`}
        >
            {/* Logo mark */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className={`w-10 h-10 ${isDark ? "text-white" : "text-black"}`}
            >
                <Logo className="w-full h-full" />
            </motion.div>

            {/* Loading bar */}
            <div className={`relative w-24 h-px overflow-hidden rounded-full ${isDark ? "bg-zinc-800" : "bg-zinc-200"}`}>
                <motion.div
                    className={`absolute inset-y-0 left-0 rounded-full ${isDark ? "bg-zinc-400" : "bg-zinc-600"}`}
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1.6, ease: "easeInOut" }}
                />
            </div>
        </motion.div>
    );
};
