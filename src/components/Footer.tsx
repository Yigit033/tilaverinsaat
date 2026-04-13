import { Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import { forwardRef } from "react";

const Footer = forwardRef<HTMLElement>((_, ref) => {
  return (
    <footer ref={ref} className="bg-background border-t border-border py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl font-black text-foreground">TİLAVER</span>
              <span className="text-xl font-light tracking-widest text-primary">YAPI</span>
            </div>
            <p className="text-sm text-muted-foreground font-light leading-relaxed">
              29 yıllık deneyim ve güvenle kendi evimize verdiğimiz özenle.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-foreground mb-4">
              Hızlı Bağlantılar
            </h4>
            <div className="space-y-2">
              {["Hakkımızda", "Projeler", "İletişim"].map((item) => (
                <button
                  key={item}
                  onClick={() => document.querySelector(`#${item === "Hakkımızda" ? "about" : item === "Projeler" ? "projects" : "contact"}`)?.scrollIntoView({ behavior: "smooth" })}
                  className="block text-sm text-muted-foreground hover:text-primary transition-colors font-light"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-foreground mb-4">
              Bizi Takip Edin
            </h4>
            <div className="flex gap-3">
              {[Instagram, Linkedin, Twitter, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 border border-border flex items-center justify-center hover:border-primary hover:text-primary text-muted-foreground transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} TİLAVER YAPI. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = "Footer";

export default Footer;
