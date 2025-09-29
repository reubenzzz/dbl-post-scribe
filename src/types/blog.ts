export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    avatar: string;
  };
  publishedAt: string;
  readTime: string;
  tags: string[];
  featured: boolean;
  imageUrl: string;
  slug: string;
}

export interface BlogCategory {
  id: string;
  name: string;
  slug: string;
}