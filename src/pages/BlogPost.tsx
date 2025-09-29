import { useParams, Link } from 'react-router-dom';
import { mockBlogPosts } from '@/data/mockBlogData';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, User, ArrowLeft } from 'lucide-react';
import { BlogHeader } from '@/components/BlogHeader';
import { useState } from 'react';

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const [searchQuery, setSearchQuery] = useState('');
  
  const post = mockBlogPosts.find(p => p.slug === slug);
  
  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <BlogHeader searchQuery={searchQuery} onSearchChange={setSearchQuery} />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold">Post not found</h1>
          <Link to="/">
            <Button className="mt-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <BlogHeader searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      
      <main className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Blog
        </Link>

        <article className="max-w-4xl mx-auto">
          {/* Header */}
          <header className="mb-8">
            <div className="mb-4 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Badge key={tag} className="blog-tag">
                  {tag}
                </Badge>
              ))}
            </div>
            
            <h1 className="mb-6 text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
              <div className="flex items-center gap-2">
                <User className="h-5 w-5" />
                <span className="font-medium">{post.author.name}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                <span>{new Date(post.publishedAt).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          <div className="mb-12 aspect-[16/9] overflow-hidden rounded-2xl">
            <img
              src={post.imageUrl}
              alt={post.title}
              className="h-full w-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <div className="text-xl leading-relaxed text-muted-foreground mb-8">
              {post.excerpt}
            </div>
            
            <div 
              className="text-foreground leading-relaxed"
              dangerouslySetInnerHTML={{ 
                __html: post.content.replace(/\n/g, '<br />').replace(/## (.*)/g, '<h2 class="text-2xl font-bold mt-8 mb-4 text-foreground">$1</h2>').replace(/### (.*)/g, '<h3 class="text-xl font-semibold mt-6 mb-3 text-foreground">$1</h3>').replace(/- \*\*(.*?)\*\*: (.*)/g, '<li class="mb-2"><strong class="text-foreground">$1:</strong> $2</li>').replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground">$1</strong>')
              }}
            />
          </div>
        </article>
      </main>
    </div>
  );
}