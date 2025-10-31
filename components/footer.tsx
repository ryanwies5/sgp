import Link from "next/link";
import {
  Twitter,
  Github,
  Linkedin,
  Instagram,
  Youtube,
  Facebook,
  Mail,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full border-t py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center text-center gap-6">
          <div className="flex flex-col items-center gap-2 max-w-lg">
            <h3 className="font-semibold">Strengthen Gospel Project</h3>
            <p className="text-sm text-muted-foreground">
              Showcasing our work and making it effortless to get in touch.
            </p>
          </div>

          <div className="flex gap-6 items-center justify-center">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={22} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={22} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={22} />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="YouTube"
            >
              <Youtube size={22} />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github size={22} />
            </a>
            <a
              href="mailto:contact@example.com"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Email"
            >
              <Mail size={22} />
            </a>
          </div>

          <div className="flex gap-4 mt-2">
            <Link
              href="/about"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </Link>
            <Link
              href="/blog"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Blog
            </Link>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t flex justify-center items-center">
          <p className="text-xs text-muted-foreground text-center">
            © {new Date().getFullYear()} Strengthen Gospel Project. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
