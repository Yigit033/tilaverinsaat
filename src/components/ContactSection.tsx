import { useState } from "react";
import { Send } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import { toast } from "sonner";

const FloatingInput = ({
  label,
  type = "text",
  value,
  onChange,
  maxLength,
  required,
}: {
  label: string;
  type?: string;
  value: string;
  onChange: (val: string) => void;
  maxLength?: number;
  required?: boolean;
}) => (
  <div className="relative">
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      maxLength={maxLength}
      placeholder=" "
      className="peer w-full px-4 pt-5 pb-2 bg-background border border-border text-foreground text-sm focus:outline-none focus:border-primary transition-colors duration-300"
    />
    <label className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground text-sm transition-all duration-300 pointer-events-none peer-focus:top-2.5 peer-focus:translate-y-0 peer-focus:text-xs peer-focus:text-primary peer-[:not(:placeholder-shown)]:top-2.5 peer-[:not(:placeholder-shown)]:translate-y-0 peer-[:not(:placeholder-shown)]:text-xs">
      {label}{required && " *"}
    </label>
  </div>
);

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Lütfen zorunlu alanları doldurun.");
      return;
    }
    toast.success("Mesajınız başarıyla gönderildi! En kısa sürede sizinle iletişime geçeceğiz.");
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <ScrollReveal>
            <div className="space-y-6">
              <div className="h-px w-16 bg-primary" />
              <span className="text-xs uppercase tracking-[0.3em] text-primary font-medium">
                İletişim
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground leading-tight tracking-tight">
                Projenizi birlikte{" "}
                <span className="text-primary">hayata geçirelim</span>
              </h2>
              <p className="text-muted-foreground font-light text-base md:text-lg leading-relaxed">
                Yeni projeniz için size özel bir teklif almak veya mevcut projelerimiz hakkında
                bilgi edinmek için bizimle iletişime geçin.
              </p>

              <div className="space-y-4 pt-4">
                <div className="flex items-start gap-4">
                  <div className="text-primary text-sm font-bold uppercase tracking-wider min-w-[60px]">Adres</div>
                  <span className="text-muted-foreground text-sm font-light">
                    Levent Mah. Büyükdere Cad. No:185, Şişli / İstanbul
                  </span>
                </div>
                <div className="flex items-start gap-4">
                  <div className="text-primary text-sm font-bold uppercase tracking-wider min-w-[60px]">Telefon</div>
                  <span className="text-muted-foreground text-sm font-light">+90 212 555 00 00</span>
                </div>
                <div className="flex items-start gap-4">
                  <div className="text-primary text-sm font-bold uppercase tracking-wider min-w-[60px]">E-posta</div>
                  <span className="text-muted-foreground text-sm font-light">info@tilaver.com.tr</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <form onSubmit={handleSubmit} className="space-y-5">
              <FloatingInput label="Ad Soyad" value={form.name} onChange={(v) => setForm({ ...form, name: v })} maxLength={100} required />
              <div className="grid sm:grid-cols-2 gap-5">
                <FloatingInput label="E-posta" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} maxLength={255} required />
                <FloatingInput label="Telefon" type="tel" value={form.phone} onChange={(v) => setForm({ ...form, phone: v })} maxLength={20} />
              </div>
              <div className="relative">
                <textarea
                  placeholder=" "
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  rows={5}
                  maxLength={1000}
                  className="peer w-full px-4 pt-5 pb-2 bg-background border border-border text-foreground text-sm focus:outline-none focus:border-primary transition-colors duration-300 resize-none"
                />
                <label className="absolute left-4 top-4 text-muted-foreground text-sm transition-all duration-300 pointer-events-none peer-focus:top-1.5 peer-focus:text-xs peer-focus:text-primary peer-[:not(:placeholder-shown)]:top-1.5 peer-[:not(:placeholder-shown)]:text-xs">
                  Mesajınız *
                </label>
              </div>
              <motion.button
                type="submit"
                className="w-full px-8 py-4 bg-primary text-primary-foreground font-semibold uppercase tracking-wider text-sm transition-all duration-300 flex items-center justify-center gap-2 relative overflow-hidden"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Send className="w-4 h-4" />
                Mesaj Gönder
              </motion.button>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
