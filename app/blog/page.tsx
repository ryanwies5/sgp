import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  author: string;
  tags: string[];
}

// Mock blog posts data - replace with actual data fetching
const blogPosts: BlogPost[] = [
  {
    slug: "example-post",
    title: "Example Blog Post",
    date: "2025-10-31",
    excerpt:
      "This is an example blog post to demonstrate the blog functionality. Learn about dynamic routing, content management, and more.",
    author: "Blog Author",
    tags: ["web development", "nextjs", "blog"],
  },
];

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Blog</h1>
          <p className="text-muted-foreground text-lg">
            Insights, updates, and stories from our team
          </p>
        </div>

        <div className="grid gap-6">
          {blogPosts.map((post) => (
            <Card key={post.slug}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <CardTitle className="text-2xl">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="hover:underline"
                      >
                        {post.title}
                      </Link>
                    </CardTitle>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span>{post.author}</span>
                      <span>•</span>
                      <time dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </time>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2 mt-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-secondary text-secondary-foreground rounded-md text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  {post.excerpt}
                </CardDescription>
                <Button asChild variant="outline">
                  <Link href={`/blog/${post.slug}`}>Read More →</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {blogPosts.length === 0 && (
          <Card>
            <CardContent className="py-8">
              <p className="text-center text-muted-foreground">
                No blog posts yet. Check back soon!
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
