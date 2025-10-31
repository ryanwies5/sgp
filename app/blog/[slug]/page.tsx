import { notFound } from "next/navigation";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
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
      "This is an example blog post to demonstrate the blog functionality.",
    content: `
      <h2>Welcome to our blog</h2>
      <p>This is an example blog post. In a real application, you would fetch this content from a database or CMS.</p>
      <h3>Key Features</h3>
      <ul>
        <li>Dynamic routing with Next.js</li>
        <li>Markdown or rich text content</li>
        <li>SEO-friendly pages</li>
        <li>Fast and responsive design</li>
      </ul>
    `,
    author: "Blog Author",
    tags: ["web development", "nextjs", "blog"],
  },
];

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <article className="max-w-3xl mx-auto">
        <Card>
          <CardHeader>
            <div className="space-y-2">
              <h1 className="text-4xl font-bold">{post.title}</h1>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span>By {post.author}</span>
                <span>•</span>
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </div>
              <div className="flex gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-secondary text-secondary-foreground rounded-md text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div
              className="prose dark:prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </CardContent>
        </Card>
      </article>
    </div>
  );
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}
