import React from 'react';
import { motion } from 'motion/react';

const AppPreviewSlider = () => {
  const images = [
    "/unnamed (1).webp",
    "/unnamed (2).webp",
    "/unnamed (3).webp",
    "/unnamed (4).webp",
    "/unnamed (5).webp",
    "/unnamed (6).webp",
  ];
  
  const duplicatedImages = [...images, ...images];

  return (
    <section className="py-32 md:py-56 bg-slate-50 overflow-hidden relative z-20">
      {/* Decorative Layering */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-secondary/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-6 mb-24 text-center relative z-10">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-brand-secondary font-black uppercase tracking-[0.4em] text-[10px] mb-6 inline-block bg-brand-secondary/10 px-6 py-2 rounded-full"
        >
          User Experience
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl font-display font-black text-brand-dark mb-10 tracking-tight leading-[1.1]"
        >
          Tampilan Aplikasi yang <span className="text-brand-secondary">Simpel & Intuitif.</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-slate-500 text-xl md:text-2xl max-w-3xl mx-auto font-medium leading-relaxed"
        >
          Didesain khusus untuk kecepatan dan kenyamanan. Tidak perlu tutorial panjang, langsung bisa pakai sejak detik pertama.
        </motion.p>
      </div>
      
      <div className="relative flex items-center group">
        <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
        
        <motion.div 
          className="flex gap-12 px-6"
          animate={{ x: [0, "-50%"] }}
          transition={{
            duration: 60,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{ width: "max-content" }}
        >
          {duplicatedImages.map((src, i) => (
            <div key={i} className="w-[280px] md:w-[320px] shrink-0 py-10">
               <motion.div 
                 whileHover={{ y: -15, scale: 1.02 }}
                 className="glass-card p-2 rounded-[3.5rem] border-slate-100 shadow-[0_30px_60px_-15px_rgba(0,82,156,0.15)] overflow-hidden"
               >
                  <img 
                    src={src} 
                    alt={`App Preview ${i}`} 
                    className="w-full h-auto rounded-[3rem]" 
                  />
               </motion.div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AppPreviewSlider;
