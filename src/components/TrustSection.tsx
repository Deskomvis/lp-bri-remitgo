import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, MapPin, Star } from 'lucide-react';

const TrustSection = () => {
  const avatars = [
    "/avatars/face1.png",
    "/avatars/face2.png",
    "/avatars/face3.png",
    "/avatars/face4.png"
  ];

  return (
    <section id="testimoni" className="py-32 md:py-56 bg-slate-50 relative overflow-hidden">
      {/* Decorative Background Layering */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-secondary/5 rounded-full blur-[120px] -mr-64 -mt-64"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-blue/5 rounded-full blur-[100px] -ml-48 -mb-48"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-display font-black text-brand-dark mb-10 tracking-tight leading-[1.1]"
          >
            Sudah Banyak yang Buktikan <span className="text-brand-secondary">Aman & Nyaman</span>
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center"
          >
            <div className="flex justify-center -space-x-4 mb-8">
              {avatars.map((src, i) => (
                <motion.div 
                  key={i} 
                  whileHover={{ y: -10, scale: 1.1, zIndex: 50 }}
                  className="w-16 h-16 rounded-full border-4 border-white bg-slate-200 shadow-xl overflow-hidden cursor-pointer"
                >
                   <img src={src} alt="User" width="64" height="64" loading="lazy" className="w-full h-full object-cover" />
                </motion.div>
              ))}
              <div className="w-16 h-16 rounded-full border-4 border-white bg-brand-secondary flex items-center justify-center text-white font-black text-sm shadow-xl z-10">+10k</div>
            </div>
            
            <div className="flex flex-col items-center gap-2">
                <div className="flex gap-1">
                   {[1,2,3,4,5].map(star => (
                     <Star key={star} size={20} fill="#F9B52B" className="text-brand-orange" />
                   ))}
                </div>
                <span className="font-black text-slate-400 uppercase tracking-[0.3em] text-[10px]">4.9/5 RATING PLAYSTORE</span>
            </div>
          </motion.div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {[
            { text: "Kursnya mantap, uang langsung masuk! Gak perlu capek antri lagi pas libur.", author: "Siti, HK Central" },
            { text: "Awalnya ragu, tapi ternyata gampang banget. Top up 7-eleven paling praktis.", author: "Marya, Causeway Bay" },
            { text: "CS nya ramah banget, dibantu daftar sampe beres. Makasih remit.go!", author: "Ani, Tsim Sha Tsui" }
          ].map((testi, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -12 }}
              className="glass-card p-10 border border-white bg-white/60 backdrop-blur-xl group"
            >
               <div className="text-brand-secondary mb-6 text-[10px] font-black uppercase tracking-[0.3em]">Verified Review</div>
               <p className="text-slate-700 font-bold text-xl mb-10 leading-relaxed text-balance">"{testi.text}"</p>
               <div className="flex items-center justify-between border-t border-slate-100 pt-6">
                  <span className="text-xs font-black text-slate-400 uppercase tracking-widest">— {testi.author}</span>
                  <div className="w-8 h-8 bg-brand-secondary/10 rounded-full flex items-center justify-center text-brand-secondary">
                     <CheckCircle2 size={16} />
                  </div>
               </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
