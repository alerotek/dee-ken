import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, MapPin, Palette, Calendar, Clock } from "lucide-react";
import alerotekLogo from "@/assets/alerotek-log.png";
import HeartSprinkles from "@/components/HeartSprinkles";
import FloatingHearts from "@/components/FloatingHearts";
import CupidArrow from "@/components/CupidArrow";
import CountdownTimer from "@/components/CountdownTimer";
import RSVPForm from "@/components/RSVPForm";
import couplePhoto from "@/assets/couple-photo.jpeg";
import invitationCard from "@/assets/invitation-card.jpeg";

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } },
};

// Blended man + woman icons (chocolate brown ↔ gray)
const ManIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
    <circle cx="12" cy="4" r="2.2" />
    <path d="M8 9h8l-1.2 7H15v6h-2v-6h-2v6H9v-6h-.8L7 9z" />
  </svg>
);

const WomanIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
    <circle cx="12" cy="4" r="2.2" />
    <path d="M9 9h6l2.5 7H15v6h-2v-4h-2v4H9v-6H6.5L9 9z" />
  </svg>
);

const Index = () => {
  const [showContent, setShowContent] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <HeartSprinkles onComplete={() => setShowContent(true)} />
      <FloatingHearts />
      <CupidArrow />

      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1.5 }}
        >
          {/* HERO SECTION */}
          <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${couplePhoto})` }}
            />
            {/* Stronger overlay so hero text is highly legible */}
            <div className="absolute inset-0 bg-gradient-to-b from-wedding-dark/85 via-wedding-dark/65 to-background" />
            <div className="absolute inset-0 bg-wedding-dark/40" />

            <motion.div
              className="relative z-10 text-center px-6 py-20 max-w-3xl"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.5, duration: 1.2 }}
            >
              {/* Blended couple icons */}
              <div className="flex items-center justify-center gap-2 mb-6">
                <WomanIcon className="h-10 w-10 text-icon-blend drop-shadow-lg" />
                <Heart className="h-5 w-5 text-accent fill-accent animate-heartbeat" />
                <ManIcon className="h-10 w-10 text-icon-blend drop-shadow-lg" />
              </div>

              <p className="text-wedding-cream font-serif-elegant text-sm sm:text-base tracking-[0.35em] uppercase mb-6 text-shadow-elegant">
                Together with their families
              </p>

              <h1 className="font-script text-7xl sm:text-8xl md:text-9xl text-accent mb-6 leading-tight text-shadow-elegant">
                Dee &amp; Ken
              </h1>

              <div className="flex items-center justify-center gap-3 mb-8">
                <div className="h-px w-16 bg-accent" />
                <Heart className="h-5 w-5 text-accent fill-accent animate-heartbeat" />
                <div className="h-px w-16 bg-accent" />
              </div>

              <p className="font-serif-elegant text-xl sm:text-2xl text-wedding-cream italic text-shadow-elegant">
                We warmly invite you to join us in celebrating our traditional wedding.
              </p>

              <div className="mt-10 space-y-2">
                <p className="font-serif-elegant text-2xl sm:text-3xl text-wedding-cream flex items-center justify-center gap-2 text-shadow-elegant">
                  <Calendar className="h-5 w-5 text-accent" />
                  Saturday, August 1st, 2026
                </p>
                <p className="font-serif-elegant text-lg text-wedding-cream/90 flex items-center justify-center gap-2 text-shadow-elegant">
                  <Clock className="h-4 w-4 text-accent" />
                  9:00 AM
                </p>
              </div>

              <motion.div
                className="mt-12"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                <span className="text-accent text-3xl">↓</span>
              </motion.div>
            </motion.div>
          </section>

          {/* COUNTDOWN */}
          <section className="py-20 px-6 bg-card">
            <motion.div
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-w-2xl mx-auto text-center"
            >
              <h2 className="font-script text-4xl sm:text-5xl text-accent mb-2">Counting Down</h2>
              <p className="font-serif-elegant text-muted-foreground mb-10 italic">Counting down to love, culture & celebration</p>
              <CountdownTimer />
            </motion.div>
          </section>

          {/* INVITATION CARD - large & prominent */}
          <section className="py-24 px-4 relative">
            <motion.div
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="font-script text-5xl sm:text-6xl text-accent text-center mb-4">
                Our Invitation
              </h2>
              <p className="text-center font-serif-elegant text-muted-foreground italic mb-10">
                A keepsake from us to you
              </p>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
                className="rounded-3xl overflow-hidden shadow-2xl border-[6px] border-accent/40 animate-pulse-glow bg-card"
              >
                <img
                  src={invitationCard}
                  alt="Dee & Ken Wedding Invitation Card"
                  className="w-full h-auto block"
                />
              </motion.div>
            </motion.div>
          </section>

          {/* EVENT DETAILS - with new theme colors */}
          <section className="py-20 px-6 bg-card">
            <motion.div
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-w-md mx-auto text-center space-y-10"
            >
              <h2 className="font-script text-4xl sm:text-5xl text-accent mb-6">Event Details</h2>

              <div className="flex flex-col items-center gap-2">
                <MapPin className="h-7 w-7 text-accent" />
                <p className="font-serif-elegant text-xl text-foreground">Sega, Ugenya</p>
                <p className="text-muted-foreground text-sm">Venue details to follow</p>
              </div>

              <div className="flex flex-col items-center gap-4">
                <Palette className="h-7 w-7 text-accent" />
                <p className="font-serif-elegant text-xl text-foreground">Dress Code</p>

                {/* Ladies */}
                <div className="w-full bg-background/50 rounded-2xl p-4 border border-border">
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <WomanIcon className="h-6 w-6 text-icon-blend" />
                    <p className="font-serif-elegant text-lg text-foreground">Ladies</p>
                  </div>
                  <div className="flex items-center justify-center gap-3">
                    <div className="flex flex-col items-center gap-1">
                      <div className="w-12 h-12 rounded-full bg-wedding-brown border-2 border-accent/40 shadow-md" />
                      <span className="text-xs text-muted-foreground">Chocolate</span>
                    </div>
                    <span className="text-accent">&amp;</span>
                    <div className="flex flex-col items-center gap-1">
                      <div className="w-12 h-12 rounded-full bg-wedding-cream border-2 border-accent/40 shadow-md" />
                      <span className="text-xs text-muted-foreground">Cream</span>
                    </div>
                  </div>
                </div>

                {/* Men */}
                <div className="w-full bg-background/50 rounded-2xl p-4 border border-border">
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <ManIcon className="h-6 w-6 text-icon-blend" />
                    <p className="font-serif-elegant text-lg text-foreground">Men</p>
                  </div>
                  <div className="flex items-center justify-center gap-3">
                    <div className="flex flex-col items-center gap-1">
                      <div className="w-12 h-12 rounded-full bg-wedding-gray border-2 border-accent/40 shadow-md" />
                      <span className="text-xs text-muted-foreground">Gray</span>
                    </div>
                    <span className="text-accent">&amp;</span>
                    <div className="flex flex-col items-center gap-1">
                      <div className="w-12 h-12 rounded-full bg-wedding-gray-dark border-2 border-accent/40 shadow-md" />
                      <span className="text-xs text-muted-foreground">Charcoal</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </section>

          {/* EVENT FLOW - with gold leaf animation */}
          <section className="py-20 px-6 bg-gradient-to-b from-background via-amber-50/10 to-background relative overflow-hidden">
            {/* Animated gold leaves background */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute text-amber-400/30"
                  initial={{ 
                    x: Math.random() * 100 + "%", 
                    y: "-10%", 
                    rotate: 0,
                    scale: 0.5 + Math.random() * 0.5
                  }}
                  animate={{ 
                    y: "110%", 
                    rotate: 360 + Math.random() * 360,
                    x: Math.random() * 100 + "%"
                  }}
                  transition={{ 
                    duration: 15 + Math.random() * 10, 
                    repeat: Infinity, 
                    delay: i * 2,
                    ease: "linear"
                  }}
                  style={{ fontSize: `${20 + Math.random() * 30}px` }}
                >
                  🍃
                </motion.div>
              ))}
            </div>

            <motion.div
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-w-lg mx-auto text-center relative z-10"
            >
              <div className="flex items-center justify-center gap-3 mb-4">
                <motion.span 
                  className="text-3xl"
                  animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  🌿
                </motion.span>
                <h2 className="font-script text-4xl sm:text-5xl text-accent">Event Flow</h2>
                <motion.span 
                  className="text-3xl"
                  animate={{ rotate: [0, -10, 10, 0], scale: [1, 1.1, 1] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                >
                  🌿
                </motion.span>
              </div>
              <p className="font-serif-elegant text-sm text-muted-foreground mb-10">— Dee & Ken —</p>

              <div className="space-y-8">
                {/* 30th July */}
                <motion.div 
                  className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 border border-amber-200/50 shadow-lg"
                  whileHover={{ scale: 1.02, borderColor: "rgba(251, 191, 36, 0.5)" }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <Calendar className="h-5 w-5 text-amber-500" />
                    <span className="font-serif-elegant text-lg text-foreground font-semibold">30th July</span>
                  </div>
                  <p className="text-muted-foreground">
                    The Privileged Ladies & Gents Bonding Night in <span className="text-amber-600 font-medium">Kisumu City</span>
                  </p>
                </motion.div>

                {/* 31st July - Queens Eve in Sega */}
                <motion.div 
                  className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 border border-amber-200/50 shadow-lg"
                  whileHover={{ scale: 1.02, borderColor: "rgba(251, 191, 36, 0.5)" }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <Calendar className="h-5 w-5 text-amber-500" />
                    <span className="font-serif-elegant text-lg text-foreground font-semibold">✨ 31st July</span>
                  </div>
                  <div className="space-y-2">
                    <p className="text-muted-foreground">
                      <span className="text-amber-600">👑</span> The Gents Eve Night in <span className="text-amber-600 font-medium">Bondo</span>
                    </p>
                    <p className="text-muted-foreground">
                      <span className="text-amber-600">👸</span> The Queens Eve Night in <span className="text-amber-600 font-medium">Sega</span>
                    </p>
                  </div>
                </motion.div>

                {/* 1st August - Main Event */}
                <motion.div 
                  className="bg-gradient-to-br from-amber-50/80 to-orange-50/80 backdrop-blur-sm rounded-2xl p-6 border-2 border-amber-400/60 shadow-xl relative overflow-hidden"
                  whileHover={{ scale: 1.03, boxShadow: "0 20px 40px rgba(251, 191, 36, 0.2)" }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Golden shimmer effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-200/30 to-transparent"
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                  />
                  
                  <div className="relative z-10">
                    <div className="flex items-center justify-center gap-2 mb-3">
                      <Calendar className="h-6 w-6 text-amber-600" />
                      <span className="font-serif-elegant text-xl text-foreground font-bold">1st August</span>
                      <motion.span 
                        className="text-2xl"
                        animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        💍
                      </motion.span>
                    </div>
                    <p className="font-serif-elegant text-lg text-amber-700 font-semibold mb-2">
                      The "Nyombo"
                    </p>
                    <p className="text-amber-600/80 italic">
                      (Traditional Wedding)
                    </p>
                    <div className="mt-4 pt-4 border-t border-amber-300/30">
                      <p className="text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4 inline mr-1" />
                        Sega, Ugenya
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </section>

          {/* RSVP */}
          <section id="rsvp" className="py-20 px-6">
            <motion.div
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-w-lg mx-auto text-center"
            >
              <h2 className="font-script text-4xl sm:text-5xl text-accent mb-2">RSVP</h2>
              <p className="font-serif-elegant text-muted-foreground mb-10 italic">
                Kindly respond by June 15th, 2026
              </p>
              <RSVPForm />
            </motion.div>
          </section>

          {/* FOOTER */}
          <footer className="py-10 text-center bg-primary text-primary-foreground">
            <p className="font-script text-3xl mb-2">Dee &amp; Ken</p>
            <p className="font-serif-elegant text-sm opacity-80">August 1st, 2026 • Sega, Ugenya</p>
            <div className="mt-4 opacity-70 hover:opacity-100 transition-opacity">
              <p className="text-xs mb-1">Powered by</p>
              <a 
                href="https://wa.me/254792602608?text=Dee%20%26%20Ken%20request%20the%20pleasure%20of%20your%20company%20at%20their%20traditional%20wedding%20celebration%20%F0%9F%92%8D"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-1"
              >
                <span className="text-sm font-semibold hover:underline">Alerotek</span>
                <img src={alerotekLogo} alt="Alerotek" className="h-6 w-auto" />
              </a>
            </div>
          </footer>
        </motion.div>

        {/* Floating RSVP Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 3.5, duration: 0.5, ease: "easeOut" }}
          whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(251, 191, 36, 0.6)" }}
          whileTap={{ scale: 0.95 }}
          onClick={() => document.getElementById('rsvp')?.scrollIntoView({ behavior: 'smooth' })}
          className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-serif-elegant px-5 py-3 rounded-full shadow-lg flex items-center gap-2 animate-pulse-glow hover:from-amber-400 hover:to-orange-400 transition-all"
        >
          <span className="text-lg">💌</span>
          <span className="text-sm font-semibold">RSVP Now</span>
        </motion.button>
      </AnimatePresence>
    </div>
  );
};

export default Index;
