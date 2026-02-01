import { motion } from "framer-motion";

export const VoiceAgentDiagram = () => {
    return (
        <div className="w-full h-full flex items-center justify-center relative bg-gradient-to-br from-blue-500/5 to-purple-500/5">
            {/* Center Microphone */}
            <motion.div
                className="relative z-10 w-16 h-16 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 flex items-center justify-center shadow-lg shadow-blue-500/20"
                whileHover={{ scale: 1.1 }}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <div className="w-8 h-12 border-2 border-white rounded-full relative flex items-center justify-center">
                    <div className="w-4 h-8 bg-white/20 rounded-full" />
                </div>
                <div className="absolute w-12 h-6 border-b-2 border-white rounded-b-full bottom-4" />
                <div className="absolute w-0.5 h-4 bg-white bottom-0 translate-y-full" />
                <div className="absolute w-6 h-0.5 bg-white bottom-0 translate-y-[20px]" />
            </motion.div>

            {/* Sound Waves */}
            {[1, 2, 3].map((i) => (
                <motion.div
                    key={i}
                    className="absolute z-0 rounded-full border border-blue-500/30"
                    style={{ width: 16 + i * 20 + 'px', height: 16 + i * 20 + 'px' }}
                    initial={{ scale: 1, opacity: 1 }}
                    animate={{
                        scale: [1, 2],
                        opacity: [0.5, 0],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.4,
                        ease: "easeOut",
                    }}
                />
            ))}

            {/* Floating Elements (Weather, DB, Restaurant) */}
            <motion.div
                className="absolute top-4 right-4 text-xs font-mono text-blue-400 bg-blue-500/10 px-2 py-1 rounded"
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
            >
                Weather API
            </motion.div>

            <motion.div
                className="absolute bottom-4 left-4 text-xs font-mono text-purple-400 bg-purple-500/10 px-2 py-1 rounded"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
            >
                Reservation DB
            </motion.div>
        </div>
    );
};
