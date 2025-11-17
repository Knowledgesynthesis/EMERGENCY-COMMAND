import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { AlertTriangle } from 'lucide-react';

export function RedFlagsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Red Flag Recognition</h1>
        <p className="text-muted-foreground">
          Master identification of high-risk symptoms requiring immediate action
        </p>
      </div>

      <Card className="text-center py-12">
        <CardHeader>
          <AlertTriangle className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
          <CardTitle>Coming Soon</CardTitle>
          <CardDescription>
            Red flag recognition training is currently in development.
            <br />
            Check back soon to practice identifying critical warning signs!
          </CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
}
