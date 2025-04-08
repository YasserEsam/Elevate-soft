import { Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "./ui/button";

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="max-w-7xl mx-auto  px-4 md:px-6 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Product</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-500 hover:text-gray-900">Features</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-900">Pricing</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-900">Solutions</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-900">Enterprise</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-500 hover:text-gray-900">About</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-900">Blog</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-900">Careers</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-900">Contact</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-500 hover:text-gray-900">Documentation</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-900">Help Center</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-900">API Reference</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-900">Status</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-500 hover:text-gray-900">Privacy</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-900">Terms</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-900">Security</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-900">Cookies</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">© 2024 Ahmed And Yasser. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <Twitter className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <Github className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <Linkedin className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}