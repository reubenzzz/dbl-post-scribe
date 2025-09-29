import { BlogPost } from '@/types/blog';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, User } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Link to={`/blog/${post.slug}`} className="group block">
      <article className="blog-card h-full overflow-hidden rounded-2xl">
        {/* Image */}
        <div className="aspect-[16/10] overflow-hidden">
          <img
            src={post.imageUrl}
            alt={post.title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        
        {/* Content */}
        <div className="p-6">
          {/* Tags */}
          <div className="mb-3 flex flex-wrap gap-2">
            {post.tags.slice(0, 2).map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
          
          {/* Title */}
          <h3 className="mb-3 text-xl font-bold leading-tight text-foreground group-hover:text-feature-accent transition-colors">
            {post.title}
          </h3>
          
          {/* Excerpt */}
          <p className="mb-4 text-muted-foreground line-clamp-2">
            {post.excerpt}
          </p>
          
          {/* Meta */}
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <User className="h-4 w-4" />
              <span>{post.author.name}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}