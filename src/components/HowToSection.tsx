import React from 'react';
import { motion } from 'motion/react';
import { PlayStoreIcon, AppStoreIcon } from './Icons';
import { PLAY_STORE_URL, APP_STORE_URL } from '../constants';
import { Smartphone, ShieldCheck, Zap } from 'lucide-react';

const HowToSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="cara-kerja" className="bg-white py-32 md:py-56 overflow-hidden relative">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-[-10%] w-[500px] h-[500px] bg-slate-50 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-[-5%] w-[400px] h-[400px] bg-brand-secondary/5 rounded-full blur-[80px] pointer-events-none"></div>

      <div className="section-container relative z-10">
        <div className="flex flex-col lg:flex-row gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-1/2"
          >
            <div className="glass-card border-slate-100 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.08)] bg-white p-2 rounded-[4rem]">
               <div className="bg-slate-50 rounded-[3.8rem] p-10 md:p-16">
                  <div className="flex justify-between items-center mb-16">
                     <span className="font-black uppercase tracking-[0.4em] text-[10px] text-brand-secondary">Easy Process</span>
                     <div className="flex gap-3">
                        <motion.div animate={{ opacity: [1, 0.4, 1] }} transition={{ duration: 2, repeat: Infinity }} className="w-3 h-3 rounded-full bg-brand-secondary"></motion.div>
                        <div className="w-3 h-3 rounded-full bg-slate-200"></div>
                        <div className="w-3 h-3 rounded-full bg-slate-200"></div>
                     </div>
                  </div>
                  
                  <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="space-y-6"
                  >
                     {[
                       { num: "1", title: "Download", desc: "Unduh aplikasi di Play Store/App Store.", icon: <Smartphone size={20} /> },
                       { num: "2", title: "Daftar", desc: "Isi data diri dengan cepat & aman.", icon: <ShieldCheck size={20} /> },
                       { num: "3", title: "Transaksi", desc: "Kirim uang & dana cair seketika.", icon: <Zap size={20} /> }
                     ].map((step, i) => (
                       <motion.div 
                         key={i} 
                         variants={itemVariants}
                         whileHover={{ scale: 1.02, x: 10 }}
                         className={`flex items-start gap-8 p-8 rounded-[2.5rem] border transition-all duration-500 ${i === 2 ? 'bg-brand-secondary text-white shadow-2xl shadow-brand-secondary/30 border-brand-secondary' : 'bg-white border-slate-100 hover:border-brand-secondary/20'}`}
                       >
                          <div className={`w-14 h-14 rounded-2xl flex items-center justify-center font-black text-xl shrink-0 ${i === 2 ? 'bg-white/20 text-white' : 'bg-brand-secondary/10 text-brand-secondary'}`}>
                             {step.icon}
                          </div>
                          <div>
                             <h4 className={`text-2xl font-black mb-2 ${i === 2 ? 'text-white' : 'text-brand-dark'}`}>{step.title}</h4>
                             <p className={`font-medium ${i === 2 ? 'text-blue-50/80' : 'text-slate-500'}`}>{step.desc}</p>
                          </div>
                       </motion.div>
                     ))}
                  </motion.div>
               </div>
            </div>
          </motion.div>
          
          <div className="w-full lg:w-1/2">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-brand-orange/10 text-brand-orange-text px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-[0.4em] mb-10 inline-block"
            >
              Hanya Butuh Smartphone
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-display font-black text-brand-dark mb-10 leading-[1.1] tracking-tight"
            >
              Cuma 3 Langkah, <br/><span className="text-brand-orange-text">Dana Cair Seketika!</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-500 mb-16 leading-relaxed font-medium"
            >
              Menghilangkan stigma bahwa aplikasi remitansi itu "sulit". Kami buat segalanya sesederhana mungkin agar Sahabat PMI bisa fokus pada hal yang lebih penting.
            </motion.p>
            
            <div className="flex flex-col sm:flex-row gap-6">
               <motion.a 
                 href={PLAY_STORE_URL}
                 target="_blank"
                 rel="noopener noreferrer"
                 whileHover={{ scale: 1.05, y: -5 }}
                 whileTap={{ scale: 0.95 }}
                 className="btn-primary"
               >
                 <PlayStoreIcon />
                 <div className="text-left leading-tight">
                    <div className="text-[10px] font-bold opacity-60 uppercase tracking-widest">Get it on</div>
                    <div className="text-xl font-black">Google Play</div>
                 </div>
               </motion.a>
               <motion.a 
                 href={APP_STORE_URL}
                 target="_blank"
                 rel="noopener noreferrer"
                 whileHover={{ scale: 1.05, y: -5 }}
                 whileTap={{ scale: 0.95 }}
                 className="btn-primary bg-brand-dark hover:bg-slate-900"
               >
                 <AppStoreIcon />
                 <div className="text-left leading-tight">
                    <div className="text-[10px] font-bold opacity-60 uppercase tracking-widest">Download on</div>
                    <div className="text-xl font-black">App Store</div>
                 </div>
               </motion.a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToSection;
