/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Cpu, 
  Layers, 
  Zap, 
  Maximize2, 
  MousePointer2, 
  ChevronRight,
  Database,
  Terminal,
  Activity
} from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-accent selection:text-black overflow-x-hidden relative">
      {/* Video Background Section */}
      <div className="relative w-full h-[40vh] md:absolute md:inset-0 md:h-full z-0 overflow-hidden pointer-events-none">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          poster="https://picsum.photos/seed/tech-bg/1920/1080?blur=10"
          className="w-full h-full object-cover opacity-80 md:opacity-50"
        >
          <source src="/input_file_0.mp4" type="video/mp4" />
          <source src="https://assets.mixkit.co/videos/preview/mixkit-abstract-technology-network-connections-background-326-large.mp4" type="video/mp4" />
          <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
        </video>
        {/* Subtle overlays to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050505] md:bg-black/40" />
      </div>
      
      <main className="max-w-7xl mx-auto px-6 md:px-8 pt-10 md:pt-20 pb-12 min-h-[60vh] md:min-h-screen flex flex-col justify-between relative z-10">
        
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 md:gap-0">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tighter leading-[0.85] mb-8 uppercase">
              MUHAMMED <span className="text-accent">//</span><br />
              NEURAL<br />
              INTERFACE
            </h1>
            
            <p className="text-base md:text-lg text-white/60 max-w-md leading-relaxed mb-10">
              Architecting neural networks and scalable AI systems for those who don't just use technology—they build it. Evolving intelligence.
            </p>
            
            <div className="flex gap-4">
              {[Cpu, Maximize2, Zap].map((Icon, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.1, borderColor: "rgba(255,107,0,0.5)" }}
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 flex items-center justify-center cursor-pointer transition-colors"
                >
                  <Icon size={18} className="text-white/80" />
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-6 md:gap-8 pt-0 md:pt-4 self-end md:self-start"
          >
            <div className="flex items-center gap-3 md:gap-4">
              <span className="font-mono text-xs md:text-sm text-white/40">1/28</span>
              <div className="w-20 md:w-32 h-[1px] bg-white/20 relative">
                <div className="absolute top-0 left-0 w-1/4 h-full bg-white/60" />
              </div>
            </div>
            <button className="font-mono text-[10px] md:text-xs uppercase tracking-widest text-white/60 hover:text-white transition-colors flex items-center gap-2 group">
              Next Project
              <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>

        {/* Middle Section - Technical Specs */}
        <div className="flex justify-start md:justify-end mt-12 md:mt-[-10%]">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full max-w-sm"
          >
            <h3 className="font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] text-accent mb-6 font-bold">Technical Specs</h3>
            
            <div className="space-y-4 font-mono">
              {[
                { label: "Models", value: "Transformer / Diffusion" },
                { label: "Compute", value: "H100 Cluster / CUDA" },
                { label: "Latency", value: "Sub-50ms Inference" },
                { label: "Stack", value: "PyTorch / JAX / Triton" },
              ].map((spec, i) => (
                <div key={i} className="flex justify-between items-end border-b border-white/10 pb-2 group cursor-default">
                  <span className="text-xs md:text-sm text-accent group-hover:text-white transition-colors">{spec.label}</span>
                  <span className="text-xs md:text-sm text-white/90">{spec.value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 md:gap-0 mt-12 md:mt-0">
          {/* Project Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="group relative w-full md:w-auto"
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-[1.5rem] md:rounded-[2rem] p-4 md:p-6 flex flex-row gap-4 md:gap-6 items-center max-w-md hover:bg-white/10 transition-all duration-500">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-xl md:rounded-2xl overflow-hidden relative bg-black shrink-0">
                <img 
                  src="https://picsum.photos/seed/ai-core/400/400" 
                  alt="Neural Core" 
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              
              <div className="flex-1">
                <h4 className="font-mono text-xs md:text-sm text-accent mb-1 font-bold">AI-01: VISION CORE</h4>
                <p className="text-[10px] md:text-xs text-white/50 mb-3 md:mb-4 leading-relaxed line-clamp-2 md:line-clamp-none">
                  Deep learning models and a robust infra for speed and accuracy.
                </p>
                <button className="px-3 py-1.5 md:px-4 md:py-2 border border-white/20 rounded-full text-[9px] md:text-[10px] uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300">
                  View Project
                </button>
              </div>
            </div>
          </motion.div>

          {/* Mouse Indicator (Visual only) */}
          <div className="hidden lg:block mr-20 mb-20">
            <MousePointer2 className="text-white/40 rotate-[-15deg]" size={32} />
          </div>
        </div>

        {/* Footer Status Bar */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-0"
        >
          <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center shrink-0">
            <Layers size={16} className="text-white/60" />
          </div>
          
          <div className="flex flex-wrap justify-center gap-2">
            {[
              { label: "8K RAW", active: false },
              { label: "A+", active: false },
              { label: "ULTRA-WIDE", active: false },
              { label: "NEURAL-SYNC", active: true },
            ].map((tag, i) => (
              <div 
                key={i}
                className={`px-3 md:px-4 py-1.5 md:py-2 rounded-full border text-[9px] md:text-[10px] font-mono tracking-widest transition-all cursor-default
                  ${tag.active 
                    ? "bg-white/10 border-white/30 text-white" 
                    : "border-white/10 text-white/40 hover:border-white/20"
                  }`}
              >
                {tag.label}
              </div>
            ))}
          </div>
        </motion.div>
      </main>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-accent/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-accent/5 blur-[100px] rounded-full" />
      </div>
    </div>
  );
}
