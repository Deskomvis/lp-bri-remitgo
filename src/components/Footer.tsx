import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Instagram, Play, Globe } from 'lucide-react';

const Footer = () => (
  <footer className="bg-brand-dark text-white pt-32 pb-12 overflow-hidden relative border-t border-white/5">
    {/* Decorative background depth */}
    <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-secondary/5 rounded-full blur-[120px] -mr-64 -mb-64"></div>
    
    <div className="max-w-[1440px] mx-auto px-10 md:px-20 relative z-10">
      <div className="flex flex-col lg:flex-row justify-between gap-24 mb-24">
        <div className="lg:w-1/3">
          <div className="flex items-center gap-4 mb-10 text-white group cursor-pointer">
            <img 
              src="/logo.png" 
              alt="remit.go! logo" 
              className="h-14 w-auto rounded-2xl group-hover:rotate-12 transition-transform" 
            />
            <span className="text-3xl font-display font-black tracking-tighter">remit<span className="text-brand-orange">.go!</span></span>
          </div>
          <div className="mb-10">
            <h4 className="text-blue-100 font-black text-sm uppercase tracking-widest mb-4">BRI Global Financial Services</h4>
            <p className="text-slate-400 text-lg leading-relaxed font-medium">
              remit.go! adalah aplikasi mobile yang dirancang khusus untuk memudahkan Pekerja Migran Indonesia (PMI) di Hong Kong dalam melakukan transaksi keuangan ke Indonesia — cepat, aman, dan praktis langsung dari genggaman tangan Anda.
            </p>
          </div>
          <div className="flex gap-4">
             {[Instagram, Play, Globe].map((Icon, i) => (
               <motion.a 
                 key={i}
                 href="#" 
                 whileHover={{ scale: 1.1, backgroundColor: "var(--color-brand-secondary)" }}
                 className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center transition-colors border border-white/5"
               >
                 <Icon size={20} />
               </motion.a>
             ))}
          </div>
        </div>
        
        <div className="lg:w-2/3 flex flex-col md:items-end">
           <div className="mb-16 w-full">
            <h4 className="text-brand-orange font-black uppercase tracking-[0.4em] text-[10px] mb-8 flex items-center gap-3 justify-start md:justify-end">
              <MapPin size={16} />
              Kantor Cabang Resmi
            </h4>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { name: "Causeway Bay Main", addr: "G/F, Bay View Mansion, No. 3, 24-36 Causeway Rd" },
                { name: "Mong Kok Branch", addr: "G/F, 137 Sai Yee St, Mong Kok, Kowloon" },
                { name: "Yuen Long Branch", addr: "Shop 025, 1/F, Hop Yick Commercial Centre" },
                { name: "Tsuen Wan Branch", addr: "Shop 214, 2/F, Lik Sang Plaza" }
              ].map((branch, i) => (
                <motion.div 
                  key={i} 
                  whileHover={{ x: -10, backgroundColor: "rgba(255,255,255,0.05)" }}
                  className="bg-white/5 p-6 rounded-[2rem] border border-white/5 transition-all group"
                >
                  <div className="text-white font-black text-xs uppercase tracking-widest mb-2 group-hover:text-brand-secondary transition-colors">{branch.name}</div>
                  <div className="text-[10px] text-slate-500 leading-relaxed font-medium">{branch.addr}</div>
                </motion.div>
              ))}
            </div>
          </div>
           
           <div className="flex flex-col md:items-end gap-8 w-full border-t border-white/5 pt-12">
              <ul className="flex flex-wrap gap-8 text-slate-500 font-black text-[10px] uppercase tracking-widest">
                <li><a href="#" className="hover:text-brand-secondary transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-brand-secondary transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-brand-secondary transition-colors">AML Policy</a></li>
              </ul>
              <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest">© 2024 BRI Global Financial Services. Global Standard Fintech.</p>
           </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
