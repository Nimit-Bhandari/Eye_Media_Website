import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { motion } from "motion/react"
import { Label } from "@/components/ui/label"
import { useRef, useState, FormEvent } from "react";
import emailjs from "@emailjs/browser";


const Hero: React.FC = () => {
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
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 max-sm:relative overflow-hidden bg-[url('/assets/images/im3.jpg')] bg-cover bg-center">           
  

      <div className="max-md:min-h-[70vh] container flex flex-col md:flex-row items-center justify-center px-4 md:px-6">

        {/* Left Content */}
        <motion.div initial={{ opacity: 0, y: 200 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.7
          }} className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="font-tan leading-10 font-normal tracking-tighter text-5xl md:text-7xl">
              Welcome to
            </h1>
            <h1 className="max-md:text-6xl text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-9xl/none">Eye Media</h1>
            <h1 className="max-md:text-6xl text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-9xl/none">Solutions</h1>
            <p className="italic mx-auto max-w-[700px] md:text-xl text-foreground dark:text-white">
              All Eyes On Your Media
            </p>
          </div>
          <div className="space-x-4">
            <Button variant="outline">Get Started</Button>
            <Drawer>
              <DrawerTrigger><Button variant="outline">Contact</Button></DrawerTrigger>
              <DrawerContent>
                <DrawerHeader>
                  <DrawerTitle><h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">Contact Us</h2></DrawerTitle>
                  <div className="container px-4 md:px-6 mx-auto">
                    <form ref={form} onSubmit={sendEmail} className="max-w-md mx-auto space-y-4">
                      <Label htmlFor="name">Your Name</Label>
                      <Input id="name" name="user_name" required />

                      <Label htmlFor="email">Your Email</Label>
                      <Input id="email" name="user_email" type="email" required />

                      <Label htmlFor="message">Your Message</Label>
                      <Textarea id="message" name="message" required />

                      <Button type="submit" className="w-full">Send Message</Button>
                    </form>
                    {messageStatus && <p className="mt-4 text-center">{messageStatus}</p>}
                  </div>
                </DrawerHeader>
              </DrawerContent>
            </Drawer>
          </div>
        </motion.div>

        {/* Right Icon */}
        {/* <motion.div initial={{ opacity: 0, y: 200 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7
          }} className="">
          <img src="assets/images/logo1.jpg" className='w-[350px] mx-10' />
        </motion.div> */}
      </div>
    </section>
  );
};

export default Hero;

