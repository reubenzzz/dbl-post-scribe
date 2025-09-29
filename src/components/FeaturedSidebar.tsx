import { BlogPost } from '@/types/blog';
import { Badge } from '@/components/ui/badge';
import { Clock, User } from 'lucide-react';
import { Link } from 'react-router-dom';

interface FeaturedSidebarProps {
  posts: BlogPost[];
}

export function FeaturedSidebar({ posts }: FeaturedSidebarProps) {
  const sidebarPosts = posts.slice(1, 6); // Show 5 posts in sidebar

  return (
    <aside className="sidebar-section rounded-2xl p-6">
      <h2 className="mb-6 text-xl font-bold text-foreground">Other featured posts</h2>
      
      <div className="space-y-6">
        {sidebarPosts.map((post) => (
          <Link 
            key={post.id} 
            to={`/blog/${post.slug}`}
            className="group block"
          >
            <article className="flex gap-4">
              {/* Thumbnail */}
              <div className="flex-shrink-0">
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="h-16 w-16 rounded-lg object-cover transition-transform group-hover:scale-105"
                />
              </div>
              
              {/* Content */}
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-semibold leading-snug text-foreground group-hover:text-feature-accent transition-colors line-clamp-2">
                  {post.title}
                </h3>
                
                {/* Meta */}
                <div className="mt-2 flex items-center gap-3 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <User className="h-3 w-3" />
                    <span>{post.author.name}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </aside>
  );
}