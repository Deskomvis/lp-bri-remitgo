import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, MessageCircle } from 'lucide-react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Apakah remit.go! resmi dan aman?",
      a: "Sangat aman. Kami adalah bagian dari BRI Group yang diawasi ketat oleh otoritas keuangan dan memiliki lisensi resmi pengiriman uang di Hong Kong."
    },
    {
      q: "Berapa lama uang sampai ke Indonesia?",
      a: "Hampir instan! Sebagian besar transaksi ke bank utama dan e-wallet di Indonesia cair dalam hitungan menit setelah Anda melakukan setor tunai."
    },
    {
      q: "Gimana cara setor tunainya?",
      a: "Cukup tunjukkan QR Code dari aplikasi remit.go! ke kasir 7-Eleven mana saja di Hong Kong. Bayar sesuai nominal, dan selesai!"
    },
    {
      q: "Apa ada biaya tersembunyi?",
      a: "Tidak ada. Semua biaya dan kurs yang Anda lihat di aplikasi adalah final. Transparan sejak awal."
    }
  ];

  return (
    <section id="faq" className="py-32 md:py-56 bg-slate-50 relative overflow-hidden">
      {/* Decorative Layering */}
      <div className="absolute top-0 left-[-10%] w-[600px] h-[600px] bg-slate-50 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-[-10%] w-[500px] h-[500px] bg-brand-secondary/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-secondary font-black uppercase tracking-[0.4em] text-[10px] mb-6 inline-block"
          >
            Pusat Bantuan
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-display font-black text-brand-dark mb-8 tracking-tight"
          >
            Pertanyaan <span className="text-brand-secondary">Populer</span>
          </motion.h2>
        </div>
        
        <div className="space-y-4 mb-24">
          {faqs.map((faq, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`rounded-[2.5rem] border transition-all duration-500 ${openIndex === i ? 'bg-white border-brand-secondary/30 shadow-2xl shadow-brand-secondary/10' : 'bg-slate-50 border-slate-100'}`}
            >
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-8 md:p-10 flex items-center justify-between text-left"
              >
                <span className={`text-xl md:text-2xl font-black ${openIndex === i ? 'text-brand-secondary' : 'text-brand-dark'}`}>{faq.q}</span>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${openIndex === i ? 'bg-brand-secondary text-white' : 'bg-slate-200 text-slate-500'}`}>
                   {openIndex === i ? <Minus size={20} /> : <Plus size={20} />}
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="p-8 md:p-10 pt-0 text-lg text-slate-500 font-medium leading-relaxed">
                       {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-brand-dark rounded-[3.5rem] p-12 md:p-16 text-center relative overflow-hidden"
        >
           <div className="absolute top-0 right-0 w-64 h-64 bg-brand-secondary rounded-full blur-[100px] opacity-20 -mr-32 -mt-32"></div>
           <h3 className="text-3xl md:text-4xl font-black text-white mb-6 relative z-10">Masih ada pertanyaan?</h3>
           <p className="text-blue-100/70 text-lg font-medium mb-10 relative z-10">Tim Customer Service kami siap membantu Sahabat PMI 24/7.</p>
           <motion.button 
             whileHover={{ scale: 1.05 }}
             whileTap={{ scale: 0.95 }}
             className="inline-flex items-center gap-3 bg-brand-secondary text-white px-10 py-5 rounded-full font-black text-lg shadow-xl shadow-brand-secondary/30 relative z-10"
           >
              <MessageCircle size={24} /> Hubungi CS Kami
           </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
