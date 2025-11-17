import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Brain } from 'lucide-react';

export function CasesPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Case Simulations</h1>
        <p className="text-muted-foreground">
          Practice emergency decision-making with realistic clinical scenarios
        </p>
      </div>

      <Card className="text-center py-12">
        <CardHeader>
          <Brain className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
          <CardTitle>Coming Soon</CardTitle>
          <CardDescription>
            Interactive case simulations are currently in development.
            <br />
            Check back soon to practice your emergency response skills!
          </CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
}
