import { Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm">© 2024 EzBooks. All rights reserved.</div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white transition-colors">
              <Facebook size={20} />
            </a>
            <a href="#" className="hover:text-white transition-colors">
              <Twitter size={20} />
            </a>
            <a href="#" className="hover:text-white transition-colors">
              <Instagram size={20} />
            </a>
            <a href="#" className="hover:text-white transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="#" className="hover:text-white transition-colors">
              <Github size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
