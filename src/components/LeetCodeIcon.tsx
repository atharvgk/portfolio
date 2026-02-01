import React from "react";
import Image from "next/image";

export const LeetCodeIcon = ({ size = 24, className = "" }: { size?: number; className?: string }) => {
    return (
        <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/leetcode/leetcode-line.svg"
            alt="LeetCode"
            width={size}
            height={size}
            className={className}
            unoptimized // Since it's an external CDN SVG
        />
    );
};
