"use client";

import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";

export function FeatureSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
              Our Mission
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Strengthening Your Digital Presence
            </h2>
            <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We specialize in creating powerful, responsive web applications
              that help businesses connect with their audience. Our team
              combines technical expertise with creative design to deliver
              solutions that stand out in today&apos;s digital landscape.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg">Learn More</Button>
              <Button size="lg" variant="outline">
                Contact Us
              </Button>
            </div>
          </div>
          <Card>
            <CardContent className="p-6">
              <AspectRatio
                ratio={16 / 9}
                className="bg-muted rounded-md overflow-hidden"
              >
                <Image
                  src="/globe.svg"
                  alt="Our work in action"
                  fill
                  className="object-cover dark:invert"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <p className="text-white text-sm">Our innovative solutions</p>
                </div>
              </AspectRatio>
            </CardContent>
            <CardHeader>
              <CardTitle>Innovative Solutions</CardTitle>
              <CardDescription>
                Our portfolio showcases a range of projects from e-commerce
                platforms to content management systems, all built with modern
                technologies and best practices.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </section>
  );
}
