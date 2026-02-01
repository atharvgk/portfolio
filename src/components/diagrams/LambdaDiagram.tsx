import { Code2, Zap, Cloud, ArrowRight } from "lucide-react";

export const LambdaDiagram = () => (
    <div className="flex items-center gap-3 md:gap-6 text-zinc-500">
        {/* Step 1: Code */}
        <div className="flex flex-col items-center gap-2 group/step">
            <div className="p-3 rounded-full bg-yellow-500/10 border border-yellow-500/20 group-hover/step:border-yellow-500/50 transition-colors">
                <Code2 size={20} className="text-yellow-400" />
            </div>
            <span className="text-[10px] font-mono tracking-tighter">Func</span>
        </div>

        {/* Flow Line */}
        <ArrowRight size={14} className="text-zinc-700 animate-pulse" />

        {/* Step 2: Execution/Zap */}
        <div className="flex flex-col items-center gap-2 group/step">
            <div className="p-3 rounded-full bg-orange-500/10 border border-orange-500/20 group-hover/step:border-orange-500/50 transition-colors">
                <Zap size={20} className="text-orange-400" />
            </div>
            <span className="text-[10px] font-mono tracking-tighter">Exec</span>
        </div>

        {/* Flow Line */}
        <ArrowRight size={14} className="text-zinc-700 animate-pulse delay-75" />

        {/* Step 3: Cloud Output */}
        <div className="flex flex-col items-center gap-2 group/step">
            <div className="p-3 rounded-full bg-blue-500/10 border border-blue-500/20 group-hover/step:border-blue-500/50 transition-colors">
                <Cloud size={20} className="text-blue-400" />
            </div>
            <span className="text-[10px] font-mono tracking-tighter">Result</span>
        </div>
    </div>
);
