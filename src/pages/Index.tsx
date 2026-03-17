import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import lululemonLogo from "@/assets/lululemon-logo.png";
import { ArrowRight, CheckCircle, Star, Bell } from "lucide-react";

const names = ["Samantha", "Jessica", "Michael", "Emily", "David", "Sarah", "Ashley"];

const steps = [
  { title: "Click The Button Below", desc: "Start your reward claim now" },
  { title: "Enter Your Email & Info", desc: "Quick 30-second form" },
  { title: "Complete 5 Recommended Deals", desc: "Easy partner offers from top brands" },
  { title: "Claim Reward & Repeat", desc: "Get your $750 gift card" },
];

const Index = () => {
  const [bannerName, setBannerName] = useState(names[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setBannerName(names[Math.floor(Math.random() * names.length)]);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col items-center">
      {/* Notification Banner */}
      <motion.div
        key={bannerName}
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="w-full bg-primary text-primary-foreground py-3 px-4 text-center text-sm font-semibold flex items-center justify-center gap-2"
      >
        <Bell className="w-4 h-4" />
        {bannerName} just claimed <span className="font-black">$750</span> — You could be next!
      </motion.div>

      <div className="w-full max-w-md mx-auto px-5 py-8 flex flex-col items-center gap-8">
        {/* Logo */}
        <motion.div
          className="flex flex-col items-center gap-3"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <img src={lululemonLogo} alt="lululemon" className="h-24 object-contain" />
          <span className="text-4xl font-black tracking-tight text-foreground uppercase">Lululemon</span>
        </motion.div>

        {/* Title */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h1 className="text-3xl font-black tracking-tight text-foreground">
            lululemon Gift Card
          </h1>
          <div className="mt-2 inline-flex items-center gap-1.5 border border-trust/30 bg-trust/10 text-trust rounded-full px-3 py-1 text-sm font-medium">
            <CheckCircle className="w-4 h-4" />
            Verified & Official
          </div>
        </motion.div>

        {/* Reward Card */}
        <motion.div
          className="w-full rounded-xl overflow-hidden shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="h-1.5 bg-primary w-full" />
          <div className="bg-card p-8 text-center relative">
            <div className="absolute top-4 left-4 w-2 h-2 rounded-full bg-urgency-text/40" />
            <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-muted-foreground/20" />
            <div className="absolute bottom-4 left-4 w-2 h-2 rounded-full bg-trust/30" />
            <div className="absolute bottom-4 right-4 w-2 h-2 rounded-full bg-destructive/20" />
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-semibold">
              Reward Amount
            </p>
            <p className="text-7xl font-black text-primary mt-2 tracking-tight">$750</p>
            <p className="text-muted-foreground mt-1 text-sm">deposited to you</p>
          </div>
        </motion.div>

        {/* How It Works */}
        <motion.div
          className="w-full bg-card rounded-xl p-6 shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h2 className="text-sm font-black uppercase tracking-wider text-foreground mb-5">
            How It Works
          </h2>
          <div className="flex flex-col gap-5">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                className="flex items-start gap-4"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + i * 0.08 }}
              >
                <div className="w-9 h-9 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold shrink-0">
                  {i + 1}
                </div>
                <div>
                  <p className="font-bold text-foreground text-[15px]">{step.title}</p>
                  <p className="text-muted-foreground text-sm">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.a
          href="https://linkthem.net/aff_c?offer_id=113&aff_id=12808"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-5 rounded-xl bg-primary text-primary-foreground text-lg font-bold flex items-center justify-center gap-3 shadow-lg no-underline"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, type: "spring", stiffness: 300, damping: 30 }}
        >
          Get Your $750 <ArrowRight className="w-5 h-5" />
        </motion.a>

        <p className="text-xs text-muted-foreground text-center">
          No purchase necessary. Limited time offer. T&Cs apply.
        </p>

        {/* Trustpilot */}
        <motion.div
          className="w-full bg-card rounded-xl p-6 text-center shadow-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
        >
          <p className="font-bold text-foreground text-lg">Trustpilot</p>
          <div className="flex justify-center gap-1 mt-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-trust text-trust" />
            ))}
          </div>
          <p className="text-trust font-bold mt-1">Excellent</p>
          <p className="text-muted-foreground text-sm">Based on 4,821 reviews</p>
        </motion.div>

        {/* Footer */}
        <div className="flex flex-wrap justify-center gap-4 text-xs text-muted-foreground pt-4 pb-8">
          <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
          <span className="text-border">|</span>
          <a href="#" className="hover:text-foreground transition-colors">Terms & Conditions</a>
          <span className="text-border">|</span>
          <a href="#" className="hover:text-foreground transition-colors">Contact Us</a>
          <span className="text-border">|</span>
          <a href="#" className="hover:text-foreground transition-colors">Unsubscribe</a>
        </div>
      </div>
    </div>
  );
};

export default Index;
