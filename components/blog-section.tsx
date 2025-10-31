"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";

// Mock blog data
const blogPosts = [
  {
    id: 1,
    title: "Getting Started with Next.js",
    description:
      "Learn the basics of Next.js and start building your first app",
    image: "/file.svg",
    date: "September 1, 2025",
    slug: "getting-started-with-nextjs",
  },
  {
    id: 2,
    title: "Building UI with Shadcn Components",
    description:
      "A comprehensive guide to using Shadcn UI components in your projects",
    image: "/window.svg",
    date: "August 25, 2025",
    slug: "building-ui-with-shadcn",
  },
  {
    id: 3,
    title: "The Future of Web Development",
    description:
      "Exploring upcoming trends and technologies in web development",
    image: "/globe.svg",
    date: "August 15, 2025",
    slug: "future-of-web-development",
  },
];

export function BlogSection() {
  return (
    <section className="w-full py-12 md:py-24 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Latest Blog Posts
          </h2>
          <p className="mt-4 text-muted-foreground md:text-xl max-w-[700px]">
            Stay updated with our latest articles and insights
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Card key={post.id} className="flex flex-col h-full">
              <CardContent className="p-0">
                <AspectRatio
                  ratio={16 / 9}
                  className="bg-muted overflow-hidden rounded-t-xl"
                >
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover dark:invert transition-all hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </AspectRatio>
              </CardContent>
              <CardHeader>
                <div className="text-sm text-muted-foreground mb-2">
                  {post.date}
                </div>
                <CardTitle className="text-xl">{post.title}</CardTitle>
                <CardDescription>{post.description}</CardDescription>
              </CardHeader>
              <CardFooter className="mt-auto">
                <Button
                  asChild
                  variant="ghost"
                  className="gap-1 p-0 h-auto font-medium"
                >
                  <Link href={`/blog/${post.slug}`}>
                    Read More <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Button asChild variant="outline" size="lg">
            <Link href="/blog">View All Posts</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
