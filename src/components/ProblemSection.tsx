import React from 'react';
import { motion } from 'motion/react';
import { Zap, Clock, ShieldCheck, ArrowRight } from 'lucide-react';

const ProblemSection = () => (
  <section id="masalah" className="bg-white py-32 md:py-56 overflow-hidden relative">
    {/* Decorative Layering */}
    <div className="absolute top-0 right-[-10%] w-[600px] h-[600px] bg-brand-secondary/5 rounded-full blur-[120px] pointer-events-none"></div>
    <div className="absolute bottom-0 left-[-5%] w-[400px] h-[400px] bg-brand-orange/5 rounded-full blur-[80px] pointer-events-none"></div>

    <div className="section-container relative z-10">
      <div className="text-center mb-32 max-w-4xl mx-auto">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-brand-secondary font-black uppercase tracking-[0.4em] text-[10px] mb-6 inline-block bg-brand-secondary/10 px-6 py-2 rounded-full"
        >
          Solusi Pintar
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mb-8 text-5xl md:text-7xl font-display font-black text-brand-dark tracking-tight leading-[1.1]"
        >
          Tinggalkan Cara Lama. Beralih ke <span className="text-brand-secondary">Cara Pintar.</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-slate-500 text-xl md:text-2xl font-medium leading-relaxed"
        >
          Ucapkan selamat tinggal pada antrean panjang, ongkos kirim mahal, dan kurs rendah. Saatnya pegang kendali penuh atas uang hasil kerja keras Anda.
        </motion.p>
      </div>
      
      <div className="grid md:grid-cols-3 md:grid-rows-2 gap-8 h-auto md:h-[650px]">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="md:col-span-2 md:row-span-2 p-12 md:p-20 rounded-[4rem] bg-slate-50 border border-slate-100 relative overflow-hidden group shadow-xl shadow-slate-200/50"
        >
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-brand-secondary/5 to-transparent pointer-events-none"></div>
          
          <div className="w-20 h-20 rounded-3xl bg-white shadow-xl flex items-center justify-center text-brand-secondary mb-12 group-hover:scale-110 transition-transform">
            <Zap size={40} />
          </div>
          <h3 className="text-4xl md:text-5xl font-black text-brand-dark mb-6 tracking-tight leading-tight">Kirim Instan, <br/>Kurs Tertinggi.</h3>
          <p className="max-w-lg text-slate-500 text-lg md:text-xl font-medium mb-12 leading-relaxed">Bandingkan sendiri. Kami menjamin kurs terbaik di Hong Kong dengan biaya admin yang 100% transparan tanpa kejutan.</p>
          
          <div className="bg-white p-8 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100 flex items-center justify-between max-w-md group-hover:-translate-y-2 transition-transform duration-500">
             <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                   <ArrowRight className="-rotate-45" size={28} />
                </div>
                <div>
                   <div className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">Total Diterima</div>
                   <div className="text-2xl font-black text-brand-dark">Rp 1.950.000</div>
                </div>
             </div>
             <div className="text-right">
                <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Biaya</div>
                <div className="text-base font-black text-green-500">0 HKD</div>
             </div>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          whileHover={{ y: -10 }}
          className="p-12 rounded-[4rem] bg-white border border-slate-100 shadow-xl shadow-slate-200/50"
        >
           <div className="w-16 h-16 rounded-2xl bg-brand-orange/10 flex items-center justify-center text-brand-orange mb-8 shadow-sm">
              <Clock size={32} />
           </div>
           <h4 className="text-2xl font-black text-brand-dark mb-4">24/7 Tanpa Libur</h4>
           <p className="text-slate-500 font-medium leading-relaxed">Kirim kapan saja, bahkan saat hari libur nasional. Uang tetap jalan.</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          whileHover={{ y: -10 }}
          className="p-12 rounded-[4rem] bg-brand-dark border border-slate-800 text-white shadow-2xl shadow-brand-dark/20 relative overflow-hidden group"
        >
           <div className="absolute top-0 right-0 w-32 h-32 bg-brand-secondary rounded-full blur-[60px] opacity-20 -mr-16 -mt-16 group-hover:opacity-40 transition-opacity"></div>
           <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center text-white mb-8 shadow-inner border border-white/10">
              <ShieldCheck size={32} />
           </div>
           <h4 className="text-2xl font-black text-white mb-4">Lisensi Resmi</h4>
           <p className="text-blue-100/70 font-medium leading-relaxed">Diawasi otoritas keuangan HK (MSO) & bagian dari Bank BRI.</p>
        </motion.div>
      </div>
    </div>
  </section>
);

export default ProblemSection;
