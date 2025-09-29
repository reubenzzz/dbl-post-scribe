import { BlogPost } from '@/types/blog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, User } from 'lucide-react';
import { Link } from 'react-router-dom';

interface FeaturedPostProps {
  post: BlogPost;
}

export function FeaturedPost({ post }: FeaturedPostProps) {
  return (
    <section className="relative overflow-hidden rounded-2xl">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${post.imageUrl})`,
        }}
      />
      
      {/* Overlay */}
      <div className="blog-hero-overlay absolute inset-0" />
      
      {/* Content */}
      <div className="relative z-10 px-8 py-16 sm:px-12 sm:py-20 lg:px-16 lg:py-24">
        <div className="max-w-2xl">
          {/* Tag */}
          <Badge className="blog-tag mb-4 text-sm font-medium">
            {post.tags[0]}
          </Badge>
          
          {/* Title */}
          <h1 className="mb-4 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            {post.title}
          </h1>
          
          {/* Excerpt */}
          <p className="mb-6 text-lg text-white/90 sm:text-xl">
            {post.excerpt}
          </p>
          
          {/* Meta Info */}
          <div className="mb-8 flex flex-wrap items-center gap-4 text-sm text-white/80">
            <div className="flex items-center gap-1">
              <User className="h-4 w-4" />
              <span>{post.author.name}</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{post.readTime}</span>
            </div>
          </div>
          
          {/* CTA */}
          <Link to={`/blog/${post.slug}`}>
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
              Read Full Article
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}