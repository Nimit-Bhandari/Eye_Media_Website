import React from 'react';
import { Eye, Menu } from 'lucide-react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { px } from 'motion/react';

const Header: React.FC = () => {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center bg-foreground text-black dark:bg-black overflow-hidden">
      <a href="/" className="flex items-center justify-center">
        <img src="/assets/images/logo2.jpg" className="w-16 mx-2" />
        <span className="font-bold text-xl">Eye Media</span>
      </a>
      <nav className="hidden ml-auto lg:flex gap-4 sm:gap-6 items-center">
        <a className="text-sm font-medium hover:underline underline-offset-4" href="#services">
          Services
        </a>
        <a className="text-sm font-medium hover:underline underline-offset-4" href="#portfolio">
          Portfolio
        </a>
        <a className="text-sm font-medium hover:underline underline-offset-4" href="#testimonials">
          Testimonials
        </a>
        <a className="text-sm font-medium hover:underline underline-offset-4" href="#contact">
          Contact
        </a>
        {/* <ModeToggle /> */}
      </nav>
      <div className="lg:hidden ml-auto">
        <DropdownMenu modal={false}>
          <DropdownMenuTrigger asChild>
            <Menu className="h-6 w-6 mr-2" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <nav className="ml-auto flex flex-col gap-4 sm:gap-6 items-center bg-foreground">
              {/* <ModeToggle /> */}
              <a className="text-sm font-medium hover:underline underline-offset-4 py-2" href="#services">
                Services
              </a>
              <a className="text-sm font-medium hover:underline underline-offset-4 py-2" href="#portfolio">
                Portfolio
              </a>
              <a className="text-sm font-medium hover:underline underline-offset-4 py-2" href="#testimonials">
                Testimonials
              </a>
              <a className="text-sm font-medium hover:underline underline-offset-4 py-2" href="#contact">
                Contact
              </a>
            </nav>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default Header;
