import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { forwardRef } from "react";

const WhatsAppButton = forwardRef<HTMLAnchorElement>((_, ref) => {
  const phone = "902125550000";
  const message = encodeURIComponent("Merhaba, projeleriniz hakkında bilgi almak istiyorum.");

  return (
    <motion.a
      ref={ref}
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 2, type: "spring" }}
      aria-label="WhatsApp ile iletişime geç"
    >
      <MessageCircle className="w-6 h-6 text-white" />
    </motion.a>
  );
});

WhatsAppButton.displayName = "WhatsAppButton";

export default WhatsAppButton;
