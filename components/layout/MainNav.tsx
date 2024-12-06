"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { BookOpen, Home } from "lucide-react";

export function MainNav() {
  const pathname = usePathname();

  return (
    <nav className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Button variant="ghost" size="sm" className="gap-2">
                <Home className="h-5 w-5" />
                <span className="font-medium">Survey Questions</span>
              </Button>
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link href="/blog">
              <Button 
                variant="ghost" 
                size="sm" 
                className={cn(
                  "gap-2",
                  pathname.startsWith("/blog") && "bg-primary/5 text-primary"
                )}
              >
                <BookOpen className="h-5 w-5" />
                <span>Best Practices</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}