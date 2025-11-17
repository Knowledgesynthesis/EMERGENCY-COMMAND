import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { BookOpen } from 'lucide-react';

export function GlossaryPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Medical Glossary</h1>
        <p className="text-muted-foreground">
          Quick reference for emergency medicine terminology and protocols
        </p>
      </div>

      <Card className="text-center py-12">
        <CardHeader>
          <BookOpen className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
          <CardTitle>Coming Soon</CardTitle>
          <CardDescription>
            The medical glossary is currently in development.
            <br />
            Check back soon for quick reference definitions and protocols!
          </CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
}
