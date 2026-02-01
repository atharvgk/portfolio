"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Home, Github, FileText, Mail } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const items = [
    {
        icon: Home,
        label: "Top",
        onClick: () => window.scrollTo({ top: 0, behavior: 'smooth' })
    },
    {
        icon: Github,
        label: "GitHub",
        href: "https://github.com/atharvgk",
        external: true
    },
    {
        icon: FileText,
        label: "Resume",
        href: "/atharv_resume.pdf",
        external: true
    },
    {
        icon: Mail,
        label: "Email",
        href: "mailto:atharv.katyarmal@gmail.com",
        external: true
    },
];

export const FloatingDock = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;

            // Show after scrolling past header (approx 100px)
            const isPastHeader = currentScrollY > 100;
            
            // Hide if near bottom/footer (within 100px of end)
            const isNearBottom = (windowHeight + currentScrollY) >= (documentHeight - 100);

            setVisible(isPastHeader && !isNearBottom);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll(); // Check on mount
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.nav
            className="fixed bottom-6 left-1/2 z-50"
            initial={{ y: 100, x: "-50%", opacity: 0 }}
            animate={{
                y: visible ? 0 : 80,
                x: "-50%",
                opacity: visible ? 1 : 0
            }}
            transition={{ duration: 0.2, ease: "easeOut" }}
        >
            <div className="flex items-center gap-1 px-2 py-2 rounded-2xl bg-white/50 dark:bg-zinc-950/30 backdrop-blur-xl border border-zinc-200 dark:border-zinc-800/50 shadow-lg shadow-black/5 dark:shadow-black/20">
                <TooltipProvider delayDuration={0}>
                    {items.map((item, i) => {
                        const Icon = item.icon;

                        const content = (
                            <motion.div
                                className="p-2.5 rounded-xl text-neutral-600 dark:text-zinc-500 hover:text-black dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800/50 transition-all cursor-pointer"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Icon size={18} strokeWidth={1.5} />
                            </motion.div>
                        );

                        const trigger = item.href ? (
                            <a
                                href={item.href}
                                target={item.external ? "_blank" : undefined}
                                rel={item.external ? "noopener noreferrer" : undefined}
                            >
                                {content}
                            </a>
                        ) : (
                            <button onClick={item.onClick}>
                                {content}
                            </button>
                        );

                        return (
                            <Tooltip key={i}>
                                <TooltipTrigger asChild>
                                    {trigger}
                                </TooltipTrigger>
                                <TooltipContent className="text-xs font-medium">
                                    {item.label}
                                </TooltipContent>
                            </Tooltip>
                        );
                    })}
                </TooltipProvider>
            </div>
        </motion.nav>
    );
};
