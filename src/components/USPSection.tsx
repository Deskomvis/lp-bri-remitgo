import React from 'react';
import { motion } from 'motion/react';
import { CircleDollarSign, MapPin, ShieldCheck } from 'lucide-react';

const USPSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section id="keunggulan" className="py-32 md:py-56 bg-slate-50 overflow-hidden relative">
      {/* Decorative Layering - Background Blobs */}
      <div className="absolute top-[10%] left-[-10%] w-[600px] h-[600px] bg-brand-secondary/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[20%] right-[-10%] w-[500px] h-[500px] bg-brand-orange/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center mb-32"
        >
          <motion.span 
            variants={itemVariants}
            className="text-brand-secondary font-black uppercase tracking-[0.4em] text-xs mb-6 inline-block bg-brand-secondary/10 px-6 py-2 rounded-full"
          >
            Keunggulan Kami
          </motion.span>
          <motion.h2 
            variants={itemVariants}
            className="text-5xl md:text-7xl font-display font-black text-brand-dark mb-8 tracking-tight"
          >
            Kenapa Harus <span className="text-brand-orange-text">remit.go!</span>?
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-slate-500 text-xl md:text-2xl max-w-3xl mx-auto font-medium leading-relaxed"
          >
            Solusi kirim uang paling modern, aman, dan menguntungkan bagi Sahabat PMI di Hong Kong.
          </motion.p>
        </motion.div>
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32"
        >
          <motion.div 
            variants={itemVariants}
            whileHover={{ y: -15, transition: { duration: 0.4 } }}
            className="lg:row-span-2 p-12 md:p-14 rounded-[4rem] bg-brand-dark text-white flex flex-col justify-between overflow-hidden relative group shadow-2xl shadow-brand-dark/20"
          >
            <div className="absolute top-0 right-0 w-80 h-80 bg-brand-secondary rounded-full blur-[100px] opacity-20 -mr-40 -mt-40 transition-opacity group-hover:opacity-40"></div>
            <div>
               <div className="mb-12 w-20 h-20 bg-white/10 rounded-3xl flex items-center justify-center backdrop-blur-md border border-white/10 group-hover:scale-110 transition-transform">
                  <CircleDollarSign size={40} className="text-brand-orange" />
               </div>
               <h3 className="text-4xl font-black text-white mb-6 tracking-tight leading-tight">💰 Cuan<br/> Maksimal</h3>
               <p className="text-blue-100/70 text-lg font-medium leading-relaxed mb-12">Kurs tertinggi dan biaya admin termurah se-Hong Kong. Lebih banyak uang untuk keluarga tercinta.</p>
            </div>
            <div className="bg-white/10 rounded-[2.5rem] p-8 backdrop-blur-md border border-white/10 group-hover:bg-white/20 transition-all">
               <div className="flex justify-between items-center mb-4">
                  <span className="text-[10px] font-black text-blue-200 uppercase tracking-widest">Saving Efficiency</span>
                  <span className="text-sm font-black text-green-400">+12% Higher</span>
               </div>
               <div className="w-full bg-white/10 rounded-full h-3">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "88%" }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                    className="bg-green-400 h-3 rounded-full relative"
                  >
                     <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-lg"></div>
                  </motion.div>
               </div>
            </div>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            whileHover={{ y: -15 }}
            className="lg:col-span-2 p-12 md:p-14 rounded-[4rem] bg-white border border-slate-100 flex flex-col md:flex-row items-center gap-12 shadow-xl shadow-slate-200/50"
          >
            <div className="flex-1 text-center md:text-left">
               <div className="mb-8 w-20 h-20 bg-brand-secondary/10 rounded-3xl flex items-center justify-center text-brand-secondary mx-auto md:mx-0">
                  <MapPin size={40} />
               </div>
               <h3 className="text-4xl font-black text-brand-dark mb-6 tracking-tight">📍 Sangat Praktis</h3>
               <p className="text-slate-500 text-lg font-medium leading-relaxed">Setor tunai bisa lewat 7-Eleven mana pun di seluruh HK. Kirim kapan saja, 24/7 tanpa antre di hari libur.</p>
            </div>
            <div className="w-full md:w-2/5">
               <motion.div 
                 whileHover={{ scale: 1.05 }}
                 className="bg-slate-50 p-6 rounded-[3rem] border border-slate-100 flex items-center gap-6 shadow-sm"
               >
                  <img src="/seven-eleven.png" alt="711" width="80" height="80" loading="lazy" className="w-20 h-20 rounded-2xl object-cover shadow-md" />
                  <div>
                     <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Official Partner</div>
                     <div className="text-xl font-black text-brand-dark">7-Eleven HK</div>
                  </div>
               </motion.div>
            </div>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            whileHover={{ y: -15 }}
            className="lg:col-span-2 p-12 md:p-14 rounded-[4rem] bg-brand-secondary text-white flex flex-col md:flex-row-reverse items-center gap-12 shadow-2xl shadow-brand-secondary/20"
          >
            <div className="flex-1 text-center md:text-left">
               <div className="mb-8 w-20 h-20 bg-white/10 rounded-3xl flex items-center justify-center text-white mx-auto md:mx-0">
                  <ShieldCheck size={40} />
               </div>
               <h3 className="text-4xl font-black text-white mb-6 tracking-tight">🏦 Fleksibel & Aman</h3>
               <p className="text-blue-50/80 text-lg font-medium leading-relaxed">Support pengiriman ke seluruh bank di Indonesia dan e-wallet. Keamanan dana terjamin di bawah naungan BRI Group.</p>
            </div>
            <div className="w-full md:w-1/4 flex justify-center">
               <div className="relative">
                  <div className="w-32 h-32 rounded-full bg-white/20 absolute -inset-4 blur-2xl animate-pulse"></div>
                  <motion.div 
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-2xl relative z-10 text-brand-secondary font-black text-4xl"
                  >
                     r.
                  </motion.div>
               </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative rounded-[5rem] overflow-hidden border-[12px] border-white shadow-[0_60px_120px_-20px_rgba(0,82,156,0.3)] group"
        >
           <img src="/seven-eleven.png" alt="Setor di 7-Eleven" width="1200" height="600" loading="lazy" className="w-full h-[600px] object-cover scale-110 group-hover:scale-100 transition-transform duration-[2s]" />
           <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/40 to-transparent flex flex-col justify-end p-16 md:p-24">
              <div className="max-w-4xl">
                 <motion.div 
                   initial={{ width: 0 }}
                   whileInView={{ width: 100 }}
                   transition={{ duration: 1, delay: 0.5 }}
                   className="h-2 bg-brand-orange rounded-full mb-10"
                 ></motion.div>
                 <h3 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tight">Gak Perlu Jauh, <span className="text-brand-orange">7-Eleven</span> Ada di Setiap Sudut!</h3>
                 <p className="text-2xl text-blue-50/80 font-medium leading-relaxed max-w-2xl">Sambil belanja harian, langsung setor tunai. Tanpa ribet, tanpa antre panjang di hari libur Anda yang berharga.</p>
              </div>
           </div>
        </motion.div>
      </div>
    </section>
  );
};

export default USPSection;
