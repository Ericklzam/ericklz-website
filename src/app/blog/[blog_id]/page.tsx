import { posts } from "../../../../data/constants/posts";
import BlogClient from "./BlogClient";

type Post = (typeof posts)[number];

export function generateStaticParams() {
  return posts.map((post) => ({
    blog_id: String(post.id),
  }));
}

interface PageProps {
  params: { blog_id: string };
}

export default function BlogPage({ params }: PageProps) {
  const postId = Number(params.blog_id);
  const data = posts.find((p) => p.id === postId);

  const previousPost = posts.find((proj) => proj.id === postId - 1);
  const nextPost = posts.find((proj) => proj.id === postId + 1);

  const relatedProjects = [previousPost, nextPost].filter(
    (proj): proj is Post => proj !== undefined
  );

  if (!data) {
    return <div className="text-white p-8">Post not found</div>;
  }

  return <BlogClient data={data} relatedProjects={relatedProjects} />;
}
