import { Dribbble, Facebook, Github, Instagram, Twitter } from "lucide-react";
import Link from "next/link";
const navigation = {
  main: [
    { name: "About", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Jobs", href: "#" },
    { name: "Press", href: "#" },
    { name: "Accessibility", href: "#" },
    { name: "Partners", href: "#" },
  ],
  social: [
    {
      name: "Facebook",
      href: "#",
      icon: (props) => <Facebook size={32} className="stroke-current" />,
    },
    {
      name: "Instagram",
      href: "#",
      icon: (props) => <Instagram size={32} className="stroke-current" />,
    },
    {
      name: "Twitter",
      href: "#",
      icon: (props) => <Twitter size={32} className="stroke-current" />,
    },
    {
      name: "GitHub",
      href: "#",
      icon: (props) => <Github size={32} className="stroke-current" />,
    },
    {
      name: "Dribbble",
      href: "#",
      icon: (props) => <Dribbble size={32} className="stroke-current" />,
    },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-">
      <div className="mx-auto max-w-7xl overflow-hidden py-12 px-4 sm:px-6 lg:px-8">
        <nav
          className="-mx-5 -my-2 flex flex-wrap justify-center"
          aria-label="Footer"
        >
          {navigation.main.map((item) => (
            <div key={item.name} className="px-5 py-2">
              <Link
                href={item.href}
                className="text-base text-gray-500 hover:text-primary"
              >
                {item.name}
              </Link>
            </div>
          ))}
        </nav>
        <div className="mt-8 flex justify-center space-x-6">
          {navigation.social.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-gray-400 hover:text-primary"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </Link>
          ))}
        </div>
        <p className="mt-8 text-center text-base text-gray-400">
          &copy; 2020 Your Company, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
