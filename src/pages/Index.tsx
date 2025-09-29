import { useState, useMemo } from 'react';
import { BlogHeader } from '@/components/BlogHeader';
import { FeaturedPost } from '@/components/FeaturedPost';
import { FeaturedSidebar } from '@/components/FeaturedSidebar';
import { RecentPosts } from '@/components/RecentPosts';
import { mockBlogPosts, featuredPosts } from '@/data/mockBlogData';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showAllPosts, setShowAllPosts] = useState(false);

  // Filter posts based on search query
  const filteredPosts = useMemo(() => {
    if (!searchQuery.trim()) return mockBlogPosts;
    
    const query = searchQuery.toLowerCase();
    return mockBlogPosts.filter(post => 
      post.title.toLowerCase().includes(query) ||
      post.excerpt.toLowerCase().includes(query) ||
      post.tags.some(tag => tag.toLowerCase().includes(query)) ||
      post.author.name.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  const mainFeaturedPost = featuredPosts[0];

  return (
    <div className="min-h-screen bg-background">
      <BlogHeader searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      
      <main className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Hero Section with Featured Post and Sidebar */}
        {!searchQuery && (
          <section className="mb-16 grid gap-8 lg:grid-cols-3">
            {/* Featured Post */}
            <div className="lg:col-span-2">
              <FeaturedPost post={mainFeaturedPost} />
            </div>
            
            {/* Featured Sidebar */}
            <div className="lg:col-span-1">
              <FeaturedSidebar posts={featuredPosts} />
            </div>
          </section>
        )}

        {/* Search Results or Recent Posts */}
        <RecentPosts 
          posts={filteredPosts}
          showAllPosts={showAllPosts}
          onToggleShowAll={() => setShowAllPosts(!showAllPosts)}
        />

        {/* No Results */}
        {searchQuery && filteredPosts.length === 0 && (
          <div className="py-16 text-center">
            <h3 className="text-xl font-semibold text-foreground mb-2">No posts found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search terms or browse our featured posts above.
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Index;
