import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { AppStoreIcon, PlayStoreIcon } from './Icons';
import { PLAY_STORE_URL, APP_STORE_URL } from '../constants';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 px-6 py-4 ${
        scrolled ? 'bg-white/80 backdrop-blur-2xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.05)] border-b border-white/20' : 'bg-transparent py-8'
      }`}
    >
      <div className="max-w-[1440px] mx-auto flex justify-between items-center">
        <a href="#" className="flex items-center gap-4 group">
          <div className="relative">
             <div className="absolute inset-0 bg-brand-orange blur-xl opacity-0 group-hover:opacity-20 transition-opacity"></div>
             <img 
               src="/logo.png" 
               alt="remit.go! logo" 
               width="48"
               height="48"
               className="h-12 w-auto rounded-[1rem] relative z-10"
             />
          </div>
          <span className={`text-2xl font-display font-black tracking-tighter transition-colors ${scrolled ? 'text-brand-dark' : 'text-white'}`}>
            remit<span className={scrolled ? "text-brand-orange-text" : "text-brand-orange"}>.go!</span>
          </span>
        </a>

        <div className={`hidden md:flex items-center gap-12 text-[10px] font-black uppercase tracking-[0.4em] transition-colors ${scrolled ? 'text-slate-400' : 'text-blue-100/60'}`}>
          <a href="#masalah" className={`hover:text-brand-secondary transition-colors ${scrolled ? 'hover:text-brand-secondary' : 'hover:text-white'}`}>Masalah</a>
          <a href="#keunggulan" className={`hover:text-brand-secondary transition-colors ${scrolled ? 'hover:text-brand-secondary' : 'hover:text-white'}`}>Keunggulan</a>
          <a href="#cara-kerja" className={`hover:text-brand-secondary transition-colors ${scrolled ? 'hover:text-brand-secondary' : 'hover:text-white'}`}>Cara Kerja</a>
          <a href="#promo" className={`hover:text-brand-secondary transition-colors ${scrolled ? 'hover:text-brand-secondary' : 'hover:text-white'}`}>Promo</a>
          
          <div className="flex items-center gap-6 pl-12 border-l border-white/10">
             <motion.a 
               href={PLAY_STORE_URL} 
               whileHover={{ scale: 1.1, y: -2 }}
               className={`${scrolled ? 'text-brand-secondary' : 'text-white'} transition-colors`}
             >
                <PlayStoreIcon />
             </motion.a>
             <motion.a 
               href={APP_STORE_URL} 
               whileHover={{ scale: 1.1, y: -2 }}
               className={`${scrolled ? 'text-brand-dark' : 'text-white'} transition-colors`}
             >
                <AppStoreIcon />
             </motion.a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
