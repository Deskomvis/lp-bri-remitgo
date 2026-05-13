import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ShieldCheck, CheckCircle2, TrendingUp, Users } from 'lucide-react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { AppStoreIcon, PlayStoreIcon } from './Icons';
import { PLAY_STORE_URL, APP_STORE_URL } from '../constants';

const Hero = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  return (
    <section ref={targetRef} className="relative bri-gradient text-white overflow-hidden min-h-[950px] flex items-center pt-20">
      {/* Animated Stripe Mesh & Layered Background */}
      <div className="absolute inset-0 bg-brand-dark overflow-hidden pointer-events-none">
         <motion.div 
           style={{ y, scale }}
           className="absolute top-[-20%] left-[-10%] w-[120%] h-[120%] bg-gradient-to-br from-brand-blue via-brand-dark to-brand-secondary/30 rotate-12 opacity-80 animate-mesh"
         />
         
         {/* User Provided Background Image */}
         <div className="absolute inset-0 opacity-20 mix-blend-overlay">
            <img src="/bri-bg-logo.jpg" alt="" className="w-full h-full object-cover" />
         </div>

         <div className="absolute top-[10%] right-[10%] w-[40%] h-[40%] bg-brand-orange/10 rounded-full blur-[150px] animate-pulse-slow"></div>
         <div className="absolute bottom-[10%] left-[5%] w-[30%] h-[30%] bg-brand-secondary/10 rounded-full blur-[120px]"></div>
         
         {/* Decorative Lines/Layering */}
         <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#white 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      </div>

      <div className="section-container grid lg:grid-cols-2 gap-32 items-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -50 }} 
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="inline-flex items-center gap-2 bg-brand-secondary/10 backdrop-blur-xl border border-brand-secondary/20 text-blue-200 px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-[0.3em] mb-12"
          >
            <ShieldCheck size={16} />
            <span>BRI Group • Global Fintech Standards</span>
          </motion.div>
          
          <h1 className="mb-10 text-white !text-5xl md:!text-7xl lg:!text-8xl leading-[1.05]">
            Kirim Uang <br/>
            <span className="text-brand-orange font-black drop-shadow-[0_0_30px_rgba(249,181,43,0.3)]">Tanpa Libur!</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-100/90 mb-16 max-w-xl leading-relaxed font-medium">
            Gak perlu antre di toko fisik. Kirim uang kapan saja, 24/7 lewat 7-Eleven terdekat. Aman, cepat, dan kurs juara!
          </p>
          
          <div className="flex flex-wrap gap-8 mb-24">
            <motion.a 
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -5, boxShadow: "0 25px 50px -12px rgba(249,181,43,0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="btn-store bg-white text-brand-dark hover:bg-blue-50 border-none"
            >
              <PlayStoreIcon />
              <div className="text-left leading-tight text-brand-dark">
                <div className="text-[10px] font-bold opacity-60 uppercase tracking-widest">Get it on</div>
                <div className="text-xl">Google Play</div>
              </div>
            </motion.a>

            <motion.a 
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -5, borderColor: "rgba(255,255,255,0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="btn-store border border-white/20"
            >
              <AppStoreIcon />
              <div className="text-left leading-tight">
                <div className="text-[10px] font-bold opacity-60 uppercase tracking-widest">Download on the</div>
                <div className="text-xl">App Store</div>
              </div>
            </motion.a>
          </div>

          <div className="flex items-center gap-16 pt-16 border-t border-white/10">
             <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-secondary/20 rounded-2xl flex items-center justify-center text-brand-secondary">
                   <Users size={24} />
                </div>
                <div className="flex flex-col">
                   <span className="text-4xl font-black text-white">100k+</span>
                   <span className="text-[10px] font-black text-blue-200/50 uppercase tracking-[0.2em]">Active Users</span>
                </div>
             </div>
             <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-orange/20 rounded-2xl flex items-center justify-center text-brand-orange">
                   <TrendingUp size={24} />
                </div>
                <div className="flex flex-col">
                   <span className="text-4xl font-black text-white">4.9</span>
                   <span className="text-[10px] font-black text-blue-200/50 uppercase tracking-[0.2em]">App Rating</span>
                </div>
             </div>
          </div>
        </motion.div>
        
        <motion.div 
          style={{ y: useTransform(scrollYProgress, [0, 1], [0, -100]) }}
          className="relative hidden lg:block w-full max-w-[800px] mx-auto"
        >
          <div className="relative z-10 animate-float">
            <div className="w-full aspect-square flex items-center justify-center">
              <DotLottieReact
                src="https://lottie.host/f64feeb7-2a73-4a25-9d76-252d03cc0b78/yxjDfKwYrn.lottie"
                loop
                autoplay
                className="w-full h-full object-contain drop-shadow-[0_35px_60px_-15px_rgba(0,0,0,0.4)] scale-125"
              />
            </div>
          </div>
          
          <motion.div 
            animate={{ y: [0, -30, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[15%] left-[-5%] glass-card p-6 rounded-3xl z-20 bg-white/90 shadow-2xl hidden xl:block border-none"
          >
             <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white shadow-lg shadow-green-500/30">
                   <CheckCircle2 size={24} />
                </div>
                <div>
                   <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Status</div>
                   <div className="text-lg font-black text-brand-dark">Success!</div>
                </div>
             </div>
          </motion.div>

          <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-brand-secondary/20 rounded-full blur-3xl -z-10 animate-pulse-slow"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
