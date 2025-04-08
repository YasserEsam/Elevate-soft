import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { Button } from "./ui/button";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <Twitter className="h-4 w-4" />, label: "Twitter", href: "https://twitter.com/yourhandle" },
    { icon: <Github className="h-4 w-4" />, label: "GitHub", href: "https://github.com/yourusername" },
    { icon: <Linkedin className="h-4 w-4" />, label: "LinkedIn", href: "https://linkedin.com/in/yourprofile" },
    { icon: <Mail className="h-4 w-4" />, label: "Email", href: "mailto:contact@example.com" }
  ];

  const footerLinks = [
    {
      title: "Product",
      links: [
        { label: "Features", href: "#features" },
        { label: "Pricing", href: "#pricing" },
        { label: "Solutions", href: "#solutions" },
        { label: "Enterprise", href: "#enterprise" }
      ]
    },
    {
      title: "Company",
      links: [
        { label: "About", href: "/about" },
        { label: "Blog", href: "/blog" },
        { label: "Careers", href: "/careers" },
        { label: "Contact", href: "/contact" }
      ]
    },
    {
      title: "Resources",
      links: [
        { label: "Documentation", href: "/docs" },
        { label: "Help Center", href: "/support" },
        { label: "API Reference", href: "/api" },
        { label: "Status", href: "/status" }
      ]
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy", href: "/privacy" },
        { label: "Terms", href: "/terms" },
        { label: "Security", href: "/security" },
        { label: "Cookies", href: "/cookies" }
      ]
    }
  ];

  return (
    <footer className="border-t bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {footerLinks.map((section) => (
            <div key={section.title} className="space-y-4">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a 
                      href={link.href}
                      className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300 transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © {currentYear} Ahmed And Yasser. All rights reserved.
            </p>
            <p className="text-xs mt-1 text-gray-500 dark:text-gray-500">
              Made with ❤️ for the web
            </p>
          </div>
          
          <div className="flex items-center gap-2">
            {socialLinks.map((social) => (
              <Button 
                key={social.label}
                asChild
                variant="ghost" 
                size="icon"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <a 
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}