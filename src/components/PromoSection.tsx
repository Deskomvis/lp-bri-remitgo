import React from 'react';
import { motion } from 'motion/react';
import { Gift, Ticket, CreditCard, TrendingUp } from 'lucide-react';
import { PlayStoreIcon, AppStoreIcon } from './Icons';
import { PLAY_STORE_URL, APP_STORE_URL } from '../constants';

const PromoSection = () => (
  <section id="promo" className="bg-white py-32 md:py-56 overflow-hidden relative">
    {/* Decorative Layering */}
    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-secondary/5 rounded-full blur-[120px] pointer-events-none -mr-64 -mt-64"></div>
    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-orange/5 rounded-full blur-[100px] pointer-events-none -ml-48 -mb-48"></div>

    {/* User Provided Wave Background */}
    <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
       <img src="/bri-bg-wave.png" alt="" className="w-full h-full object-cover" />
    </div>

    <div className="section-container relative z-10">
      <div className="bg-white rounded-[4rem] p-12 md:p-24 border border-slate-100 shadow-[0_60px_120px_-20px_rgba(0,0,0,0.05)] relative overflow-hidden">
        {/* Card Background Accent */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-orange/5 rounded-full blur-[100px] -mr-48 -mt-48"></div>
        
        <div className="flex flex-col lg:flex-row gap-24 relative z-10">
          <div className="lg:w-2/5 flex flex-col justify-center">
             <motion.div 
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="inline-flex items-center gap-3 text-brand-secondary font-black uppercase tracking-[0.4em] text-[10px] mb-8 bg-brand-secondary/10 px-6 py-2.5 rounded-full w-fit"
             >
               <Gift size={16} /> Promo Eksklusif
             </motion.div>
             <motion.h3 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.1 }}
               className="text-brand-orange-text text-5xl md:text-6xl font-black mb-10 leading-[1.1] tracking-tight"
             >
               Khusus Buat Kamu, <br/><span className="text-brand-dark">Ada Bonus Menantimu!</span>
             </motion.h3>
             <motion.p 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2 }}
               className="text-slate-500 text-xl mb-16 font-medium leading-relaxed"
             >
               Download aplikasi sekarang dan nikmati berbagai keuntungan finansial untuk transaksi pertama Anda.
             </motion.p>
             
             <div className="flex flex-col sm:flex-row lg:flex-col gap-6">
                <motion.a 
                  href={PLAY_STORE_URL} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-primary"
                >
                   <PlayStoreIcon />
                   <div className="text-left leading-tight">
                      <div className="text-[10px] font-bold opacity-60 uppercase tracking-widest">Available on</div>
                      <div className="text-xl font-black">Google Play</div>
                   </div>
                </motion.a>
                <motion.a 
                  href={APP_STORE_URL} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.98 }}
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
          
          <div className="lg:w-3/5">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { 
                  tag: "First Deal", 
                  title: "Gratis Ongkir", 
                  sub: "ADMIN FEE 0", 
                  icon: <Ticket className="text-brand-orange" size={40} />,
                  color: "bg-brand-orange/10"
                },
                { 
                  tag: "Special Rate", 
                  title: "Kurs +55", 
                  sub: "BONUS POIN", 
                  icon: <TrendingUp className="text-brand-secondary" size={40} />,
                  color: "bg-brand-secondary/10"
                },
                { 
                  tag: "7-Eleven", 
                  title: "Flat 10 HKD", 
                  sub: "ONGKIR MURAH", 
                  icon: <CreditCard className="text-emerald-500" size={40} />,
                  color: "bg-emerald-50"
                }
              ].map((promo, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -15 }}
                  className="glass-card border-slate-100 p-10 flex flex-col items-center text-center group h-full rounded-[3rem]"
                >
                  <div className={`w-20 h-20 ${promo.color} rounded-[2rem] flex items-center justify-center mb-10 group-hover:rotate-12 transition-transform duration-500 shadow-sm`}>
                    {promo.icon}
                  </div>
                  <div className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-4">{promo.tag}</div>
                  <h4 className="text-brand-dark mb-4 text-2xl font-black">{promo.title}</h4>
                  <div className="text-[10px] font-black text-brand-secondary uppercase tracking-widest bg-brand-secondary/10 px-3 py-1 rounded-full">{promo.sub}</div>
                  
                  {/* Decorative line */}
                  <div className="w-12 h-1.5 bg-slate-100 rounded-full mt-10 group-hover:w-full group-hover:bg-brand-secondary/20 transition-all duration-500"></div>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-16 p-10 bg-slate-50 rounded-[3rem] border border-dashed border-slate-200 text-center"
            >
               <p className="text-xs font-bold text-slate-500 tracking-wide">* Syarat dan ketentuan berlaku. Promo dapat berubah sewaktu-waktu.</p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default PromoSection;
