import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { motion } from "motion/react"
import { Label } from "@/components/ui/label"

import { useRef, useState, FormEvent } from "react";
import emailjs from "@emailjs/browser";


const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [messageStatus, setMessageStatus] = useState<string>("");

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID as string, // Replace with your actual Service ID
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string, // Replace with your actual Template ID
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string // Replace with your actual Public Key from EmailJS
      )
      .then(
        (result) => {
          console.log("Success:", result.text);
          setMessageStatus("Message Sent Successfully! ✅");
          form.current!.reset(); // Reset form after submission
        },
        (error) => {
          console.error("Error:", error.text);
          setMessageStatus("Failed to Send Message ❌");
        }
      );
  };
  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32 dark:bg-gray-800">
      <motion.div initial={{ opacity: 0, y: 200 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.7
        }} className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">Contact Us</h2>
        <form ref={form} onSubmit={sendEmail} className="max-w-md mx-auto space-y-4">
          <Label htmlFor="from_name">Your Name</Label>
          <Input id="name" name="from_name" required />

          <Label htmlFor="user_email">Your Email</Label>
          <Input id="email" name="user_email" type="email" required />

          <Label htmlFor="message">Your Message</Label>
          <Textarea id="message" name="message" required />

          <Button type="submit" className="w-full">Send Message</Button>
        </form>
        <div className="text-center mt-6">
        <img 
          src="/assets/images/im4.jpeg" 
          alt="Contact illustration" 
          className="mx-auto rounded-lg w-23  max-w-xs h-auto object-cover"
        />
        <p className="mt-4 text-white dark:text-gray-300 text-sm leading-relaxed">
    <strong>Address:</strong> 4/203, Vibhav Khand, Gomti Nagar, Lucknow, India.
  </p>
      </div>

        {messageStatus && <p className="mt-4 text-center">{messageStatus}</p>}
      </motion.div>
    </section>
  );
};

export default Contact;

