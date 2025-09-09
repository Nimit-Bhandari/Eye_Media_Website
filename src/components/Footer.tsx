import React from 'react';
import {Github} from 'lucide-react'

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-black text-white">
      <p className="text-xs">© 2025 Eye Media. All rights reserved.</p>
      <nav className="sm:ml-auto flex gap-4 sm:gap-6">
        <p className='flex gap-2'>Site Developed By: <a href="https://github.com/priyanshu-batham/" className='cursor-pointer'><Github /></a></p>
        {/* <a className="text-xs hover:underline underline-offset-4" href="#">
          Terms of Service
        </a> */}
        {/* <a className="text-xs hover:underline underline-offset-4" href="#">
          Privacy
        </a> */}
      </nav>
    </footer>
  );
};

export default Footer;

