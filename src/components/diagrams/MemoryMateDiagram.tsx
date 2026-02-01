import { Brain, Heart, Puzzle, ArrowRight } from "lucide-react";

export const MemoryMateDiagram = () => (
    <div className="flex items-center gap-3 md:gap-6 text-zinc-500">
        {/* Step 1: Brain/Memory */}
        <div className="flex flex-col items-center gap-2 group/step">
            <div className="p-3 rounded-full bg-emerald-500/10 border border-emerald-500/20 group-hover/step:border-emerald-500/50 transition-colors">
                <Brain size={20} className="text-emerald-400" />
            </div>
            <span className="text-[10px] font-mono tracking-tighter">Memory</span>
        </div>

        {/* Flow Line */}
        <ArrowRight size={14} className="text-zinc-700 animate-pulse" />

        {/* Step 2: Exercises/Puzzle */}
        <div className="flex flex-col items-center gap-2 group/step">
            <div className="p-3 rounded-full bg-teal-500/10 border border-teal-500/20 group-hover/step:border-teal-500/50 transition-colors">
                <Puzzle size={20} className="text-teal-400" />
            </div>
            <span className="text-[10px] font-mono tracking-tighter">Games</span>
        </div>

        {/* Flow Line */}
        <ArrowRight size={14} className="text-zinc-700 animate-pulse delay-75" />

        {/* Step 3: Heart/Connection */}
        <div className="flex flex-col items-center gap-2 group/step">
            <div className="p-3 rounded-full bg-rose-500/10 border border-rose-500/20 group-hover/step:border-rose-500/50 transition-colors">
                <Heart size={20} className="text-rose-400" />
            </div>
            <span className="text-[10px] font-mono tracking-tighter">Care</span>
        </div>
    </div>
);
