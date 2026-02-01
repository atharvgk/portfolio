import { cn } from "@/lib/utils";

export const Logo = ({ className }: { className?: string }) => {
    return (
        <div className={cn("relative flex items-center justify-center aspect-square", className)}>
            <svg
                viewBox="0 0 100 100"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full text-black dark:text-white"
                aria-label="Atharv Katyarmal Logo"
            >
                {/* Left Leg (Slanted /) */}
                <path
                    d="M10 90 L35 90 L55 10 L30 10 Z"
                    className="origin-center transition-all duration-500 ease-out group-hover:-translate-x-1 group-hover:fill-neutral-800 dark:group-hover:fill-neutral-200"
                />

                {/* Right Leg (Slanted \) */}
                <path
                    d="M65 90 L90 90 L70 10 L45 10 Z"
                    className="origin-center transition-all duration-500 ease-out group-hover:translate-x-1 group-hover:fill-neutral-600 dark:group-hover:fill-neutral-400"
                />

                {/* Crossbar (Horizontal -) */}
                <path
                    d="M33 55 L67 55 L70 40 L30 40 Z"
                    className="transition-all duration-500 ease-out group-hover:scale-x-110 group-hover:fill-accent-500 dark:group-hover:fill-accent-400"
                />
            </svg>
        </div>
    );
};
