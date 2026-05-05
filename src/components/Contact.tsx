import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    countryCode: "+91",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const { name, email, countryCode, phone, message } = formData;
    const subject = encodeURIComponent(`Portfolio Enquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nMobile: ${countryCode} ${phone}\n\nMessage:\n${message}`
    );
    
    const mailtoUrl = `mailto:shubhamdalvi7218@gmail.com?subject=${subject}&body=${body}`;
    
    // Create a temporary link and click it - more reliable on mobile
    const link = document.createElement('a');
    link.href = mailtoUrl;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-32 px-8 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <div className="flex items-center gap-4 mb-8">
                <span className="w-12 h-[1px] bg-accent" />
                <span className="font-sans text-[11px] uppercase tracking-[0.4em] text-accent">Contact</span>
              </div>
              <h2 className="text-6xl md:text-8xl font-display leading-[1] tracking-tighter mb-12">
                Let's start <br /> something great.
              </h2>
              <p className="font-sans text-xl text-white/40 leading-relaxed max-w-md">
                I'm currently available for new projects and collaborations. If you have an idea, let's bring it to life.
              </p>
            </motion.div>

            <div className="space-y-12">
              <div className="space-y-4">
                <h3 className="font-sans text-[10px] uppercase tracking-[0.4em] text-white/30 mb-4">Direct Contact</h3>
                <a href="mailto:shubhamdalvi7218@gmail.com" className="group flex items-center justify-between py-6 border-b border-white/10 hover:border-accent transition-colors">
                  <div className="flex flex-col">
                    <span className="font-sans text-[10px] uppercase tracking-widest text-white/30">Personal Email</span>
                    <span className="font-display text-xl md:text-2xl">shubhamdalvi7218@gmail.com</span>
                  </div>
                  <ArrowUpRight size={20} className="text-white/20 group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </a>
                <a href="mailto:finnauracapital@gmail.com" className="group flex items-center justify-between py-6 border-b border-white/10 hover:border-accent transition-colors">
                  <div className="flex flex-col">
                    <span className="font-sans text-[10px] uppercase tracking-widest text-white/30">Business Email</span>
                    <span className="font-display text-xl md:text-2xl">finnauracapital@gmail.com</span>
                  </div>
                  <ArrowUpRight size={20} className="text-white/20 group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </a>
                <a href="https://wa.me/917218918236" target="_blank" rel="noreferrer" className="group flex items-center justify-between py-6 border-b border-white/10 hover:border-accent transition-colors">
                  <div className="flex flex-col">
                    <span className="font-sans text-[10px] uppercase tracking-widest text-white/30">WhatsApp</span>
                    <span className="font-display text-xl md:text-2xl">+91 72189 18236</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="font-sans text-[10px] uppercase tracking-widest text-accent opacity-0 group-hover:opacity-100 transition-opacity">Chat Now</span>
                    <ArrowUpRight size={20} className="text-white/20 group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                  </div>
                </a>
              </div>

              <div className="space-y-6">
                <h3 className="font-sans text-[10px] uppercase tracking-[0.4em] text-white/30">Socials & Platforms</h3>
                <div className="flex flex-wrap gap-x-12 gap-y-6">
                  <a href="https://www.linkedin.com/in/shubham-dalvi-8bb31624b/" target="_blank" rel="noreferrer" className="group flex items-center gap-2 font-sans text-[11px] uppercase tracking-widest text-white/40 hover:text-white transition-colors">
                    LinkedIn <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                  <a href="https://github.com/shubhamdalvi2002" target="_blank" rel="noreferrer" className="group flex items-center gap-2 font-sans text-[11px] uppercase tracking-widest text-white/40 hover:text-white transition-colors">
                    GitHub <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                  <a href="https://finncap-in.vercel.app/" target="_blank" rel="noreferrer" className="group flex items-center gap-2 font-sans text-[11px] uppercase tracking-widest text-white/40 hover:text-white transition-colors">
                    FinAura Capital <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-card p-12 relative z-10 pointer-events-auto"
          >
            <form className="relative z-10 space-y-8" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label className="font-sans text-[10px] uppercase tracking-widest text-white/30">Your Name</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-white/10 py-4 outline-none focus:border-accent transition-colors font-sans text-lg" 
                  placeholder="John Doe" 
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="font-sans text-[10px] uppercase tracking-widest text-white/30">Email Address</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b border-white/10 py-4 outline-none focus:border-accent transition-colors font-sans text-lg" 
                    placeholder="john@example.com" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-sans text-[10px] uppercase tracking-widest text-white/30">Mobile Number</label>
                  <div className="flex gap-2">
                    <select 
                      name="countryCode"
                      value={formData.countryCode}
                      onChange={handleChange}
                      className="bg-transparent border-b border-white/10 py-4 outline-none focus:border-accent transition-colors font-sans text-lg cursor-pointer"
                    >
                      <option value="+91" className="bg-black">🇮🇳 +91</option>
                      <option value="+61" className="bg-black">🇦🇺 +61</option>
                      <option value="+973" className="bg-black">🇧🇭 +973</option>
                      <option value="+880" className="bg-black">🇧🇩 +880</option>
                      <option value="+1" className="bg-black">🇨🇦 +1</option>
                      <option value="+86" className="bg-black">🇨🇳 +86</option>
                      <option value="+20" className="bg-black">🇪🇬 +20</option>
                      <option value="+233" className="bg-black">🇬🇭 +233</option>
                      <option value="+62" className="bg-black">🇮🇩 +62</option>
                      <option value="+972" className="bg-black">🇮🇱 +972</option>
                      <option value="+81" className="bg-black">🇯🇵 +81</option>
                      <option value="+254" className="bg-black">🇰🇪 +254</option>
                      <option value="+965" className="bg-black">🇰🇼 +965</option>
                      <option value="+60" className="bg-black">🇲🇾 +60</option>
                      <option value="+212" className="bg-black">🇲🇦 +212</option>
                      <option value="+64" className="bg-black">🇳🇿 +64</option>
                      <option value="+234" className="bg-black">🇳🇬 +234</option>
                      <option value="+968" className="bg-black">🇴🇲 +968</option>
                      <option value="+92" className="bg-black">🇵🇰 +92</option>
                      <option value="+63" className="bg-black">🇵🇭 +63</option>
                      <option value="+974" className="bg-black">🇶🇦 +974</option>
                      <option value="+966" className="bg-black">🇸🇦 +966</option>
                      <option value="+65" className="bg-black">🇸🇬 +65</option>
                      <option value="+27" className="bg-black">🇿🇦 +27</option>
                      <option value="+82" className="bg-black">🇰🇷 +82</option>
                      <option value="+66" className="bg-black">🇹🇭 +66</option>
                      <option value="+971" className="bg-black">🇦🇪 +971</option>
                      <option value="+44" className="bg-black">🇬🇧 +44</option>
                      <option value="+1" className="bg-black">🇺🇸 +1</option>
                      <option value="+84" className="bg-black">🇻🇳 +84</option>
                    </select>
                    <input 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="flex-1 bg-transparent border-b border-white/10 py-4 outline-none focus:border-accent transition-colors font-sans text-lg" 
                      placeholder="98765 43210" 
                    />
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <label className="font-sans text-[10px] uppercase tracking-widest text-white/30">Message</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4} 
                  className="w-full bg-transparent border-b border-white/10 py-4 outline-none focus:border-accent transition-colors font-sans text-lg resize-none" 
                  placeholder="How can I help you?" 
                />
              </div>
              <button 
                type="submit" 
                className="relative z-20 w-full py-6 bg-white text-black font-sans text-[11px] uppercase tracking-[0.2em] font-bold hover:bg-accent hover:text-white active:scale-[0.98] transition-all duration-500 cursor-pointer"
              >
                Send Inquiry
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

