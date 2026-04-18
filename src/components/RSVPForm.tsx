import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Heart } from "lucide-react";

const WHATSAPP_NUMBER = "254701956469"; // Dee & Ken wedding coordinator

const RSVPForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [guests, setGuests] = useState("1");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = encodeURIComponent(
      `🎉 RSVP for Dee & Ken's Wedding!\n\n👤 Name: ${name}\n📞 Phone: ${phone}\n👥 Guests: ${guests}\n\nLooking forward to celebrating with you! 💕`
    );
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto space-y-5"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <div className="space-y-2">
        <Label htmlFor="name" className="text-foreground font-serif-elegant text-base">
          Full Name
        </Label>
        <Input
          id="name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your full name"
          className="border-accent/40 bg-card focus:border-accent focus:ring-accent"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone" className="text-foreground font-serif-elegant text-base">
          Phone Number
        </Label>
        <Input
          id="phone"
          required
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="+254 7XX XXX XXX"
          className="border-accent/40 bg-card focus:border-accent focus:ring-accent"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="guests" className="text-foreground font-serif-elegant text-base">
          Plus one?
        </Label>
        <p className="text-sm text-muted-foreground italic">
          Just checking 😄 will you be rolling solo or bringing a plus one
        </p>
        <Input
          id="guests"
          required
          type="number"
          min="1"
          max="10"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
          className="border-accent/40 bg-card focus:border-accent focus:ring-accent"
        />
      </div>

      <Button
        type="submit"
        className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-serif-elegant text-lg py-6 rounded-full animate-pulse-glow"
      >
        <Heart className="mr-2 h-5 w-5" />
        RSVP Now
      </Button>

      <p className="text-center text-xs text-muted-foreground">
        You'll be redirected to our WhatsApp chat after submitting
      </p>
    </motion.form>
  );
};

export default RSVPForm;
