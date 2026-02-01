import { GraduationCap, Users, Share2, ArrowRight } from "lucide-react";

export const GradopiaDiagram = () => (
    <div className="flex items-center gap-3 md:gap-6 text-zinc-500">
        {/* Step 1: User/Student */}
        <div className="flex flex-col items-center gap-2 group/step">
            <div className="p-3 rounded-full bg-purple-500/10 border border-purple-500/20 group-hover/step:border-purple-500/50 transition-colors">
                <Users size={20} className="text-purple-400" />
            </div>
            <span className="text-[10px] font-mono tracking-tighter">Peers</span>
        </div>

        {/* Flow Line */}
        <ArrowRight size={14} className="text-zinc-700 animate-pulse" />

        {/* Step 2: Connection */}
        <div className="flex flex-col items-center gap-2 group/step">
            <div className="p-3 rounded-full bg-pink-500/10 border border-pink-500/20 group-hover/step:border-pink-500/50 transition-colors">
                <Share2 size={20} className="text-pink-400" />
            </div>
            <span className="text-[10px] font-mono tracking-tighter">Connect</span>
        </div>

        {/* Flow Line */}
        <ArrowRight size={14} className="text-zinc-700 animate-pulse delay-75" />

        {/* Step 3: Alumni/Growth */}
        <div className="flex flex-col items-center gap-2 group/step">
            <div className="p-3 rounded-full bg-indigo-500/10 border border-indigo-500/20 group-hover/step:border-indigo-500/50 transition-colors">
                <GraduationCap size={20} className="text-indigo-400" />
            </div>
            <span className="text-[10px] font-mono tracking-tighter">Alumni</span>
        </div>
    </div>
);
