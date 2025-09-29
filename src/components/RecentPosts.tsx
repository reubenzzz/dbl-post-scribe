import { BlogPost } from '@/types/blog';
import { BlogCard } from './BlogCard';
import { Button } from '@/components/ui/button';

interface RecentPostsProps {
  posts: BlogPost[];
  showAllPosts: boolean;
  onToggleShowAll: () => void;
}

export function RecentPosts({ posts, showAllPosts, onToggleShowAll }: RecentPostsProps) {
  const displayPosts = showAllPosts ? posts : posts.slice(0, 3);

  return (
    <section>
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-3xl font-bold text-foreground">Recent Posts</h2>
        <Button 
          variant="outline" 
          onClick={onToggleShowAll}
          className="text-sm"
        >
          {showAllPosts ? 'Show Less' : 'All Posts'}
        </Button>
      </div>
      
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {displayPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
      
      {!showAllPosts && posts.length > 3 && (
        <div className="mt-12 text-center">
          <Button onClick={onToggleShowAll} size="lg">
            Load More Posts
          </Button>
        </div>
      )}
    </section>
  );
}