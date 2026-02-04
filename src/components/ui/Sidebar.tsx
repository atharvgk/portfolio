"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { User, Briefcase, FileText, Code, Layers, Github, Mail } from "lucide-react";

const sections = [
    { id: "about", label: "About", icon: User },
    { id: "experience", label: "Experience", icon: Briefcase },
    { id: "publications", label: "Research", icon: FileText },
    { id: "projects", label: "Projects", icon: Code },
    { id: "stack", label: "Tech Stack", icon: Layers },
    { id: "github", label: "Activity", icon: Github },
    { id: "contact", label: "Contact", icon: Mail },
];

export const Sidebar = () => {
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                rootMargin: "-20% 0px -60% 0px" // Trigger when section is near top/middle
            }
        );

        sections.forEach(({ id }) => {
            const element = document.getElementById(id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <motion.aside
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="fixed left-8 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col gap-4"
        >
            {sections.map(({ id, label, icon: Icon }) => (
                <a
                    key={id}
                    href={`#${id}`}
                    onClick={(e) => {
                        e.preventDefault();
                        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="group flex items-center gap-3 relative"
                >
                    {/* Active Indicator Line/Dot */}
                    <div className="relative flex items-center justify-center w-8 h-8">
                         {activeSection === id && (
                             <motion.div
                                 layoutId="activeSection"
                                 className="absolute inset-0 bg-blue-500/10 dark:bg-purple-500/10 rounded-full"
                                 initial={{ opacity: 0, scale: 0.8 }}
                                 animate={{ opacity: 1, scale: 1 }}
                                 exit={{ opacity: 0, scale: 0.8 }}
                             />
                         )}
                        <Icon 
                            size={18} 
                            className={`transition-colors duration-300 ${
                                activeSection === id 
                                ? "text-blue-600 dark:text-purple-400" 
                                : "text-neutral-400 dark:text-neutral-600 group-hover:text-black dark:group-hover:text-white"
                            }`} 
                        />
                    </div>

                    {/* Label (Slide out on hover or active) */}
                    <span 
                        className={`text-sm font-medium transition-all duration-300 ${
                            activeSection === id
                            ? "text-black dark:text-white translate-x-0 opacity-100"
                            : "text-neutral-500 dark:text-neutral-500 -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                        }`}
                    >
                        {label}
                    </span>
                </a>
            ))}
        </motion.aside>
    );
};
