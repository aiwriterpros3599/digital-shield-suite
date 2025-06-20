
import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface Category {
  id: string;
  name: string;
  count: number;
}

interface BlogCategoriesProps {
  categories: Category[];
  selectedCategory: string;
  onCategoryChange: (categoryId: string) => void;
}

export const BlogCategories: React.FC<BlogCategoriesProps> = ({
  categories,
  selectedCategory,
  onCategoryChange
}) => {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((category) => (
        <Button
          key={category.id}
          variant={selectedCategory === category.id ? "default" : "outline"}
          size="sm"
          onClick={() => onCategoryChange(category.id)}
          className="relative"
        >
          {category.name}
          <Badge 
            variant="secondary" 
            className="ml-2 text-xs"
          >
            {category.count}
          </Badge>
        </Button>
      ))}
    </div>
  );
};
