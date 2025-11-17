import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { FileText } from 'lucide-react';

export function AssessmentsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Assessments</h1>
        <p className="text-muted-foreground">
          Test your knowledge with evidence-based emergency medicine questions
        </p>
      </div>

      <Card className="text-center py-12">
        <CardHeader>
          <FileText className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
          <CardTitle>Coming Soon</CardTitle>
          <CardDescription>
            Assessment modules are currently in development.
            <br />
            Check back soon to test your emergency medicine knowledge!
          </CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
}
