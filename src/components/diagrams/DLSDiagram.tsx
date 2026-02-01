import { Server, Database, Activity, ArrowRight } from "lucide-react";

export const DLSDiagram = () => (
    <div className="flex items-center gap-3 md:gap-6 text-zinc-500">
        {/* Step 1: Log Source */}
        <div className="flex flex-col items-center gap-2 group/step">
            <div className="p-3 rounded-full bg-blue-500/10 border border-blue-500/20 group-hover/step:border-blue-500/50 transition-colors">
                <Activity size={20} className="text-blue-400" />
            </div>
            <span className="text-[10px] font-mono tracking-tighter">Logs</span>
        </div>

        {/* Flow Line */}
        <ArrowRight size={14} className="text-zinc-700 animate-pulse" />

        {/* Step 2: Kafka/Queue */}
        <div className="flex flex-col items-center gap-2 group/step">
            <div className="p-3 rounded-full bg-orange-500/10 border border-orange-500/20 group-hover/step:border-orange-500/50 transition-colors">
                <Server size={20} className="text-orange-400" />
            </div>
            <span className="text-[10px] font-mono tracking-tighter">Kafka</span>
        </div>

        {/* Flow Line */}
        <ArrowRight size={14} className="text-zinc-700 animate-pulse delay-75" />

        {/* Step 3: ElasticDB */}
        <div className="flex flex-col items-center gap-2 group/step">
            <div className="p-3 rounded-full bg-green-500/10 border border-green-500/20 group-hover/step:border-green-500/50 transition-colors">
                <Database size={20} className="text-green-400" />
            </div>
            <span className="text-[10px] font-mono tracking-tighter">Elastic</span>
        </div>
    </div>
);
