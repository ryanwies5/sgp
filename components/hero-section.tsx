import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <div className="relative min-h-[80vh] w-full flex items-end justify-center overflow-hidden">
      {/* Full-screen background image */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent z-10" />
        <Image
          src="/next.svg"
          alt="Strengthen Gospel Project"
          fill
          priority
          className="object-cover dark:invert"
        />
      </div>

      {/* Content container - positioned at bottom center */}
      <div className="relative z-20 container mx-auto px-4 pb-16 md:pb-24 pt-40 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Strengthen Gospel Project
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Giving people something they didn&apos;t know they wanted
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-6 justify-center">
            <Button asChild size="lg" className="gap-2">
              <Link href="/contact">
                Get in Touch <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
