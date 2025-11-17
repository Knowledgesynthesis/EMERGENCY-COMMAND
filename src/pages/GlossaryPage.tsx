import { useState, useMemo } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Search } from 'lucide-react';
import { glossaryTerms } from '@/data/glossary';

export function GlossaryPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = useMemo(() => {
    const cats = new Set(glossaryTerms.map((t) => t.category));
    return Array.from(cats).sort();
  }, []);

  const filteredTerms = useMemo(() => {
    return glossaryTerms
      .filter((term) => {
        const matchesSearch =
          searchQuery === '' ||
          term.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
          term.definition.toLowerCase().includes(searchQuery.toLowerCase());

        const matchesCategory =
          selectedCategory === null || term.category === selectedCategory;

        return matchesSearch && matchesCategory;
      })
      .sort((a, b) => a.term.localeCompare(b.term));
  }, [searchQuery, selectedCategory]);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Medical Glossary</h1>
        <p className="text-muted-foreground">
          Quick reference for emergency medicine terminology and protocols
        </p>
      </div>

      {/* Search and Filter */}
      <div className="space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
          <Input
            placeholder="Search terms or definitions..."
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
              className="cursor-pointer"
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Badge>
          ))}
        </div>
      </div>

      {/* Terms List */}
      {filteredTerms.length > 0 ? (
        <div className="space-y-4">
          {filteredTerms.map((term) => (
            <Card key={term.id}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl mb-1">{term.term}</CardTitle>
                    <Badge variant="outline" className="text-xs">
                      {term.category}
                    </Badge>
                  </div>
                  <BookOpen className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm">{term.definition}</p>

                {term.clinicalPearl && (
                  <div className="bg-accent/30 border-l-4 border-primary pl-4 py-2">
                    <div className="text-xs font-semibold text-primary mb-1">
                      💎 Clinical Pearl
                    </div>
                    <p className="text-sm">{term.clinicalPearl}</p>
                  </div>
                )}

                {term.relatedTerms && term.relatedTerms.length > 0 && (
                  <div>
                    <div className="text-xs font-semibold text-muted-foreground mb-2">
                      Related Terms:
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {term.relatedTerms.map((relatedTerm, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {relatedTerm}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <Card className="text-center py-12">
          <CardHeader>
            <BookOpen className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
            <CardTitle>No Terms Found</CardTitle>
            <CardDescription>
              Try adjusting your search or filter criteria.
            </CardDescription>
          </CardHeader>
        </Card>
      )}

      {/* Summary */}
      <div className="text-sm text-muted-foreground text-center">
        Showing {filteredTerms.length} of {glossaryTerms.length} terms
      </div>
    </div>
  );
}
