import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface BlogHeaderProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export function BlogHeader({ searchQuery, onSearchChange }: BlogHeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <span className="text-sm font-bold">B</span>
            </div>
            <span className="text-xl font-bold">Beyond UI</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-foreground hover:text-feature-accent transition-colors">
              Homepage
            </a>
            <a href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
              About us
            </a>
            <a href="/features" className="text-muted-foreground hover:text-foreground transition-colors">
              Features
            </a>
            <a href="/blog" className="text-foreground font-medium hover:text-feature-accent transition-colors">
              Blog
            </a>
            <a href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
              Contact us
            </a>
            <a href="/demo" className="text-muted-foreground hover:text-foreground transition-colors">
              Demo
            </a>
          </nav>

          {/* Search */}
          <div className="flex items-center space-x-4">
            <div className="relative hidden sm:block">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search posts..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-64 pl-10"
              />
            </div>
            <Button variant="default" size="sm" className="hidden md:inline-flex">
              Get Started
            </Button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="pb-4 sm:hidden">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search posts..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full pl-10"
            />
          </div>
        </div>
      </div>
    </header>
  );
}