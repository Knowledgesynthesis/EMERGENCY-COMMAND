import { useState, useMemo } from 'react';
import { useStore } from '@/store';
import { ConditionCard } from '@/components/conditions/ConditionCard';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search } from 'lucide-react';

export function ConditionsPage() {
  const { conditions } = useStore();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = useMemo(() => {
    const cats = new Set(conditions.map((c) => c.category));
    return Array.from(cats);
  }, [conditions]);

  const filteredConditions = useMemo(() => {
    return conditions.filter((condition) => {
      const matchesSearch =
        searchQuery === '' ||
        condition.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        condition.description.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        selectedCategory === null || condition.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [conditions, searchQuery, selectedCategory]);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Emergency Conditions</h1>
        <p className="text-muted-foreground">
          Time-critical presentations requiring rapid stabilization and management
        </p>
      </div>

      {/* Search and Filter */}
      <div className="space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
          <Input
            placeholder="Search conditions..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          <Badge
            variant={selectedCategory === null ? 'default' : 'outline'}
            className="cursor-pointer"
            onClick={() => setSelectedCategory(null)}
          >
            All
          </Badge>
          {categories.map((category) => (
            <Badge
              key={category}
              variant={selectedCategory === category ? 'default' : 'outline'}
              className="cursor-pointer capitalize"
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Badge>
          ))}
        </div>
      </div>

      {/* Conditions Grid */}
      {filteredConditions.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredConditions.map((condition) => (
            <ConditionCard key={condition.id} condition={condition} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No conditions found matching your search.</p>
        </div>
      )}
    </div>
  );
}
